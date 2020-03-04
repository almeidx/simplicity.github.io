import React from 'react';

import logo from '../../assets/simplicity-logo.png';
import './style.css';

/**
 * The main page function.
 * @return {HTMLDivElement} The html.
 */
function Main() {
  const bot = {
    commands: 30,
    guilds: 1e5,
    users: 1e9,
    uptime: '23 days',
  }

  return (
    <div className="main">
      <div id='filter'></div>
      <img src={logo} className="hvr-bounce-in" alt="Simplicity logo" /><br />
      <h1 className="hvr-grow">{bot.commands} Commands</h1><br />
      <h1 className="hvr-grow">{bot.guilds} Guilds</h1><br />
      <h1 className="hvr-grow">{bot.users} Users</h1><br />
      <h1 className="hvr-grow">I've been up for {bot.update}</h1><br />
    </div>
  )
}

export default Main
