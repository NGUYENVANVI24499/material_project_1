import { TextField } from '@material-ui/core'
import React from 'react'

const Input = (props) => {
    const {name, lable, error = null, value, onChange, ...other} = props
  return (
    
    <TextField
        label={lable}
        variant="outlined"
        color="primary"
        name={name}
        value={value}
        onChange = {onChange}   
        {...other}
       {...(error && {error:true ,helperText :error })}
  />
  )
}

export default Input