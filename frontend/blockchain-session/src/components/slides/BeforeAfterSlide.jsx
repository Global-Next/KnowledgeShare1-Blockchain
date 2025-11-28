import { useEffect, useState } from 'react';
import './BeforeAfterSlide.css';

const BeforeAfterSlide = ({ slide, isActive, animationState }) => {
  const [showBefore, setShowBefore] = useState(false);
  const [showAfter, setShowAfter] = useState(false);
  const [visibleBullets, setVisibleBullets] = useState(0);

  useEffect(() => {
    if (animationState === 'active') {
      const timer1 = setTimeout(() => setShowBefore(true), 500);
      const timer2 = setTimeout(() => setShowAfter(true), 1200);
      
      const bulletTimers = slide.bullets.map((_, index) => 
        setTimeout(() => {
          setVisibleBullets(prev => Math.max(prev, index + 1));
        }, 1800 + (index * 300))
      );
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        bulletTimers.forEach(clearTimeout);
      };
    } else {
      setShowBefore(false);
      setShowAfter(false);
      setVisibleBullets(0);
    }
  }, [animationState, slide.bullets]);

  const getComparisonVisual = () => {
    if (slide.visualHint === 'public-private-comparison' && slide.id === 'bitcoin-vs-blockchain') {
      return (
        <div className="bitcoin-blockchain-comparison">
          <div className={`comparison-side ${showBefore ? 'visible' : ''}`}>
            <div className="side-header">
              <div className="side-icon">₿</div>
              <div className="side-title">Bitcoin</div>
            </div>
            <div className="side-subtitle">One Application</div>
            <div className="application-box">
              <div className="app-icon">💵</div>
              <div className="app-label">Digital Currency</div>
            </div>
            <div className="analogy">
              <div className="analogy-label">Like:</div>
              <div className="analogy-example">📧 Email</div>
            </div>
            <div className="characteristics">
              <div className="char-item">✓ Stores value</div>
              <div className="char-item">✓ Uses blockchain</div>
              <div className="char-item">✓ One use case</div>
            </div>
          </div>
          
          <div className="vs-divider-large">
            <div className="vs-text">VS</div>
          </div>
          
          <div className={`comparison-side ${showAfter ? 'visible' : ''}`}>
            <div className="side-header">
              <div className="side-icon">🔗</div>
              <div className="side-title">Blockchain</div>
            </div>
            <div className="side-subtitle">The Technology</div>
            <div className="applications-grid">
              <div className="app-box">💵 Currency</div>
              <div className="app-box">📦 Supply Chain</div>
              <div className="app-box">🏥 Healthcare</div>
              <div className="app-box">🏛️ Voting</div>
              <div className="app-box">📄 Contracts</div>
              <div className="app-box">🆔 Identity</div>
            </div>
            <div className="analogy">
              <div className="analogy-label">Like:</div>
              <div className="analogy-example">🌐 The Internet</div>
            </div>
            <div className="characteristics">
              <div className="char-item">✓ Underlying technology</div>
              <div className="char-item">✓ Powers many applications</div>
              <div className="char-item">✓ Unlimited possibilities</div>
            </div>
          </div>
        </div>
      );
    }

    // Default before/after comparison
    return (
      <div className="comparison-container">
        <div className={`before-section ${showBefore ? 'visible' : ''}`}>
          <h3 className="section-title">Before (Reactive)</h3>
          <div className="scenario">
            <div className="icon">🚨</div>
            <div className="description">
              <p>Problems happen</p>
              <p>We investigate after</p>
              <p>Damage control mode</p>
              <p>Broad recalls needed</p>
            </div>
          </div>
        </div>
        
        <div className="vs-divider">
          <div className="vs-text">VS</div>
          <div className="arrow">→</div>
        </div>
        
        <div className={`after-section ${showAfter ? 'visible' : ''}`}>
          <h3 className="section-title">After (Proactive)</h3>
          <div className="scenario">
            <div className="icon">✅</div>
            <div className="description">
              <p>Early warning alerts</p>
              <p>Prevent before problems</p>
              <p>Proactive management</p>
              <p>Surgical precision</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`before-after-slide ${animationState}`}>
      <div className="slide-content">
        <h1 className="slide-title">{slide.title}</h1>
        {slide.subtitle && (
          <h2 className="slide-subtitle">{slide.subtitle}</h2>
        )}
        
        {getComparisonVisual()}
        
        <ul className="benefit-list">
          {slide.bullets.map((bullet, index) => (
            <li 
              key={index}
              className={`benefit-item ${index < visibleBullets ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="benefit-icon">⚡</div>
              <div className="benefit-text">{bullet}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BeforeAfterSlide;
