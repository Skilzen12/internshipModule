import React, { useEffect } from 'react'
import {Route, Redirect} from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux'
import { getUserData } from '../../redux/actions/user.actions'

const ProtectedRoute1 = ({ component:Component , ...rest})=>{
  const user = useSelector(state =>state.user)
  

  return(
    <Route {...rest} component={(props)=>{
      const token = window.localStorage.getItem('accessToken');
      if(!token){
        return <Redirect to={'/signup'} />
      }else{
        if(user.user_education.length==0){
            if(user.has_phone_verified){
                // console.log('protected1, phone verified')
                return <Component {...props} />
            }
            else 
            return <Redirect to={{
                pathName:"/verifyOTP",
                state:{from:rest.path}
            }} />
          }
        else{
            return <Redirect to="/" />
        }
      }
    }} />
  )
}
export default ProtectedRoute1;
