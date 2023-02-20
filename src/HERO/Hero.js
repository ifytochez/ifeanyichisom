import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="contentt">
        <h1>Hello there,</h1>
        <h2 className="hero-paragraph1">
          I'm <span>Chisom.</span> I help teams design simple and accessible
          digital experiences and product that translate business objectives
          into solutions.
        </h2>
        <p className="hero-paragraph2">
          I push products to the next level through a design process that
          includes data-backed user research, rapid iteration, and visually
          stunning user-focused UI.
        </p>
      </div>
    </div>
  );
}

export default Hero;
