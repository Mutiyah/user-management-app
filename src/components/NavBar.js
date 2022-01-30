import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import HubIcon from '@mui/icons-material/Hub';
import PersonIcon from '@mui/icons-material/Person';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

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

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

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

const NavBar = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

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

  const handleDrawerClose = () => {
        setOpen(false);
  };

  const drawerLinks = [
      {id: 1, icon: <HomeIcon />, text : "Dashboard", linkTo: "/dashboard"},
      {id: 2, icon: <HubIcon />, text : "Users", linkTo: "/users"},
      {id: 3, icon: <PersonIcon />, text : "My Profile", linkTo: "/my-profile"},
      {id: 4, icon: <EnhancedEncryptionIcon />, text : "Password", linkTo: "/password"},

    ]

  return (
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
                paddingLeft: `${open ? "10px" : "85px"}`,
              marginRight: '36px',
              ...(!open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>

          <form>
              <input type="search" />
          </form>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
          <div onMouseEnter={mouseEnterEvent} style={{backgroundColor: '#2a403d', color: '#fff', height:'100%'}}>
            <h4 style={{textAlign: "center"}}>UM</h4>
        <Divider />
            <ul>
                {drawerLinks.map(links => (<Link key={links.id} to={links.linkTo}>
                    <li><span>{links.icon}</span> <span>{links.text}</span></li>
                </Link>))}
            </ul>

        <List  >
          <ListItem button>
            <ListItemIcon >
                <HomeIcon  />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
                <HubIcon style={{color: '#fff'}} />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
                <PersonIcon style={{color: '#fff'}} />
            </ListItemIcon>
            <ListItemText primary="My Profile" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
                <EnhancedEncryptionIcon style={{color: '#fff'}} />
            </ListItemIcon>
            <ListItemText primary="Change Password" />
          </ListItem>
        </List>
        </div>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* <DrawerHeader />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
         
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
        
        </Typography> */}

      </Box>
    </Box>
  );
}

export default NavBar;
