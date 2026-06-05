import React from 'react';
import SEO from '../components/SEO';
import '../styles/support-pages.css';

const TermsAndConditions = () => {
  return (
    <div className="support-page">
      <SEO
        title="Terms & Conditions - Atirath Traders"
        description="Read Atirath Traders' Terms and Conditions governing the use of our import-export trade services, website, and business engagements."
        keywords="terms and conditions, atirath traders terms, trade service terms, import export terms"
      />

      {/* Hero */}
      <section className="support-hero legal-hero">
        <div className="support-hero-content">
          <div className="support-hero-icon">
            <i className="fas fa-file-contract"></i>
          </div>
          <h1>Terms &amp; Conditions</h1>
          <p>Last updated: June 2025 &nbsp;|&nbsp; Effective date: June 1, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="legal-content-section">
        <div className="support-container">
          <div className="legal-card">

            <div className="legal-toc">
              <h3><i className="fas fa-list-ul"></i> Contents</h3>
              <ul>
                <li><a href="#acceptance">1. Acceptance of Terms</a></li>
                <li><a href="#services">2. Services Offered</a></li>
                <li><a href="#obligations">3. Client Obligations</a></li>
                <li><a href="#payment">4. Payment Terms</a></li>
                <li><a href="#liability">5. Limitation of Liability</a></li>
                <li><a href="#ip">6. Intellectual Property</a></li>
                <li><a href="#termination">7. Termination</a></li>
                <li><a href="#governing">8. Governing Law</a></li>
                <li><a href="#changes">9. Changes to Terms</a></li>
                <li><a href="#contact">10. Contact Information</a></li>
              </ul>
            </div>

            <div id="acceptance" className="legal-section">
              <h2>1. Acceptance of Terms</h2>
              <p>By accessing this website or engaging Atirath Traders for any import/export service, you agree to be bound by these Terms and Conditions. If you do not agree, please refrain from using our website or services. These terms form a legally binding agreement between you ("Client") and Atirath Traders ("Company").</p>
            </div>

            <div id="services" className="legal-section">
              <h2>2. Services Offered</h2>
              <p>Atirath Traders provides import and export facilitation services including but not limited to:</p>
              <ul className="legal-list">
                <li>Global sourcing and supplier identification</li>
                <li>Customs clearance and brokerage</li>
                <li>Freight forwarding and logistics coordination</li>
                <li>Trade compliance advisory</li>
                <li>Custom solutions for bulk procurement</li>
              </ul>
              <p>All services are subject to availability, regulatory approval, and individual service agreements signed between the Company and the Client.</p>
            </div>

            <div id="obligations" className="legal-section">
              <h2>3. Client Obligations</h2>
              <p>Clients agree to:</p>
              <ul className="legal-list">
                <li>Provide accurate and complete information required for trade transactions</li>
                <li>Ensure all goods being imported/exported comply with applicable laws of origin and destination countries</li>
                <li>Not engage in prohibited trade activities including sanctioned goods or embargoed regions</li>
                <li>Promptly respond to requests for documentation or clarification</li>
                <li>Indemnify Atirath Traders against any penalties arising from incorrect declarations</li>
              </ul>
            </div>

            <div id="payment" className="legal-section">
              <h2>4. Payment Terms</h2>
              <p>Payment for all services shall be made in accordance with the invoice issued by Atirath Traders. Standard payment terms are:</p>
              <ul className="legal-list">
                <li>50% advance payment before service initiation</li>
                <li>Remaining balance due within 15 days of service completion</li>
                <li>Late payments attract interest at 1.5% per month</li>
                <li>All fees are exclusive of applicable taxes (GST, import duties, etc.)</li>
              </ul>
            </div>

            <div id="liability" className="legal-section">
              <h2>5. Limitation of Liability</h2>
              <p>Atirath Traders shall not be liable for any indirect, incidental, or consequential damages arising from delays due to customs authorities, force majeure events, third-party carrier failures, or acts of government. Our aggregate liability shall not exceed the total fees paid for the specific service in question.</p>
            </div>

            <div id="ip" className="legal-section">
              <h2>6. Intellectual Property</h2>
              <p>All content on this website including text, graphics, logos, and trade documentation templates are the intellectual property of Atirath Traders. Unauthorized reproduction, distribution, or modification is strictly prohibited without prior written consent.</p>
            </div>

            <div id="termination" className="legal-section">
              <h2>7. Termination</h2>
              <p>Either party may terminate a service agreement with 30 days written notice. Atirath Traders reserves the right to immediately suspend services in case of non-payment, fraudulent activity, or violation of these terms. Any amounts due at the time of termination remain payable.</p>
            </div>

            <div id="governing" className="legal-section">
              <h2>8. Governing Law</h2>
              <p>These Terms and Conditions are governed by the laws of the Republic of India. All disputes shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana, India. International disputes shall be resolved through arbitration under the Indian Arbitration Act.</p>
            </div>

            <div id="changes" className="legal-section">
              <h2>9. Changes to Terms</h2>
              <p>Atirath Traders reserves the right to update these Terms at any time. Continued use of our services after a modification constitutes acceptance of the new terms. We will notify registered clients of material changes via email at least 14 days in advance.</p>
            </div>

            <div id="contact" className="legal-section">
              <h2>10. Contact Information</h2>
              <p>For questions regarding these Terms and Conditions, please reach out to:</p>
              <div className="legal-contact-box">
                <p><i className="fas fa-building"></i> <strong>Atirath Traders</strong></p>
                <p><i className="fas fa-map-marker-alt"></i> Hyderabad, Telangana, India</p>
                <p><i className="fas fa-envelope"></i> legal@atirathtraders.com</p>
                <p><i className="fas fa-phone-alt"></i> +91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
