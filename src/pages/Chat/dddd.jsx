import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, List, Text } from "components";

const ChatPage = () => {
  return (
    <>
      <div className="bg-white-A700 font-montserrat h-[1024px] mx-auto relative w-full">
        <div className="absolute bg-blue_gray-50 bottom-[0] md:h-[924px] h-[925px] sm:h-[944px] md:px-5 right-[28%] w-[37%] sm:w-full">
          <div className="h-[924px] sm:h-[944px] m-auto w-full">
            <Img
              className="h-[924px] m-auto object-cover w-full"
              src="images/img_seamlesspatter.png"
              alt="seamlesspatter"
            />
            <div className="absolute flex flex-col gap-[22px] h-max inset-[0] justify-center m-auto w-[95%]">
              <Text
                className="md:ml-[0] ml-[204px] text-base text-gray-900"
                size="txtMontserratRomanSemiBold16"
              >
                Today
              </Text>
              <Img
                className="h-[60px] md:ml-[0] ml-[243px]"
                src="images/img_rectangle6.svg"
                alt="rectangleSix"
              />
              <div className="flex flex-col items-start justify-start mr-[67px] w-[87%] md:w-full">
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
                  className="bg-cover bg-no-repeat flex flex-col h-[76px] items-center justify-start mt-3 p-3 w-[59%] md:w-full"
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
                  className="bg-cover bg-no-repeat flex flex-col h-[70px] items-end justify-start md:ml-[0] ml-[9px] mt-[221px] p-[15px]"
                  style={{ backgroundImage: "url('images/img_group1195.svg')" }}
                >
                  <Text
                    className="mb-1 mt-6 text-[8px] text-center text-gray-300"
                    size="txtMontserratRomanMedium8"
                  >
                    10:20am
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-end md:ml-[0] ml-[29px] mt-[271px] w-[93%] md:w-full">
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
          </div>
          <div className="absolute bottom-[23%] flex flex-col inset-x-[0] justify-start mx-auto w-[95%]">
            <div className="flex flex-col items-center justify-start w-[68%] md:w-full">
              <div className="flex flex-col justify-start w-full">
                <div className="flex flex-row gap-[254px] items-start justify-start ml-3.5 md:ml-[0] w-[86%] md:w-full">
                  <Img
                    className="h-4 mb-[7px]"
                    src="images/img_contrast.svg"
                    alt="contrast"
                  />
                  <Img
                    className="h-3 mt-2.5"
                    src="images/img_microphone_gray_50.svg"
                    alt="microphone_One"
                  />
                </div>
                <div className="bg-blue-300 flex flex-col items-end justify-end mt-0.5 p-[7px] w-full">
                  <div className="flex flex-col items-center justify-start mr-[7px] mt-1 w-[91%] md:w-full">
                    <div className="flex flex-row gap-[11px] items-start justify-between w-full">
                      <div className="h-6 relative w-[84%]">
                        <Img
                          className="h-6 m-auto object-cover w-full"
                          src="images/img_vn4.png"
                          alt="vn4"
                        />
                        <div className="absolute bg-gray-50 h-2.5 inset-y-[0] left-[5%] my-auto rounded-[5px] w-[11px]"></div>
                      </div>
                      <Img
                        className="h-[30px] md:h-auto mt-0.5 rounded-[50%]"
                        src="images/img_ellipse66.png"
                        alt="ellipseSixtySix"
                      />
                    </div>
                    <div className="flex flex-row items-start justify-between mt-1 w-[93%] md:w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-[8px] text-gray-300"
                          size="txtMontserratRomanRegular8"
                        >
                          0.45
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-[8px] text-gray-300"
                          size="txtMontserratRomanMedium8"
                        >
                          12.45pm
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[95px] items-center justify-start md:ml-[0] ml-[244px] mt-6 p-3 w-[51%] md:w-full"
              style={{ backgroundImage: "url('images/img_rectangle6.svg')" }}
            >
              <div className="flex flex-col gap-1.5 items-end justify-start mb-1.5">
                <Text
                  className="leading-[136.30%] text-gray-50 text-xs w-full"
                  size="txtMontserratRomanMedium12Gray50"
                >
                  Lorem ipsum dolor sit amet consectetur adipiscing alit sed do
                  eiusmod tempor i.{" "}
                </Text>
                <Text
                  className="text-[8px] text-center text-gray-300"
                  size="txtMontserratRomanMedium8"
                >
                  10:20am
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-[18px] items-start justify-between ml-3 md:ml-[0] mt-[118px] w-[98%] md:w-full">
              <Text
                className="leading-[136.30%] sm:mt-0 mt-3 text-gray-50 text-xs"
                size="txtMontserratRomanMedium12Gray50"
              >
                Lorem ipsum dolor sit amet consectetur adipiscing{" "}
              </Text>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[95px] items-center justify-start p-3"
                style={{ backgroundImage: "url('images/img_rectangle6.svg')" }}
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
          </div>
        </div>
        <div className="absolute h-[1024px] inset-[0] justify-center m-auto md:px-5 w-full">
          <div className="h-[1024px] m-auto w-full">
            <div className="h-[1024px] md:h-[924px] m-auto w-full">
              <div className="absolute bottom-[0] flex flex-col gap-6 items-center justify-end left-[11%] pt-4 px-4 w-1/4">
                <div className="bg-white-A700 border border-light_blue-800 border-solid flex flex-col items-start justify-start mt-2 p-1.5 rounded-lg w-full">
                  <Img
                    className="h-5 my-1 w-5"
                    src="images/img_search.svg"
                    alt="search"
                  />
                </div>
                <List
                  className="flex flex-col gap-4 items-center w-full"
                  orientation="vertical"
                >
                  <div className="bg-gray-100 flex flex-1 flex-col items-center justify-end p-1 rounded-lg w-full">
                    <div className="flex flex-row items-start justify-start mt-1 w-[98%] md:w-full">
                      <Img
                        className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                        src="images/img_ellipse4.png"
                        alt="ellipseFour"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-start ml-[11px] mt-[3px]">
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtMontserratRomanSemiBold16Bluegray900"
                        >
                          John Doe
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
                        src="images/img_ellipse4.png"
                        alt="ellipseFour"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-start ml-[11px] mt-[3px]">
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtMontserratRomanSemiBold16Bluegray900"
                        >
                          John Doe
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
                        src="images/img_ellipse4.png"
                        alt="ellipseFour"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-start ml-[11px] mt-[3px]">
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtMontserratRomanSemiBold16Bluegray900"
                        >
                          John Doe
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
                        src="images/img_ellipse4.png"
                        alt="ellipseFour"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-start ml-[11px] mt-[3px]">
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtMontserratRomanSemiBold16Bluegray900"
                        >
                          John Doe
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
                        src="images/img_ellipse4.png"
                        alt="ellipseFour"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-start ml-[11px] mt-[3px]">
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtMontserratRomanSemiBold16Bluegray900"
                        >
                          John Doe
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
                        src="images/img_ellipse4.png"
                        alt="ellipseFour"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-start ml-[11px] mt-[3px]">
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtMontserratRomanSemiBold16Bluegray900"
                        >
                          John Doe
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
                        src="images/img_ellipse4.png"
                        alt="ellipseFour"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-start ml-[11px] mt-[3px]">
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtMontserratRomanSemiBold16Bluegray900"
                        >
                          John Doe
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
                        src="images/img_ellipse4.png"
                        alt="ellipseFour"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-start ml-[11px] mt-[3px]">
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtMontserratRomanSemiBold16Bluegray900"
                        >
                          John Doe
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
                        src="images/img_ellipse4.png"
                        alt="ellipseFour"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-start ml-[11px] mt-[3px]">
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtMontserratRomanSemiBold16Bluegray900"
                        >
                          John Doe
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
                        src="images/img_ellipse4.png"
                        alt="ellipseFour"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-start ml-[11px] mt-[3px]">
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtMontserratRomanSemiBold16Bluegray900"
                        >
                          John Doe
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
                  <div className="bg-gray-100 flex flex-1 flex-col items-center justify-end pt-1.5 px-1.5 rounded-lg w-full">
                    <div className="flex flex-row items-center justify-start mt-0.5 w-[99%] md:w-full">
                      <Img
                        className="h-12 md:h-auto rounded-[50%] w-[17%]"
                        src="images/img_ellipse4.png"
                        alt="ellipseFour"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-start ml-[11px]">
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtMontserratRomanSemiBold16Bluegray900"
                        >
                          John Doe
                        </Text>
                        <Text
                          className="text-gray-600 text-xs"
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
                  className="md:ml-[0] ml-[124px] mt-[120px] text-base text-blue_gray-900 text-center"
                  size="txtMontserratRomanSemiBold16Bluegray900"
                >
                  John Doe
                </Text>
                <Text
                  className="ml-20 md:ml-[0] mt-[9px] text-center text-gray-600 text-xs"
                  size="txtMontserratRomanRegular12Gray600"
                >
                  Lorem ipsum dolor sit amet{" "}
                </Text>
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[11px] mt-[23px] w-[97%] md:w-full">
                  <div className="bg-white-A700 border border-blue-300 border-solid flex flex-col items-start justify-start md:ml-[0] ml-[5px] p-0.5 rounded-[10px] w-[90%] md:w-full">
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
                  <div className="flex flex-row gap-4 items-center justify-between w-full">
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
                  <div className="flex flex-row gap-[100px] items-start justify-start md:ml-[0] ml-[5px] mt-6 w-auto">
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
                  <div className="flex flex-row gap-6 items-start justify-start md:ml-[0] ml-[7px] mt-4 sm:pr-5 pr-7 w-[58%] md:w-full">
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
                  <div className="flex flex-row gap-3.5 items-center justify-start md:ml-[0] ml-[7px] mt-[319px] w-[49%] md:w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_block.svg"
                      alt="block"
                    />
                    <Text
                      className="text-base text-red-700_a2"
                      size="txtMontserratRomanMedium16Red700a2"
                    >
                      Block John Doe
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start md:ml-[0] ml-[7px] mt-[13px] w-[39%] md:w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_computer.svg"
                      alt="computer"
                    />
                    <Text
                      className="text-base text-red-700_a2"
                      size="txtMontserratRomanMedium16Red700a2"
                    >
                      Delete Chat
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute bg-light_blue-800 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-end mx-auto p-2.5 top-[0] w-full">
                <Text
                  className="md:mt-0 mt-[34px] text-center text-gray-50 text-xl"
                  size="txtMontserratRomanSemiBold20"
                >
                  Chat
                </Text>
                <Img
                  className="h-5 md:ml-[0] ml-[258px] md:mt-0 mt-[54px] w-5"
                  src="images/img_share.svg"
                  alt="share"
                />
                <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[41px] md:mt-0 mt-[31px] w-[17%] md:w-full">
                  <div className="flex flex-row gap-[23px] items-end justify-between w-full">
                    <Img
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      src="images/img_ellipse4.png"
                      alt="ellipseFive"
                    />
                    <div className="flex flex-col gap-[5px] items-start justify-start mt-2">
                      <Text
                        className="text-base text-gray-50"
                        size="txtMontserratRomanSemiBold16Gray50"
                      >
                        John Doe
                      </Text>
                      <Text
                        className="text-gray-300 text-xs"
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
            <Sidebar className="!sticky !w-[164px] bg-blue-300 flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto top-[0]">
              <div className="border-b border-gray-50 border-solid flex flex-col items-center justify-end p-[30px] sm:px-5 w-full">
                <Text
                  className="mt-2.5 text-2xl md:text-[22px] text-center text-gray-50 sm:text-xl"
                  size="txtMontserratRomanBold24"
                >
                  RELATE
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start mb-[697px] md:ml-[0] mt-[102px] mx-[50px]">
                <Text
                  className="text-base text-gray-50"
                  size="txtMontserratRomanBold16"
                >
                  Groups
                </Text>
                <Text
                  className="mt-[29px] text-base text-gray-50"
                  size="txtMontserratRomanBold16"
                >
                  Friends
                </Text>
                <Text
                  className="mt-8 text-base text-gray-50"
                  size="txtMontserratRomanBold16"
                >
                  Status
                </Text>
              </div>
            </Sidebar>
            <Img
              className="absolute h-20 right-[12%] rounded-[50%] top-[15%] w-20"
              src="images/img_ellipse6.png"
              alt="ellipseSix"
            />
          </div>
          <div className="absolute bg-green-300 h-[15px] right-[12%] rounded-[7px] top-[16%] w-[15px]"></div>
          <Text
            className="absolute bg-light_blue-900 h-[47px] justify-center left-[0] pb-[15px] pt-[11px] sm:px-5 px-[34px] rounded-br rounded-tr text-base text-gray-50 top-[13%] w-[134px]"
            size="txtMontserratRomanBold16"
          >
            Chat
          </Text>
        </div>
      </div>
    </>
  );
};

export default ChatPage;