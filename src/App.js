import React from 'react';
import './App.css';
import Routes from './routes';

function App() {
  return (
    <>
      <div className='hud'>
        <button id='logo'>Simplicity</button>
        <button id='commands'>Commands</button>
        <button>Server Support</button>
        <button>Dashboard</button>
        <div className='login'></div>
      </div>
      <div className="container">
        < Routes />
      </div>
    </>
  );
}

export default App;
