import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Splash from './Splash.jsx';

const App = () => (
  <BrowserRouter>
    <Route path="/" component={Splash} />
  </BrowserRouter>
);

export default App;