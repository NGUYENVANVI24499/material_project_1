import React from 'react'
import { Button as MuiButton, makeStyles } from '@material-ui/core'
import { spacing } from '@mui/system'

const useStyle = makeStyles(theme=>({
  root:{
    margin: theme.spacing(0.5)
  },
  lable:{
    textTransform:'none'
  }
}))
const Button = (props) => {
  const {text, size, color, variant, onClick, startIcon, ...other} = props
  const classes = useStyle()
  return (
    <MuiButton
      variant={variant || "contained"}
      size = {size || "large"}
      color ={color || "primary"}
      onClick = {onClick}
      startIcon = {startIcon}
      classes={{root:classes.root, label:classes.lable}}
      {...other}
    >
      {text}
    </MuiButton>
  )
}

export default Button