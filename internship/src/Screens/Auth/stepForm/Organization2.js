import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import logo from "../../../images/logo.png";
import { AiOutlineGlobal,AiFillLinkedin,AiFillFacebook } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";

import Notification from '../Notification.js'

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
}));


export const Organization2 = ({ formData, setForm, navigation }) => {
  const { established, strength, city, country } = formData;
  const [notify,setnotify] = useState({message:'',type:'',isOpen:false});

  const [facebook,setfb] = useState("");
  const [github,setgit] = useState("");
  const [linkedIn,setlinkedin] = useState("");
  const [portfolio,setportfolio] = useState("");
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
        <TextField
          label="City"
          name="city"
          value={city}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
          size="small"
        />
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
        <TextField
          label="Established"
          name="established"
          value={established}
          onChange={setForm}
          margin="normal"
          variant="outlined"
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
            label="Website"
            name="portfolio"
            variant="outlined"
            size="small"
            fullWidth
            value={portfolio}
            onChange={(e)=>{setportfolio(e.target.value)}}
          />
        </div>
        <div className='d-flex justify-content-between'>
          <button
            className="card_btn"
            onClick={(e) => {
              e.preventDefault();
              navigation.previous();
            }}
          >
            Back
          </button>

          <button
            className="apply_btn card_btn"
            onClick={(e) => {
              e.preventDefault();
              if (
                formData.city === "" ||
                formData.country === "" ||
                formData.established === ""||
                facebook===""||github==="" ||linkedIn===""||portfolio===""
              ) {
                setnotify({
                  message: "Fields cannot be empty!",
                  isOpen: true,
                  type: "error",
                });
                setTimeout(() => {
                  setnotify({ message: "", isOpen: false, type: "" });
                }, 3000);
              } else {
                formData.socialLinks.github = github;
                formData.socialLinks.facebook = facebook;
                formData.socialLinks.linkedIn = linkedIn;
                formData.socialLinks.portfolio = portfolio;
                navigation.next();
              }
            }}
          >
            Next
          </button>
        </div>
        {notify.isOpen && <Notification notify={notify} />}
      </div>
    </div>
  );
};
