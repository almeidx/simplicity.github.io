import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Commands from './components/Commands';
import Dashboard from './components/Dashboard';
import Main from './components/Main';

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
