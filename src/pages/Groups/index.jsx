import React from "react";
import SidebarPage from "../../components/SideNav/sidenav";
import Navbar from "../../components/NavBar/navbar";

const GroupsPage = () => {
  return (
    <div className="flex flex-row">
        <SidebarPage />
        <Navbar pageName="Groups" />
    </div>
  );
};


export default GroupsPage;
