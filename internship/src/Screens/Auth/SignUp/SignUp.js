/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useContext } from "react";
import "./SignUp.css";
import { AiFillCheckCircle, BsArrowLeft, BsArrowRight, BsPlusCircle, TiDelete } from "react-icons/all";
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
import logoOnly from "../../../images/Group.png";
import { OrganizationMultiStep } from "../OrganizationMultiStep";
import { useHistory } from "react-router";
import {ProgrammerContext, StudentContext} from '../../../utility/contexts/userContext';
import {API_ENDPOINT} from "../../../AdminServices/baseURL";
import axios from "axios";


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
      width:'100%'
    },
  },
  rootDatePicker: {
    display: "flex",
    gridGap: "10px",
  },
}));

const SignUp_and_SetProfile = () => {
  const [user, setUser] = useContext(ProgrammerContext);
  const [section, setSection] = useState("SignUp");
  const classes = useStyles();  
  var firstName = '';
  var lastName = '';

  // ---------SignUp Section only--------
  const SignUp = () => {
    var email = '';
    var contact = '';
    var password  = '';
    var confirmPassword = '';
    const [showPassword, setShow] = useState(false);

    const SignUp = async() => {
      const SignUpData = {
        'email': email,
        'phone_number': contact,
        'password': password,
        'password_confirmation': confirmPassword,
      }

      axios.post(`${API_ENDPOINT}/skilzen/v1/sign_up/`, SignUpData)
        .then(res => {
          if(res.statusText === 'Created'){
            setUser(prevUser => ({...prevUser,
              firstName: firstName,
              lastName: lastName,
              email : res.data.email,
              contact : res.data.phone_number
            }));
          }
        })
        .catch(err => console.log(err))
    }

    return (
      <div className="internship__container__centered">
        <div className="internship__content__card p-5 signup__container">
          <img
            className="mb-5"
            src={logo}
            style={{ width: "50%" }}
            alt="skilzen logo"
          />
          <h3 className="text-center mb-4">Join us!</h3>
          <form className={classes.rootSignUp} noValidate autoComplete="off">
            <TextField size="small" label="First/Org Name*" variant="outlined" onInput={(e) => firstName = (e.target.value)} />
            <TextField
              className={classes.rightInputField}
              size="small"
              label="Last Name"
              variant="outlined"
              onChange={(e) => lastName = (e.target.value)}
            />
            <br />
            <TextField
              className={classes.fullWidth}
              size="small"
              label="Email Address"
              variant="outlined"
              fullWidth
              onChange={(e) => email = (e.target.value)}
            />
            <TextField
              className={classes.fullWidth}
              size="small"
              label="Contact Number"
              variant="outlined"
              fullWidth
              onChange={(e) => contact = (e.target.value)}
            />
            <TextField
              size="small"
              label="Password"
              type={showPassword ? "text" : "password"}       
              variant="outlined"
              onChange={(e) => password = (e.target.value)}
            />
            <TextField
              className={classes.rightInputField}
              size="small"
              label="Confirm Password"  
              type={showPassword ? "text" : "password"}
              variant="outlined"
              onChange={(e) => confirmPassword = (e.target.value)}
            />
            <div className="m-0 w-100">
              <FormControlLabel
                value="end"
                control={<Checkbox color="primary" />}
                label="Show Password"
                onChange={() => setShow(!showPassword)}
                labelPlacement="end"
              />
            </div>
            <button
              class="apply_btn card_btn"
              onClick={(e) => {
                e.preventDefault();
                SignUp();
                setSection('SignUp2');
              }}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  };

  const SignUp2 = () => {
    return(
    <div className="d-flex justify-content-center align-items-center">
      <div className="internship__content__card my-5 p-5 signup__container">
        <img
          className="mb-5"
          src={logo}
          style={{ width: "50%" }}
          alt="skilzen logo"
        />

        <form className={classes.rootSignUp} noValidate autoComplete="off">
          <button
            class="d-block w-100 apply_btn card_btn"
            onClick={(e) => {
              e.preventDefault();
              setSection('Student')
              setUser(prevUser => ({...prevUser,
                type : 'Student',
              }));
            }}
          >
            Student
          </button>
          <h4 className="w-100 text-center mb-4">Or</h4>
          <button
            class="d-block w-100 apply_btn card_btn"
            onClick={(e) => {
              e.preventDefault();
              setSection('Company')
              setUser(prevUser => ({...prevUser,
                type : 'Company',
              }));
            }}
          >
            Organistion/Company
          </button>
        </form>
      </div>
    </div>
  )};

  return (
    <>
      {section === "SignUp" && <SignUp />}
      {section === "SignUp2" && <SignUp2 />}
      
      
      {section === "Student" && <StudentProfile firstName={firstName} lastName={lastName} />}
      {section === "Company" && <OrganizationMultiStep firstName={firstName} />}

      
    </>
  );
};

export default SignUp_and_SetProfile;

const StudentProfile = () => {
  const [user] = useContext(ProgrammerContext);
  const [student, setStudent] = useContext(StudentContext);
  const history = useHistory();
  const [activeGender, setActiveGender] = useState("");
  const [section, setSection] = useState("profile1");
  const classes = useStyles();
  const [eduCount, setEduCount] = useState([{}]);
  const [eduDetails, setEduDetails] = useState([]);
  const [expCount, setExpCount] = useState([{}]);
  const [expDetails, setExpDetails] = useState([]);
  const [phoneVerificationHelperText, setPhoneHelperText] = useState(false);
  const [emailVerificationHelperText, setEmailHelperText] = useState(false);
  const [DOB, setDOB] = useState('');
  const [City, setCity] = useState('');
  const [dp,setDP] = useState({
    file:null,
    imageURL:'https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png'
  })
  var phoneOTP = '';
  var emailOTP = '';

  console.log(student);

  const AddEduHandler = () => {
    setEduCount((eduCount) => {
      const newArray = eduCount.concat({});
      return newArray;
    });
  };
  const RemoveEduHandler = () => {
    setEduCount((eduCount) => {
      if(eduCount.length > 1){
        const newArray = eduCount;
        for(var i=0; i<eduCount.length; i++){
          newArray.pop();
        }
        return newArray;
      }
      return eduCount;
    });
  }
  const AddExpHandler = () => {
    setExpCount((expCount) => {
      const newArray = expCount.concat({});
      return newArray;
    });
  };
  const RemoveExpHandler = () => {
    setExpCount((expCount) => {
      if(expCount.length > 1){
        const newArray = expCount;
        for(var i=0; i<expCount.length; i++){
          newArray.pop();
        }
        return newArray;
      }
      return expCount;
    });
  }
  const photoUpload = (e)=> {
    try{
      e.preventDefault();
      const reader = new FileReader();
      const file = e.target.files[0];
      reader.onloadend = () => {
        setDP({
          file: file,
          imageURL: reader.result
        });
      }
      reader.readAsDataURL(file);
    }
    catch(err){
    }
  }

  const AddDetails = () => {
    setStudent(prevUser => ({...prevUser,
      firstName: user.firstName,
      lastName: user.lastName,
      email : user.email,
      contact : user.contact,
      DOB: DOB,
      city: City,
      gender: activeGender,
      imageURL: dp,
    }));
  }
  const AddEdu = () => {
    setStudent(prevUser => ({...prevUser,
      educationDetails : eduDetails,
    }));
  }
  const AddExp = () => {
    setStudent(prevUser => ({...prevUser,
      workExperience : expDetails,
    }));
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="internship__content__card my-5 p-5 signup__container">
        <img
          className="mt-n2"
          src={logoOnly}
          style={{ width: "30px" }}
          alt="skilzen logo"
        />
        <h3 className="d-inline-block text-center ml-3 mb-4">
          Setting up Profile
        </h3>
        <hr />
        {section === "profile1" && (
          <section>
            <h4 className="mb-4">Personal Details </h4>
            <form
              className={classes.rootSetProfile}
              noValidate
              autoComplete="off"
            >
              <label for='dpInput' id="dp" className='position-relative'>
                <input id='dpInput' className='position-absolute  d-none' type="file" style={{width:'100%',height:'100%'}} onChange={photoUpload} />
                <img
                  src={dp.imageURL}
                  style={{width:'100px',height:'100px',borderRadius:'50%',objectFit:'cover'}}
                  className="m-auto"
                />
                <p>Upload Picture</p>
              </label>
              <TextField
                label="First Name"
                id="firstname"
                variant="outlined"
                size="small"
                defaultValue={user.firstName}
                fullWidth
                disabled
              />
              <TextField
                label="Last Name"
                id="lastname"
                variant="outlined"
                size="small"
                defaultValue={user.lastName}
                fullWidth
                disabled
              />
              <TextField
                label="Email"
                id="email"
                variant="outlined"
                size="small"
                defaultValue={user.email}
                fullWidth
                disabled
              />
              <TextField
                label="Date of Birth"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                size="small"
                onChange={e => setDOB(e.target.value)}
                fullWidth
              />
              <TextField
                label="City"
                id="email"
                variant="outlined"
                onChange={e => setCity(e.target.value)}
                size="small"
                fullWidth
              />
              <TextField
                label="Mobile No."
                id="mobileNo"
                variant="outlined"
                defaultValue={user.contact}
                size="small"
                fullWidth
                disabled
              />
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
                <button
                  className="apply_btn card_btn"
                  onClick={() => {setSection("profile2"); AddDetails();}}
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
            <form
              className={classes.rootSetProfile}
              noValidate
              autoComplete="off"
            >
              {eduCount.map((edu) => (
                <EducationFields edu={eduDetails} setEdu={setEduDetails} />
              ))}
              <div className="eduDetails__handler" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div
                  style={{ margin: "10px 0", cursor: "pointer", display: 'flex', gap: 10, alignItems: 'center'}}
                  onClick={AddEduHandler}
                >
                  <BsPlusCircle style={{ fontSize: 25 }} />{" "}
                  <p style={{ display: "inline-block" }}>Add Education</p>
                </div>
                {eduCount.length > 1 &&  <div
                    style={{ margin: "10px 0", cursor: "pointer", display: 'flex', gap: 5, alignItems: 'center' }}
                    onClick={RemoveEduHandler}
                  >
                    <TiDelete style={{ fontSize: 30 }} />{" "}
                    <p style={{ display: "inline-block" }}>Remove Education</p>
                  </div>}
              </div>
              
              <div className="signup__footer mt-3 d-flex justify-content-between">
                <button
                  className="card_btn"
                  onClick={() => setSection("profile1")}
                >
                  <BsArrowLeft
                    style={{ marginBottom: "2px", fontSize: "17px" }}
                  />{" "}
                  Back
                </button>
                <button
                  className="apply_btn card_btn"
                  onClick={() => {setSection("profile3"); AddEdu();}}
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
        {section === "profile3" && (
          <section>
            <h4 className="mb-4">Experience Details</h4>
            <form
              className={classes.rootSetProfile}
              noValidate
              autoComplete="off"
            >
              {expCount.map((exp) => (
                <ExperienceFields exp={expDetails} setExp={setExpDetails} />
              ))}
              <div className="eduDetails__handler" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div
                  style={{ margin: "10px 0", cursor: "pointer", display: 'flex', gap: 10, alignItems: 'center'}}
                  onClick={AddExpHandler}
                >
                  <BsPlusCircle style={{ fontSize: 25 }} />{" "}
                  <p style={{ display: "inline-block" }}>Add Experience</p>
                </div>
                {expCount.length > 1 &&  <div
                    style={{ margin: "10px 0", cursor: "pointer", display: 'flex', gap: 5, alignItems: 'center' }}
                    onClick={RemoveExpHandler}
                  >
                    <TiDelete style={{ fontSize: 30 }} />{" "}
                    <p style={{ display: "inline-block" }}>Remove Experience</p>
                  </div>}
              </div>
              <div className="signup__footer mt-3 d-flex justify-content-between">
                <button
                  className="card_btn"
                  onClick={() => setSection("profile2")}
                >
                  <BsArrowLeft
                    style={{ marginBottom: "2px", fontSize: "17px" }}
                  />{" "}
                  Back
                </button>
                <button
                  className="apply_btn card_btn"
                  onClick={() => {setSection("profile4"); AddExp();}}
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
        {section === "profile4" && (
          <section>
            <h4 className="mb-4">Profile Details</h4>
            <ProfileDetails setSection={setSection} classes={classes} setStudent={setStudent} />              
          </section>
        )}
        {section === "profile5" ? (
          <section>
            <h4 className="text-center mb-4">Verify Email/Phone</h4>
            <br />

            <form
              className={classes.rootSetProfile}
              noValidate
              autoComplete="off"
            >
              <p>Email ID Verification</p>
              <TextField
                label="Verfication code"
                id="email__verification"
                variant="outlined"
                size="small"
                style={{ width: "60%" }}
                helperText={
                  emailVerificationHelperText
                    ? "OTP has been Sent to your Email Address"
                    : ""
                }
                onChange={(e) => emailOTP = e.target.value}
              />
              <Button
                variant="contained"
                color="primary"
                style={{ margin: "8px 5px", padding: "6.5px 15px" }}
                onClick={() => {
                  setEmailHelperText(true);
                }}
              >
                {emailVerificationHelperText ? 'Resend' : 'Send OTP'}
              </Button>
              <br />
              <br />
              <p>Phone No Verification</p>
              <TextField
                label="Verfication code"
                id="phone__verification"
                variant="outlined"
                size="small"
                style={{ width: "60%" }}
                helperText={
                  phoneVerificationHelperText
                    ? "OTP has been Sent to your Phone No"
                    : ""
                }
                onChange={(e) => phoneOTP = e.target.value}
              />
              <Button
                variant="contained"
                color="primary"
                style={{ margin: "8px 5px", padding: "6.5px 15px" }}
                onClick={() => {
                  setPhoneHelperText(true);
                }}
              >
                {phoneVerificationHelperText ? 'Resend' : 'Send OTP'}
              </Button>
              <div className="signup__footer mt-3 d-flex justify-content-between">
                <button
                  className="card_btn"
                  onClick={() => setSection("profile4")}
                >
                  <BsArrowLeft
                    style={{ marginBottom: "2px", fontSize: "17px" }}
                  />{" "}
                  Back
                </button>
                <button
                  className="apply_btn card_btn"
                  onClick={(e) => {
                    e.preventDefault();
                    history.replace('/home')
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </section>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

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

const EducationFields = ({edu, setEdu}) => {
  var school = '';  
  var degree = '';
  var specialization = '';
  var start = '';
  var end = '';
  var city = '';
  const [visible, setVisible] = useState(true);
  
  const AppendDetails = () => {
    setVisible(false);
    setEdu([...edu, {
      school : school,
      degree : degree,
      specialization : specialization,
      start_date : start,
      end_date : end, 
      city : city,
    }])
  } 

  const classes = useStyles();
  return (
    <>
      <TextField
        fullWidth
        size="small"
        label="School/College/University"
        onChange={(e) => school = (e.target.value)}
        variant="outlined"
      />
      <TextField fullWidth size="small" label="Degree" variant="outlined"
        onChange={(e) => degree = (e.target.value)} />
      <TextField
        fullWidth
        size="small"
        label="Specialization"
        variant="outlined"
        onChange={(e) => specialization = (e.target.value)}
      />
      <TextField
        fullWidth
        size="small"
        label="City"
        variant="outlined"
        onChange={(e) => city = (e.target.value)}
      />
      <div className={classes.rootDatePicker}>
        <TextField
          label="Start Date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          size="small"
          onChange={(e) => start = (e.target.value)}
        />
        <TextField
          label="End Date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          size="small"
          onChange={(e) => end = (e.target.value)}
        />        
      </div>
      <div className="edu__actions">
        {visible && <AiFillCheckCircle className="edu__actionCheckIcon" onClick={() => AppendDetails()} />}
      </div>
      <hr />
    </>
  );
};
const ExperienceFields = ({exp, setExp}) => {
  var designation = '';  
  var company = '';
  var description = '';
  var start = '';
  var end = '';
  var city = '';
  const [visible, setVisible] = useState(true);

  const AppendDetails = () => {
    setVisible(false);
    setExp([...exp, {
      designation : designation,
      company : company,
      description : description,
      start_date : start,
      end_date : end, 
      city : city,
    }])
  }

  const classes = useStyles();
  return (
    <>
      <TextField
        fullWidth
        size="small"
        label="Job Designation"
        variant="outlined"
        onChange={(e) => designation = (e.target.value)}
      />
      <TextField
        fullWidth
        size="small"
        label="Company Name"
        variant="outlined"
        onChange={(e) => company = (e.target.value)}
      />
      <TextField
        fullWidth
        size="small"
        label="City"
        variant="outlined"
        onChange={(e) => city = (e.target.value)}
      />
      <div className={classes.rootDatePicker}>
        <TextField
          label="Start Date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          size="small"
          onChange={(e) => start = (e.target.value)}
        />
        <TextField
          label="End Date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          size="small"
          onChange={(e) => end = (e.target.value)}
        />
      </div>
      <TextField
        fullWidth
        size="small"
        label="Description"
        variant="outlined"
        onChange={(e) => description = (e.target.value)}
      />
      <div className="edu__actions">
        {visible && <AiFillCheckCircle className="edu__actionCheckIcon" onClick={() => AppendDetails()} />}
      </div>
      <hr />
    </>
  );
};

const NextArrowButton = () => (
  <button className="card_btn" onClick={() => {}}>
    <BsArrowLeft style={{ marginBottom: "2px", fontSize: "17px" }} /> Back
  </button>
);

const ProfileDetails = ({setSection, classes, setStudent}) => {
  var title = '';
  var description = '';
  var skills = [];
  var linkedIn = '';
  var github = '';
  var facebook = '';

  const AddProfile = () => {
    setStudent(prevUser => ({...prevUser,
      profile : {
        title : title,
        description : description,
        linkedIn : linkedIn,
        skills : skills,
        github : github, 
        facebook : facebook,
      },
    }));   
  }

  return(
    <form
      className={classes.rootSetProfile}
      noValidate
      autoComplete="off"
    >
      <TextField
        label="Profile Title"
        id="profileTitle"
        variant="outlined"
        size="small"
        fullWidth
        onChange={(e) => title = e.target.value}
      />
      <h6 style={{ margin: "20px 0 10px" }} for="description">
        Describe Yourself
      </h6>
      <textarea id="description" rows={10} style={{ width: "100%" }} onChange={(e) => description = e.target.value} />
      <TagsSelect
        id="skillsSelect"
        style={{ marginTop: 10 }}
        label="Skills"
        options={[
          "skill1",
          "skill2",
          "skill3",
          "skill1",
          "skill2",
          "skill3",
          "skill1",
          "skill2",
          "skill3",
          "skill1",
          "skill2",
          "skill3",
        ]}
        onChange={(e) => skills = e}
        SelectProps={{
          isCreatable: true,
          msgNoOptionsAvailable: "All tags are selected",
          msgNoOptionsMatchFilter: "No tag matches the filter",
        }}
        variant="outlined"
      />
      <h6 style={{ marginTop: 30 }}>Social Media Links</h6>
      <TextField
        label="LinkedIn"
        id="LinkedIn"
        variant="outlined"
        size="small"
        fullWidth
        onChange={(e) => linkedIn = e.target.value} 
      />
      <TextField
        label="GitHub"
        id="GitHub"
        variant="outlined"
        size="small"
        fullWidth
        onChange={(e) => github = e.target.value} 
      />
      <TextField
        label="Facebook"
        id="Facebook"
        variant="outlined"
        size="small"
        fullWidth
        onChange={(e) => facebook = e.target.value} 
      />
      <div className="signup__footer mt-3 d-flex justify-content-between">
        <button
          className="card_btn"
          onClick={() => setSection("profile3")}
        >
          <BsArrowLeft
            style={{ marginBottom: "2px", fontSize: "17px" }}
          />{" "}
          Back
        </button>
        <button
          className="apply_btn card_btn"
          onClick={() => {setSection("profile5"); AddProfile();}}
        >
          Next{" "}
          <BsArrowRight
            style={{ marginBottom: "2px", fontSize: "17px" }}
          />
        </button>
      </div>
    </form>
  );
}
