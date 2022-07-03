import React from 'react'
import PropTypes from 'prop-types'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import AdapterDateFns from '@date-io/date-fns'
const DatePicker = props => {
  const {name, label, value, onChange} = props
  
  const convertToDefEventPara =(name, value) =>({
    target:{
      name, value
    }
  })
  return (
    <>chua xog</>
    // <MuiPickersUtilsProvider utils={AdapterDateFns}>
    //   <KeyboardDatePicker disableToolbar variant='inline' inputVariant='outlined'
    //     label ={label}
    //     name ={name}
    //     value ={value}
    //     onChange ={date => onChange(convertToDefEventPara(name, date))}
    //   />
    // </MuiPickersUtilsProvider>
  )
} 

DatePicker.propTypes = {}

export default DatePicker