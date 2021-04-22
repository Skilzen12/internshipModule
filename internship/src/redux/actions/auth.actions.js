import { authConstants } from "../actionTypes"
import axios from '../helper_axios'

export const signIn = (user)=>{
  return async (dispatch)=>{
    dispatch({
      type:authConstants.SIGNIN_REQUEST
    })
    const res = await axios.post('/skilzen/v1/login/',user)
    console.log(res)
    
    if(res.statusText === 'OK'){
      const {token} = res.data;
      localStorage.setItem('accessToken',token);
      dispatch({
        type:authConstants.SIGNIN_SUCCESS,
        payload:{
          token
        }
      })
    }else if(res.status == 400){
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
