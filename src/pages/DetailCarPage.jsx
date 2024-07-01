import img from "../image/Car.png";

export default function DetailCarPage() {
  return (
    <div>
      <div>
        <div className="w-1/2 mx-auto border-2 rounded-xl mt-5">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="flex justify-around">
        <div className="grid">
          <div>Seats</div>
          <div>Mileage</div>
          <div>Transmission</div>
          <div>Fuel</div>
        </div>
        <div className=" grid grid-col-3">
          <div>Airconditions</div>
          <div>Audio input</div>
          <div>Music</div>
          <div>GPS</div>
          <div>Bluetooth</div>
          <div>Car Kit</div>
          <div>Sleeping Bed</div>
          <div>Onboard computer</div>
          <div>Seat Belt</div>
        </div>
      </div>
    </div>
  );
}
