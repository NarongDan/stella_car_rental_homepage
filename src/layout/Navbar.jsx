import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-center ">
      <div className="container">
        <div className="flex justify-between items-center w-auto h-20 p-2 shadow-zinc-700 border-b-2">
          <div className="navbar-logo">
            <Link to={"/"}>
              <h1 className="text-xl font-bold font-serif">
                Stella Car Rental
              </h1>
            </Link>
          </div>
          <div className="menubar flex gap-4">
            <Link to={"/"}>Home</Link>
            <Link to={"/search-car"}>Cars</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
          </div>
          <div className="nav-button flex gap-4">
            <Link to={"/login"}>
              <button className="p-2 bg-[#1154FF] text-white md: w-[8rem] hover:bg-blue-500 rounded-md">
                Sign in
              </button>
            </Link>
            <Link to={"/register"}>
              <button className="p-2 bg-[#1154FF] text-white md: w-[8rem] hover:bg-blue-500 rounded-md">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
