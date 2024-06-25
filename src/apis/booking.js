import axios from "../config/axios";

const bookingApi = {};

/* data = {
  const data = {
      customerId: req.user.customerId,
      carId: +req.body.carId,
      startDate: new Date(req.body.startDate),
      endDate: new Date(req.body.endDate),
      pickDropTime: req.body.pickDropTime,
      totalAmount: amount,
      pickupLocationId: +req.body.pickupLocationId,
      dropoffLocationId: +req.body.dropoffLocationId,
    };
*/

bookingApi.placeBooking = (data) =>
  axios.post("/payment/create-checkout-session", data);
export default bookingApi;
