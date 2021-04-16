/* eslint-disable default-case */
import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { Personal } from "./stepForm/Personal";
import { Education } from "./stepForm/Education";
import { Experience } from "./stepForm/Experience";
import { Review } from "./stepForm/Review";
import { Submit } from "./stepForm/Submit"

const defaultData = {
  firstName: "",
  lastName: "",
  email: "",
  city: "",
  country: "",
  college: "",
  degree: "",
  company: "",
  date: "",
  designation: "",
  description: "",
};

const steps = [
  { id: "personal" },
  { id: "education" },
  { id: "experience" },
  { id: "review" },
  { id: "submit" },
];

export const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultData);
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
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;
  }

  return (
    <div>
      <h1>Student
      </h1>
    </div>
  );
};
