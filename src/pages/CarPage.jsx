import CarCard from "../components/CarCard";
import img from "../image/CarHero.png";

const cars = [
  { name: "Yaris AITV", image: img },
  { name: "Yaris", image: img },
  { name: "Corolla Altis", image: img },
  { name: "Camry", image: img },
  { name: "GR Supra", image: img },
  { name: "GR 86", image: img },
  { name: "Fortuner", image: img },
  { name: "Veloz", image: img },
  { name: "Majesty", image: img },
  { name: "Majesty", image: img },
  { name: "Majesty", image: img },
  { name: "Majesty", image: img },
  { name: "Majesty", image: img },
  { name: "Majesty", image: img },
  { name: "Majesty", image: img },
  { name: "Majesty", image: img },
  { name: "Majesty", image: img },
  { name: "Majesty", image: img },
  { name: "Majesty", image: img },
];

export default function CarPage() {
  return (
    <main className="flex justify-center ">
      <div className="container bg-gradient-to-b from-white to-orange-400">
        <div className="flex justify-end pr-12 pt-2 ">
          <input
            type="text"
            placeholder="search"
            className="p-1 pl-2 border-1 "
          />
        </div>
        <div className="car-list grid grid-cols-5 gap-2 p-10 ">
          {cars.map((car, index) => (
            <CarCard key={index} name={car.name} image={car.image} />
          ))}
        </div>
      </div>
    </main>
  );
}
