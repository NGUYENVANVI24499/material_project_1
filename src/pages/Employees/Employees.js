import { InputAdornment, makeStyles, Paper, Toolbar } from '@material-ui/core'
import { PeopleOutlineTwoTone } from '@material-ui/icons'
import React, { useState } from 'react'
import PageHead from '../../components/PageHead'
import EmployeeForm from './EmployeeForm'
import useTable from '../../components/useTable'
import {TableRow, TableCell, TableBody} from '@material-ui/core'
import * as employeeService from "../../services/employeeService"
import {Controls} from "../../components/controls/Controls"
import {Search} from '@material-ui/icons'
const useStyle = makeStyles(theme=>({
  pageContent:{
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  },
  searchInput:{
    width:'75%'
  }
}))

const  headCells = [
  {id:'fullName',lable:'Employee Name'},
  {id:'email', lable:'Email address'},
  {id: 'mobile',lable: 'Mobile Number'},
  {id:'department', lable: 'Department',disableSorting:true}
]

const Employees = () => {
  const classes = useStyle()
  const [records, setRecords] = useState(employeeService.getAllEmployees())
  const [filterFn, setFilterFn] = useState({fn:items => {return items}})

  const {TblContainer,TblHead,TblPagination,recordsAfterPaginAndSorting} = useTable(records, headCells,filterFn);

  const handleSearch = e =>{
    let target = e.target
    setFilterFn({
      fn:items =>{
        if(target.value == "")
          return items
        else
          return items.filter(x => x.fullName.toLowerCase().includes(target.value))
      }
    })
  }

  return (
    <>
      <PageHead
        title = "New Employee"
        subTitle = "Form design with validation"
        icon = {<PeopleOutlineTwoTone />}
      />
      <Paper className={classes.pageContent}>
        {/* <EmployeeForm /> */}
        <Toolbar>
          <Controls.Input
            lable ="search Emloyees"
            className = {classes.searchInput}
            InputProps={{
              startAdornment: (<InputAdornment position='start'>
                <Search />
              </InputAdornment>)
            }}
            onChange = {handleSearch}
          />
        </Toolbar>

        <TblContainer>
          <TblHead />
          <TableBody>
            {
              recordsAfterPaginAndSorting().map((item, value) =>
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
        <TblPagination />
      </Paper>
    </>
  )
}

export default Employees