import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './Screens/LandingPage/LandingPage';
import Login from './Screens/Auth/Login/SignUp';
import SignUp from './Screens/Auth/SignUp/SignUp';
import {MultiStepForm} from './Screens/Auth/MultiStepForm';
import {OrganizationMultiStep} from './Screens/Auth/OrganizationMultiStep';
import PostInternship from './Screens/Post_Internship/Post_intern';
import './index.css';

ReactDOM.render(
  <>
    <Router>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/home' component={LandingPage} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/userForm' component={MultiStepForm} />
            <Route exact path='/orgForm' component={OrganizationMultiStep} />
            <Route exact path='/postInternship' component={PostInternship} />
        </Switch>             
      </Router>
  </>,
  document.getElementById('root')
);