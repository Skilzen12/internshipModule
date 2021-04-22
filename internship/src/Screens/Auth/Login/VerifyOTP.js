import { Button, makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import AdminService from "../../../AdminServices/AdminService";
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

const SubmitOTP = (phone, email) => {
    if(phone && email){
        window.open('/home', '_self');
    }
}

const SendPhoneOTP = async () => {
    AdminService.getPhoneOTP()
      .then(res => console.log(res.data)) 
      .catch(err => console.log(err))
}
  
const SendEmailOTP = async () => {  
    AdminService.getEmailOTP()
      .then(res => console.log(res.data)) 
      .catch(err => console.log(err))
}

const VerifyPhone = async(phone, Phone, PhoneText) => {
    var phoneData = {
        otp : phone
    }
    AdminService.verifyPhoneOTP(phoneData)
        .then(res => {
          if(res.data === 'User is Verified'){
            Phone(true);
            PhoneText('OTP Verified!')
          }
        })
        .catch(err => console.log(err))
}

const VerifyEmail = async(email, Email, EmailText) => {
    var emailData = {
        otp : email
    }
    AdminService.verifyEmailOTP(emailData)
        .then(res => {
          if(res.data === 'User is Verified'){
            Email(true);
            EmailText('OTP Verified!');
          }
        })
        .catch(err => console.log(err))
}
  

const VerifyOTP = () => {
  const classes=useStyles();
  const [phoneVerificationHelperText, setPhoneHelperText]=useState(false);
  const [phoneVerification, setPhoneVerification]=useState('');
  const [emailVerificationHelperText, setEmailHelperText]=useState(false);
  const [emailVerification, setEmailVerification]=useState('');
  const [outputPhone, setoutputP] = useState(false);
  const [outputEmail, setoutputM] = useState(false);
    return (
      <div className="d-flex justify-content-center align-items-center">
          <div className="internship__content__card my-5 p-5 signup__container" style={{width: 500}}>
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

                <TextField label="Verfication code" value={emailVerification} onChange={(e) => setEmailVerification(e.target.value)} id="email__verification" variant="outlined" size="small" style={{width:'70%'}} helperText={emailVerificationHelperText?"OTP has been Sent to your Email":""} />
                {emailVerificationHelperText ? (
                    <Button  variant="contained" color="primary" style={{margin:'8px 5px',padding:'6.5px 15px'}} onClick={()=>{VerifyEmail(emailVerification, setoutputM, setEmailHelperText)}} >Verify</Button>
                ) :
                    <Button  variant="contained" color="primary" style={{margin:'8px 5px',padding:'6.5px 15px'}} onClick={()=>{setEmailHelperText(true); SendEmailOTP()}} >Send OTP</Button>
                }                
                <br/><br/>
                
                <p>Phone No Verification</p>
                
                <TextField label="Verfication code" value={phoneVerification} onChange={(e) => setPhoneVerification(e.target.value)} id="phone__verification" variant="outlined" size="small" style={{width:'70%'}} helperText={phoneVerificationHelperText?"OTP has been Sent to your Phone":""}/>
                {phoneVerificationHelperText ? (
                    <Button  variant="contained" color="primary" style={{margin:'8px 5px',padding:'6.5px 15px'}} onClick={()=>{VerifyPhone(phoneVerification, setoutputP, setPhoneHelperText)}} >Verify</Button>
                ) : 
                    <Button  variant="contained" color="primary" style={{margin:'8px 5px',padding:'6.5px 15px'}}  onClick={()=>{setPhoneHelperText(true); SendPhoneOTP();}} >Send OTP</Button>
                }
                <div className="signup__footer mt-3 d-flex justify-content-end">
                    <button className="apply_btn card_btn" onClick={(e) =>{e.preventDefault(); SubmitOTP(outputPhone, outputEmail)}}>
                    Submit
                    </button>
                </div>
                </form>
            </section>
        </div>
      </div>
)}

export default VerifyOTP;