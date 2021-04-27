import {React ,useState}from 'react'
import { Dialog,makeStyles,FormControlLabel,Checkbox,TextField } from '@material-ui/core';
import { AiFillCloseCircle } from "react-icons/ai";
const useStyles = makeStyles((theme) => ({
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
