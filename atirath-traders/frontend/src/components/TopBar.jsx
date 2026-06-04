import React from 'react'

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="top-left">
          <i className="fas fa-location-dot"></i> <span>Hyderabad, India</span>
        </div>
        <div className="top-right">
          <span><i className="far fa-envelope"></i> info@atirathtraders.com</span>
          <span><i className="fas fa-phone-alt"></i> +91 98765 43210</span>
          <div className="social-icons-top">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar