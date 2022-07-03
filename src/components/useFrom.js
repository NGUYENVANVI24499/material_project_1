import { makeStyles } from '@material-ui/core';
import React , { useState }  from 'react'

export function useFrom (initialFvalues)  {

  const [values, setValues] = useState(initialFvalues);
  const handleInputChange = e =>{
    const {name , value} = e.target
    console.log(name + " =>"+ value)
    setValues({
      ...values,
      [name]:value
    })
  }
  return {
    values,
    setValues,
    handleInputChange

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
  return(
    <form className={classes.root} autoComplete = "off">
      {props.children}
    </form>
  )
}