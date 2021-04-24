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

export const addKYCDetails = (data)=>{
  return async (dispatch)=>{
    dispatch({type:Rec.ADD_RECRUITER_REQUEST})
    const main_obj = {
      "company_name": data.organization,
      "owner_email": data.email,
      "phone_no": data.mobile,
      company_uid:{
        link:data.company_uid,
      },
      "official_doc": {
        "link": data.official_doc,
      },
      "logo": {
        "link": data.logo
      },
      "meta": {
        "social_links": [],
        "company_url": data.website,
        "established":data.established,
      },
      kind:data.type,
      strength:data.strength,
      description:data.description,
    }
    console.log(typeof main_obj.strength);
    console.log(typeof "10");
    main_obj.meta.social_links = [...data.socialLinks];
    console.log(main_obj);
    try{
      const res = await axios.post('/internship/v1/company-recruiters/',main_obj);
      if(res.status===201){
        dispatch({type:Rec.ADD_RECRUITER_SUCCESS});
        console.log("NO ERRORS");
        return {error:[]};
      }
    }
    catch(err){
      console.log(err.response,"err in  addKYc details error");
      if(err.response.status==403){
        dispatch({
          type:Rec.ADD_RECRUITER_FAILURE,
          payload:{
            message: 'Already your previous KYC is in processing !',
          }
        })
      }
      else{
        const errors = [];
        if(err.response.data.strength.length){
          errors.push(err.response.data.strength[0]);
        }
        dispatch({
          type:Rec.ADD_RECRUITER_FAILURE,
          payload:{
            message: 'Error while adding data ',
          }
        })
      }
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