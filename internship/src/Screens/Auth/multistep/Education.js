import React, { useEffect, useState } from "react";

import { BiCheckCircle, BsArrowLeft, BsArrowRight, BsDashCircleFill, BsPlusCircle, FaCheckCircle } from "react-icons/all";
import logoOnly from "../../../images/Group.png";
import { TextField, makeStyles } from "@material-ui/core";
import { useForm } from "react-hooks-helper";

import Notification from '../Notification.js'

import {addEducations} from '../../../redux/actions/user.actions'
import { useSelector , useDispatch } from 'react-redux'

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

const EducationFields = ({EduDetails,SaveThis,RemoveThis,isFirst,}) => {
  const [EduDetails1,setEduDetails1] = useForm(EduDetails)
  const [saved,setSaved]=useState(0)

  const classes = useStyles();
  
  const ChangeHandler=(e)=>{
    setSaved(1);
    setEduDetails1(e);
  }
  return (
    <>
      <TextField
        fullWidth
        size="small"
        label="School/College/University"
        variant="outlined"
        name="school"
        value={EduDetails1.school}
        onChange={ChangeHandler}
      />
      <TextField
        fullWidth
        size="small"
        label="Degree"
        variant="outlined"
        name="degree"
        value={EduDetails1.degree}
        onChange={ChangeHandler}
      />
      <TextField
        fullWidth
        size="small"
        label="Specialization"
        variant="outlined"
        name="specialization"
        value={EduDetails1.specialization}
        onChange={ChangeHandler}
      />
      <TextField
        fullWidth
        size="small"
        label="Location"
        variant="outlined"
        name="location"
        value={EduDetails1.location}
        onChange={ChangeHandler}
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
          name="startDate"
          value={EduDetails1.startDate}
          onChange={ChangeHandler}
        />
        <TextField
          label="End Date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          size="small"
          name="endDate"
          value={EduDetails1.endDate}
          onChange={ChangeHandler}
        />
      </div>
      <div className={`edu_footer my-2 d-flex ${!isFirst?'justify-content-between':'justify-content-end'}`}>
        <div
          style={{ cursor: "pointer",display:isFirst?'none':'unset' }}
          onClick={RemoveThis}
        >
          <BsDashCircleFill style={{ fontSize: 20,marginTop: '-2px',color:'red' }} />{" "}
          <p style={{ display: "inline-block",fontSize: 14 }}>Remove Education</p>
        </div>
        <div>
          {saved===1?<FaCheckCircle style={{ fontSize: 20,color:'#00c600', marginBottom:'0px',cursor:'pointer'}} onClick={()=>{setSaved(2);SaveThis(EduDetails1)}} />
          :(saved===2&&<p style={{transition:'all .3s',fontSize:14}}>Data Saved</p>)
          }
        </div>
      </div>
      <hr />
    </>
  );
};


export const Education = ({ navigation,setEduDetails,EduDetails }) => {
  const classes = useStyles();
  const [notify,setnotify] = useState({message:'',type:'',isOpen:false});
  const dispatch = useDispatch();
  const AddEduHandler = () => {
    setEduDetails((EduDetails) => {
      const newArray = EduDetails.concat({
        school:"",
        degree:"",
        specialization:"",
        location:"",
        startDate:"",
        endDate:"",
      });
      return newArray;
    });
  };

  const SaveEduHandler = (id,data)=>{
    setEduDetails(EduDetails=>{
      const newArray=[...EduDetails];
      newArray[id]=data;
      return newArray;
    })
  }

  const RemoveEduHandler = (id)=>{
    setEduDetails((EduDetails)=>{
      const newArray = [...EduDetails];
      newArray.splice(id,1);
      return newArray;
    })
    // console.log(EduDetails);
  }
  function isEmpty(){ 
    let flag = false;
    EduDetails.map(obj=>{
      console.log(obj);
      if(obj.school==="" || obj.degree==="" || obj.startDate===""|| obj.endDate===""||obj.specialization===""|| obj.location===""){
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
          <h4 className="mb-4">Education Details</h4>
          <form
            className={classes.rootSetProfile}
            noValidate
            autoComplete="off"
          >
            {EduDetails.map((edu,id) => (
              <EducationFields
                isFirst={id===0}
                EduDetails={EduDetails[id]}
                SaveThis={(data)=>{SaveEduHandler(id,data)}}
                RemoveThis={()=>{RemoveEduHandler(id)}}
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
                onClick={(e) => {
                  e.preventDefault();
                  if(isEmpty()){
                    const mess = "Fields cannot be empty!";
                    setnotify({message:mess,isOpen:true,type:'error'});
                    setTimeout(()=>{
                      setnotify({message:'',isOpen:false,type:''})
                    },3000)
                  }else{
                    EduDetails.map((obj,id)=>{
                      const new_obj = {
                        college_name:obj.school,
                        college_id:id,
                        degree:obj.degree,
                        start_date:obj.startDate,
                        college_city:obj.location,
                        end_date:obj.endDate,
                      }
                      dispatch(addEducations(new_obj));
                    })
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
        </section>
        {
          notify.isOpen && 
          <Notification
            notify={notify}
          />
        }
      </div>
    </div>
  );
};
