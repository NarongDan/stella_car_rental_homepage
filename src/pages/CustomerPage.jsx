import { Outlet, Link, useLocation } from "react-router-dom";

export default function CustomerPage() {
  const location = useLocation();

  console.log(location.pathname);
  return (
    <div className="relative w-full mt-20 px-10">
      {/* Profile Bar  */}
      <div className="container flex absolute -top-[65px]">
        <Link to="/customer">
          <div
            className={`px-10 py-5 bg-gray-50 border  border-b-0 border-gray-200 rounded-t-xl font-semibold hover:bg-orange-300 ${
              location.pathname === "/customer" ? "bg-orange-200" : ""
            }`}
          >
            Customer Detail
          </div>
        </Link>

        <Link to="/customer/bookings">
          <div
            className={`px-10 py-5 bg-gray-50 border  border-b-0 border-gray-200 rounded-t-xl font-semibold hover:bg-orange-300 ${
              location.pathname === "/customer/bookings" ? "bg-orange-200 " : ""
            }`}
          >
            Booking History
          </div>
        </Link>
      </div>

      {/* Profile content  */}
      <div
        className={`w-full border border-gray-200 pb-20 mb-20 px-6 
          
          rounded-lg rounded-tl-none
          
          ${
            location.pathname === "/customer"
              ? "bg-orange-200 border-t-0"
              : location.pathname === "/customer/bookings"
              ? "bg-orange-200 border-t-0"
              : ""
          }`}
      >
        <Outlet />
      </div>
    </div>
  );
}
