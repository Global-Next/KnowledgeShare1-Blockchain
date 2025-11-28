import { useEffect, useState } from 'react';
import './QASlide.css';

const QASlide = ({ slide, isActive, animationState }) => {
  const [visibleBullets, setVisibleBullets] = useState(0);

  useEffect(() => {
    if (animationState === 'active') {
      const timers = slide.bullets.map((_, index) => 
        setTimeout(() => {
          setVisibleBullets(prev => Math.max(prev, index + 1));
        }, 600 + (index * 300))
      );
      
      return () => timers.forEach(clearTimeout);
    } else {
      setVisibleBullets(0);
    }
  }, [animationState, slide.bullets]);

  return (
    <div className={`qa-slide ${animationState}`}>
      <div className="slide-content">
        <h1 className="slide-title">{slide.title}</h1>
        {slide.subtitle && (
          <h2 className="slide-subtitle">{slide.subtitle}</h2>
        )}
        
        <div className="qa-visual">
          <div className="discussion-icon">💬</div>
          <div className="interaction-prompt">Let's Discuss!</div>
        </div>
        
        <ul className="qa-list">
          {slide.bullets.map((bullet, index) => (
            <li 
              key={index}
              className={`qa-item ${index < visibleBullets ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="qa-bullet">❓</div>
              <div className="qa-text">{bullet}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QASlide;

