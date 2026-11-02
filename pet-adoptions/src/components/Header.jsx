export default function Header({ title }) {
  return (
    <header style={{ textAlign: "center"}}>
      <h1 style={{ margin: 0 }}>{title}</h1>
    </header>
  );
}