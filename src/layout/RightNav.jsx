import { Link } from "react-router-dom";

export default function RightNav() {
  return (
    <div className=" hidden  ">
      <Link to={"/"}>Home</Link>
      <Link to={"/search-car"}>Cars</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
    </div>
  );
}
