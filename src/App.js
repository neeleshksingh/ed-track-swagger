import React, { useState } from 'react';
import './App.css';
import Prod from './components/Prod';
import Dev from './components/Dev';



function App() {
  const [environment, setEnvironment] = useState('Dev');

  const handleEnvironmentChange = (env) => {
    setEnvironment(env);
  };


  return (
    <div className="app-container">
      <div className="environment-selector">
        <div className="environment-toggle">
          <button
            className={`environment-button ${environment === 'Dev' ? 'active' : ''}`}
            onClick={() => handleEnvironmentChange('Dev')}
          >
            Development
          </button>
          <button
            className={`environment-button ${environment === 'Prod' ? 'active' : ''}`}
            onClick={() => handleEnvironmentChange('Prod')}
          >
            Production
          </button>
        </div>
      </div>

      {environment === 'Dev' ? <Dev /> : <Prod />}
    </div>
  );
}

export default App;