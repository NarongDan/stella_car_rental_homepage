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
      <div className="border-2 p-2 border-gray-200 shadow-md flex flex-col rounded">
        <div className="grid gap-4 justify-items-center mb-5">
          <h1 className="text-3xl font-semibold pt-2">{`${Brand} : ${Model}`}</h1>
          <div className="w-[300px] h-[200px] grid justify-center">
            <img src={image} className="w-[95%] h-[90%] object-fit" />
          </div>
          <button
            className="details-button p-2 bg-secondary-color text-white md:w-[8rem] hover:bg-thirdly-color rounded-md"
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
