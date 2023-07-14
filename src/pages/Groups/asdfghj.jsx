import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";
import SidebarPage from "components/SideNav/sidenav";

const DesktopThreePage = () => {
  const [group153value, setGroup153value] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 font-montserrat h-[1024px] mx-auto relative w-full">
        <div className="absolute bg-blue_gray-50 bottom-[0] md:h-[924px] h-[925px] sm:h-[947px] md:px-5 right-[28%] w-[37%] sm:w-full">
          <div className="h-[924px] sm:h-[947px] m-auto w-full">
            <Img
              className="h-[924px] m-auto object-cover w-full"
              src="images/img_seamlesspatter.png"
              alt="seamlesspatter"
            />
            <div className="absolute flex flex-col h-max inset-[0] justify-center m-auto w-[93%]">
              <Text
                className="ml-48 md:ml-[0] text-base text-gray-900"
                size="txtMontserratRomanSemiBold16"
              >
                Today
              </Text>
              <Img
                className="h-[60px] md:ml-[0] ml-[231px] mt-[22px]"
                src="images/img_rectangle6.svg"
                alt="rectangleSix"
              />
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[51px] mt-6 w-[90%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[60px] justify-start p-3.5"
                  style={{ backgroundImage: "url('images/img_group1195.svg')" }}
                >
                  <Text
                    className="ml-2.5 md:ml-[0] mr-[82px] text-center text-gray-50 text-xs"
                    size="txtMontserratRomanRegular12"
                  >
                    Hello, Good morning!
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[184px] mt-1 text-[8px] text-center text-gray-300"
                    size="txtMontserratRomanMedium8"
                  >
                    10:20am
                  </Text>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[76px] items-center justify-start mt-6 p-3 w-[58%] md:w-full"
                  style={{ backgroundImage: "url('images/img_group1195.svg')" }}
                >
                  <div className="flex flex-col gap-[5px] items-end justify-start mb-1">
                    <Text
                      className="leading-[136.30%] text-gray-50 text-xs w-full"
                      size="txtMontserratRomanRegular12"
                    >
                      How are you doing and how was yout night?
                    </Text>
                    <Text
                      className="text-[8px] text-center text-gray-300"
                      size="txtMontserratRomanMedium8"
                    >
                      10:21am
                    </Text>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[95px] items-center justify-start md:ml-[0] ml-[180px] mt-[118px] p-3 w-[58%] md:w-full"
                  style={{
                    backgroundImage: "url('images/img_rectangle6.svg')",
                  }}
                >
                  <div className="flex flex-col gap-1.5 items-end justify-start mb-1.5">
                    <Text
                      className="leading-[136.30%] text-gray-50 text-xs w-full"
                      size="txtMontserratRomanMedium12Gray50"
                    >
                      Lorem ipsum dolor sit amet consectetur adipiscing alit sed
                      do eiusmod tempor i.{" "}
                    </Text>
                    <Text
                      className="text-[8px] text-center text-gray-300"
                      size="txtMontserratRomanMedium8"
                    >
                      10:20am
                    </Text>
                  </div>
                </div>
              </div>
              <Text
                className="leading-[136.30%] mt-[102px] text-gray-50 text-xs w-[45%] sm:w-full"
                size="txtMontserratRomanMedium12Gray50"
              >
                Lorem ipsum dolor sit amet consectetur adipiscing{" "}
              </Text>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start md:ml-[0] ml-[17px] mt-[203px] w-[83%] md:w-full">
                <div className="flex flex-col items-center justify-start w-[6%] sm:w-full">
                  <div className="bg-light_blue-800 flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-4"
                      src="images/img_location.svg"
                      alt="location"
                    />
                  </div>
                </div>
                <div className="bg-gray-50 flex flex-row items-end justify-start ml-4 sm:ml-[0] p-1.5 rounded-[10px] w-[82%] sm:w-full">
                  <Img
                    className="h-5 my-1 w-5"
                    src="images/img_emojiemotions.svg"
                    alt="emojiemotions"
                  />
                  <Text
                    className="mb-1 ml-3 mt-2 text-blue_gray-900_7f text-center text-xs"
                    size="txtMontserratRomanMedium12"
                  >
                    Send message
                  </Text>
                  <div className="flex flex-row gap-2.5 items-center justify-start ml-[122px] w-auto">
                    <Img
                      className="h-[27px] w-[27px]"
                      src="images/img_attachment.svg"
                      alt="attachment"
                    />
                    <Img
                      className="h-5 w-5"
                      src="images/img_addaphoto.svg"
                      alt="addaphoto"
                    />
                  </div>
                </div>
                <div className="flex flex-col h-5 items-center justify-start ml-4 sm:ml-[0] w-5">
                  <Button className="bg-light_blue-800 flex h-5 items-center justify-center w-5">
                    <Img src="images/img_microphone.svg" alt="microphone" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[2%] my-auto w-[61%]">
            <Img
              className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
              src="images/img_ellipse4_50x50.png"
              alt="ellipseFour"
            />
            <Img
              className="h-[50px] md:h-auto mt-2.5 rounded-[50%] w-[50px]"
              src="images/img_ellipse5.png"
              alt="ellipseFive"
            />
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[70px] items-end justify-start md:ml-[0] ml-[66px] mt-[70px] p-[15px]"
              style={{ backgroundImage: "url('images/img_group1195.svg')" }}
            >
              <Text
                className="mb-1 mt-6 text-[8px] text-center text-gray-300"
                size="txtMontserratRomanMedium8"
              >
                10:20am
              </Text>
            </div>
            <List
              className="flex flex-col gap-6 items-center mt-[143px] w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-row gap-4 items-start justify-between w-full">
                <Img
                  className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                  src="images/img_ellipse6_50x50.png"
                  alt="ellipseSix"
                />
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[70px] items-end justify-end p-[15px]"
                  style={{ backgroundImage: "url('images/img_group1195.svg')" }}
                >
                  <Text
                    className="mb-1 mt-6 text-[8px] text-center text-gray-300"
                    size="txtMontserratRomanMedium8"
                  >
                    10:20am
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-row gap-4 items-start justify-between w-full">
                <Img
                  className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                  src="images/img_ellipse6_1.png"
                  alt="ellipseSix"
                />
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[133px] items-end justify-end p-[15px]"
                  style={{ backgroundImage: "url('images/img_group1195.svg')" }}
                >
                  <Text
                    className="mb-[31px] mt-[59px] text-[8px] text-center text-gray-300"
                    size="txtMontserratRomanMedium8"
                  >
                    10:20am
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="absolute h-[1024px] inset-[0] justify-center m-auto md:px-5 w-full">
          <div className="absolute h-[1024px] md:h-[924px] inset-[0] justify-center m-auto w-full">
            <div className="absolute bottom-[0] flex flex-col gap-6 items-center justify-end left-[11%] pt-4 px-4 w-1/4">
              <Input
                name="group153"
                placeholder="Search Groups.."
                value={group153value}
                onChange={(e) => setGroup153value(e)}
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
                    onClick={() => setGroup153value("")}
                    style={{
                      visibility:
                        group153value?.length <= 0 ? "hidden" : "visible",
                    }}
                    height={20}
                    width={20}
                    viewBox="0 0 20 20"
                  />
                }
              ></Input>
              <List
                className="flex flex-col gap-4 items-center w-full"
                orientation="vertical"
              >
                <div className="bg-gray-100 flex flex-1 flex-col items-center justify-end p-1 rounded-lg w-full">
                  <div className="flex flex-row items-start justify-start mt-1 w-[98%] md:w-full">
                    <Img
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      src="images/img_ellipse4_1.png"
                      alt="ellipseFour"
                    />
                    <div className="flex flex-col gap-[5px] items-start justify-start ml-3 mt-[3px]">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtMontserratRomanSemiBold16Bluegray900"
                      >
                        GDG Ikorodu
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
                <div className="bg-gray-100 flex flex-1 flex-col items-center justify-end p-1 rounded-lg w-full">
                  <div className="flex flex-row items-start justify-start mt-1 w-[98%] md:w-full">
                    <Img
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      src="images/img_ellipse4_2.png"
                      alt="ellipseFour"
                    />
                    <div className="flex flex-col items-start justify-start ml-3 mt-1">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtMontserratRomanSemiBold16Bluegray900"
                      >
                        Ikeja Consultants
                      </Text>
                      <Text
                        className="mt-[3px] text-gray-600 text-xs"
                        size="txtMontserratRomanRegular12Gray600"
                      >
                        Lorem ipsum dolor sit amet{" "}
                      </Text>
                    </div>
                    <div className="bg-green-300 h-[15px] mb-[19px] ml-[67px] mt-4 rounded-[7px] w-[15px]"></div>
                  </div>
                </div>
                <div className="bg-gray-100 flex flex-1 flex-col items-center justify-end p-1 rounded-lg w-full">
                  <div className="flex flex-row items-start justify-start mt-1 w-[98%] md:w-full">
                    <Img
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      src="images/img_ellipse4.png"
                      alt="ellipseFour"
                    />
                    <div className="flex flex-col items-start justify-start ml-3 mt-1">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtMontserratRomanSemiBold16Bluegray900"
                      >
                        Today’s News
                      </Text>
                      <Text
                        className="mt-[3px] text-gray-600 text-xs"
                        size="txtMontserratRomanRegular12Gray600"
                      >
                        Lorem ipsum dolor sit amet{" "}
                      </Text>
                    </div>
                    <div className="bg-green-300 h-[15px] mb-[19px] ml-[67px] mt-4 rounded-[7px] w-[15px]"></div>
                  </div>
                </div>
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
                        Old Student’s Club
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
                <div className="bg-gray-100 flex flex-1 flex-col items-center justify-end p-1 rounded-lg w-full">
                  <div className="flex flex-row items-center justify-start mt-1 w-[98%] md:w-full">
                    <Img
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      src="images/img_ellipse4.png"
                      alt="ellipseFour"
                    />
                    <div className="flex flex-col items-start justify-start ml-[11px]">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtMontserratRomanSemiBold16Bluegray900"
                      >
                        Armys
                      </Text>
                      <Text
                        className="mt-[3px] text-gray-600 text-xs"
                        size="txtMontserratRomanRegular12Gray600"
                      >
                        Lorem ipsum dolor sit amet{" "}
                      </Text>
                    </div>
                    <div className="bg-green-300 h-[15px] mb-[19px] ml-[67px] mt-4 rounded-[7px] w-[15px]"></div>
                  </div>
                </div>
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
                        GDG Ikorodu
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
                <div className="bg-gray-100 flex flex-1 flex-col items-center justify-end p-1 rounded-lg w-full">
                  <div className="flex flex-row items-center justify-start mt-1 w-[98%] md:w-full">
                    <Img
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      src="images/img_ellipse4.png"
                      alt="ellipseFour"
                    />
                    <div className="flex flex-col items-start justify-start ml-[11px]">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtMontserratRomanSemiBold16Bluegray900"
                      >
                        Armys
                      </Text>
                      <Text
                        className="mt-[3px] text-gray-600 text-xs"
                        size="txtMontserratRomanRegular12Gray600"
                      >
                        Lorem ipsum dolor sit amet{" "}
                      </Text>
                    </div>
                    <div className="bg-green-300 h-[15px] mb-[19px] ml-[67px] mt-4 rounded-[7px] w-[15px]"></div>
                  </div>
                </div>
                <div className="bg-gray-100 flex flex-1 flex-col items-center justify-end p-1 rounded-lg w-full">
                  <div className="flex flex-row items-start justify-start mt-1 w-[98%] md:w-full">
                    <Img
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      src="images/img_ellipse4.png"
                      alt="ellipseFour"
                    />
                    <div className="flex flex-col items-start justify-start ml-3 mt-1">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtMontserratRomanSemiBold16Bluegray900"
                      >
                        Today’s News
                      </Text>
                      <Text
                        className="mt-[3px] text-gray-600 text-xs"
                        size="txtMontserratRomanRegular12Gray600"
                      >
                        Lorem ipsum dolor sit amet{" "}
                      </Text>
                    </div>
                    <div className="bg-green-300 h-[15px] mb-[19px] ml-[67px] mt-4 rounded-[7px] w-[15px]"></div>
                  </div>
                </div>
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
                        Old Student’s Club
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
                <div className="bg-gray-100 flex flex-1 flex-col items-center justify-end p-1 rounded-lg w-full">
                  <div className="flex flex-row items-center justify-start mt-1 w-[98%] md:w-full">
                    <Img
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      src="images/img_ellipse4.png"
                      alt="ellipseFour"
                    />
                    <div className="flex flex-col items-start justify-start ml-[11px]">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtMontserratRomanSemiBold16Bluegray900"
                      >
                        Armys
                      </Text>
                      <Text
                        className="mt-[3px] text-gray-600 text-xs"
                        size="txtMontserratRomanRegular12Gray600"
                      >
                        Lorem ipsum dolor sit amet{" "}
                      </Text>
                    </div>
                    <div className="bg-green-300 h-[15px] mb-[19px] ml-[67px] mt-4 rounded-[7px] w-[15px]"></div>
                  </div>
                </div>
                <div className="bg-gray-100 flex flex-1 flex-col items-center justify-end pt-1.5 px-1.5 rounded-lg w-full">
                  <div className="flex flex-row items-center justify-start mt-0.5 w-[99%] md:w-full">
                    <Img
                      className="h-12 md:h-auto rounded-[50%] w-[17%]"
                      src="images/img_ellipse4.png"
                      alt="ellipseFour"
                    />
                    <div className="flex flex-col items-start justify-start ml-3">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtMontserratRomanSemiBold16Bluegray900"
                      >
                        Ikeja Consultants
                      </Text>
                      <Text
                        className="mt-[3px] text-gray-600 text-xs"
                        size="txtMontserratRomanRegular12Gray600"
                      >
                        Lorem ipsum dolor sit amet{" "}
                      </Text>
                    </div>
                    <div className="bg-green-300 h-[15px] ml-[67px] my-4 rounded-[7px] w-[15px]"></div>
                  </div>
                </div>
              </List>
            </div>
            <div className="absolute flex flex-col h-max inset-y-[0] justify-start my-auto right-[3%] w-[24%]">
              <div className="flex flex-row gap-2 items-center justify-start w-2/5 md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_clear.svg"
                  alt="clear"
                />
                <Text
                  className="text-base text-blue_gray-900 text-center"
                  size="txtMontserratRomanSemiBold16Bluegray900"
                >
                  Contact info
                </Text>
              </div>
              <Text
                className="md:ml-[0] ml-[92px] mt-[121px] text-base text-blue_gray-900 text-center"
                size="txtMontserratRomanSemiBold16Bluegray900"
              >
                Ikeja Consultants
              </Text>
              <Text
                className="md:ml-[0] ml-[120px] mt-[7px] text-center text-gray-600 text-xs"
                size="txtMontserratRomanRegular12Gray600"
              >
                12 Participants
              </Text>
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[11px] mt-[23px] w-[97%] md:w-full">
                <div className="bg-white-A700 border border-blue-300 border-solid flex flex-col items-start justify-start p-0.5 rounded-[10px] w-[90%] md:w-full">
                  <Img
                    className="h-5 ml-0.5 md:ml-[0] w-5"
                    src="images/img_search_light_blue_900.svg"
                    alt="search_One"
                  />
                </div>
                <div className="flex flex-row items-start justify-between mt-[23px] w-full">
                  <Text
                    className="text-light_blue-900_a2 text-xs"
                    size="txtMontserratRomanMedium12Lightblue900a2"
                  >
                    Media, links and docs
                  </Text>
                  <div className="flex flex-row items-center justify-evenly">
                    <Text
                      className="h-[15px] text-light_blue-900_a2 text-xs"
                      size="txtMontserratRomanMedium12Lightblue900a2"
                    >
                      54
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <Img
                    className="h-[100px] md:h-auto object-cover rounded-lg w-[100px]"
                    src="images/img_rectangle262.png"
                    alt="rectangle262"
                  />
                  <Img
                    className="h-[100px] md:h-auto object-cover rounded-lg w-[100px]"
                    src="images/img_rectangle263.png"
                    alt="rectangle263"
                  />
                  <Img
                    className="h-[100px] md:h-auto object-cover rounded-lg w-[100px]"
                    src="images/img_rectangle264.png"
                    alt="rectangle264"
                  />
                </div>
                <div className="flex flex-row gap-[100px] items-start justify-start mt-6 w-auto">
                  <div className="flex flex-row gap-6 items-center justify-between w-[62%]">
                    <Img
                      className="h-6 w-6"
                      src="images/img_notificationimportant.svg"
                      alt="notificationimp"
                    />
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-base text-light_blue-800_a2"
                        size="txtMontserratRomanMedium16"
                      >
                        Mute notifications
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-6 w-6"
                    src="images/img_toggleoff.svg"
                    alt="toggleoff"
                  />
                </div>
                <div className="flex flex-row gap-[21px] items-start justify-start mt-4 px-[3px] w-[59%] md:w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_upload.svg"
                    alt="upload"
                  />
                  <Text
                    className="text-base text-light_blue-800_a2"
                    size="txtMontserratRomanMedium16"
                  >
                    Media visibility
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-start justify-start md:ml-[0] ml-[7px] mt-[285px] w-[36%] md:w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_block.svg"
                    alt="block"
                  />
                  <Text
                    className="text-base text-red-700_a2"
                    size="txtMontserratRomanMedium16Red700a2"
                  >
                    Exit Group
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[39px] mt-3.5 text-base text-red-700_a2"
                  size="txtMontserratRomanMedium16Red700a2"
                >
                  Report Group
                </Text>
                <div className="flex flex-row gap-3 items-center justify-start md:ml-[0] ml-[7px] mt-3 w-[36%] md:w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_computer.svg"
                    alt="computer"
                  />
                  <Text
                    className="text-base text-red-700_a2"
                    size="txtMontserratRomanMedium16Red700a2"
                  >
                    Clear Chat
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute bg-light_blue-800 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-end mx-auto p-2.5 top-[0] w-full">
              <Text
                className="md:mt-0 mt-9 text-center text-gray-50 text-xl"
                size="txtMontserratRomanSemiBold20"
              >
                Groups
              </Text>
              <Img
                className="h-5 md:ml-[0] ml-[233px] md:mt-0 mt-[54px] w-5"
                src="images/img_share.svg"
                alt="share"
              />
              <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[41px] md:mt-0 mt-[31px] w-[17%] md:w-full">
                <div className="flex flex-row gap-6 items-end justify-between w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_ellipse4_2.png"
                    alt="ellipseFive_One"
                  />
                  <div className="flex flex-col items-start justify-start mb-0.5 mt-2">
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
              <Img
                className="h-6 md:ml-[0] ml-[434px] md:mt-0 mt-[29px] w-6"
                src="images/img_notificationimportant_gray_50.svg"
                alt="notificationimp_One"
              />
              <Img
                className="h-[50px] md:h-auto ml-8 md:ml-[0] md:mt-0 my-[15px] rounded-[50%] w-[50px]"
                src="images/img_ellipse2.png"
                alt="ellipseTwo"
              />
              <Img
                className="h-6 md:ml-[0] ml-[31px] mr-[50px] md:mt-0 mt-[29px] w-6"
                src="images/img_morevert.svg"
                alt="morevert"
              />
            </div>
          </div>

          <SidebarPage />
          
          <div className="absolute flex flex-col md:gap-10 gap-[355px] justify-start right-[3%] top-[15%] w-[23%]">
            <div className="bg-blue-300 flex flex-col h-20 items-center justify-start md:ml-[0] ml-[113px] mr-[135px] p-[15px] rounded-[50%] w-20">
              <Img
                className="h-7 my-2.5"
                src="images/img_user.svg"
                alt="user"
              />
            </div>
            <div className="flex flex-row gap-[23px] items-start justify-between w-full">
              <Img
                className="h-5 w-5"
                src="images/img_noencryption.svg"
                alt="noencryption"
              />
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="text-base text-light_blue-800_a2"
                  size="txtMontserratRomanMedium16"
                >
                  Encryption
                </Text>
                <Text
                  className="text-light_blue-800_a2 text-xs w-full"
                  size="txtMontserratRomanRegular12Lightblue800a2"
                >
                  Messages are end-to-end encrypted. Tap to learn more
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupsPage;


