/* eslint-disable default-case */
import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { Organization } from "./stepForm/Organization";
import { Organization2 } from "./stepForm/Organization2";
import { Otp } from "./stepForm/Otp";

const defaultData = {
  organization: "",
  email: "",
  phone: "",
  type: "",
  eastablished: "",
  strength: "",
  city: "",
  country: "",
};

const steps = [{ id: "organization" }, { id: "organization2" }, { id: "otp" }];

export const OrganizationMultiStep = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

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
      <h1>Student</h1>
    </div>
  );
};
