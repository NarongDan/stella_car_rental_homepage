import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { IoCarSportSharp } from "react-icons/io5";
import { GrContact } from "react-icons/gr";
import { CiSettings } from "react-icons/ci";
import { GoBook } from "react-icons/go";

function DropDown() {
  return (
    <div className="flex flex-col dropDown z-30 ">
      <ul className="flex flex-col gap-4">
        <li className="flex justify-start items-center gap-2">
          <AiOutlineHome />
          <Link to={"/"}>Home</Link>
        </li>
        <li className="flex justify-start items-center gap-2">
          <IoCarSportSharp />
          <Link to={"/cars"}>Cars</Link>
        </li>
        <li className="flex justify-start items-center gap-2">
          <GoBook />
          <Link to={"/about"}>About</Link>
        </li>
        <li className="flex justify-start items-center gap-2">
          <GrContact />
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li className="flex justify-start items-center gap-2">
          <CiSettings />
          <Link to={"/customer"}>Setting</Link>
        </li>
      </ul>
    </div>
  );
}

export default DropDown;
