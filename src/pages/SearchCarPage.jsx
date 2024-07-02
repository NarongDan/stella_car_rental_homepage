import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCar } from "../context/CarContext";
import { MdElectricCar } from "react-icons/md";
import { TbCar } from "react-icons/tb";
import { PiCarProfileFill } from "react-icons/pi";
import { RiPoliceCarFill } from "react-icons/ri";
import { BsCarFront } from "react-icons/bs";
import LoadingSpinner from "../components/LoadingSpinner";
import CarSearchCard from "../features/cars/component/CarSearchCard";

export default function SearchCarPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const pickupLocation = queryParams.get("pickupLocation");
  const startDate = queryParams.get("startDate");
  const endDate = queryParams.get("endDate");
  const { fetchAvailableCars } = useCar();
  const navigate = useNavigate(); // เรียกใช้ useNavigate สำหรับการ redirect

  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState(null); // สร้าง state สำหรับเก็บรถที่กรอง

  useEffect(() => {
    const fetchCarsAvailable = async () => {
      try {
        const response = await fetchAvailableCars({
          pickupLocationId: pickupLocation,
          startDate: startDate,
          endDate: endDate,
        });

        // Filter and store only one car per CarType and Car Model
        const carsFiltered = response.data.reduce((acc, car) => {
          const carType = car.CarModel.CarType.carTypeName;
          const carModelId = car.CarModel.carModelId;

          if (
            !acc.some(
              (c) =>
                c.CarModel.CarType.carTypeName === carType &&
                c.CarModel.carModelId === carModelId
            )
          ) {
            acc.push(car);
          }
          return acc;
        }, []);

        setCars(carsFiltered);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching available cars:", error);
        setCars([]);
        setLoading(false);
      }
    };

    fetchCarsAvailable();
  }, [fetchAvailableCars, pickupLocation, startDate, endDate]);

  // เอา Car Type มาทำปุ่ม และเมื่อกด เอารถมาแสดง

  const filterCarsByType = (carType) => {
    const filtered = cars.filter(
      (car) => car.CarModel.CarType.carTypeName.toLowerCase() === carType
    );
    if (filtered.length === 0) {
      setFilteredCars([]);
    } else {
      setFilteredCars(filtered);
    }
  };

  const clearFilteredCars = () => {
    setFilteredCars(null); // เคลียร์การกรอง
  };

  const handleBookClick = (car) => {
    navigate("/booking", {
      state: { car, pickupLocation, startDate, endDate }, // ส่ง state ไปให้กับ BookingConfirmationPage
    });
  };
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div
      className="container mx-auto p-4 "
      content="width=device-width, initial-scale=1.0"
    >
      <h2 className="text-2xl font-bold mb-4">Available Cars</h2>
      {/* ปุ่มสำหรับเลือกแสดงข้อมูลรถตามประเภท */}
      <div className="grid grid-cols-6 space-x-2 mb-4 ">
        <button
          onClick={clearFilteredCars}
          className=" text-[1rem]  md:text-[1.5rem] border-2  hover:bg-blue-500 text-gray-600 hover:text-white py-2 px-4 rounded-md"
        >
          All Car Types
        </button>
        <button
          onClick={() => filterCarsByType("economy")}
          className="text-[1rem]  md:text-[1.5rem] border-2  hover:bg-green-500 text-gray-600 hover:text-white py-2 px-4 rounded-md flex gap-1 justify-center items-center"
        >
          <TbCar />
          Economy
        </button>
        <button
          onClick={() => filterCarsByType("compact")}
          className="text-[1rem]  md:text-[1.5rem] border-2  hover:bg-red-500 text-gray-600 hover:text-white py-2 px-4 rounded-md flex gap-1 justify-center items-center"
        >
          <PiCarProfileFill />
          Compact
        </button>
        <button
          onClick={() => filterCarsByType("standard")}
          className="text-[1rem]  md:text-[1.5rem] border-2  hover:bg-indigo-500 text-gray-600 hover:text-white py-2 px-4 rounded-md flex gap-1 justify-center items-center"
        >
          <BsCarFront />
          Standard
        </button>
        <button
          onClick={() => filterCarsByType("premium")}
          className="text-[1rem]  md:text-[1.5rem] border-2  hover:bg-purple-500 text-gray-600 hover:text-white py-2 px-4 rounded-md flex gap-1 justify-center items-center"
        >
          <RiPoliceCarFill />
          Premium
        </button>
        <button
          onClick={() => filterCarsByType("electric")}
          className="text-[1rem]  md:text-[1.5rem] border-2  hover:bg-yellow-500 text-gray-600 hover:text-white py-2 px-4 rounded-md flex gap-1 justify-center items-center"
        >
          <MdElectricCar />
          Electric
        </button>
      </div>
      {/* แสดงรายการรถที่ได้กรองหรือทั้งหมด */}
      {filteredCars === null ? (
        cars.length === 0 ? (
          <div className="text-center text-gray-600">
            No cars available for the selected dates and location.
          </div>
        ) : (
          <ul>
            {cars.map((car) => (
              <CarSearchCard
                key={car.carId}
                car={car}
                handleBookClick={handleBookClick}
              />
            ))}
          </ul>
        )
      ) : filteredCars.length === 0 ? (
        <div className="text-center text-gray-600">
          No cars available for the selected car type.
        </div>
      ) : (
        <ul>
          {filteredCars.map((car) => (
            <CarSearchCard
              key={car.carId}
              car={car}
              handleBookClick={handleBookClick}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
