import { FcCheckmark } from "react-icons/fc";

export default function DetailCarPage({ image, Seats, Transmission, Fuel }) {
  return (
    <div>
      <div>
        <div className="w-1/2 mx-auto border-2 rounded-md mt-5 object-cover shadow-xl bg-white">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="grid md:grid-flow-col  mt-2 gap-4  ">
        <div className=" gird  gap-2 p-4 mt-2 shadow-md bg-white rounded-2xl">
          <div>Seats : {Seats}</div>
          <div>Transmission : {Transmission}</div>
          <div>Fuel : {Fuel}</div>
        </div>
        <div className=" flex flex-col gap-2 p-4 mt-2 shadow-md bg-white rounded-2xl  ">
          <div>Features :</div>
          <div className="flex gap-2">
            <div>
              <div className="flex gap-2">
                <FcCheckmark />
                Airconditions
              </div>
              <div className="flex gap-2">
                <FcCheckmark />
                Audio input
              </div>
              <div className="flex gap-2">
                <FcCheckmark />
                Music
              </div>
            </div>

            <div>
              <div className="flex gap-2">
                <FcCheckmark />
                GPS
              </div>
              <div className="flex gap-2">
                <FcCheckmark />
                Bluetooth
              </div>
              <div className="flex gap-2">
                <FcCheckmark />
                Car Kit
              </div>
            </div>
            <div>
              <div className="flex gap-2">
                <FcCheckmark />
                Sleeping Bed
              </div>
              <div className="flex gap-2">
                <FcCheckmark />
                Onboard computer
              </div>
              <div className="flex gap-2">
                <FcCheckmark />
                Seat Belt
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
