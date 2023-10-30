import React from "react";
import { Button, Img, Input, List, Text } from "../";
import { UserAuth } from "../../context/AuthContext"

const NavBarPage = ({ pageName }) => {
  const [group153value, setGroup153value] = React.useState("");
  const { currentUser, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="flex flex-row bg-light_blue-800 fixed items-center justify-between py-2.5 gap-3 pl-8 z-50 h-[101px] w-full">
        <text
          className="text-start text-gray-50 text-xl w-[80%] xl:w-full"
        >
          {pageName}
        </text>

        <div className="flex items-center justify-center mt-[22px] w-full">
          <div className="flex flex-row gap-4 items-end justify-start">
            <Img
              className="h-5 w-5 mr-7"
              src="images/img_share.svg"
              alt="share"
            />
            <Img
              className="h-[50px] rounded-[50%] w-[50px]"
              src="images/img_ellipse4_2.png"
              alt="ellipseFive_One"
            />
            <div className="flex flex-col items-start justify-center mb-0.5 mt-2">
              <Text
                className="text-base text-gray-50"
                size="txtMontserratRomanSemiBold16Gray50"
              >
                Ikeja Consultants
              </Text>
              <Text
                className="mt-[3px] text-gray-300 text-xs"
                size="txtMontserratRomanRegular12Gray300"
              >
                Lorem ipsum dolor sit amet{" "}
              </Text>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-7 items-center justify-center w-full">
          <Img
            className="h-6 w-6"
            src="images/img_notificationimportant_gray_50.svg"
            alt="notificationimp_One"
          />
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="images/img_ellipse2.png" />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>{currentUser ? <button onClick={handleLogout}>Logout</button> : ""}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBarPage;
