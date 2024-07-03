import { useState } from "react";
import CarCard from "../components/CarCard";

import carApi from "../apis/car";
import { useEffect } from "react";

export default function CarPage() {
  const [cars, setGetCarImg] = useState();

  const getCarImg = async () => {
    try {
      const res = await carApi.getAllCarModels();
      setGetCarImg(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCarImg();
  }, []);

  return (
    <main className=" flex justify-center  ">
      <div className="container">
        <div className="car-list grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-10  ">
          {cars?.map((car, index) => (
            <CarCard
              key={index}
              name={car.name}
              image={car.CarImages[0].imageUrl}
              Seats={car.seats}
              Transmission={car.transmission}
              Fuel={car.fuel}
              Brand={car.brand}
              Model={car.model}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
