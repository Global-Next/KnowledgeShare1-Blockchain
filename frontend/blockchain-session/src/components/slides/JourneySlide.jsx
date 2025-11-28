import { useEffect, useState } from 'react';
import './JourneySlide.css';

const JourneySlide = ({ slide, animationState }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showTimeline, setShowTimeline] = useState(false);
  const [visibleBullets, setVisibleBullets] = useState(0);

  useEffect(() => {
    if (animationState === 'active') {
      setShowTimeline(true);
      
      // Animate timeline steps
      const stepTimers = slide.bullets.map((_, index) => 
        setTimeout(() => {
          setCurrentStep(prev => Math.max(prev, index + 1));
          setVisibleBullets(prev => Math.max(prev, index + 1));
        }, 800 + (index * 600))
      );
      
      return () => stepTimers.forEach(clearTimeout);
    } else {
      setCurrentStep(0);
      setShowTimeline(false);
      setVisibleBullets(0);
    }
  }, [animationState, slide.bullets]);

  const getJourneyVisual = () => {
    switch (slide.visualHint) {
      case 'factory-production':
        return (
          <div className="factory-visual">
            <div className="factory-building">
              <div className="building-icon">🏭</div>
              <div className="production-line">
                <div className={`ingredient ${currentStep >= 1 ? 'active' : ''}`}>🌾</div>
                <div className={`mixing ${currentStep >= 2 ? 'active' : ''}`}>⚙️</div>
                <div className={`quality-check ${currentStep >= 3 ? 'active' : ''}`}>🔬</div>
                <div className={`packaging ${currentStep >= 4 ? 'active' : ''}`}>📦</div>
              </div>
            </div>
            <div className="qr-code-creation">
              <div className={`qr-code ${currentStep >= 4 ? 'visible' : ''}`}>
                <div className="qr-pattern">
                  <div className="qr-square"></div>
                  <div className="qr-square"></div>
                  <div className="qr-square"></div>
                  <div className="qr-square"></div>
                </div>
                <div className="qr-label">PF240001127</div>
              </div>
            </div>
          </div>
        );
      
      case 'container-ship':
        return (
          <div className="shipping-visual">
            <div className="port-scene">
              <div className="container-yard">
                <div className={`container ${currentStep >= 1 ? 'loading' : ''}`}>📦</div>
                <div className={`container ${currentStep >= 1 ? 'loading' : ''}`}>📦</div>
                <div className={`container ${currentStep >= 1 ? 'loading' : ''}`}>📦</div>
              </div>
              <div className={`crane ${currentStep >= 2 ? 'active' : ''}`}>🏗️</div>
            </div>
            <div className="ship-journey">
              <div className={`ship ${currentStep >= 3 ? 'sailing' : ''}`}>🚢</div>
              <div className="route-line">
                <div className="departure">Durban</div>
                <div className={`waypoint ${currentStep >= 4 ? 'passed' : ''}`}>Suez Canal</div>
                <div className="destination">Dubai</div>
              </div>
            </div>
            <div className="monitoring-data">
              <div className={`sensor-reading ${currentStep >= 3 ? 'active' : ''}`}>
                🌡️ 18°C
              </div>
              <div className={`sensor-reading ${currentStep >= 3 ? 'active' : ''}`}>
                📍 GPS Active
              </div>
            </div>
          </div>
        );
      
      case 'customs-port':
        return (
          <div className="customs-visual">
            <div className="port-arrival">
              <div className={`ship-docking ${currentStep >= 1 ? 'arrived' : ''}`}>🚢</div>
              <div className="port-infrastructure">🏗️</div>
            </div>
            <div className="customs-process">
              <div className={`scanner ${currentStep >= 2 ? 'scanning' : ''}`}>📡</div>
              <div className="digital-docs">
                <div className={`document ${currentStep >= 2 ? 'verified' : ''}`}>📄 Certificate</div>
                <div className={`document ${currentStep >= 3 ? 'verified' : ''}`}>📊 Temperature Log</div>
                <div className={`document ${currentStep >= 4 ? 'verified' : ''}`}>✅ Clearance</div>
              </div>
            </div>
            <div className="clearance-time">
              <div className="time-comparison">
                <div className="old-time">❌ 2-3 days</div>
                <div className="new-time">✅ 2 hours</div>
              </div>
            </div>
          </div>
        );
      
      case 'warehouse-system':
        return (
          <div className="warehouse-visual">
            <div className="warehouse-layout">
              <div className="warehouse-building">🏢</div>
              <div className="storage-grid">
                <div className="aisle">
                  <div className="shelf-label">Aisle 7</div>
                  <div className={`storage-spot ${currentStep >= 2 ? 'occupied' : ''}`}>
                    <div className="shelf">Shelf B</div>
                    <div className="position">Pos 23</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="inventory-system">
              <div className={`scanner-gun ${currentStep >= 1 ? 'scanning' : ''}`}>📱</div>
              <div className="inventory-update">
                <div className={`stock-level ${currentStep >= 3 ? 'updated' : ''}`}>
                  Stock: 10,000 units
                </div>
                <div className={`fifo-indicator ${currentStep >= 4 ? 'active' : ''}`}>
                  FIFO: Ship by Dec 25
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'delivery-optimization':
        return (
          <div className="delivery-visual">
            <div className="order-system">
              <div className={`order-request ${currentStep >= 1 ? 'received' : ''}`}>
                📱 Order: 50 bags
              </div>
              <div className={`selection-algorithm ${currentStep >= 2 ? 'active' : ''}`}>
                🤖 Selecting oldest stock
              </div>
            </div>
            <div className="delivery-truck">
              <div className={`truck ${currentStep >= 3 ? 'loaded' : ''}`}>🚛</div>
              <div className="route-optimization">
                <div className={`route-line ${currentStep >= 4 ? 'optimized' : ''}`}>
                  <div className="waypoint">Warehouse</div>
                  <div className="waypoint">Pet Paradise</div>
                </div>
                <div className="temp-monitoring">🌡️ Monitored</div>
              </div>
            </div>
          </div>
        );
      
      case 'qr-scan-customer':
        return (
          <div className="customer-visual">
            <div className="pet-store">
              <div className="store-front">🏪 Pet Paradise</div>
              <div className="product-shelf">
                <div className={`product ${currentStep >= 1 ? 'selected' : ''}`}>
                  🥫
                  <div className="qr-code-small">QR</div>
                </div>
              </div>
            </div>
            <div className="scanning-process">
              <div className={`smartphone ${currentStep >= 2 ? 'scanning' : ''}`}>📱</div>
              <div className={`scan-beam ${currentStep >= 2 ? 'active' : ''}`}></div>
            </div>
            <div className="information-reveal">
              <div className={`info-panel ${currentStep >= 3 ? 'visible' : ''}`}>
                <div className="info-item">✅ Manufactured: Nov 27</div>
                <div className="info-item">✅ Quality: Verified</div>
                <div className="info-item">✅ Temperature: Maintained</div>
                <div className="info-item">✅ Freshness: 23 days</div>
              </div>
            </div>
            <div className={`social-share ${currentStep >= 4 ? 'visible' : ''}`}>
              📱 Shared on Instagram
            </div>
          </div>
        );

      case 'complete-supply-chain-journey':
        return (
          <div className="complete-supply-chain-visual">
            <div className="supply-chain-timeline">
              {/* Step 1: Origin */}
              <div className={`sc-step ${currentStep >= 1 ? 'active' : ''}`}>
                <div className="sc-step-header">
                  <div className="sc-step-icon">🌾</div>
                  <div className="sc-step-title">1. Origin</div>
                </div>
                <div className="sc-step-data">
                  <div className="data-item">📍 GPS: 25.2048°N, 55.2708°E</div>
                  <div className="data-item">📅 Date: Nov 15, 2024</div>
                  <div className="data-item">🔢 Batch: PF240001127</div>
                  <div className="data-item">✅ Cert: Organic Verified</div>
                </div>
                <div className="sc-step-method">
                  <div className="method-badge">📱 Mobile App</div>
                  <div className="method-badge">📄 Certificates</div>
                </div>
              </div>

              {/* Step 2: Processing */}
              <div className={`sc-step ${currentStep >= 2 ? 'active' : ''}`}>
                <div className="sc-step-header">
                  <div className="sc-step-icon">🏭</div>
                  <div className="sc-step-title">2. Processing</div>
                </div>
                <div className="sc-step-data">
                  <div className="data-item">🌡️ Temp: 18°C (Maintained)</div>
                  <div className="data-item">🔬 Quality: Passed</div>
                  <div className="data-item">📋 Cert: ISO 22000</div>
                  <div className="data-item">⏱️ Processed: Nov 20</div>
                </div>
                <div className="sc-step-method">
                  <div className="method-badge">📡 IoT Sensors</div>
                  <div className="method-badge">🤖 Auto-Record</div>
                </div>
              </div>

              {/* Step 3: Shipping */}
              <div className={`sc-step ${currentStep >= 3 ? 'active' : ''}`}>
                <div className="sc-step-header">
                  <div className="sc-step-icon">🚢</div>
                  <div className="sc-step-title">3. Shipping</div>
                </div>
                <div className="sc-step-data">
                  <div className="data-item">📦 Container: MSKU1234567</div>
                  <div className="data-item">🌡️ Temp: 18-20°C (Monitored)</div>
                  <div className="data-item">📍 Route: Durban → Dubai</div>
                  <div className="data-item">⏱️ Arrived: Dec 5, 14:30</div>
                </div>
                <div className="sc-step-method">
                  <div className="method-badge">📡 GPS Tracker</div>
                  <div className="method-badge">🌡️ Temp Sensors</div>
                </div>
              </div>

              {/* Step 4: Customs */}
              <div className={`sc-step ${currentStep >= 4 ? 'active' : ''}`}>
                <div className="sc-step-header">
                  <div className="sc-step-icon">🏛️</div>
                  <div className="sc-step-title">4. Customs</div>
                </div>
                <div className="sc-step-data">
                  <div className="data-item">✅ Cleared: Dec 5, 16:45</div>
                  <div className="data-item">📄 Docs: Verified on Blockchain</div>
                  <div className="data-item">⏱️ Time: 2 hours (vs 2-3 days)</div>
                  <div className="data-item">🔒 Immutable Record</div>
                </div>
                <div className="sc-step-method">
                  <div className="method-badge">🔗 Smart Contract</div>
                  <div className="method-badge">✅ Auto-Verify</div>
                </div>
              </div>

              {/* Step 5: Warehouse */}
              <div className={`sc-step ${currentStep >= 5 ? 'active' : ''}`}>
                <div className="sc-step-header">
                  <div className="sc-step-icon">🏢</div>
                  <div className="sc-step-title">5. Warehouse</div>
                </div>
                <div className="sc-step-data">
                  <div className="data-item">📍 Location: Aisle 7, Shelf B, Pos 23</div>
                  <div className="data-item">🌡️ Storage: 18°C Controlled</div>
                  <div className="data-item">📊 Stock: 10,000 units</div>
                  <div className="data-item">📅 FIFO: Ship by Dec 25</div>
                </div>
                <div className="sc-step-method">
                  <div className="method-badge">📱 Scanner</div>
                  <div className="method-badge">🤖 Auto-Update</div>
                </div>
              </div>

              {/* Step 6: Retail */}
              <div className={`sc-step ${currentStep >= 6 ? 'active' : ''}`}>
                <div className="sc-step-header">
                  <div className="sc-step-icon">🏪</div>
                  <div className="sc-step-title">6. Retail</div>
                </div>
                <div className="sc-step-data">
                  <div className="data-item">🏪 Store: Pet Paradise, Dubai</div>
                  <div className="data-item">📅 Received: Dec 10</div>
                  <div className="data-item">📦 Stock: 500 units</div>
                  <div className="data-item">🏷️ QR Code: Active</div>
                </div>
                <div className="sc-step-method">
                  <div className="method-badge">📱 POS System</div>
                  <div className="method-badge">🔗 Blockchain Sync</div>
                </div>
              </div>

              {/* Step 7: Customer */}
              <div className={`sc-step ${currentStep >= 7 ? 'active' : ''}`}>
                <div className="sc-step-header">
                  <div className="sc-step-icon">👤</div>
                  <div className="sc-step-title">7. Customer</div>
                </div>
                <div className="sc-step-data">
                  <div className="data-item">📱 Scan QR Code</div>
                  <div className="data-item">✅ Complete Journey Visible</div>
                  <div className="data-item">🌾 Origin → 🏭 Processing → 🚢 Shipping</div>
                  <div className="data-item">✅ Authenticity Verified</div>
                </div>
                <div className="sc-step-method">
                  <div className="method-badge">📱 QR Scanner</div>
                  <div className="method-badge">🌐 Web Dashboard</div>
                </div>
              </div>
            </div>

            {/* Client Presentation */}
            <div className={`client-presentation ${currentStep >= 7 ? 'visible' : ''}`}>
              <div className="presentation-header">How Clients See It</div>
              <div className="presentation-options">
                <div className="presentation-option">
                  <div className="option-icon">📱</div>
                  <div className="option-title">QR Code Scan</div>
                  <div className="option-desc">Instant journey view on mobile</div>
                </div>
                <div className="presentation-option">
                  <div className="option-icon">💻</div>
                  <div className="option-title">Web Dashboard</div>
                  <div className="option-desc">Detailed analytics & reports</div>
                </div>
                <div className="presentation-option">
                  <div className="option-icon">📊</div>
                  <div className="option-title">API Integration</div>
                  <div className="option-desc">Real-time data in your systems</div>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="generic-journey-visual">
            <div className="journey-path">
              {slide.bullets.map((_, index) => (
                <div 
                  key={index}
                  className={`journey-step ${index < currentStep ? 'completed' : ''} ${index === currentStep - 1 ? 'current' : ''}`}
                >
                  <div className="step-number">{index + 1}</div>
                  <div className="step-connector"></div>
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  const showBulletList = slide.visualHint !== 'complete-supply-chain-journey';

  return (
    <div className={`journey-slide ${animationState}`}>
      <div className="slide-content">
        <div className={`content-layout ${slide.visualHint === 'complete-supply-chain-journey' ? 'full-visual' : ''}`}>
          {showBulletList && (
            <div className="text-section">
              <h1 className="slide-title">{slide.title}</h1>
              {slide.subtitle && (
                <h2 className="slide-subtitle">{slide.subtitle}</h2>
              )}
              
              <ul className="journey-steps">
                {slide.bullets.map((bullet, index) => (
                  <li 
                    key={index}
                    className={`step-item ${index < visibleBullets ? 'visible' : ''} ${index === currentStep - 1 ? 'current' : ''}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="step-indicator">
                      <div className="step-number">{index + 1}</div>
                    </div>
                    <div className="step-content">{bullet}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {!showBulletList && (
            <div className="text-section-header">
              <h1 className="slide-title">{slide.title}</h1>
              {slide.subtitle && (
                <h2 className="slide-subtitle">{slide.subtitle}</h2>
              )}
            </div>
          )}
          
          <div className={`visual-section ${showTimeline ? 'visible' : ''} ${slide.visualHint === 'complete-supply-chain-journey' ? 'full-width' : ''}`}>
            {getJourneyVisual()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneySlide;
