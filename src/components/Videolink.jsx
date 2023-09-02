import React, { useEffect, useState } from "react";

export const Videolink = ({ configData, elementsData }) => {
  const [elementData, setElementsData] = useState([]);
  const [configPanelData, setConfigPanelData] = useState({});

  useEffect(() => {
    setElementsData(elementsData);
    setConfigPanelData(configData);
  }, [elementsData]);

  return (
    <div>Videolink</div>
  );
};
