import React from 'react'
import { Link } from 'react-router-dom'

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
              <a href="https://www.facebook.com/share/1GE7seKPgf/" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.linkedin.com/company/atirath-traders-india-private/" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.instagram.com/atirathtradersindia?igsh=c2JvbjB3YzJsMjZu" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="https://wa.me/919553774933" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="footer-links">
            <h4>Products</h4>
            <ul>
              <li>Agriculture Products</li>
              <li>Textiles &amp; Fabrics</li>
              <li>Machinery &amp; Equipment</li>
              <li>Electronics &amp; Accessories</li>
              <li>Home &amp; Lifestyle Products</li>
              <li>Chemicals &amp; Minerals</li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className="footer-links">
            <h4>Support</h4>
            <ul>
              <li><Link to="/support/help-center">Help Center</Link></li>
              <li><Link to="/support/terms">Terms &amp; Conditions</Link></li>
              <li><Link to="/support/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/support/shipping-policy">Shipping Policy</Link></li>
              <li><Link to="/support/faq">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 5: Contact Us */}
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <ul>
              <li><i className="fas fa-phone-alt"></i> +91 95537 74933</li>
              <li><i className="fas fa-envelope"></i> info@atirathtraders.com</li>
              <li><i className="fas fa-map-marker-alt"></i> Hyderabad, India</li>
              <li><i className="fas fa-globe"></i> Global Presence</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Copyright & Policy Links */}
        <div className="footer-bottom">
          <div className="copyright">
            © 2025 Atirath Traders. All Rights Reserved.
          </div>
          <div className="policy-links">
            <Link to="/support/privacy-policy">Privacy Policy</Link> | <Link to="/support/terms">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer