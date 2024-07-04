import { FcCheckmark } from "react-icons/fc";

export default function CarFeatures({ h }) {
  return (
    <div
      className={`flex flex-col p-4 shadow-md bg-white rounded-2xl gap-2 ${h}`}
    >
      <div className="font-semibold">Features :</div>
      <div className="flex flex-col sm:flex-row gap-2">
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
  );
}
