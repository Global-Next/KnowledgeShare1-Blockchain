import { useEffect, useState } from 'react';
import './ConceptSlide.css';

const ConceptSlide = ({ slide, isActive, animationState }) => {
  const [visibleBullets, setVisibleBullets] = useState(0);
  const [showVisual, setShowVisual] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    if (animationState === 'active') {
      setShowVisual(true);
      
      // Animate bullets appearing one by one
      const timers = slide.bullets.map((_, index) => 
        setTimeout(() => {
          setVisibleBullets(prev => Math.max(prev, index + 1));
        }, 600 + (index * 300))
      );

      // Animation phases for visual elements
      const phaseTimer = setInterval(() => {
        setAnimationPhase(prev => (prev + 1) % 4);
      }, 2000);
      
      return () => {
        timers.forEach(clearTimeout);
        clearInterval(phaseTimer);
      };
    } else {
      setVisibleBullets(0);
      setShowVisual(false);
      setAnimationPhase(0);
    }
  }, [animationState, slide.bullets]);

  const getVisualComponent = () => {
    // If no visualHint, show default
    if (!slide.visualHint) {
      return (
        <div className="generic-concept-visual">
          <div className="concept-icon">💡</div>
          <div className="concept-animation">
            <div className={`animation-element ${animationPhase >= 1 ? 'active' : ''}`}>Step 1</div>
            <div className={`animation-element ${animationPhase >= 2 ? 'active' : ''}`}>Step 2</div>
            <div className={`animation-element ${animationPhase >= 3 ? 'active' : ''}`}>Step 3</div>
          </div>
        </div>
      );
    }

    switch (slide.visualHint) {
      case 'google-sheets-blockchain':
      case 'analogy-comparison':
        return (
          <div className="google-sheets-visual">
            <div className="sheets-container">
              <div className="sheet traditional">
                <div className="sheet-header">Traditional Google Sheet</div>
                <div className="sheet-grid">
                  <div className="cell editable">Data can be changed</div>
                  <div className="cell editable">Anyone can edit</div>
                  <div className="cell editable">No permanent record</div>
                </div>
                <div className="vulnerability-indicator">⚠️ Vulnerable</div>
              </div>
              
              <div className="transformation-arrow">→</div>
              
              <div className="sheet blockchain">
                <div className="sheet-header">Blockchain "Sheet"</div>
                <div className="sheet-grid">
                  <div className="cell immutable">
                    <span>Data + Timestamp</span>
                    <div className="signature">🔒 Signed</div>
                  </div>
                  <div className="cell immutable">
                    <span>Verified Entry</span>
                    <div className="signature">🔒 Signed</div>
                  </div>
                  <div className="cell immutable">
                    <span>Permanent Record</span>
                    <div className="signature">🔒 Signed</div>
                  </div>
                </div>
                <div className="security-indicator">✅ Secure</div>
              </div>
            </div>
          </div>
        );
      
      case 'traditional-vs-blockchain':
      case 'three-pillars':
      case 'hash-demonstration':
        return (
          <div className="comparison-visual">
            <div className="comparison-grid">
              <div className="system traditional">
                <h4>Traditional System</h4>
                <div className="system-diagram">
                  <div className="central-database">
                    <div className="database-icon">🗄️</div>
                    <div className="label">Central Database</div>
                  </div>
                  <div className="connections">
                    <div className="connection vulnerable">❌ Single point of failure</div>
                    <div className="connection vulnerable">❌ Trust required</div>
                    <div className="connection vulnerable">❌ Can be corrupted</div>
                  </div>
                </div>
              </div>
              
              <div className="system blockchain">
                <h4>Blockchain System</h4>
                <div className="system-diagram">
                  <div className="distributed-network">
                    <div className="node">📊</div>
                    <div className="node">📊</div>
                    <div className="node">📊</div>
                    <div className="node">📊</div>
                  </div>
                  <div className="connections">
                    <div className="connection secure">✅ Distributed</div>
                    <div className="connection secure">✅ Trustless</div>
                    <div className="connection secure">✅ Tamper-proof</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'private-vs-public':
      case 'public-private-comparison':
        return (
          <div className="privacy-visual">
            <div className="privacy-comparison">
              <div className="blockchain-type public">
                <div className="type-icon">🌍</div>
                <h4>Public Blockchain</h4>
                <div className="characteristics">
                  <div className="char">Open to everyone</div>
                  <div className="char">No privacy</div>
                  <div className="char">Like a public park</div>
                </div>
              </div>
              
              <div className="vs-divider">VS</div>
              
              <div className="blockchain-type private">
                <div className="type-icon">🏢</div>
                <h4>Private Blockchain</h4>
                <div className="characteristics">
                  <div className="char">Invitation only</div>
                  <div className="char">Controlled access</div>
                  <div className="char">Like a private club</div>
                </div>
              </div>
            </div>
            
            <div className="access-control">
              <div className="member-list">
                <div className="member">🏭 Factory</div>
                <div className="member">🚢 Shipping</div>
                <div className="member">🏢 GlobalNest</div>
                <div className="member">🏪 Retailer</div>
              </div>
              <div className="access-label">Trusted Partners Only</div>
            </div>
          </div>
        );
      
      case 'trust-network':
      case 'cost-analysis':
      default:
        return (
          <div className="generic-concept-visual">
            <div className="concept-icon">💡</div>
            <div className="concept-animation">
              <div className={`animation-element ${animationPhase >= 1 ? 'active' : ''}`}>
                {slide.visualHint === 'trust-network' ? '🌐 Trust Network' : 
                 slide.visualHint === 'cost-analysis' ? '💰 Cost Analysis' : 'Step 1'}
              </div>
              <div className={`animation-element ${animationPhase >= 2 ? 'active' : ''}`}>
                {slide.visualHint === 'trust-network' ? '🔗 Connections' : 
                 slide.visualHint === 'cost-analysis' ? '📊 Metrics' : 'Step 2'}
              </div>
              <div className={`animation-element ${animationPhase >= 3 ? 'active' : ''}`}>
                {slide.visualHint === 'trust-network' ? '✅ Verified' : 
                 slide.visualHint === 'cost-analysis' ? '📈 Impact' : 'Step 3'}
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`concept-slide ${animationState}`}>
      <div className="slide-content">
        <div className="content-grid">
          <div className="text-content">
            <h1 className="slide-title">{slide.title}</h1>
            {slide.subtitle && (
              <h2 className="slide-subtitle">{slide.subtitle}</h2>
            )}
            
            <ul className="concept-list">
              {slide.bullets.map((bullet, index) => (
                <li 
                  key={index}
                  className={`concept-item ${index < visibleBullets ? 'visible' : ''}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="concept-bullet">✨</div>
                  <div className="concept-text">{bullet}</div>
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

export default ConceptSlide;
