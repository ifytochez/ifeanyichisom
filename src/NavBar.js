import React, { useState } from "react";
import Logo from "./logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="navbar" id="navbar">
      <nav className="navBar">
        <img className="header-logo" src={Logo} alt="logo" />

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "white" }} />
          ) : (
            <FaBars size={30} />
          )}
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink to="/" onClick={closeMenu}>
              Projects
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="about" onClick={closeMenu}>
              About
            </NavLink>
          </li>

          <li className="nav-item">
            <a
              href="https://drive.google.com/file/d/1vx6vWU8HouYdPn8lwMJ1Xu4oNBfxHa-9/view?usp=sharing"
              onClick={closeMenu}
            >
              Resume
            </a>
          </li>

          <button className="navbar-btn">
            <a href="mailto:ifeanyichisomjane@gmail.com">
              ifeanyichisomjane@gmail.com
            </a>
          </button>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
