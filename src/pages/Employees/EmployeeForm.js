import { FormControl, FormControlLabel, FormLabel, Grid ,makeStyles,Radio,RadioGroup,TextField} from '@material-ui/core';
import React from 'react'
import Input from '../../components/controls/Input';
import {useFrom, Form} from '../../components/useFrom';

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
  departmendId:'',
  hireDate: new Date(),
  isPermanent:false,
}

const EmployeeForm = () => {

const {
  values,
  setValues,
  handleInputChange

} = useFrom(initialFvalues)
console.log(values)
  return (
    <Form >
      <Grid container>
        <Grid item xs={6}>
        <Input 
          name="fullName"
          lable ="Full Name" 
          value= {values.fullName}
          onChange ={handleInputChange}
        />
         <TextField
          label="Email"
          variant="outlined"
          color="secondary"
          name="email"
          value={values.email}
          onChange = {handleInputChange}
         
        />
        </Grid>
        <Grid item sx={6}>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup row
              name='gender'
              value={values.gender}
              onChange = {handleInputChange}
            >
              <FormControlLabel value='male' control = {<Radio /> } label = 'Male'/>
              <FormControlLabel value='female' control = {<Radio /> } label = 'Female'/>
              <FormControlLabel value='other' control = {<Radio /> } label = 'Other'/>
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Form>
  )
}

export default EmployeeForm