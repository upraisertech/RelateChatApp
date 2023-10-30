import React from "react";
import AllMessage from "./AllMessages/index";
import MessageChats from "./MessageChat";

const MessagePage = () => {
  return (
    <div className="flex flex-row mt-[6em] w-[100%]">
      <AllMessage />
      <MessageChats />
      <AllMessage />
    </div>
  );
};


export default MessagePage;
