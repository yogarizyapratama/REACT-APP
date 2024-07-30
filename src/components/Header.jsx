import { Button, Popover } from "flowbite-react";
import React from "react";
import { GoBell } from "react-icons/go";

const Header = () => {
    const notification = (
        <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
          <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white">Notifications</h3>
          </div>
          <div className="px-3 py-2">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aspernatur, nihil rem voluptas debitis a magni quod adipisci recusandae! Aliquid voluptates tenetur numquam inventore minima dolorem odit maxime temporibus nostrum.</p>
          </div>
        </div>
      );

  const menus = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
      <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-white">Menu</h3>
      </div>
      <div className="px-3 py-2">
        <Button className="w-full bg-indigo-500">Logout</Button>
      </div>
    </div>
  );

  return (
    <div className="flex justify-between items-center p-4">
      <div>
        <h1 className="text-xs">Welcome Back!</h1>
        <p className="text-xl font-semibold">Mastama</p>
      </div>
      <div className="flex items-center space-x-5">
        <div className="hidden md:flex">
          <input
            type="text"
            placeholder="Search..."
            className="bg-indigo-100/30 px-4 py-2 rounded-lg focus:outline-0 focus:ring-2"
          />
        </div>
        <div className="flex items-center space-x-5">
          <Popover content={notification} placement="left">
          <button className="relative text-2xl text-gray-600">
            <GoBell size={32} />{" "}
            <span className="absolute top-0 right-0 mt-1 mr-1 flex justify-center items-center bg-indigo-500 text-white font-semibold text-[10px] w-5 h-4 rounded-full border-2 border-white">
              7
            </span>
          </button>
          </Popover>
          <Popover content={menus} placement="left">
            <img
              className="w-8 h-8 rounded-full border-4 border-indigo-400 cursor-pointer"
              src="/vite.svg"
              alt=""
            />
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Header;
