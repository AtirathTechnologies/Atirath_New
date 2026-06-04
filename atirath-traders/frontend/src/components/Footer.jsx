import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Column 1: Logo + Description + Social Icons */}
          <div className="footer-brand">
            <h2>ATIRATH<span>TRADERS</span></h2>
            <div className="import-text">IMPORT & EXPORT</div>
            <p className="footer-desc">
              Atirath Traders is a leading Import & Export company delivering
              quality products and reliable services worldwide.
            </p>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Products</li>
              <li>Services</li>
              <li>Industries</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="footer-links">
            <h4>Products</h4>
            <ul>
              <li>Agriculture Products</li>
              <li>Textiles & Fabrics</li>
              <li>Machinery & Equipment</li>
              <li>Electronics & Accessories</li>
              <li>Home & Lifestyle Products</li>
              <li>Chemicals & Minerals</li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className="footer-links">
            <h4>Support</h4>
            <ul>
              <li>Help Center</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Shipping Policy</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Column 5: Contact Us */}
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <ul>
              <li><i className="fas fa-phone-alt"></i> +91 98765 43210</li>
              <li><i className="fas fa-envelope"></i> info@atirathtraders.com</li>
              <li><i className="fas fa-map-marker-alt"></i> Hyderabad, India</li>
              <li><i className="fas fa-globe"></i> Global Presence</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Copyright & Policy Links */}
        <div className="footer-bottom">
          <div className="copyright">
            © 2024 Atirath Traders. All Rights Reserved.
          </div>
          <div className="policy-links">
            <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer