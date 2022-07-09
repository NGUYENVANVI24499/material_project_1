
import {  } from '@material-ui/styles';
import {  CssBaseline,makeStyles} from '@material-ui/core'
import SideMenu from './components/SideMenu'
import Header from './components/Header';
// import { ThemeProvider, createTheme } from '@mui/material/styles' ;
import {ThemeProvider, createTheme } from '@material-ui/core'
//import PageHead from './components/PageHead';
//import { PeopleOutlineTwoTone } from '@material-ui/icons';
import Employees from './pages/Employees/Employees';



const theme = createTheme({
  palette:{
    primary:{
      main:"#333996",
      light:"#3c44b126"
    },
    secondary:{
      main:"#f83245",
      light: "#f8324526"
    },
    background:{
      default: "#f4f5fd"
    },
  },
  
  overrides:{
    MuiAppBar:{
      root:{
        Transform:'translateZ(0)'
      }
    }
  }
})

const useStyles = makeStyles({
  appMain:{
    paddingLeft:'320px',
    with:'100px'
  }
})
function App() {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <SideMenu></SideMenu>
      <div className={classes.appMain}>
        <Header />
        {/* <PageHead 
          title = "Page Header"
          subTitle = "Page description"
          icon= {<PeopleOutlineTwoTone />}
        /> */}
        <Employees />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
