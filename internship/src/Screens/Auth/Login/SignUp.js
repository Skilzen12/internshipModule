import React, { useState } from "react";
import "./SignUp.css";
import { BsArrowLeft, BsArrowRight, BsPlusCircle } from "react-icons/all";
import { TagsSelect } from "react-select-material-ui";
import {
  TextField,
  makeStyles,
  Checkbox,
  FormControlLabel,
  Button,
} from "@material-ui/core";
import { GoCheck } from "react-icons/go";
import logo from "../../../images/logo.png";
import logoOnly from '../../../images/Group.png'
import { MultiStepForm } from "../MultiStepForm";
import { OrganizationMultiStep } from "../OrganizationMultiStep";
import { DateRange } from "@material-ui/icons";

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
  rootDatePicker:{
    display:'flex',
    gridGap:'10px'
  }
}));





const SignUp_and_SetProfile = () => {

  const [section, setSection] = useState("SignUp");
  const classes = useStyles();

    
  // ---------SignUp Section only--------
  const SignUpSection = () => {
    
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div className="internship__content__card my-5 p-5 signup__container">
          <img
            className="mb-5"
            src={logo}
            style={{ width: "50%" }}
            alt="skilzen logo"
          />
          <h3 className="text-center mb-4">Join us!</h3>
          <form className={classes.rootSignUp} noValidate autoComplete="off">
            <TextField size="small" label="Firstname" variant="outlined" />
            <TextField
              className={classes.rightInputField}
              size="small"
              label="Lastname"
              variant="outlined"
            />
            <br />
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
            />
            <TextField
              className={classes.rightInputField}
              size="small"
              label="Confirm Password"
              type="password"
              variant="outlined"
            />
            <div className="m-0 w-100">
              <FormControlLabel
                value="end"
                control={<Checkbox color="primary" />}
                label="Show Password"
                labelPlacement="end"
              />
            </div>
            <button class="apply_btn card_btn" onClick={(e)=>{e.preventDefault();setSection("SignUp2")}}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  };

  const SignUp2 = ()=>(
    <div className="d-flex justify-content-center align-items-center">
        <div className="internship__content__card my-5 p-5 signup__container">
          <img
            className="mb-5"
            src={logo}
            style={{ width: "50%" }}
            alt="skilzen logo"
          />
          
          <form className={classes.rootSignUp} noValidate autoComplete="off">
            {/* <h3 className="text-center mb-4">I am</h3> */}
            <button class="d-block w-100 apply_btn card_btn" onClick={(e)=>{e.preventDefault();setSection("Student")}}>
              Student
            </button>
            <h4 className="w-100 text-center mb-4">Or</h4>
            <button class="d-block w-100 apply_btn card_btn" onClick={(e)=>{e.preventDefault();setSection("Org")}}>
              Organistion/Company
            </button>
          </form>
        </div>
      </div>
  )


  // ----------SignUP and SetProfile Merged Below---------

  return (
    <>
      {section === "SignUp" &&<SignUpSection />}

      {section==="SignUp2"&&<SignUp2 />}

      {section==="Student"&&<SetProfile />}
      {section==='Org'&&<OrganizationMultiStep />}
      
      {/* ---SetProfile starts---- */}
       
    </>
  );
};

export default SignUp_and_SetProfile;


