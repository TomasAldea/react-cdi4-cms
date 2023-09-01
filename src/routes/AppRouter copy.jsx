// src/components/AppRouter.js
import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  BrowserRouter,
  HashRouter,
  Navigate,
} from "react-router-dom";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Header } from "../components/Header";
import { Slidertorneos } from "../components/Slidertorneos";
import { Herohome } from "../components/Herohome";
import { Formulario } from "../components/Formulario";
import { ImagenSimple } from "../components/ImagenSimple";
import { TextoSeo } from "../components/TextoSeo";

export const AppRouter = () => {
  const [jsonData, setJsonData] = useState(null);
  const [dinamicComponentes, setDinamicComponentes] = useState(null);

  const duples = [];
  // Función asincrónica para cargar el JSON
  async function fetchData() {
    try {
      const response = await fetch("/cms_content.json"); // Ruta relativa al archivo JSON en la carpeta pública
      if (!response.ok) {
        throw new Error("Error al cargar el archivo JSON");
      }

      let { data } = await response.json();

      data = data.filter((element) => {
        if (!duples.includes(element.title) && !element.slug.includes("#")) {
          duples.push(element.title);
          element.data = JSON.parse(element.data);
          return true; // Mantener este elemento en el nuevo array
        } else {
          return false; // Descartar este elemento del nuevo array
        }
      });
      console.log(data);
      setJsonData(data);
      let dinamicComponents = data
      .filter(element => !element.slug.includes("http") && !element.slug.includes("/"))
      .map(element => {
        const slug = element.slug.charAt(0).toUpperCase() + element.slug.slice(1);
        return slug;
      });

      console.log(jsonData);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    fetchData(); // Llama a la función para cargar el JSON cuando el componente se monte
  }, []); // El array vacío asegura que esto solo se ejecute una vez, equivalente a componentDidMount

  return (
    <HashRouter>

      <Routes>
        <Route path='/' element={<Formulario/>}/>
        {jsonData &&
          jsonData.map((elemento, index) => (
            <Route
              key={index}
              path={`/${elemento.slug}`}
              element={
                <>
                  {elemento.data.modules.map((module, moduleIndex) => {
                    const ComponenteDinamico = module.idName.charAt(0).toUpperCase() + module.idName.slice(1);

                    if (ComponenteDinamico) {
                      return <ComponenteDinamico key={moduleIndex}/>;
                    }
                    return null;
                  })}
                </>
              }
            />
          ))}
      </Routes>
    </HashRouter>
  );
};
