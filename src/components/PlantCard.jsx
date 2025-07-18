function PlantCard({ plant, onToggleSoldOut }) {
const { name, image, price, soldOut } = plant;
return (
<div className="bg-white rounded-xl shadow p-2 text-center w-full max-w-[180px] mx-auto">
<div className="relative">
<img
src={image}
alt={name}
className={`w-full h-32 object-cover rounded-md transition-opacity duration-300 ${
soldOut ? "opacity-30" : ""
}`}
/>
{soldOut && (
<span className="absolute top-1 left-1 bg-red-600 text-white text-[10px] px-1 py-0.5 rounded shadow">
Sold Out
</span>
)}
</div>
<h3 className="text-[13px] font-semibold mt-2">{name}</h3>
<p className="text-green-700 text-[12px] mb-1">${price}</p>
<button
 onClick={() => onToggleSoldOut(plant)}
className={`text-[10px] px-2 py-1 rounded text-white ${
soldOut ? "bg-green-500 hover:bg-green-600" : "bg-yellow-500 hover:bg-yellow-600"
}`}
>
 {soldOut ? "Mark In Stock" : "Mark Sold Out"}
</button>
 </div>
 );
}
export default PlantCard;