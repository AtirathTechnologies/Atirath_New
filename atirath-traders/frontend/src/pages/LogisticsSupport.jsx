import React, { useState } from 'react';
import SEO from '../components/SEO';
import '../styles/logisticssupport.css';

const LogisticsSupport = () => {
  // Quote form state
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
      <SEO 
        title="Logistics Support - Sea, Air & Land Freight Services"
        description="Atirath Traders offers complete logistics support, freight forwarding, customs brokerage, warehousing, and tracking solutions."
        keywords="logistics support, freight forwarding, sea freight shipping, air cargo shipping, cargo tracking, atirath traders logistics"
      />

      {/* Hero Section */}
      <section className="logistics-hero">
        <div className="container">
          <h1>Logistics Support</h1>
          <p>Moving cargo safely across oceans, skies, and borders. Our global network handles multimodal shipping, container optimization, and local port clearance.</p>
        </div>
      </section>

      {/* Modes of Transport */}
      <section className="modes-section">
        <div className="container">
          <h2 className="section-title-custom">Multimodal Logistics Operations</h2>
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
                        <div className="status-text">
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
              </ul>
            </div>

            <div className="inquiry-form-container">
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

export default LogisticsSupport;
