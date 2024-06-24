// eslint-disable-next-line no-unused-vars
import React from "react";
import Img from "../img/carabout.jpg";

function AboutPage() {
  return (
    <div className="flex justify-center">
      <main className="p-10 bg-white">
        <section className="flex flex-col lg:flex-row items-center">
          <img src={Img} alt="Cars" className="lg:w-1/2 rounded-lg mb-5"/>
          <div className="lg:ml-10 lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to Stella Car Rental
            </h1>
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-400 text-white rounded">
              Book Now
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AboutPage;
