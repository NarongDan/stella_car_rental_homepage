import img from "../image/CarHero.png";
export default function CarCard() {
  return (
    <div className="car-card border-2 p-2 border-gray-500 ">
      <img src={img} alt={name} className="w-auto h-20 md:h-36" />
      <h3>{name}</h3>
      <div className="car-actions border-1 rounded-lg gap-2 flex ">
        <button className="details-button p-2 bg-[#1154FF] text-white md: w-[8rem] hover:bg-blue-300 rounded-md">
          Details
        </button>
        <button className="book-button p-2 border-2 border-gray-500 text-black  md: w-[8rem] hover:bg-blue-200 rounded-md">
          Book Now
        </button>
      </div>
    </div>
  );
}
