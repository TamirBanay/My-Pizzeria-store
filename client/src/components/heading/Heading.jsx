import "./Heading.css";
import logo from "./logo.png";
// import About from "../../pages/About";
import Contact from "../../pages/Contact";
// import Order from "../../pages/Order";
// import Menu from "../../pages/Menu";
import React, { useState } from "react";
// import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Routes,
  useParams,
} from "react-router-dom";
import Order from "../../pages/Order";

function Heading(props) {
  return (
    <div className="heading">
      <nav className="nav">
        <div className="nav-text">
          <ul>
            <NavLink
              className="nav-menu"
              id="nav-menu-id-contact"
              to="/Contact"
            >
              צור קשר
            </NavLink>
            <NavLink
              className="nav-menu"
              id="nav-menu-id"
              to="/About"
              name="About"
            >
              עלינו
            </NavLink>
            <NavLink
              className="nav-menu"
              id="nav-menu-id"
              to="/Order"
              name="Order"
            >
              הזמנה
            </NavLink>
            <NavLink
              className="nav-menu"
              id="nav-menu-id"
              to="/Menu"
              name="Menu"
            >
              תפריט
            </NavLink>
          </ul>
        </div>

        <NavLink className="logo-div" to="/Home">
          <img className="logo" src={logo} />
        </NavLink>
      </nav>
      <hr className="nav-hr" />
    </div>
  );
}

export default Heading;
