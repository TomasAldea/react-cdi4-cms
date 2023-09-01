import React, { useState, useEffect } from "react";
import "./App.css";
import { AppRouter } from "./routes/AppRouter";

function App() {
  const [jsonDataGlobal, setJsonDataGlobal] = useState(null);

  const duples = [];


  async function fetchData() {
    try {
      const response = await fetch("/cms_content.json");
      if (!response.ok) {
        throw new Error("Error al cargar el archivo JSON");
      }

      let { data } = await response.json();

      //! Quito las páginas duplicadas para simplificar el ejemplo
      //! Tambien las url hardcodeadas y los redirects
      data = data.filter((element) => {
        if (
          !duples.includes(element.title) &&
          !element.slug.includes("#") &&
          !element.slug.includes("http")
        ) {
          duples.push(element.title);
          element.data = JSON.parse(element.data);
          return true;
        } else {
          return false;
        }
      });

      setJsonDataGlobal(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    fetchData(); // Llama a la función para cargar el JSON cuando el componente se monte
  }, []); // El array vacío asegura que esto solo se ejecute una vez, equivalente a componentDidMount

  return (
    <>
      <AppRouter data={jsonDataGlobal}/>
    </>
  );
}

export default App;
