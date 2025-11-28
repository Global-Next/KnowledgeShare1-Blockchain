import { useEffect, useState } from 'react';
import './TransformationSlide.css';

const TransformationSlide = ({ slide, isActive, animationState }) => {
  const [visibleBullets, setVisibleBullets] = useState(0);
  const [showTransformation, setShowTransformation] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    if (animationState === 'active') {
      setShowTransformation(true);
      
      const timers = slide.bullets.map((_, index) => 
        setTimeout(() => {
          setVisibleBullets(prev => Math.max(prev, index + 1));
        }, 800 + (index * 400))
      );

      // Animation phases for visual
      const phaseTimer = setInterval(() => {
        setAnimationPhase(prev => (prev + 1) % 3);
      }, 2000);
      
      return () => {
        timers.forEach(clearTimeout);
        clearInterval(phaseTimer);
      };
    } else {
      setVisibleBullets(0);
      setShowTransformation(false);
      setAnimationPhase(0);
    }
  }, [animationState, slide.bullets]);

  const getVisualComponent = () => {
    if (slide.visualHint === 'industry-evolution') {
      return (
        <div className="industry-evolution-visual">
          <div className="evolution-comparison">
            <div className="old-system">
              <div className="system-header">Old System</div>
              <div className="central-icon">🏦</div>
              <div className="system-label">Institutions</div>
              <div className="system-features">
                <div className="feature old">❌ Central Control</div>
                <div className="feature old">❌ Manual Processes</div>
                <div className="feature old">❌ Vulnerable</div>
                <div className="feature old">❌ Intermediaries</div>
              </div>
            </div>
            
            <div className="transformation-arrow-large">→</div>
            
            <div className="new-system">
              <div className="system-header">New System</div>
              <div className="decentralized-icon">🔗</div>
              <div className="system-label">Blockchain</div>
              <div className="system-features">
                <div className="feature new">✅ Self-Governing</div>
                <div className="feature new">✅ Automated</div>
                <div className="feature new">✅ Immutable</div>
                <div className="feature new">✅ Direct</div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Default transformation visual
    return (
      <div className="transformation-visual-default">
        <div className="evolution-path">
          <div className="stage before">
            <div className="stage-icon">📦</div>
            <div className="stage-label">Before</div>
          </div>
          <div className="transformation-arrow">→</div>
          <div className="stage after">
            <div className="stage-icon">🛡️</div>
            <div className="stage-label">After</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`transformation-slide ${animationState}`}>
      <div className="slide-content">
        <h1 className="slide-title">{slide.title}</h1>
        {slide.subtitle && (
          <h2 className="slide-subtitle">{slide.subtitle}</h2>
        )}
        
        <div className={`transformation-visual-container ${showTransformation ? 'visible' : ''}`}>
          {getVisualComponent()}
        </div>
        
        <ul className="transformation-list">
          {slide.bullets.map((bullet, index) => (
            <li 
              key={index}
              className={`transformation-item ${index < visibleBullets ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="transformation-bullet">🚀</div>
              <div className="transformation-text">{bullet}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransformationSlide;
