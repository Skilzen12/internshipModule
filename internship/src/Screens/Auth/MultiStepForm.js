import React, { useState } from "react";
import { useForm, useStep } from "react-hooks-helper";
import { Personal } from "./multistep/Personal";
import { Education } from "./multistep/Education";
import { Profile } from "./multistep/Profile";
import { Otp } from "./stepForm/Otp";
import { Experience } from "./multistep/Experience";
import { useDispatch } from "react-redux";
import { storeProfile } from "../../redux/actions/auth.actions";

const defaultData = {
  type: "student",
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
};

const steps = [
  { id: "personal" },
  { id: "education" },
  { id: "experience" },
  { id: "profile" },
  { id: "otp" },
];

export const MultiStepForm = () => {
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
    },
  ]);

  //For Experience array
  const [ExpDetails, setExpDetails] = useState([
    {
      expDesignation: "",
      expOrganization: "",
      expLocation: "",
      expStartDate: "",
      expEndDate: "",
      expDescription: "",
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
    dispatch(storeProfile(data));
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
    case "otp":
      return <Otp {...props} submitForm={submitForm} />;
    default:
  }

  return (
    <div>
      <h1>Student Registration</h1>
    </div>
  );
};
