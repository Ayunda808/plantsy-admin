import { useState, useEffect } from "react";
import AddPlantForm from "./components/AddPlantForm";
import PlantList from "./components/PlantList";
function App() {
const [plants, setPlants] = useState([]);
useEffect(() => {
fetch("http://localhost:6001/plants")
.then((res) => res.json())
.then((data) => setPlants(data));
}, []);
function handleAddPlant(newPlant) {
fetch("http://localhost:6001/plants", {
 method: "POST",
headers: { "Content-Type": "application/json" },
 body: JSON.stringify(newPlant),
})
.then((res) => res.json())
.then((data) => setPlants((prev) => [...prev, data]));  // update state
}
function handleToggleSoldOut(updatedPlant) {
const newPlants = plants.map((plant) =>
plant.id === updatedPlant.id
 ? { ...plant, soldOut: !plant.soldOut }
 : plant
 );
setPlants(newPlants);
fetch(`http://localhost:6001/plants/${updatedPlant.id}`, {
method: "PATCH",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({ soldOut: !updatedPlant.soldOut })
});
}
return (
<div className="p-4 max-w-4xl mx-auto">
<h1 className="text-3xl font-bold text-center">Plantsy Admin</h1>
<AddPlantForm onAddPlant={handleAddPlant} />
<PlantList plants={plants} onToggleSoldOut={handleToggleSoldOut} />
</div>
 );
}
export default App;