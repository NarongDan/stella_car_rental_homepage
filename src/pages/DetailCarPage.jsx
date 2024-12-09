import CarDetails from "../features/cars/component/CarDetails";
import CarFeatures from "../features/cars/component/CarFeatures";

export default function DetailCarPage({ car }) {
  return (
    <div>
      <div>
        <div className="min-w-[300px] mx-auto border-2 rounded-md my-5 object-cover shadow-xl bg-white">
          <img src={car?.CarImages[0].imageUrl} alt="" />
        </div>
      </div>
      <div className="grid md:grid-flow-col mt-2 gap-4  ">
        <CarDetails car={car} />
        <CarFeatures />
      </div>
    </div>
  );
}
