import { makeStyles } from '@material-ui/core';
import React , { useState }  from 'react'

export function useFrom (initialFvalues)  {
  console.log(initialFvalues)
  const [values, setValues] = useState(initialFvalues);
  const handleInputChange = e =>{
    const {name , value} = e.target
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
    <form className={classes.root}>
      {props.children}
    </form>
  )
}