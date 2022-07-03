import { Grid } from '@material-ui/core';
import React from 'react'
import  {Controls}  from '../../components/controls/Controls';
import {useFrom, Form} from '../../components/useFrom';
import * as employeeService from '../../services/employeeService';

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

const EmployeeForm = () => {

const {
  values,
  setValues,
  handleInputChange

} = useFrom(initialFvalues)

  return (
    <Form >
      <Grid container>
        <Grid item xs={6}>
        <Controls.Input 
          name="fullName"
          lable ="Full Name" 
          value= {values.fullName}
          onChange ={handleInputChange}
        />
         <Controls.Input
          lable="Email"
          variant="outlined"
          name="email"
          value={values.email}
          onChange = {handleInputChange}
         
        />
        </Grid>
        <Grid item sx={6}>
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
            options ={employeeService.getDepartmentCollection}
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
        </Grid>
      </Grid>
    </Form>
  )
}

export default EmployeeForm