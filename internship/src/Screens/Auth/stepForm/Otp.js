import { Button, makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import logoOnly from '../../../images/Group.png'

const useStyles = makeStyles((theme) => ({
  rootSetProfile:{
    '& .MuiTextField-root': {
      margin: theme.spacing(1,0)
    },
    '& label[for="skillsSelect"]':{
      marginBottom:'-5px'
    },
    '& #dp':{
      textAlign:'center',
      marginBottom:'20px',
      cursor:'pointer'
    }
  }
}));


export const Otp = ({ formData, setForm, navigation }) => {
  const classes=useStyles();
  const [phoneVerificationHelperText,setPhoneHelperText]=useState(false);
  const [emailVerificationHelperText,setEmailHelperText]=useState(false);
    return (
      <div className="d-flex justify-content-center align-items-center">
          <div className="internship__content__card my-5 p-5 signup__container">
            <img
              className="mt-n2"
              src={logoOnly}
              style={{ width: "30px" }}
              alt="skilzen logo"
            />
            <h3 className="d-inline-block text-center ml-3 mb-4">Setting up Profile</h3>
            <hr />
      <section>
        <h4 className="text-center mb-4">Verify Email/Phone</h4>
        <br/>
        
        <form className={classes.rootSetProfile} noValidate autoComplete="off">
          <p>Email ID Verification</p>
          <TextField label="Verfication code" id="email__verification" variant="outlined" size="small" style={{width:'60%'}} helperText={emailVerificationHelperText?"OTP has been Sent to your Email Address":""} />
          <Button  variant="contained" color="primary" style={{margin:'8px 5px',padding:'6.5px 15px'}} onClick={()=>{setEmailHelperText(true)}} >Send OTP</Button>
          <br/><br/>
          <p>Phone No Verification</p>
          <TextField label="Verfication code" id="phone__verification" variant="outlined" size="small" style={{width:'60%'}} helperText={phoneVerificationHelperText?"OTP has been Sent to your Phone No":""}/>
          <Button  variant="contained" color="primary" style={{margin:'8px 5px',padding:'6.5px 15px'}}  onClick={()=>{setPhoneHelperText(true)}} >Send OTP</Button>
          <div className="signup__footer mt-3 d-flex justify-content-between">
            <button className="card_btn" 
              onClick={(e) => {
                e.preventDefault();
                navigation.previous();
              }}>
              <BsArrowLeft
                style={{ marginBottom: "2px", fontSize: "17px" }}
              />{" "}
              Back
            </button>
            <button className="apply_btn card_btn" onClick={(e) =>{e.preventDefault()} }>
              Submit
            </button>
          </div>
        </form>
      </section>
      </div>
      </div>
)}