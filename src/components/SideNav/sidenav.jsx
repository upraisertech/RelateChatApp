import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Sidebar } from "react-pro-sidebar";
import { Button, Img, Input, List, Text } from "components";
import { links, links2 } from "./data";

const SidebarPage = () => {
  const [open, setOpen] = useState(true);

  return (
      <Sidebar className="!sticky !w-[150px] fixed bg-blue-300 flex h-screen inset-y-[0] justify-start left-[0] my-auto overflow-auto top-[0]">
        <Link to="/" className="p-2 !opacity-100">
          <div className="border-b border-solid border-white-A700 flex flex-col items-center justify-end p-[30px] sm:px-5 w-full">
            <Text
            className="mt-2.5 text-2xl md:text-[22px] text-center text-gray-50 sm:text-xl"
            size="txtMontserratRomanBold24"
            >
              RELATE
            </Text>
          </div>
        </Link>
            <div className="flex-align-center flex-items-center flex-justify-center rounded-[10px] shadow-bs2">
              <ul className="p-[-21px]">
                {links.map(({ id, title, icon, url, isActive}) => (
                  <NavLink
                    to={url}
                    key={id}
                    end={true}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? "black" : "#004C8C",
                    })}
                    className=""
                  >
                    <Text
                      className="ml-[30px] mr-16 mt-[36px] text-base text-gray-50"
                      size="txtMontserratRomanBold16"
                    >
                      {title}
                    </Text>
                  </NavLink>
                ))}
              </ul>
            </div>
      </Sidebar>
  );
};

export default SidebarPage;