import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useCar } from "../context/CarContext";
import CarInfo from "../features/cars/component/CarInfo";
import { useBooking } from "../context/BookingContext";

import { useNavigate } from "react-router-dom";

export default function BookingConfirmationPage() {
  const { branches } = useCar();
  const location = useLocation();
  const { bookCar } = useBooking();
  const navigate = useNavigate();

  const { car, pickupLocation, startDate, endDate } = location.state;

  const [pickupLocationn, setPickupLocation] = useState("");
  const [dropOffLocation, setDropOffLocation] = useState("");
  const [pickupTime, setPickupTime] = useState("09:00");

  useEffect(() => {
    if (pickupLocation && branches) {
      const initialLocation = branches.find(
        (branch) => branch.branchId === parseInt(pickupLocation)
      );
      if (initialLocation) {
        setPickupLocation(initialLocation.branchName);
      }
    }
  }, [pickupLocation, branches]);

  useEffect(() => {
    if (branches && branches.length > 0) {
      setDropOffLocation(branches[0].branchId);
    }
  }, [branches]);

  const handleDropOffLocationChange = (event) => {
    setDropOffLocation(event.target.value);
  };

  const handlePickupTimeChange = (event) => {
    setPickupTime(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const data = {
        carId: car.carId,
        startDate: startDate,
        endDate: endDate,
        pickupLocationId: parseInt(pickupLocation),
        dropoffLocationId: parseInt(dropOffLocation),
        pickDropTime: pickupTime,
      };

      const res = await bookCar(data);

      window.location.href = res.data.url;
    } catch (error) {
      console.log(error);
    }
  };

  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 9; hour <= 20; hour++) {
      for (let minute of ["00", "30"]) {
        const time = `${hour.toString().padStart(2, "0")}:${minute}`;
        times.push(
          <option key={time} value={time}>
            {time}
          </option>
        );
      }
    }
    return times;
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Booking Confirmation</h2>
      <div className="mb-4">
        <CarInfo car={car} />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Pickup Location:
        </label>
        <select
          className="border border-gray-300 p-2 rounded w-full"
          value={pickupLocationn}
          disabled
        >
          <option value={pickupLocationn}>{pickupLocationn}</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Drop-off Location:
        </label>
        <select
          className="border border-gray-300 p-2 rounded w-full"
          value={dropOffLocation}
          onChange={handleDropOffLocationChange}
        >
          {branches &&
            branches.map((branch) => (
              <option key={branch.branchId} value={branch.branchId}>
                {branch.branchName}
              </option>
            ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Start Date:
        </label>
        <input
          type="date"
          className="border border-gray-300 p-2 rounded w-full"
          value={startDate}
          disabled
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">End Date:</label>
        <input
          type="date"
          className="border border-gray-300 p-2 rounded w-full"
          value={endDate}
          disabled
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Pick-up and Drop-off Time
        </label>
        <select
          className="border border-gray-300 p-2 rounded w-full"
          value={pickupTime}
          onChange={handlePickupTimeChange}
        >
          {generateTimeOptions()}
        </select>
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSubmit}
      >
        Book
      </button>
    </div>
  );
}
