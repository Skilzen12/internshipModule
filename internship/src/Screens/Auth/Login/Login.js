import React, { useState } from 'react'
import logo from "../../../images/logo.png";
import { Checkbox, FormControlLabel, makeStyles, TextField,CircularProgress } from '@material-ui/core';

import { FcGoogle } from "react-icons/fc";
import { FaGithubSquare,FaLinkedin,FaFacebookSquare } from "react-icons/fa";
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
    },
    for_btn_margin:{
      margin:"15px 15px"
    },
    for_login_font:{
      fontSize: "1rem",
    fontFamily: "Roboto",
    fontWeight: "400",
    lineHeight: "1.5",
    letterSpacing: "0.00938em",
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
    const user = useSelector(state => state.user);

    const SignIn = async(email, pass, ) => {
      const loginStuff = {
        username : email,
        password : pass
      }
      await dispatch(signIn(loginStuff));

      if(auth.authenticate === false ){
        setnotify({message:'Invalid Credentials ! ',isOpen:true, type:'error'});
        setTimeout(()=>{
          setnotify({message:'', isOpen:false, type:''})
        },3000)
      }else{
        setnotify({message:'Successfully signed in',isOpen:true, type:'success'});
        setTimeout(()=>{
          setnotify({message:'', isOpen:false, type:''})
        },3000)
      }
    }
    if(auth.authenticate){
      dispatch(getUserData());
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
            <p className={classes.for_login_font}>Login with:</p>
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
              
            </div>
            <div className={classes.for_newUser}>
              <p> New User? <a href="/signup" className={classes.for_signup_redirect}>Click here to Sign Up!</a></p>
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
