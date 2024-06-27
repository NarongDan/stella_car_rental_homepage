import { IoIosStar } from "react-icons/io";
import { FaCar } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { RiCaravanFill } from "react-icons/ri";
import { GrDropbox } from "react-icons/gr";
import CarHero from "../image/Car.png";
import SearchCarInput from "../features/cars/component/SearchCarInput";

export default function HomePageBody() {
  return (
    <>
      <hero className="flex justify-center  relative ">
        <div className=" absolute  bg-[url('./image/Polygon2.png')] bg-no-repeat h-full w-2/3 -top-15 right-0 md:-r lg:-right-[373px] -z-50 "></div>
        <div className="container    ">
          <div className="  lg:grid grid-cols-2 p-7 mt-10 ">
            <div className="flex flex-col gap-10 p-7 ">
              <h1 className=" font-extrabold text-3xl sm:font-extrabold sm:text-5xl">
                Looking for cars to rent in Thailand? Look no further!
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <SearchCarInput />
            </div>
            <div className="">
              <img src={CarHero} alt="" />
            </div>
          </div>
        </div>
      </hero>
      <div className=" flex justify-center">
        <div className="container ">
          <div className=" flex flex-col items-center  ">
            <div className=" p-5 text-3xl font-extrabold md:font-extrabold  md:text-5xl">
              {" "}
              Testimonials from our clients
            </div>
          </div>

          <div className="md:grid grid-cols-4 mt-2 gap-5 p-7 ">
            <div className=" border-2 rounded-md p-2 mb-5 bg-white opacity-100  shadow-lg shadow-neutral-500">
              <h3>Ben T.</h3>
              <div className="flex  rounded-md ">
                <IoIosStar className=" text-yellow-400" />
                <IoIosStar className=" text-yellow-400" />
                <IoIosStar className=" text-yellow-400" />
                <IoIosStar className=" text-yellow-400" />
                <IoIosStar className=" text-yellow-400" />
              </div>

              <p>
                I am very pleased with how easy it is to get a rental car
                straight from the airport. The process is very straight-forward
                and employees are very helpful. 10/10 recommendations and I will
                definitely be back in the future.
              </p>
            </div>
            <div className=" border-2 rounded-md p-2 mb-5 bg-white opacity-100  shadow-lg shadow-neutral-500">
              <h3>Suraya B.</h3>
              <div className="flex">
                <IoIosStar className=" text-yellow-400 " />
                <IoIosStar className=" text-yellow-400" />
                <IoIosStar className=" text-yellow-400" />
                <IoIosStar className=" text-yellow-400" />
                <IoIosStar className=" text-yellow-400" />
              </div>
              <p>
                At first I thought it would be a long and lengthy process, never
                been so happy to be wrong. I had a wonderful road trip
                throughout Thailand without having to drive from my house. Very
                professional staff as well.
              </p>
            </div>
            <div className=" border-2 rounded-md p-2 mb-5 bg-white opacity-100  shadow-lg shadow-neutral-500">
              <h3>Surapa K.</h3>
              <div className="flex">
                <IoIosStar className=" text-yellow-400 " />
                <IoIosStar className=" text-yellow-400" />
                <IoIosStar className=" text-yellow-400" />
                <IoIosStar className=" text-yellow-400" />
                <IoIosStar className=" text-yellow-400" />
              </div>
              <p>
                At first I thought it would be a long and lengthy process, never
                been so happy to be wrong. I had a wonderful road trip
                throughout Thailand without having to drive from my house. Very
                professional staff as well.
              </p>
            </div>
            <div className=" border-2 rounded-md p-2 mb-5 bg-white opacity-100  shadow-lg shadow-neutral-500">
              <h3>Jarukul P.</h3>
              <div className="flex">
                <IoIosStar className=" text-yellow-400 b" />
                <IoIosStar className=" text-yellow-400" />
                <IoIosStar className=" text-yellow-400" />
                <IoIosStar className=" text-yellow-400" />
                <IoIosStar className=" text-yellow-400" />
              </div>
              <p>
                It’s a very rare circumstances to see such up-to-date support
                for car rentals in Thailand. The services are on point and
                modern.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center p-5">
        <div className="container ">
          <div className="flex  justify-center">
            <div className=" text-3xl font-extrabold">
              How our Service Works?
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid md:grid-cols-3 lg:grid-cols-5 gap-2 mt-20 mb-20 ">
            <div className=" flex flex-col justify-center items-center ">
              <div className="bg-primary-color w-20 h-20 justify-center items-center flex rounded-full">
                <FaCar className="text-6xl" />
              </div>
              <h3>Choose your car</h3>
              <p>
                Choose your preferred car from multiple selections of brands,
                models, and specifications
              </p>
            </div>
            <div className=" flex flex-col justify-center items-center mt-5">
              <div className="bg-primary-color w-20 h-20 justify-center items-center flex rounded-full">
                <IoLocationSharp className="text-6xl" />
              </div>
              <h3>Choose location </h3>
              <p>
                Choose the duration of your rent along with location to pick up
                your car and drop off your car on your final day of renting
              </p>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <div className="bg-primary-color w-20 h-20 justify-center items-center flex rounded-full">
                <MdPayment className="text-6xl" />
              </div>
              <h3>Payment</h3>
              <p>
                Commit your payment via Credit Card or Bank Transfer to confirm
                your reservation
              </p>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <div className="bg-primary-color w-20 h-20 justify-center items-center flex rounded-full">
                <RiCaravanFill className="text-6xl" />
              </div>
              <h3>Pick-up your car</h3>
              <p>
                Once arrived at the designated airport, pick up your reserved
                ride with our staff
              </p>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <div className="bg-primary-color w-20 h-20 justify-center items-center flex rounded-full">
                <GrDropbox className="text-6xl" />
              </div>
              <h3>Drop-off your car</h3>
              <p>
                On the final day of your rent, simply drop-off your ride at the
                chosen airport
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
