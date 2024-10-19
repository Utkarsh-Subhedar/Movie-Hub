import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
