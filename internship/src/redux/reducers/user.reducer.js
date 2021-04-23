import { getData,addEducation as Edu,addWorkExperience as Exp, addSkills } from "../actionTypes";

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

export const userReducer = (state=initialState,action)=>{
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
      }
      break;
    case Edu.ADD_EDUCATION_SUCCESS : 
      state = {
        ...state,
        ...action.payload
      }
      break;
    case Edu.ADD_EDUCATION_FAILURE : 
      state = {
        ...initialState,
      }
      break;
    case Exp.ADD_WORK_EXP_REQUEST : 
      state = {
        ...state,
      }
      break;
    case Exp.ADD_WORK_EXP_SUCCESS : 
      state = {
        ...state,
        ...action.payload
      }
      break;
    case Exp.ADD_WORK_EXP_FAILURE : 
      state = {
        ...initialState,
      }
      break;
    case addSkills.ADD_SKILL_REQUEST:
      state={
        ...state
      }
      break;
    case addSkills.ADD_SKILL_SUCCESS:
      state={
        ...state,
        user_skills:[...state.user_skills,action.payload]
      }
      break;
    case addSkills.ADD_SKILL_FAIL:
      state={
        ...state,
        err:action.payload
      }
      break;
    default:
  }

  return state;
  
}
