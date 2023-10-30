import React from "react";
import SidebarPage from "../../components/SideNav/sidenav";
import Navbar from "../../components/NavBar/navbar";
import Message from "../../components/Messages/index";

const GroupsPage = () => {
  return (
    <div className="flex flex-row">
      <div>
        <SidebarPage />
      </div>
      <div className="flex flex-col ml-[9.401em]">
        <Navbar pageName="Groups" />
        <div className="ml-3"><Message /></div>
      </div>
    </div>
  );
};


export default GroupsPage;
