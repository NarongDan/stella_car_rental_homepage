import Img from "../asset/image/pexels-dariuskrs-2470657.jpg";
import ContactForm from "../components/ContactForm";
import GoogleMap from "../components/GoogleMap";

export default function ContactPage() {
  return (
    <div className=" mx-auto bg-gray-100 rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img src={Img} alt="Contact Us" className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white">
            Stella Car Rental
          </h1>
        </div>
      </div>

      <div className="p-10 bg-gray-100">
        <div className="flex flex-col space-y-10 md:flex-row md:space-x-6 md:space-y-0 max-w-7xl mx-auto">
          <div className=" bg-white shadow-md rounded-lg p-6 space-y-4 flex-1 ">
            <h2 className="text-2xl font-bold text-gray-800">
              Contact Information
            </h2>
            <div className="text-gray-800">
              <h3 className="font-semibold">Head Office</h3>
              <p>Suvarnabhumi Airport</p>
              <h3 className="font-semibold mt-4">Branch Office</h3>
              <p>Phuket International Airport </p>
              <p>Chiang Mai International Airport </p>
              <p>Mae Sot Airport </p>
              <p>Udon Thani International Airport </p>
              <h3 className="font-semibold mt-4">Phone (Thailand)</h3>
              <p>+66 888 888 888</p>
              <h3 className="font-semibold mt-4">Email</h3>
              <p>info@stellacarrental.com</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
      <div className=" h-full w-full rounded-lg overflow-hidden shadow-md mb-10 max-w-7xl mx-auto ">
        <GoogleMap />
      </div>
    </div>
  );
}
