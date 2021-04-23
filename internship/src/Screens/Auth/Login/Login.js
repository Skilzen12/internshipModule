import React, { useState } from 'react'
import logo from "../../../images/logo.png";
import { Checkbox, FormControlLabel, makeStyles, TextField,CircularProgress } from '@material-ui/core';

import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import validator from 'validator';
import Notification from '../Notification.js'

import { useSelector , useDispatch } from 'react-redux'
import { Redirect} from 'react-router';

import {signIn} from '../../../redux/actions/auth.actions';
import {getUserData} from '../../../redux/actions/user.actions';


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
    },
    for_newUser:{
      width:"100%",
      color:"#848383"
    },
    for_signup_redirect:{
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
    }
    
}));

const Login = () => {
  const dispatch = useDispatch();

    const classes=useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showpassword,setshowpassword] = useState(false);
    const [notify,setnotify] = useState({message:'',type:'',isOpen:false});
    const [btnHovered,setHovered] = useState(false);
    const auth = useSelector(state => state.auth);

    const SignIn = async(email, pass, ) => {
      const loginStuff = {
        username : email,
        password : pass
      }
      await dispatch(signIn(loginStuff));

      if(!auth.loading && !auth.authenticate && auth.message!==""){
        setnotify({message:auth.message,isOpen:true, type:'error'});
        setTimeout(()=>{
          setnotify({message:'', isOpen:false, type:''})
        },3000)
      }else{
        setnotify({message:'Successfully signed in',isOpen:true, type:'success'});
        setTimeout(()=>{
          setnotify({message:'', isOpen:false, type:''})
        },3000)
        dispatch(getUserData());
      }
    }
    if(auth.authenticate){
      return <Redirect to={'/'} />
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
          <h3 className="text-center mb-4">Login to Skilzen!</h3>
          <form className={classes.rootSetProfile} noValidate autoComplete="off">
            <TextField
              className={classes.fullWidth}
              size="small"
              label="Email Adress"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              variant="outlined"
              fullWidth
            />
            <TextField
              size="small"
              label="Password"
              type={showpassword?"text":"password"}
              variant="outlined"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              fullWidth
            />
            <div className="m-0 w-100">
              <FormControlLabel
                value="end"
                control={<Checkbox color="primary" />}
                label="Show Password"
                labelPlacement="end"
                onChange={()=>{setshowpassword(!showpassword)}}
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
            <div className={classes.for_newUser}>
              <p> New User? <a href="http://localhost:3000/signup" className={classes.for_signup_redirect}>Click here to Sign Up!</a></p>
            </div>
            <div className={classes.for_login_adj}>
                <button
                  className="apply_btn card_btn signInBtn"
                  onClick={(e) => {
                    e.preventDefault();
                    if(!validator.isEmail(email)){
                      setnotify({message:'Wrong Format of Email address!',isOpen:true, type:'error'});
                      setTimeout(()=>{
                        setnotify({message:'', isOpen:false, type:''})
                      },3000)
                    }
                    else{
                      SignIn(email, password);
                    }
                    
                  }}
                  onMouseEnter={(e) => {setHovered(true)}}
                  onMouseLeave={(e) => {setHovered(false)}}
                >
                  Log in{" "}
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
    )
}

export default Login
