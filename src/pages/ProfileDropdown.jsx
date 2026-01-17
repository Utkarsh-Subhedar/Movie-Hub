import { Link } from "react-router-dom";

const ProfileDropdown = ({ userData, open, setOpen }) => {
  console.log(userData);
  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="
          px-2
          text-sm             
          font-semibold
          dark:text-white
          text-zinc-900
        "
      >
        <span className="hidden sm:inline">{userData?.firstName}</span>
        <span className="sm:hidden">{userData?.firstName?.charAt(0)}</span>

        {/* <IoChevronDown
          className={`
            size-4 sm:size-5            
            transition-transform
            ${open ? "rotate-180" : ""}
          `}
        /> */}
      </button>

      {open && (
        <div
          className="
            absolute right-0
            mt-2
            max-w-32 sm:max-w-44               
            lg:max-w-[90vw]                 
            rounded-lg
            dark:text-gray-200
            text-black
            dark:bg-gray-950 bg-zinc-200
            shadow-lg
            border border-gray-200
            z-50
          "
        >
          <div className="px-3 sm:px-4 py-3 text-xs sm:text-sm">
            Signed in as
            <div className="font-semibold truncate ">{`${userData?.firstName} ${userData?.lastName}`}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
