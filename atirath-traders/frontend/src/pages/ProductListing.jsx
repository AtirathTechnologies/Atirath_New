import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import SEO from "../components/SEO";
import { useProducts } from "../context/ProductsContext";
import "../styles/productlisting.css";

// Helper: shuffle array
const shuffleArray = (arr) => {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const ProductListing = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { products, loading, error, categoryTree } = useProducts();

  // Filter state
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [activeType, setActiveType] = useState(null);

  // Sidebar expand states
  const [expandedCategories, setExpandedCategories] = useState({});
  const [expandedSubcategories, setExpandedSubcategories] = useState({});

  // Sync from URL
  useEffect(() => {
    const catParam = searchParams.get("category");
    if (catParam) {
      setActiveCategory(catParam);
      setActiveSubcategory(null);
      setActiveType(null);
      setExpandedCategories({});
      setExpandedSubcategories({});
    } else {
      setActiveCategory(null);
      setActiveSubcategory(null);
      setActiveType(null);
      setExpandedCategories({});
      setExpandedSubcategories({});
    }
  }, [searchParams]);

  const updateUrlCategory = (category) => {
    setSearchParams({ category });
  };

  // Handlers
  const handleCategoryClick = (categoryName) => {
    if (activeCategory === categoryName && !activeSubcategory && !activeType) {
      // Toggle expand if already active with no deeper selection
      setExpandedCategories(prev => ({
        ...prev,
        [categoryName]: !prev[categoryName]
      }));
    } else {
      setActiveCategory(categoryName);
      setActiveSubcategory(null);
      setActiveType(null);
      setExpandedCategories(prev => ({ ...prev, [categoryName]: true }));
      setExpandedSubcategories({});
      updateUrlCategory(categoryName);
    }
  };

  const handleSubcategoryClick = (categoryName, subcategoryName) => {
    setActiveCategory(categoryName);
    setActiveSubcategory(subcategoryName);
    setActiveType(null);
    // Expand this subcategory's types
    setExpandedSubcategories(prev => ({
      ...prev,
      [`${categoryName}-${subcategoryName}`]: true
    }));
    updateUrlCategory(categoryName);
  };

  const handleTypeClick = (categoryName, subcategoryName, typeName) => {
    setActiveCategory(categoryName);
    setActiveSubcategory(subcategoryName);
    setActiveType(typeName);
    updateUrlCategory(categoryName);
  };

  // Toggle expand category (arrow click)
  const toggleCategoryExpand = (categoryName, e) => {
    e.stopPropagation();
    setExpandedCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  // Toggle expand subcategory
  const toggleSubcategoryExpand = (key, e) => {
    e.stopPropagation();
    setExpandedSubcategories(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Filter products
  const getDisplayProducts = () => {
    if (loading) return { products: [], message: null, loading: true };
    if (error) return { products: [], message: error, loading: false };
    if (!products.length) return { products: [], message: "No products found.", loading: false };

    if (!activeCategory) {
      return { products: [], message: "👈 Select a category to browse products.", loading: false };
    }

    let filtered = products.filter(p => p.category === activeCategory);
    if (activeSubcategory) {
      filtered = filtered.filter(p => p.subcategory === activeSubcategory);
    }
    if (activeType) {
      filtered = filtered.filter(p => p.subcategoryType === activeType);
    }

    if (filtered.length === 0) {
      let msg = `No products found in ${activeCategory}`;
      if (activeSubcategory) msg += ` / ${activeSubcategory}`;
      if (activeType) msg += ` / ${activeType}`;
      return { products: [], message: msg, loading: false };
    }

    if (!activeSubcategory && !activeType) {
      filtered = shuffleArray(filtered);
    }
    return { products: filtered, message: null, loading: false };
  };

  const { products: displayProducts, message: displayMessage, loading: isLoading } = getDisplayProducts();

  return (
    <div className="product-page">
      <SEO 
        title="Products" 
        description="Browse our extensive catalog of high-quality products including agriculture, food & beverages, textiles, electronics, home & lifestyle, and auto parts."
        keywords="atirath traders products, agriculture catalog, food imports, textile exports, auto parts supply"
      />
      <div className="container">
        {/* Header */}
        <div className="product-header">
          <div className="header-left">
            <p className="breadcrumb">Home › Products</p>
            <h2>All Products</h2>
            <p className="subtitle">
              {activeCategory 
                ? `Showing ${activeCategory} products${activeSubcategory ? ` › ${activeSubcategory}` : ""}${activeType ? ` › ${activeType}` : ""}`
                : "Discover our wide range of quality products from trusted global suppliers."}
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

        {/* Main layout */}
        <div className="product-layout">
          <div className="sidebar">
            <div className="filter-section">
              <div className="filter-header">
                <h4>Categories</h4>
              </div>
              <ul className="category-list">
                {categoryTree.map(cat => {
                  const isCatExpanded = expandedCategories[cat.name];
                  const hasSubcategories = cat.children.length > 0;
                  const isCatActive = activeCategory === cat.name && !activeSubcategory && !activeType;
                  
                  return (
                    <li key={cat.name} className="category-item-wrapper">
                      <div 
                        className={`category-item ${isCatActive ? "active" : ""}`}
                        onClick={() => handleCategoryClick(cat.name)}
                      >
                        <span>{cat.name} <span>({cat.count})</span></span>
                        {hasSubcategories && (
                          <span 
                            className="arrow" 
                            onClick={(e) => toggleCategoryExpand(cat.name, e)}
                          >
                            {isCatExpanded ? "⌄" : ">"}
                          </span>
                        )}
                      </div>
                      {hasSubcategories && isCatExpanded && (
                        <ul className="nested-list">
                          {cat.children.map(sub => {
                            const subKey = `${cat.name}-${sub.name}`;
                            const isSubExpanded = expandedSubcategories[subKey];
                            const hasTypes = sub.children.length > 0;
                            const isSubActive = activeCategory === cat.name && activeSubcategory === sub.name && !activeType;
                            
                            return (
                              <li key={sub.name} className="category-item-wrapper">
                                <div 
                                  className={`category-item subcategory-item ${isSubActive ? "active" : ""}`}
                                  onClick={() => handleSubcategoryClick(cat.name, sub.name)}
                                >
                                  <span>{sub.name} <span>({sub.count})</span></span>
                                  {hasTypes && (
                                    <span 
                                      className="arrow"
                                      onClick={(e) => toggleSubcategoryExpand(subKey, e)}
                                    >
                                      {isSubExpanded ? "⌄" : ">"}
                                    </span>
                                  )}
                                </div>
                                {hasTypes && isSubExpanded && (
                                  <ul className="nested-list">
                                    {sub.children.map(type => {
                                      const isTypeActive = activeCategory === cat.name && 
                                                          activeSubcategory === sub.name && 
                                                          activeType === type.name;
                                      return (
                                        <li key={type.name} className="category-item-wrapper">
                                          <div 
                                            className={`category-item type-item ${isTypeActive ? "active" : ""}`}
                                            onClick={() => handleTypeClick(cat.name, sub.name, type.name)}
                                          >
                                            <span>{type.name} <span>({type.count})</span></span>
                                          </div>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
              <p className="view-all">View All Categories</p>
            </div>

            {/* Static filters */}
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

          {/* Products Grid */}
          <div className="products">
            {isLoading ? (
              <div className="loading-spinner">Loading products...</div>
            ) : displayMessage ? (
              <div className="empty-message">{displayMessage}</div>
            ) : (
              <div className="product-grid">
                {displayProducts.map((p, idx) => (
                  <div className="card whatsapp-card" key={idx}>
                    <div className="img-box">
                      <img src={p.img} alt={p.name} onError={(e) => { e.target.src = "/placeholder.jpg"; }} />
                    </div>
                    <div className="card-body whatsapp-style">
                      <span className="category-badge">{p.brand}</span>
                      <h4>{p.name}</h4>
                      <p className="short-desc">{p.shortDesc}</p>
                      <div className="product-price">{p.priceDisplay}</div>
                      <div className="product-meta">
                        <div className="meta-item"><span className="meta-icon">⚖️</span> quantity: {p.quantityDisplay}</div>
                        <div className="meta-item"><span className="meta-icon">📍</span> Origin: {p.origin}</div>
                        <div className="meta-item"><span className="meta-icon">📦</span> Pack Type: {p.packTypes}</div>
                      </div>
                      <div className="card-actions">
                        <button className="btn-view" onClick={() => {
                          navigate("/product-details", { state: { product: p, firebaseId: p.id } });
                        }}>View Details</button>
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

export default ProductListing;