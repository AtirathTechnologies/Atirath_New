import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../blogData';
import SEO from '../components/SEO';
import '../styles/blog.css';

const BlogDetails = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="blog-container">
        <h2>Post not found</h2>
        <Link to="/blog">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="blog-details-container">
      <SEO 
        title={post.title} 
        description={post.excerpt}
        keywords={`${post.category}, ${post.title}, atirath traders blog, agriculture india`}
      />
      <Link to="/blog" className="back-link">
        <i className="fas fa-arrow-left"></i> Back to Blog
      </Link>
      
      <div className="blog-details-header">
        <span className="blog-details-category">{post.category}</span>
        <h1>{post.title}</h1>
      </div>

      <img src={post.image} alt={post.title} className="blog-details-image" />

      <div 
        className="blog-full-content"
        dangerouslySetInnerHTML={{ __html: post.fullContent }}
      />
    </div>
  );
};

export default BlogDetails;
