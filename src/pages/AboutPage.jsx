import carabout from "../asset/image/pexels-dariuskrs-2470657.jpg";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-5">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl mx-auto p-8 flex flex-col md:flex-row">
        <div className="md:w-1/2 p-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            About Us
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Welcome to Stella Car Rental, your number one source for all your
            car rental needs. We're dedicated to giving you the very best of car
            rental services, with a focus on reliability, customer service, and
            uniqueness.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Founded in 2023, Stella Car Rental has come a long way from its
            beginnings. When we first started out, our passion for providing the
            best rental experience drove us to start our own business.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            We now serve customers all over the city, and are thrilled to be a
            part of the rental industry. We hope you enjoy our services as much
            as we enjoy offering them to you.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            If you have any questions or comments, please don't hesitate to
            contact us.
          </p>
        </div>
        <div className="w-full h-96 md:w-1/2 p-4 md:flex md:items-center md:min-h-[700px] ">
          <img
            src={carabout}
            alt="Car"
            className="w-full h-full object-cover rounded-lg shadow-md md:rounded-none md:rounded-tr-lg md:rounded-br-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
