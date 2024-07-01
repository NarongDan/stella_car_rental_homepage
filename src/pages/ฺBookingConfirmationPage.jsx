import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useCar } from "../context/CarContext";
import CarInfo from "../features/cars/component/CarInfo";
import { useBooking } from "../context/BookingContext";
import { useAuth } from "../context/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner";
import { Link } from "react-router-dom";

export default function BookingConfirmationPage() {
  const { branches } = useCar();
  const location = useLocation();
  const { bookCar, calculateTotalAmount } = useBooking();
  const { authUser } = useAuth();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

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
    if (!authUser) {
      setError(true);
    } else {
      try {
        const data = {
          carId: car.carId,
          startDate: startDate,
          endDate: endDate,
          pickupLocationId: parseInt(pickupLocation),
          dropoffLocationId: parseInt(dropOffLocation),
          pickDropTime: pickupTime,
        };

        setLoading(true);
        const res = await bookCar(data);

        window.location.href = res.data.url;
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
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

  const totalAmount = calculateTotalAmount(
    startDate,
    endDate,
    car.CarModel.CarType.pricePerDay
  );

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Booking Confirmation</h2>
      {/* Confirmation Box  */}
      <div className="container flex flex-col md:flex-row ">
        {/* Car Information */}
        <div className="md:w-2/3  mb-4">
          <CarInfo car={car} />
        </div>
        {/* Booking Option Box  */}
        <div className="md:w-1/3 border border-gray-200 p-10  ">
          {/* Pickup Location  */}
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

          {/* Dropoff Location  */}
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

          {/* Start Date  */}
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
          {/* End Date  */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              End Date:
            </label>
            <input
              type="date"
              className="border border-gray-300 p-2 rounded w-full"
              value={endDate}
              disabled
            />
          </div>
          {/* Pick up and Drop off Time */}
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
          {/* Total Amount */}
          <div className="w-full flex justify-center mb-10">
            <p className="font-bold text-2xl">Total: {totalAmount} </p>
          </div>

          {/* Button  */}

          <div className="flex w-full space-x-5">
            <button
              className=" w-full bg-secondary-color hover:bg-thirdly-color text-white font-bold py-2 px-4 rounded"
              onClick={handleSubmit}
            >
              Book
            </button>

            <button className="w-full bg-secondary-color hover:bg-thirdly-color text-white font-bold py-2 px-4 rounded">
              Redeem
            </button>
          </div>
          <p className={error ? "block text-red-600 mt-2" : "hidden"}>
            Please <span> </span>
            <Link to="/login" className="underline">
              register
            </Link>
            <span> </span>
            before making payment
          </p>
        </div>
      </div>
    </div>
  );
}
