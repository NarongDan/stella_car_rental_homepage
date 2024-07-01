export default function CarSearchCard({ car, handleBookClick }) {
  return (
    <li className="border border-gray-300 p-6 mb-4 flex flex-col md:flex-row justify-between items-center shadow-xl shadow-gary-500 rounded-3xl ">
      <div className=" w-96 md:w-2/6">
        <img src={car.CarModel.CarImages[0].imageUrl} alt="" className="   " />
      </div>

      <div className="flex flex-col gap-4 mt-4 md:border-l-4 border-black pl-4">
        <div className="font-bold text-2xl ">
          Car Type: {car.CarModel.CarType.carTypeName}
        </div>
        <div>Model: {car.CarModel.model}</div>
        <div>Brand: {car.CarModel.brand}</div>
        <div>Color: {car.CarModel.color}</div>
        <div>Status: {car.status}</div>
      </div>
      <div className="flex flex-col gap-4 mt-4 items-center md:items-end ">
        <div className="text-sm md:text-xl animate-pulse text-orange-500">
          Book Now!
        </div>
        <div className="font-medium text-xl md:text-3xl  tracking-wide">
          {car.CarModel.CarType.pricePerDay}.00/Day{" "}
        </div>
        <button
          onClick={() => handleBookClick(car)}
          className="  w-28 md:w-52 bg-secondary-color hover:bg-thirdly-color text-white py-2 px-4 rounded mt-2"
        >
          Book
        </button>
      </div>
    </li>
  );
}
