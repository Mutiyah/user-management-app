import React from "react";
import { Link } from "react-router-dom";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import HomeIcon from "@mui/icons-material/Home";
import HubIcon from "@mui/icons-material/Hub";
import PersonIcon from "@mui/icons-material/Person";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import navStyles from './styles/Nav.module.css';

function Navs({onclick}) {
  const drawerLinks = [
    { id: 1, icon: <HomeIcon className={navStyles.linkIcon} />, text: "Dashboard", linkTo: "/" },
    { id: 2, icon: <HubIcon className={navStyles.linkIcon} />, text: "Users", linkTo: "/users" },
    { id: 3, icon: <PersonIcon className={navStyles.linkIcon} />, text: "My Profile", linkTo: "/my-profile" },
    {
      id: 4,
      icon: <EnhancedEncryptionIcon className={navStyles.linkIcon} />,
      text: "Password",
      linkTo: "/password",
    },
  ];

  return (
    <List className={navStyles.listTag}>
      {drawerLinks.map((links) => (
        <Link to={links.linkTo} className={navStyles.linkTag} onClick={onclick}>
          <ListItem>
            <ListItemIcon>{links.icon}</ListItemIcon>
            <ListItemText primary={links.text} className={navStyles.linkText}/>
          </ListItem>
        </Link>
      ))}
    </List>
  );
}

export default Navs;
