import React, { useEffect, useState } from "react";
import "./SignUp.css";
import validator from 'validator';
import { FcGoogle } from "react-icons/fc";
import { FaGithubSquare,FaLinkedin,FaFacebookSquare } from "react-icons/fa";
import {TextField,makeStyles,CircularProgress} from "@material-ui/core";
import Notification from '../Notification.js'
import logo from "../../../images/logo.png";
import { OrganizationMultiStep } from "../OrganizationMultiStep";
import { MultiStepForm } from "../MultiStepForm";
import { BsFillPeopleFill, BsPersonFill } from "react-icons/bs";
import axios from "axios";
import {API_ENDPOINT} from '../../../AdminServices/baseURL';
import { setItem } from "../../../utility/localStorageControl";

import { useSelector , useDispatch } from 'react-redux'
import { Redirect} from 'react-router';
import {signUp} from '../../../redux/actions/auth.actions';

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
    flexDirection:"row",
    justifyContent:"left",
    flexWrap:"wrap",
    width:"100%"
  },
  for_auth_btn:{
    width: "100%",
    background: "transparent",
    color: "#848383",
    height: "42px",
    borderRadius:"10px",
    border: "#b6b2b2 solid 1px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: "6px",  
    display:"flex" ,
    flexDirection:"row",
    flexWrap:"nowrap",  
    "&:hover":{
      border:"#ec1f28 solid 1px"
    } 
  },
  for_auth_fb_icons:{
    margin:"0px 2px",
    fontSize:"25px",
    color:"#3838e9",
  },
  for_auth_gh_icons:{
    margin:"0px 2px",
    fontSize:"25px",
    color:"black",
  },
  for_auth_icons:{
    margin:"0px 2px",
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
  },
  whiteLoading:{
    color:'#fff !important',
    width:'20px !important',
    height:'20px !important',
  },
  redLoading:{
    color:'#ec1f28 !important',
    width:'20px !important',
    height:'20px !important',
  },
  for_btn_margin:{
    margin:"15px 15px"
  },
  for_signup_font:{
    fontSize: "1rem",
  fontFamily: "Roboto",
  fontWeight: "400",
  lineHeight: "1.5",
  letterSpacing: "0.00938em",
  }
}));

const SignUp_and_SetProfile = () => {
  const classes = useStyles();
  const auth = useSelector(state => state.auth);

  
  if(auth.authenticate){
    return <Redirect to={'/'} />
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
    const [btnHovered,setHovered] = useState(false);

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    useEffect(()=>{
      if(auth.signedUp){
        setnotify({message:'SignedUp successfully ',isOpen:true, type:'success'});
        setTimeout(()=>{
          setnotify({message:'', isOpen:false, type:''})
          window.open('/login','_self')
        },1500)
      }
    },[auth.signedUp])

    const SignUp = async (email, phone, password, confirm, fname, lname) => {
      const SignUpStuff = {
        email : email,
        phone_number : phone,
        password : password,
        password_confirmation : confirm,
      }
      
      await dispatch(signUp(SignUpStuff));

      if(!auth.signedUp && !auth.loading){
        setnotify({message:auth.message,isOpen:true, type:'error'});
        setTimeout(()=>{
          setnotify({message:'', isOpen:false, type:''})
        },3000)
      }
    }
    
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
            {/* <hr className={classes.for_hr_line}></hr>
            <p className={classes.for_signup_font}>Signup with:</p>
            <div className={classes.for_auth_div}>
              <div className={classes.for_btn_margin}>
                <button className={classes.for_auth_btn}>
                    <div ><FcGoogle className={classes.for_auth_icons}/></div>
                     
                </button>
              </div>
              <div className={classes.for_btn_margin}>
                <button className={classes.for_auth_btn}>
                <div ><FaFacebookSquare className={classes.for_auth_fb_icons}/></div>
                
                </button>
              </div>
              <div className={classes.for_btn_margin}>
                <button className={classes.for_auth_btn}>
                <div ><FaGithubSquare className={classes.for_auth_gh_icons}/></div>
                 
                
                </button>
              </div>
              <div className={classes.for_btn_margin}>
                <button className={classes.for_auth_btn}>
                <div ><FaLinkedin className={classes.for_auth_fb_icons}/></div>
                
                </button>
              </div>
              
            </div> */}
            <div className={classes.for_already_registerd}>
              <p>Already have an account? <a href="http://localhost:3000/login" className={classes.for_Login_redirect}>Login here!</a></p>
            </div>
            <div className='signup__btn d-flex justify-content-end'>
            <button
              className="apply_btn card_btn signInBtn"
              onClick={async(e) => {
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
                   await SignUp(email, mobile, password, confirm, fname, lname);
                }
              }}
              onMouseEnter={(e) => {setHovered(true)}}
              onMouseLeave={(e) => {setHovered(false)}}
            >
              Sign Up{" "}
              {
                auth.loading&& <CircularProgress className={btnHovered? `${classes.redLoading}` : `${classes.whiteLoading}` } />
              }
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
