import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { IoCarSportSharp } from "react-icons/io5";
import { GrContact } from "react-icons/gr";
import { CiSettings } from "react-icons/ci";
import { GoBook } from "react-icons/go";
import { CiLogout } from "react-icons/ci";
import { MdOutlineContactPhone } from "react-icons/md";
import { useAuth } from "../context/AuthContext";

function DropDown() {
  const { logout, authUser } = useAuth();
  return (
    <div className=" flex flex-col dropDown dark:text-black">
      <ul className="flex flex-col gap-4">
        <Link to={"/"} className="lg:hidden">
          <li className="dropDownButton ">
            <AiOutlineHome />
            Home
          </li>
        </Link>
        <Link to={"/cars"} className="lg:hidden">
          <li className="dropDownButton ">
            <IoCarSportSharp />
            Cars
          </li>
        </Link>
        <Link to={"/about"} className="lg:hidden">
          <li className="dropDownButton ">
            <GoBook />
            About
          </li>
        </Link>
        <Link to={"/contact"} className="lg:hidden">
          <li className="dropDownButton ">
            <MdOutlineContactPhone />
            Contact
          </li>
        </Link>
        <Link to={"/chat"} className={`${authUser ? "" : "hidden"} `}>
          <li className="dropDownButton">
            <GrContact />
            Chat
          </li>
        </Link>
        <Link to={"/customer"} className={`${authUser ? "" : "hidden"} `}>
          <li className="dropDownButton">
            <CiSettings />
            Setting
          </li>
        </Link>
        <hr className={`${authUser ? "" : "lg:hidden"} `} />
        <Link
          to={"/"}
          onClick={logout}
          className={`${authUser ? "" : "hidden"} `}
        >
          <li className="dropDownButton">
            <CiLogout />
            Log out
          </li>
        </Link>
        <Link to={"/login"} className={`${authUser ? "hidden" : ""} `}>
          <li className="dropDownButton">
            <CiLogout />
            Sign In
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default DropDown;
