import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";

//FUNCIÓN
//Este código define un componente de React llamado `Create` que es responsable de crear un nuevo libro. Utiliza el hook `useState` para administrar el estado de varios campos de entrada, como título, autor, portada, introducción, terminado y reseña. El componente también utiliza el hook `useAppContext` para acceder al contexto de la aplicación y el hook `useNavigate` para manejar la navegación. Cuando se envía el formulario, se crea un nuevo objeto de libro y se agrega a la tienda, y el usuario es redirigido a la página de inicio.
export default function Create() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [intro, setIntro] = useState("");
  const [completed, setCompleted] = useState(false);
  const [review, setReview] = useState("");

  const store = useAppContext();
  const navigate = useNavigate();

  const inputStyles = {
    formContainer: {
      width: "400px",
      margin: "0 auto",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      margin: "15px 0",
    },
    title: {
      fontSize: "16px",
      textAlign: "left",
      color: "white",
    },
    input: {
      padding: "10px",
      borderRadius: "5px",
      fontSize: "15px",
    },
  };

  const buttonStyle = {
    padding: "15px 20px",
    minWidth: "200px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#1e9638",
    color: "white",
    fontWeigth: "bolder",
    fontSize: "18px",
  };

  /**
   * Actualiza el estado general de los inputs.
   * @param {event} e
   */
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "author":
        setAuthor(value);
        break;
      case "intro":
        setIntro(value);
        break;
      case "completed":
        setCompleted(e.target.checked);
        break;
      case "review":
        setReview(value);
        break;
      default:
    }
  }

  /**
   * Actualiza y carga una imagen.
   * @param {event} e
   */
  function handleOnChangeFile(e) {
    const element = e.target;
    const file = element.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = function () {
      setCover(reader.result.toString());
    };
  }

  /**
   * Crea un nuevo libro y luego, redirige al inicio.
   * @param {event} e
   */
  function handleSubmit(e) {
    e.preventDefault();

    const newBook = {
      id: crypto.randomUUID(),
      title,
      author,
      cover,
      intro,
      completed,
      review,
    };

    store.createItem(newBook);
    navigate("/");
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit} style={inputStyles.formContainer}>
        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Título</div>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={title}
            style={inputStyles.input}
          />
        </div>

        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Autor</div>
          <input
            type="text"
            name="author"
            onChange={handleChange}
            value={author}
            style={inputStyles.input}
          />
        </div>

        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Portada</div>
          <input
            type="file"
            name="cover"
            onChange={handleOnChangeFile}
            style={inputStyles.input}
          />
          <div>
            {!!cover ? <img src={cover} width="100" alt="preview" /> : ""}
          </div>
        </div>

        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Introducción</div>
          <input
            type="text"
            name="intro"
            onChange={handleChange}
            value={intro}
            style={inputStyles.input}
          />
        </div>

        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Terminado</div>
          <input
            type="checkbox"
            name="completed"
            onChange={handleChange}
            value={completed}
            style={inputStyles.input}
          />
        </div>

        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Reseña</div>
          <input
            type="text"
            name="review"
            onChange={handleChange}
            value={review}
            style={inputStyles.input}
          />
        </div>

        <input type="submit" value="Registrar Libro" style={buttonStyle} />
      </form>
    </Layout>
  );
}