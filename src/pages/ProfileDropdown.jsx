import { Link } from "react-router-dom";

const ProfileDropdown = ({ name, open, setOpen }) => {
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
        <span className="hidden sm:inline">{name}</span>
        <span className="sm:hidden">{name?.charAt(0)}</span>

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
            <div className="font-semibold truncate">{`${name} ${name}`}</div>
          </div>
          {/* <Link
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
            
            My Dashboard
          </Link> */}
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
