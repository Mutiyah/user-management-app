import React from 'react'

function HomePage(props) {
    return (
        <div style={{marginTop: '100px', paddingleft:"00px"}}>
            {props.children}
        </div>
    )
}

export default HomePage



{/* <List  >
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
        </List> */}
