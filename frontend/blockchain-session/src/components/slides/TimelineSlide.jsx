import { useEffect, useState } from 'react';
import './TimelineSlide.css';

const TimelineSlide = ({ slide, animationState }) => {
  const [visiblePhases, setVisiblePhases] = useState(0);

  useEffect(() => {
    if (animationState === 'active') {
      const timers = slide.bullets.map((_, index) => 
        setTimeout(() => {
          setVisiblePhases(prev => Math.max(prev, index + 1));
        }, 800 + (index * 600))
      );
      
      return () => timers.forEach(clearTimeout);
    } else {
      setVisiblePhases(0);
    }
  }, [animationState, slide.bullets]);

  return (
    <div className={`timeline-slide ${animationState}`}>
      <div className="slide-content">
        <h1 className="slide-title">{slide.title}</h1>
        {slide.subtitle && (
          <h2 className="slide-subtitle">{slide.subtitle}</h2>
        )}
        
        <div className="timeline-container">
          {slide.bullets.map((bullet, index) => (
            <div 
              key={index}
              className={`timeline-phase ${index < visiblePhases ? 'visible' : ''}`}
            >
              <div className="phase-marker">
                <div className="phase-number">{index + 1}</div>
              </div>
              <div className="phase-content">
                <div className="phase-text">{bullet}</div>
              </div>
              {index < slide.bullets.length - 1 && (
                <div className="phase-connector"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineSlide;

