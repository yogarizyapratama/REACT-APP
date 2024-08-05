import React, { useState } from "react";

// ICONS
import { LuBox, LuUser, LuMessageSquare, LuCalendar } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSuitcase } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0)
  const [openSidebar, setopenSidebar] = useState(true)

  const handleLinkClick = (index) => {
    setActiveLink(index)
  }

  const SIDEBAR_LINKS = [
    { id: 1, path: "/", name: "Dashboard", icon: LuBox },
    { id: 2, path: "/members", name: "Members", icon: TbUsers },
    { id: 3, path: "/messages", name: "Messages", icon: LuMessageSquare },
    { id: 4, path: "/projects", name: "Projects", icon: FaSuitcase },
    { id: 5, path: "/clients", name: "Clients", icon: LuUser },
    { id: 6, path: "/work", name: "Work Plan", icon: LuCalendar },
  ];

  const burgerClickHandler = () => {
    setopenSidebar((state) => !state)
  }

  return (
    <div className={`md:w-56 md:block rounded-t-xl md:rounded-none md:max-h-screen fixed left-0 bottom-0 md:top-0 z-10 w-screen border-r py-8 px-4 bg-white overflow-hidden transition-max-height duration-500 ease-in-out ${
        openSidebar ? 'max-h-screen' : 'max-h-10'}`}>
      {/* LOGO */}
      <div className="flex justify-between items-center">
        {/* <img src="/vite.svg" alt="logo" className="w-28 hidden md:flex" />
        <img src="/logo_mini.svg" alt="logo" className="w-8 flex md:hidden" /> */}
        <span className="w-28 hidden md:flex font-bold" >NONAME</span>
        <span className="w-8 flex md:hidden justify-center font-bold">NN</span>
        <span className="md:hidden">
        {
            openSidebar ? (
                <IoCloseSharp className="class-pointer" onClick={burgerClickHandler}/>
            ):(
                <GiHamburgerMenu className="cursor-pointer" onClick={burgerClickHandler}/>
            )
        }
        </span>
      </div>

      {/* NAVIGATION LINKS */}
      <ul className={`mt-6 md:space-y-6 grid grid-cols-6 md:block overflow-y-auto max-h-screen`}>
        {SIDEBAR_LINKS.map((link, index) => (
          <li key={index} className={`font-medium rounded-md py-7 px-5 hover:bg-gray-100 hover:text-indigo-500 ${activeLink === index ? 'bg-indigo-100 text-indigo-500' : '' }`}>
            <Link to={link.path} className="flex items-center md:space-x-5 md:justify-normal justify-center" onClick={() => handleLinkClick((index))}>
              <span>{link.icon()}</span>
              <span className={`text-sm text-gray-500 hidden md:flex`}>{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      {/* NAVIGATION LINKS */}

      <div className="w-full hidden absolute bottom-5 left-0 px-4 py-2 cursor-pointer">
        <p className="flex items-center justify-center space-x-2 text-xs text-white py-2 px-5 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full">
          {" "}
          <span className="md:hidden block">?</span> <span className="hidden md:flex">Need Help ?</span>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
