import { getData } from "../actionTypes";

const initialState = {
  first_name: "",
  last_name: "",
  email: '',
  phone_number: '',
  user_education: [],
  user_work_experience: [],
  user_profile: null,
  user_skills: []
}

export default (state=initialState,action)=>{
  console.log(action);
  switch(action.type){
    case getData.GETDATA_REQUEST : 
      state = {
        ...state,
      }
      break;
    case getData.GETDATA_SUCCESS : 
      state = {
        ...state,
        ...action.payload
      }
      break;
    case getData.GETDATA_FAILURE : 
      state = {
        ...initialState,
      }
      break;
  }
  return state;
}