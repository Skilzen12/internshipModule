import { getItem } from "../../utility/localStorageControl"
import {getData,addEducation as Edu , addWorkExperience as Exp,addNewRecruiter as Rec,addSkills as skillTypes,addProfile as profileTypes } from "../actionTypes"
import axios from '../helper_axios'

export const getUserData = ()=>{
  return async (dispatch)=>{
    dispatch({type:getData.GETDATA_REQUEST})
    try{
      console.log('Before', getItem('accessToken'));
      const res = await axios.get('/skilzen/v1/profile/');
      if(res.statusText === 'OK'){
        console.log(res.data.results[0]);
        dispatch({
          type:getData.GETDATA_SUCCESS,
          payload:{
            ...res.data.results[0]
          }
        })
      }else if(res.status === 400){
        console.log(res);
        dispatch({
          type:getData.GETDATA_FAILURE,
          payload:{
            message: 'Error while accessing data!'
          }
        })
      }
    }catch(err){
      console.log(err,"error");
      dispatch({
        type:getData.GETDATA_FAILURE,
        payload:{
          message: 'Error while accessing data!'
        }
      })
    }
  }
}
export const addEducations = (data) => {
  return async (dispatch)=>{
    dispatch({type:Edu.ADD_EDUCATION_REQUEST})
    const obj = {meta:data};
    console.log(obj);
    
    try{
      const res = await axios.post('/skilzen/v1/profile/education/',obj);
      if(res.status === 201){
        dispatch({
          type:Edu.ADD_EDUCATION_SUCCESS,
        })
      }else{
        dispatch({
          type:Edu.ADD_EDUCATION_FAILURE,
          payload:{
            message: 'Error while accessing data!'
          }
        })
      }
      return {...res,error:''};
    }catch(err){
      dispatch({
        type:Edu.ADD_EDUCATION_FAILURE,
        payload:{
          message: 'Error while accessing data!'
        }
      })
      return {error:'Error while accessing data!'};
    }
  }
}
export const addWorkExperience = (data) => {
  return async (dispatch)=>{
    dispatch({type:Exp.ADD_WORK_EXP_REQUEST})
    const obj = {meta:data};
    try{
      const res = await axios.post('/skilzen/v1/profile/work_experience/',obj);
      if(res.status===201){
        dispatch({type:Exp.ADD_WORK_EXP_SUCCESS})
      }else{
        dispatch({
          type:Exp.ADD_WORK_EXP_FAILURE,
          payload:{
            message: 'Error while accessing data!'
          }
        })
      }
      return {...res,error:''};
    }
    catch(err){
      dispatch({
        type:Exp.ADD_WORK_EXP_FAILURE,
        payload:{
          message: 'Error while accessing data!'
        }
      })
      return {error:'Error while accessing data!'};
    }
  }
}

export const addNewRecruiter = (data)=>{
  return async (dispatch)=>{
    dispatch({type:Rec.ADD_RECRUITER_REQUEST})
    try{
      const res = await axios.post('/internship/v1/company-recruiters/',data);
      if(res.status===201){
        dispatch({type:Rec.ADD_RECRUITER_SUCCESS}) 
      }else{
        dispatch({
          type:Rec.ADD_RECRUITER_FAILURE,
          payload:{
            message: 'Error while adding data!'
          }
        })
      }
      return {...res,error:''};
    }
    catch(err){
      dispatch({
        type:Rec.ADD_RECRUITER_FAILURE,
        payload:{
          message: 'Error while adding data!'
        }
      })
      return {error:'Error while adding data!'};
    }
  }
}
export const addProfile= (profileDesc,social_links,location,linked_website)=> async (dispatch)=>{
    dispatch({
      type:profileTypes.ADD_PROFILE_REQUEST
    })
    axios.post('/skilzen/v1/profile/update_profile/',{
      description:profileDesc,
      meta:{
        linked_website,
        location,
        social_links
      }
    })
    .then((res)=>{
      console.log(res);
      dispatch({
        type:profileTypes.ADD_PROFILE_SUCCESS,
        payload:{}                  //data to be added
      })
    })
    .catch((err)=>{
      const res=err.response;
      console.log(res);
      if(res.data[0]==='UserProfile already present') {
        dispatch({
          type:profileTypes.ADD_PROFILE_FAIL,
          payload:null
        })
      }
      else
      dispatch({
        type:profileTypes.ADD_PROFILE_FAIL,
        payload:'Error Ocurred'
      })
    })
    
}

export const addSkills= (skill)=> async (dispatch)=>{
  // console.log(skill)

  dispatch({
    type:skillTypes.ADD_SKILL_REQUEST
  })
  axios.post('/skilzen/v1/profile/skill/',skill)
  .then((res)=>{
    // console.log('skills suceed!',res);
    dispatch({
      type:skillTypes.ADD_SKILL_SUCCESS,
      payload:res.data
    })
  })
  .catch(err=>{
    // console.log('skills error',err.response);
    dispatch({
      type:skillTypes.ADD_SKILL_FAIL,
      payload:err.response.data
    })
  })
    
}