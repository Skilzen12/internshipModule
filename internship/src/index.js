import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './Screens/LandingPage/LandingPage';
import './index.css';

ReactDOM.render(
  <>
    <Router>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/home' component={LandingPage} />
        </Switch>             
      </Router>
  </>,
  document.getElementById('root')
);