import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react'
import  {Controls}  from '../../components/controls/Controls';
import {useFrom, Form} from '../../components/useFrom';
import * as employeeService from '../../services/employeeService';
import SendIcon from '@material-ui/icons/Send';

const genderItems = [
  {id:'male', title:'Male'},
  {id:'female', title:'Female'},
  {id:'other', title:'Other'}
]
const initialFvalues = {
  id:0,
  fullName:'',
  email:'',
  mobile:'',
  city:'',
  gender:'male',
  departmentId:'',
  hireDate: new Date(),
  isPermanent:false,
}

const EmployeeForm = (props) => {
  const {addOrEdit, recordForEdit} = props
  const validate =(fleldValue = values)=>{
    let temp ={...errors}
    if('fullName' in fleldValue)
      temp.fullName = fleldValue.fullName?"":"this fied is required."
    if('email' in fleldValue)
      temp.email =(/$^|.+@.+..+/).test(fleldValue.email)?"":"Email is not valid"
    if('mobile' in fleldValue)
      temp.mobile = fleldValue.mobile.length>9 ? "": "Minimum 10"
    if('departmentId' in fleldValue)
      temp.departmentId = fleldValue.departmentId.length != 0 ? "" : "this field is required."
    if('city' in fleldValue)
      temp.city = fleldValue.city.length != 0 ? "":"this feld is required"
    setErrors({
      ...temp
    })
    if(fleldValue == values)
      return Object.values(temp).every(x => x == "")
  }
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm

  } = useFrom(initialFvalues, true , validate)

  const handleSubmit = e =>{
    e.preventDefault()
    if(validate()){
      addOrEdit(values, resetForm)
    }
  }

  useEffect(()=>{
    if(recordForEdit != null){
      setValues({
        ...recordForEdit
      })
    }
  },[recordForEdit])
  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
        <Controls.Input 
          name="fullName"
          lable ="Full Name" 
          value= {values.fullName}
          onChange ={handleInputChange}
          error = {errors.fullName}
        />
         <Controls.Input
          lable="Email"
          variant="outlined"
          name="email"
          value={values.email}
          onChange = {handleInputChange}
          error = {errors.email}
        />
        <Controls.Input
          lable="Mobile"
          variant="outlined"
          name="mobile"
          value={values.mobile}
          onChange = {handleInputChange}
          error = {errors.mobile}
        />
        <Controls.Input
          lable="City"
          variant="outlined"
          name="city"
          value={values.city}
          onChange = {handleInputChange}
          error = {errors.city}
        />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            name = "gender"
            label = "Grender"
            value = {values.gender}
            onChange = {handleInputChange}
            items = {genderItems} 
          />
          <Controls.Select 
            name = "departmentId"
            label = "Department"
            value = {values.departmentId}
            onChange = {handleInputChange}
            options ={employeeService.getDepartmentCollection()}
            error = {errors.departmentId}
          />
          <Controls.DatePicker
            name ="hireDate"
            label ="hireDate"
            value ={values.hireDate}
            onChange ={handleInputChange}
          />
          <Controls.Checkbox 
            name = "isPermanent"
            label = "Permanent Employee"
            value = {values.isPermanent}
            onChange ={handleInputChange}
          />
          <div>
            <Controls.Button
              type ="submit"
              variant = "outlined"
              startIcon = {<SendIcon />}
              color ="primary"
              text ="Submit"
            />
            <Controls.Button
              variant = "outlined"
              color ="default"
              text ="Reset"
              onClick = {resetForm}
            />
          </div>
        </Grid>
      </Grid>
    </Form>
  )
}

export default EmployeeForm