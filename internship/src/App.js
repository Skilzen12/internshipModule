/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import './App.css';
import { useSelector , useDispatch } from 'react-redux'
import {getUserData} from './redux/actions/user.actions'
import {isAdminLogged} from './redux/actions/auth.actions'
import PrivateRoute from './Screens/Auth/PrivateRoute'
import InternshipRoute from './Screens/Auth/InternshipRoute'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './Screens/LandingPage/LandingPage';
import JobGrid from './Screens/JobGrid/Job_Grid';
import Login from './Screens/Auth/Login/Login';
import VerifyOTP from './Screens/Auth/Login/VerifyOTP';
import SignUp from './Screens/Auth/SignUp/SignUp';
import PostInternship from './Screens/PostInternship/Post_intern';
import CandidateProfile from './Screens/CandidateProfile/Candidate';
import Applicant from './Screens/CandidateProfile/Applicant';
import CompanyProfile from './Screens/CompanyProfile/Company_profile';
import InternshipProfile from './Screens/InternshipProfile/Comp_profile2'; 
import DashboardMain from './Screens/Dashboard/DashboardMain'; 
import CompanySpam from './Screens/AdminDashboard/CompanySpam';
import AdminDashboardMain from './Screens/AdminDashboard/AdminDashBoard';
import { MultiStepForm } from './Screens/Auth/MultiStepForm';
import { OrganizationMultiStep } from './Screens/Auth/OrganizationMultiStep';


function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const user = useSelector(state => state.user);
  
  useEffect(async()=>{    
    if(!auth.authenticate){
      await dispatch(isAdminLogged());
    }
    if(window.localStorage.getItem('accessToken')){
      await dispatch(getUserData());
    }
  },[])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/login' component={Login} />
          <PrivateRoute exact path='/VerifyOTP' component={VerifyOTP} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/postInternship' component={PostInternship} />
          <Route exact path='/jobGrid' component={JobGrid} />
          <Route exact path='/profile' component={CandidateProfile} />
          <Route exact path='/applicant' component={Applicant} />
          <Route exact path='/company' component={CompanyProfile} />
          <InternshipRoute exact path='/internship' component={InternshipProfile} />
          <Route exact path='/dashboard' component={DashboardMain} />
          <Route exact path='/adminDashboard' component={AdminDashboardMain} />
          <Route exact path='/companyspam' component={CompanySpam} />
          <Route exact path='/applyForm' component={MultiStepForm} />
          <Route exact path='/applyRecruiterForm' component={OrganizationMultiStep } />
        </Switch>
      </Router>
    </div>
  );
}


export default App;
