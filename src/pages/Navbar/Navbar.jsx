import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DarkTheme from "./DarkTheme";
import { CircleUser } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();
  const handleKeyChange = (e) => {
    if (
      e.key === "Enter" &&
      e.target.value !== "" &&
      /^[a-zA-Z0-9]/.test(e.target.value)
    ) {
      console.log("valueee", e.target.value);

      Navigate(`/SearchMovie/${e.target.value}`);
      e.target.value = "";
    }
  };
  return (
    <div className="relative z-50  w-full">
      <nav className="w-full h-[4rem] shadow-xl dark:bg-black/50 bg-white/50 flex justify-between items-center px-16 fixed top-0 ">
        <Link to="/">
          <strong className="cursor-pointer">Movie Hub</strong>
        </Link>
        <div className="flex items-center space-x-2">
          <Input
            type="text"
            className="w-[20rem]"
            placeholder="Search movies..."
            onKeyDown={(e) => handleKeyChange(e)}
          />
        </div>
        <div className="flex items-center space-x-12 font-medium">
          <Link to="/" className="hover:text-sky-700 active:text-sky-700">
            Home
          </Link>
          <Link
            to="/Popular"
            className="hover:text-sky-700 active:text-sky-700"
          >
            Popular{" "}
          </Link>
          <Link to="/Upcoming" className="hover:text-sky-700">
            Upcoming
          </Link>

          <Link to="/Wishlist" className="hover:text-sky-700">
            Wishlist
          </Link>
          <div>
            <DarkTheme />
          </div>
          <CircleUser cursor="pointer" width={40} height={35} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
