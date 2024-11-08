import React from "react";
import { SlSocialInstagram } from "react-icons/sl";
import { Linkedin, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import logo from "@/assets/Img/Logo.png";
import logo2 from "@/assets/Img/logo-2.svg";
import Links from "./Links";

const Footer = () => {
  return (
    <div className="w-full h-auto">
      <footer className="mt-10 px-10 dark:bg-slate-800 bg-slate-400/60 py-5">
        <div className="w-full container flex justify-between">
          <div className="flex">
            <img src={logo} className="w-[15rem] h-[3rem] " />
            <img
              src={logo2}
              className="w-[9.5rem] h-[3rem] ml-2  border-l-2  border-slate-200"
            />
          </div>
          <div className=" flex w-[15rem]">
            <div className="w-full float-right">
              <h4 className="font-bold text-xl">Follow us</h4>
              <ul className="p-1 flex space-x-3  items-center">
                <li>
                  <a
                    href="https://github.com/Utkarsh-Subhedar"
                    target="_blank"
                    className="hover:text-gray-300"
                  >
                    <FaGithub />{" "}
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
                    className="hover:text-gray-300 text-xl"
                    target="_blank"
                    href="https://www.instagram.com/utkarsh_subhedar/profilecard/?igsh=MXd4aHE4cnM1b3YxOA=="
                  >
                    <SlSocialInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-around px-36 text-lg font-sans mt-4 tracking-wide ">
          <ul className="mt-2 space-y-2">
            <Links url={"#about"} name={"Help Center"} />
            <Links url={"#movies"} name={"How to Rent or Buy a Movie"} />
            <Links url={"#categories"} name={"How to Watch a Movie"} />
          </ul>
          <ul className="mt-2 space-y-2">
            <Links url={"#about"} name={"About Us"} />
            <Links url={"#movies"} name={"Movies"} />
            <Links url={"#categories"} name={"Categories"} />
          </ul>
          <ul className="mt-2 space-y-2">
            <Links url={"#about"} name={"Terms of Use"} />
            <Links url={"#movies"} name={"Privacy Policy"} />
            <Links url={"#categories"} name={"Advertise With Us"} />
          </ul>
        </div>
      </footer>
      <div className="container mx-auto mb-6 text-center pt-4 ">
        <p className="text-sm">
          © 2024 Utkarsh. All Rights Reserved. | Powered by TMDB
        </p>
      </div>
    </div>
  );
};

export default Footer;
