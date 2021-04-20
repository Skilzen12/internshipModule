import React, { useState } from "react";
import "./SignUp.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import {
  TextField,
  makeStyles,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";

import logo from "../../../images/logo.png";

import { OrganizationMultiStep } from "../OrganizationMultiStep";

import { MultiStepForm } from "../MultiStepForm";
import { BsFillPeopleFill, BsPersonFill } from "react-icons/bs";

const useStyles = makeStyles((theme) => ({
  rootSignUp: {
    "& > *": {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      width: "45%",
    },
    "& > .signup__btn": {
      marginTop: 'inherit',
      marginBottom: 'inherit',
      width: "inherit",
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
  for_auth_div:{
    display:"flex",
    flexDirection:"column",
    width:"100%"
  },
  for_auth_btn:{
    width: "100%",
    background: "transparent",
    color: "black",
    height: "45px",
    borderRadius:"10px",
    border: "#b6b2b2 solid 1px",
    margin:"10px 0px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: "10px"   
  },
  for_auth_fb_icons:{
    marginTop:"0px",
    marginBottom:"1px",
    marginRight:"10px",
    fontSize:"25px",
    color:"#3838e9",
  },
  for_auth_icons:{
    marginTop:"0px",
    marginBottom:"1px",
    marginRight:"10px",
    fontSize:"25px"
  },
  for_hr_line:{
  width:"100%"
  },
  for_already_registerd:{
    width:"100%"
  },
  for_Login_redirect:{
    color:" #ec1f28 !important",
    textDecoration:"underline !important",
    fontSize:'15px',
    marginTop:'2px',
    marginLeft:"3px"
}
}));

const SignUp_and_SetProfile = () => {
  const [section, setSection] = useState("SignUp");
  const classes = useStyles();

  // ---------SignUp (asks credentials)
  const SignUp1 = () => {
    return (
      <div className="internship__container__centered">
        <div className="internship__content__card p-5 signup__container">
          <img
            className="mb-5"
            src={logo}
            style={{ width: "30%" }}
            alt="skilzen logo"
          />
          <h3 className="text-center mb-4">Join us!</h3>
          <form className={classes.rootSignUp} noValidate autoComplete="off">
            <TextField
              className={classes.fullWidth}
              size="small"
              label="Email Address"
              variant="outlined"
              fullWidth
            />
            <TextField
              className={classes.fullWidth}
              size="small"
              label="Contact Number"
              variant="outlined"
              fullWidth
            />
            <TextField
              size="small"
              label="Password"
              type="password"
              variant="outlined"
            />
            <TextField
              className={classes.rightInputField}
              size="small"
              label="Confirm Password"
              type="password"
              variant="outlined"
            />
            {/* <div className="m-0 w-100">
              <FormControlLabel
                value="end"
                control={<Checkbox color="primary" />}
                label="Show Password"
                labelPlacement="end"
              />
            </div> */}
            <hr className={classes.for_hr_line}></hr>
            <div className={classes.for_auth_div}>
              <div>
                <button className={classes.for_auth_btn}>
                    <FcGoogle className={classes.for_auth_icons}/> Join with Google
                </button>
              </div>
              <div>
                <button className={classes.for_auth_btn}>
                    <FaFacebookSquare className={classes.for_auth_fb_icons}/> Join with Facebook
                </button>
              </div>
            </div>
            <div className={classes.for_already_registerd}>
              <p>If you already have account: <a  className={classes.for_Login_redirect}>Login</a></p>
            </div>
            <div className='signup__btn d-flex justify-content-end'>
            <button
              class="apply_btn card_btn"
              onClick={(e) => {
                e.preventDefault();
                setSection("SignUp2");
              }}
            >
              Sign Up
            </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  //----------Asks whether student or Organization
  const SignUp2 = () => (
    <div className="d-flex justify-content-center align-items-center">
      <div className="internship__content__card my-5 p-5 signup__container">
        <img
          className="mb-5"
          src={logo}
          style={{ width: "30%" }}
          alt="skilzen logo"
        />

        <form noValidate autoComplete="off">
          {/* <h3 className="text-center mb-4">I am</h3> */}
          <div className='d-flex align-items-center'>
            <button
              class="select__type_btn apply_btn"
              onClick={(e) => {
                e.preventDefault();
                setSection("Student");
              }}
            >
              <BsPersonFill />
              Student
            </button>
            <h4 className="w-100 text-center m-0">Or</h4>
            <button
              class="select__type_btn apply_btn"
              onClick={(e) => {
                e.preventDefault();
                setSection("Org");
              }}
            >
              <BsFillPeopleFill />
              Organistion/Company
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  // ----------SignUP and SetProfile Merged Below---------

  return (
    <div className='Login__Signup'>
      {section === "SignUp" && <SignUp1 />}

      {section === "SignUp2" && <SignUp2 />}

      {section === "Student" && <MultiStepForm />}
      {section === "Org" && <OrganizationMultiStep />}

    </div>
  );
};

export default SignUp_and_SetProfile;
