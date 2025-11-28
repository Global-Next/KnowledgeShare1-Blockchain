import { useEffect, useState } from 'react';
import './RoleImpactSlide.css';

const RoleImpactSlide = ({ slide, animationState }) => {
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

  const getRoleIcon = (role) => {
    switch (role) {
      case 'Operations & Logistics': return '🚚';
      case 'Sales & Business Development': return '💼';
      case 'Marketing & Brand': return '📢';
      case 'Compliance & Quality': return '📋';
      default: return '👥';
    }
  };

  return (
    <div className={`role-impact-slide ${animationState}`}>
      <div className="slide-content">
        <div className="role-header">
          <div className="role-icon">{getRoleIcon(slide.role)}</div>
          <div className="role-info">
            <h1 className="slide-title">{slide.title}</h1>
            <div className="role-name">{slide.role}</div>
          </div>
        </div>
        
        <ul className="impact-list">
          {slide.bullets.map((bullet, index) => (
            <li 
              key={index}
              className={`impact-item ${index < visibleBullets ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="impact-bullet">✨</div>
              <div className="impact-text">{bullet}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RoleImpactSlide;

