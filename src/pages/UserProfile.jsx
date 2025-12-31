import React, { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";

const UserProfile = ({ profile, userData }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-auto sm:max-h-[50px] max-w-[200px] ">
      <div
        className="flex sm:justify-end items-center space-x-1 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center bg-[#40CFC3] hover:bg-[#1dbeb1] max-w-[150px]  rounded-full">
          <ProfileDropdown userData={userData} open={open} setOpen={setOpen} />
          <img
            src={profile}
            alt="profilePhoto"
            className="h-7 w-7 sm:h-10 sm:w-10 object-cover rounded-full  duration-300 "
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
