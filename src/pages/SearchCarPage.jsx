import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCar } from "../context/CarContext";
import { MdElectricCar } from "react-icons/md";
import { TbCar } from "react-icons/tb";
import { PiCarProfileFill } from "react-icons/pi";
import { RiPoliceCarFill } from "react-icons/ri";
import { BsCarFront } from "react-icons/bs";

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

        // Filter and store only one car per CarType
        const carsFiltered = response.data.reduce((acc, car) => {
          const carType = car.CarModel.CarType.carTypeName;
          if (!acc.some((c) => c.CarModel.CarType.carTypeName === carType)) {
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
    return <div>Loading...</div>;
  }

  return (
    <div
      className="container mx-auto p-4 "
      content="width=device-width, initial-scale=1.0"
    >
      <h2 className="text-2xl font-bold mb-4">Available Cars</h2>
      {/* ปุ่มสำหรับเลือกแสดงข้อมูลรถตามประเภท */}
      <div className="flex space-x-4 mb-4">
        <button
          onClick={clearFilteredCars}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded "
        >
          All Car Types
        </button>
        <button
          onClick={() => filterCarsByType("economy")}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded flex gap-1 justify-center items-center"
        >
          <TbCar />
          Economy
        </button>
        <button
          onClick={() => filterCarsByType("compact")}
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded flex gap-1 justify-center items-center"
        >
          <PiCarProfileFill />
          Compact
        </button>
        <button
          onClick={() => filterCarsByType("standard")}
          className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded flex gap-1 justify-center items-center"
        >
          <BsCarFront />
          Standard
        </button>
        <button
          onClick={() => filterCarsByType("premium")}
          className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded flex gap-1 justify-center items-center"
        >
          <RiPoliceCarFill />
          Premium
        </button>
        <button
          onClick={() => filterCarsByType("electric")}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded flex items-center text-center gap-1"
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
              <li
                key={car.carId}
                className="border border-gray-300 p-4 rounded mb-4 grid grid-cols-2 "
              >
                <img src="src/image/CarHero.png" alt="" className=" " />{" "}
                <div>
                  <div className="font-bold ">
                    Car Type: {car.CarModel.CarType.carTypeName}
                  </div>
                  <div>Model: {car.CarModel.model}</div>
                  <div>Brand: {car.CarModel.brand}</div>
                  <div>Color: {car.CarModel.color}</div>
                  <div>License Plate: {car.licensePlate}</div>
                  <div>Status: {car.status}</div>
                  <button
                    onClick={() => handleBookClick(car.carId)}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-2"
                  >
                    Book
                  </button>
                </div>


                <div>Model: {car.CarModel.model}</div>
                <div>Brand: {car.CarModel.brand}</div>
                <div>Color: {car.CarModel.color}</div>
                <div>License Plate: {car.licensePlate}</div>
                <div>Status: {car.status}</div>
                <button
                  onClick={() => handleBookClick(car)}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-2"
                >
                  Book
                </button>

              </li>
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
            <li
              key={car.carId}
              className="border border-gray-300 p-4 rounded mb-4"
            >
              <div className="font-bold">
                Car Type: {car.CarModel.CarType.carTypeName}
              </div>
              <div>Model: {car.CarModel.model}</div>
              <div>Brand: {car.CarModel.brand}</div>
              <div>Color: {car.CarModel.color}</div>
              <div>License Plate: {car.licensePlate}</div>
              <div>Status: {car.status}</div>
              <button
                onClick={() => handleBookClick(car.carId)}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-2"
              >
                Book
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
