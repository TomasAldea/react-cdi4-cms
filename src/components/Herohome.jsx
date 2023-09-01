import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Herohome = ({ configData, elementsData }) => {
  const [elementData, setElementsData] = useState([]);
  const [configPanelData, setConfigPanelData] = useState({});

  useEffect(() => {
    setElementsData(elementsData);
    setConfigPanelData(configData);
  }, [elementsData]);

  return (
    <section className="hero-home">
      <Carousel>
        {elementData &&
          elementData.map((el, index) => (
            <div>

              <img key={index} src={el.imagen.src} />
              <p className="legend">{el.titulo}</p>

            </div>
          ))}
      </Carousel>
    </section>
  );
};
