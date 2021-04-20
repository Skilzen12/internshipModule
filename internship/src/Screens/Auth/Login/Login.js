import React from 'react'
import logo from "../../../images/logo.png";
import { Checkbox, FormControlLabel, makeStyles, TextField } from '@material-ui/core';
import { useHistory } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";



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
    for_auth_div:{
      display:"flex",
      flexDirection:"column",
      width:"100%"
    },
    for_auth_btn:{
      width: "100%",
      background: "transparent",
      color: "#848383",
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
    for_login_adj:{
      display:"flex",
      justifyContent:"flex-end"
    }
    
  }));


const Login = () => {
    const classes=useStyles();
    const history=useHistory();
    return (
        <div className="internship__container__centered">
        <div className="internship__content__card p-5 signup__container">
          <img
            className="mb-5"
            src={logo}
            style={{ width: "30%" }}
            alt="skilzen logo"
          />
          <h3 className="text-center mb-4">Log In</h3>
          <form className={classes.rootSetProfile} noValidate autoComplete="off">
            <TextField
              className={classes.fullWidth}
              size="small"
              label="Email Adress"
              variant="outlined"
              fullWidth
            />
            <TextField
              size="small"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
            />
            <div className="m-0 w-100">
              <FormControlLabel
                value="end"
                control={<Checkbox color="primary" />}
                label="Show Password"
                labelPlacement="end"
              />
            </div>
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
            <div className={classes.for_login_adj}>
                <button
                  class="apply_btn card_btn"
                  onClick={(e) => {
                    e.preventDefault();
                    history.replace('/home2');
                  }}
                >
                  Log in
                </button>
            </div>
          </form>
        </div>
      </div>
    )
}

export default Login
