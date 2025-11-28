import { useEffect, useState } from 'react';
import './TeamSlide.css';

const TeamSlide = ({ slide, isActive, animationState }) => {
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
    <div className={`team-slide ${animationState}`}>
      <div className="slide-content">
        <h1 className="slide-title">{slide.title}</h1>
        {slide.subtitle && (
          <h2 className="slide-subtitle">{slide.subtitle}</h2>
        )}
        
        <div className="team-visual">
          <div className="team-members">
            <div className="member">👥</div>
            <div className="member">👥</div>
            <div className="member">👥</div>
            <div className="member">👥</div>
          </div>
          <div className="collaboration-lines"></div>
        </div>
        
        <ul className="team-list">
          {slide.bullets.map((bullet, index) => (
            <li 
              key={index}
              className={`team-item ${index < visibleBullets ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="team-bullet">🤝</div>
              <div className="team-text">{bullet}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamSlide;

