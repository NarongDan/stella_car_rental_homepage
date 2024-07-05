import LoadingSpinner from "../../../components/LoadingSpinner";
import { useBooking } from "../../../context/BookingContext";
import { useState, useEffect } from "react";

export default function CustomerBookings() {
  const { getBookingHistory } = useBooking();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBooking = booking
    .sort((a, b) => b.bookingId - a.bookingId)
    .slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(booking.length / itemsPerPage);
  //

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
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse  ">
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
              {currentBooking?.map((items) => (
                <tr
                  key={items.id}
                  className="bg-gray-100 border-b border-gray-300"
                >
                  <td className="p-2 whitespace-nowrap">{items.bookingId}</td>
                  <td className="p-2 whitespace-nowrap">
                    {items.Car.CarModel.brand}
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    {items.Car.CarModel.model}
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    {items.Car.CarModel.color}
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    {new Date(items.startDate).toLocaleDateString()}
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    {new Date(items.endDate).toLocaleDateString()}
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    {items.PickupLocation.branchName}
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    {items.DropoffLocation.branchName}
                  </td>
                  <td className="p-2 whitespace-nowrap">{items.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center gap-2 mt-4 flex-wrap">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-4 py-2 bg-secondary-color text-white hover:bg-thirdly-color rounded-lg"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {[...Array(totalPages).keys()].map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === number + 1
                  ? "bg-secondary-color text-white hover:bg-thirdly-color rounded-lg"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            >
              {number + 1}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="px-4 py-2 bg-secondary-color text-white hover:bg-thirdly-color rounded-lg"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
