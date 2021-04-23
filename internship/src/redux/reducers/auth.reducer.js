import { authConstants } from "../actionTypes";

const initialState = {
    token:null,
    authenticate:false,
    message:'',
    loading:false,
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
          message:'successfully signed in..',
          loading:false,
        }
        break;
      case authConstants.SIGNIN_FAILURE : 
        state = {
          token:null,
          authenticate:false,
          message:action.payload.message, 
          loading:false
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
