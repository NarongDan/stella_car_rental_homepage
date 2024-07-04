import { Link } from "react-router-dom";

import Logo from "../asset/image/Logo.png";
import { useAuth } from "../context/AuthContext";
import { FaRegUser } from "react-icons/fa6";
import DropDown from "./DropDown";
// import { useState } from "react";
// import { useRef } from "react";

export default function Navbar({ openDropDown, setOpenDropDown, Dropdown }) {
  const { authUser } = useAuth();

  // const Dropdown = useRef(null);
  // const [openDropDown, setOpenDropDown] = useState(false);

  // const closeDropDown = (e) => {
  //   if (openDropDown && !DropDown) {
  //     setOpenDropDown(false);
  //   }
  // };
  // document.addEventListener("mousedown", closeDropDown);

  return (
    <nav className="flex justify-center z-20 ">
      <div className="w-full px-3 ">
        <div className="flex justify-between items-center w-auto h-20  shadow-zinc-700 border-b">
          {/* Logo */}
          <div className="navbar-logo ">
            <Link className="flex  items-center " to={"/"}>
              <img src={Logo} className="  w-32 " alt="logo" />
              <h1 className="text-xl font-bold font-serif hidden md:block md:text-sm ">
                Stella Car Rental
              </h1>
            </Link>
          </div>
          {/* Mid-Nav */}
          <div className="hidden md:flex gap-4 ">
            <Link
              to={"/"}
              className="text-gray-700 hover:text-secondary-color transition duration-300 relative"
            >
              <span>Home</span>
              <span className="absolute left-0 right-0 h-0.5 bg-secondary-color bottom-0 transform scale-x-0 origin-left transition duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              to={"/cars"}
              className="text-gray-700 hover:text-secondary-color transition duration-300 relative"
            >
              <span>Cars</span>
              <span className="absolute left-0 right-0 h-0.5 bg-secondary-color bottom-0 transform scale-x-0 origin-left transition duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              to={"/about"}
              className="text-gray-700 hover:text-secondary-color transition duration-300 relative"
            >
              <span>About</span>
              <span className="absolute left-0 right-0 h-0.5 bg-secondary-color bottom-0 transform scale-x-0 origin-left transition duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              to={"/contact"}
              className="text-gray-700 hover:text-secondary-color transition duration-300 relative"
            >
              <span>Contact</span>
              <span className="absolute left-0 right-0 h-0.5 bg-secondary-color bottom-0 transform scale-x-0 origin-left transition duration-300 group-hover:scale-x-100"></span>
            </Link>
          </div>
          {/* Right Nav  */}
          <div className="flex justify-center items-center gap-2">
            {authUser ? (
              <div className="flex items-center gap-4">
                <p className="font-semibold text-lg">
                  Hi, {authUser.firstName}
                </p>

                <div
                  className="flex justify-center items-center bg-gray-100 w-10 h-10 rounded-full hover:bg-gray-200 duration-300 cursor-pointer"
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
                <Link to={"/login"}>
                  <button className="p-2 bg-gray-800 text-white md: w-[8rem] hover:bg-thirdly-color rounded-md">
                    Sign in
                  </button>
                </Link>
              </div>
            )}

            {openDropDown && (
              <div ref={Dropdown}>
                <DropDown />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
