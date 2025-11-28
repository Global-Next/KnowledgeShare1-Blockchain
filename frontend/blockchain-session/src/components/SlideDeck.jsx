import { useState, useEffect, useCallback } from 'react';
import { slides, chapters } from '../data/slides.js';
import SlideRenderer from './SlideRenderer.jsx';
import Navigation from './Navigation.jsx';
import ProgressIndicator from './ProgressIndicator.jsx';
import './SlideDeck.css';

const SlideDeck = ({ presenterMode = false }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('forward');

  const currentSlide = slides[currentSlideIndex];
  const totalSlides = slides.length;

  // Navigation functions
  const goToSlide = useCallback((index, slideDirection = 'forward') => {
    if (index < 0 || index >= totalSlides || index === currentSlideIndex) return;
    
    setIsTransitioning(true);
    setDirection(slideDirection);
    
    setTimeout(() => {
      setCurrentSlideIndex(index);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  }, [currentSlideIndex, totalSlides]);

  const nextSlide = useCallback(() => {
    if (currentSlideIndex < totalSlides - 1) {
      goToSlide(currentSlideIndex + 1, 'forward');
    }
  }, [currentSlideIndex, totalSlides, goToSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlideIndex > 0) {
      goToSlide(currentSlideIndex - 1, 'backward');
    }
  }, [currentSlideIndex, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Don't prevent default if user is typing in an input/textarea
      if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        return;
      }

      switch (event.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
        case 'Enter':
          event.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          event.preventDefault();
          prevSlide();
          break;
        case 'Home':
          event.preventDefault();
          goToSlide(0, 'backward');
          break;
        case 'End':
          event.preventDefault();
          goToSlide(totalSlides - 1, 'forward');
          break;
        case 'Escape':
          // Toggle fullscreen or other actions
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide, totalSlides]);

  // Get current chapter info
  const getCurrentChapter = () => {
    return chapters.find(chapter => chapter.id === currentSlide.chapter);
  };

  return (
    <div className={`slide-deck ${presenterMode ? 'presenter-mode' : ''}`}>
      {/* Main slide area */}
      <div className="slide-container">
        <div className={`slide-wrapper ${isTransitioning ? 'transitioning' : ''} ${direction}`}>
          <SlideRenderer 
            slide={currentSlide} 
            isActive={!isTransitioning}
            presenterMode={presenterMode}
          />
        </div>
        
        {/* Chapter indicator */}
        <div className="chapter-indicator">
          <span className="chapter-number">Chapter {currentSlide.chapter}</span>
          <span className="chapter-title">{getCurrentChapter()?.title}</span>
        </div>
      </div>

      {/* Navigation controls */}
      <Navigation 
        currentSlide={currentSlideIndex}
        totalSlides={totalSlides}
        onPrevious={prevSlide}
        onNext={nextSlide}
        onGoToSlide={goToSlide}
        canGoPrevious={currentSlideIndex > 0}
        canGoNext={currentSlideIndex < totalSlides - 1}
      />

      {/* Progress indicator */}
      <ProgressIndicator 
        currentSlide={currentSlideIndex}
        totalSlides={totalSlides}
        chapters={chapters}
        slides={slides}
        onSlideClick={goToSlide}
      />

      {/* Presenter notes panel (if in presenter mode) */}
      {presenterMode && (
        <div className="presenter-notes">
          <h3>Speaker Notes</h3>
          <div className="notes-content">
            {currentSlide.speakerNotes || 'No speaker notes for this slide.'}
          </div>
          <div className="slide-info">
            <p><strong>Slide:</strong> {currentSlideIndex + 1} of {totalSlides}</p>
            <p><strong>Type:</strong> {currentSlide.type}</p>
            <p><strong>Visual Hint:</strong> {currentSlide.visualHint}</p>
          </div>
        </div>
      )}

      {/* Keyboard shortcuts help (hidden by default) */}
      <div className="keyboard-help" id="keyboard-help" style={{ display: 'none' }}>
        <h3>Keyboard Shortcuts</h3>
        <ul>
          <li><kbd>→</kbd> <kbd>Space</kbd> <kbd>Enter</kbd> <kbd>Page Down</kbd> - Next slide</li>
          <li><kbd>←</kbd> <kbd>Page Up</kbd> - Previous slide</li>
          <li><kbd>Home</kbd> - First slide</li>
          <li><kbd>End</kbd> - Last slide</li>
          <li><kbd>?</kbd> - Toggle this help</li>
        </ul>
      </div>
    </div>
  );
};

export default SlideDeck;
