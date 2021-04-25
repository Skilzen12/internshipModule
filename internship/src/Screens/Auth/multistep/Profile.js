import React,{ useState} from "react";
import { BsArrowLeft, BsArrowRight, BsPlusCircle } from "react-icons/all";
import { MultipleSelect } from "react-select-material-ui";
import { TextField, makeStyles } from "@material-ui/core";
import logoOnly from "../../../images/Group.png";
import { AiOutlineGlobal,AiFillLinkedin,AiFillFacebook } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";

import Notification from '../Notification.js'
import { addProfile, addSkills} from "../../../redux/actions/user.actions";
import { useDispatch, useSelector } from "react-redux";

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
    '& .MuiInputLabel-outlined':{
      zIndex:'-10'
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
  },
  for_adjfbIcon:{
    
   
    marginBottom: '0px',
    marginRight: '5px',
    fontSize:'31px',
    color:'#4040f8',
  },
  for_adjgitIcon:{
    marginBottom: '0px',
    marginRight: '5px',
    fontSize:'31px',
    color:'black',
  },
  for_fbIcon:{
    color:'#4040f8',
  },
}));
export const Profile = ({ formData, setForm, navigation }) => {

  const { profileTitle, facebook, github, linkedIn,portfolio,profileDesc,resumeLink } = formData;
  const [notify,setnotify] = useState({message:'',type:'',isOpen:false});
  const classes = useStyles();
  const dispatch = useDispatch();

  const profileError = useSelector(state=>state.user.profileError);
  const profileLoading = useSelector(state=>state.user.profileLoading);
  const skillsError = useSelector(state=>state.user.skillsError)
  const user_skills = useSelector(state=>state.user.user_skills)
  const skillsLoading = useSelector(state=>state.user.skillsLoading)
  const defaultSkills = ['Advising',
  'Coaching',
  'Conflict resolution',
  'Decision making',
  'Delegating',
  'Diplomacy',
  'Interviewing',
  'Motivation',
  'People management',
  'Problem solving',
  'Strategic thinking',
  ]
  const [skills,setSkills] = useState([]);
  const skillsChangeHandler = (values)=>{
    console.log('skills selected',values);
    if(values)
    setSkills(values);
    else setSkills([]);
  }

  const saveProfile = async ()=>{
    // console.log('in saveprofile')
    const social_links = [
      {
        handle:'LinkedIn',
        link:linkedIn
      },
      {
        handle:'Facebook',
        link:facebook
      },
      {
        handle:'Github',
        link:github
      }
    ]
    const linked_website=portfolio;
    return await dispatch(addProfile(profileDesc,social_links,formData.location,linked_website))
  }

  const saveSkills =  async ()=>{
    // console.log('in saveskills')
    skills.forEach(async (skill,id)=>{
      const obj={
          skill: {
            id,
            name : skill,
            kind : "soft"
        }
      }
      return await dispatch(addSkills(obj));
    })
  }

  const saveAndNext = async ()=>{
    // console.log('in saveandnext')
    const res=await saveProfile();
    console.log(res);
    if(res.error===''){
      const skillsRes= await saveSkills()
        console.log(skillsRes);

      if(skillsRes.error===''){
        setnotify({message:'Data Saved',type:'success',isOpen:true})
        setTimeout(()=>{
          setnotify({message:'',type:'',isOpen:false})
          window.open('/','_self');
        },3000)
      }
      else{
        setnotify({message:'Error ocurred in Adding Skills',type:'error',isOpen:true})
        setTimeout(()=>{
          setnotify({message:'',type:'',isOpen:false})
        },3000)
      }
        
    }
    else{
      setnotify({message:'Error ocurred in Adding Social Media',type:'error',isOpen:true})
      setTimeout(()=>{
        setnotify({message:'',type:'',isOpen:false})
      },3000)
    }
    
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
        <section>
          <h4 className="mb-4">Profile Details</h4>
          <form
            className={classes.rootSetProfile}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Title"
              name="profileTitle"
              variant="outlined"
              size="small"
              fullWidth
              value={profileTitle}
              onChange={setForm}
            />
            <h6 style={{ margin: "20px 0 10px" }} for="description">
              Describe Yourself
            </h6>
            <textarea id="description" rows={6} style={{ width: "100%" }} 
              name="profileDesc"
              value={profileDesc}
              onChange={setForm} />
            <MultipleSelect
              name="skills"
              style={{ marginTop: 10 }}
              label="Skills"
              options={defaultSkills}
              onChange={skillsChangeHandler}
              SelectProps={{
                isCreatable: true,
                msgNoOptionsAvailable: "All tags are selected",
                msgNoOptionsMatchFilter: "No tag matches the filter",
              }}
              values={skills}
              variant="outlined"
            />
            <h6 style={{ marginTop: 30 }}>Social Media Links</h6>
            <div className={classes.for_socialIcon}>
            <div className={classes.for_adjfbIcon}>
                <AiFillLinkedin/>
            </div>
            <TextField
              label="LinkedIn"
              name="linkedIn"
              variant="outlined"
              size="small"
              fullWidth
              value={linkedIn}
              onChange={setForm}
            />
            </div>
            <div className={classes.for_socialIcon}>
            <div className={classes.for_adjgitIcon}>
                <FaGithubSquare/>
            </div>
            <TextField
              label="GitHub"
              name="github"
              variant="outlined"
              size="small"
              fullWidth
              value={github}
              onChange={setForm}
            />
            </div>
            <div className={classes.for_socialIcon}>
            <div className={classes.for_adjfbIcon}>
                <AiFillFacebook/>
            </div>
            <TextField
              label="Facebook"
              name="facebook"
              variant="outlined"
              size="small"
              fullWidth
              value={facebook}
              onChange={setForm}
            />
            </div>
            <h6 style={{ marginTop: 30 }}>User Portfolio</h6>
            <div className={classes.for_socialIcon}>
            <div className={classes.for_adjgitIcon}>
                <AiOutlineGlobal/>
            </div>
            <TextField
              label="Portfolio"
              name="portfolio"
              variant="outlined"
              size="small"
              fullWidth
              value={portfolio}
              onChange={setForm}
            />
            </div>
            <label for='resume' className={classes.label__resume}>Add Resume or Provide Google Drive Link</label>
            <input type="file" name="fileToUpload" id="resume" />
            <TextField
              label="Google Drive Link"
              name="resumeLink"
              variant="outlined"
              size="small"
              fullWidth
              value={resumeLink}
              onChange={setForm}
            />
            <div className="signup__footer mt-3 d-flex justify-content-between">
              <button
                className="card_btn"
                onClick={() => navigation.previous()}
              >
                <BsArrowLeft
                  style={{ marginBottom: "2px", fontSize: "17px" }}
                />{" "}
                Back
              </button>
              <button
                className="apply_btn card_btn"
                onClick={(e) => {
                  console.log(formData);
                  e.preventDefault();
                  if(formData.profileTitle==="" || formData.profileDesc===""){
                    setnotify({message:'Fields cannot be empty!',isOpen:true,type:'error'});
                    setTimeout(()=>{
                      setnotify({message:'',isOpen:false,type:''})
                    },3000)
                  }else if(formData.facebook==="" || formData.github===""||formData.linkedIn===""||formData.portfolio===""){
                    setnotify({message:'Add all social media links!',isOpen:true,type:'error'});
                    setTimeout(()=>{
                      setnotify({message:'',isOpen:false,type:''})
                    },3000)
                  }else if(formData.resumeLink===""){
                    setnotify({message:'Add resume !',isOpen:true,type:'error'});
                    setTimeout(()=>{
                      setnotify({message:'',isOpen:false,type:''})
                    },3000)
                  }else if(skills.length===0){
                    setnotify({message:'Add Atleast one skill!',isOpen:true,type:'error'})
                    setTimeout(() => {
                      setnotify({message:'',isOpen:false,type:''})
                    }, 3000);
                  }
                  else{
                    saveAndNext();
                  }
                }}
              >
                Next{" "}
                <BsArrowRight
                  style={{ marginBottom: "2px", fontSize: "17px" }}
                />
              </button>
            </div>
          </form>
          {
            notify.isOpen && 
            <Notification
              notify={notify}
            />
          }
        </section>
      </div>
    </div>
  );
};
