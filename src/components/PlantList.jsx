import PlantCard from "./PlantCard.jsx";
function PlantList({ plants, onToggleSoldOut }) {
return (
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
{plants.map((plant) => (
<PlantCard key={plant.id} plant={plant} onToggleSoldOut={onToggleSoldOut} />
))}
</div>
) ;
}
export default PlantList;