
import {  } from '@material-ui/styles';
import {CssBaseline,makeStyles} from '@material-ui/core'
import './App.css';
import SideMenu from './components/SideMenu'
import Header from './components/Header';


const useStyles = makeStyles({
  appMain:{
    paddingLeft:'320px',
    with:'100px'
  }
})
function App() {
  const classes = useStyles()
  return (
    <>
    <SideMenu></SideMenu>
    <div className={classes.appMain}>
      <Header></Header>
    </div>
    <CssBaseline />
    </>
  );
}

export default App;
