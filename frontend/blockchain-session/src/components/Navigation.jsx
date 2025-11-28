import { useState } from 'react';
import './Navigation.css';

const Navigation = ({ 
  currentSlide, 
  totalSlides, 
  onPrevious, 
  onNext, 
  onGoToSlide,
  canGoPrevious, 
  canGoNext 
}) => {
  const [showSlideJumper, setShowSlideJumper] = useState(false);

  const handleSlideJump = (event) => {
    event.preventDefault();
    const slideNumber = parseInt(event.target.slideNumber.value);
    if (slideNumber >= 1 && slideNumber <= totalSlides) {
      onGoToSlide(slideNumber - 1);
      setShowSlideJumper(false);
    }
  };

  return (
    <div className="navigation">
      {/* Previous button */}
      <button 
        className={`nav-button prev ${!canGoPrevious ? 'disabled' : ''}`}
        onClick={onPrevious}
        disabled={!canGoPrevious}
        title="Previous slide (← or Page Up)"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>Previous</span>
      </button>

      {/* Slide counter and jumper */}
      <div className="slide-counter">
        <button 
          className="counter-display"
          onClick={() => setShowSlideJumper(!showSlideJumper)}
          title="Click to jump to specific slide"
        >
          {currentSlide + 1} / {totalSlides}
        </button>
        
        {showSlideJumper && (
          <div className="slide-jumper">
            <form onSubmit={handleSlideJump}>
              <input 
                type="number" 
                name="slideNumber"
                min="1" 
                max={totalSlides}
                defaultValue={currentSlide + 1}
                autoFocus
                onBlur={() => setShowSlideJumper(false)}
              />
              <button type="submit">Go</button>
            </form>
          </div>
        )}
      </div>

      {/* Next button */}
      <button 
        className={`nav-button next ${!canGoNext ? 'disabled' : ''}`}
        onClick={onNext}
        disabled={!canGoNext}
        title="Next slide (→ or Space)"
      >
        <span>Next</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Fullscreen toggle */}
      <button 
        className="nav-button fullscreen"
        onClick={() => {
          if (document.fullscreenElement) {
            document.exitFullscreen();
          } else {
            document.documentElement.requestFullscreen();
          }
        }}
        title="Toggle fullscreen"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M8 3H5C3.89543 3 3 3.89543 3 5V8M21 8V5C21 3.89543 20.1046 3 19 3H16M16 21H19C20.1046 21 21 20.1046 21 19V16M3 16V19C3 20.1046 3.89543 21 5 21H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

export default Navigation;

