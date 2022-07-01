import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import clsx from 'clsx'


const ButtonA = withStyles({

  root: {
    background:'red',
    color:'#fff'
    
  }

})(Button)


export default function Appas(){
  return <ButtonA> ddd</ButtonA>
}