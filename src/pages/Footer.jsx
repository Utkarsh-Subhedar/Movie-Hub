import React from "react";
import { SlSocialInstagram } from "react-icons/sl";
import { Linkedin, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import logo from "@/assets/Img/Logo.png";
import logo2 from "@/assets/Img/logo-2.svg";
import Links from "./Links";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-auto">
      <footer className=" px-4 sm:px-10 dark:bg-slate-800 bg-slate-400/70 py-5">
        {/* Top Section: Logo + Socials */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
          <div className="flex flex-wrap items-center mb-4 md:mb-0 pl-8 md:pl-0 ">
            <img src={logo} className="w-36 sm:w-48 h-12 sm:h-12" />
            <img
              src={logo2}
              className="w-24 sm:w-36 h-12 sm:h-12 ml-2 border-l-2 border-slate-200 invert dark:invert-0"
            />
          </div>
          <div className="flex mt-4 md:mt-0 pl-8 md:pl-0 ">
            <div>
              <h4 className="font-bold text-lg sm:text-xl">Follow us</h4>
              <ul className="flex space-x-3 items-center mt-1 text-lg">
                <li>
                  <a
                    href="https://github.com/Utkarsh-Subhedar"
                    target="_blank"
                    className="hover:text-gray-300"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/utkarsh-subhedar-0ab111211/"
                    target="_blank"
                    className="hover:text-gray-300"
                  >
                    <Linkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/utkarsh_subhedar/profilecard/?igsh=MXd4aHE4cnM1b3YxOA=="
                    target="_blank"
                    className="hover:text-gray-300 text-xl"
                  >
                    <SlSocialInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Links Section */}
        <div className="grid grid-cols-1 pl-8 md:pl-0 md:place-items-center md:grid-cols-3 gap-6 mt-6 text-base sm:text-lg font-sans cursor-pointer">
          <ul className="space-y-2">
            <Links url={"#about"} name={"Help Center"} />
            <Links url={"#movies"} name={"How to Rent or Buy a Movie"} />
            <Links url={"#categories"} name={"How to Watch a Movie"} />
          </ul>
          <ul className="space-y-2">
            <Links url={"#about"} name={"About Us"} />
            <Links url={"home"} name={"Movies"}>
              <Link to="/Popular">Movies</Link>
            </Links>
            <Links url={"#categories"} name={"Categories"} />
          </ul>
          <ul className="space-y-2">
            <Links url={"#about"} name={"Terms of Use"} />
            <Links url={"#movies"} name={"Privacy Policy"} />
            <Links url={"#categories"} name={"Advertise With Us"} />
          </ul>
        </div>
      </footer>

      {/* Copyright */}
      <div className="container mx-auto mb-6 text-center pt-4 px-4 sm:px-0">
        <p className="text-sm">
          © 2024 Utkarsh. All Rights Reserved. | Powered by TMDB
        </p>
      </div>
    </div>
  );
};

export default Footer;
