import React from 'react'
import {AppBar, Toolbar, Grid,InputBase,makeStyles} from '@material-ui/core'
import { Badge, IconButton } from '@mui/material'
import { ChatBubbleOutline, NotificationsNoneOutlined, PowerSettingsNewRounded } from '@material-ui/icons'
import SearchIcon from '@material-ui/icons/Search';

const useStyle = makeStyles(theme =>({
  root:{
    backgroundColor: '#fff',
    transform:'translateZ(0)'
  },
  searchInput:{
    opacity: '0.6',
    padding: `0px ${theme.spacing(1)}`,
    fontSize: '0.8rem',
    '&:hover':{
      backgroundColor:'#f2f2f2'
    },
    '& .MuiSvgIcon-root':{
      marginRight: theme.spacing(1)
    }
  }
}))
const Header = () => {
  const classes = useStyle()
  return (
    <AppBar position='static' className={classes.root}>
      <Toolbar>
        <Grid container alignItems='center'>
          <Grid item >
            <InputBase
              placeholder='Search topics'
              className={classes.searchInput}
              startAdornment ={<SearchIcon fontSize='small'/>}
            />
          </Grid>
          <Grid item sm></Grid>
          <Grid item >
            <IconButton>
              <Badge badgeContent = {4} color = "secondary" >
                <NotificationsNoneOutlined fontSize='small'/>
              </Badge>
            </IconButton>

            <IconButton>
              <Badge badgeContent = {4} color = "primary" >
                <ChatBubbleOutline fontSize='small'/>
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNewRounded fontSize='small'/>
            </IconButton>
          </Grid>
          
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header