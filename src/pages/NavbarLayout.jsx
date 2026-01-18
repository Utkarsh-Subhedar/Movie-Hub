import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar/Navbar";

const NavbarLayout = () => {
  return (
    <div>
      <Navbar />
      {/* Add top padding equal to Navbar height */}
      <main className="pt-16 sm:pt-[4rem] md:pt-[4rem]">
        <Outlet />
      </main>
    </div>
  );
};

export default NavbarLayout;
