import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { ErrorBoundary } from 'react-error-boundary'

const Layout = () => {
  return (
    <div>
      <div className={`flex`}>
        <Sidebar />
        <div className="w-full md:ml-56">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
