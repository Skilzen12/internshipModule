/* eslint-disable default-case */
import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { Organization } from "./stepForm/Organization";
import { Organization2 } from "./stepForm/Organization2";
import { Otp } from "./stepForm/Otp";

const steps = [{ id: "organization" }, { id: "organization2" }, { id: "otp" }];

export const OrganizationMultiStep = (obj) => {
  let defaultData = {
    organization: "",
    email: obj.user.email,
    mobile: obj.user.mobile,
    established: "",
    strength: "",
    city: "",
    kind: "",
    description:"",
    socialLinks:{},
    website: ""
  };
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
