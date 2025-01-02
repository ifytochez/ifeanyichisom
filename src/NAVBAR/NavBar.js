import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import "./NavBar.css";

function NavBar(props) {
  const bgColor = props.bgColor;
  const [Mobile, setMobile] = useState(false);

  function downloadResume() {
    const link = document.createElement("a");
    link.href = "/Chisom_Ifeanyi_Resume.pdf";
    link.download = "Chisom_Ifeanyi_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

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
          <a href="#" onClick={downloadResume}>
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
