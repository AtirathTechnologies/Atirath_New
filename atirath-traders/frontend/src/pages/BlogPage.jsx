import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../blogData';
import SEO from '../components/SEO';
import '../styles/blog.css';

const BlogPage = () => {
  return (
    <div className="blog-container">
      <SEO 
        title="Blog" 
        description="Stay updated with the latest trends in Indian agriculture, sustainable farming, and global market insights from Atirath Traders."
        keywords="agriculture blog india, farming trends 2024, sustainable agriculture insights, atirath traders blog"
      />
      <div className="blog-header">
        <h1>Our Blog</h1>
        <p>Insights, updates, and stories from the world of agriculture and trade. Stay informed with Atirath Traders.</p>
      </div>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <span className="blog-category">{post.category}</span>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="read-more-btn">
                Read More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
