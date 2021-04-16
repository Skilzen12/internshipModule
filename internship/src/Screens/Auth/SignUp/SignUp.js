import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Graduate from "../../../images/sign/garduate.jpg";
import "./SignUp.css";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25chpx",
    },
  },
}));

export default function SignUp() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const classes = useStyles();

  return (
    <>
      <section className="signup">
        <div className="container">
          <div className="signup-content form-container">
            <div className="signup-form form-content-left">
              <form
                className={`${classes.root} form`}
                Validate
                autoComplete="off"
              >
                <h1 className="form-title">Sign Up</h1>
                <div className="form-group">
                  <TextField
                    id="outlined-basic"
                    value={user.firstname}
                    onChange={handleInputs}
                    label="First Name"
                    variant="outlined"
                    type="text"
                    name="firstname"
                  />
                </div>
                <div className="form-group">
                  <TextField
                    id="outlined-basic"
                    value={user.lastname}
                    onChange={handleInputs}
                    label="Last Name"
                    variant="outlined"
                    type="text"
                    name="lastname"
                  />
                </div>
                <div className="form-group">
                  <TextField
                    id="outlined-basic"
                    value={user.email}
                    onChange={handleInputs}
                    label="Email"
                    variant="outlined"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <TextField
                    id="outlined-basic"
                    value={user.password}
                    onChange={handleInputs}
                    label="password"
                    variant="outlined"
                    type="password"
                    name="password"
                  />
                </div>
                <div className="form-group">
                  <TextField
                    id="outlined-basic"
                    value={user.cpassword}
                    onChange={handleInputs}
                    label="Confirm Password"
                    variant="outlined"
                    type="password"
                    name="cpassword"
                  />
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    className="form-input-btn"
                  />
                </div>
                <NavLink to="/login" className="signup-image-link">
                  already signed up
                </NavLink>
              </form>
            </div>
            <div className="signup-image form-content-right">
              <figure>
                <img src={Graduate} alt="image" className="form-img " />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
