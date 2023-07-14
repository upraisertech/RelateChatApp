import React from "react";
import { Sidebar } from "react-pro-sidebar";
import { Button, Img, Input, List, Text } from "components";
import { CloseSVG } from "../../assets/images";
import SidebarPage from "components/SideNav/sidenav";
import Navbar from "components/NavBar/navbar";
import AllMessage from "components/Messages/AllMessage";

const GroupsPage = () => {
  return (
    <div className="flex flex-row">
        <SidebarPage />
        <Navbar pageName="Groups" />
    </div>
  );
};


export default GroupsPage;
