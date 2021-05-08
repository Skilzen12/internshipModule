import React, { useEffect, useState } from 'react'
import {Route, Redirect} from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux'
import { getUserData } from '../../redux/actions/user.actions'

const InternshipRoute = ({ component:Component , ...rest})=>{
  const user = useSelector(state =>state.user)
  
  console.log(rest);
  const dispatch= useDispatch();

  // useEffect(()=>{
  //   console.log('calling getUserData in internship route')
  //   dispatch(getUserData())
  // },[])
  useEffect(() => {
    dispatch(getUserData())
  },[])
  
  // Kept this to stop rendering page for some time until userProfile has been fetched!
  const [loading,setLoading]=useState(false)
  setTimeout(() =>{setLoading(true)},2000);
  if(!loading) return <></>

  return(
    <Route {...rest} component={(props)=>{
      const token = window.localStorage.getItem('accessToken');
      if(token){
        
        if(user.user_education.length==0){
          console.log('internship route',rest.path);
          if(user.has_phone_verified&&user.has_email_verified)
          {
            // console.log('fneangn')
            return <Redirect to={{pathname:"/applyForm",state:{from:rest.location.pathname}}}  />
          }
          else {
            return <Redirect to={{pathname:"/verifyOTP",state:{from:rest.location.pathname}}}  />
          }
          
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
