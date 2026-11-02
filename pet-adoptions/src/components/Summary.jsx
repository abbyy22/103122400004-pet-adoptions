export default function Summary({ totalItems }) {
  return (
    <div style={{ margin: "1rem 0", fontSize: "1.1rem", color: "#C3C3C3" }}>
      Total Hewan Siap Diadopsi: {totalItems} ekor
    </div>
  );
}