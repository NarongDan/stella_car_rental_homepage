import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState, useRef } from "react";

export default function HomePageLayout() {
  const Dropdown = useRef(null);
  const [openDropDown, setOpenDropDown] = useState(false);

  const closeDropDown = (e) => {
    if (openDropDown && !Dropdown) {
      setOpenDropDown(false);
    }
  };
  document.addEventListener("mousedown", closeDropDown);
  return (
    <div
      className="bg-white min-w-full dark:bg-black "
      onClick={() => setOpenDropDown(false)}
    >
      <Navbar
        openDropDown={openDropDown}
        setOpenDropDown={setOpenDropDown}
        Dropdown={Dropdown}
      />
      <div className="dark:bg-black dark:text-white">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
