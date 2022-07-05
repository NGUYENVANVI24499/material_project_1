import { makeStyles } from '@material-ui/core';
import React , { useState }  from 'react'

export function useFrom (initialFvalues, validateOnChange = false, validate )  {

  const [values, setValues] = useState(initialFvalues);
  const [errors, setErrors] = useState({})

  const handleInputChange = e =>{
    const {name , value} = e.target
    console.log(name + " =>"+ value)
    setValues({
      ...values,
      [name]:value
    })
    if(validateOnChange)
      validate({[name] : value})
  }

  const resetForm =()=>{
    setValues(initialFvalues)
    setErrors({})
  }

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  }
  
}

const useStyle = makeStyles(theme=>({
  root:{
    '& .MuiFormControl-root':{
      width:'80%',
      margin:theme.spacing(1)
    }
  }
}))
export function Form(props){
  const classes = useStyle()
  const {children, ...other} = props
  return(
    <form className={classes.root} autoComplete = "off" {...other}>
      {props.children}
    </form>
  )
}