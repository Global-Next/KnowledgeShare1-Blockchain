import { useState } from 'react';
import './ProgressIndicator.css';

const ProgressIndicator = ({ 
  currentSlide, 
  totalSlides, 
  chapters, 
  slides, 
  onSlideClick 
}) => {
  const [showChapterView, setShowChapterView] = useState(false);

  const progressPercentage = ((currentSlide + 1) / totalSlides) * 100;
  const currentChapter = slides[currentSlide].chapter;

  const getChapterProgress = (chapterId) => {
    const chapterSlides = slides.filter(slide => slide.chapter === chapterId);
    const currentChapterSlides = slides.slice(0, currentSlide + 1).filter(slide => slide.chapter === chapterId);
    return chapterSlides.length > 0 ? (currentChapterSlides.length / chapterSlides.length) * 100 : 0;
  };

  const getChapterSlideRange = (chapterId) => {
    const chapterSlides = slides
      .map((slide, index) => ({ ...slide, index }))
      .filter(slide => slide.chapter === chapterId);
    
    if (chapterSlides.length === 0) return { start: 0, end: 0 };
    
    return {
      start: chapterSlides[0].index,
      end: chapterSlides[chapterSlides.length - 1].index
    };
  };

  return (
    <div className="progress-indicator">
      {/* Main progress bar */}
      <div className="progress-bar-container">
        <div 
          className="progress-bar"
          style={{ width: `${progressPercentage}%` }}
        />
        <div className="progress-text">
          Chapter {currentChapter}: {chapters.find(c => c.id === currentChapter)?.title}
        </div>
      </div>

      {/* Chapter dots */}
      <div className="chapter-dots">
        {chapters.map((chapter) => {
          const chapterProgress = getChapterProgress(chapter.id);
          const isCurrentChapter = chapter.id === currentChapter;
          const isCompleted = chapterProgress === 100;
          const range = getChapterSlideRange(chapter.id);
          
          return (
            <div
              key={chapter.id}
              className={`chapter-dot ${isCurrentChapter ? 'current' : ''} ${isCompleted ? 'completed' : ''}`}
              onClick={() => onSlideClick(range.start)}
              title={`${chapter.title}: ${chapter.subtitle}`}
              style={{
                '--progress': `${chapterProgress}%`
              }}
            >
              <span className="chapter-number">{chapter.id}</span>
              <div className="chapter-progress" style={{ width: `${chapterProgress}%` }} />
            </div>
          );
        })}
      </div>

      {/* Toggle for detailed chapter view */}
      <button 
        className="chapter-toggle"
        onClick={() => setShowChapterView(!showChapterView)}
        title="Toggle chapter overview"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Detailed chapter view */}
      {showChapterView && (
        <div className="chapter-overview">
          <div className="chapter-list">
            {chapters.map((chapter) => {
              const chapterSlides = slides
                .map((slide, index) => ({ ...slide, index }))
                .filter(slide => slide.chapter === chapter.id);
              
              return (
                <div key={chapter.id} className="chapter-item">
                  <div className="chapter-header">
                    <h4>{chapter.title}</h4>
                    <span className="chapter-subtitle">{chapter.subtitle}</span>
                  </div>
                  <div className="chapter-slides">
                    {chapterSlides.map((slide) => (
                      <button
                        key={slide.index}
                        className={`slide-dot ${slide.index === currentSlide ? 'current' : ''} ${slide.index < currentSlide ? 'completed' : ''}`}
                        onClick={() => {
                          onSlideClick(slide.index);
                          setShowChapterView(false);
                        }}
                        title={slide.title}
                      >
                        {slide.index + 1}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressIndicator;

