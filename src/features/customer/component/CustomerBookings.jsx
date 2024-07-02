import LoadingSpinner from "../../../components/LoadingSpinner";
import { useBooking } from "../../../context/BookingContext";
import { useState, useEffect } from "react";

export default function CustomerBookings() {
  const { getBookingHistory } = useBooking();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);

  const getMyBooking = async () => {
    try {
      const res = await getBookingHistory();
      setBooking(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMyBooking();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <div className="overflow-x-auto   ">
          <table className="min-w-full border-collapse ">
            <thead>
              <tr className="bg-orange-500 text-white">
                <th className="p-2 text-left">BookingId</th>
                <th className="p-2 text-left">carband</th>
                <th className="p-2 text-left">carmodel</th>
                <th className="p-2 text-left">carcolor</th>
                <th className="p-2 text-left">startDate</th>
                <th className="p-2 text-left">endDate</th>
                <th className="p-2 text-left">pickupLocationId</th>
                <th className="p-2 text-left">dropoffLocationId</th>
                <th className="p-2 text-left">status</th>
              </tr>
            </thead>
            <tbody>
              {booking?.map((items) => (
                <tr
                  key={items.id}
                  className="bg-gray-100 border-b border-gray-300"
                >
                  <td className="p-2">{items.bookingId}</td>
                  <td className="p-2">{items.Car.CarModel.brand}</td>
                  <td className="p-2">{items.Car.CarModel.model}</td>
                  <td className="p-2">{items.Car.CarModel.color}</td>
                  <td className="p-2">
                    {new Date(items.startDate).toLocaleDateString()}
                  </td>
                  <td className="p-2">
                    {new Date(items.endDate).toLocaleDateString()}
                  </td>
                  <td className="p-2">{items.PickupLocation.branchName}</td>
                  <td className="p-2">{items.DropoffLocation.branchName}</td>
                  <td className="p-2">{items.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
