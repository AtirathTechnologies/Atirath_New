import React, { createContext, useContext, useEffect, useState } from "react";
import { database } from "../firebase";
import { ref, get } from "firebase/database";

// Helper: correct image path
const getImagePath = (rawPath) => {
  if (!rawPath) return "/placeholder.jpg";
  if (rawPath.startsWith("/")) return rawPath;
  if (rawPath.startsWith("img/")) return `/${rawPath}`;
  return `/${rawPath}`;
};

// Transform Firebase product to UI format
const transformProduct = (raw, id) => {
  const name = raw.name || "Unnamed Product";
  const brand = raw.brand || "Unknown Brand";
  const brandImage = raw.brandImage ? getImagePath(raw.brandImage) : null;
  const category = raw.category || "Agri Products";
  const subcategory = raw.subcategory || "";
  const subcategoryType = raw.subcategoryType || null;
  const origin = raw.origin || "India";

  // Product card description: prioritize meta.description
  let shortDesc = raw.meta?.description;
  if (!shortDesc && raw.description) shortDesc = raw.description;
  if (!shortDesc && raw.productDetails?.features?.length) shortDesc = raw.productDetails.features[0];
  if (!shortDesc) shortDesc = "No description available";

  const fullDescription = raw.description || shortDesc;

  let priceDisplay = "";
  let quantityDisplay = "";
  let currency = "INR";

  if (raw.meta?.price_range) {
    currency = raw.pricing?.currency || "INR";
    const minPrice = raw.meta.price_range.min;
    const maxPrice = raw.meta.price_range.max;
    const symbol = currency === "USD" ? "$" : "₹";
    priceDisplay = `${symbol}${minPrice.toLocaleString()} – ${symbol}${maxPrice.toLocaleString()}`;
    const quantityUnits = raw.configurations?.quantityUnits;
    if (quantityUnits && Array.isArray(quantityUnits) && quantityUnits.length) {
      quantityDisplay = quantityUnits.length === 1
        ? quantityUnits[0]
        : `${quantityUnits[0]} – ${quantityUnits[quantityUnits.length - 1]}`;
    } else {
      quantityDisplay = "N/A";
    }
  } else if (raw.pricing?.type === "fixed") {
    currency = raw.pricing.currency || "USD";
    const basePrice = raw.pricing.basePrice || 0;
    const symbol = currency === "USD" ? "$" : "₹";
    priceDisplay = `${symbol}${basePrice} ${currency === "USD" ? "FOB" : ""}`.trim();
    const pkg = raw.packagingDetails;
    if (pkg && pkg.unit_weight && pkg.unit && pkg.units_per_carton) {
      quantityDisplay = `${pkg.unit_weight}${pkg.unit} × ${pkg.units_per_carton} carton`;
    } else if (raw.configurations?.quantityUnits?.length) {
      quantityDisplay = raw.configurations.quantityUnits[0];
    } else {
      quantityDisplay = "N/A";
    }
  } else {
    priceDisplay = "Price on request";
    quantityDisplay = "N/A";
  }

  let packTypes = raw.configurations?.packingTypes || [];
  if (!packTypes.length && raw.packagingDetails?.pack_type) {
    packTypes = [raw.packagingDetails.pack_type];
  }
  const packTypeStr = packTypes.length ? packTypes.join(", ") : "N/A";
  const img = getImagePath(raw.image);
  const moq = raw.productDetails?.moq || "N/A";
  const pricePerMT = raw.productDetails?.pricePerMT || "N/A";

  return {
    id,
    name,
    brand,
    brandImage,
    category,
    subcategory,
    subcategoryType,
    origin,
    shortDesc,
    fullDescription,
    priceDisplay,
    quantityDisplay,
    packTypes: packTypeStr,
    img,
    moq,
    pricePerMT,
  };
};

// Build nested category tree dynamically
const buildCategoryTree = (products) => {
  const tree = [];

  // Group by category
  const categoryMap = new Map();
  products.forEach(product => {
    if (!categoryMap.has(product.category)) {
      categoryMap.set(product.category, []);
    }
    categoryMap.get(product.category).push(product);
  });

  for (const [categoryName, categoryProducts] of categoryMap.entries()) {
    const categoryNode = {
      name: categoryName,
      count: categoryProducts.length,
      children: [],
      type: "category"
    };

    // Group by subcategory
    const subcategoryMap = new Map();
    categoryProducts.forEach(product => {
      const sub = product.subcategory || "Other";
      if (!subcategoryMap.has(sub)) {
        subcategoryMap.set(sub, []);
      }
      subcategoryMap.get(sub).push(product);
    });

    for (const [subcategoryName, subcategoryProducts] of subcategoryMap.entries()) {
      const subcategoryNode = {
        name: subcategoryName,
        count: subcategoryProducts.length,
        children: [],
        type: "subcategory"
      };

      // Group by subcategoryType within this subcategory
      const typeMap = new Map();
      subcategoryProducts.forEach(product => {
        if (product.subcategoryType && product.subcategoryType.trim()) {
          if (!typeMap.has(product.subcategoryType)) {
            typeMap.set(product.subcategoryType, []);
          }
          typeMap.get(product.subcategoryType).push(product);
        }
      });

      // Add type nodes as children
      for (const [typeName, typeProducts] of typeMap.entries()) {
        subcategoryNode.children.push({
          name: typeName,
          count: typeProducts.length,
          type: "subcategoryType"
        });
      }

      categoryNode.children.push(subcategoryNode);
    }

    tree.push(categoryNode);
  }

  return tree;
};

const ProductsContext = createContext();

export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [brandImages, setBrandImages] = useState({});
  const [categoryTree, setCategoryTree] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const productsRef = ref(database, "products");
        const snapshot = await get(productsRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          const productsArray = Object.entries(data).map(([id, raw]) => transformProduct(raw, id));
          setProducts(productsArray);

          const uniqueCategories = [...new Set(productsArray.map(p => p.category))];
          setCategories(uniqueCategories);

          const uniqueBrands = [...new Set(productsArray.map(p => p.brand))];
          setBrands(uniqueBrands);

          const brandImagesMap = {};
          productsArray.forEach(product => {
            if (product.brand && product.brandImage && !brandImagesMap[product.brand]) {
              brandImagesMap[product.brand] = product.brandImage;
            }
          });
          uniqueBrands.forEach(brand => {
            if (!brandImagesMap[brand]) brandImagesMap[brand] = "/placeholder-brand.png";
          });
          setBrandImages(brandImagesMap);

          const tree = buildCategoryTree(productsArray);
          setCategoryTree(tree);
        } else {
          setProducts([]);
          setCategories([]);
          setBrands([]);
          setBrandImages({});
          setCategoryTree([]);
        }
      } catch (err) {
        console.error("Firebase fetch error:", err);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const value = { products, loading, error, categories, brands, brandImages, categoryTree };
  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};