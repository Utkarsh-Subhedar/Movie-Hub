import { Link } from "react-router-dom";

const ProfileDropdown = ({ userData, open, setOpen }) => {
  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="
          px-2
          text-sm             
          font-semibold
          text-gray-100
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
            max-w-32 sm:w-48               
            lg:max-w-[90vw]                 
            rounded-lg
            bg-white
            shadow-lg
            border border-gray-200
            z-50
          "
        >
          <div className="px-3 sm:px-4 py-3 border-b text-xs sm:text-sm text-gray-700">
            Signed in as
            <div className="font-semibold truncate">{`${userData?.firstName} ${userData?.lastName}`}</div>
          </div>
          <Link
            className="
              flex w-full items-center gap-2
              px-3 sm:px-4 py-2
              text-xs md:text-sm 
              font-semibold
              text-teal-600
              hover:bg-gray-100
              transition
            "
            to="/home"
          >
            {/* <FaSignOutAlt className="text-base" />
            Logout */}
            My Profile
          </Link>
          <Link
            className="
              flex w-full items-center gap-2
              px-3 sm:px-4 py-2
              text-xs md:text-sm 
              font-semibold
              text-teal-600
              hover:bg-gray-100
              transition
              border-b
            "
            to="/home"
          >
            {/* <FaSignOutAlt className="text-base" />
            Logout */}
            My Dashboard
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
