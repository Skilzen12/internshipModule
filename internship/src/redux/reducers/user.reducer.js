import { getData,addEducation as Edu,addWorkExperience as Exp } from "../actionTypes";
/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */

const initialState = {
  first_name: "",
  last_name: "",
  email: '',
  phone_number: '',
  user_education: [],
  user_work_experience: [],
  user_profile: null,
  user_skills: [],
  educLoading:false,
  expLoading: false,
  skillsLoading: false,
  recruits_for: null
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
    case Edu.ADD_EDUCATION_REQUEST : 
      state = {
        ...state,
        educLoading:true,
      }
      break;
    case Edu.ADD_EDUCATION_SUCCESS : 
      state = {
        ...state,
        ...action.payload,
        educLoading:false,
      }
      break;
    case Edu.ADD_EDUCATION_FAILURE : 
      state = {
        ...state,
        educLoading:false,
      }
      break;
    case Exp.ADD_WORK_EXP_REQUEST : 
      state = {
        ...state,
        expLoading:true,
      }
      break;
    case Exp.ADD_WORK_EXP_SUCCESS : 
      state = {
        ...state,
        ...action.payload,
        expLoading:false,
      }
      break;
    case Exp.ADD_WORK_EXP_FAILURE : 
      state = {
        ...state,
        expLoading:false,
      }
      break;
  }
  return state;
}