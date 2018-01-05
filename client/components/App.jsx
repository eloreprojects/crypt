import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Splash from './splash/Splash.jsx';
import Enter from './enter/Enter.jsx';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/enter" component={Enter} />      
      <Route path="/" component={Splash} />
    </Switch>
  </BrowserRouter>
);

export default App;