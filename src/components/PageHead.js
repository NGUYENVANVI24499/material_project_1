import { Card, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles(theme=>({
  root:{
    backgroundColor: '#fdfdff'
  },
  pageHeader:{
    padding:theme.spacing(4),
    display:'flex',
    marginBottom:theme.spacing(2)
  },
  pageIcon:{
    display:'inline-block',
    padding: theme.spacing(2),
    color: '#3c44b1'
  },
  paddingTitle:{
    paddingLeft:theme.spacing(4),
    '& .MuiTypography-subtitle2':{
      opacity:'0.6'
    }
  }
}))
const PageHead = (props) => {
  const classes = useStyle()
  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.pageHeader}>
        <Card className = {classes.pageIcon}>
          {props.icon}
        </Card>  
        <div className={classes.paddingTitle}>
          <Typography
            variant='h6'
            component = 'div'
          >{props.title}</Typography>
          <Typography
            variant = 'subtitle2'
            component='div'
          >{props.subTitle}
          </Typography>
        </div>
      </div>
    </Paper>
  )
}

export default PageHead