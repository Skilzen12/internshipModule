import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './Screens/LandingPage/LandingPage';
import JobGrid from './Screens/JobGrid/Job_Grid';
import Login from './Screens/Auth/Login/Login';
import SignUp from './Screens/Auth/SignUp/SignUp';
import PostInternship from './Screens/PostInternship/Post_intern';
import CandidateProfile from './Screens/CandidateProfile/Candidate';
import CompanyProfile from './Screens/CompanyProfile/Company_profile';
import InternshipProfile from './Screens/InternshipProfile/Comp_profile2'; 
import CompanyDashboard from './Screens/Dashboard/DashboardMain'; 
import CompanySpam from './Screens/AdminDashboard/CompanySpam';
import AdminDashboardMain from './Screens/AdminDashboard/AdminDashboardMain';

import './index.css';

ReactDOM.render(
  <>
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/home' component={LandingPage} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/postInternship' component={PostInternship} />
        <Route exact path='/jobGrid' component={JobGrid} />
        <Route exact path='/candidate' component={CandidateProfile} />
        <Route exact path='/company' component={CompanyProfile} />
        <Route exact path='/internship' component={InternshipProfile} />
        <Route exact path='/dashboard' component={CompanyDashboard} />
        <Route exact path='/adminDashboard' component={AdminDashboardMain} />
        <Route exact path='/companyspam' component={CompanySpam} />
      </Switch>             
    </Router>
  </>,
  document.getElementById('root')
);