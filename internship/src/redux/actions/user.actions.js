import {getData,addEducation as Edu , addWorkExperience as Exp } from "../actionTypes"
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
// {
//   "meta": {
//       "degree": "Btech Chemical",
//       "college_id": "1",
//       "college_name": "NIT",
//       "college_city": "Warangal",
//       "start_date": "2017-08-02",
//       "end_date": "2022-08-21",
//       "location": ""
      
//       }
// }