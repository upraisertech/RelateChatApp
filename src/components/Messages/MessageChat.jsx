import { messages } from "./data";
import { Button, Img, List, Text } from "components";

const MessageChats = () => {
  return (
    <div className="">
        <div className="w-full">
          <div className="h-[600px] overflow-auto w-full">
            <Img
              className="relative h-auto m-auto py-6 object-cover w-full"
              src="images/img_seamlesspatter.png"
              alt="seamlesspatter"
            />
            <div className="relative top-[-57rem] flex-col inset-[0] justify-center m-auto w-[93%]">
              <Text
                className="text-center text-base mb-5 text-gray-900"
                size="txtMontserratRomanSemiBold16"
              >
                Today
              </Text>
              
              {messages.map(({ id, text, user }) => (
                <div key={id} className="mb-3">
                  {user.id === "u1" ? (
                    <div className="flex gap-2 justify-start">
                      <img
                        src="/images/img_ellipse4_2.png"
                        alt=""
                        className="w-7 h-7 rounded-full"
                      />
                      <div className="p-2 rounded-lg !rounded-tl-none bg-[#0277BD] text-[white] max-w-[80%]">
                        {text}
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-2 justify-end">
                      <div className="p-2 rounded-lg !rounded-tr-none bg-[#004C8C] text-[white] max-w-[80%]">
                        {text}
                      </div>
                      <img
                        src="/images/img_ellipse4_1.png"
                        alt=""
                        className="w-7 h-7 rounded-full"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
};

export default MessageChats;
