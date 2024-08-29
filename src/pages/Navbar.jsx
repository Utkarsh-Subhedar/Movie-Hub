import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DarkTheme from "./DarkTheme";
import { CircleUser, CircleUserRound } from "lucide-react";

const Navbar = () => {
  return (
    <div className="relative z-30">
      <nav className="w-full h-[5rem] shadow-xl flex justify-between items-center px-16 fixed top-0 bg-transparent">
        <strong className="cursor-pointer">Movie Hub</strong>
        <div className="flex items-center space-x-2">
          <Input
            type="text"
            className="w-[20rem]"
            placeholder="Search movies..."
          />
          <Button type="submit">Search</Button>
        </div>
        <div className="flex items-center space-x-14 font-medium">
          <a href="#" className="hover:text-sky-700">
            Popular Movies{" "}
          </a>
          <a href="#" className="hover:text-sky-700">
            Upcoing
          </a>

          <a href="#" className="hover:text-sky-700">
            Wishlist
          </a>
          <DarkTheme />
          <CircleUser cursor="pointer" width={40} height={35} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
