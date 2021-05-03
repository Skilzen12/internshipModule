import React, { useEffect } from 'react'
import {Route, Redirect} from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux'
import { getUserData } from '../../redux/actions/user.actions'

const InternshipRoute = ({ component:Component , ...rest})=>{
  const user = useSelector(state =>state.user)
  
  const dispatch= useDispatch();
  // useEffect(()=>{
  //   console.log('calling getUserData in internship route')
  //   dispatch(getUserData())
  // },[])

  // console.log('internship route',user);

  
  return(
    <Route {...rest} component={(props)=>{
      const token = window.localStorage.getItem('accessToken');
      if(token){
        // dispatch(getUserData())
        if(user.user_education.length==0){
          return <Redirect to="/applyForm" push={true} />
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
