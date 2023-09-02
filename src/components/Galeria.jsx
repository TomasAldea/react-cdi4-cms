import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Galeria = ({ configData, elementsData }) => {
  const [elementData, setElementsData] = useState([]);
  const [configPanelData, setConfigPanelData] = useState({});

  useEffect(() => {
    setElementsData(elementsData);
    setConfigPanelData(configData);

    console.log(configData);
    console.log(elementsData);
  }, [elementsData]);

  return (
    <section className="galeria">
      <Carousel>
        {elementData &&
          elementData.map((el, index) => (
            <div key={index}>
              <img src={el.imagen.src} />
              <p className="legend">{el.titulo}</p>
            </div>
          ))}
      </Carousel>
    </section>
  );
};
