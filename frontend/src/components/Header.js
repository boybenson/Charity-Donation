import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

const Header = ({ toggleNav, showNav }) => {
  return (
    <header>
      <div className="main__container">
        <div className="header__container">
          <div className="brand__logo">
            <h1 className="logo">
              <NavLink to="/">Help❤️</NavLink>
            </h1>
          </div>
          <nav className="header__nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">About</NavLink>
            <NavLink to="/">Blog</NavLink>
            <NavLink to="/donate-to-make-a-change" className="donate__btn">
              Donate
            </NavLink>
          </nav>
          <div className="menu__bar" onClick={() => toggleNav()}>
            {showNav ? (
              <CloseIcon fontSize="large" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
