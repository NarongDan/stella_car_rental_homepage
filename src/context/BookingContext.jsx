import { useContext } from "react";
import { createContext } from "react";
import bookingApi from "../apis/booking";

const BookingContext = createContext();

export default function BookingContextProvider({ children }) {
  const bookCar = (data) => {
    console.log(data);
    return bookingApi.placeBooking(data);
  };

  const calculateTotalAmount = (startDate, endDate, pricePerDay) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDiff = Math.abs(end - start);
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert time difference to days
    return daysDiff * pricePerDay;
  };
  const getBookingHistory = (id) => {
    return bookingApi.fetchHistoryBooking(id);
  };

  return (
    <BookingContext.Provider
      value={{ bookCar, calculateTotalAmount, getBookingHistory }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}
