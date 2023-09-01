import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Header = ({data}) => {
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        setJsonData(data);
    }, [data])
    
  return (
    <nav className="header">
      <ul>
        {jsonData &&
          jsonData.map((el) => (
            <li key={el.id}>
              <NavLink to={el.slug}>{el.slug}</NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
};
