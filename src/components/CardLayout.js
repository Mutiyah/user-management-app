import React from "react";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import classes from './styles/Nav.module.css';


function CardLayout(props) {
  // const widthSize = 
  return (
    <Card style={{width: '100%'}} className={classes.cad}>
      <CardContent>
        {props.children}
      </CardContent>
    </Card>
  );
}

export default CardLayout;
