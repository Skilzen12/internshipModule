import React, { useEffect, useState } from "react";

import { BiCheckCircle, BsArrowLeft, BsArrowRight, BsDashCircleFill, BsPlusCircle, FaCheckCircle } from "react-icons/all";
import logoOnly from "../../../images/Group.png";
import { TextField, makeStyles,CircularProgress } from "@material-ui/core";
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

const EducationFields = ({EduDetails,SaveThis,RemoveThis,isFirst,id}) => {
  const [EduDetails1,setEduDetails1] = useForm(EduDetails)
  const [saved,setSaved]=useState(false);
  const [notify,setnotify] = useState({message:'',type:'',isOpen:false});

  const dispatch = useDispatch();

  const classes = useStyles();
  
  const ChangeHandler=(e)=>{
    setEduDetails1(e);
  }
  const saveClicked = async()=>{
    const {school,degree,startDate,endDate,location} = EduDetails1;

    if(school===""||degree===""||startDate===""||endDate===""||location===""){
      setnotify({message:'Fields cannot be empty!',isOpen:true,type:'error'});
      setTimeout(()=>{
        setnotify({message:'',isOpen:false,type:''})
      },2500)
    }
    else{
      const new_obj = {
        college_name:school,
        college_id:id+1,
        degree:degree,
        start_date:startDate,
        college_city:location,
        end_date:endDate,
      }
      const res = await dispatch(addEducations(new_obj));
      console.log(res,"res in Education");
      if(res.error!==""){
        setnotify({message:res.error,isOpen:true,type:'error'});
        setTimeout(()=>{
          setnotify({message:'',isOpen:false,type:''})
        },1600)
      }else{
        setnotify({message:'Added Field Successfully..',isOpen:true,type:'success'});
        setTimeout(()=>{
          setnotify({message:'',isOpen:false,type:''})
        },1600)
        setSaved(true);
        SaveThis({...EduDetails1,saved:true})
      }
    }

  }
  return (
    <>
      <TextField
        fullWidth
        size="small"
        label="School/College/University"
        variant="outlined"
        name="school"
        disabled={saved}
        value={EduDetails1.school}
        onChange={ChangeHandler}
      />
      <TextField
        fullWidth
        size="small"
        label="Degree"
        variant="outlined"
        name="degree"
        disabled={saved}
        value={EduDetails1.degree}
        onChange={ChangeHandler}
      />
      <TextField
        fullWidth
        size="small"
        label="Specialization"
        variant="outlined"
        disabled={saved}
        name="specialization"
        value={EduDetails1.specialization}
        onChange={ChangeHandler}
      />
      <TextField
        fullWidth
        size="small"
        label="Location"
        variant="outlined"
        disabled={saved}
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
          disabled={saved}
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
          disabled={saved}
          value={EduDetails1.endDate}
          onChange={ChangeHandler}
        />
      </div>
      <div className={`edu_footer my-2 d-flex ${!isFirst?'justify-content-between':'justify-content-end'}`}>
        {
          saved ?
          <div
            style={{ cursor:'disabled' ,visibility:'hidden' }}
            onClick={RemoveThis}
          >
            <BsDashCircleFill style={{ fontSize: 20,marginTop: '-2px',color:'red' }} />{" "}
            <p style={{ display: "inline-block",fontSize: 14 }}>Remove Education</p>
          </div> 
          :
          <div
            style={{ cursor: "pointer",display:isFirst?'none':'unset' }}
            onClick={RemoveThis}
          >
            <BsDashCircleFill style={{ fontSize: 20,marginTop: '-2px',color:'red' }} />{" "}
            <p style={{ display: "inline-block",fontSize: 14 }}>Remove Education</p>
          </div>
        }
        <div>
          {saved===false?<FaCheckCircle style={{ fontSize: 20,color:'#00c600', marginBottom:'0px',cursor:'pointer'}} onClick={saveClicked} />
          :(saved===true&&<p style={{transition:'all .3s',fontSize:14}}>Data Saved</p>)
          }
        </div>
      </div>
        {
          notify.isOpen && 
          <Notification
            notify={notify}
          />
        }
      <hr />
    </>
  );
};


export const Education = ({ navigation,setEduDetails,EduDetails }) => {
  const classes = useStyles();
  const [notify,setnotify] = useState({message:'',type:'',isOpen:false});

  const AddEduHandler = () => {
    setEduDetails((EduDetails) => {
      const newArray = EduDetails.concat({
        school:"",
        degree:"",
        specialization:"",
        location:"",
        startDate:"",
        endDate:"",
        saved:false,
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
      if(obj.saved==false){
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
            {
              EduDetails.map((edu,id) => (
                <EducationFields
                  isFirst={id===0}
                  EduDetails={EduDetails[id]}
                  SaveThis={(data)=>{SaveEduHandler(id,data)}}
                  RemoveThis={()=>{RemoveEduHandler(id)}}
                  id={id}
                />
              ))
            }
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
                    const mess = "Save the Data !";
                    setnotify({message:mess,isOpen:true,type:'error'});
                    setTimeout(()=>{
                      setnotify({message:'',isOpen:false,type:''})
                    },3000)
                  }else{
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
