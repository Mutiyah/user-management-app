import React from 'react';
import {Link} from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

function BreadCrumbPage({page}) {

    const breadcrumbs = [
        <Typography underline="hover" key="1" color="inherit"  onClick={handleClick}>
          Your are here
        </Typography>,
        <Typography
          underline="hover"
          key="2"
          color="inherit"
          onClick={handleClick}
        >
          User Management
        </Typography>,
        <Typography key="3" color="text.primary">
          {page}
        </Typography>,
      ];
    return (
        <Stack spacing={2}>
        <Breadcrumbs separator=">" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
       
      </Stack>
    )
}

export default BreadCrumbPage
