import { useState } from 'react';
import SlideDeck from './components/SlideDeck.jsx';
import './App.css';

function App() {
  const [presenterMode, setPresenterMode] = useState(false);

  // Check URL params for presenter mode
  const urlParams = new URLSearchParams(window.location.search);
  const isPresenterMode = urlParams.get('mode') === 'presenter' || presenterMode;

  return (
    <div className="app">
      {/* Mode toggle for development */}
      <div className="mode-toggle" style={{ 
        position: 'fixed', 
        top: '10px', 
        right: '10px', 
        zIndex: 1000,
        background: 'rgba(0,0,0,0.7)',
        color: 'white',
        padding: '5px 10px',
        borderRadius: '5px',
        fontSize: '12px'
      }}>
        <label>
          <input 
            type="checkbox" 
            checked={presenterMode}
            onChange={(e) => setPresenterMode(e.target.checked)}
          />
          Presenter Mode
        </label>
      </div>

      <SlideDeck presenterMode={isPresenterMode} />
    </div>
  );
}

export default App;

