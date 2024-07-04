import { useState } from "react";
import DetailCarPage from "../pages/DetailCarPage";
import Modal from "./Modal";

export default function CarCard({ car }) {
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="min-w-[320px] border-2 p-2 border-gray-200 shadow-md flex flex-col rounded">
        <div className="grid gap-4 justify-items-center mb-5">
          <h1 className="text-3xl font-semibold pt-2">{`${car.brand} : ${car.model}`}</h1>
          <div className="w-[300px] h-[200px] grid justify-center">
            <img
              src={car.CarImages[0].imageUrl}
              className="w-full h-[200px] object-contain"
            />
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
        <DetailCarPage car={car} />
      </Modal>
    </>
  );
}
