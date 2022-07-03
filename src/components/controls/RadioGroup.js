import {  FormControl, FormControlLabel, FormLabel,makeStyles,Radio,RadioGroup as MuiRadioGroup } from '@material-ui/core';
import React from 'react'

const useStyle = makeStyles(theme=>({
    root:{
     
    }
}))
const RadioGroup = (props) => {
  const {name, label, value, onChange, items}= props;
  const classes = useStyle()
  return (
    <FormControl>
    <FormLabel>{label}</FormLabel>
    <MuiRadioGroup row className={classes.root}
      name={name}
      value={value}
      onChange = {onChange}
    >
    {
      items.map((item, index)=>(
        <FormControlLabel key={index} value={item.id} control = {<Radio /> } label = {item.title}/>
      ))
    }
    </MuiRadioGroup>
  </FormControl>
  )
}

export default RadioGroup