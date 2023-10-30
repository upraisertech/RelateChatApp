import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userMessages } from "./data";
import AllMessage from "./AllMessage";

const AllMessages = () => {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const activeUsername = urlParams.get('username'); // Assuming your URL is like: /chat?username=JohnDoe

  // const { username } = useParams();

  return (
    <>
      <div className="bg-white_A700 flex flex-col mt-6 font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-[100%] md:w-full">
          <h2 className="text-[white] w-auto items-start justify-start mb-3 items-start justify-start" variant="body5">
            All Messages
          </h2>
        </div>
        <div className="bg-[white] flex flex-col h-screen w-full gap-5 overflow-y-auto items-start justify-start mb-5 p-5 rounded-md">
          {userMessages.map(({ id, img, username }) => {
            return (
              <div key={id} onClick={() => navigate(`/messages-chat/?username=${username}`)}>
                <AllMessage
                  username={username}
                  activeUsername={activeUsername}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllMessages;