const SetProfile = ()=>{
  const [activeGender, setActiveGender] = useState("male");
  const [section, setSection] = useState("profile1");
  const classes = useStyles();
  const [eduCount,setEduCount] = useState([{}]);
  const [expCount,setExpCount] = useState([{}]);
  const [phoneVerificationHelperText,setPhoneHelperText]=useState(false);
  const [emailVerificationHelperText,setEmailHelperText]=useState(false);

  const AddEduHandler =()=>{
      setEduCount(eduCount=>{
          const newArray= eduCount.concat({});
          return newArray;
      })
  }
  const AddExpHandler =()=>{
    setExpCount(eduCount=>{
        const newArray= expCount.concat({});
        return newArray;
    })
  }
  
  return(
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
            {section === "profile1" && (
              <section>
                <h4 className="mb-4">Personal Details </h4>
                <form className={classes.rootSetProfile} noValidate autoComplete="off">
                  <div id='dp'><img src='https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png' width="100px" className='m-auto' />
                  <p>Upload Picture</p>
                  </div>
                  <TextField label="firstname" id="firstname" variant="outlined" size="small" fullWidth />
                  <TextField label="lastname" id="lastname" variant="outlined" size="small" fullWidth />
                  <TextField label="Email" id="email" variant="outlined" size="small" fullWidth />
                  <TextField label="Date of Birth" type="date" 
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    size="small" 
                    fullWidth />
                  <TextField label="City" id="email" variant="outlined" size="small" fullWidth />
                  <TextField label="Mobile No." id="mobileNo" variant="outlined" size="small" fullWidth />
                  {/* <label for="birthday">Birthday</label>
                  <input type="date" id="birthday" name="birthday" /> */}
                  {/* Gender  */}
                  <div class="mt-3" onClick={() => setActiveGender("male")}>
                    <CheckBox active={activeGender === "male"} />
                    <label for="Male">Male</label>
                  </div>
                  <div onClick={() => setActiveGender("female")}>
                    <CheckBox active={activeGender === "female"} />
                    <label for="Female">Female</label>
                  </div>
                  <div onClick={() => setActiveGender("others")}>
                    <CheckBox active={activeGender === "others"} />
                    <label for="Others">Others</label>
                  </div>
                  <div className="signup__footer d-flex justify-content-between">
                    {/* <button
                      className="card_btn"
                      onClick={() => setSection("SignUp")}
                    >
                      <BsArrowLeft
                        style={{ marginBottom: "2px", fontSize: "17px" }}
                      />{" "}
                      Back
                    </button> */}
                    <button
                      className="apply_btn card_btn"
                      onClick={() => setSection("profile2")}
                    >
                      Next{" "}
                      <BsArrowRight
                        style={{ marginBottom: "2px", fontSize: "17px" }}
                      />
                    </button>
                  </div>
                </form>
              </section>
            )}
            {section === "profile2" && (
              <section>
                <h4 className="mb-4">Education Details</h4>
                <form className={classes.rootSetProfile} noValidate autoComplete="off">
                  {
                      eduCount.map(edu=>(
                          <EducationFields/>
                      ))
                  }
                  <div style={{margin:'10px 0',cursor:'pointer'}} onClick={AddEduHandler} >
                    <BsPlusCircle style={{fontSize:25}}  /> <p style={{display:'inline-block'}}>Add Education</p>
                  </div>
                  <div className="signup__footer mt-3 d-flex justify-content-between">
                    <button className="card_btn" 
                      onClick={() => setSection("profile1")}>
                      <BsArrowLeft
                        style={{ marginBottom: "2px", fontSize: "17px" }}
                      />{" "}
                      Back
                    </button>
                    <button className="apply_btn card_btn" onClick={() => setSection("profile3")}>
                      Next{" "}
                      <BsArrowRight
                        style={{ marginBottom: "2px", fontSize: "17px" }}
                      />
                    </button>
                  </div>
                </form>
              </section>
            )}
            {section === "profile3" && (
              <section>
                <h4 className="mb-4">Experience Details</h4>
                <form className={classes.rootSetProfile} noValidate autoComplete="off">
                  {
                      expCount.map(exp=>(
                          <ExperienceFields/>
                      ))
                  }
                  <div style={{margin:'10px 0',cursor:'pointer'}} onClick={AddExpHandler} >
                    <BsPlusCircle style={{fontSize:25}}  /> <p style={{display:'inline-block'}}>Add Experience</p>
                  </div>
                  <div className="signup__footer mt-3 d-flex justify-content-between">
                    <button className="card_btn" 
                      onClick={() => setSection("profile2")}>
                      <BsArrowLeft
                        style={{ marginBottom: "2px", fontSize: "17px" }}
                      />{" "}
                      Back
                    </button>
                    <button className="apply_btn card_btn" onClick={() => setSection("profile4")}>
                      Next{" "}
                      <BsArrowRight
                        style={{ marginBottom: "2px", fontSize: "17px" }}
                      />
                    </button>
                  </div>
                </form>
              </section>
            )}
            {section === "profile4" && (
              <section>
                <h4 className="mb-4">Profile Details</h4>
                <form className={classes.rootSetProfile} noValidate autoComplete="off">
                  <TextField label="Profile Title" id="profileTitle" variant="outlined" size="small" fullWidth />
                  <h6 style={{margin:'20px 0 10px'}} for="description">Describe Yourself</h6>
                  <textarea id='description' rows={10} style={{width:'100%'}} />
                  <TagsSelect id="skillsSelect"
                  style={{marginTop:10}}
                    label="Skills"
                    options={['skill1','skill2','skill3','skill1','skill2','skill3','skill1','skill2','skill3','skill1','skill2','skill3']}
                    // onChange={this.handleChange}
                    SelectProps={{
                      isCreatable: true,
                      msgNoOptionsAvailable: "All tags are selected",
                      msgNoOptionsMatchFilter: "No tag matches the filter",
                    }}
                    variant="outlined"
                  />
                  <h6 style={{marginTop:30}} >Social Media Links</h6>
                  <TextField label="LinkedIn" id="LinkedIn" variant="outlined" size="small" fullWidth />
                  <TextField label="GitHub" id="GitHub" variant="outlined" size="small" fullWidth />
                  <TextField label="Facebook" id="Facebook" variant="outlined" size="small" fullWidth />
                  <div className="signup__footer mt-3 d-flex justify-content-between">
                    <button className="card_btn" 
                      onClick={() => setSection("profile3")}>
                      <BsArrowLeft
                        style={{ marginBottom: "2px", fontSize: "17px" }}
                      />{" "}
                      Back
                    </button>
                    <button className="apply_btn card_btn" onClick={() => setSection("profile5")}>
                      Next{" "}
                      <BsArrowRight
                        style={{ marginBottom: "2px", fontSize: "17px" }}
                      />
                    </button>
                  </div>
                </form>
              </section>
            )}
            {
              section==='profile5'?
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
                      onClick={() => setSection("profile4")}>
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
              :<></>
            }
          </div>
        </div>
  )
}


