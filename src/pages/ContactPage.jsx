import Img from "../asset/image/pexels-dariuskrs-2470657.jpg";
import ContactForm from "../components/ContactForm";
import GoogleMap from "../components/GoogleMap";

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto mt-10 bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Banner  */}
      <div className="relative">
        <img src={Img} alt="Contact Us" className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Stella Car Rental</h1>
        </div>
      </div>

      {/* Contact Information  */}
      <div className="p-10 bg-gray-100">
        <div className="flex flex-col space-y-10 md:flex-row md:space-x-6 md:space-y-0">
          <div className="bg-white shadow-md rounded-lg p-6 space-y-4 flex-1">
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
          {/* Contact Form  */}
          <ContactForm />
        </div>
      </div>

      {/* Google Map  */}
      <div className="h-full w-full rounded-lg overflow-hidden shadow-md mb-10">
        <GoogleMap />
      </div>
    </div>
  );
}
