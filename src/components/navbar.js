import { Link } from "react-router-dom";

//FUNCIÓN
//Este código define un componente funcional llamado `NavBar` que representa una barra de navegación con dos enlaces usando React y React Router. El componente devuelve un elemento JSX que representa la barra de navegación.
export default function NavBar() {
  const linkStyle = {
    padding: "10px",
    display: "block",
    fontSize: "18px",
    color: "white",
    textDecoration: "none",
  };

  const navContainerStyle = {
    backgroundColor: "#181d27",
    padding: "10px",
    display: "flex",
    gap: "5px",
    justifyContent: "center",
  };

  return (
    <div style={navContainerStyle}>
      <Link to="/" style={linkStyle}>Inicio</Link>
      <Link to="/create" style={linkStyle}>Crear</Link>
    </div>
  );
}