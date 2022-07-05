import { makeStyles, Paper } from '@material-ui/core'
import { PeopleOutlineTwoTone } from '@material-ui/icons'
import React, { useState } from 'react'
import PageHead from '../../components/PageHead'
import EmployeeForm from './EmployeeForm'
import useTable from '../../components/useTable'
import {TableRow, TableCell, TableBody} from '@material-ui/core'
import * as employeeService from "../../services/employeeService"
const useStyle = makeStyles(theme=>({
  pageContent:{
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  }
}))

const  headCells = [
  {id:'fullName',lable:'Employee Name'},
  {id:'email', lable:'Email address'},
  {id: 'mobile',lable: 'Mobile Number'},
  {id:'department', lable: 'Department'}
]

const Employees = () => {
  const classes = useStyle()
  const [records, setRecords] = useState(employeeService.getAllEmployees())
  const {TblContainer,TblHead} = useTable(records, headCells);
  return (
    <>
      <PageHead
        title = "New Employee"
        subTitle = "Form design with validation"
        icon = {<PeopleOutlineTwoTone />}
      />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
        <TblContainer>
          <TblHead />
          <TableBody>
            {
              records.map((item, value) =>
              (
                <TableRow key={value}>
                  <TableCell>{item.fullName}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.mobile}</TableCell>
                  <TableCell>{item.department}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </TblContainer>
      </Paper>
    </>
  )
}

export default Employees