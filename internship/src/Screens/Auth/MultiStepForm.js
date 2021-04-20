import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { Personal } from "./multistep/Personal";
import { Education } from "./multistep/Education";
import { Profile } from "./multistep/Profile";
import { Otp } from "./stepForm/Otp";
import { Experience } from "./multistep/Experience";

const defaultData = {
  fname: "",
  lname: "",
  email: "",
  dob: "",
  city: "",
  mob: "",
  gender: "",
  college: [""],
  specialization: [""],
  degree: [""],
  startdate: [""],
  enddate: [""],
  expDesignation:"dejn",
  expOrganization:"",
  expStartDate:"",
  expEndDate:"",
  expDescription:"",
  profileTitle: "",
  fb: "",
  github: "",
  linkedIn: "",
  portfolio:" ",
  skills: "",
};

const steps = [
  { id: "personal" },
  { id: "education" },
  { id: "experience" },
  {id:"profile"},
  { id: "otp" },
];

export const MultiStepForm = () => {
  const [formData, setForm] = useForm({ defaultData });
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setForm, navigation };

  switch (step.id) {
    case "personal":
      return <Personal {...props} />;
    case "education":
      return <Education {...props} />;
    case "experience":
      return <Experience {...props} />;
    case "profile":
        return <Profile {...props} />
    case "otp":
      return <Otp {...props} />;
    default:
  }

  return (
    <div>
      <h1>Student Registration</h1>
    </div>
  );
};
