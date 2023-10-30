import React from "react";
import { Button, Img, Input, List, Text } from "../";
import Message from "../Messages/index";

const NavBarPage = ({ pageName }) => {
  const [group153value, setGroup153value] = React.useState("");

  return (
    <>
      <nav className="bg-light_blue-800 items-center justify-center py-2.5 h-[101px] w-full">
        <div className="flex flex-row justify-center items-center gap-[90px] ml-3 mr-3">
          <Text
            className="text-start text-gray-50 text-xl"
            size="txtMontserratRomanSemiBold20"
          >
            {pageName}
          </Text>

          <div className="flex items-center justify-center mt-[24px] w-full">
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

          <div className="flex flex-row gap-7 mt-3 items-center justify-center w-[40%]">
            <Img
              className="h-6 w-6"
              src="images/img_notificationimportant_gray_50.svg"
              alt="notificationimp_One"
            />
            <Img
              className="h-[50px] rounded-[50%] w-[50px]"
              src="images/img_ellipse2.png"
              alt="ellipseTwo"
            />
            <Img
              className="h-6 w-6"
              src="images/img_morevert.svg"
              alt="morevert"
            />
          </div>
        </div>
        <Message />
      </nav>
    </>
  );
};

export default NavBarPage;
