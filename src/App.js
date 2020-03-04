import React from 'react';

import './App.css';
import Routes from './routes';

/**
 * The main application function
 * @return {HTMLDivElement} The main div element.
 */
function App() {
  return (
    <>
      <div className='hud'>
        <button id='logo' className="hvr-grow">Simplicity</button>
        <button id='commands' className="hvr-grow">Commands</button>
        <button onClick={() => { window.location.href = "https://discord.gg/jZ9Ja8d" }} class="hvr-grow">Support Server</button>
        <button className="hvr-grow">Dashboard</button>
        <div className='login'></div>
      </div>
      <div className="container">
        <Routes />
      </div>
    </>
  );
}

export default App;
