import React from "react";
import "./Hero.css";
import { BsFillStarFill } from "react-icons/bs";
import NavBar from "../NAVBAR/NavBar";

function Hero() {
  return (
    <>
      <NavBar />
      <div className="hero">
        <div className="contentt">
          <h1>
            Chisom Ifeanyi{" "}
            <span>
              <BsFillStarFill style={{ transform: "rotate(90deg)" }} />
            </span>
          </h1>
          <h2 className="hero-paragraph1">Digital Product Designer.</h2>

          {/* <img src="/images/write 1.png" alt="" /> */}
        </div>

        <div className="marquee-w" id="scroll-container">
          <p id="scroll-text">
            UX DESIGNER - UX RESEARCH - INTERFACE DESIGN - PRODUCT DESIGN
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
