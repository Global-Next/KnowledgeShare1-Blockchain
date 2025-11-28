import { useEffect, useState } from 'react';
import './ProcessSlide.css';

const ProcessSlide = ({ slide, animationState }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [visibleBullets, setVisibleBullets] = useState(0);

  useEffect(() => {
    if (animationState === 'active') {
      const timers = slide.bullets.map((_, index) => 
        setTimeout(() => {
          setCurrentStep(prev => Math.max(prev, index + 1));
          setVisibleBullets(prev => Math.max(prev, index + 1));
        }, 600 + (index * 500))
      );
      
      return () => timers.forEach(clearTimeout);
    } else {
      setCurrentStep(0);
      setVisibleBullets(0);
    }
  }, [animationState, slide.bullets]);

  return (
    <div className={`process-slide ${animationState}`}>
      <div className="slide-content">
        <h1 className="slide-title">{slide.title}</h1>
        {slide.subtitle && (
          <h2 className="slide-subtitle">{slide.subtitle}</h2>
        )}
        
        <div className="process-flow">
          {slide.bullets.map((bullet, index) => (
            <div 
              key={index}
              className={`process-step ${index < visibleBullets ? 'visible' : ''} ${index === currentStep - 1 ? 'current' : ''}`}
            >
              <div className="step-header">
                <div className="step-number">{index + 1}</div>
                <div className="step-arrow">→</div>
              </div>
              <div className="step-content">
                <div className="step-text">{bullet}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSlide;

