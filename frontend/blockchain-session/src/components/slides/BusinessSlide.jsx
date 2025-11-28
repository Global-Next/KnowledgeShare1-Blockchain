import { useEffect, useState } from 'react';
import './BusinessSlide.css';

const BusinessSlide = ({ slide, animationState }) => {
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
    <div className={`business-slide ${animationState}`}>
      <div className="slide-content">
        <h1 className="slide-title">{slide.title}</h1>
        {slide.subtitle && (
          <h2 className="slide-subtitle">{slide.subtitle}</h2>
        )}
        
        <ul className="business-list">
          {slide.bullets.map((bullet, index) => (
            <li 
              key={index}
              className={`business-item ${index < visibleBullets ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="business-bullet">💰</div>
              <div className="business-text">{bullet}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BusinessSlide;

