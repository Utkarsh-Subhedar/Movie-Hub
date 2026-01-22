import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

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
            py-2
          "
        >
          <Link to="/UserProfileDetails">
            <div className="px-3 sm:px-4  text-xs sm:text-sm pb-2 hover:bg-slate-800">
              Signed in as
              <div className="font-semibold truncate ">{`${userData?.firstName} ${userData?.lastName}`}</div>
            </div>
          </Link>
          <hr className="text-slate-200" />
          <Link
            to="/Login"
            className="px-1 sm:px-4 flex items-center justify-start gap-3 py-1 text-red-600 hover:text-red-800"
          >
            <span className="font-semibold text-md">LogOut</span>
            <FaSignOutAlt className="text-xl" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
