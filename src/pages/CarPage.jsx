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
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCarImg();
  }, []);

  return (
    <main className="flex justify-center  ">
      <div className="container">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 p-10  ">
          {cars?.map((car, index) => (
            <CarCard key={index} car={car} />
          ))}
        </div>
      </div>
    </main>
  );
}
