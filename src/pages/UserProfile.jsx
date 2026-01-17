import React, { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";
import { MdAccountCircle } from "react-icons/md";

const UserProfile = ({ profile }) => {
  const [open, setOpen] = useState(false);
  const userData = JSON.parse(localStorage.getItem("userCredentials"));
  return (
    <div className="h-auto sm:max-h-[50px] max-w-[200px] ">
      <div
        className="flex sm:justify-end items-center space-x-1 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center dark:bg-gray-900 bg-gray-200 hover:bg-zinc-300 max-w-[150px] rounded-full">
          <ProfileDropdown userData={userData} open={open} setOpen={setOpen} />
          <MdAccountCircle
            className="dark:text-gray-200
            text-black text-4xl"
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
