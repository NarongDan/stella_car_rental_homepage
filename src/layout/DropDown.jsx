import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { IoCarSportSharp } from "react-icons/io5";
import { GrContact } from "react-icons/gr";
import { CiSettings } from "react-icons/ci";
import { GoBook } from "react-icons/go";
import { CiLogout } from "react-icons/ci";
import { useAuth } from "../context/AuthContext";

function DropDown() {
  const { logout } = useAuth();
  return (
    <div className="flex flex-col dropDown z-30 ">
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
            <GrContact />
            Contact
          </li>
        </Link>
        <Link to={"/customer"}>
          <li className="dropDownButton">
            <CiSettings />
            Setting
          </li>
        </Link>
        <hr />
        <Link to={"/"} onClick={logout}>
          <li className="dropDownButton">
            <CiLogout />
            Log out
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default DropDown;
