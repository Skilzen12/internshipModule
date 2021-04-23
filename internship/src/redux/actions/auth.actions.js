import { authConstants,getData } from "../actionTypes"
import axios from '../helper_axios'

export const signIn = (user)=>{
  return async (dispatch)=>{
    dispatch({
      type:authConstants.SIGNIN_REQUEST
    })
    try{
      const res = await axios.post('/skilzen/v1/login/',user);
      console.log(res,'res from API login');
      if(res.status===200){
        const {token} = res.data;
        localStorage.setItem('accessToken',token);
        dispatch({
          type:authConstants.SIGNIN_SUCCESS,
          payload:{
            token
          }
        })
      }
    }
    catch(err){
      dispatch({
        type:authConstants.SIGNIN_FAILURE,
        payload:{
          message: 'Invalid Login Credentials!'
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

export const signUp = (user)=>{
  return async (dispatch)=>{
    dispatch({
      type:authConstants.SIGNUP_REQUEST
    })
    try{
      const res = await axios.post('/skilzen/v1/sign_up/',user);
      console.log(res,"res in signup");
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