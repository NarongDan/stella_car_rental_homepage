import { useState, useEffect } from "react";
import carApi from "../../../apis/car";
import { useNavigate } from "react-router-dom";

const SearchCarInput = () => {
  const [branches, setBranches] = useState(null);
  const [pickupLocation, setPickupLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const navigate = useNavigate();
  const fetchBranches = async () => {
    try {
      const response = await carApi.getBranches();
      setBranches(response.data);
    } catch (error) {
      console.error("Error fetching branches:", error);
    }
  };

  useEffect(() => {
    fetchBranches();
  }, []);

  const handleSearch = () => {
    navigate("search-car");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label>Pickup Location:</label>
          <select
            className="border p-2 w-full"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
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
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div>
          <label>End Date:</label>
          <input
            type="date"
            className="border p-2 w-full"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <button
          className="bg-blue-500 text-white p-2 mt-4"
          onClick={handleSearch}
        >
          Search Cars
        </button>
      </div>
    </div>
  );
};

export default SearchCarInput;
