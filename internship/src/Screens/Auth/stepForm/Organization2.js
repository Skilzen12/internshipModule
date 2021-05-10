import React,{useState} from "react";
import { makeStyles} from "@material-ui/core/styles";
import { CircularProgress, FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";

import TextField from "@material-ui/core/TextField";
import logo from "../../../images/logo.png";
import { AiOutlineGlobal,AiFillLinkedin,AiFillFacebook } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import validator from 'validator'

import Notification from '../Notification.js'

import {addKYCDetails} from '../../../redux/actions/user.actions'
import { useSelector , useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  backgroundwhite: {
    backgroundColor: "white",
  },
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
  label__resume:{
    fontSize:'1rem',
    fontWeight:500,
    margin:'30px 0 10px',
    '&+input':{
      fontSize:14
    }
  },
  for_socialIcon:{
    display:"flex",
    flexDirection:"row",
    '& svg':{
      marginTop:-15
    }
  },
  for_adjfbIcon:{
    marginRight: '5px',
    fontSize:'31px',
    color:'#4040f8',
  },
  for_adjgitIcon:{
    marginRight: '5px',
    fontSize:'31px',
    color:'black',
  },
  for_fbIcon:{
    color:'#4040f8',
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
}));


export const Organization2 = ({ formData, setForm, navigation }) => {
  const { established, description, city, country,website } = formData;
  const [notify,setnotify] = useState({message:'',type:'',isOpen:false});

  const [btnHovered,setHovered] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const [facebook,setfb] = useState("");
  const [github,setgit] = useState("");
  const [linkedIn,setlinkedin] = useState("");

  const validateFile = (e)=>{
    let filePath=e.target.value;
    // Allowing file type
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

    if (!allowedExtensions.exec(filePath)) {
      setnotify({
        message: "Wrong file Type uploaded",
        isOpen: true,
        type: "error",
      });
      setTimeout(() => {
        setnotify({ message: "", isOpen: false, type: "" });
      }, 3000);
      e.target.value='';
      return false;
    } 
    else {
      console.log('succes');
      setForm(e);
    }
  }
 
  const classes = useStyles();
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="internship__content__card my-5 p-5 signup__container">
        <img
          className="mb-5"
          src={logo}
          style={{ width: "50%" }}
          alt="skilzen logo"
        />
        <h3 className="text-center mb-4">Organization Details</h3>
        {/* <TextField
          label="City"
          name="city"
          value={city}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
          size="small"
        /> */}
        <FormControl
            variant="outlined"
            fullWidth
            size="small"
            className={classes.formControl}
          >
          <InputLabel id="demo-simple-select-filled-label">
            City
          </InputLabel>
          <Select
            className={classes.backgroundwhite}
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={city}
            onChange={setForm}
            name="city"
          >
            <MenuItem value={"Hyderabad"}>Hyderabad</MenuItem>
            <MenuItem value={"Chennai"}>Chennai</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Country"
          name="country"
          value={country}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
          size="small"
        />
        <h6 style={{ marginTop:10 }}>Established</h6>
        <TextField
          name="established"
          value={established}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          type="date"
          autoComplete="off"
          fullWidth
          size="small"
        />
        {/* <hr /> */}
        <h6 style={{ margin: '30px 0 10px',fontSize:18 }}>Social Media Links</h6>
        <div className={classes.for_socialIcon}>
          <div className={classes.for_adjfbIcon}>
            <AiFillLinkedin />
          </div>
          <TextField
            label="LinkedIn"
            name="linkedIn"
            variant="outlined"
            size="small"
            fullWidth
            value={linkedIn}
            onChange={(e)=>{setlinkedin(e.target.value)}}
          />
        </div>
        <div className={classes.for_socialIcon}>
          <div className={classes.for_adjgitIcon}>
            <FaGithubSquare />
          </div>
          <TextField
            label="GitHub"
            name="github"
            variant="outlined"
            size="small"
            fullWidth
            value={github}
            onChange={(e)=>{setgit(e.target.value)}}
          />
        </div>
        <div className={classes.for_socialIcon}>
          <div className={classes.for_adjfbIcon}>
            <AiFillFacebook />
          </div>
          <TextField
            label="Facebook"
            name="facebook"
            variant="outlined"
            size="small"
            fullWidth
            value={facebook}
            onChange={(e)=>{setfb(e.target.value)}}
          />
        </div>
        <h6 style={{ margin: '30px 0 10px',fontSize:18 }}>Organization Website</h6>
        <div className={classes.for_socialIcon}>
          <div className={classes.for_adjgitIcon}>
            <AiOutlineGlobal />
          </div>
          <TextField
            label="Portfolio"
            name="website"
            variant="outlined"
            size="small"
            fullWidth
            value={website}
            onChange={setForm}
          />
        </div>
        
        <h6 style={{ margin: '30px 0 10px',fontSize:18 }}>Organization Description</h6>
        <textarea id="description" rows={6} style={{ width: "100%" }} 
          name="description"
          value={description}
          onChange={setForm} 
        />
        <hr />
        <h6 style={{ marginTop: '30px',marginBottom: '6px'}}>Upload company UID</h6>
        <div class="btn  float-left">  
          <input type="file" name="company_uid" onChange={validateFile} accept=".gif,.jpg,.png,.doc,.pdf"  />
        </div>
        <br />
        <h6 style={{ marginTop: '50px',marginBottom: '6px'}}>Upload company logo</h6>
        <div class="btn  float-left">  
          <input type="file" name="official_doc" onChange={validateFile} accept=".gif,.jpg,.png,.doc,.pdf" />
        </div>
        <br />
        <h6 style={{ marginTop: '50px',marginBottom: '6px'}}>Upload Official Document</h6>
        <div class="btn  float-left">  
          <input type="file" name="logo" onChange={validateFile} accept=".gif,.jpg,.png,.doc,.pdf" />
        </div>
        <br />
        <div className='signup__footer w-100 mt-3 d-flex justify-content-between'>
        <button
          className="card_btn mx-2"
          onClick={(e) => {
            e.preventDefault();
            navigation.previous();
          }}
        >
          Back
        </button>

        <button
          className="apply_btn card_btn signInBtn"
          onMouseEnter={(e) => {setHovered(true)}}
          onMouseLeave={(e) => {setHovered(false)}}

          onClick={(e) => {
            e.preventDefault();
            if (
              formData.city === "" ||
              formData.country === "" ||
              formData.established === ""||
              formData.company_uid === "" ||
              formData.official_doc=== "" ||
              formData.logo=== "" ||description===""||
              (facebook===""&&github==="" &&linkedIn===""&&website==="")
            ) {
              setnotify({
                message: "Fields cannot be empty!",
                isOpen: true,
                type: "error",
              });
              setTimeout(() => {
                setnotify({ message: "", isOpen: false, type: "" });
              }, 3000);
            }
            else if(!validator.isURL(facebook)||!validator.isURL(github)||!validator.isURL(linkedIn)||!validator.isURL(website)){
              setnotify({
                message: "Wrong format of URL's provided!",
                isOpen: true,
                type: "error",
              });
              setTimeout(() => {
                setnotify({ message: "", isOpen: false, type: "" });
              }, 3000);
            }
             else {
               if(github!==""){
                formData.socialLinks.push({handle:"Github",link:github})
               }
               if(facebook!==""){
                formData.socialLinks.push({handle:"facebook",link:facebook})
               }
               if(linkedIn!==""){
                formData.socialLinks.push({handle:"linkedIn",link:linkedIn})
               }
               if(website!==""){
                formData.website = website;
               }
              dispatch(addKYCDetails(formData));
              if(user.recruiter_err_msg===''){
                setnotify({
                  message: "Successfully send KYC details to server !",
                  isOpen: true,
                  type: "success",
                });
                setTimeout(() => {
                  setnotify({ message: "", isOpen: false, type: "" });
                  window.open('/', '_self');
                }, 3000);
              }else{
                setnotify({
                  message: user.recruiter_err_msg,
                  isOpen: true,
                  type: "error",
                });
                setTimeout(() => {
                  setnotify({ message: "", isOpen: false, type: "" });
                }, 3000);
              }
            }
          }}
        >
          Submit{" "}
          {
            user.recruits_form_loading&& <CircularProgress className={btnHovered? `${classes.redLoading}` : `${classes.whiteLoading}` } />
          }
        </button>
        </div>
        {notify.isOpen && <Notification notify={notify} />}
      </div>
    </div>
  );
};
