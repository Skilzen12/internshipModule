import React, { useEffect, useState } from "react";
import { useForm, useStep } from "react-hooks-helper";
import { Personal } from "./multistep/Personal";
import { Education } from "./multistep/Education";
import { Profile } from "./multistep/Profile";
import { Otp } from "./stepForm/Otp";
import { Experience } from "./multistep/Experience";

import { useSelector , useDispatch } from 'react-redux'
import { useHistory } from "react-router";
import { redirectURL } from "../../routesConfig";
const defaultData = {
  fname: "",
  lname: "",
  email: "",
  dob: "",
  location: "",
  mobileNo: "",
  gender: "",
  profileTitle: "",
  profileDesc: "",
  skills: "",
  facebook: "",
  github: "",
  linkedIn: "",
  portfolio: "",
  resumeLink: "",
  education:[],
  experience:[],
};

const steps = [
  { id: "personal" },
  { id: "education" },
  { id: "experience" },
  { id: "profile" },
];


export const MultiStepForm = ({location}) => {
  const redirectTo = URLSearchParams(location.search).get(redirectURL);
  const user = useSelector(state => state.user);
  const history=useHistory();
  console.log(location);

  useEffect(()=>{
    if(user.user_education?.length) {
      // if(history.length==1)
      //   history.push('/');
      // else history.goBack();
    }
  },[])

  defaultData.email=user.email;
  defaultData.mobileNo=user.phone_number;
  
  const [formData, setForm] = useForm( defaultData );
  const dispatch = useDispatch();
    //for Education array
  const [EduDetails, setEduDetails] = useState([
    {
      school: "",
      degree: "",
      specialization: "",
      location: "",
      startDate: "",
      endDate: "",
      saved:false,
    },
  ]);
  // console.log('EduDetails',EduDetails);
  //For Experience array
  const [ExpDetails, setExpDetails] = useState([
    {
      expDesignation: "",
      expOrganization: "",
      expLocation: "",
      expStartDate: "",
      expEndDate: "",
      expDescription: "",
      saved:false
    },
  ]);

  // submitting form
  const submitForm = () => {
    const socialLinks = [
      { name: "LinkedIn", link: formData.linkedIn },
      { name: "github", link: formData.github },
      { name: "facebook", link: formData.facebook },
      { name: "portfolio", link: formData.portfolio },
    ];

    const temp = {...formData};
    delete temp.facebook;
    delete temp.github
    delete temp.linkedIn
    delete temp.portfolio
    // delete temp.defaultData

    const data = {
      ...temp,
      socialLinks,
      EduDetails,
      ExpDetails,
    };
    // dispatch(storeProfile(data));
  };
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setForm, navigation };

  switch (step.id) {
    case "personal":
      return <Personal {...props} />;
    case "education":
      return (
        <Education
          {...props}
          EduDetails={EduDetails}
          setEduDetails={setEduDetails}
        />
      );
    case "experience":
      return (
        <Experience
          {...props}
          ExpDetails={ExpDetails}
          setExpDetails={setExpDetails}
        />
      );
    case "profile":
      return <Profile {...props} />;
    default:
  }

  return (
    <div>
      <h1>Student Registration</h1>
    </div>
  );
};
