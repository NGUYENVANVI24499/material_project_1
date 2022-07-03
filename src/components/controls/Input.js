import { TextField } from '@material-ui/core'
import React from 'react'

const Input = (props) => {
    const {name, lable, value, onChange} = props
  return (
    
    <TextField
        label={lable}
        variant="outlined"
        color="secondary"
        name={name}
        value={value}
        onChange = {onChange}
  />
  )
}

export default Input