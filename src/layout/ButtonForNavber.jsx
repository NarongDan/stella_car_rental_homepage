import { Link } from "react-router-dom";

export default function ButtonNav() {
  return (
    <div className="hidden ">
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
  );
}
