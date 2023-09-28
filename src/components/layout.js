import NavBar from "./navbar";

//FUNCIÓN
//Este código define una función llamada `Layout` que sirve como componente de diseño para una aplicación web. Representa una barra de navegación (`NavBar`) y un contenedor (`div`) que envuelve el contenido pasado como hijo.
export default function Layout({ children }) {
  const containerStyle = {
    width: "90%",
    margin: "100px auto",
  };

  return (
    <div>
      <NavBar />
      <div style={containerStyle}>{children}</div>
    </div>
  );
}