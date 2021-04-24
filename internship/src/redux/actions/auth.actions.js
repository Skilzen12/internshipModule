import { authConstants } from "../actionTypes"
import axios from '../helper_axios'

export const signIn = (user)=>{
  return async (dispatch)=>{
    dispatch({type:authConstants.SIGNIN_REQUEST})
    try{
      const res = await axios.post('/skilzen/v1/login/',user);
      if(res.status===200){
        const {token} = res.data;
        window.localStorage.setItem('accessToken',token);
        dispatch({
          type:authConstants.SIGNIN_SUCCESS,
          payload:{token:token}
        })
      }else{
        dispatch({
          type:authConstants.SIGNIN_FAILURE,
          payload:{message: 'Invalid Login Credentials!'}
        })
      }
    }
    catch(err){
      dispatch({
        type:authConstants.SIGNIN_FAILURE,
        payload:{message: 'Invalid Login Credentials!'}
      })
    }
  }
}
export const isAdminLogged = ()=>{
  console.log("called isAdminLogged");
  return (dispatch)=>{
    const token = window.localStorage.getItem('accessToken');
    console.log(window.localStorage.getItem('accessToken'),"THis is the accesstoken in admin logged?");
    dispatch({type:authConstants.LOGGEDIN_REQUEST});
    if(token){
      console.log("dispatch sucess in admin logged");
      dispatch({
        type:authConstants.LOGGEDIN_SUCCESS,
        payload:{
          token:token
        }
      })
    }else{
      dispatch({
        type:authConstants.LOGGEDIN_FAILURE,
        payload:{
          message: 'Not Logged in Before!',
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
export const signUp = (user)=>{
  return async (dispatch)=>{
    dispatch({
      type:authConstants.SIGNUP_REQUEST
    })
    try{
      const res = await axios.post('/skilzen/v1/sign_up/',user);
      if(res.status===201){
        dispatch({
          type:authConstants.SIGNUP_SUCCESS,
        })
      }else{
        dispatch({
          type:authConstants.SIGNUP_FAILURE,
          payload:{
            message:'User already exists !'
          }
        })
      }
    }
    catch(err){
      dispatch({
        type:authConstants.SIGNUP_FAILURE,
        payload:{
          message:'User already exists !'
        }
      })
    }

  }
}