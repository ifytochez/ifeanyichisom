import React from "react";
import "./Hero.css";
import { BsFillStarFill } from "react-icons/bs";
import NavBar from "../NAVBAR/NavBar";

function Hero() {
  return (
    <>
      <NavBar />
      <div className="hero">
        <div className="contents">
          <div className="contentt">
            <h1>
              Chisom Ifeanyi{" "}
              <span>
                <BsFillStarFill style={{ transform: "rotate(90deg)" }} />
              </span>
            </h1>
            <h2 className="hero-paragraph1">Digital Product Designer.</h2>
          </div>

          <div className="pix">
            <img src="/images/write 1.png" alt="" />
          </div>
        </div>

        <div className="margue-cont">
          <div className="margue animate">
            <div className="one">
              <p>UX DESIGNER - </p>
              <p>UX RESEARCH - </p>
              <p>INTERFACE DESIGN -</p>
              <p>PRODUCT DESIGN</p>
            </div>
            <div className="two">
              <p>&nbsp; - UX DESIGNER - </p>
              <p>UX RESEARCH - </p>
              <p>INTERFACE DESIGN -</p>
              <p>PRODUCT DESIGN</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
