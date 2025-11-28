import { useEffect, useState } from 'react';
import TitleSlide from './slides/TitleSlide.jsx';
import ProblemSlide from './slides/ProblemSlide.jsx';
import ConceptSlide from './slides/ConceptSlide.jsx';
import ProcessSlide from './slides/ProcessSlide.jsx';
import BeforeAfterSlide from './slides/BeforeAfterSlide.jsx';
import JourneySlide from './slides/JourneySlide.jsx';
import TransformationSlide from './slides/TransformationSlide.jsx';
import BusinessSlide from './slides/BusinessSlide.jsx';
import RoleImpactSlide from './slides/RoleImpactSlide.jsx';
import TimelineSlide from './slides/TimelineSlide.jsx';
import TeamSlide from './slides/TeamSlide.jsx';
import ActionSlide from './slides/ActionSlide.jsx';
import QASlide from './slides/QASlide.jsx';
import './SlideRenderer.css';

const SlideRenderer = ({ slide, isActive, presenterMode }) => {
  const [animationState, setAnimationState] = useState('entering');

  useEffect(() => {
    if (isActive) {
      setAnimationState('entering');
      const timer = setTimeout(() => {
        setAnimationState('active');
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setAnimationState('exiting');
    }
  }, [isActive]);

  const getSlideComponent = () => {
    const commonProps = {
      slide,
      isActive,
      animationState,
      presenterMode
    };

    switch (slide.type) {
      case 'TitleSlide':
        return <TitleSlide {...commonProps} />;
      case 'ProblemSlide':
        return <ProblemSlide {...commonProps} />;
      case 'ConceptSlide':
        return <ConceptSlide {...commonProps} />;
      case 'ProcessSlide':
        return <ProcessSlide {...commonProps} />;
      case 'BeforeAfterSlide':
        return <BeforeAfterSlide {...commonProps} />;
      case 'JourneySlide':
        return <JourneySlide {...commonProps} />;
      case 'TransformationSlide':
        return <TransformationSlide {...commonProps} />;
      case 'BusinessSlide':
        return <BusinessSlide {...commonProps} />;
      case 'RoleImpactSlide':
        return <RoleImpactSlide {...commonProps} />;
      case 'TimelineSlide':
        return <TimelineSlide {...commonProps} />;
      case 'TeamSlide':
        return <TeamSlide {...commonProps} />;
      case 'ActionSlide':
        return <ActionSlide {...commonProps} />;
      case 'QASlide':
        return <QASlide {...commonProps} />;
      default:
        return <ConceptSlide {...commonProps} />;
    }
  };

  return (
    <div className={`slide-renderer ${animationState} ${slide.type.toLowerCase()}`}>
      {getSlideComponent()}
    </div>
  );
};

export default SlideRenderer;

