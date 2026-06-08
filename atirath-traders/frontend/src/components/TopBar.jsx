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
          <span><i className="fas fa-phone-alt"></i> +91 95537 74933</span>
          <div className="social-icons-top">
            <a href="https://www.facebook.com/share/1GE7seKPgf/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/atirathtradersindia?igsh=c2JvbjB3YzJsMjZu" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/company/atirath-traders-india-private/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://wa.me/919553774933" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar