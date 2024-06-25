export default function CarInfo({ car }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 p-6">
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Car Details</h2>
        <p>
          <span className="font-semibold">Brand:</span>
          {car.CarModel.brand}
        </p>
        <p>
          <span className="font-semibold">Model:</span>
          {car.CarModel.model}
        </p>
        <p>
          <span className="font-semibold">Color:</span>
          {car.CarModel.color}
        </p>
        <p>
          <span className="font-semibold">Fuel:</span>
          {car.CarModel.fuel}
        </p>
        <p>
          <span className="font-semibold">Seats:</span>
          {car.CarModel.seats}
        </p>
        <p>
          <span className="font-semibold">Transmission:</span>
          {car.CarModel.transmission}
        </p>
      </div>
    </div>
  );
}
