import React, { useState } from 'react';
import SEO from '../components/SEO';
import '../styles/importservices.css';

const ImportServices = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    productCategory: '',
    sourceCountry: '',
    estimatedVolume: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.productCategory) {
      alert('Please fill out all required fields.');
      return;
    }
    // Simulate API request
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      company: '',
      productCategory: '',
      sourceCountry: '',
      estimatedVolume: '',
      message: '',
    });
  };

  return (
    <div className="import-services-page">
      <SEO 
        title="Import Services - Global Sourcing & Customs Clearance"
        description="Atirath Traders provides end-to-end import services, sourcing high-quality goods globally with expert customs brokerage and tariff optimization."
        keywords="import services, import customs clearance, global import sourcing, tariff optimization, atirath traders imports"
      />
      
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1>Import Services</h1>
          <p>Seamlessly sourcing, clearing, and transporting international goods straight to your warehouse. We handle the complexity so you can focus on growth.</p>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="offerings-section">
        <div className="container">
          <h2 className="section-title-custom">Our Core Import Capabilities</h2>
          <div className="offerings-grid">
            <div className="offering-card">
              <div className="offering-icon">
                <i className="fa-solid fa-file-invoice-dollar"></i>
              </div>
              <h3>Customs Clearance & Brokerage</h3>
              <p>Hassle-free customs documentation, classification, and coordination with regulatory bodies to ensure zero-delay border crossings.</p>
            </div>
            
            <div className="offering-card">
              <div className="offering-icon">
                <i className="fa-solid fa-search-location"></i>
              </div>
              <h3>Global Sourcing & Supplier Audit</h3>
              <p>Locating verified, compliant manufacturers in major hubs across Asia, Europe, and the Americas to guarantee product quality and reliability.</p>
            </div>

            <div className="offering-card">
              <div className="offering-icon">
                <i className="fa-solid fa-percent"></i>
              </div>
              <h3>Tariff & Duty Optimization</h3>
              <p>Expert evaluation of Free Trade Agreements (FTAs) and tariff classifications to legally minimize your landed import costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step Workflow */}
      <section className="workflow-section">
        <div className="container">
          <h2 className="section-title-custom">The Import Process Flow</h2>
          <div className="workflow-steps">
            <div className="workflow-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Requirement Identification & Sourcing</h4>
                <p>We work with you to understand product specifications, target pricing, and compliance requirements before identifying certified global manufacturers.</p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Sample Approval & Contract Finalization</h4>
                <p>Physical samples are procured, tested, and approved. Once validated, we execute secure international contracts establishing strict quality criteria.</p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Quality Audits & Shipping Dispatch</h4>
                <p>Before dispatch, our local inspectors verify product batches. Goods are then securely packed and dispatched via air or ocean cargo.</p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Border Customs & Final Delivery</h4>
                <p>We manage port clearance, import duty payouts, and local logistics, delivering the shipment directly to your designated destination.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details and Form */}
      <section className="details-form-section">
        <div className="container">
          <div className="details-form-grid">
            <div className="benefits-box">
              <h3>Why Choose Atirath for Imports?</h3>
              <ul className="benefits-list">
                <li>
                  <i className="fa-solid fa-shield-alt"></i>
                  <div>
                    <h4>100% Regulatory Compliance</h4>
                    <p>We stay current with international trade law updates to avoid product seizures or fines.</p>
                  </div>
                </li>
                <li>
                  <i className="fa-solid fa-clock"></i>
                  <div>
                    <h4>Minimized Transit Times</h4>
                    <p>Optimized logistics routing and pre-filed custom manifests translate to faster delivery schedules.</p>
                  </div>
                </li>
                <li>
                  <i className="fa-solid fa-hand-holding-usd"></i>
                  <div>
                    <h4>Reduced Landed Costs</h4>
                    <p>Leveraging trade lanes and consolidations to secure highly competitive sea and air freight rates.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="inquiry-form-container">
              <h3>Import Inquiry Form</h3>
              <p>Submit your procurement details below. Our trade specialists will analyze your requirements and get back to you within 24 hours.</p>
              
              {submitted && (
                <div className="success-message">
                  Thank you! Your import inquiry has been successfully received. We will connect with you shortly.
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
                    <label htmlFor="productCategory">Product Category *</label>
                    <select
                      id="productCategory"
                      name="productCategory"
                      value={formData.productCategory}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Category</option>
                      <option value="Agriculture">Agriculture & Food</option>
                      <option value="Textiles">Textiles & Garments</option>
                      <option value="Electronics">Electronics & Hardware</option>
                      <option value="Chemicals">Industrial Chemicals</option>
                      <option value="Other">Other Products</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="sourceCountry">Target Source Country</label>
                    <input
                      type="text"
                      id="sourceCountry"
                      name="sourceCountry"
                      value={formData.sourceCountry}
                      onChange={handleChange}
                      placeholder="e.g. China, Vietnam, Brazil"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="estimatedVolume">Estimated Annual Volume</label>
                  <input
                    type="text"
                    id="estimatedVolume"
                    name="estimatedVolume"
                    value={formData.estimatedVolume}
                    onChange={handleChange}
                    placeholder="e.g. 5 Containers, 50 Tons, etc."
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Specific Sourcing / Clearance Requirements</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details about specs, custom clearance history, certifications needed..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">Submit Sourcing Request</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImportServices;
