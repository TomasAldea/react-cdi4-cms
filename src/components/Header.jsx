import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <section className="header">
        <ul>
            <li>
                <NavLink 
                id="home"
                to="/"
                >
                Home
                </NavLink>
            </li>
            <li>
                <NavLink 
                id="about"
                to="/about"
                >
                about
                </NavLink>
            </li>
        </ul>
    </section>
  );
};
