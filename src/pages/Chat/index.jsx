import React from "react";
import { Sidebar } from "react-pro-sidebar";
import { Button, Img, Input, List, Text } from "components";
import { CloseSVG } from "../../assets/images";
import SidebarPage from "components/SideNav/sidenav";
import Navbar from "components/NavBar/navbar";

const ChatPage = () => {
  return (
    <div className="flex flex-row">
      <div>
        <SidebarPage />
      </div>
        <Navbar pageName="Chat" />
    </div>
  );
};


export default ChatPage;
