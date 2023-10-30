import React from "react";
import AllMessage from "./AllMessage";
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
