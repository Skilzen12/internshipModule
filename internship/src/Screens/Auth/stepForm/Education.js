import React from "react";
import logo from '../../../images/logo.png'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const Education = ({ formData, setForm, navigation }) => {
  const { college, degree } = formData;
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="internship__content__card my-5 p-5 signup__container">
        <img
          className="mb-5"
          src={logo}
          style={{ width: "50%" }}
          alt="skilzen logo"
        />
        <h3 className="text-center mb-4">Personal Details</h3>
      <TextField
        label="College"
        name="college"
        value={college}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        size="small"
      />
      <TextField
        label="Degree"
        name="degree"
        value={degree}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        size="small"
      />

      <div style={{ marginTop: "1rem" }}>
        <Button
          color="secondary"
          variant="contained"
          style={{ marginRight: "1rem" }}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => navigation.next()}
        >
          Next
        </Button>
      </div>
    </div>
    </div>
  );
};
