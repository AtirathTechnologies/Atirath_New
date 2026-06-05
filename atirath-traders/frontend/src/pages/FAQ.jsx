import React, { useState } from 'react';
import SEO from '../components/SEO';
import '../styles/support-pages.css';

const faqCategories = [
  {
    label: 'All',
    icon: 'fas fa-th-large',
  },
  {
    label: 'Import',
    icon: 'fas fa-arrow-circle-down',
  },
  {
    label: 'Export',
    icon: 'fas fa-arrow-circle-up',
  },
  {
    label: 'Shipping',
    icon: 'fas fa-shipping-fast',
  },
  {
    label: 'Payment',
    icon: 'fas fa-credit-card',
  },
  {
    label: 'Account',
    icon: 'fas fa-user-circle',
  },
];

const faqData = [
  {
    category: 'Import',
    q: 'How do I start an import order with Atirath Traders?',
    a: 'Simply fill out the Import Inquiry form on our Import Services page or call our trade specialists. We will evaluate your requirements and provide a tailored sourcing plan within 24 hours.',
  },
  {
    category: 'Import',
    q: 'What documents are required for import customs clearance?',
    a: 'Standard documents include: Commercial Invoice, Packing List, Bill of Lading or Airway Bill, Certificate of Origin, and any applicable product certifications. Our team will guide you on country-specific requirements.',
  },
  {
    category: 'Import',
    q: 'Can I import goods from any country?',
    a: 'We source from over 40 countries across Asia, Europe, the Americas, and Africa. However, imports from sanctioned or embargoed regions are strictly prohibited per Indian trade regulations.',
  },
  {
    category: 'Export',
    q: 'Which countries does Atirath Traders export to?',
    a: 'We currently export to 60+ countries worldwide. Our primary export destinations include the UAE, USA, UK, Germany, Singapore, Malaysia, and African markets.',
  },
  {
    category: 'Export',
    q: 'What products can I export through Atirath Traders?',
    a: 'We handle a wide range of export categories including agricultural products, textiles, engineering goods, chemicals, handicrafts, and FMCG products. Prohibited export items per DGFT regulations cannot be processed.',
  },
  {
    category: 'Export',
    q: 'Do you assist with export documentation and compliance?',
    a: 'Yes. We handle all export documentation including shipping bills, export invoices, RCMC, GST refund documentation, and any country-specific certificates required by the destination market.',
  },
  {
    category: 'Shipping',
    q: 'How long does international shipping take?',
    a: 'Transit times vary by mode: Air Freight (3–7 days), Ocean Freight (15–45 days), Road Transport (2–10 days). Actual times depend on route, port congestion, and customs processing.',
  },
  {
    category: 'Shipping',
    q: 'Can I track my shipment in real time?',
    a: 'Yes. Once your shipment is dispatched, we provide a tracking number that can be used on our logistics portal or the carrier website for live shipment status.',
  },
  {
    category: 'Shipping',
    q: 'What happens if my shipment is damaged in transit?',
    a: 'You must notify us within 48 hours of delivery with photographic evidence. We will coordinate with the carrier and insurance provider. Cargo insurance is recommended for all high-value goods.',
  },
  {
    category: 'Payment',
    q: 'What payment methods do you accept?',
    a: 'We accept bank wire transfers (NEFT/RTGS/SWIFT), letters of credit (LC), and TT payments. For domestic clients, UPI and cheque payments are also accepted.',
  },
  {
    category: 'Payment',
    q: 'Is advance payment required?',
    a: 'Yes. Standard terms require 50% advance payment before service initiation, with the balance due within 15 days of service completion or delivery.',
  },
  {
    category: 'Payment',
    q: 'Are customs duties included in the service fee?',
    a: 'No. Customs duties, import taxes, GST on imports, and port handling charges are separate and payable by the importer as per applicable regulations. We provide an estimated landed cost calculation upfront.',
  },
  {
    category: 'Account',
    q: 'How do I create an account on the Atirath Traders portal?',
    a: 'Click on the "Sign Up" button in the top navigation bar. Fill in your business details, verify your email, and your account will be active within a few minutes.',
  },
  {
    category: 'Account',
    q: 'I forgot my password. How do I reset it?',
    a: 'Click "Forgot Password" on the Sign In page. Enter your registered email address and we will send you a password reset link within 5 minutes.',
  },
  {
    category: 'Account',
    q: 'How do I update my company details on the portal?',
    a: 'Log in to your account, go to "Profile Settings", and update your company information, GST number, or contact details. Changes are reflected immediately.',
  },
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqData.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="support-page">
      <SEO
        title="FAQ - Frequently Asked Questions | Atirath Traders"
        description="Find answers to common questions about Atirath Traders' import, export, shipping, payment, and account-related queries."
        keywords="FAQ, frequently asked questions, import FAQ, export FAQ, shipping questions, atirath traders"
      />

      {/* Hero */}
      <section className="support-hero faq-hero">
        <div className="support-hero-content">
          <div className="support-hero-icon">
            <i className="fas fa-question-circle"></i>
          </div>
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know about our import, export, and logistics services.</p>
          <div className="support-search-bar">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setOpenIndex(null); }}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="clear-btn">
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="faq-categories-section">
        <div className="support-container">
          <div className="faq-category-tabs">
            {faqCategories.map((cat) => (
              <button
                key={cat.label}
                className={`faq-cat-tab ${activeCategory === cat.label ? 'active' : ''}`}
                onClick={() => { setActiveCategory(cat.label); setOpenIndex(null); }}
              >
                <i className={cat.icon}></i>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="support-faq-section">
        <div className="support-container">
          {filteredFaqs.length === 0 ? (
            <div className="faq-empty">
              <i className="fas fa-search"></i>
              <p>No questions found matching your search. Try different keywords.</p>
            </div>
          ) : (
            <>
              <p className="faq-results-count">{filteredFaqs.length} question{filteredFaqs.length !== 1 ? 's' : ''} found</p>
              <div className="faq-list">
                {filteredFaqs.map((item, idx) => (
                  <div
                    key={idx}
                    className={`faq-item ${openIndex === idx ? 'open' : ''}`}
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  >
                    <div className="faq-question">
                      <div className="faq-q-inner">
                        <span className="faq-category-badge">{item.category}</span>
                        <span>{item.q}</span>
                      </div>
                      <i className={`fas fa-chevron-${openIndex === idx ? 'up' : 'down'}`}></i>
                    </div>
                    {openIndex === idx && (
                      <div className="faq-answer">{item.a}</div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="support-contact-banner">
        <div className="support-container">
          <div className="contact-banner-inner">
            <div className="contact-banner-text">
              <h3>Didn't Find Your Answer?</h3>
              <p>Our trade specialists are ready to assist with any specific questions about your shipment or inquiry.</p>
            </div>
            <div className="contact-banner-actions">
              <a href="tel:+919876543210" className="banner-btn primary">
                <i className="fas fa-phone-alt"></i> Call Us
              </a>
              <a href="/contact" className="banner-btn secondary">
                <i className="fas fa-envelope"></i> Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
