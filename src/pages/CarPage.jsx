import { useState } from "react";
import CarCard from "../components/CarCard";
import img from "../image/CarHero.png";
import DetailCarPage from "./DetailCarPage";
import carApi from "../apis/car";
import { useEffect } from "react";

// const cars = [
//   { name: "Yaris AITV", image: img },
//   { name: "Yaris", image: img },
//   { name: "Corolla Altis", image: img },
//   { name: "Camry", image: img },
//   { name: "GR Supra", image: img },
//   { name: "GR 86", image: img },
//   { name: "Fortuner", image: img },
// ];

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
    <main className="flex justify-center ">
      <div className="container  ">
        <div className="flex justify-end pr-12 pt-2 ">
          <input
            type="text"
            placeholder="search"
            className="p-1 pl-2 border-1 "
          />
        </div>
        <div className="car-list grid grid-cols-3 gap-2 p-10  ">
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
