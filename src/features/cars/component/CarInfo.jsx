export default function CarInfo({ car }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-xl bg-white ml-4 mr-4 mb-4 p-6 border border-gray-100">
      <div className="container mb-4 ">
        <h2 className="w-full mx-auto text-center text-2xl font-bold mb-4">
          Car Details
        </h2>
        <div className="grid grid-cols-1  gap-4 p-2">
          {car.CarModel.CarImages && car.CarModel.CarImages.length > 0 && (
            <div className="mb-4">
              <img
                src={car.CarModel.CarImages[0].imageUrl}
                alt={`${car.brand} ${car.model}`}
                className="w-full h-full object-fit rounded"
              />
            </div>
          )}
          <div>
            <p>
              <span className="font-semibold">Brand: </span>
              {car.CarModel.brand}
            </p>
            <p>
              <span className="font-semibold">Model: </span>
              {car.CarModel.model}
            </p>
            <p>
              <span className="font-semibold">Color: </span>
              {car.CarModel.color}
            </p>
            <p>
              <span className="font-semibold">Fuel: </span>
              {car.CarModel.fuel}
            </p>
            <p>
              <span className="font-semibold">Seats: </span>
              {car.CarModel.seats}
            </p>
            <p>
              <span className="font-semibold">Transmission: </span>
              {car.CarModel.transmission}
            </p>

            <p>
              <span className="font-semibold">Price Per Day: </span>
              {car.CarModel.CarType.pricePerDay} THB
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
