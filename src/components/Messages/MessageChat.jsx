import { messages } from "./data";
import { Button, Img, List, Text } from "../";
import ChatBox from "./ChatBox";
import SendMessage from "./SendMessage";

const MessageChats = () => {
  return (
    <div className="flex-col bg-[#F8E9DB] h-screen w-full">
      <ChatBox />
      <div className="flex w-full">
        <SendMessage />
      </div>
    </div>
  );
};

export default MessageChats;
