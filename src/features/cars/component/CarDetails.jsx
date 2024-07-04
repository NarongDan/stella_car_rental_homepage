export default function CarDetails({ car }) {
  return (
    <div className=" gird  gap-2 p-4 shadow-md bg-white rounded-2xl">
      <p>
        <span className="font-semibold">Brand: </span>
        {car.brand}
      </p>
      <p>
        <span className="font-semibold">Model: </span>
        {car.model}
      </p>
      <p>
        <span className="font-semibold">Color: </span>
        {car.color}
      </p>
      <p>
        <span className="font-semibold">Fuel: </span>
        {car.fuel}
      </p>
      <p>
        <span className="font-semibold">Seats: </span>
        {car.seats}
      </p>
      <p>
        <span className="font-semibold">Transmission: </span>
        {car.transmission}
      </p>

      <p>
        <span className="font-semibold">Price Per Day: </span>
        {car.CarType.pricePerDay} THB
      </p>
    </div>
  );
}
