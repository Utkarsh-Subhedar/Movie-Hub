import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import DarkTheme from "./DarkTheme";
import { CircleUser, Menu, X } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "@/assets/Img/Logo1.png";
import logo2 from "@/assets/Img/Logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleKeyChange = (e) => {
    if (
      e.key === "Enter" &&
      e.target.value !== "" &&
      /^[a-zA-Z0-9]/.test(e.target.value)
    ) {
      navigate(`/SearchMovie/${e.target.value}`);
      e.target.value = "";
    }
  };

  return (
    <div className="relative z-50 w-full">
      <nav
        className="w-full h-[4rem] shadow-xl dark:bg-black/50 bg-white/50 flex justify-between items-center 
                      px-4 md:px-6 lg:px-10 fixed top-0"
      >
        {/* Logo - responsive width for mobile */}
        <Link to="/">
          <img
            src={logo}
            className="w-[7rem]  md:w-[9rem] h-auto dark:block hidden"
          />
          <img
            src={logo2}
            className="w-[7rem]  md:w-[9rem] h-auto block dark:hidden"
          />
        </Link>

        {/* Search Bar - hidden on xs, visible on sm+ */}
        <div className="hidden lg:flex items-center space-x-2 flex-1 justify-center px-2 sm:px-4">
          <Input
            type="text"
            className="w-[10rem] sm:w-[14rem] md:w-[20rem]"
            placeholder="Search movies..."
            onKeyDown={handleKeyChange}
          />
        </div>

        {/* Desktop Menu - visible on lg+ */}
        <div className="hidden lg:flex items-center space-x-8 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "hover:text-blue-500"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/RatedMovies"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "hover:text-blue-500"
            }
          >
            Rated Movies
          </NavLink>
          <NavLink
            to="/Popular"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "hover:text-blue-500"
            }
          >
            Popular
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
          <DarkTheme />
          <CircleUser cursor="pointer" width={30} height={30} />
        </div>

        {/* Mobile + Tablet Hamburger */}
        <div className="flex lg:hidden items-center space-x-6">
          <DarkTheme />
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile & Tablet Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden fixed top-[4rem] left-0 w-full bg-white dark:bg-black/90 shadow-lg flex flex-col items-center py-6 space-y-6 font-medium">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "hover:text-blue-500"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/RatedMovies"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "hover:text-blue-500"
            }
          >
            Rated Movies
          </NavLink>
          <NavLink
            to="/Popular"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "hover:text-blue-500"
            }
          >
            Popular
          </NavLink>
          <NavLink
            to="/Upcoming"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "hover:text-blue-500"
            }
          >
            Upcoming
          </NavLink>
          <NavLink
            to="/Wishlist"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "hover:text-blue-500"
            }
          >
            Wishlist
          </NavLink>

          {/* Search bar inside dropdown for mobile */}
          <Input
            type="text"
            className="w-[90%] sm:w-[80%]"
            placeholder="Search movies..."
            onKeyDown={handleKeyChange}
          />

          <CircleUser cursor="pointer" width={35} height={35} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
