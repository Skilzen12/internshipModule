import React, { useState,useEffect } from "react";

import { Button, makeStyles, TextField } from "@material-ui/core";
import { useSelector , useDispatch } from 'react-redux'

import AdminService from "../../../AdminServices/AdminService";
import logoOnly from '../../../images/Group.png'
import { useHistory } from "react-router";
import Notification from "../Notification";

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
  },
  for_verify_helpertext:{
    display:"flex",
    flexDirection:"column",

  },
  for_resend:{
      color:" #ec1f28 !important",
      textDecoration:"underline !important",
      fontSize:'12px',
      marginTop:'2px'
  },
  for_ht:{
    fontSize:'12px',
    marginTop:'2px',
    lineHeight:'20px'
  },
}));



const VerifyOTP = ({location}) => {
  const classes=useStyles();
  const [phoneVerificationHelperText, setPhoneHelperText]=useState(false);
  const [phoneVerification, setPhoneVerification]=useState('');
  const [emailVerificationHelperText, setEmailHelperText]=useState(false);
  const [emailVerification, setEmailVerification]=useState('');
  const [outputPhone, setoutputP] = useState(false);
  const [outputEmail, setoutputM] = useState(false);
  const [notify,setnotify] = useState({message:'',type:'',isOpen:false});
  const history=useHistory();
  const user = useSelector(state => state.user);
  useEffect(() => {
    if(user.is_phone_verified && user.is_email_verified){
      history.push('/')
    }
  }, [])

  console.log("location",location)
  const SubmitOTP = (phone, email,setnotify) => {
    if(phone && email){
      history.push(location?.state?.from||'/');
    }
    else{
      setnotify({message:'Please Verify Both Email and Phone',isOpen:true, type:'error'});
      setTimeout(()=>{
        setnotify({message:'', isOpen:false, type:''})
      },1700)
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
                <div className='d-flex justify-content-between'>
                <TextField label="Verfication code" value={emailVerification} onChange={(e) => setEmailVerification(e.target.value)} id="email__verification" variant="outlined" size="small" style={{width:'70%'}}/>
                {emailVerificationHelperText ? (
                    <Button  variant="contained" color="primary" style={{margin:'8px 5px',minWidth:100,padding:'6.5px 15px'}}  disabled={outputEmail} onClick={()=>{VerifyEmail(emailVerification, setoutputM, setEmailHelperText)}} >{outputEmail?'Verified':'Verify'}</Button>
                ) :
                    <Button  variant="contained" color="primary" style={{margin:'8px 5px',minWidth:100,padding:'6.5px 15px'}} onClick={()=>{setEmailHelperText(true); SendEmailOTP()}} >Send OTP</Button>
                }
                </div>
                {
                  (emailVerificationHelperText&&!outputEmail)
                    ? <div className={classes.for_ht}>{"OTP has been sent to your email address."}{" Didn't receive?  "}<a className={classes.for_resend} onClick={()=>{setEmailHelperText(true); SendEmailOTP()}} >resend OTP</a></div>
                    : ""
                }
                <br/><br/>
                
                <p>Phone No Verification</p>
                <div className='d-flex justify-content-between'>
                <TextField label="Verfication code" value={phoneVerification} onChange={(e) => setPhoneVerification(e.target.value)} id="phone__verification" variant="outlined" size="small" style={{width:'70%'}} />
                {phoneVerificationHelperText ? (
                    <Button  variant="contained" color="primary" style={{margin:'8px 5px',minWidth:100,padding:'6.5px 15px'}} disabled={outputPhone} onClick={()=>{VerifyPhone(phoneVerification, setoutputP, setPhoneHelperText)}} >{outputPhone?'Verified':'Verify'}</Button>
                ) : 
                    <Button  variant="contained" color="primary" style={{margin:'8px 5px',minWidth:100,padding:'6.5px 15px'}}  onClick={()=>{setPhoneHelperText(true); SendPhoneOTP();}} >Send OTP</Button>
                }
                </div>
                {
                  (phoneVerificationHelperText&&!outputPhone)
                    ? <div className={classes.for_ht}>{"OTP has been sent to your Phone Number."}{" Didn't receive?  "}<a className={classes.for_resend} onClick={()=>{setPhoneHelperText(true); SendPhoneOTP();}} >resend OTP</a></div>
                    : ""
                }
                <div className="signup__footer mt-3 d-flex justify-content-end">
                    <button className="apply_btn card_btn" onClick={(e) =>{e.preventDefault(); SubmitOTP(outputPhone, outputEmail,setnotify)}}>
                    Submit
                    </button>
                </div>
                </form>
            </section>
            {
              notify.isOpen && 
              <Notification
                notify={notify}
              />
            }
        </div>
      </div>
)}

export default VerifyOTP;