import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import "./NavBar.css";

function NavBar(props) {
  const bgColor = props.bgColor;
  console.log(bgColor);
  const [Mobile, setMobile] = useState(false);

  return (
    <nav
      className={`
     ${bgColor === true ? "navbar__dark" : "navbar"}
`}
    >
      <Link to="/">
        <img className="logo" src="/images/logo1.png" alt="logo" />
      </Link>

      <ul
        className={Mobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setMobile(false)}
      >
        <Link to="/">
          <li>
            <a href="/">Projects</a>{" "}
          </li>{" "}
        </Link>

        <Link to="/about">
          <li>
            <a href="about">About Me</a>
          </li>
        </Link>

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
      <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
        {Mobile ? <FaTimes /> : <GiHamburgerMenu />}
      </button>
    </nav>
  );
}

export default NavBar;
