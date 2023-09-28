import { Link } from "react-router-dom";

//FUNCIÓN
//Este código define un componente de React llamado `Book` que muestra información sobre un libro. Utiliza el componente `Link` de la biblioteca `react-router-dom` para crear un enlace en el que se puede hacer clic. El componente recibe un `item` prop, que contiene información sobre el libro.
export default function Book({ item }) {
  const bookContainerStyle = {
    display: "flex",
    flexDirection: "column",
    width: "300px",
  };

  const bookInfoStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    color: "white",
    textDecoration: "none",
  };

  return (
    <div style={bookContainerStyle}>
      <Link to={`/view/${item.id}`} style={bookInfoStyle}>
        <img src={item.cover} width="100" alt={item.title} />
        <div>{item.title}</div>
      </Link>
    </div>
  );
}