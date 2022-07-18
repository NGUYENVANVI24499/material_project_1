import { InputAdornment, makeStyles, Paper, Toolbar } from '@material-ui/core'
import { EditOutlined, PeopleOutlineTwoTone } from '@material-ui/icons'
import React, { useState } from 'react'
import PageHead from '../../components/PageHead'
import EmployeeForm from './EmployeeForm'
import useTable from '../../components/useTable'
import {TableRow, TableCell, TableBody} from '@material-ui/core'
import * as employeeService from "../../services/employeeService"
import {Controls} from "../../components/controls/Controls"
import {Search} from '@material-ui/icons'
import AddIcon from '@material-ui/icons/Add';
import Popup from '../../components/Popup'
import CloseIcon from '@material-ui/icons/Close';
import Notification from '../../components/Notification'
const useStyle = makeStyles(theme=>({
  pageContent:{
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  },
  searchInput:{
    width:'75%'
  },
  newButton:{
    position:'absolute',
    right:'10px'
  }
}))

const  headCells = [
  {id:'fullName',lable:'Employee Name'},
  {id:'email', lable:'Email address'},
  {id: 'mobile',lable: 'Mobile Number'},
  {id:'department', lable: 'Department'},
  {id:'actions', label:'Actions', disableSorting:true}
]

const Employees = () => {
  const classes = useStyle()
  const [recordForEdit, setRecordForEdit] = useState(null)
  const [records, setRecords] = useState(employeeService.getAllEmployees())
  const [filterFn, setFilterFn] = useState({fn:items => {return items}})
  const[openPopup, setOpenPopup] = useState(false)

  const [notify, setNotify] = useState({isOpent : false, message:'',type:''})
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

  const addOrEdit = (employee, resetForm)=>{
    if(employee.id ==0)
      employeeService.insertEmployee(employee)
      else
      employeeService.updateEmployee(employee)
    resetForm()
    setRecordForEdit(null)
    setOpenPopup(false)
    setRecords(employeeService.getAllEmployees())
    setNotify({
      isOpent:true,
      message: 'Submitted successfully',
      type:'success'
    })
  }

  const openInPopup = item =>{
    setRecordForEdit(item)
    setOpenPopup(true)

  }
  const onDelete = id =>{
    console.log(id)
    if(window.confirm('Are you sure to delete this record')){
      employeeService.deleteEmployee(id)
      setRecords(employeeService.getAllEmployees())
      setNotify({
        isOpent:true,
        message: 'deleted successfully',
        type:'error'
      })
    }
  }
  return (
    <>
      <PageHead
        title = "New Employee"
        subTitle = "Form design with validation"
        icon = {<PeopleOutlineTwoTone />}
      />
      <Paper className={classes.pageContent}>
        
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
          <Controls.Button
            className ={classes.newButton}
            text = "Add New"
            variant = "outlined"
            startIcon ={<AddIcon />}
            onClick = {()=>{setOpenPopup(true);setRecordForEdit(null)}}
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
                  <TableCell>
                    <Controls.ActionButton
                      color= "primary"
                      onClick ={()=>{openInPopup(item)}}
                      >
                      <EditOutlined fontSize='small'></EditOutlined>
                    </Controls.ActionButton>
                    <Controls.ActionButton
                      color= "secondary"
                      onClick ={()=>{
                          onDelete(item.id)
                        
                        }}
                      >
                      <CloseIcon fontSize='small'></CloseIcon>
                    </Controls.ActionButton>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
      <Popup
        title ="Emloyee From"
        openPopup ={openPopup}
        setOpenPopup = {setOpenPopup}
      >
        <EmployeeForm 
          recordForEdit ={recordForEdit}
          addOrEdit ={addOrEdit}
        />
      </Popup>
      <Notification 
        notify = {notify}
        setNotify = {setNotify}
      />
    </>
  )
}

export default Employees