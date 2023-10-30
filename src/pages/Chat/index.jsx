import React from "react";
import SidebarPage from "../../components/SideNav/sidenav";
import Navbar from "../../components/NavBar/navbar";
import Message from "../../components/Messages/index";

const ChatPage = () => {
  return (
    <div className="flex flex-row">
      <div>
        <SidebarPage />
      </div>
      <div className="flex flex-col ml-[9.401em]">
        <Navbar pageName="Chat" />
        <Message />
      </div>
    </div>
  );
};


export default ChatPage;
