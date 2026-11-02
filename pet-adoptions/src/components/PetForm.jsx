import { useState } from "react";

export default function PetForm({ onAddPet }) {
  const [nama, setNama] = useState("");
  const [jenis, setJenis] = useState("");
  const [umur, setUmur] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama || !jenis || !umur) return;

    const newPet = {
      id: Date.now(),
      nama,
      jenis,
      umur: Number(umur),
    };

    onAddPet(newPet);
    setNama("");
    setJenis("");
    setUmur("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem", display: "flex", gap: "0.5rem", flexWrap: "wrap", backgroundColor: "#f4f4f4", padding: "1rem", borderRadius: "8px" }}>
      <input
        type="text"
        placeholder="Nama Hewan (contoh: Milo)"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        required
        style={{ padding: "0.5rem", flex: "1" }}
      />
      <input
        type="text"
        placeholder="Jenis (contoh: Kucing / Anjing)"
        value={jenis}
        onChange={(e) => setJenis(e.target.value)}
        required
        style={{ padding: "0.5rem", flex: "1" }}
      />
      <input
        type="number"
        placeholder="Umur (bulan/tahun)"
        value={umur}
        onChange={(e) => setUmur(e.target.value)}
        required
        style={{ padding: "0.5rem", width: "150px" }}
      />
      <button type="submit" style={{ padding: "0.5rem 1rem", backgroundColor: "#4A7C59", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
        + Tambah Hewan
      </button>
    </form>
  );
}