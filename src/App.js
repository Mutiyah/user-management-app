import React, {useRef, useEffect} from "react";
import { BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import {FormTag} from './components/styles/NavBar.styled';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';

import HomePage from "./components/HomePage";
import DashboardPage from "./components/DashboardPage";
import UserPage from "./components/UserPage";
import ProfilePage from "./components/ProfilePage";
import PasswordPage from "./components/PasswordPage";
import Navs from "./components/Navs";


const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   padding: theme.spacing(0, 1),
//   ...theme.mixins.toolbar,
// }));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    // backgroundColor: '#2a403d',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

function App() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  }, [])


  const handleDrawerOpen = () => {
      if(!open){
    setOpen(true);
      }
      else{
          setOpen(false)
      }
  };

  const mouseEnterEvent = () => {
      setOpen(true)
  }

  const mouseLeaveEvent = () => {
    setOpen(false)
}

  
  return (
    <div className="app">
    <BrowserRouter>
    
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      <AppBar position="fixed" open={open} style={{backgroundColor: "#748B6F", border:"none", outline:"none"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            style={{display: "block"}}
            sx={{
                paddingLeft: `${open ? "10px" : "80px"}`,
              marginRight: '30%',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <div style={{width:'100%', display: 'flex', justifyContent: 'space-between'}}>

          <FormTag>
             <div><SearchIcon /> <input type="search" ref={inputRef} /></div> 
          </FormTag>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <Avatar alt="Remy Sharp" src="./images/passport.jpg" />
          <span style={{marginLeft: '20px'}}>Admin</span>
          </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
          <div onMouseEnter={mouseEnterEvent} style={{backgroundColor: '#2a403d', color: '#fff', height:'100%', paddingTop: '17px'}}>
            <h4 style={{textAlign: "center", paddingTop: '4px', paddingBottom: '4px'}}>UM</h4>
        <Divider style={{marginBottom: '20px'}} />
            <Navs onclick={mouseLeaveEvent} />
        </div>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }} style={{width: `calc(100% - ${drawerWidth}px)`}}>
      <Typography div style={{paddingTop: '80px'}}>
      <Switch>
            <Route exact path="/" component={DashboardPage } />
            <Route path="/users" component={UserPage } />
            <Route path="/my-profile" component={ProfilePage} />
            <Route path="/password" component={PasswordPage} /> 
        </Switch>
        </Typography>
      </Box>
    </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;



