import React, { useRef } from 'react';

const products = [
  { id: 1, name: 'Basmati Rice', category: 'Agriculture Products', img: 'https://images.pexels.com/photos/4110250/pexels-photo-4110250.jpeg' },
  { id: 2, name: 'Cotton Fabrics', category: 'Textiles & Fabrics', img: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg' },
  { id: 3, name: 'Industrial Machine', category: 'Machinery & Equipment', img: 'https://images.pexels.com/photos/256369/pexels-photo-256369.jpeg' },
  { id: 4, name: 'Electronics Items', category: 'Electronics & Accessories', img: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg' },
  { id: 5, name: 'Industrial Chemicals', category: 'Chemicals & Minerals', img: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg' },
];

const FeaturedProductsSlider = () => {
  const scrollRef = useRef();

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

  return (
    <section className="products-section">
      <div className="container">
        <div className="products-header">
          <h2>Featured Products</h2>
          <a href="#" className="view-link">View All Products →</a>
        </div>

        <div className="products-slider">
          <button className="slider-btn left" onClick={scrollLeft}>‹</button>

          <div className="products-grid scroll" ref={scrollRef}>
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="product-image-wrapper">
                  <img src={product.img} alt={product.name} />
                </div>
                <div className="product-info">
                  <h4>{product.name}</h4>
                  <span>{product.category}</span>
                  <a href="#" className="product-link">View Details →</a>
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