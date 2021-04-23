import {getData,addEducation as Edu , addWorkExperience as Exp,addNewRecruiter as Rec } from "../actionTypes"
import axios from '../helper_axios'


export const getUserData = ()=>{
  console.log("getUserData");
  return async (dispatch)=>{
    dispatch({
      type:getData.GETDATA_REQUEST,
      payload:{
        message:'requesting to get data'
      },
    })
    const res = await axios.get('/skilzen/v1/profile/');
    if(res.statusText === 'OK'){
      dispatch({
        type:getData.GETDATA_SUCCESS,
        payload:{
          ...res.data.results[0]
        }
      })
    }else if(res.status == 400){
      console.log(res);
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