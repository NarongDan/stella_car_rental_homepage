import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const CarContext = createContext();
export default function CarContextProvider({ children }) {
  const [car, setCar] = useState(null);

  return <CarContext.Provider>{children}</CarContext.Provider>;
}

export function useCar() {
  return useContext(CarContext);
}
