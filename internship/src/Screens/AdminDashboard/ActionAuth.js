import {React ,useState}from 'react'
import { Dialog,makeStyles,FormControlLabel,Checkbox,TextField } from '@material-ui/core';
import { AiFillCloseCircle, AiFillInfoCircle } from "react-icons/ai";
const useStyles = makeStyles((theme) => ({
    spamListRoot:{
      '& .MuiDialog-paper':{
        padding:30
      },
      '& .MuiDialog-paperWidthLg':{
        width:1280
      }
    },
    for_dialog_close: {
        display: "flex",
        fontSize: "26px",
        justifyContent: "flex-end",
        marginRight: "10px",
        
      },
      for_icon_close:{
        color:"#d3d3d3",
        "&:hover":{
            color:"#ec1f28"
          } 
      },
      for_btn_cls:{
         border:"none",
         background:"transparent"
      },
      for_adj_pass_chk:{
          display:"flex",
          flexDirection:"column"
      },
      for_dialog_title:{
        fontSize:"20px",
        fontFamily:"Gordita",
        margin: "20px 20px 0px 20px"
      },
      for_submit_auth: {
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "20px",
        marginRight:"50px"
        
      },
})); 
export default function ActionAuth(props) {
    const openPopup = props.openPopup;
    const setPop = props.setPop;
    const [password, setPassword] = useState("");
    const [showpassword,setshowpassword] = useState(false);
    const setnext=props.setnext;
    const classes=useStyles();
    const val="skilzen123";

    const passVerify=()=>{
      if(password===val)setnext()
      else alert("temporary password: skilzen123 ")
    }

      return (
        <div style={{width:'50px'}}>
        
            <Dialog open={openPopup} maxWidth="md">
                <div className={classes.for_dialog_close}>
                <button className={classes.for_btn_cls} onClick={()=>setPop(false)}>
                    <AiFillCloseCircle className={classes.for_icon_close}/>
                </button>
                </div>
                <p className={classes.for_dialog_title}>
                    Password required for this action:
                </p>
                <div className={classes.for_adj_pass_chk}>
                <TextField
                
                label="Password"
                type={showpassword?"text":"password"}
                variant="outlined"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                style={{margin: '30px 50px 10px 50px'}}
            />
            <div >
              <FormControlLabel
                value="end"
                control={<Checkbox color="primary" />}
                label="Show Password"
                labelPlacement="end"
                onChange={()=>{setshowpassword(!showpassword)}}
                style={{margin: ' 0px 45px 10px'}}
              />
            </div>
            

            </div>
            <div className={classes.for_submit_auth}>
              <button  className="apply_btn card_btn signInBtn "
              onClick={passVerify}
              >
                    Submit
              </button>
            </div>
                {/* <TextField
                    error
                    id="outlined-error"
                    placeholder="Password please"
                    variant="outlined"
                    style={{margin: '50px 50px'}}
                    /> */}
            </Dialog>
            </div>
        
    )
}

const ColumnOrder=[
  "Recruiter name",
  "Posted on",
  "Reported by",
  "Reported date",
 ]
 const role='Software Engineer'
 const list = [
  {
    title: "Marketing Manager",
    postedOn: "10/02/2021",
    postedBy: "Robert ",
    reportedDate: "11/03/2021",
    reportedBy: "Nicolas Cage",
  },
  {
    title: "Software Developer",
    postedOn: "10/02/2021",
    postedBy: "Andrew James",
    reportedDate: "11/03/2021",
    reportedBy: "Sanjay Kumar",
  },
  {
    title: "Digital Marketing",
    postedOn: "10/02/2021",
    postedBy: "Ashish Hemrajani",
    reportedDate: "11/03/2021",
    reportedBy: "Paul Hanks",
  },
  
];

const ReportTextDefault="This is a Scam. The Company is not providing any details of it and asking to pay some amount of money.This is a Scam. The Company is not providing any details of it and asking to pay some amount of money.This is a Scam. The Company is not providing any details of it and asking to pay some amount of money"

export function SpamReportsList({ToggleSpamList}) {
  const classes=useStyles();
  const [reportTextState,setReportTextState] = useState(false);
  const [reportText,setReportText] = useState('')
  return (
    <Dialog open={true} maxWidth="lg" scroll="paper" className={classes.spamListRoot} onClose={ToggleSpamList}>
        <h3>Spam reports of {role}</h3>
        <div className="dashboard__jobsPostedTaable">
          <div className="table__responsive">
            <table className="JobsPosted__table">
              <thead>
                <tr>
                  <th
                    className="jobsPosted__tableHead jobsPosted__row"
                    style={{ textAlign: "center" }}
                  >
                    <Checkbox />
                  </th>
                  {ColumnOrder.map((head) => (
                    <th
                      className="jobsPosted__tableHead jobsPosted__row"
                      onClick={() => {}}
                    >
                      {head}
                    </th>
                  ))}
                  <th
                    className="jobsPosted__tableHead jobsPosted__row"
                    style={{ textAlign: "center" }}
                    colSpan={3}
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {list.map((spam, _id) => (
                  <SpamRow
                    setReportText={setReportText}
                    setReportTextState={setReportTextState}
                    spam={spam}
                    even={_id % 2 ? false : true}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {reportTextState&&
          <>
            <h5>Report Text:</h5>
            {reportText}
          </>
        }
    </Dialog>
      
  )
}


const SpamRow = ({ spam, even,setReportTextState,setReportText }) => {

  return (
    <>
    <tr
      style={{
        backgroundColor: even ? "#F4F5F8" : "#FFFFFF",
        border: "1px solid #E5E5E5",
      }}
    >
      <td className="jobsPosted__row">
        <Checkbox />
      </td>
      <td className="jobsPosted__row">
        <h3 className="jobsPostedtable_cell m20">{spam.postedBy}</h3>
      </td>
      <td className="jobsPosted__row">
        <h3 className="jobsPostedtable_cell m20">{spam.postedOn}</h3>
      </td>

      <td className="jobsPosted__row">
        <h3 className="jobsPostedtable_cell m20">{spam.reportedBy}</h3>
      </td>
      <td className="jobsPosted__row">
        <h3 className="jobsPostedtable_cell m20">{spam.reportedDate}</h3>
      </td>
      {
        <>
          <td className="jobsPosted__row" onClick={()=>{setReportTextState(true);setReportText(ReportTextDefault)}}>
            <AiFillInfoCircle style={{fontSize:20,color:'black',marginTop:-5,cursor:'pointer'}} />
          </td>
        </>
      }
    </tr>
  </>
  );
};