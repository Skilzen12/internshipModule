import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux'

const PrivateRoute = ({ component:Component , ...rest})=>{
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  return(
    <Route {...rest} component={(props)=>{
      const token = auth.authenticate;
      if(token){
        return <Component {...props} />
      }else{
        return <Redirect to={'/login'} />
      }
    }} />
  )
}
export default PrivateRoute;
