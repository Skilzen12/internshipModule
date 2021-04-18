import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './Screens/LandingPage/LandingPage';
import JobGrid from './Screens/JobGrid/Job_Grid';
import Login from './Screens/Auth/Login/Login';
import SignUp from './Screens/Auth/SignUp/SignUp';
import {MultiStepForm} from './Screens/Auth/MultiStepForm';
import {OrganizationMultiStep} from './Screens/Auth/OrganizationMultiStep';
import PostInternship from './Screens/PostInternship/Post_intern';
import CandidateProfile from './Screens/CandidateProfile/Candidate';
import CompanyProfile from './Screens/CompanyProfile/Company_profile';
import InternshipProfile from './Screens/InternshipProfile/Comp_profile2'; 
import CompanyDashboard from './Screens/Dashboard/DashboardMain'; 
import { UserProvider, StudentProvider, CompanyProvider } from './utility/contexts/userContext';
import './index.css';

ReactDOM.render(
  <>
    <UserProvider>
      <StudentProvider>
        <CompanyProvider>
          <Router>
            <Switch>
              <Route exact path='/' component={App} />
              <Route exact path='/home' component={LandingPage} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={SignUp} />
              {/* <Route exact path='/userForm' component={MultiStepForm} />
              <Route exact path='/orgForm' component={OrganizationMultiStep} /> */}
              <Route exact path='/postInternship' component={PostInternship} />
              <Route exact path='/jobGrid' component={JobGrid} />
              <Route exact path='/candidate' component={CandidateProfile} />
              <Route exact path='/company' component={CompanyProfile} />
              <Route exact path='/internship' component={InternshipProfile} />
              <Route exact path='/dashboard' component={CompanyDashboard} />
            </Switch>             
          </Router>
        </CompanyProvider>
      </StudentProvider>
    </UserProvider>
  </>,
  document.getElementById('root')
);