import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";
import SidebarPage from "components/SideNav/sidenav";

const NavBarPage = () => {
  const [group153value, setGroup153value] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 font-montserrat h-[1024px] mx-auto relative w-full">
        <div className="absolute h-[1024px] inset-[0] justify-center m-auto md:px-5 w-full">
          <div className="absolute h-[1024px] md:h-[924px] inset-[0] justify-center m-auto w-full">
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
          </div>

        </div>
      </div>
    </>
  );
};

export default NavBarPage;
