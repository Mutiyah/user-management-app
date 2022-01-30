import React from "react";
import BreadCrumbPage from "./BreadCrumbPage";
import CardLayout from "./CardLayout";
import UserTablePage from "./UserTablePage";
import {CardDiv, HeaderTag} from './styles/UserPage.styled';

function UserPage() {
  return (
    <div>
      <BreadCrumbPage page="Users" />
      <CardLayout>
        <HeaderTag>Users</HeaderTag>
        <UserTablePage />
      </CardLayout>

    </div>
  );
}

export default UserPage;
