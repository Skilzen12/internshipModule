import { authConstants,getData } from "../actionTypes"
import axios from '../helper_axios'

import AdminService from '../../AdminServices/AdminService'

export const signIn = (user)=>{
  return async (dispatch)=>{
    dispatch({
      type:authConstants.SIGNIN_REQUEST
    })
    const res = await axios.post('/skilzen/v1/login/',user);

    if(res.status===200){
      const {token} = res.data;
      localStorage.setItem('accessToken',token);
      dispatch({
        type:authConstants.SIGNIN_SUCCESS,
        payload:{
          token
        }
      })
    }else{
      console.log(res);
      dispatch({
        type:authConstants.SIGNIN_FAILURE,
        payload:{
          message: 'Error while signing in!'
        }
      })
    }

  }
}
export const isAdminLogged = ()=>{
  console.log("called isAdminLogged");
  return (dispatch)=>{
    const token = localStorage.getItem('accessToken');
    if(token){
      dispatch({
        type:authConstants.SIGNIN_SUCCESS,
        payload:{
          token
        }
      })
    }else{
      dispatch({
        type:authConstants.SIGNIN_FAILURE,
        payload:{
          message:"Not logged in before"
        }
      })
    }
  }
}
export const logoutAdmin = ()=>{
  return async (dispatch)=>{
    dispatch({
      type:authConstants.SIGNOUT_REQUEST,
      payload:{
        message:'requesting to admin LOGOUT'
      },
    })
    window.localStorage.clear();
    console.log('removed token');
    dispatch({
        type:authConstants.SIGNOUT_SUCCESS,
        payload:{
            message:'Logged out Successfully!'
        }
    })
    
  }
}
