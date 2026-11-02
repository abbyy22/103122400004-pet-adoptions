import { useState } from "react";
import Header from "./components/Header";
import Summary from "./components/Summary";
import PetForm from "./components/PetForm";
import PetCard from "./components/PetCard";

export default function App() {
  // Data awal yang realistis (bukan placeholder generik)
  const [pets, setPets] = useState([
    { id: 1, nama: "Milo", jenis: "Kucing Domestic", umur: 6 },
    { id: 2, nama: "Cody", jenis: "Anjing Golden Retriever", umur: 12 },
  ]);

  const handleAddPet = (newPet) => {
    setPets([...pets, newPet]);
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "1.5rem", fontFamily: "sans-serif" }}>
      <Header title="Rumah Adopsi Hewan Peliharaan" />
      <Summary totalItems={pets.length} />
      <PetForm onAddPet={handleAddPet} />

      <h2>Daftar Hewan Siap Adopsi</h2>
      
      {/* Conditional Rendering */}
      {pets.length === 0 ? (
        <p style={{ color: "#888", fontStyle: "italic" }}>Belum ada data hewan peliharaan.</p>
      ) : (
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {pets.map((item) => (
            <PetCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}