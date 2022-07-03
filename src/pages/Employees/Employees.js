import { makeStyles, Paper } from '@material-ui/core'
import { PeopleOutlineTwoTone } from '@material-ui/icons'
import React from 'react'
import PageHead from '../../components/PageHead'
import EmployeeForm from './EmployeeForm'

const useStyle = makeStyles(theme=>({
  pageContent:{
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  }
}))
const Employees = () => {
  const classes = useStyle()
  return (
    <>
      <PageHead
        title = "New Employee"
        subTitle = "Form design with validation"
        icon = {<PeopleOutlineTwoTone />}
      />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
      </Paper>
    </>
  )
}

export default Employees