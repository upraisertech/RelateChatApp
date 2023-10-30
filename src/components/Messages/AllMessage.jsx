import React, { useState } from "react";
import { allMessage } from "./data";
import { Button, Img, Input, Text } from "../";
import { CloseSVG } from "../../assets/images";

const AllMessage = ({ pageName }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContacts, setFilteredContacts] = useState(allMessage);
  const [group153value, setGroup153value] = React.useState("");


  const handleSearch = (value) => {
    setSearchTerm(value);
    setFilteredContacts(
      allMessage.filter(
        ({ Username }) =>
          Username.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <>
      <div className="bg-white_A700 flex flex-col mt-6 mb-9 items-center justify-start px-2 mx-auto w-[80%]">
        <Input
          name="group153"
          placeholder={`Search ${pageName}..`}
          value={searchTerm}
          onChange={(e) => handleSearch(e)}
          className="font-medium leading-[normal] p-0 placeholder:text-light_blue-800 sm:pr-5 text-left text-light_blue-800 text-xs w-full"
          wrapClassName="bg-white-A700 border border-light_blue-800 border-solid flex mt-2 pl-1.5 pr-[35px] py-2.5 rounded-lg w-full"
          prefix={
            <Img
              className="cursor-pointer h-5 mr-2 my-auto"
              src="images/img_search.svg"
              alt="search"
            />
          }
          suffix={
            <CloseSVG
              fillColor="#0277bd"
              className="cursor-pointer h-5 my-auto"
              onClick={() => handleSearch("")}
              style={{
                visibility:
                  searchTerm?.length <= 0 ? "hidden" : "visible",
              }}
              height={20}
              width={20}
              viewBox="0 0 20 20"
            />
          }
        ></Input>
        <div id="content" className="bg-gray_50 w-full p-1 mt-3 py-[15px] rounded-md">
          <div className="grid grid-cols-1 gap-[30px] items-center justify-start ml-0.5 md:ml-[0] w-full">
            {filteredContacts.length > 0 ? (
              filteredContacts.map(({ id, img, Username }) => (
                <a key={id}>
                  <div className="bg-gray-100 flex flex-1 flex-col items-center justify-end p-1 rounded-lg w-full">
                    <div className="flex flex-row items-start justify-start mt-1 w-[98%] md:w-full">
                      <Img
                        className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                        src="images/img_ellipse4.png"
                        alt="ellipseFour"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-start ml-3 mt-[3px]">
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtMontserratRomanSemiBold16Bluegray900"
                        >
                          {Username}
                        </Text>
                        <Text
                          className="text-gray-600 text-xs"
                          size="txtMontserratRomanRegular12Gray600"
                        >
                          Lorem ipsum dolor sit amet{" "}
                        </Text>
                      </div>
                      <div className="bg-green-300 h-[15px] mb-[19px] ml-[67px] mt-4 rounded-[7px] w-[15px]"></div>
                    </div>
                  </div>
                </a>
              ))
            ) : (
              <div className="not-found">
                <div className="">Not found</div>
              </div>
            )}
          </div>
        </div>
        <br />
      </div>
    </>
  );
};

export default AllMessage;

