import React, { useEffect, useState } from "react";

import { BsArrowLeft, BsArrowRight, BsDashCircleFill, BsPlusCircle, FaCheckCircle } from "react-icons/all";
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

const ExperienceFields = ({setForm,expDesignation,expOrganization,expStartDate,expEndDate,expDescription,RemoveExpHandler,isFirst}) => {
  const classes = useStyles();
  const [saved,setSaved]=useState(false)
  
  useEffect(()=>{
    setSaved(false);
  },
  [setForm,expDesignation,expOrganization,expStartDate,expEndDate,expDescription,RemoveExpHandler,isFirst])
//   console.log("in Fields",expDesignation,expOrganization,expStartDate,expEndDate,expDescription)
  return (
    <>
      <TextField
        fullWidth
        size="small"
        name="expDesignation"
        label="Designation/Title"
        variant="outlined"
        onChange={setForm}
        value={expDesignation}
      />
      <TextField
        fullWidth
        size="small"
        name="expOrganization"
        label="Organization Name"
        variant="outlined"
        onChange={setForm}
        value={expOrganization}
      />
      <TextField
        fullWidth
        size="small"
        name="expLocation"
        label="Location"
        variant="outlined"
        onChange={setForm}
        value={expOrganization}
      />
      <div className={classes.rootDatePicker}>
        <TextField
          label="Start Date"
          type="date"
          name="expStartDate"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          size="small"
        onChange={setForm}
        // value={expStartDate}
        />
        <TextField
          label="End Date"
          type="date"
          name="expEndDate"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          size="small"
        onChange={setForm}
        // value={expEndDate}
        />
      </div>
      <TextField
        fullWidth
        size="small"
        name="expDescription"
        label="Description"
        variant="outlined"
        onChange={setForm}
        value={expDescription}
      />
      <div className={`edu_footer my-2 d-flex ${!isFirst?'justify-content-between':'justify-content-end'}`}>
        <div
          style={{ cursor: "pointer",display:isFirst?'none':'unset' }}
          onClick={RemoveExpHandler}
        >
          <BsDashCircleFill style={{ fontSize: 20,marginTop: '-2px',color:'red' }} />{" "}
          <p style={{ display: "inline-block",fontSize: 14 }}>Remove Experience</p>
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

export const Experience = ({ formData, setForm, navigation }) => {
  const {expDesignation,expOrganization,expStartDate,expEndDate,expDescription} = formData;
  console.log("in Experience",formData)
  console.log("in Experience",expDesignation,expOrganization,expStartDate,expEndDate,expDescription)

  const [form2, setForm2] = useState([]);
  const classes = useStyles();
  const [expCount, setExpCount] = useState([{}]);

  const AddExpHandler = () => {
    setExpCount((eduCount) => {
      const newArray = expCount.concat({});
      return newArray;
    });
  };
  const RemoveExpHandler = (id)=>{
    setExpCount((educount)=>{
        const newArray = [...expCount];
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
          <h4 className="mb-4">Experience Details</h4>
          <form
            className={classes.rootSetProfile}
            noValidate
            autoComplete="off"
          >
            {expCount.map((exp,id) => (
              <ExperienceFields 
                isFirst={id===0}
                setForm={setForm}
                expDesignation={expDesignation}
                expOrganization={expOrganization}
                expStartDate={expStartDate}
                expEndDate={expEndDate}
                expDescription={expDescription}
                RemoveExpHandler={()=>RemoveExpHandler(id)}
              />
            ))}
            <div
              style={{ margin: "10px 0", cursor: "pointer" }}
              onClick={AddExpHandler}
            >
              <BsPlusCircle style={{ fontSize: 25,marginTop: '-4px'  }} />{" "}
              <p style={{ display: "inline-block" }}>Add Experience</p>
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
