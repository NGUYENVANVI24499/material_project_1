import { Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React from 'react'

const Notification = (props) => {
  const handleClose =(event, reason)=>{
    if(reason === 'clickaway'){
      return
    }
    setNotify({
      ...notify,
      isOpent:false
    })
  }
  const {notify, setNotify} = props
  return (
   <Snackbar
    open ={notify.isOpent}
    autoHideDuration ={3000}
    anchorOrigin={{vertical:'top', horizontal:'right'}}
    onClose ={handleClose}
    >
      <Alert severity={notify.type} onClose ={handleClose} >
        {notify.message }
      </Alert>
   </Snackbar>
  )
}

export default Notification