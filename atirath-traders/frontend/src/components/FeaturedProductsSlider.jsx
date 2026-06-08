import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useProducts } from '../context/ProductsContext';

const FeaturedProductsSlider = () => {
  const navigate = useNavigate();
  const { products, loading } = useProducts();
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const scrollRef = useRef();

  useEffect(() => {
    if (products && products.length > 0) {
      // Shuffle products randomly
      const shuffled = [...products].sort(() => 0.5 - Math.random());
      // Take top 10 products
      setFeaturedProducts(shuffled.slice(0, 10));
    }
  }, [products]);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  };

  if (loading) {
    return null;
  }

  if (featuredProducts.length === 0) {
    return null;
  }

  return (
    <section className="products-section">
      <div className="container">
        <div className="products-header">
          <h2>Featured Products</h2>
          <Link to="/products" className="view-link">View All Products →</Link>
        </div>

        <div className="products-slider">
          <button className="slider-btn left" onClick={scrollLeft}>‹</button>

          <div className="products-grid scroll" ref={scrollRef}>
            {featuredProducts.map((product) => (
              <div 
                className="product-card" 
                key={product.id}
                style={{ cursor: 'pointer' }}
                onClick={() => navigate("/product-details", { state: { product, firebaseId: product.id } })}
              >
                <div className="product-image-wrapper">
                  <img src={product.img} alt={product.name} onError={(e) => { e.target.src = "/placeholder.jpg"; }} />
                </div>
                <div className="product-info">
                  <h4>{product.name}</h4>
                  <span>{product.category}</span>
                  <span className="product-link">View Details →</span>
                </div>
              </div>
            ))}
          </div>

          <button className="slider-btn right" onClick={scrollRight}>›</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSlider;