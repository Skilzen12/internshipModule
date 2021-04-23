import React , {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import logo from "../../../images/logo.png";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import Notification from '../Notification.js'
const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  backgroundwhite: {
    backgroundColor: "white",
  },
}));
export const Organization = ({ formData, setForm, navigation }) => {
  const { organization, email, mobile, strength, type } = formData;
  const [notify,setnotify] = useState({message:'',type:'',isOpen:false});
  const classes = useStyles();
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="internship__content__card my-5 p-5 signup__container">
        <img
          className="mb-5"
          src={logo}
          style={{ width: "50%" }}
          alt="skilzen logo"
        />
        <h3 className="text-center mb-4">Organization Details</h3>
        <TextField
          label="Organization name"
          name="organization"
          value={organization}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
          size="small"
        />
        <TextField
          label="Email"
          name="email"
          value={email}
          disabled
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
          size="small"
        />
        <TextField
          label="Phone"
          name="mobile"
          value={mobile}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          disabled
          fullWidth

          size="small"
        />
        <TextField
          label="Strength"
          name="strength"
          value={strength}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
          size="small"
        />
        <FormControl
          variant="outlined"
          fullWidth
          size="small"
          className={classes.formControl}
        >
          <InputLabel id="demo-simple-select-filled-label">
            Type of Organization
          </InputLabel>
          <Select
            className={classes.backgroundwhite}
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={type}
            onChange={setForm}
            name="type"
          >
            <MenuItem value={"business-to-business"}>Business to Business</MenuItem>
            <MenuItem value={"business-to-customer"}>Business to Customer</MenuItem>
          </Select>
        </FormControl>

        <button
          className="apply_btn card_btn"
          onClick={(e) => {
            e.preventDefault();
            if(formData.strength==="" || formData.type==="" || formData.organization==""){
              setnotify({message:'Fields cannot be empty!',isOpen:true,type:'error'});
              setTimeout(()=>{
                setnotify({message:'',isOpen:false,type:''})
              },3000)
            }
            else 
              navigation.next();
          }}
        >
          Next
        </button>
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
