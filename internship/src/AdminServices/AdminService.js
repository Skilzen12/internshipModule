/* eslint-disable import/no-anonymous-default-export */
import { DataService } from './dataService';

export default {
  // SignUp: async(data) => {
  //   return DataService.post('/skilzen/v1/sign_up/', data);    
  // },
  // userLogin: async(data) => {
  //   return await DataService.post('/skilzen/v1/login/', data);    
  // },
  getPhoneOTP: async() => {
    return await DataService.get('/skilzen/v1/phone_otp/');    
  },
  getEmailOTP: async() => {
    return await DataService.get('/skilzen/v1/email_otp/');    
  },
  verifyPhoneOTP: async(data) => {
    return DataService.post('/skilzen/v1/phone_otp/verify', data);    
  },
  verifyEmailOTP: async(data) => {
    return DataService.post('/skilzen/v1/email_otp/verify', data);    
  },
  getUserProfile: async() => {
    return DataService.get('/skilzen/v1/profile/');
  },
  createUserProfile: async(data) => {
    return DataService.post('/skilzen/v1/profile/update_profile/', data);
  },
  updateUserProfile: async(data) => {
    return DataService.put('/skilzen/v1/profile/update_profile/', data);
  },
  getInternshipsList : async () => {
    return await DataService.get('/internship/v1/internships/');
  },
  getInternshipsCategories : async () => {
    return await DataService.get('/internship/v1/internships/stats/');
  },
  getInternshipsDetail : async (id) => {
    return await DataService.get(`/internship/v1/internships/${id}/`);
  },
  InternshipsApply : async (id) => {
    return await DataService.get(`/internship/v1/internships/${id}/apply/`);
  },
  InternshipsBookmark : async (id) => {
    return await DataService.get(`/internship/v1/internships/${id}/bookmark/`);
  },
  addRecruiters: async(data) => {
    return DataService.post('/internship/v1/company-recruiters/', data);
  },
  getcompanyRecruiters: async() => {
    return DataService.get('/internship/v1/company-recruiters');
  },
  getCompanyDashboard: async() => {
    return DataService.get('/internship/v1/company-recruiters/dashboard/');
  },
  postInternship: async(data) => {
    return DataService.post('/internship/v1/company-recruiter/postings/', data);
  },
  getCompanyInternship: async() => {
    return DataService.get('/internship/v1/company-recruiter/postings/');
  },
  getActiveCompanyInternship: async() => {
    return await DataService.get('/internship/v1/company-recruiter/postings?currently_active=true');
  },
  getInactiveCompanyInternship: async() => {
    return await DataService.get('/internship/v1/company-recruiter/postings?currently_active=false');
  },
  editInternship: async(data) => {
    return DataService.put('/internship/v1/company-recruiter/postings/', data);
  },
  getIndividualInternship: async(id) => {
    return DataService.get(`/internship/v1/company-recruiter/postings/${id}`);
  },
  createCompanyProfile: async(data) => {
    return DataService.post('/skilzen/v1/profile/company/', data);
  },
  getCompanyProfile: async() => {
    return DataService.get('/skilzen/v1/profile/company/');
  },
  updateCompanyProfile: async(data) => {
    return DataService.put('/skilzen/v1/profile/company/', data);
  },
  getUserEducation: async(id) => {
    return DataService.get(`/skilzen/v1/profile/education/${id}`);
  },
  createUserEducation: async(data) => {
    return DataService.post('/skilzen/v1/profile/education/', data);
  },
  updateUserEducation: async(data, id) => {
    return DataService.put(`/skilzen/v1/profile/education/${id}/`, data);
  },
  getUserExperience: async(id) => {
    return DataService.get(`/profile/work_experience/${id}`);
  },
  createUserExperience: async(data) => {
    return DataService.post('/skilzen/v1/profile/work_experience/', data);
  },
  updateUserExperience: async(data, id) => {
    return DataService.put(`/skilzen/v1/profile/work_experience/${id}/`, data);
  },
  getUserSkills: async(id) => {
    return DataService.get(`/skilzen/v1/profile/skill/${id}`);
  },
  createUserSkills: async(data, id) => {
    return DataService.post(`/skilzen/v1/profile/skill/${id}/`, data);
  },
  updateUserSkills: async(data, id) => {
    return DataService.put(`/skilzen/v1/profile/skill/${id}/`, data);
  },
  getCompanyLocation: async() => {
    return DataService.get(`/skilzen/v1/profile/company_location/`);
  },
  getCompanyLocationDetails: async(id) => {
    return DataService.get(`/skilzen/v1/profile/company_location/${id}`);
  },
  createCompanyLocationDetails: async(data) => {
    return DataService.post(`/skilzen/v1/profile/company_location/`, data);
  },
  updateCompanyLocationDetails: async(data, id) => {
    return DataService.put(`/skilzen/v1/profile/company_location/${id}/`, data);
  },
  getCompanyList: async() => {
    return DataService.get('/internship/v1/company-recruiters');
  },
  DeactivateInternship : async(id) => {
    return DataService.get(`/internship/v1/company-recruiter/postings/${id}/deactivate/`);
  },
  EditInternship : async(id, data) => {
    return DataService.put(`/internship/v1/company-recruiter/postings/${id}/`, data);
  },
  ApplicantsCompany : async(id) => {
    return DataService.get(`/internship/v1/company-recruiter/postings/${id}/applicants`);
  },
  getAppliedInternships: async() => {
    return DataService.get(`/internship/v1/internships/applied`);
  },
  getSavedInternships : async() => {
    return DataService.get(`/internship/v1/internships/bookmarked`);
  }
}