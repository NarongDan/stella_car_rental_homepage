import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function HomePageLayout() {
  return (
    <div className="bg-white min-w-full ">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
