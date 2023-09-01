import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter, HashRouter, Navigate } from "react-router-dom"
import { Header } from "../components/Header";
import { Herohome } from "../components/Herohome";

export const AppRouter = ({data}) => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    setJsonData(data);
  }, [data]);

  return (
    <HashRouter>
      <Header data={data}/>
      <Routes>
        {jsonData &&
          jsonData.map((el, index) => (
            <Route
              key={el.id}
              path={el.slug}
              element={getComponentElements(
                el.data.modules
              )}
            />
          ))}
      </Routes>
    </HashRouter>
  );
};

const getComponentElements = (componentNames) => {
  //console.log(componentNames);
  let arrayModules = componentNames.map((module) => module.idName);
  return (
    <React.Fragment>
      {componentNames.map((componentName, index) => {
        let toUperName = componentName.idName.charAt(0).toUpperCase() + componentName.idName.slice(1)
        const Component = componentsMap[toUperName];
        return <Component key={index} configData={componentName.config} elementsData={componentName.elements}/>;
      })}
    </React.Fragment>
  );
};

const Videolink = () => <div>Videolink Content</div>;
const Textovideoimg = () => <div>Textovideoimg Content</div>;
const Imgtext = () => <div>Imgtext Content</div>;
const Instagram = () => <div>Instagram Content</div>;
const Slidertorneos = () => <div>Slidertorneos Content</div>;
const Galeria = () => <div>Galeria Content</div>;
const Destacados = () => <div>Destacados Content</div>;
const Clientes = () => <div>Clientes Content</div>;
const Footer = () => <div>Footer Content</div>;
const Herointerior = () => <div>Herointerior Content</div>;
const Textocontacto = () => <div>Textocontacto Content</div>;
const Kpiform = () => <div>Kpiform Content</div>;
const Imgpdf = () => <div>Imgpdf Content</div>;
const Textosimple = () => <div>Textosimple Content</div>;
const GaleriaMasonry = () => <div>GaleriaMasonry Content</div>;
const ClientesV = () => <div>ClientesV Content</div>;
const Textoenlaces = () => <div>Textoenlaces Content</div>;
const Filosofia = () => <div>Filosofia Content</div>;
const Detcolaboradors = () => <div>Detcolaboradors Content</div>;

//? Objeto con los componentes que vamos a tener en la web
const componentsMap = {
  Header,
  Herohome,
  Videolink,
  Textovideoimg,
  Imgtext,
  Instagram,
  Slidertorneos,
  Galeria,
  Destacados,
  Clientes,
  Footer,
  Herointerior,
  Kpiform,
  Imgpdf,
  Textosimple,
  GaleriaMasonry,
  ClientesV,
  Textoenlaces,
  Filosofia,
  Textocontacto,
  Detcolaboradors,
};
