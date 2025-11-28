import { useEffect, useState } from 'react';
import './TitleSlide.css';

const TitleSlide = ({ slide, animationState }) => {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (animationState === 'active') {
      const timer1 = setTimeout(() => setShowSubtitle(true), 500);
      const timer2 = setTimeout(() => setShowContent(true), 1000);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    } else {
      setShowSubtitle(false);
      setShowContent(false);
    }
  }, [animationState]);

  return (
    <div className={`title-slide ${animationState}`}>
      <div className="slide-content">
        <div className="title-container">
          <h1 className="slide-title">{slide.title}</h1>
          {slide.subtitle && (
            <h2 className={`slide-subtitle ${showSubtitle ? 'visible' : ''}`}>
              {slide.subtitle}
            </h2>
          )}
        </div>
        
        {slide.bullets && slide.bullets.length > 0 && (
          <div className={`content-container ${showContent ? 'visible' : ''}`}>
            <ul className="bullet-list">
              {slide.bullets.map((bullet, index) => (
                <li 
                  key={index} 
                  className="bullet-item"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* GlobalNest mascot/icon */}
        <div className="globalnest-mascot">
          <div className="mascot-container">
            <div className="pet-icon">🐕</div>
            <div className="container-icon">📦</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleSlide;

