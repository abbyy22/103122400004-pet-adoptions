export default function PetCard({ item }) {
  return (
    <div style={{ borderRadius: "8px", padding: "1rem", width: "220px", backgroundColor: "#fff" }}>
      <h3 style={{ margin: "0 0 0.5rem 0", color: "#2c3e50" }}> {item.nama}</h3>
      <p style={{ margin: "0.25rem 0" }}>{item.jenis} ({item.umur} bulan)</p>
    </div>
  );
}