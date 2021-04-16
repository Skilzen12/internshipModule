import React from "react";
import logo from '../../../images/logo.png'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const Experience = ({ formData, setForm, navigation }) => {
  const { company, date, designation, description } = formData;

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="internship__content__card my-5 p-5 signup__container">
        <img
          className="mb-5"
          src={logo}
          style={{ width: "50%" }}
          alt="skilzen logo"
        />
        <h3 className="text-center mb-4">Experience</h3>
      <TextField
        label="Company"
        name="company"
        value={company}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        size="small"
      />
      <TextField
        label="Date"
        name="date"
        value={date}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        size="small"
      />
      <TextField
        label="Designation"
        name="designation"
        value={designation}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        size="small"
      />
      <TextField
        label="Description"
        name="description"
        value={description}
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
