import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DarkTheme from "./DarkTheme";
import { CircleUser } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "@/assets/Img/Logo1.png";
import logo2 from "@/assets/Img/Logo.png";

const Navbar = () => {
  const Navigate = useNavigate();
  const handleKeyChange = (e) => {
    if (
      e.key === "Enter" &&
      e.target.value !== "" &&
      /^[a-zA-Z0-9]/.test(e.target.value)
    ) {
      Navigate(`/SearchMovie/${e.target.value}`);
      e.target.value = "";
    }
  };
  return (
    <div className="relative z-50  w-full">
      <nav className="w-full h-[4rem] shadow-xl dark:bg-black/50 bg-white/50 flex justify-between items-center px-16 fixed top-0 ">
        <Link to="/">
          <img src={logo} className="w-[9rem] h-[2rem] dark:block hidden" />
          <img src={logo2} className="w-[9rem] h-[2rem] block dark:hidden" />
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
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "hover:text-blue-500"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/Popular"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "hover:text-blue-500"
            }
          >
            Popular{" "}
          </NavLink>
          <NavLink
            to="/Upcoming"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "hover:text-blue-500"
            }
          >
            Upcoming
          </NavLink>

          <NavLink
            to="/Wishlist"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "hover:text-blue-500"
            }
          >
            Wishlist
          </NavLink>
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
