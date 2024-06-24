import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import { IoIosPin } from "react-icons/io";

export default function Footer() {
  return (
    <footer className=" flex justify-center  ">
      <div className="container shadow-md p-5 ">
        <div className="grid grid-cols-5 ">
          <div className="">
            <h1>Stella Car Rental</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
            </p>
          </div>
          <div className="">
            <h1>Rental Cars</h1>
            <h3>Brands</h3>
            <h3>Cars</h3>
          </div>
          <div className="">
            <h1>Company</h1>
            <h3>About</h3>
            <h3>Contact us</h3>
          </div>
          <div className="">
            <h1>Support</h1>
            <h3s>Help center</h3s>
            <h3>Chat support</h3>
          </div>
          <div className="grid gap-1">
            <h1>
              <MdOutlineEmail />
              contact@company.com
            </h1>
            <h3>
              <MdOutlineLocalPhone />
              (414) 687 - 5892
            </h3>
            <h3>
              <IoIosPin />
              794 Mcallister St San Francisco, 94102
            </h3>
          </div>
        </div>
      </div>
    </footer>
  );
}
