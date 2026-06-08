import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import '../styles/services.css';

// ==========================================================================
// 1. IMPORT SERVICES COMPONENT
// ==========================================================================
const ImportSection = () => {
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
    
    const msg = 
      `*🛒 New Import Services Inquiry*\n\n` +
      `*👤 Contact Details*\n` +
      `• Name    : ${formData.name}\n` +
      `• Email   : ${formData.email}\n` +
      `• Company : ${formData.company || "N/A"}\n\n` +
      `*📦 Inquiry Details*\n` +
      `• Category: ${formData.productCategory}\n` +
      `• Source  : ${formData.sourceCountry || "N/A"}\n` +
      `• Volume  : ${formData.estimatedVolume || "N/A"}\n` +
      `• Details : ${formData.message || "N/A"}`;
      
    const waUrl = `https://wa.me/91970744571?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");

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
      {/* Core Offerings */}
      <section className="offerings-section">
        <div className="container">
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h2 className="section-title-custom" style={{ margin: '0' }}>Import Services</h2>
            <button 
              onClick={() => document.getElementById('import-inquiry-form').scrollIntoView({ behavior: 'smooth' })} 
              className="explore-btn" 
              style={{ position: 'absolute', right: 0, padding: '10px 20px', backgroundColor: '#f46a2a', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: '600', transition: 'background 0.3s' }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#d95a1c'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#f46a2a'}
            >
              Explore Import Services <i className="fa-solid fa-arrow-down" style={{ marginLeft: '5px' }}></i>
            </button>
          </div>
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
                <li>
                  <i className="fa-solid fa-headset"></i>
                  <div>
                    <h4>Dedicated Account Manager</h4>
                    <p>A single point of contact for all your import queries, document collection, and status updates.</p>
                  </div>
                </li>
                <li>
                  <i className="fa-solid fa-map-location-dot"></i>
                  <div>
                    <h4>24/7 Real-Time Tracking</h4>
                    <p>Live visibility into your cargo's journey, from factory dispatch to final warehouse delivery.</p>
                  </div>
                </li>
                <li>
                  <i className="fa-solid fa-file-contract"></i>
                  <div>
                    <h4>Comprehensive Insurance</h4>
                    <p>Full-coverage marine and freight insurance securing your goods against any transit liabilities or damages.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="inquiry-form-container" id="import-inquiry-form">
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

// ==========================================================================
// 2. EXPORT SERVICES COMPONENT
// ==========================================================================
const ExportSection = () => {
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
    
    const msg = 
      `*🚢 New Export Services Inquiry*\n\n` +
      `*👤 Contact Details*\n` +
      `• Name    : ${formData.name}\n` +
      `• Email   : ${formData.email}\n` +
      `• Company : ${formData.company || "N/A"}\n\n` +
      `*📦 Inquiry Details*\n` +
      `• Product : ${formData.exportProduct}\n` +
      `• Market  : ${formData.targetMarket || "N/A"}\n` +
      `• Volume  : ${formData.estimatedVolume || "N/A"}\n` +
      `• Details : ${formData.message || "N/A"}`;
      
    const waUrl = `https://wa.me/91970744571?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");

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
      {/* Commodities Section */}
      <section className="commodities-section">
        <div className="container">
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h2 className="section-title-custom" style={{ margin: '0' }}>Export Services</h2>
            <button 
              onClick={() => document.getElementById('export-inquiry-form').scrollIntoView({ behavior: 'smooth' })} 
              className="explore-btn" 
              style={{ position: 'absolute', right: 0, padding: '10px 20px', backgroundColor: '#f46a2a', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: '600', transition: 'background 0.3s' }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#d95a1c'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#f46a2a'}
            >
              Explore Export Services <i className="fa-solid fa-arrow-down" style={{ marginLeft: '5px' }}></i>
            </button>
          </div>
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

      {/* Compliance Section */}
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
            <div className="inquiry-form-container" id="export-inquiry-form">
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

              <div className="export-step-item">
                <div className="export-step-circle">5</div>
                <div className="export-step-details">
                  <h4>Trade Documentation Courier</h4>
                  <p>Dispatching original B/L, Commercial Invoice, and CO directly to consignee or bank under L/C terms.</p>
                </div>
              </div>

              <div className="export-step-item">
                <div className="export-step-circle">6</div>
                <div className="export-step-details">
                  <h4>Post-Export Support</h4>
                  <p>Resolving any destination-port queries, managing duty drawbacks, and maintaining export compliance records.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// ==========================================================================
// 3. GLOBAL SOURCING COMPONENT
// ==========================================================================
const SourcingSection = () => {
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
    
    const msg = 
      `*🌍 New Global Sourcing Inquiry*\n\n` +
      `*👤 Contact Details*\n` +
      `• Name    : ${formData.name}\n` +
      `• Email   : ${formData.email}\n` +
      `• Company : ${formData.company || "N/A"}\n\n` +
      `*📦 Inquiry Details*\n` +
      `• Specs   : ${formData.specifications}\n` +
      `• Price   : ${formData.targetPrice || "N/A"}\n` +
      `• MOQ     : ${formData.moq || "N/A"}\n` +
      `• Details : ${formData.message || "N/A"}`;
      
    const waUrl = `https://wa.me/91970744571?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");

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
      {/* Sourcing Process */}
      <section className="process-section">
        <div className="container">
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h2 className="section-title-custom" style={{ margin: '0' }}>Global Sourcing</h2>
            <button 
              onClick={() => document.getElementById('sourcing-inquiry-form').scrollIntoView({ behavior: 'smooth' })} 
              className="explore-btn" 
              style={{ position: 'absolute', right: 0, padding: '10px 20px', backgroundColor: '#f46a2a', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: '600', transition: 'background 0.3s' }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#d95a1c'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#f46a2a'}
            >
              Explore Global Sourcing <i className="fa-solid fa-arrow-down" style={{ marginLeft: '5px' }}></i>
            </button>
          </div>
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
                  <tr>
                    <td>Supplier Reliability</td>
                    <td>High default risk</td>
                    <td>Vetted supply chain network</td>
                  </tr>
                  <tr>
                    <td>Negotiation Leverage</td>
                    <td>Weak purchasing power</td>
                    <td>Bulk consolidated rate advantages</td>
                  </tr>
                  <tr>
                    <td>Logistics Coordination</td>
                    <td>Self-managed & complex</td>
                    <td>End-to-end managed freight</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="inquiry-form-container" id="sourcing-inquiry-form">
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

// ==========================================================================
// 4. LOGISTICS SUPPORT COMPONENT
// ==========================================================================
const LogisticsSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    origin: '',
    destination: '',
    weight: '',
    dimensions: '',
    transportMode: 'Ocean Freight',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Tracking simulator state
  const [trackingCode, setTrackingCode] = useState('');
  const [trackingData, setTrackingData] = useState(null);
  const [trackingError, setTrackingError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.origin || !formData.destination) {
      alert('Please fill out all required fields.');
      return;
    }

    const msg = 
      `*🚛 New Logistics Quote Request*\n\n` +
      `*👤 Contact Details*\n` +
      `• Name    : ${formData.name}\n` +
      `• Email   : ${formData.email}\n` +
      `*📦 Shipment Details*\n` +
      `• Mode    : ${formData.transportMode}\n` +
      `• Origin  : ${formData.origin}\n` +
      `• Dest.   : ${formData.destination}\n` +
      `• Weight  : ${formData.weight || "N/A"}\n` +
      `• Dims.   : ${formData.dimensions || "N/A"}\n` +
      `• Details : ${formData.message || "N/A"}`;
      
    const waUrl = `https://wa.me/91970744571?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");

    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      origin: '',
      destination: '',
      weight: '',
      dimensions: '',
      transportMode: 'Ocean Freight',
      message: '',
    });
  };

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    setTrackingError('');
    setTrackingData(null);

    const cleanCode = trackingCode.trim().toUpperCase();
    if (!cleanCode) {
      setTrackingError('Please enter a tracking number.');
      return;
    }

    if (cleanCode === 'AT-12345') {
      setTrackingData({
        code: 'AT-12345',
        status: 'In Transit',
        origin: 'Port of Nhava Sheva, India',
        destination: 'Port of Rotterdam, Netherlands',
        eta: 'June 25, 2026',
        carrier: 'Maersk Line',
        steps: [
          { status: 'Cargo Received & Documented', date: 'June 01, 2026', active: true },
          { status: 'Export Customs Cleared', date: 'June 03, 2026', active: true },
          { status: 'Vessel Departed Origin Port', date: 'June 04, 2026', active: true },
          { status: 'In Ocean Transit', date: 'Estimated: June 05 - June 23', active: false },
          { status: 'Arrival & Destination Customs', date: 'Estimated: June 24', active: false },
        ]
      });
    } else {
      setTrackingError('Tracking number not found. Try entering test code "AT-12345"');
    }
  };

  return (
    <div className="logistics-page">
      {/* Modes of Transport */}
      <section className="modes-section">
        <div className="container">
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h2 className="section-title-custom" style={{ margin: '0' }}>Logistics Support</h2>
            <button 
              onClick={() => document.getElementById('logistics-inquiry-form').scrollIntoView({ behavior: 'smooth' })} 
              className="explore-btn" 
              style={{ position: 'absolute', right: 0, padding: '10px 20px', backgroundColor: '#f46a2a', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: '600', transition: 'background 0.3s' }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#d95a1c'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#f46a2a'}
            >
              Explore Logistics Support <i className="fa-solid fa-arrow-down" style={{ marginLeft: '5px' }}></i>
            </button>
          </div>
          <div className="modes-grid">
            <div className="mode-card">
              <img 
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80" 
                alt="Sea Freight" 
                className="mode-img"
              />
              <div className="mode-content">
                <div className="mode-header">
                  <i className="fa-solid fa-ship"></i>
                  <h3>Ocean Freight (FCL & LCL)</h3>
                </div>
                <p>Cost-effective sea shipping using Full Container Load (FCL) or Less than Container Load (LCL) consolidation to major global ports.</p>
                <div className="mode-specs">
                  <div><strong>Transit:</strong> 15 - 40 Days</div>
                  <div><strong>Best for:</strong> Bulk, machinery, and non-urgent heavy cargo</div>
                </div>
              </div>
            </div>

            <div className="mode-card">
              <img 
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80" 
                alt="Air Freight" 
                className="mode-img"
              />
              <div className="mode-content">
                <div className="mode-header">
                  <i className="fa-solid fa-plane"></i>
                  <h3>Air Freight forwarding</h3>
                </div>
                <p>Express air cargo routing for high-value, time-critical, or temperature-sensitive products utilizing major cargo alliances.</p>
                <div className="mode-specs">
                  <div><strong>Transit:</strong> 3 - 7 Days</div>
                  <div><strong>Best for:</strong> Electronics, pharmaceuticals, and samples</div>
                </div>
              </div>
            </div>

            <div className="mode-card">
              <img 
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80" 
                alt="Land Transport" 
                className="mode-img"
              />
              <div className="mode-content">
                <div className="mode-header">
                  <i className="fa-solid fa-truck"></i>
                  <h3>Overland Trucking</h3>
                </div>
                <p>First and last-mile trucking connections, flatbed machinery hauling, and cross-border trucking throughout Asia and Europe.</p>
                <div className="mode-specs">
                  <div><strong>Transit:</strong> 1 - 5 Days</div>
                  <div><strong>Best for:</strong> Regional delivery and port-to-warehouse cartage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tools Section */}
      <section className="logistics-tools-section">
        <div className="container">
          <div className="tools-grid">
            <div className="tool-box">
              <h3><i className="fa-solid fa-map-marked-alt"></i> Live Shipment Tracking</h3>
              <p>Simulate tracking your active cargo shipment. Enter your code to check the container dispatch milestones.</p>
              
              <form onSubmit={handleTrackSubmit} className="tracking-input-group">
                <input
                  type="text"
                  placeholder="Enter tracking number (e.g. AT-12345)"
                  value={trackingCode}
                  onChange={(e) => setTrackingCode(e.target.value)}
                />
                <button type="submit">Track Cargo</button>
              </form>

              {trackingError && <p style={{ color: '#dc3545', fontSize: '0.88rem', marginTop: '10px' }}>{trackingError}</p>}

              {trackingData && (
                <div className="tracking-result">
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <span><strong>Status:</strong> <span style={{ color: '#28a745', fontWeight: 'bold' }}>{trackingData.status}</span></span>
                    <span><strong>Carrier:</strong> {trackingData.carrier}</span>
                  </div>
                  <div style={{ marginBottom: '15px', fontSize: '0.85rem' }}>
                    <div><strong>Route:</strong> {trackingData.origin} → {trackingData.destination}</div>
                    <div><strong>ETA:</strong> {trackingData.eta}</div>
                  </div>
                  <div style={{ borderLeft: '2px solid #eee', paddingLeft: '15px', marginLeft: '5px' }}>
                    {trackingData.steps.map((step, idx) => (
                      <div key={idx} className="tracking-status-step">
                        <div className={`status-dot ${step.active ? 'active' : ''}`} style={{ marginLeft: '-23px' }}></div>
                        <div className="status-text" style={{ marginLeft: '10px' }}>
                          <h5>{step.status}</h5>
                          <p>{step.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="tool-box">
              <h3><i className="fa-solid fa-warehouse"></i> Integrated Warehousing</h3>
              <p>Secure inventory depots situated next to major deepwater ports to reduce transfer delays.</p>
              <ul className="info-feature-list" style={{ marginTop: '20px' }}>
                <li>
                  <i className="fa-solid fa-snowflake"></i>
                  <div>
                    <h4>Cold Chain Storage</h4>
                    <p>Temperature-monitored facilities for fresh agricultural products, pharmaceutical ingredients, and food products.</p>
                  </div>
                </li>
                <li>
                  <i className="fa-solid fa-barcode"></i>
                  <div>
                    <h4>Real-time WMS Integration</h4>
                    <p>Barcoded inventory tracking systems that export directly to your ERP for complete inventory transparency.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="quote-section">
        <div className="container">
          <div className="quote-grid">
            <div className="logistics-info-box">
              <h3>Secure Shipping Rate Proposals</h3>
              <p>We work with leading ocean alliances and air cargo carriers to lock in low rates, even during peak shipping seasons. Submit your shipment route parameters and secure a custom freight quote.</p>
              
              <ul className="info-feature-list">
                <li>
                  <i className="fa-solid fa-anchor"></i>
                  <div>
                    <h4>FCL Container Management</h4>
                    <p>Booking 20ft, 40ft, and refrigerated containers with complete export filing and terminal handling.</p>
                  </div>
                </li>
                <li>
                  <i className="fa-solid fa-balance-scale"></i>
                  <div>
                    <h4>Consolidation (LCL) Hubs</h4>
                    <p>Weekly cargo consolidation routes to save shipping costs for small-volume import and export businesses.</p>
                  </div>
                </li>
                <li>
                  <i className="fa-solid fa-shield-alt"></i>
                  <div>
                    <h4>Cargo Insurance</h4>
                    <p>All-risk marine cargo coverage securing shipments against storms, accidents, or cargo losses.</p>
                  </div>
                </li>
                <li>
                  <i className="fa-solid fa-file-signature"></i>
                  <div>
                    <h4>Customs Clearance Support</h4>
                    <p>Hassle-free customs brokerage services for both import and export borders.</p>
                  </div>
                </li>
                <li>
                  <i className="fa-solid fa-map-location-dot"></i>
                  <div>
                    <h4>Real-time Cargo Tracking</h4>
                    <p>Live GPS updates and milestone tracking for your entire supply chain journey.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="inquiry-form-container" id="logistics-inquiry-form">
              <h3>Shipping Quote Request</h3>
              <p>Request current container shipping and air cargo tariffs matching your shipment profile.</p>

              {submitted && (
                <div className="success-message">
                  Thank you! Your shipping quote request has been registered. Our pricing team will send custom tariffs within 12 hours.
                </div>
              )}

              <form onSubmit={handleQuoteSubmit}>
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
                    <label htmlFor="transportMode">Transport Mode</label>
                    <select
                      id="transportMode"
                      name="transportMode"
                      value={formData.transportMode}
                      onChange={handleChange}
                    >
                      <option value="Ocean Freight">Ocean Freight (FCL/LCL)</option>
                      <option value="Air Cargo">Air Cargo forwarding</option>
                      <option value="Land Trucking">Overland Trucking</option>
                      <option value="Multimodal">Multimodal (Mix)</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="origin">Origin City/Port *</label>
                    <input
                      type="text"
                      id="origin"
                      name="origin"
                      value={formData.origin}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Hyderabad, India"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="destination">Destination City/Port *</label>
                    <input
                      type="text"
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Hamburg, Germany"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="weight">Total Weight (kg)</label>
                    <input
                      type="text"
                      id="weight"
                      name="weight"
                      value={formData.weight}
                      onChange={handleChange}
                      placeholder="e.g. 4500 kg"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="dimensions">Cargo Dimensions / Volume</label>
                    <input
                      type="text"
                      id="dimensions"
                      name="dimensions"
                      value={formData.dimensions}
                      onChange={handleChange}
                      placeholder="e.g. 12 CBM, 3 Pallets"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Specific Cargo Handling Instructions</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Specify if cargo is hazardous, requires temperature controls, or needs tail-gate truck pickup..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">Request Shipping Rates</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// ==========================================================================
// 5. CUSTOM SOLUTIONS COMPONENT
// ==========================================================================
const CustomSection = () => {
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

    const msg = 
      `*⚙️ New Custom Solutions Inquiry*\n\n` +
      `*👤 Contact Details*\n` +
      `• Name    : ${formData.name}\n` +
      `• Email   : ${formData.email}\n` +
      `• Company : ${formData.company || "N/A"}\n\n` +
      `*💡 Project Details*\n` +
      `• Type    : ${formData.solutionType}\n` +
      `• Scale   : ${formData.businessScale}\n` +
      `• Scope   : ${formData.requirements || "N/A"}`;
      
    const waUrl = `https://wa.me/91970744571?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");

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
      {/* Bespoke Capabilities */}
      <section className="solutions-section">
        <div className="container">
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h2 className="section-title-custom" style={{ margin: '0' }}>Custom Solutions</h2>
            <button 
              onClick={() => document.getElementById('custom-inquiry-form').scrollIntoView({ behavior: 'smooth' })} 
              className="explore-btn" 
              style={{ position: 'absolute', right: 0, padding: '10px 20px', backgroundColor: '#f46a2a', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: '600', transition: 'background 0.3s' }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#d95a1c'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#f46a2a'}
            >
              Explore Custom Solutions <i className="fa-solid fa-arrow-down" style={{ marginLeft: '5px' }}></i>
            </button>
          </div>
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
            <div className="inquiry-form-container" id="custom-inquiry-form">
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
              
              <div className="faq-item">
                <h4>Do you provide product certification?</h4>
                <p>Yes, we ensure all manufactured products adhere to global standards like CE, FDA, RoHS, or ISO depending on your destination market.</p>
              </div>
              
              <div className="faq-item">
                <h4>Can you consolidate orders from multiple factories?</h4>
                <p>Absolutely. We manage warehouse consolidation, grouping items from different suppliers into a single shipping container to save you costs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// ==========================================================================
// MAIN SERVICES PAGE ROUTE COMPONENT WITH TABBING SYSTEM
// ==========================================================================
const TABS = [
  { id: 'import', name: 'Import Services', icon: 'fa-solid fa-file-invoice-dollar' },
  { id: 'export', name: 'Export Services', icon: 'fa-solid fa-ship' },
  { id: 'sourcing', name: 'Global Sourcing', icon: 'fa-solid fa-globe' },
  { id: 'logistics', name: 'Logistics Support', icon: 'fa-solid fa-truck' },
  { id: 'custom', name: 'Custom Solutions', icon: 'fa-solid fa-gears' }
];

const ServicesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState('import');

  // Sync tab with query parameters
  useEffect(() => {
    if (currentTabParam && TABS.some(tab => tab.id === currentTabParam)) {
      setActiveTab(currentTabParam);
    } else {
      setActiveTab('import');
    }
  }, [currentTabParam]);

  const handleTabChange = (tabId) => {
    setSearchParams({ tab: tabId });
    // Scroll to the tabs container for seamless navigation
    setTimeout(() => {
      const element = document.getElementById('services-tabs-anchor');
      if (element) {
        const yOffset = -85; // accounts for header + tab bar height
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 50);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'import':
        return <ImportSection />;
      case 'export':
        return <ExportSection />;
      case 'sourcing':
        return <SourcingSection />;
      case 'logistics':
        return <LogisticsSection />;
      case 'custom':
        return <CustomSection />;
      default:
        return <ImportSection />;
    }
  };

  const getSEOData = () => {
    switch (activeTab) {
      case 'import':
        return {
          title: "Import Services - Global Sourcing & Customs Clearance",
          description: "Atirath Traders provides end-to-end import services, sourcing high-quality goods globally with expert customs brokerage.",
          keywords: "import services, import customs clearance, global import sourcing, tariff optimization"
        };
      case 'export':
        return {
          title: "Export Services - Global Distribution & Trade Compliance",
          description: "Atirath Traders enables seamless global exports. We manage international marketing, freight routing, custom exports clearance.",
          keywords: "export services, international trade export, export compliance, cargo shipping export"
        };
      case 'sourcing':
        return {
          title: "Global Sourcing - Supplier Identification & Auditing",
          description: "Atirath Traders sources raw materials and finished products globally. We execute vendor audits, price negotiation, and strict quality control.",
          keywords: "global sourcing, supplier identification, factory auditing, global procurement"
        };
      case 'logistics':
        return {
          title: "Logistics Support - Sea, Air & Land Freight Services",
          description: "Atirath Traders offers complete logistics support, freight forwarding, customs brokerage, warehousing, and tracking solutions.",
          keywords: "logistics support, freight forwarding, sea freight shipping, air cargo shipping, cargo tracking"
        };
      case 'custom':
        return {
          title: "Custom Solutions - OEM Manufacturing & Trade Finance",
          description: "Atirath Traders structures bespoke trade solutions including contract manufacturing, white labeling, custom packaging, and trade financing.",
          keywords: "custom trade solutions, white labeling services, contract manufacturing, trade finance solutions"
        };
      default:
        return {
          title: "Our Services - Global Trade, Import-Export, Sourcing & Logistics",
          description: "Atirath Traders provides comprehensive Import-Export, Sourcing, Logistics and Custom OEM manufacturing services globally.",
          keywords: "atirath traders services, global trade solutions, import export agent, cargo forwarding, custom manufacturing"
        };
    }
  };

  const seo = getSEOData();

  return (
    <div className="services-page-wrapper">
      <SEO 
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
      />

      {/* Main Unified Hero */}
      <section className="services-main-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Providing premium end-to-end import, export, sourcing, logistics, and bespoke trade solutions to scale your business globally.</p>
        </div>
      </section>

      {/* Tab Navigation Section */}
      <div id="services-tabs-anchor"></div>
      <div className="services-tabs-container">
        <div className="container">
          <div className="services-tabs-wrapper">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                className={`service-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => handleTabChange(tab.id)}
              >
                <i className={tab.icon}></i>
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic Content Area */}
      <div className="services-tab-content-area" key={activeTab}>
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ServicesPage;
