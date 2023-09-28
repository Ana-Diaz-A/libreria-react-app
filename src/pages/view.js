import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";

//FUNCIÓN
//Este código define un componente funcional de React llamado `View` que muestra información sobre un libro. Utiliza hooks como `useState`, `useParams` y `useEffect` para administrar el estado y manejar los efectos secundarios. El componente obtiene los datos del libro de una tienda mediante el hook `useAppContext` y los muestra en un componente de diseño. Si los datos del libro no están disponibles muestra un mensaje indicando que el objeto no fue encontrado.
export default function View() {
  const [item, setItem] = useState(null);
  const params = useParams();
  const store = useAppContext();

  useEffect(() => {
    const book = store.getItem(params.bookId);
    setItem(book);
  }, []);

  const itemStyles = {
    container: {
      display: "flex",
      gap: "20px",
      color: "white",
      width: "800px",
      margin: "0 auto",
    },
  };

  if (!item) {
    return <Layout>Objeto no encontrado</Layout>;
  }

  return (
    <Layout>
      <div style={itemStyles.container}>
        <div>
          <div>
            {item?.cover ? (
              <img src={item?.cover} width="400" alt={item?.title} />
            ) : (
              ""
            )}
          </div>
        </div>
        <div>
          <h2>{item?.title}</h2>
          <div>{item?.author}</div>
          <div>{item?.intro}</div>
          <div>{item?.completed ? "Completed" : "Not Completed"}</div>
          <div>{item?.review}</div>
        </div>
      </div>
    </Layout>
  );
}
