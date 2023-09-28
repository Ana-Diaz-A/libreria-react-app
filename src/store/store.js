import { useContext, useState, createContext } from "react";

const AppContext = createContext({
  items: [],
  createItem: (item) => {},
  getItem: (id) => {},
  updateItem: (item) => {},
});

//FUNCIÓN
//Este código define un componente de React llamado `Store` que crea un contexto usando la función `createContext` de React. El contexto proporciona una variable de estado llamada `items` y tres funciones: `createItem`, `getItem` y `updateItem`. El componente `Store` utiliza el hook `useState` para administrar la variable de estado de los `items` y representa el componente `AppContext.Provider` con la variable de estado de los `items` y las tres funciones como su valor.
export default function Store({ children }) {
  const [items, setItems] = useState([]);

  /**
   * Crea un nuevo item.
   * @param {Book} item
   */
  function createItem(item) {
    const temp = [...items];
    temp.push(item);
    setItems(temp);
  }

  /**
   * Obtiene un item en específico.
   * @param {Book} id
   * @returns item encontrado.
   */
  function getItem(id) {
    const item = items.find((item) => item.id === id);
    return item;
  }

  /**
   * Actualiza un item en específico.
   * @param {Book} item
   */
  function updateItem(item) {
    const index = items.findIndex((i) => i.id === item.id);
    const temp = [...items];
    temp[index] = { ...item };
  }

  return (
    <AppContext.Provider value={{ items, createItem, getItem, updateItem }}>
      {children}
    </AppContext.Provider>
  );
}

//FUNCIÓN
//La función `useAppContext` es un hook personalizado que permite a los componentes acceder al contexto proporcionado por `AppContext` utilizando el hook `useContext` de React.
export function useAppContext() {
  return useContext(AppContext);
}