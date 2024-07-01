import { Link } from "react-router-dom";
import RightNav from "./RightNav";
import ButtonNav from "./ButtonForNavber";
import Logo from "../image/Logo.png";

export default function Navbar() {
  return (
    <nav className="flex justify-center z-50    ">
      <div className="container min-w-full  ">
        <div className="flex justify-between items-center w-auto h-20 p-2  border-b-2 shadow-md">
          <div className="navbar-logo ">
            <Link className="flex  items-center " to={"/"}>
              <img src={Logo} className="  w-32 " alt="logo" />
              <h1 className="text-xl font-bold font-serif hidden md:block md:text-sm ">
                Stella Car Rental
              </h1>
            </Link>
          </div>
          <div className="  hidden md:flex gap-4 ">
            <Link to={"/"}>Home</Link>
            <Link to={"/search-car"}>Cars</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
          </div>
          <div className=" hidden md:flex gap-4  ">
            <Link to={"/login"}>
              <button className="p-2 bg-secondary-color text-white md: w-[8rem] hover:bg-blue-500 rounded-md">
                Sign in
              </button>
            </Link>
            <Link to={"/register"}>
              <button className="p-2 bg-secondary-color text-white md: w-[8rem] hover:bg-blue-500 rounded-md">
                Sign up
              </button>
            </Link>
          </div>

          <div className="hidden">
            <RightNav />
            <ButtonNav />
          </div>

          <div className="md:hidden">
            <button className="navbar-burger flex items-center text-secondary-color p-3">
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
