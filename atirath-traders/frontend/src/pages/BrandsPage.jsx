import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import SEO from "../components/SEO";
import { useProducts } from "../context/ProductsContext";
import "../styles/productlisting.css";

const BrandsPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { products, brands, brandImages, loading, error } = useProducts();

  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");
  const [openBrandsMenu, setOpenBrandsMenu] = useState(true);
  const [openCategoriesMenu, setOpenCategoriesMenu] = useState(true);
  const [showAllBrands, setShowAllBrands] = useState(false); // toggle for sidebar brands

  // Read brand from URL
  useEffect(() => {
    const brandParam = searchParams.get("brand");
    if (brandParam && brands.includes(brandParam)) {
      setSelectedBrand(brandParam);
      setSelectedSubcategory("All");
    } else {
      setSelectedBrand(null);
      setSelectedSubcategory("All");
    }
  }, [searchParams, brands]);

  const getSubcategoriesForBrand = (brandName) => {
    const brandProducts = products.filter(p => p.brand === brandName);
    const uniqueSubcats = [...new Set(brandProducts.map(p => p.subcategory))];
    return ["All", ...uniqueSubcats.sort()];
  };

  const getFilteredProducts = () => {
    if (!selectedBrand) return [];
    let filtered = products.filter(p => p.brand === selectedBrand);
    if (selectedSubcategory && selectedSubcategory !== "All") {
      filtered = filtered.filter(p => p.subcategory === selectedSubcategory);
    }
    return filtered;
  };

  const displayProducts = getFilteredProducts();
  const subcategories = selectedBrand ? getSubcategoriesForBrand(selectedBrand) : [];

  const handleBrandClick = (brandName) => {
    setSelectedBrand(brandName);
    setSelectedSubcategory("All");
    setSearchParams({ brand: brandName });
  };

  const clearBrandFilter = () => {
    setSelectedBrand(null);
    setSelectedSubcategory("All");
    setSearchParams({});
  };

  const handleSubcategoryClick = (subcat) => {
    setSelectedSubcategory(subcat);
    if (selectedBrand) {
      setSearchParams({ brand: selectedBrand });
    }
  };

  const handleViewDetails = (product, e) => {
    e.stopPropagation();
    navigate("/product-details", { state: { product, firebaseId: product.id } });
  };

  // Determine which brands to show in sidebar
  const displayedBrands = showAllBrands ? brands : brands.slice(0, 6);

  if (loading) {
    return (
      <div className="product-page">
        <div className="container">
          <div className="loading-spinner" style={{ textAlign: "center", padding: "80px" }}>
            Loading brands & products...
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-page">
        <div className="container">
          <div className="empty-message" style={{ textAlign: "center", padding: "80px", color: "red" }}>
            {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-page">
      <SEO 
        title={selectedBrand ? `${selectedBrand} Products` : "Our Brands"} 
        description={selectedBrand ? `Explore the complete range of products from ${selectedBrand}. High-quality items sourced and exported by Atirath Traders.` : "Discover the global brands partnered with Atirath Traders. Quality products across multiple categories."}
        keywords={selectedBrand ? `${selectedBrand} products, ${selectedBrand} atirath traders, brand products india` : "atirath traders brands, global trading partners, branded agriculture products"}
      />
      <div className="container">
        {/* PRODUCT HEADER */}
        <div className="product-header">
          <div className="header-left">
            <p className="breadcrumb">Home › Brands</p>
            <h2>{selectedBrand ? `${selectedBrand} Products` : "All Brands"}</h2>
            <p className="subtitle">
              {selectedBrand
                ? selectedSubcategory === "All"
                  ? `Showing all products from ${selectedBrand}`
                  : `Showing ${selectedSubcategory} from ${selectedBrand}`
                : "Select a brand from the sidebar to view products"}
            </p>
          </div>
          <div className="header-right">
            <div className="sort-box">
              <span>Sort By:</span>
              <select>
                <option>Newest First</option>
                <option>Price Low to High</option>
                <option>Price High to Low</option>
              </select>
            </div>
            <div className="view-icons">
              <button><i className="fas fa-th"></i></button>
              <button><i className="fas fa-bars"></i></button>
            </div>
          </div>
        </div>

        {/* MAIN LAYOUT */}
        <div className="product-layout">
          <div className="sidebar">
            {/* BRANDS SECTION - now with "View All Brands" toggle */}
            <div className="filter-section">
              <div className="filter-header">
                <h4>Brands</h4>
                <span
                  className="toggle-icon"
                  onClick={() => setOpenBrandsMenu(!openBrandsMenu)}
                  style={{ cursor: "pointer" }}
                >
                  {openBrandsMenu ? "⌃" : "⌄"}
                </span>
              </div>
              {openBrandsMenu && (
                <>
                  <ul className="category-list" style={{ marginTop: "10px" }}>
                    {displayedBrands.map((brand) => (
                      <li
                        key={brand}
                        style={{
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          padding: "8px 0",
                          color: selectedBrand === brand ? "#ff6b00" : "inherit",
                          fontWeight: selectedBrand === brand ? "600" : "normal"
                        }}
                        onClick={() => handleBrandClick(brand)}
                      >
                        <img 
                          src={brandImages[brand] || "/placeholder-brand.png"} 
                          alt={brand} 
                          style={{ width: "30px", height: "30px", objectFit: "contain" }} 
                          onError={(e) => { e.target.src = '/placeholder-brand.png'; }}
                        />
                        <span>{brand}</span>
                      </li>
                    ))}
                  </ul>
                  {brands.length > 6 && (
                    <div 
                      className="view-all-brands-btn"
                      onClick={() => setShowAllBrands(!showAllBrands)}
                    >
                      {showAllBrands ? "Show Less" : "View All Brands"}
                    </div>
                  )}
                </>
              )}
            </div>

            {/* PRODUCT CATEGORIES (only if brand selected) */}
            {selectedBrand && (
              <div className="filter-section">
                <div className="filter-header">
                  <h4>Product Categories</h4>
                  <span
                    className="toggle-icon"
                    onClick={() => setOpenCategoriesMenu(!openCategoriesMenu)}
                    style={{ cursor: "pointer" }}
                  >
                    {openCategoriesMenu ? "⌃" : "⌄"}
                  </span>
                </div>
                {openCategoriesMenu && (
                  <ul className="category-list" style={{ marginTop: "10px" }}>
                    {subcategories.map((subcat, idx) => (
                      <li
                        key={idx}
                        style={{
                          cursor: "pointer",
                          color: selectedSubcategory === subcat ? "#ff6b00" : "inherit",
                          fontWeight: selectedSubcategory === subcat ? "600" : "normal"
                        }}
                        onClick={() => handleSubcategoryClick(subcat)}
                      >
                        {subcat === "All" ? "All Products" : subcat}
                        <span>(
                          {subcat === "All"
                            ? products.filter(p => p.brand === selectedBrand).length
                            : products.filter(p => p.brand === selectedBrand && p.subcategory === subcat).length}
                        )</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* STATIC FILTERS (unchanged) */}
            <div className="filter-header top">
              <h4>Filter By</h4>
              <span className="clear">Clear All</span>
            </div>
            <div className="filter-section">
              <p className="filter-title">Price Range</p>
              <div className="range-values"><span>$10</span><span>$5000+</span></div>
              <input type="range" className="range" />
            </div>
            <div className="filter-section">
              <p className="filter-title">Minimum Order Quantity (MOQ)</p>
              <div className="moq-box"><input type="text" placeholder="Enter MOQ" /><button>OK</button></div>
            </div>
            <div className="filter-section">
              <p className="filter-title">Country of Origin</p>
              <label><input type="checkbox" /> India <span>(245)</span></label>
              <label><input type="checkbox" /> China <span>(208)</span></label>
              <label><input type="checkbox" /> USA <span>(128)</span></label>
              <label><input type="checkbox" /> Germany <span>(95)</span></label>
              <label><input type="checkbox" /> Turkey <span>(75)</span></label>
              <p className="view-more">+ View More</p>
            </div>
            <div className="filter-section">
              <p className="filter-title">Supplier Type</p>
              <label><input type="checkbox" />Verified Suppliers</label>
              <label><input type="checkbox" />Gold Suppliers 👑</label>
            </div>
            <div className="filter-buttons">
              <button className="apply">Apply Filters</button>
              <button className="reset">Reset</button>
            </div>
          </div>

          {/* PRODUCTS DISPLAY */}
          <div className="products">
            {!selectedBrand ? (
              <div style={{ textAlign: "center", padding: "60px 20px", background: "#fff", borderRadius: "12px", border: "1px solid #e5e7eb" }}>
                <i className="fas fa-trademark" style={{ fontSize: "48px", color: "#ff6b00", marginBottom: "20px" }}></i>
                <h3 style={{ color: "#0b2c5f", marginBottom: "10px" }}>Select a Brand to View Products</h3>
                <p style={{ color: "#6b7280" }}>Click on any brand logo from the sidebar.</p>
              </div>
            ) : displayProducts.length === 0 ? (
              <div style={{ textAlign: "center", padding: "50px", color: "#666", fontSize: "1.1rem", background: "#fff", borderRadius: "12px" }}>
                😔 No products found for {selectedBrand} in {selectedSubcategory !== "All" ? selectedSubcategory : "this category"}.
              </div>
            ) : (
              <div className="product-grid">
                {displayProducts.map((p, idx) => (
                  <div className="card whatsapp-card" key={idx}>
                    <div className="img-box">
                      <img
                        src={p.img}
                        alt={p.name}
                        onError={(e) => { e.target.src = "/placeholder.jpg"; }}
                      />
                    </div>
                    <div className="card-body whatsapp-style">
                      <span className="category-badge">{p.brand}</span>
                      <h4>{p.name}</h4>
                      <p className="short-desc">{p.shortDesc}</p>
                      <div className="product-price">{p.priceDisplay}</div>
                      <div className="product-meta">
                        <div className="meta-item">
                          <span className="meta-icon">⚖️</span> quantity: {p.quantityDisplay}
                        </div>
                        <div className="meta-item">
                          <span className="meta-icon">📍</span> Origin: {p.origin}
                        </div>
                        <div className="meta-item">
                          <span className="meta-icon">📦</span> Pack Type: {p.packTypes}
                        </div>
                      </div>
                      <div className="card-actions">
                        <button className="btn-view" onClick={(e) => handleViewDetails(p, e)}>View Details</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsPage;