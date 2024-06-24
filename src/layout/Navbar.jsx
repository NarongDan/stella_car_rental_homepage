import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-center ">
      <div className="container  ">
        <div className="flex justify-between items-center w-auto h-16 p-2 shadow-sm">
          <div className="navbar-logo">
            <h1 className="text-xl font-bold font-serif">Stella Car Rental</h1>
          </div>
          <div className="menubar flex gap-4">
            <Link>Home</Link>
            <Link>Cars</Link>
            <Link>About</Link>
            <Link>Contact</Link>
          </div>
          <div className="nav-button flex gap-4">
            <button className="p-2 bg-[#1154FF] text-white md: w-[8rem] hover:bg-blue-500 rounded-md">
              Sign in
            </button>
            <button className="p-2 bg-[#1154FF] text-white md: w-[8rem] hover:bg-blue-500 rounded-md">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
