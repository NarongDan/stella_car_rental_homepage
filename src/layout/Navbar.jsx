import { Link } from "react-router-dom";
import RightNav from "./RightNav";
import ButtonNav from "./ButtonForNavber";
import Logo from "../image/Logo.png";
import { useAuth } from "../context/AuthContext";
import { FaRegUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { authUser } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="flex justify-center z-20 ">
      <div className="container min-w-full px-5 ">
        <div className="flex justify-between items-center w-auto h-20 p-2 shadow-zinc-700 border-b-2">
          <div className="navbar-logo ">
            <Link className="flex  items-center " to={"/"}>
              <img src={Logo} className="  w-32 " alt="logo" />
              <h1 className="text-xl font-bold font-serif hidden md:block md:text-sm ">
                Stella Car Rental
              </h1>
            </Link>
          </div>
          {/* Mid-Nav */}
          <div className="hidden md:flex gap-4">
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
          {authUser ? (
            <div className="flex items-center gap-4">
              <p className="font-semibold text-lg">Hi, {authUser.firstName}</p>
              <div className="flex justify-center items-center bg-gray-100 w-10 h-10 rounded-full hover:bg-gray-200 duration-300">
                <button onClick={() => navigate("/customer")}>
                  <FaRegUser />
                </button>
              </div>
            </div>
          ) : (
            <div className="  md:flex gap-4  ">
              <Link to={"/login"}>
                <button className="p-2 bg-gray-800 text-white md: w-[8rem] hover:bg-thirdly-color rounded-md">
                  Sign in
                </button>
              </Link>
            </div>
          )}
          {/* <div className="md:hidden">
            <button className="navbar-burger flex items-center p-3">
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
}
