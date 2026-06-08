import React from 'react';
import SEO from '../components/SEO';
import '../styles/support-pages.css';

const PrivacyPolicy = () => {
  return (
    <div className="support-page">
      <SEO
        title="Privacy Policy - Atirath Traders"
        description="Understand how Atirath Traders collects, uses, and protects your personal information when you use our import-export trade services and website."
        keywords="privacy policy, data protection, atirath traders privacy, personal information, GDPR"
      />

      {/* Hero */}
      <section className="support-hero legal-hero">
        <div className="support-hero-content">
          <div className="support-hero-icon">
            <i className="fas fa-shield-alt"></i>
          </div>
          <h1>Privacy Policy</h1>
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
                <li><a href="#overview">1. Overview</a></li>
                <li><a href="#data-collection">2. Data We Collect</a></li>
                <li><a href="#how-we-use">3. How We Use Your Data</a></li>
                <li><a href="#data-sharing">4. Data Sharing &amp; Disclosure</a></li>
                <li><a href="#cookies">5. Cookies &amp; Tracking</a></li>
                <li><a href="#data-security">6. Data Security</a></li>
                <li><a href="#your-rights">7. Your Rights</a></li>
                <li><a href="#retention">8. Data Retention</a></li>
                <li><a href="#children">9. Children's Privacy</a></li>
                <li><a href="#contact-privacy">10. Contact Us</a></li>
              </ul>
            </div>

            <div id="overview" className="legal-section">
              <h2>1. Overview</h2>
              <p>Atirath Traders ("we", "our", or "Company") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our trade services. Please read this policy carefully.</p>
            </div>

            <div id="data-collection" className="legal-section">
              <h2>2. Data We Collect</h2>
              <p>We may collect the following categories of personal information:</p>
              <ul className="legal-list">
                <li><strong>Identity Data:</strong> Name, company name, job title</li>
                <li><strong>Contact Data:</strong> Email address, phone number, postal address</li>
                <li><strong>Transaction Data:</strong> Shipment details, order history, payment references</li>
                <li><strong>Technical Data:</strong> IP address, browser type, cookies, device identifiers</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent, referral sources</li>
                <li><strong>Communication Data:</strong> Emails, inquiry forms, chat messages</li>
              </ul>
            </div>

            <div id="how-we-use" className="legal-section">
              <h2>3. How We Use Your Data</h2>
              <p>We use your personal information to:</p>
              <ul className="legal-list">
                <li>Process and fulfill trade service requests</li>
                <li>Communicate about your shipments and queries</li>
                <li>Issue invoices and manage billing</li>
                <li>Comply with customs, tax, and regulatory requirements</li>
                <li>Improve our website experience and services</li>
                <li>Send newsletters and trade updates (only with your consent)</li>
                <li>Detect and prevent fraud or unauthorized access</li>
              </ul>
            </div>

            <div id="data-sharing" className="legal-section">
              <h2>4. Data Sharing &amp; Disclosure</h2>
              <p>We may share your information with:</p>
              <ul className="legal-list">
                <li><strong>Freight &amp; Logistics Partners:</strong> For shipment coordination and tracking</li>
                <li><strong>Customs Authorities:</strong> As legally required for import/export clearance</li>
                <li><strong>Financial Institutions:</strong> For payment processing and fraud prevention</li>
                <li><strong>IT Service Providers:</strong> For hosting, analytics, and communication tools</li>
              </ul>
              <p>We do NOT sell your personal data to third parties for marketing purposes.</p>
            </div>

            <div id="cookies" className="legal-section">
              <h2>5. Cookies &amp; Tracking</h2>
              <p>Our website uses cookies to enhance your browsing experience. These include:</p>
              <ul className="legal-list">
                <li><strong>Essential Cookies:</strong> Required for core website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand site usage (e.g., Google Analytics)</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and language</li>
              </ul>
              <p>You can control cookie settings through your browser preferences. Disabling essential cookies may affect website functionality.</p>
            </div>

            <div id="data-security" className="legal-section">
              <h2>6. Data Security</h2>
              <p>We implement industry-standard security measures including SSL encryption, access controls, and regular security audits to protect your data. While we strive to protect your information, no method of transmission over the Internet is 100% secure. We encourage you to notify us immediately if you suspect any unauthorized use of your account.</p>
            </div>

            <div id="your-rights" className="legal-section">
              <h2>7. Your Rights</h2>
              <p>Depending on your location, you may have the following rights:</p>
              <ul className="legal-list">
                <li><strong>Access:</strong> Request a copy of your personal data we hold</li>
                <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                <li><strong>Erasure:</strong> Request deletion of your data (subject to legal retention obligations)</li>
                <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
                <li><strong>Objection:</strong> Object to processing for direct marketing purposes</li>
                <li><strong>Withdrawal:</strong> Withdraw consent at any time without affecting prior processing</li>
              </ul>
              <p>To exercise these rights, contact us at <a href="mailto:privacy@atirathtraders.com">privacy@atirathtraders.com</a>.</p>
            </div>

            <div id="retention" className="legal-section">
              <h2>8. Data Retention</h2>
              <p>We retain your personal data for as long as necessary to fulfill the purposes outlined in this policy, or as required by applicable law. Trade transaction records are typically retained for 7 years in compliance with Indian accounting and GST regulations. You may request early deletion where legally permissible.</p>
            </div>

            <div id="children" className="legal-section">
              <h2>9. Children's Privacy</h2>
              <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected such data, please contact us and we will delete it promptly.</p>
            </div>

            <div id="contact-privacy" className="legal-section">
              <h2>10. Contact Us</h2>
              <p>For privacy-related queries or to exercise your rights, please contact our Data Protection Officer:</p>
              <div className="legal-contact-box">
                <p><i className="fas fa-building"></i> <strong>Atirath Traders – Privacy Office</strong></p>
                <p><i className="fas fa-map-marker-alt"></i> Hyderabad, Telangana, India</p>
                <p><i className="fas fa-envelope"></i> info@atirathtraders.com</p>
                <p><i className="fas fa-phone-alt"></i> +91 95537 74933</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
