import React from 'react'

import {Alert} from '@material-ui/lab'
import {Snackbar,} from "@material-ui/core";

const Notification = ({notify}) => {
  return (
    <Snackbar
      open = {notify.isOpen}
      autoHideDuration={3000}
      anchorOrigin = {{vertical:'top',horizontal:'center'}}
    >
      <Alert severity={notify.type} >
        {notify.message}
      </Alert>
    </Snackbar>
  )
}

export default Notification