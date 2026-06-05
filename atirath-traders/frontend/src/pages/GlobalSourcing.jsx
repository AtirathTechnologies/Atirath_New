import React, { useState } from 'react';
import SEO from '../components/SEO';
import '../styles/globalsourcing.css';

const GlobalSourcing = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    specifications: '',
    targetPrice: '',
    moq: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.specifications) {
      alert('Please fill out all required fields.');
      return;
    }
    // Simulate API request
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      company: '',
      specifications: '',
      targetPrice: '',
      moq: '',
      message: '',
    });
  };

  return (
    <div className="global-sourcing-page">
      <SEO 
        title="Global Sourcing - Supplier Identification & Auditing"
        description="Atirath Traders sources raw materials and finished products globally. We execute vendor audits, price negotiation, and strict quality control."
        keywords="global sourcing, supplier identification, factory auditing, global procurement, atirath traders sourcing"
      />

      {/* Hero Section */}
      <section className="sourcing-hero">
        <div className="container">
          <h1>Global Sourcing</h1>
          <p>Unlocking competitive manufacturing hubs worldwide. We identify, evaluate, and manage reliable suppliers to optimize your global supply chain margins.</p>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title-custom">Our Global Procurement Cycle</h2>
          <div className="process-grid">
            <div className="process-card">
              <div className="process-num">01</div>
              <i className="fa-solid fa-address-book"></i>
              <h4>Supplier Mapping</h4>
              <p>Shortlisting 3-5 verified manufacturers capable of delivering specific product guidelines.</p>
            </div>

            <div className="process-card">
              <div className="process-num">02</div>
              <i className="fa-solid fa-industry"></i>
              <h4>Factory Audits</h4>
              <p>On-site audits evaluating capacity, tooling accuracy, social compliance, and financial stability.</p>
            </div>

            <div className="process-card">
              <div className="process-num">03</div>
              <i className="fa-solid fa-handshake"></i>
              <h4>Price Negotiation</h4>
              <p>Consolidating volumes to negotiate optimal contract pricing, payment terms, and tooling amortizations.</p>
            </div>

            <div className="process-card">
              <div className="process-num">04</div>
              <i className="fa-solid fa-clipboard-check"></i>
              <h4>Quality Control</h4>
              <p>Conducting pre-production, mid-run, and pre-shipment product inspections following AQL benchmarks.</p>
            </div>

            <div className="process-card">
              <div className="process-num">05</div>
              <i className="fa-solid fa-ship"></i>
              <h4>Logistics Dispatch</h4>
              <p>Coordinating shipping consolidation, export clearance, and ocean transport to final delivery ports.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Advantages & Map */}
      <section className="advantages-section">
        <div className="container">
          <div className="advantages-grid">
            <div className="advantages-content">
              <h3>The Atirath Sourcing Advantage</h3>
              
              <div className="advantage-item">
                <div className="advantage-icon">
                  <i className="fa-solid fa-users"></i>
                </div>
                <div className="advantage-text">
                  <h4>Local Language Inspectors</h4>
                  <p>Our inspectors operate locally inside source countries, removing linguistic bottlenecks and resolving manufacturing issues on-site.</p>
                </div>
              </div>

              <div className="advantage-item">
                <div className="advantage-icon">
                  <i className="fa-solid fa-balance-scale"></i>
                </div>
                <div className="advantage-text">
                  <h4>Contract & Dispute Management</h4>
                  <p>We draft robust bilingual purchase agreements that hold factories legally liable for defective products or delivery delays.</p>
                </div>
              </div>

              <div className="advantage-item">
                <div className="advantage-icon">
                  <i className="fa-solid fa-calculator"></i>
                </div>
                <div className="advantage-text">
                  <h4>Full Cost Transparency</h4>
                  <p>No hidden markups. We declare exact factory quotes, customs fees, and local transport invoices clearly.</p>
                </div>
              </div>
            </div>

            <div className="regions-box">
              <h3>Primary Sourcing Regions</h3>
              <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '20px', lineHeight: '1.5' }}>
                We operate sourcing hubs and inspector networks across major industrial and agricultural centers:
              </p>
              <div className="region-list">
                <div className="region-item"><i className="fa-solid fa-globe-asia"></i> East Asia (China, Japan)</div>
                <div className="region-item"><i className="fa-solid fa-map-marked-alt"></i> Southeast Asia (Vietnam, India)</div>
                <div className="region-item"><i className="fa-solid fa-globe-europe"></i> European Union (Germany, Italy)</div>
                <div className="region-item"><i className="fa-solid fa-globe-americas"></i> South America (Brazil, Argentina)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Form Layout */}
      <section className="sourcing-form-section">
        <div className="container">
          <div className="sourcing-form-grid">
            <div className="sourcing-table-box">
              <h3>Sourcing Standards Matrix</h3>
              <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '20px' }}>
                How we compare to direct sourcing methods:
              </p>
              <table className="sourcing-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Direct Sourcing</th>
                    <th>Atirath Managed Sourcing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Supplier Audits</td>
                    <td>Based on online reviews only</td>
                    <td>Strict on-site factory inspections</td>
                  </tr>
                  <tr>
                    <td>Quality Guarantee</td>
                    <td>Payment made before inspection</td>
                    <td>AQL verified before payment release</td>
                  </tr>
                  <tr>
                    <td>Customs Risk</td>
                    <td>Buyer bears shipping errors</td>
                    <td>Pre-cleared documentation & logistics</td>
                  </tr>
                  <tr>
                    <td>Communication</td>
                    <td>High timezone delays</td>
                    <td>24/7 dedicated regional managers</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="inquiry-form-container">
              <h3>Sourcing Request Form</h3>
              <p>Provide your target specifications below. We will map supplier capability and issue a free initial sourcing report.</p>

              {submitted && (
                <div className="success-message">
                  Thank you! Your sourcing request has been registered. Our procurement team will generate an initial supplier report.
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
                    <label htmlFor="targetPrice">Target Price Per Unit</label>
                    <input
                      type="text"
                      id="targetPrice"
                      name="targetPrice"
                      value={formData.targetPrice}
                      onChange={handleChange}
                      placeholder="e.g. $2.50 FOB"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="moq">Minimum Order Quantity (MOQ)</label>
                    <input
                      type="text"
                      id="moq"
                      name="moq"
                      value={formData.moq}
                      onChange={handleChange}
                      placeholder="e.g. 1000 units, 1 Ton"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="specifications">Product Specifications & Materials *</label>
                  <textarea
                    id="specifications"
                    name="specifications"
                    rows="4"
                    value={formData.specifications}
                    onChange={handleChange}
                    required
                    placeholder="Provide details about product dimensions, materials, certifications (CE, FDA, RoHS) required..."
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Additional Sourcing Details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="E.g. branding instructions, packaging needs, scheduling constraints..."
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

export default GlobalSourcing;
