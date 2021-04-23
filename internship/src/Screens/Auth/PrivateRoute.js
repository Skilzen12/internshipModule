import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux'

const PrivateRoute = ({ component:Component , ...rest})=>{
  const auth = useSelector(state => state.auth);
  return(
    <Route {...rest} component={(props)=>{
      if(auth.authenticate){
        return <Component {...props} />
      }else{
        return <Redirect to={'/login'} />
      }
    }} />
  )
}
export default PrivateRoute;
