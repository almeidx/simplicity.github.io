import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/dashboard';
import Main from './pages/main';
import Commands from './pages/commands';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/commands' component={Commands} />
      </Switch>
    </BrowserRouter>
  );
}