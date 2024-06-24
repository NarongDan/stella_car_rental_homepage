import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCar } from "../../../context/CarContext";

export default function SearchCarInput() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [pickupLocationSelected, setPickupLocationSelected] = useState(false); // เพิ่ม state สำหรับตรวจสอบว่าเลือก pickupLocation แล้วหรือยัง
  const { branches } = useCar();
  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0]; // วันที่ปัจจุบัน

  const handlePickupLocationChange = (e) => {
    const selectedPickupLocation = e.target.value;
    if (selectedPickupLocation === "") {
      // เมื่อเลือก "Select a location" ให้เซ็ต pickupLocationSelected เป็น false
      setPickupLocation("");
      setPickupLocationSelected(false);
    } else {
      setPickupLocation(selectedPickupLocation);
      setPickupLocationSelected(true);
    }
  };

  const handleStartDateChange = (e) => {
    const selectedStartDate = e.target.value;
    if (!pickupLocationSelected) {
      return; // ถ้ายังไม่เลือก pickupLocation ให้ไม่ทำอะไรเมื่อเลือกวันที่ startDate
    }
    if (selectedStartDate <= today) {
      setStartDate("");
    } else {
      setStartDate(selectedStartDate);
    }
  };

  const handleEndDateChange = (e) => {
    const selectedEndDate = e.target.value;
    if (!pickupLocationSelected) {
      return; // ถ้ายังไม่เลือก pickupLocation ให้ไม่ทำอะไรเมื่อเลือกวันที่ endDate
    }
    if (selectedEndDate <= startDate) {
      setEndDate("");
    } else {
      setEndDate(selectedEndDate);
    }
  };

  const handleSearch = () => {
    navigate(
      `/search-car?pickupLocation=${pickupLocation}&startDate=${startDate}&endDate=${endDate}`
    );
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label>Pickup Location:</label>
          <select
            className="border p-2 w-full"
            value={pickupLocation}
            onChange={handlePickupLocationChange}
          >
            <option value="">Select a location</option>
            {branches?.map((branch) => (
              <option key={branch.branchId} value={branch.branchId}>
                {branch.branchName}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Start Date:</label>
          <input
            type="date"
            className="border p-2 w-full"
            value={startDate}
            onChange={handleStartDateChange}
            max={endDate} // Set max attribute to restrict dates
            min={today}
            disabled={!pickupLocationSelected} // ใช้งานเมื่อเลือก pickupLocation แล้วเท่านั้น
          />
        </div>

        <div>
          <label>End Date:</label>
          <input
            type="date"
            className="border p-2 w-full"
            value={endDate}
            onChange={handleEndDateChange}
            min={startDate} // Set min attribute to restrict dates
            disabled={!pickupLocationSelected || !startDate} // ใช้งานเมื่อเลือก pickupLocation และ startDate แล้วเท่านั้น
          />
        </div>

        <button
          className="bg-blue-500 text-white p-2 mt-4"
          onClick={handleSearch}
          disabled={!pickupLocationSelected || !startDate || !endDate} // ปุ่ม Search ใช้งานเมื่อเลือก pickupLocation, startDate และ endDate แล้วเท่านั้น
        >
          Search Cars
        </button>
      </div>
    </div>
  );
}
