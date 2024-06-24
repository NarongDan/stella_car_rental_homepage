import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import carApi from "../apis/car";
import { useEffect } from "react";

const CarContext = createContext();
export default function CarContextProvider({ children }) {
  const [car, setCar] = useState(null);
  const [branches, setBranches] = useState(null);

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

  //pickupLocation - startDate - endDate
  const fetchAvailableCars = (data) => {
    return carApi.getAllCarsAvailable(data);
  };

  return (
    <CarContext.Provider value={{ branches, setBranches, fetchAvailableCars }}>
      {children}
    </CarContext.Provider>
  );
}

export function useCar() {
  return useContext(CarContext);
}
