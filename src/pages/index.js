import Book from "../components/book";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";

//FUNCIÓN
//Este código define un componente funcional de React llamado `Index` que representa una lista de libros. Utiliza el hook `useAppContext` para acceder a los datos del libro desde la tienda y el componente `Book` para representar cada elemento del libro. Los libros se muestran en un contenedor flexible con un diseño responsivo.
export default function Index() {
  const store = useAppContext();

  const booksContainer = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  };

  return (
    <Layout>
      <div style={booksContainer}>
        {store.items.map((item) => (
          <Book key={item.id} item={item} />
        ))}
      </div>
    </Layout>
  );
}