import { useEffect, useState } from 'react';
import './ProblemSlide.css';

const ProblemSlide = ({ slide, isActive, animationState }) => {
  const [visibleBullets, setVisibleBullets] = useState(0);
  const [showVisual, setShowVisual] = useState(false);

  useEffect(() => {
    if (animationState === 'active') {
      setShowVisual(true);
      
      // Animate bullets appearing one by one
      const timers = slide.bullets.map((_, index) => 
        setTimeout(() => {
          setVisibleBullets(prev => Math.max(prev, index + 1));
        }, 800 + (index * 400))
      );
      
      return () => timers.forEach(clearTimeout);
    } else {
      setVisibleBullets(0);
      setShowVisual(false);
    }
  }, [animationState, slide.bullets]);

  const getVisualComponent = () => {
    // If no visualHint, show default
    if (!slide.visualHint) {
      return (
        <div className="generic-problem-visual">
          <div className="problem-icon">⚠️</div>
          <div className="impact-waves">
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
          </div>
        </div>
      );
    }

    switch (slide.visualHint) {
      case 'trust-network':
        return (
          <div className="trust-network-visual">
            <div className="central-authority">
              <div className="authority-icon">{slide.id === 'trust-in-banks' ? '🏦' : '🏛️'}</div>
              <div className="authority-label">{slide.id === 'trust-in-banks' ? 'Bank' : 'Government'}</div>
              <div className="trust-arrow">↓</div>
              <div className="people-group">
                <div className="person">👤</div>
                <div className="person">👤</div>
                <div className="person">👤</div>
              </div>
              <div className="vulnerability-indicator">⚠️ Vulnerable</div>
              <div className="trust-tradeoff">
                <div className="tradeoff-item">✅ Trust</div>
                <div className="tradeoff-item">❌ Vulnerability</div>
              </div>
            </div>
            <div className="vs-divider">VS</div>
            <div className="decentralized-network">
              <div className="network-node">🔗</div>
              <div className="network-node">🔗</div>
              <div className="network-node">🔗</div>
              <div className="network-node">🔗</div>
              <div className="network-connections"></div>
              <div className="autonomy-indicator">✅ Self-Governing</div>
              <div className="no-tradeoff">
                <div className="tradeoff-item">✅ Trust</div>
                <div className="tradeoff-item">✅ No Vulnerability</div>
              </div>
            </div>
          </div>
        );
      case 'pet-food-mystery':
      case 'cost-analysis':
        return (
          <div className="mystery-box-visual">
            <div className="pet-food-bag">
              <div className="bag-icon">🥫</div>
              <div className="question-marks">
                <span>❓</span>
                <span>❓</span>
                <span>❓</span>
              </div>
            </div>
            <div className="split-screen">
              <div className="what-we-know">
                <h4>What We Know</h4>
                <ul>
                  <li>Product name</li>
                  <li>Basic specs</li>
                  <li>Price</li>
                </ul>
              </div>
              <div className="what-customers-want">
                <h4>What Customers Want</h4>
                <ul>
                  <li>Complete journey</li>
                  <li>Quality proof</li>
                  <li>Safety verification</li>
                </ul>
              </div>
            </div>
          </div>
        );
      
      case 'social-media-trust':
        return (
          <div className="trust-gap-visual">
            <div className="social-feed">
              <div className="post negative">
                <div className="user">😟 Pet Owner</div>
                <div className="content">Found something weird in my dog's food... 😰</div>
                <div className="engagement">💬 45 🔄 23 ❤️ 12</div>
              </div>
              <div className="spreading-effect">
                <div className="ripple"></div>
                <div className="ripple"></div>
                <div className="ripple"></div>
              </div>
            </div>
            <div className="trust-meter">
              <div className="meter-label">Customer Trust</div>
              <div className="meter-bar">
                <div className="meter-fill declining"></div>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="generic-problem-visual">
            <div className="problem-icon">
              {slide.visualHint === 'trust-network' ? '🌐' : 
               slide.visualHint === 'cost-analysis' ? '💰' : '⚠️'}
            </div>
            <div className="impact-waves">
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
            </div>
            {slide.visualHint === 'trust-network' && (
              <div className="visual-label">Trust Network Visualization</div>
            )}
            {slide.visualHint === 'cost-analysis' && (
              <div className="visual-label">Cost Impact Analysis</div>
            )}
          </div>
        );
    }
  };

  return (
    <div className={`problem-slide ${animationState}`}>
      <div className="slide-content">
        <div className="content-grid">
          <div className="text-content">
            <h1 className="slide-title">{slide.title}</h1>
            {slide.subtitle && (
              <h2 className="slide-subtitle">{slide.subtitle}</h2>
            )}
            
            <ul className="problem-list">
              {slide.bullets.map((bullet, index) => (
                <li 
                  key={index}
                  className={`problem-item ${index < visibleBullets ? 'visible' : ''}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="problem-icon">🚨</div>
                  <div className="problem-text">{bullet}</div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={`visual-content ${showVisual || animationState === 'active' ? 'visible' : ''}`}>
            {getVisualComponent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSlide;
