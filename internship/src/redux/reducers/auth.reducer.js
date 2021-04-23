/* eslint-disable import/no-anonymous-default-export */
import { authConstants } from "../actionTypes";

const initialState = {
    token:null,
    authenticate:false,
    message:"",
    loading:false,
    signedUp:false,
}

  export default  (state=initialState,action)=>{
    console.log(action)
    switch(action.type){
      case authConstants.SIGNIN_REQUEST : 
        state = {
          ...state,
          loading:true
        }
        break;
      case authConstants.SIGNIN_SUCCESS : 
        state = {
          ...state,
          token:action.payload.token,
          authenticate:true,
          loading:false,
          message:"",
        }
        break;
      case authConstants.SIGNIN_FAILURE : 
        state = {
          ...state,
          token:null,
          authenticate:false,
          message:action.payload.message, 
          loading:false
        }
        console.log(state)
        break;
      case authConstants.SIGNUP_REQUEST : 
        state = {
          ...state,
          loading:true,
          signedUp:false,
        }
        break;
      case authConstants.SIGNUP_SUCCESS : 
        state = {
          ...state,
          loading:false,
          signedUp:true,
        }
        break;
      case authConstants.SIGNUP_FAILURE : 
        state = {
          ...initialState,
          loading:false,
          message:action.payload.message,
          signedUp:false,
        }
        break;
      case authConstants.SIGNOUT_REQUEST:
        state = {
          ...state,
        }
        break;
      case authConstants.SIGNOUT_SUCCESS:
        console.log('entered signout_success')
        state = {
          token:null,
          message:action.payload.message,
          authenticate:false,
        }
        break;
      case authConstants.SIGNOUT_FAILURE:
        state = {
          ...state,
        }
    }
    return state;
  }
