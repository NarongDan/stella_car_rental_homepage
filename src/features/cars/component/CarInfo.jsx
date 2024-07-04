import CarDetails from "./CarDetails";
import CarFeatures from "./CarFeatures";

export default function CarInfo({ car }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-xl bg-white ml-4 mr-4 mb-4 p-6 border border-gray-100">
      <div className="container mb-4 ">
        <h2 className="w-full mx-auto text-center text-2xl font-bold mb-4">
          Car Details
        </h2>
        <div className="grid grid-cols-1  gap-4 p-2">
          {/* Image  */}
          {car.CarModel.CarImages && car.CarModel.CarImages.length > 0 && (
            <div className="mb-4">
              <img
                src={car.CarModel.CarImages[0].imageUrl}
                alt={`${car.brand} ${car.model}`}
                className="w-full h-full object-fit rounded"
              />
            </div>
          )}

          {/* Details and Features  */}
          <div className="flex flex-col gap-2 lg:flex-row ">
            {/* Details  */}
            <div className="w-full ">
              <CarDetails car={car.CarModel} h={"h-[200px]"} />
            </div>
            <div className="w-full">
              {/* Features  */}
              <CarFeatures h={"h-[200px]"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