const CheckBox = ({ active }) => {
  return (
    <div
      style={{
        position: "relative",
        cursor: "pointer",
        display: "inline-block",
        marginRight: 10,
        width: 14,
        height: 14,
        backgroundColor: !active ? "lightgray" : "var(--cherry)",
      }}
    >
      <GoCheck
        style={{
          position: "absolute",
          color: "white",
          display: !active && "none",
          fontSize: 14,
          margin: 0,
          padding: 0,
        }}
      />
    </div>
  );
};



const EducationFields =()=>{
  const classes= useStyles()
  return(
      <>
          <TextField fullWidth size='small' label="School/College/University"  variant="outlined" />
          <TextField fullWidth size='small' label="Degree"  variant="outlined" />
          <TextField fullWidth size='small' label="Specialization"  variant="outlined" />
          <div className={classes.rootDatePicker}>
          <TextField label="Start Date" type="date" 
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          size="small" />
          <TextField label="End Date" type="date" 
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          size="small" />
          </div>
          <hr/>
      </>
  )
}
const ExperienceFields = ()=>{
  const classes=useStyles();
  return(
    <>
      <TextField fullWidth size='small' label="Job Designation"  variant="outlined" />
      <TextField fullWidth size='small' label="Company Name"  variant="outlined" />
      <div className={classes.rootDatePicker}>
        <TextField label="Start Date" type="date" 
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        size="small" />
        <TextField label="End Date" type="date" 
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        size="small" />
      </div>
      <TextField fullWidth size='small' label="Description"  variant="outlined" />
      <hr/>
    </>
  )
}

const NextArrowButton = ()=>(
  <button className="card_btn" 
    onClick={() => {}}>
    <BsArrowLeft
      style={{ marginBottom: "2px", fontSize: "17px" }}
    />{" "}
    Back
  </button>
)