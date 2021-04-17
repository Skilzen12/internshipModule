import React from 'react'
import logo from "../../../images/logo.png";
import { Checkbox, FormControlLabel, makeStyles, TextField } from '@material-ui/core';
import { useHistory } from 'react-router';



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


const Login = () => {
    const classes=useStyles();
    const history=useHistory();
    return (
        <div className="internship__container__centered">
        <div className="internship__content__card p-5 signup__container">
          <img
            className="mb-5"
            src={logo}
            style={{ width: "50%" }}
            alt="skilzen logo"
          />
          <h3 className="text-center mb-4">Log In</h3>
          <form className={classes.rootSetProfile} noValidate autoComplete="off">
            <TextField
              className={classes.fullWidth}
              size="small"
              label="Email Adress"
              variant="outlined"
              fullWidth
            />
            <TextField
              size="small"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
            />
            <div className="m-0 w-100">
              <FormControlLabel
                value="end"
                control={<Checkbox color="primary" />}
                label="Show Password"
                labelPlacement="end"
              />
            </div>
            <button
              class="apply_btn card_btn"
              onClick={(e) => {
                e.preventDefault();
                history.replace('/home2');
              }}
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    )
}

export default Login
