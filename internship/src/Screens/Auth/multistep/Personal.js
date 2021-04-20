import React, { useState } from "react";

import { TextField, makeStyles } from "@material-ui/core";
import { GoCheck } from "react-icons/go";
import logoOnly from "../../../images/Group.png";
import { BsArrowRight } from "react-icons/all";

const useStyles = makeStyles((theme) => ({
  rootSignUp: {
    "& > *": {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      width: "45%",
    },
  },
  fullWidth: {
    width: "100%",
  },
  rightInputField: {
    marginLeft: "10%",
  },
  rootSetProfile: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1, 0),
    },
    '& label[for="skillsSelect"]': {
      marginBottom: "-5px",
    },
    "& #dp": {
      textAlign: "center",
      marginBottom: "20px",
      cursor: "pointer",
    },
  },
  rootDatePicker: {
    display: "flex",
    gridGap: "10px",
  },
}));

const CheckBox = ({ active }) => {
  return (
    <div
      style={{
        position: "relative",
        cursor: "pointer",
        display: "inline-block",
        marginRight: 10,
        width: 14,
        height: 14,
        backgroundColor: !active ? "lightgray" : "var(--cherry)",
      }}
    >
      <GoCheck
        style={{
          position: "absolute",
          color: "white",
          display: !active && "none",
          fontSize: 14,
          margin: 0,
          padding: 0,
        }}
      />
    </div>
  );
};

export const Personal = ({ formData, setForm, navigation }) => {
  let { fname, lname, email, dob, city, mob, gender } = formData;
  const classes = useStyles();
  const [activeGender, setActiveGender] = useState("male");

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="internship__content__card my-5 p-5 signup__container">
        <img
          className="mt-n2"
          src={logoOnly}
          style={{ width: "30px" }}
          alt="skilzen logo"
        />
        <h3 className="d-inline-block text-center ml-3 mb-4">
          Setting up Profile
        </h3>
        <hr />
        <section>
          <h4 className="mb-4">Personal Details </h4>
          <form
            className={classes.rootSetProfile}
            noValidate
            autoComplete="off"
          >
            <div id="dp">
              <img
                src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
                width="100px"
                className="m-auto"
              />
              <p>Upload Picture</p>
            </div>
            <TextField
              label="First Name"
              name="fname"
              value={fname}
              onChange={setForm}
              variant="outlined"
              size="small"
              fullWidth
            />
            <TextField
              label="Last Name"
              name="lname"
              variant="outlined"
              size="small"
              fullWidth
              value={lname}
              onChange={setForm}
            />
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              size="small"
              fullWidth
              value={email}
              onChange={setForm}
            />
            <TextField
              label="Date of Birth"
              name="dob"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              size="small"
              fullWidth
              value={dob}
              onChange={setForm}
            />
            <TextField
              label="Current Location"
              name="city"
              variant="outlined"
              size="small"
              fullWidth
              value={city}
              onChange={setForm}
            />

            <TextField
              label="Mobile No."
              name="mob"
              variant="outlined"
              size="small"
              fullWidth
              value={mob}
              onChange={setForm}
            />
            {/* <label for="birthday">Birthday</label>
                  <input type="date" id="birthday" name="birthday" /> */}
            {/* Gender  */}
            <p className='mt-3 mb-2'>Choose Gender:</p>
            <div
              className=""
              onClick={() => {
                setActiveGender("male");
              }}
            >
              <CheckBox
                active={activeGender === "male"}
                value={activeGender}
                name={gender}
                onClick={setForm}
              />
              <label for="Male">Male</label>
            </div>
            <div
              onClick={() => {
                setActiveGender("female");
                gender = activeGender;
              }}
            >
              <CheckBox active={activeGender === "female"} />
              <label for="Female">Female</label>
            </div>
            <div
              onClick={() => {
                setActiveGender("others");
                gender = { ...gender, activeGender };
              }}
            >
              <CheckBox active={activeGender === "others"} />
              <label for="Others">Others</label>
            </div>
            <div className="signup__footer d-flex justify-content-end">
              <button
                class="apply_btn card_btn"
                onClick={(e) => {
                  e.preventDefault();
                  navigation.next();
                }}
              >
                Next{" "}
                <BsArrowRight
                  style={{ marginBottom: "2px", fontSize: "17px" }}
                />
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};
