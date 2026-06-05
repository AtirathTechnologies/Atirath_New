import React, { useState } from 'react';
import SEO from '../components/SEO';
import '../styles/customsolutions.css';

const CustomSolutions = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    solutionType: 'White Labeling',
    businessScale: 'Medium Scale Enterprise',
    requirements: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.requirements) {
      alert('Please fill out all required fields.');
      return;
    }
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      company: '',
      solutionType: 'White Labeling',
      businessScale: 'Medium Scale Enterprise',
      requirements: '',
    });
  };

  return (
    <div className="custom-solutions-page">
      <SEO 
        title="Custom Solutions - OEM Manufacturing & Trade Finance"
        description="Atirath Traders structures bespoke trade solutions including contract manufacturing, white labeling, custom packaging, and trade financing."
        keywords="custom trade solutions, white labeling services, contract manufacturing, trade finance solutions, atirath traders solutions"
      />

      {/* Hero Section */}
      <section className="solutions-hero">
        <div className="container">
          <h1>Custom Solutions</h1>
          <p>Designing tailored import-export structures for complex supply chains. From custom branding and packaging to contract manufacturing and trade finance solutions.</p>
        </div>
      </section>

      {/* Bespoke Capabilities */}
      <section className="solutions-section">
        <div className="container">
          <h2 className="section-title-custom">Tailored Trade Services</h2>
          <div className="solutions-grid">
            <div className="solution-card">
              <div className="solution-icon">
                <i className="fa-solid fa-tags"></i>
              </div>
              <h3>White Labeling & OEM</h3>
              <p>Source high-volume commodities and package them directly under your corporate logo. We manage all printing templates and packaging checks.</p>
              <ul className="solution-features">
                <li><i className="fa-solid fa-circle-check"></i> Custom package design</li>
                <li><i className="fa-solid fa-circle-check"></i> Multi-language labelling compliance</li>
                <li><i className="fa-solid fa-circle-check"></i> Strict brand copyright security</li>
              </ul>
            </div>

            <div className="solution-card">
              <div className="solution-icon">
                <i className="fa-solid fa-tools"></i>
              </div>
              <h3>Contract Manufacturing</h3>
              <p>Leverage our global network of ISO-certified manufacturing facilities. We handle tooling setup, material sourcing, and assembly inspections.</p>
              <ul className="solution-features">
                <li><i className="fa-solid fa-circle-check"></i> Precision engineering tooling</li>
                <li><i className="fa-solid fa-circle-check"></i> AQL batch inspections</li>
                <li><i className="fa-solid fa-circle-check"></i> IP protection clauses</li>
              </ul>
            </div>

            <div className="solution-card">
              <div className="solution-icon">
                <i className="fa-solid fa-landmark"></i>
              </div>
              <h3>Trade Financing & Escrow</h3>
              <p>Access structured credit facilities, deferred payment agreements, and secure escrow terms to optimize working capital cycles.</p>
              <ul className="solution-features">
                <li><i className="fa-solid fa-circle-check"></i> Letter of Credit facilitation</li>
                <li><i className="fa-solid fa-circle-check"></i> Usance and sight payment setups</li>
                <li><i className="fa-solid fa-circle-check"></i> Multicurrency settlement protection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="cases-section">
        <div className="container">
          <h2 className="section-title-custom">Success Cases & Impact</h2>
          <div className="cases-grid">
            <div className="case-card">
              <span className="case-tag">White Labeling Case</span>
              <h4>European Supermarket Launch</h4>
              <p>Structured the supply of premium Basmati Rice from India to a leading European grocery chain, white-labeled and retail-packaged at the source.</p>
              <div className="case-result">
                <i className="fa-solid fa-chart-line"></i> 14% Reduction in retail package costs
              </div>
            </div>

            <div className="case-card">
              <span className="case-tag">Contract Manufacturing</span>
              <h4>Automotive Fastener Tooling</h4>
              <p>Coordinated custom mold tooling and ISO-compliant steel casting in Southeast Asia for an Australian automotive assemblies distributor.</p>
              <div className="case-result">
                <i className="fa-solid fa-chart-line"></i> Mold approval achieved in 18 days
              </div>
            </div>

            <div className="case-card">
              <span className="case-tag">Trade Finance</span>
              <h4>Deferred Credit Sourcing</h4>
              <p>Supported a large textile manufacturer by structuring a 90-day Usance Letter of Credit for bulk raw cotton sourcing from Brazil.</p>
              <div className="case-result">
                <i className="fa-solid fa-chart-line"></i> Maintained raw material pipeline reserves
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation section */}
      <section className="consultation-section">
        <div className="container">
          <div className="consultation-grid">
            <div className="inquiry-form-container">
              <h3>Bespoke Project consultation</h3>
              <p>Does your supply chain require customized processing or finance terms? Discuss your complex trade requirements with our advisory group.</p>

              {submitted && (
                <div className="success-message">
                  Thank you! Your custom solution request has been registered. A trade advisor will review and contact you to schedule a call.
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
                    <label htmlFor="solutionType">Primary Solution Focus</label>
                    <select
                      id="solutionType"
                      name="solutionType"
                      value={formData.solutionType}
                      onChange={handleChange}
                    >
                      <option value="White Labeling">White Labeling / Custom Packaging</option>
                      <option value="Contract Manufacturing">OEM / Contract Manufacturing</option>
                      <option value="Trade Finance">Trade Finance & Credit lines</option>
                      <option value="Other">Mixed Sourcing Model</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="businessScale">Enterprise Scale</label>
                    <select
                      id="businessScale"
                      name="businessScale"
                      value={formData.businessScale}
                      onChange={handleChange}
                    >
                      <option value="Small Business">Small Scale Enterprise</option>
                      <option value="Medium Scale Enterprise">Medium Scale Enterprise</option>
                      <option value="Large Corporation">Large Corporation / MNC</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="requirements">Scope of Sourcing & Custom Requirements *</label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    rows="4"
                    value={formData.requirements}
                    onChange={handleChange}
                    required
                    placeholder="Please outline the custom packing, manufacturing tolerance, or credit facilities you require..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">Request Advisor Consultation</button>
              </form>
            </div>

            <div className="faq-box">
              <h3>Bespoke Solutions FAQs</h3>
              
              <div className="faq-item">
                <h4>What are the MOQ standards for White Labeling?</h4>
                <p>MOQ varies by product. For food commodities (like rice or grains), it typically starts at one 20ft container load, which is about 18-20 Metric Tons.</p>
              </div>

              <div className="faq-item">
                <h4>How do you protect our intellectual property?</h4>
                <p>We sign bilateral Non-Disclosure Agreements (NDAs) and IP protection contracts with factories before releasing blueprints or logos.</p>
              </div>

              <div className="faq-item">
                <h4>Can you structure sight/usance Letters of Credit?</h4>
                <p>Yes, our trade finance desk coordinates with top-tier issuing banks to structure sight, usance, and transferrable L/Cs matching trade cycles.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomSolutions;
