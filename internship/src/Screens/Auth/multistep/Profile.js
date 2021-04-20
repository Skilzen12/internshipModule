import React from "react";
import { BsArrowLeft, BsArrowRight, BsPlusCircle } from "react-icons/all";
import { TagsSelect } from "react-select-material-ui";
import { TextField, makeStyles } from "@material-ui/core";
import logoOnly from "../../../images/Group.png";
import { AiOutlineGlobal,AiFillLinkedin,AiFillFacebook } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
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
  const { profileTitle, skills, fb, github, linkedIn,portfolio } = formData;
  const classes = useStyles();
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
            <textarea id="description" rows={6} style={{ width: "100%" }} />
            <TagsSelect
              name="skills"
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
              // onChange={this.handleChange}
              SelectProps={{
                isCreatable: true,
                msgNoOptionsAvailable: "All tags are selected",
                msgNoOptionsMatchFilter: "No tag matches the filter",
              }}
              value={skills}
              onChange={(e) => console.log(e)}
              variant="outlined"
            />
            <h6 style={{ marginTop: 30 }}>Social Media Links</h6>
            <div className={classes.for_socialIcon}>
            <div className={classes.for_adjfbIcon}>
                <AiFillLinkedin/>
            </div>
            <TextField
              label="LinkedIn"
              name="LinkedIn"
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
              name="fb"
              variant="outlined"
              size="small"
              fullWidth
              value={fb}
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
              value={fb}
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
                onClick={() => navigation.next()}
              >
                Next{" "}
                <BsArrowRight
                  style={{ marginBottom: "2px", fontSize: "17px" }}
                />
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};
