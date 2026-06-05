import React from 'react';
import SEO from '../components/SEO';
import '../styles/support-pages.css';

const shippingSteps = [
  {
    icon: 'fas fa-clipboard-check',
    step: '01',
    title: 'Order Confirmation',
    desc: 'Your order is reviewed and confirmed within 24 business hours. You will receive a confirmation email with order details.',
  },
  {
    icon: 'fas fa-box-open',
    step: '02',
    title: 'Packaging & Inspection',
    desc: 'Goods are professionally packed and undergo quality inspection before dispatch to ensure safe delivery.',
  },
  {
    icon: 'fas fa-ship',
    step: '03',
    title: 'Shipment Dispatch',
    desc: 'Your cargo is dispatched via the chosen mode — sea freight, air cargo, or road transport. A tracking number is shared.',
  },
  {
    icon: 'fas fa-search-location',
    step: '04',
    title: 'Customs Clearance',
    desc: 'Our team handles all customs documentation and clearance procedures at the port of entry.',
  },
  {
    icon: 'fas fa-truck',
    step: '05',
    title: 'Last-Mile Delivery',
    desc: 'Once cleared, your shipment is transported to your designated delivery address.',
  },
];

const shippingModes = [
  {
    icon: 'fas fa-ship',
    name: 'Ocean Freight',
    desc: 'Ideal for large volume, non-urgent shipments. FCL and LCL options available.',
    time: '15–45 days',
  },
  {
    icon: 'fas fa-plane',
    name: 'Air Freight',
    desc: 'Fast and secure for time-sensitive or high-value goods.',
    time: '3–7 days',
  },
  {
    icon: 'fas fa-truck',
    name: 'Road Transport',
    desc: 'Cost-effective for regional and cross-border deliveries within South Asia.',
    time: '2–10 days',
  },
  {
    icon: 'fas fa-train',
    name: 'Rail Freight',
    desc: 'Reliable and economical for heavy goods moving across major trade corridors.',
    time: '5–15 days',
  },
];

const ShippingPolicy = () => {
  return (
    <div className="support-page">
      <SEO
        title="Shipping Policy - Atirath Traders"
        description="Learn about Atirath Traders' shipping methods, transit timelines, customs handling, and delivery procedures for import and export shipments."
        keywords="shipping policy, delivery terms, freight policy, atirath traders shipping, import shipping"
      />

      {/* Hero */}
      <section className="support-hero shipping-hero">
        <div className="support-hero-content">
          <div className="support-hero-icon">
            <i className="fas fa-shipping-fast"></i>
          </div>
          <h1>Shipping Policy</h1>
          <p>Transparent, reliable, and efficient logistics — from origin to your doorstep.</p>
        </div>
      </section>

      {/* Shipping Process */}
      <section className="support-topics-section">
        <div className="support-container">
          <h2 className="support-section-title">Our Shipping Process</h2>
          <div className="shipping-steps-grid">
            {shippingSteps.map((item, idx) => (
              <div key={idx} className="shipping-step-card">
                <div className="shipping-step-number">{item.step}</div>
                <div className="shipping-step-icon">
                  <i className={item.icon}></i>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Modes */}
      <section className="support-faq-section">
        <div className="support-container">
          <h2 className="support-section-title">Shipping Modes &amp; Transit Times</h2>
          <div className="shipping-modes-grid">
            {shippingModes.map((mode, idx) => (
              <div key={idx} className="shipping-mode-card">
                <div className="mode-icon">
                  <i className={mode.icon}></i>
                </div>
                <h3>{mode.name}</h3>
                <p>{mode.desc}</p>
                <div className="mode-time">
                  <i className="fas fa-clock"></i> {mode.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Details */}
      <section className="legal-content-section">
        <div className="support-container">
          <div className="legal-card">

            <div className="legal-section">
              <h2>General Shipping Terms</h2>
              <ul className="legal-list">
                <li>All shipments are subject to applicable customs duties, taxes, and port charges at the destination country, which are the responsibility of the importer unless otherwise agreed in writing.</li>
                <li>Atirath Traders provides end-to-end shipment coordination but is not liable for delays caused by port congestion, customs holds, or force majeure events.</li>
                <li>Clients are responsible for ensuring correct shipping addresses and customs-compliant product descriptions.</li>
                <li>Insurance coverage for shipments is available as an optional add-on. We strongly recommend it for high-value goods.</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Tracking &amp; Notifications</h2>
              <p>A unique tracking number will be shared via email once your shipment is dispatched. Real-time updates are sent at each major milestone: dispatch, port arrival, customs clearance, and final delivery.</p>
            </div>

            <div className="legal-section">
              <h2>Damages &amp; Claims</h2>
              <p>In the event of damaged or lost cargo, clients must notify Atirath Traders within 48 hours of delivery. We will coordinate with the carrier and insurance provider to initiate the claims process. Claims filed after 48 hours may not be eligible for compensation.</p>
            </div>

            <div className="legal-section">
              <h2>Restricted &amp; Prohibited Goods</h2>
              <p>Atirath Traders does not handle shipments of goods prohibited under Indian law or international sanctions. This includes but is not limited to: hazardous chemicals without proper certification, wildlife products, counterfeit goods, and arms or ammunition.</p>
            </div>

            <div className="legal-section">
              <h2>Contact Our Logistics Team</h2>
              <div className="legal-contact-box">
                <p><i className="fas fa-building"></i> <strong>Atirath Traders – Logistics</strong></p>
                <p><i className="fas fa-envelope"></i> logistics@atirathtraders.com</p>
                <p><i className="fas fa-phone-alt"></i> +91 98765 43210</p>
                <p><i className="fas fa-clock"></i> Mon–Sat: 9 AM – 6 PM IST</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShippingPolicy;
