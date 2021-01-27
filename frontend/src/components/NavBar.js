import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <div className="main__container">
        <ul className="nav__links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/">Blog</NavLink>
          </li>
          <hr />
          <li className="links__donate__btn">
            <NavLink to="/donate-to-make-a-change">Donate</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
