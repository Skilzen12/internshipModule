import React, { useEffect, useState } from "react";

import { BsArrowLeft, BsArrowRight, BsDashCircleFill, BsPlusCircle, FaCheckCircle } from "react-icons/all";
import logoOnly from "../../../images/Group.png";
import { TextField, makeStyles } from "@material-ui/core";
import { useForm } from "react-hooks-helper";

import Notification from '../Notification.js'

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

const ExperienceFields = ({
  ExpDetails,
  SaveThis,
  RemoveThis,
  isFirst
}) => {
  const classes = useStyles();
  const [saved,setSaved]=useState(0)
  const [ExpDetails1,setExpDetails1] = useForm(ExpDetails)

  const ChangeHandler=(e)=>{
    setSaved(1);
    setExpDetails1(e);
  }

  return (
    <>
      <TextField
        fullWidth
        size="small"
        name="expDesignation"
        label="Designation/Title"
        variant="outlined"
        onChange={ChangeHandler}
        value={ExpDetails1.expDesignation}
      />
      <TextField
        fullWidth
        size="small"
        name="expOrganization"
        label="Organization Name"
        variant="outlined"
        onChange={ChangeHandler}
        value={ExpDetails1.expOrganization}
      />
      <TextField
        fullWidth
        size="small"
        name="expLocation"
        label="Location"
        variant="outlined"
        onChange={ChangeHandler}
        value={ExpDetails1.expLocation}
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
          onChange={ChangeHandler}
          value={ExpDetails1.expStartDate}
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
          onChange={ChangeHandler}
          value={ExpDetails1.expEndDate}
        />
      </div>
      <TextField
        fullWidth
        size="small"
        name="expDescription"
        label="Description"
        variant="outlined"
        onChange={ChangeHandler}
        value={ExpDetails1.expDescription}
      />
      <div className={`edu_footer my-2 d-flex ${!isFirst?'justify-content-between':'justify-content-end'}`}>
        <div
          style={{ cursor: "pointer",display:isFirst?'none':'unset' }}
          onClick={RemoveThis}
        >
          <BsDashCircleFill style={{ fontSize: 20,marginTop: '-2px',color:'red' }} />{" "}
          <p style={{ display: "inline-block",fontSize: 14 }}>Remove Experience</p>
        </div>
        <div>
          {saved===1?<FaCheckCircle style={{ fontSize: 20,color:'#00c600', marginBottom:'0px',cursor:'pointer'}} onClick={()=>{setSaved(2);SaveThis(ExpDetails1)}} />
          :(saved===2&&<p style={{transition:'all .3s',fontSize:14}}>Data Saved</p>)
          }
        </div>
      </div>
      <hr />
    </>
  );
};

export const Experience = ({ setExpDetails,ExpDetails,navigation }) => {
  const classes = useStyles();
  const [notify,setnotify] = useState({message:'',type:'',isOpen:false});

  const AddExpHandler = () => {
    setExpDetails((eduCount) => {
      const newArray = ExpDetails.concat({});
      return newArray;
    });
  };

  const SaveExpHandler = (id,data)=>{
    setExpDetails(ExpDetails=>{
      const newArray=[...ExpDetails];
      newArray[id]=data;
      return newArray;
    })
  }

  const RemoveExpHandler = (id)=>{
    setExpDetails((educount)=>{
        const newArray = [...ExpDetails];
        newArray.splice(id,1);
        return newArray;
      })
  }

  function isEmpty(){
    let flag = false;
    ExpDetails.map(obj=>{
      console.log(obj);
      if(obj.expDesignation==="" || obj.expLocation==="" || obj.expDescription===""|| obj.expOrganization===""){
        console.log("ret true");
        flag = true;
      }
    });
    return flag;
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
            {ExpDetails.map((exp,id) => (
              <ExperienceFields 
                isFirst={id===0}
                ExpDetails={ExpDetails[id]}
                SaveThis={(data)=>{SaveExpHandler(id,data)}}
                RemoveThis={()=>{RemoveExpHandler(id)}}
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
                onClick={(e) => {
                  e.preventDefault();
                  if(isEmpty()){
                    setnotify({message:'Fields cannot be empty!',isOpen:true,type:'error'});
                    setTimeout(()=>{
                      setnotify({message:'',isOpen:false,type:''})
                    },3000)
                  }else{
                    console.log("is empty false");
                    // console.log(EduDetails);
                    navigation.next();
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
