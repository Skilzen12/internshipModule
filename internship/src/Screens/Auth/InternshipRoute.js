import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux'

const InternshipRoute = ({ component:Component , ...rest})=>{
  const user = useSelector(state =>state.user)
  return(
    <Route {...rest} component={(props)=>{
      const token = window.localStorage.getItem('accessToken');
      if(token){
        if(user.user_education.length==0){
          return <Redirect to="/applyForm" />
        }else{
          return <Component {...props} />
        }
      }else{
        return <Redirect to={'/login'} />
      }
    }} />
  )
}
export default InternshipRoute;
