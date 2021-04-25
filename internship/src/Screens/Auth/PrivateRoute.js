import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {getItem} from '../../utility/localStorageControl';
const PrivateRoute = ({ component:Component , ...rest})=>{
  return(
    <Route {...rest} component={(props)=>{
      const token = getItem('accessToken');
      if(token){
        return <Component {...props} />
      }else{
        return <Redirect to={'/login'} />
      }
    }}/>
  )
}
export default PrivateRoute;