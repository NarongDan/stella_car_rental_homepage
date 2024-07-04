import { IoIosStar } from "react-icons/io";
import { FaCar } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { RiCaravanFill } from "react-icons/ri";
import { GrDropbox } from "react-icons/gr";
import CarHero from "../asset/image/Car.png";
import PolygonBackground from "../asset/image/Polygon.png";
import SearchCarInput from "../features/cars/component/SearchCarInput";
import img1 from "../asset/image/300_1.jpg";
import img2 from "../asset/image/300_2.jpg";
import img3 from "../asset/image/300_3.jpg";
import img4 from "../asset/image/300_4.jpg";

import Img from "../asset/image/pexels-dariuskrs-2470657.jpg";

export default function HomePageBody() {
  return (
    <>
      {/* Banner  */}
      <div className="flex flex-col justify-center relative overflow-hidden ">
        <div className="relative">
          <img
            src={Img}
            alt="Contact Us"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <h1 className="text-5xl font-extrabold text-white">
              Stella Car Rental
            </h1>
          </div>
        </div>

        {/* Orange Background */}
        <div
          className="
        absolute 
        bg-no-repeat 
        bg-cover
        h-full 
        w-2/3 
        -top-15 
        right-0 
        md:right-0 
        lg:-right-[373px] 
        z-10
      "
          style={{ backgroundImage: `url(${PolygonBackground})` }}
        ></div>
        {/* Hero Section Container */}
        <div className="flex justify-center">
          {" "}
          <div className="container z-10 ">
            <div className="  lg:grid grid-cols-2 p-7 mt-10 ">
              {/* Information */}
              <div className="flex flex-col gap-10 p-7 ">
                <h1 className=" font-extrabold text-3xl sm:font-extrabold sm:text-5xl">
                  Looking for cars to rent in Thailand? Look no further!
                </h1>
                <p className="text-semibold text-xl ">
                  Explore Thailand with ease and comfort by renting a car from
                  us, whether you're planning to visit the bustling streets of
                  Bangkok, the serene beaches of Phuket, or the cultural
                  heritage sites in Chiang Mai. Enjoy competitive rates,
                  excellent customer service, and well-maintained vehicles for
                  an unforgettable trip.
                </p>
              </div>
              {/* Car Picture */}
              <div className="animate-fadeinright">
                <img src={CarHero} alt="Car" />
              </div>
            </div>
            <SearchCarInput />
          </div>
        </div>
      </div>
      {/* Testimonial */}
      <div className=" flex justify-center mt-16 dark:text-black">
        <div className="container ">
          <div className=" flex flex-col items-center  ">
            <div className=" p-5 text-5xl font-extrabold md:font-extrabold  md:text-6xl dark:text-white">
              Testimonials
            </div>
          </div>

          <div className="lg:grid grid-cols-4 mt-2 gap-7 p-7">
            {/* Testimonials Card  1 */}
            <div className="border-2 rounded-md p-7 mb-5 bg-white opacity-100 shadow-lg dark:shadow-[0px_0px_30px_0px_#feebc8] shadow-neutral-500 ">
              <div className="flex items-center gap-5 mb-5">
                <img
                  src={img1}
                  alt=""
                  className="w-[60px] h-[60px] rounded-full ring-4 ring-black"
                />
                <div className="flex flex-col">
                  <h3 className="font-bold text-xl">Ben T.</h3>
                  <div className="flex  rounded-md ">
                    <IoIosStar className=" text-yellow-400" />
                    <IoIosStar className=" text-yellow-400" />
                    <IoIosStar className=" text-yellow-400" />
                    <IoIosStar className=" text-yellow-400" />
                    <IoIosStar className=" text-yellow-400" />
                  </div>
                </div>
              </div>

              <p className="text-lg">
                I am very pleased with how easy it is to get a rental car
                straight from the airport. The process is very straight-forward
                and employees are very helpful. 10/10 recommendations and I will
                definitely be back in the future.
              </p>
            </div>
            {/* Testimonials Card  2 */}

            <div className=" border-2 rounded-md p-7 mb-5 bg-white opacity-100 shadow-lg dark:shadow-[0px_0px_30px_0px_#feebc8] shadow-neutral-500 ">
              <div className="flex items-center gap-5 mb-5">
                <img
                  src={img2}
                  alt=""
                  className="w-[60px] h-[60px] rounded-full ring-4 ring-black"
                />
                <div className="flex flex-col">
                  <h3 className="font-bold text-xl">Suraya B.</h3>
                  <div className="flex  rounded-md ">
                    <IoIosStar className=" text-yellow-400" />
                    <IoIosStar className=" text-yellow-400" />
                    <IoIosStar className=" text-yellow-400" />
                    <IoIosStar className=" text-yellow-400" />
                    <IoIosStar className=" text-yellow-400" />
                  </div>
                </div>
              </div>

              <p className="text-lg">
                At first I thought it would be a long and lengthy process, never
                been so happy to be wrong. I had a wonderful road trip
                throughout Thailand without having to drive from my house. Very
                professional staff as well.
              </p>
            </div>

            {/* Testimonials Card  3 */}

            <div className=" border-2 rounded-md p-7 mb-5 bg-white opacity-100 shadow-lg dark:shadow-[0px_0px_30px_0px_#feebc8] shadow-neutral-500 ">
              <div className="flex items-center gap-5 mb-5">
                <img
                  src={img3}
                  alt=""
                  className="w-[60px] h-[60px] rounded-full ring-4 ring-black"
                />
                <div className="flex flex-col">
                  <h3 className="font-bold text-xl">David K.</h3>
                  <div className="flex  rounded-md ">
                    <IoIosStar className=" text-yellow-400" />
                    <IoIosStar className=" text-yellow-400" />
                    <IoIosStar className=" text-yellow-400" />
                    <IoIosStar className=" text-yellow-400" />
                    <IoIosStar className=" text-yellow-400" />
                  </div>
                </div>
              </div>

              <p className="text-lg">
                At first I thought it would be a long and lengthy process, never
                been so happy to be wrong. I had a wonderful road trip
                throughout Thailand without having to drive from my house. Very
                professional staff as well.
              </p>
            </div>

            {/* Testimonials Card  4 */}

            <div className=" border-2 rounded-md p-7 mb-5 bg-white opacity-100 shadow-lg dark:shadow-[0px_0px_30px_0px_#feebc8] shadow-neutral-500 ">
              <div className="flex items-center gap-5 mb-5">
                <img
                  src={img4}
                  alt=""
                  className="w-[60px] h-[60px] rounded-full ring-4 ring-black"
                />
                <div className="flex flex-col">
                  <h3 className="font-bold text-xl">Jarukul P.</h3>
                  <div className="flex  rounded-md ">
                    <IoIosStar className=" text-yellow-400" />
                    <IoIosStar className=" text-yellow-400" />
                    <IoIosStar className=" text-yellow-400" />
                    <IoIosStar className=" text-yellow-400" />
                    <IoIosStar className=" text-yellow-400" />
                  </div>
                </div>
              </div>

              <p className="text-lg">
                It’s a very rare circumstances to see such up-to-date support
                for car rentals in Thailand. The services are on point and
                modern.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* {How our Service Works?} */}
      <div className="flex justify-center p-5">
        <div className="container">
          <div className="flex justify-center">
            <div className="text-center text-5xl md:text-6xl font-extrabold">
              How our Service Works?
            </div>
          </div>
          <div className="grid grid-cols-2 mt-10 mb-20 md:grid-cols-3 lg:grid-cols-5 gap-2 ">
            <div className="flex flex-col items-center text-center mb-10 ">
              <div className="bg-primary-color w-20 h-20 flex justify-center items-center rounded-full m m">
                <FaCar className="text-6xl " />
              </div>
              <h3 className="mt-4 mb-2 text-lg font-bold">Choose your car</h3>
              <p className="text-sm">
                Choose your preferred car from multiple selections of brands,
                models, and specifications
              </p>
            </div>
            <div className="flex flex-col items-center text-center mb-10">
              <div className="bg-primary-color w-20 h-20 flex justify-center items-center rounded-full">
                <IoLocationSharp className="text-6xl " />
              </div>
              <h3 className="mt-4 mb-2 text-lg font-bold">Choose location</h3>
              <p className="text-sm">
                Choose the duration of your rent along with location to pick up
                your car and drop off your car on your final day of renting
              </p>
            </div>
            <div className="flex flex-col items-center text-center mb-10">
              <div className="bg-primary-color w-20 h-20 flex justify-center items-center rounded-full">
                <MdPayment className="text-6xl " />
              </div>
              <h3 className="mt-4 mb-2 text-lg font-bold">Payment</h3>
              <p className="text-sm">
                Commit your payment via Credit Card or Bank Transfer to confirm
                your reservation
              </p>
            </div>
            <div className="flex flex-col items-center text-center mb-10">
              <div className="bg-primary-color w-20 h-20 flex justify-center items-center rounded-full">
                <RiCaravanFill className="text-6xl " />
              </div>
              <h3 className="mt-4 mb-2 text-lg font-bold">Pick-up your car</h3>
              <p className="text-sm">
                Once arrived at the designated airport, pick up your reserved
                ride with our staff
              </p>
            </div>
            <div className="flex flex-col items-center text-center mb-10">
              <div className="bg-primary-color w-20 h-20 flex justify-center items-center rounded-full">
                <GrDropbox className="text-6xl " />
              </div>
              <h3 className="mt-4 mb-2 text-lg font-bold">Drop-off your car</h3>
              <p className="text-sm">
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
