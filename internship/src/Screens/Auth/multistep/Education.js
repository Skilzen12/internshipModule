import React, { useEffect, useState } from "react";

import { BiCheckCircle, BsArrowLeft, BsArrowRight, BsDashCircleFill, BsPlusCircle, FaCheckCircle } from "react-icons/all";
import logoOnly from "../../../images/Group.png";
import { TextField, makeStyles } from "@material-ui/core";

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
}));

const EducationFields = ({
  college,
  specialization,
  degree,
  location,
  startdate,
  enddate,
  setForm,
  formData,
  RemoveEduHandler,
  isFirst
}) => {
  const [saved,setSaved]=useState(false)
  const classes = useStyles();
  
  useEffect(()=>{
    setSaved(false);
  },
  [college,
  specialization,
  degree,
  location,
  startdate,
  enddate,
  setForm,
  formData,
  RemoveEduHandler,
  isFirst])
  return (
    <>
      <TextField
        fullWidth
        size="small"
        label="School/College/University"
        variant="outlined"
        name="college"
        value={college}
        onChange={setForm}
      />
      <TextField
        fullWidth
        size="small"
        label="Degree"
        variant="outlined"
        name="degree"
        value={degree}
        onChange={setForm}
      />
      <TextField
        fullWidth
        size="small"
        label="Specialization"
        variant="outlined"
        name="specialization"
        value={specialization}
        onChange={setForm}
      />
      <TextField
        fullWidth
        size="small"
        label="Location"
        variant="outlined"
        name="location"
        value={location}
        onChange={setForm}
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
          name="startdate"
          value={startdate}
          onChange={() => {
            const newVal = { ...formData, college };
            setForm(newVal);
          }}
        />
        <TextField
          label="End Date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          size="small"
          name="enddate"
          value={enddate}
          onChange={setForm}
        />
      </div>
      <div className={`edu_footer my-2 d-flex ${!isFirst?'justify-content-between':'justify-content-end'}`}>
        <div
          style={{ cursor: "pointer",display:isFirst?'none':'unset' }}
          onClick={RemoveEduHandler}
        >
          <BsDashCircleFill style={{ fontSize: 20,marginTop: '-2px',color:'red' }} />{" "}
          <p style={{ display: "inline-block",fontSize: 14 }}>Remove Education</p>
        </div>
        <div>
          {!saved?<FaCheckCircle style={{ fontSize: 20,color:'#00c600', marginBottom:'0px',cursor:'pointer'}} onClick={()=>{setSaved(true)}} />
          :<p style={{transition:'all .3s',fontSize:14}}>Data Saved</p>
          }
        </div>
      </div>
      <hr />
    </>
  );
};
export const Education = ({ formData, setForm, navigation }) => {
  const { college, specialization, degree, startdate, enddate } = formData;
  const [form2, setForm2] = useState([]);
  const classes = useStyles();
  const [eduCount, setEduCount] = useState([{}]);
  
  const AddEduHandler = () => {
    setEduCount((eduCount) => {
      const newArray = eduCount.concat({});
      return newArray;
    });
  };

  const RemoveEduHandler = (id)=>{
    setEduCount((educount)=>{
      const newArray = [...eduCount];
      newArray.splice(id,1);
      return newArray;
    })
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
          <h4 className="mb-4">Education Details</h4>
          <form
            className={classes.rootSetProfile}
            noValidate
            autoComplete="off"
          >
            {eduCount.map((edu,id) => (
              <EducationFields
                isFirst={id===0}
                college={college}
                specialization={specialization}
                degree={degree}
                startdate={startdate}
                enddate={enddate}
                setForm={setForm}
                formData={formData}
                RemoveEduHandler={()=>{RemoveEduHandler(id)}}
              />
            ))}
            <div
              style={{ margin: "10px 0", cursor: "pointer" }}
              onClick={AddEduHandler}
            >
              <BsPlusCircle style={{ fontSize: 25,marginTop: '-4px' }} />{" "}
              <p style={{ display: "inline-block" }}>Add Education</p>
            </div>
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
