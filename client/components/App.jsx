import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Splash from './splash/Splash.jsx';
import Enter from './enter/Enter.jsx';
import Accounts from './accounts/Accounts.jsx';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/accounts" component={Accounts} onEnter={this.requireAuth}/>
          <Route path="/enter" component={Enter} />    
          <Route path="/" component={Splash} />
        </Switch>
      </BrowserRouter>
    );
  }
};