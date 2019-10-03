import React from 'react';
import logo from '../../assets/simplicity-logo.png';

import './style.css';

export default function () {
  const bot = {
    commands: 30,
    guilds: 50,
    users: 5600,
    update: '23 days'
  }
  return (
    <>
    <div className="content">
      <div id='filter'></div>
      <img src={logo} id='logo' alt="Simplicity-logo" />
      <h1>{bot.commands} Commands</h1>
      <span></span>
      <h1>{bot.guilds} Guilds</h1>
      <h1>{bot.users} Users</h1>
      <h1>I'm online {bot.update}</h1>
    </div>
    </>
  )
}