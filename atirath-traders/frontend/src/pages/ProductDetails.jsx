// pages/ProductDetails.jsx
import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { database } from "../firebase";
import { ref, get } from "firebase/database";
import SEO from "../components/SEO";
import "../styles/productdetails.css";

// Helper: correct image path
const getImagePath = (rawPath) => {
  if (!rawPath) return "/placeholder.jpg";
  if (rawPath.startsWith("/")) return rawPath;
  if (rawPath.startsWith("img/")) return `/${rawPath}`;
  return `/${rawPath}`;
};

// Transform raw Firebase product to UI-friendly format
const transformProduct = (raw, id) => {
  const name = raw.name || "Unnamed Product";
  const brand = raw.brand || "Unknown Brand";
  const category = raw.category || "Agriculture";
  const categoryTitle = raw.categoryTitle || (raw.riceType === "Basmati" ? "Basmati Rice" : "Non-Basmati Rice");
  const riceType = raw.riceType || "Basmati";
  const origin = raw.origin || "India";
  const subcategory = raw.subcategory || raw.categoryTitle || "General";

  // SHORT description for product cards (from meta.description)
  let shortDesc = raw.meta?.description;
  if (!shortDesc && raw.productDetails?.features?.length) {
    shortDesc = raw.productDetails.features[0];
  }
  if (!shortDesc) shortDesc = "No description available";

  // LONG description for product details page (from the "description" field in JSON)
  let longDescription = raw.description || shortDesc;
  if (!longDescription) longDescription = shortDesc;

  const minPrice = raw.meta?.price_range?.min ?? 0;
  const maxPrice = raw.meta?.price_range?.max ?? 0;

  const quantityUnits = raw.configurations?.quantityUnits;
  let packSize = "N/A";
  if (quantityUnits && Array.isArray(quantityUnits) && quantityUnits.length > 0) {
    packSize = quantityUnits.length === 1
      ? quantityUnits[0]
      : `${quantityUnits[0]}-${quantityUnits[quantityUnits.length - 1]}`;
  }

  const packTypes = raw.configurations?.packingTypes || [];

  const mainImage = getImagePath(raw.image);
  const gallery = (raw.gallery || []).map(getImagePath);

  const pricePerMT = raw.productDetails?.pricePerMT || "N/A";
  const moq = raw.productDetails?.moq || "N/A";
  const supplyAbility = raw.productDetails?.supplyAbility || "N/A";
  const leadTime = raw.productDetails?.leadTime || "N/A";
  const features = raw.productDetails?.features || [];

  let specs = [];
  if (raw.specifications && typeof raw.specifications === "object") {
    specs = Object.entries(raw.specifications).map(([key, value]) => ({
      label: key.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase()),
      value: value
    }));
  }
  if (raw.configurations?.packingTypes?.length > 0) {
    specs.push({
      label: "Pack Types",
      value: raw.configurations.packingTypes.join(", ")
    });
  }
  if (raw.configurations?.quantityUnits?.length > 0) {
    specs.push({
      label: "Pack Sizes",
      value: raw.configurations.quantityUnits.join(", ")
    });
  }

  let supplier = null;
  if (raw.supplier) {
    supplier = {
      name: raw.supplier.name || "Unknown Supplier",
      type: raw.supplier.type || "Supplier",
      location: raw.supplier.location || "India",
      rating: raw.supplier.rating || 0,
      reviews: raw.supplier.reviews || 0,
      experience: raw.supplier.experience || "N/A",
      deliveryRate: raw.supplier.deliveryRate || "N/A",
      responseTime: raw.supplier.responseTime || "N/A",
      image: raw.supplier.image || "https://randomuser.me/api/portraits/men/default.jpg"
    };
  }

  return {
    id,
    name,
    brand,
    category,
    categoryTitle,
    riceType,
    origin,
    subcategory,
    shortDesc,
    longDescription,
    minPackPrice: minPrice,
    maxPackPrice: maxPrice,
    packSize,
    packTypes,
    mainImage,
    gallery,
    pricePerMT,
    moq,
    supplyAbility,
    leadTime,
    features,
    specs,
    supplier
  };
};

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const productFromState = location.state?.product;
  const firebaseIdFromState = location.state?.firebaseId;

  const [product, setProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const productsRef = ref(database, "products");
        const snapshot = await get(productsRef);
        if (!snapshot.exists()) {
          setError("No products found in database.");
          setLoading(false);
          return;
        }

        const data = snapshot.val();
        const allProductsArray = Object.entries(data).map(([id, raw]) => transformProduct(raw, id));
        setAllProducts(allProductsArray);

        let currentProduct = null;
        if (productFromState && productFromState.id) {
          currentProduct = allProductsArray.find(p => p.id === productFromState.id);
        } else if (firebaseIdFromState) {
          currentProduct = allProductsArray.find(p => p.id === firebaseIdFromState);
        } else if (productFromState && productFromState.name) {
          currentProduct = allProductsArray.find(p => p.name === productFromState.name && p.brand === productFromState.brand);
        }

        if (!currentProduct) {
          setError("Product not found. Please go back and try again.");
          setLoading(false);
          return;
        }

        setProduct(currentProduct);

        // Improved related products logic
        let related = [];

        // 1. Try same category + same subcategory (works for Agriculture, Food & Beverages, etc.)
        if (currentProduct.category === "Agriculture") {
          // Agriculture: same subcategory (Rice, Spices, Dried Fruits)
          related = allProductsArray.filter(p =>
            p.id !== currentProduct.id &&
            p.category === currentProduct.category &&
            p.subcategory === currentProduct.subcategory
          );
        } 
        else if (currentProduct.category === "Food & Beverages") {
          // Food & Beverages: same subcategory (Snacks, Chocolate)
          related = allProductsArray.filter(p =>
            p.id !== currentProduct.id &&
            p.category === currentProduct.category &&
            p.subcategory === currentProduct.subcategory
          );
          // If still not enough, further refine: for Snacks, also match snacksType (Biscuits/Popcorn)
          if (related.length < 2 && currentProduct.subcategory === "Snacks" && currentProduct.snacksType) {
            const moreRelated = allProductsArray.filter(p =>
              p.id !== currentProduct.id &&
              p.category === currentProduct.category &&
              p.subcategory === "Snacks" &&
              p.snacksType === currentProduct.snacksType
            );
            related = [...related, ...moreRelated];
          }
          // If still not enough, fallback to same category
          if (related.length === 0) {
            related = allProductsArray.filter(p =>
              p.id !== currentProduct.id &&
              p.category === currentProduct.category
            );
          }
        }
        else {
          // For other categories (Textiles, Electronics, Home & Lifestyle, Auto Parts):
          // just same category
          related = allProductsArray.filter(p =>
            p.id !== currentProduct.id &&
            p.category === currentProduct.category
          );
        }

        // 2. If no related products found, try same brand OR same subcategory
        if (related.length === 0) {
          related = allProductsArray.filter(p =>
            p.id !== currentProduct.id &&
            (p.brand === currentProduct.brand || p.subcategory === currentProduct.subcategory)
          );
        }

        // 3. Final fallback: any other product
        if (related.length === 0) {
          related = allProductsArray.filter(p => p.id !== currentProduct.id);
        }

        // Remove duplicates (in case of overlapping filters) and limit to 10
        const uniqueRelated = related.filter((prod, index, self) =>
          index === self.findIndex(p => p.id === prod.id)
        );
        setRelatedProducts(uniqueRelated.slice(0, 10));

      } catch (err) {
        console.error("Firebase fetch error:", err);
        setError("Failed to load product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productFromState, firebaseIdFromState]);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
  };

  const handleRelatedClick = (relatedProduct) => {
    navigate("/product-details", { state: { product: relatedProduct, firebaseId: relatedProduct.id } });
    window.scrollTo(0, 0);
  };

  if (loading) {
    return (
      <div className="product-details-page">
        <div className="container">
          <div className="loading-spinner" style={{ textAlign: "center", padding: "80px" }}>Loading product details...</div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="product-details-page">
        <div className="container">
          <div className="empty-message" style={{ textAlign: "center", padding: "80px", color: "red" }}>
            {error || "Product not found"}
          </div>
        </div>
      </div>
    );
  }

  const mainImage = product.mainImage || "/placeholder.jpg";
  const galleryImages = product.gallery && product.gallery.length > 0 ? product.gallery : [mainImage];
  const breadcrumb = `Home › Products › ${product.categoryTitle || product.subcategory || "Product"} › ${product.name}`;

  return (
    <div className="product-details-page">
      <SEO 
        title={product.name} 
        description={`Buy ${product.name} from ${product.brand}. High-quality ${product.categoryTitle} sourced from ${product.origin}. Check price per MT, MOQ, and specifications.`}
        keywords={`${product.name}, ${product.brand}, ${product.categoryTitle}, atirath traders, import ${product.name}, export ${product.name}`}
      />
      <div className="container">

        <p className="breadcrumb">{breadcrumb}</p>

        <div className="details-top">
          <div className="details-left">
            <div className="main-img">
              <img 
                src={mainImage} 
                alt={product.name}
                onError={(e) => { e.target.src = "/placeholder.jpg"; }}
              />
            </div>
            <div className="thumbs">
              {galleryImages.slice(0, 6).map((img, idx) => (
                <img 
                  key={idx} 
                  src={img} 
                  alt={`${product.name} ${idx + 1}`}
                  onError={(e) => { e.target.src = "/placeholder.jpg"; }}
                />
              ))}
            </div>
          </div>

          <div className="details-center">
            <span className="brand-badge">{product.brand}</span>
            <h2>{product.name}</h2>
            <p className="category">{product.categoryTitle || product.subcategory || "Product"}</p>

            <h3 className="price">
              {product.pricePerMT} <span>/ Metric Ton (MT)</span>
            </h3>

            <div className="info-boxes">
              <div><b>MOQ</b><br />{product.moq}</div>
              <div><b>Supply Ability</b><br />{product.supplyAbility}</div>
              <div><b>Lead Time</b><br />{product.leadTime}</div>
            </div>

            <ul className="features">
              {product.features.length > 0 ? (
                product.features.map((feature, i) => <li key={i}>✔ {feature}</li>)
              ) : (
                <li>✔ Premium quality product</li>
              )}
            </ul>

            <div className="btn-group">
              <button className="rfq">Request for Quote (RFQ)</button>
              <button className="cart">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="product-info-row">
          <div className="info-card desc-card">
            <h3>Product Description</h3>
            <div className="underline"></div>
            {product.longDescription.split('\n').map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          <div className="info-card spec-card">
            <h3>Specifications</h3>
            <div className="underline"></div>
            <div className="spec-list">
              {product.specs && product.specs.length > 0 ? (
                product.specs.map((spec, idx) => (
                  <div className="spec-row" key={idx}>
                    <span>{spec.label}</span>
                    <b>{spec.value}</b>
                  </div>
                ))
              ) : (
                <>
                  <div className="spec-row"><span>Origin</span><b>{product.origin}</b></div>
                  <div className="spec-row"><span>Pack Size</span><b>{product.packSize}</b></div>
                </>
              )}
            </div>
          </div>

          {product.supplier && (
            <div className="info-card supplier-card-new">
              <h3>Supplier Details</h3>
              <div className="underline"></div>
              <div className="supplier-top">
                <img 
                  src={product.supplier.image} 
                  alt="supplier"
                  onError={(e) => { e.target.src = "https://randomuser.me/api/portraits/men/default.jpg"; }}
                />
                <div>
                  <h4>{product.supplier.name}</h4>
                  <p>{product.supplier.type}</p>
                  <p>{product.supplier.location}</p>
                  <span>⭐ {product.supplier.rating} ({product.supplier.reviews})</span>
                </div>
              </div>
              <div className="supplier-stats-new">
                <div><b>{product.supplier.experience}</b><span>Years</span></div>
                <div><b>{product.supplier.deliveryRate}</b><span>Delivery</span></div>
                <div><b>{product.supplier.responseTime}</b><span>Response</span></div>
              </div>
              <button className="profile">View Profile</button>
              <button className="contact">Contact Us</button>
            </div>
          )}
        </div>

        <div className="related">
          <div className="related-header">
            <h3>You May Also Like</h3>
            <div className="view-all" onClick={() => navigate("/products")}>View Full Products →</div>
          </div>
          <div className="related-slider">
            <button className="slider-btn left" onClick={scrollLeft}>❮</button>
            <button className="slider-btn right" onClick={scrollRight}>❯</button>
            <div className="related-scroll" ref={scrollRef}>
              {relatedProducts.map((relProd) => (
                <div
                  key={relProd.id}
                  className="related-card"
                  onClick={() => handleRelatedClick(relProd)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="img-box">
                    <img 
                      src={relProd.mainImage || "/placeholder.jpg"} 
                      alt={relProd.name}
                      onError={(e) => { e.target.src = "/placeholder.jpg"; }}
                    />
                  </div>
                  <h4>{relProd.name}</h4>
                  <p className="card-price">{relProd.pricePerMT} <span>/ MT</span></p>
                  <p className="moq">{relProd.moq}</p>
                </div>
              ))}
              {relatedProducts.length === 0 && (
                <div style={{ padding: "20px", textAlign: "center", minWidth: "200px" }}>No related products found</div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;