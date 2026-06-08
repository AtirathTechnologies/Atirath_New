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
            <div className="info-item"><div className="info-icon location"><i className="fa-solid fa-location-dot"></i></div><div><h4>Office Address</h4><p><strong>Atirath Traders Pvt. Ltd.</strong><br />Plot No:45, Jai Hind Enclave, Silicon valley, VIP Hills,<br />Madhapur Hyderabad, Telangana - 500081, India</p></div></div>
            <div className="social"><h4>Follow Us</h4><div className="social-icons"><a href="https://www.facebook.com/share/1GE7seKPgf/"><i className="fab fa-facebook-f"></i></a><a href="https://www.linkedin.com/company/atirath-traders-india-private/"><i className="fab fa-linkedin-in"></i></a><a href="https://www.instagram.com/atirathtradersindia?igsh=c2JvbjB3YzJsMjZu"><i className="fab fa-instagram"></i></a><a href="https://wa.me/919553774933"><i className="fab fa-whatsapp"></i></a></div></div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <div className="map-wrapper">
            <div className="map-info-card">
              <h3>We Are Here</h3>
              <h4>Atirath Traders</h4>
              <p>Plot No:45, Jai Hind Enclave, Silicon Valley,<br />VIP Hills, Madhapur,<br />Hyderabad, Telangana - 500081, India</p>
              <a href="https://maps.app.goo.gl/AtirathTradersLocation" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-location-dot"></i> View on Google Maps</a>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2216480407724!2d78.38583247383066!3d17.44910230102695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91000098943d%3A0xcc4507c0561825ba!2sAtirath%20Traders!5e0!3m2!1sen!2sin!4v1780726727666!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Atirath Traders Location"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="office-section">
        <div className="container">
          <h2 className="office-title">Our Office Locations</h2>
          <div className="office-grid">
            <div className="office-card"><img src="/india-office.png" alt="India Office" /><div className="office-content"><h3><i className="fa-solid fa-location-dot"></i> Head Office - India</h3><p>Plot No:45, Jai Hind Enclave, Silicon Valley,<br/>VIP Hills, Madhapur,<br />Hyderabad, Telangana - 500081, India</p><p><i className="fa-solid fa-phone"></i> +91 95537 74933</p><p><i className="fa-solid fa-envelope"></i> info@atirathtraders.com</p></div></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage