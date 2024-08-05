import {Popover } from "flowbite-react";
import React from "react";
import { GoBell } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { setTokenExpired, logout, setUser } from '../redux/slices/auth';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const logoutHandler = () => {
    dispatch(setTokenExpired());
    dispatch(logout());
    const navigate = useNavigate();

    navigate('/login')
  }

  const content = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
      <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-white">Profile</h3>
      </div>
      <div className="px-3 py-2">
       <Button handler={logoutHandler} name="Log out"/>
      </div>
    </div>
  );

  return (
    <div className="flex justify-between items-center p-4">
      <div>
        <h1 className="text-xs">Welcome Back!</h1>
        <p className="text-xl font-semibold">{user?.username}</p>
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
          <button className="relative text-2xl text-gray-600">
            <GoBell size={32} />{" "}
            <span className="absolute top-0 right-0 mt-1 mr-1 flex justify-center items-center bg-indigo-500 text-white font-semibold text-[10px] w-5 h-4 rounded-full border-2 border-white">
              7
            </span>
          </button>
          <Popover content={content} placement="left">
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
