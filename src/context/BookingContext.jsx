import { useContext } from "react";
import { createContext } from "react";
import bookingApi from "../apis/booking";

const BookingContext = createContext();

export default function BookingContextProvider({ children }) {
  const bookCar = (data) => {
    console.log(data);
    return bookingApi.placeBooking(data);
  };

  return (
    <BookingContext.Provider value={{ bookCar }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}
