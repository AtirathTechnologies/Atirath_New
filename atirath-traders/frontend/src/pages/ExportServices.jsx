import React, { useState } from 'react';
import SEO from '../components/SEO';
import '../styles/exportservices.css';

const ExportServices = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    exportProduct: '',
    targetMarket: '',
    estimatedVolume: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.exportProduct) {
      alert('Please fill out all required fields.');
      return;
    }
    // Simulate API request
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      company: '',
      exportProduct: '',
      targetMarket: '',
      estimatedVolume: '',
      message: '',
    });
  };

  return (
    <div className="export-services-page">
      <SEO 
        title="Export Services - Global Distribution & Trade Compliance"
        description="Atirath Traders enables seamless global exports. We manage international marketing, freight routing, custom exports clearance, and compliance."
        keywords="export services, international trade export, export compliance, cargo shipping export, atirath traders exports"
      />

      {/* Hero Section */}
      <section className="export-hero">
        <div className="container">
          <h1>Export Services</h1>
          <p>Expanding your business horizon to international shores. We connect local manufacturers and quality products with global buyers, ensuring secure and compliant export processes.</p>
        </div>
      </section>

      {/* Commodities Section */}
      <section className="commodities-section">
        <div className="container">
          <h2 className="section-title-custom">Key Commodities We Export</h2>
          <div className="commodities-grid">
            <div className="commodity-card">
              <img 
                src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=600&q=80" 
                alt="Agricultural Export" 
                className="commodity-img"
              />
              <div className="commodity-content">
                <h3>Agricultural Products</h3>
                <p>Exporting high-quality food grains, premium basmati rice, organic spices, pulses, and oilseeds under strict phytosanitary certifications.</p>
                <ul className="commodity-list">
                  <li><i className="fa-solid fa-check"></i> Non-GMO Certified Grains</li>
                  <li><i className="fa-solid fa-check"></i> Standardized Moisture Checks</li>
                  <li><i className="fa-solid fa-check"></i> FDA & APEDA Compliant Packaging</li>
                </ul>
              </div>
            </div>

            <div className="commodity-card">
              <img 
                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80" 
                alt="Textile Export" 
                className="commodity-img"
              />
              <div className="commodity-content">
                <h3>Textiles & Apparel</h3>
                <p>Distributing high-grade yarn, cotton textiles, custom garments, and industrial fabrics matching specific international design patterns.</p>
                <ul className="commodity-list">
                  <li><i className="fa-solid fa-check"></i> 100% Organic Cotton Yarns</li>
                  <li><i className="fa-solid fa-check"></i> Eco-friendly Dyeing Standards</li>
                  <li><i className="fa-solid fa-check"></i> Compliance with EU & US Label Laws</li>
                </ul>
              </div>
            </div>

            <div className="commodity-card">
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80" 
                alt="Industrial Engineering" 
                className="commodity-img"
              />
              <div className="commodity-content">
                <h3>Industrial & Auto Parts</h3>
                <p>Shipping precision machined automotive components, fasteners, casting molds, and replacement assemblies to assembly lines globally.</p>
                <ul className="commodity-list">
                  <li><i className="fa-solid fa-check"></i> ISO 9001 Certified Manufacturing</li>
                  <li><i className="fa-solid fa-check"></i> Heavy Rust-inhibitor Packaging</li>
                  <li><i className="fa-solid fa-check"></i> Complete Traceability Documents</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance / Services Section */}
      <section className="compliance-section">
        <div className="container">
          <h2 className="section-title-custom">Export Trade Compliance Support</h2>
          <div className="compliance-grid">
            <div className="compliance-card">
              <div className="compliance-icon">
                <i className="fa-solid fa-shield-alt"></i>
              </div>
              <h4>Export Licensing</h4>
              <p>Obtaining clearances from trade control authorities for restricted or special tariff commodities.</p>
            </div>

            <div className="compliance-card">
              <div className="compliance-icon">
                <i className="fa-solid fa-stamp"></i>
              </div>
              <h4>Certificate of Origin</h4>
              <p>Legal certification under preferential or non-preferential routes for duty-free entry in partner countries.</p>
            </div>

            <div className="compliance-card">
              <div className="compliance-icon">
                <i className="fa-solid fa-file-invoice-dollar"></i>
              </div>
              <h4>Letter of Credit (L/C)</h4>
              <p>Document scrutiny to guarantee secure bank-backed international payment settlements.</p>
            </div>

            <div className="compliance-card">
              <div className="compliance-icon">
                <i className="fa-solid fa-boxes"></i>
              </div>
              <h4>Customs Labeling</h4>
              <p>Conforming products to specific language, marking, weight, and hazard classification tags of target countries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry and Sourcing Steps */}
      <section className="inquiry-export-section">
        <div className="container">
          <div className="inquiry-export-grid">
            <div className="inquiry-form-container">
              <h3>Export Sourcing Inquiry</h3>
              <p>Are you a manufacturer looking to expand exports, or a foreign buyer searching for commodities? Let us handle the export channel mapping.</p>

              {submitted && (
                <div className="success-message">
                  Thank you! Your export inquiry has been submitted. Our compliance team will review and contact you shortly.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="email@company.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your organization"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="exportProduct">Product Details *</label>
                    <input
                      type="text"
                      id="exportProduct"
                      name="exportProduct"
                      value={formData.exportProduct}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Basmati Rice, Cotton Yarn"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="targetMarket">Target Destination Country</label>
                    <input
                      type="text"
                      id="targetMarket"
                      name="targetMarket"
                      value={formData.targetMarket}
                      onChange={handleChange}
                      placeholder="e.g. USA, Germany, Saudi Arabia"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="estimatedVolume">Estimated Cargo Volume</label>
                  <input
                    type="text"
                    id="estimatedVolume"
                    name="estimatedVolume"
                    value={formData.estimatedVolume}
                    onChange={handleChange}
                    placeholder="e.g. Monthly container loads, Metric Tons"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Logistics Requirements & Payment Terms</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Specify if FOB, CIF or EXW is needed, and any certificate requirements..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">Submit Export Request</button>
              </form>
            </div>

            <div className="export-steps-box">
              <h3>Our Export Workflow</h3>
              
              <div className="export-step-item">
                <div className="export-step-circle">1</div>
                <div className="export-step-details">
                  <h4>Product Inspection & Classification</h4>
                  <p>Verifying harmonized system codes (HS Code) and conducting quality grading checks on product batches.</p>
                </div>
              </div>

              <div className="export-step-item">
                <div className="export-step-circle">2</div>
                <div className="export-step-details">
                  <h4>Packaging & Certificate Acquisition</h4>
                  <p>Packing goods to resist transit hazards and acquiring phytosanitary, fumigation, or health certs as required.</p>
                </div>
              </div>

              <div className="export-step-item">
                <div className="export-step-circle">3</div>
                <div className="export-step-details">
                  <h4>Export Customs Entry filing</h4>
                  <p>Filing the shipping bill and securing custom clearance at the originating sea port or air cargo terminal.</p>
                </div>
              </div>

              <div className="export-step-item">
                <div className="export-step-circle">4</div>
                <div className="export-step-details">
                  <h4>Freight Shipping & Landing confirmation</h4>
                  <p>Loading cargo onto booked liners and coordinating with foreign customs brokers to ensure seamless arrival clearance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExportServices;
