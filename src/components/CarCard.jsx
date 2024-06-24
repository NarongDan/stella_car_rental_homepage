export default function CarCard() {
  return (
    <div className="car-card">
      <img src="" alt={name} className="car-image" />
      <h3>{name}</h3>
      <div className="car-actions border-1 border-solid rounded-lg">
        <button className="details-button">Details</button>
        <button className="book-button">Book Now</button>
      </div>
    </div>
  );
}
