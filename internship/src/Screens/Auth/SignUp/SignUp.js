import React, { useState } from "react";
import "./SignUp.css";
import validator from 'validator';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import {
  TextField,
  makeStyles,
} from "@material-ui/core";
import Notification from '../Notification.js'
import logo from "../../../images/logo.png";
import { OrganizationMultiStep } from "../OrganizationMultiStep";
import { MultiStepForm } from "../MultiStepForm";
import { BsFillPeopleFill, BsPersonFill } from "react-icons/bs";
import axios from "axios";
import {API_ENDPOINT} from '../../../AdminServices/baseURL';
import { setItem } from "../../../utility/localStorageControl";

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
  for_already_registerd:{
    width:"100%",
    color:"#848383"
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
  const classes = useStyles();

  const SignUp = async (email, phone, password, confirm, fname, lname) => {
      const SignUpStuff = {
        email : email,
        phone_number : phone,
        password : password,
        password_confirmation : confirm,
      }

      await axios.post(`${API_ENDPOINT}/skilzen/v1/sign_up/`, SignUpStuff)
        .then(res => {
          if(res.statusText === 'Created'){
            window.open('/login', '_self')
          }
        })
        .catch(err => console.log(err))

  }

  // ---------SignUp (asks credentials)
  const SignUp1 = () => {
    const [email,setemail] = useState("");
    const [mobile,setmobile] = useState("");
    const [password,setpassword] = useState("");
    const [confirm,setconfirm] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [notify,setnotify] = useState({message:'',type:'',isOpen:false});
    
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
              label="First Name"
              name="fname"
              value={fname}
              onChange={(e)=>{setFname(e.target.value)}}
              variant="outlined"
              size="small"
              fullWidth
            />
            <TextField
              className={classes.rightInputField}
              label="Last Name"
              name="lname"
              variant="outlined"
              size="small"
              fullWidth
              value={lname}
              onChange={(e)=>{setLname(e.target.value)}}
            />
            <TextField
              className={classes.fullWidth}
              size="small"
              label="Email Address"
              value={email}
              onChange={(e)=>{setemail(e.target.value)}}
              variant="outlined"
              fullWidth
            />
            <TextField
              className={classes.fullWidth}
              size="small"
              label="Contact Number"
              value={mobile}
              onChange={(e)=>{setmobile(e.target.value)}}
              variant="outlined"
              fullWidth
            />
            <TextField
              size="small"
              label="Password"
              type="password"
              value={password}
              onChange={(e)=>{setpassword(e.target.value)}}
              variant="outlined"
            />
            <TextField
              className={classes.rightInputField}
              size="small"
              label="Confirm Password"
              type="password"
              value={confirm}
              onChange={(e)=>{setconfirm(e.target.value)}}
              variant="outlined"
            />
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
              <p>Already have an account? <a href="http://localhost:3000/login" className={classes.for_Login_redirect}>Login here!</a></p>
            </div>
            <div className='signup__btn d-flex justify-content-end'>
            <button
              className="apply_btn card_btn"
              onClick={(e) => {
                e.preventDefault();
                if(!validator.isEmail(email)){
                  setnotify({message:'Wrong Format of Email address!',isOpen:true,type:'error'});
                  setTimeout(()=>{
                    setnotify({message:'',isOpen:false,type:''})
                  },3000)
                }else if(password!==confirm){
                  setnotify({message:'Passwords not match!',isOpen:true,type:'error'});
                  setTimeout(()=>{
                    setnotify({message:'',isOpen:false,type:''})
                  },3000)
                }
                else{
                  SignUp(email, mobile, password, confirm, fname, lname);
                }
              }}
            >
              Sign Up
            </button>
            </div>
          </form>
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

  //----------Asks whether student or Organization
  // const SignUp2 = () => (
  //   <div className="d-flex justify-content-center align-items-center">
  //     <div className="internship__content__card my-5 p-5 signup__container">
  //       <img
  //         className="mb-5"
  //         src={logo}
  //         style={{ width: "30%" }}
  //         alt="skilzen logo"
  //       />

  //       <form noValidate autoComplete="off">
  //         <div className='d-flex align-items-center'>
  //           <button
  //             className="select__type_btn apply_btn"
  //             onClick={(e) => {
  //               e.preventDefault();
  //               setSection("Student");
  //             }}
  //           >
  //             <BsPersonFill />
  //             Student
  //           </button>
  //           <h4 className="w-100 text-center m-0">Or</h4>
  //           <button
  //             className="select__type_btn apply_btn"
  //             onClick={(e) => {
  //               e.preventDefault();
  //               setSection("Org");
  //             }}
  //           >
  //             <BsFillPeopleFill />
  //             Organistion/Company
  //           </button>
  //         </div>
  //       </form>
  //     </div>
  //   </div>
  // );

  // // ----------SignUP and SetProfile Merged Below---------

  return (
    <div className='Login__Signup'>
      <SignUp1 />
      {/* {section === "Student" && <MultiStepForm user={user} /> }
      {section === "Org" && <OrganizationMultiStep user={user} />} */}
    </div>
  );
};

export default SignUp_and_SetProfile;
