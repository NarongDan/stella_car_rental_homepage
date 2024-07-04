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
                <th className="p-2 text-left">Booking ID</th>
                <th className="p-2 text-left">Brand</th>
                <th className="p-2 text-left">Model</th>
                <th className="p-2 text-left">Color</th>
                <th className="p-2 text-left">Start Date</th>
                <th className="p-2 text-left">End Date</th>
                <th className="p-2 text-left">Pick Up</th>
                <th className="p-2 text-left">Drop Off</th>
                <th className="p-2 text-left">Status</th>
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
