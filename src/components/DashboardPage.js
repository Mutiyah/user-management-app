import React from 'react';
import {DashboardImage, Dashboard} from './styles/Dashboard.styled';
import BreadCrumbPage from './BreadCrumbPage';
import { HeaderTag } from './styles/UserPage.styled';

function DashboardPage() {
    return (
        <Dashboard >
            <BreadCrumbPage page="Dashboard" />
            <HeaderTag>Welcome, user!</HeaderTag>
            <p>Your role is: {"user"}</p>
           <DashboardImage src='./images/passport.jpg' alt="user" />
        </Dashboard>
    )
}

export default DashboardPage
