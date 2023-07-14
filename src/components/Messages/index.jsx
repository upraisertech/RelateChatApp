import React from "react";
import SidebarPage from "components/SideNav/sidenav";
import Navbar from "components/NavBar/navbar";
import AllMessage from "components/Messages/AllMessage";
import MessageChats from "./MessageChat";

const MessagePage = () => {
  return (
    <div className="flex flex-row mt-[4px] w-[100%]">
      <AllMessage />
      <MessageChats />
      <AllMessage />
    </div>
  );
};


export default MessagePage;
