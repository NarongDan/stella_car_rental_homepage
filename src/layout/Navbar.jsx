import { Link } from "react-router-dom";

import Logo from "../asset/image/Logo.png";
import { useAuth } from "../context/AuthContext";
import { FaRegUser } from "react-icons/fa6";
import DropDown from "./DropDown";
import Toggle from "../components/Toggle";

export default function Navbar({ openDropDown, setOpenDropDown, Dropdown }) {
  const { authUser } = useAuth();

  return (
    <nav className="flex justify-center z-20 dark:bg-black dark:text-white">
      <div className="w-full px-3 ">
        <div className="flex justify-between items-center w-auto h-20  shadow-zinc-700  ">
          {/* Logo */}
          <div className="navbar-logo ">
            <Link className="flex  items-center " to={"/"}>
              <img src={Logo} className="  w-32 " alt="logo" />
              <h1 className="font-bold font-serif  hidden sm:block sm:text-2xl">
                Stella Car Rental
              </h1>
            </Link>
          </div>
          {/* Mid-Nav */}

          <div className="hidden lg:flex gap-6 font-semibold text-lg lg:text-2xl">
            <Link
              to={"/"}
              className="text-gray-700 hover:text-secondary-color transition duration-300 relative group dark:text-white"
            >
              <div className="relative">
                <span>Home</span>
                <span className="absolute left-0 right-0 h-0.5 bg-orange-400 bottom-0 transform scale-x-0 origin-left transition duration-500 group-hover:scale-x-100"></span>
              </div>
            </Link>

            <Link
              to={"/cars"}
              className="text-gray-700 hover:text-secondary-color transition duration-300 relative group dark:text-white"
            >
              <span>Cars</span>
              <span className="absolute left-0 right-0 h-0.5 bg-orange-400 bottom-0 transform scale-x-0 origin-left transition duration-500 group-hover:scale-x-100"></span>
            </Link>

            <Link
              to={"/about"}
              className="text-gray-700 hover:text-secondary-color transition duration-300 relative group dark:text-white"
            >
              <span>About</span>
              <span className="absolute left-0 right-0 h-0.5 bg-orange-400 bottom-0 transform scale-x-0 origin-left transition duration-500 group-hover:scale-x-100"></span>
            </Link>

            <Link
              to={"/contact"}
              className="text-gray-700 hover:text-secondary-color transition duration-300 relative group dark:text-white"
            >
              <span>Contact</span>
              <span className="absolute left-0 right-0 h-0.5 bg-orange-400 bottom-0 transform scale-x-0 origin-left transition duration-500 group-hover:scale-x-100"></span>
            </Link>
          </div>
          {/* Right Nav  */}
          <div className="flex justify-center items-center gap-2">
            <Toggle />
            {authUser ? (
              <div className="flex items-center gap-4">
                <p className="font-semibold text-sm md:text-lg">
                  Hi, {authUser.firstName}
                </p>

                <div
                  className="flex justify-center items-center bg-gray-100 w-10 h-10 rounded-full hover:bg-gray-200 duration-300 cursor-pointer dark:text-black"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenDropDown((prev) => !prev);
                  }}
                >
                  <FaRegUser />
                </div>
              </div>
            ) : (
              <div className=" md:flex gap-4  ">
                <button
                  className="p-2 bg-gray-800 text-white md: w-[8rem] hover:bg-thirdly-color rounded-md"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenDropDown((prev) => !prev);
                  }}
                >
                  Menu
                </button>
              </div>
            )}

            {openDropDown && (
              <div ref={Dropdown} className="fixed z-40">
                <DropDown />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
