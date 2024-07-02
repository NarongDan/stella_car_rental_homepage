import { useState } from "react";
import DetailCarPage from "../pages/DetailCarPage";
import Modal from "./Modal";

export default function CarCard({
  image,
  Seats,
  Transmission,
  Fuel,
  Model,
  Brand,
}) {
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="car-card border-2 p-2 border-gray-200 shadow-md  ">
        <div className="grid gap-4 justify-items-center">
          {" "}
          <h1 className="text-3xl font-semibold ">{`${Brand} : ${Model}`}</h1>
          <img src={image} className="w-auto  md:w-5/6" />
        </div>

        <div className="car-actions border-1 rounded-lg mt-4 mb-4 flex justify-center">
          <button
            className="details-button p-2 bg-secondary-color text-white md: w-[8rem] hover:bg-thirdly-color rounded-md"
            onClick={() => setOpen(true)}
          >
            Details
          </button>
        </div>
      </div>

      <Modal open={open} onClose={closeModal} title="Car Detail">
        <DetailCarPage
          image={image}
          Seats={Seats}
          Transmission={Transmission}
          Fuel={Fuel}
        />
      </Modal>
    </>
  );
}
