import React, { useState } from 'react';
import SEO from '../components/SEO';
import '../styles/support-pages.css';

const helpTopics = [
  {
    icon: 'fas fa-shipping-fast',
    title: 'Shipment Tracking',
    description: 'Track your import/export shipment in real-time using your order or AWB number.',
    link: '#',
  },
  {
    icon: 'fas fa-file-invoice-dollar',
    title: 'Invoice & Billing',
    description: 'Get help with invoices, payment receipts, and billing statements for your orders.',
    link: '#',
  },
  {
    icon: 'fas fa-globe',
    title: 'Customs & Regulations',
    description: 'Understand customs requirements, duties, and regulatory compliance for your shipments.',
    link: '#',
  },
  {
    icon: 'fas fa-boxes',
    title: 'Order Management',
    description: 'Learn how to place, modify, or cancel orders and manage your product catalog.',
    link: '#',
  },
  {
    icon: 'fas fa-headset',
    title: 'Contact Support',
    description: 'Reach our dedicated trade specialists available Monday–Saturday, 9 AM to 6 PM IST.',
    link: '/contact',
  },
  {
    icon: 'fas fa-lock',
    title: 'Account & Security',
    description: 'Manage your account, reset passwords, and review security settings.',
    link: '#',
  },
];

const faqs = [
  {
    q: 'How do I get a quote for my shipment?',
    a: 'You can request a quote by filling out the inquiry form on our Contact page or by directly calling our trade specialists. We respond within 24 business hours.',
  },
  {
    q: 'What documents are required for customs clearance?',
    a: 'Typically, you need a commercial invoice, packing list, bill of lading or airway bill, and a certificate of origin. Requirements may vary by country.',
  },
  {
    q: 'How long does it take to process an import order?',
    a: 'Standard processing takes 3–7 business days depending on the origin country, commodity type, and port congestion. We will notify you of the estimated timeline.',
  },
  {
    q: 'Do you offer door-to-door delivery?',
    a: 'Yes! Atirath Traders provides end-to-end logistics including port clearance, inland transportation, and final-mile delivery to your warehouse or store.',
  },
  {
    q: 'Can I track my shipment online?',
    a: 'Yes. Once your shipment is dispatched, you will receive a tracking number via email. You can use it on our portal or the carrier\'s website for live updates.',
  },
];

const HelpCenter = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="support-page">
      <SEO
        title="Help Center - Atirath Traders Support"
        description="Get help with shipment tracking, customs clearance, billing, and all trade-related queries at Atirath Traders Help Center."
        keywords="help center, customer support, atirath traders help, shipping support, trade assistance"
      />

      {/* Hero */}
      <section className="support-hero">
        <div className="support-hero-content">
          <div className="support-hero-icon">
            <i className="fas fa-headset"></i>
          </div>
          <h1>Help Center</h1>
          <p>Find answers, guides, and support resources for all your trade and logistics needs.</p>
          <div className="support-search-bar">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search for help topics, FAQs, or guides..." />
            <button>Search</button>
          </div>
        </div>
      </section>

      {/* Help Topics Grid */}
      <section className="support-topics-section">
        <div className="support-container">
          <h2 className="support-section-title">Browse Help Topics</h2>
          <div className="topics-grid">
            {helpTopics.map((topic, idx) => (
              <a key={idx} href={topic.link} className="topic-card">
                <div className="topic-icon">
                  <i className={topic.icon}></i>
                </div>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
                <span className="topic-arrow"><i className="fas fa-arrow-right"></i></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="support-faq-section">
        <div className="support-container">
          <h2 className="support-section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((item, idx) => (
              <div
                key={idx}
                className={`faq-item ${openIndex === idx ? 'open' : ''}`}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <div className="faq-question">
                  <span>{item.q}</span>
                  <i className={`fas fa-chevron-${openIndex === idx ? 'up' : 'down'}`}></i>
                </div>
                {openIndex === idx && (
                  <div className="faq-answer">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="support-contact-banner">
        <div className="support-container">
          <div className="contact-banner-inner">
            <div className="contact-banner-text">
              <h3>Still Need Help?</h3>
              <p>Our trade specialists are available Monday to Saturday, 9 AM – 6 PM IST. We're here to help.</p>
            </div>
            <div className="contact-banner-actions">
              <a href="tel:+919876543210" className="banner-btn primary">
                <i className="fas fa-phone-alt"></i> Call Us
              </a>
              <a href="/contact" className="banner-btn secondary">
                <i className="fas fa-envelope"></i> Send Message
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
