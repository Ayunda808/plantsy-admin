import { useState } from "react";
function AddPlantForm({ onAddPlant }) {
const [name, setName] = useState("");
const [image, setImage] = useState("");
const [price, setPrice] = useState("");
function handleSubmit(e) {
e.preventDefault();
if (!name || !image || !price) return;
const newPlant = {
id: Date.now(),
name,
image,
price: parseFloat(price),
soldOut: false
};
onAddPlant(newPlant);  // Send the new plant to App.jsx
 setName("") ;
setImage("") ;
setPrice("") ;
}
return (
<form onSubmit={handleSubmit} className="flex flex-col gap-2 bg-white p-4 rounded shadow-md">
<input
type="text"
placeholder="Plant name"
value={name}
onChange={(e) => setName(e.target.value)}
className="border px-2 py-1 rounded"
/>
<input
type="text"
placeholder="Image URL"
value={image}
onChange={(e) => setImage(e.target.value)}
className="border px-2 py-1 rounded"
/>
<input
type="number"
placeholder="Price"
value={price}
onChange={(e) => setPrice(e.target.value)}
className="border px-2 py-1 rounded"
/>
<button type="submit" className="bg-green-600 text-white py-1 rounded hover:bg-green-700">
Add Plant
</button>
</form>
 );
}
export default AddPlantForm;