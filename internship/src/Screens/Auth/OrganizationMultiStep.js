/* eslint-disable default-case */
import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { Organization } from "./stepForm/Organization";
import { Organization2 } from "./stepForm/Organization2";
import { Otp } from "./stepForm/Otp";

const defaultData = {
  organization: "",
  email: "",
  mobile: "",
  type: "",
  established: "",
  strength: "",
  city: "",
  country: "",
  description:"",
};

const steps = [{ id: "organization" }, { id: "organization2" }, { id: "otp" }];

export const OrganizationMultiStep = ({obj}) => {
  defaultData.email = obj.email;
  defaultData.mobile = obj.mobile;
  console.log(obj,"obj");
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });
  console.log(formData);

  const props = { formData, setForm, navigation };

  switch (step.id) {
    case "organization":
      return <Organization {...props} />;
    case "organization2":
      return <Organization2 {...props} />;
    case "otp":
      return <Otp {...props} />;
  }

  return (
    <div>
      <h1>Organization/Company Registration</h1>
    </div>
  );
};
