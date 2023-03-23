import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import "./NavBar.css";

function NavBar(props) {
  const bgColor = props.bgColor;
  const [Mobile, setMobile] = useState(false);

  return (
    <nav
      className={`
           ${bgColor === true ? "navbar__dark" : "navbar"}
      }
      `}
    >
      <Link to="/">
        {bgColor && <img className="logo" src="/images/logo.png" alt="logo" />}
        {!bgColor && (
          <img className="logo" src="/images/logo1.png" alt="logo" />
        )}
      </Link>

      <ul
        className={Mobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setMobile(false)}
      >
        <NavLink to="/">
          <li>
            <a href="/">Projects</a>{" "}
          </li>{" "}
        </NavLink>

        <NavLink to="/about">
          <li>
            <a href="about">About Me</a>
          </li>
        </NavLink>

        <li>
          {" "}
          <a href="https://drive.google.com/file/d/1QnmHIlq-5FbxA6yjnBsQlNc-aGICG1ke/view?usp=sharing">
            Resume
          </a>
        </li>
        <li>
          <a href="mailto:ifeanyichisomjane@gmail.com">Contact me</a>
        </li>
      </ul>
      <button
        className={`${
          bgColor === true ? "mobile-menu-icons" : "mobile-menu-icon"
        }`}
        onClick={() => setMobile(!Mobile)}
      >
        {Mobile ? <FaTimes /> : <GiHamburgerMenu />}
      </button>
    </nav>
  );
}

export default NavBar;
