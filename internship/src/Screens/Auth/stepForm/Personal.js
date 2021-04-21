import React,{useState} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button"
import logo from '../../../images/logo.png'

import Notification from '../Notification.js'

export const Personal = ({ formData, setForm, navigation }) => {
  const { firstName, lastName, email, phone, city, country } = formData;
  

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
          label="First Name"
          name="firstName"
          value={firstName}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
          size="small"
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={lastName}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
          size="small"
        />
        <TextField
          label="Email"
          name="email"
          value={email}
          disabled
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
          size="small"
        />
        <TextField
          label="Phone"
          name="mobile"
          value={mobile}
          disabled
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
          size="small"
        />
        <TextField
          label="City"
          name="city"
          value={city}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
          size="small"
        />
        <TextField
          label="Country"
          name="country"
          value={country}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
          size="small"
        />

        <Button
          variant="contained"
          fullWidth
          color="primary"
          style={{ marginTop: "1rem" }}
          onClick={(e) => {
            navigation.next();
          }}
        >
          Next
        </Button>
        {
          notify.isOpen && 
          <Notification
            notify={notify}
          />
        }
      </div>
    </div>
  );
};
