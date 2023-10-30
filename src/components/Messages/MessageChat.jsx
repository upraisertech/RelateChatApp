import { messages } from "./data";
import { Button, Img, List, Text } from "../";
import ChatBox from "./ChatBox";
import SendMessage from "./SendMessage";

const MessageChats = () => {
  return (
    <div className="flex-col w-full">
      <ChatBox />
      <SendMessage />
    </div>
  );
};

export default MessageChats;
