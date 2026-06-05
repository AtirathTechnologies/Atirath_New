import React from 'react'
import SEO from '../components/SEO';

const ContactPage = () => {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Atirath Traders for all your global import and export needs. Send us an inquiry for agriculture, textiles, or machinery trade."
        keywords="contact atirath traders, import export inquiry, global trade contact, business partnership india"
      />
      <section className="contact-hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h2>Contact Us</h2>
            <h3>We're Here to Help Your Business Grow</h3>
            <p>Have questions or need assistance? Get in touch with our team. We will respond to you as soon as possible.</p>
          </div>
        </div>
      </section>

      <section className="contact-main">
        <div className="container contact-grid">
          <div className="card">
            <h3>Send Us an Inquiry</h3>
            <div className="form-group"><label>Full Name <span>*</span></label><input type="text" placeholder="Enter your full name" /></div>
            <div className="row"><div><label>Email Address <span>*</span></label><input type="email" placeholder="Enter your email" /></div><div><label>Phone Number</label><input type="text" placeholder="98765 43210" /></div></div>
            <div className="form-group"><label>Company Name</label><input type="text" placeholder="Enter your company name" /></div>
            <div className="form-group"><label>Subject <span>*</span></label><select><option>Select a subject</option><option>Import Inquiry</option><option>Export Inquiry</option><option>General Support</option></select></div>
            <div className="form-group"><label>Your Message <span>*</span></label><textarea placeholder="Type your message here..."></textarea></div>
            <button className="submit-btn">Send Inquiry <i className="fa-regular fa-paper-plane"></i></button>
          </div>
          <div className="card">
            <h3>Contact Information</h3>
            <div className="info-item"><div className="info-icon whatsapp"><i className="fa-brands fa-whatsapp"></i></div><div><h4>WhatsApp</h4><p><strong>+91 95537 74933</strong></p><small>Chat with us on WhatsApp</small></div></div>
            <div className="info-item"><div className="info-icon email"><i className="fa-regular fa-envelope"></i></div><div><h4>Email</h4><p><strong>info@atirathtraders.com</strong></p><small>Drop us an email anytime</small></div></div>
            <div className="info-item"><div className="info-icon phone"><i className="fa-solid fa-phone"></i></div><div><h4>Phone</h4><p><strong>+91 95537 74933</strong></p><small>Mon - Sat: 9:00 AM - 6:00 PM</small></div></div>
            <div className="info-item"><div className="info-icon location"><i className="fa-solid fa-location-dot"></i></div><div><h4>Office Address</h4><p><strong>Atirath Traders Pvt. Ltd.</strong><br />123, Business Park, HITEC City,<br />Hyderabad, Telangana - 500081, India</p></div></div>
            <div className="social"><h4>Follow Us</h4><div className="social-icons"><a href="#"><i className="fab fa-facebook-f"></i></a><a href="#"><i className="fab fa-linkedin-in"></i></a><a href="#"><i className="fab fa-instagram"></i></a><a href="#"><i className="fab fa-whatsapp"></i></a></div></div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <div className="map-wrapper">
            <div className="map-info-card">
              <h3>We Are Here</h3>
              <h4>Atirath Traders Pvt. Ltd.</h4>
              <p>123, Business Park, HITEC City,<br />Hyderabad, Telangana - 500081, India</p>
              <a href="#"><i className="fa-solid fa-location-dot"></i> View on Google Maps</a>
            </div>
            <iframe src="https://www.google.com/maps?q=HITEC+City,Hyderabad&output=embed" width="100%" height="420" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
          </div>
        </div>
      </section>

      <section className="office-section">
        <div className="container">
          <h2 className="office-title">Our Office Locations</h2>
          <div className="office-grid">
            <div className="office-card"><img src="/india-office.jpg" alt="India Office" /><div className="office-content"><h3><i className="fa-solid fa-location-dot"></i> Head Office - India</h3><p>123, Business Park, HITEC City,<br />Hyderabad, Telangana - 500081, India</p><p><i className="fa-solid fa-phone"></i> +91 98765 43210</p><p><i className="fa-solid fa-envelope"></i> info@atirathtraders.com</p></div></div>
            <div className="office-card"><img src="/uae-office.jpg" alt="UAE Office" /><div className="office-content"><h3><i className="fa-solid fa-location-dot"></i> Branch Office - UAE</h3><p>502, Business Center, Sharjah,<br />United Arab Emirates</p><p><i className="fa-solid fa-phone"></i> +971 50 123 4567</p><p><i className="fa-solid fa-envelope"></i> uae@atirathtraders.com</p></div></div>
            <div className="office-card"><img src="/usa-office.jpg" alt="USA Office" /><div className="office-content"><h3><i className="fa-solid fa-location-dot"></i> Branch Office - USA</h3><p>8 The Green, Suite A, Dover,<br />Delaware - 19901, USA</p><p><i className="fa-solid fa-phone"></i> +1 (302) 123 4567</p><p><i className="fa-solid fa-envelope"></i> usa@atirathtraders.com</p></div></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage