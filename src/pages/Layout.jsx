import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      {/* Add top padding equal to Navbar height */}
      <main className="pt-16 sm:pt-[4rem] md:pt-[4rem]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
