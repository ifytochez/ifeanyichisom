import React from "react";
import "./About.css";
import ChisomPic from "./images/chisompic.jpg";

function About() {
  return (
    <div className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img className="About-picture" src={ChisomPic} alt="abtpix" />
        </div>

        <div className="aboutwriteup">
          <h1>
            Hello! I am <span>Chisom</span>{" "}
          </h1>

          <p>
            {" "}
            I am a professional product designer passionate about creating
            simple and accessible digital experiences that translate business
            objectives into solutions.
          </p>

          <p>
            I push products to the next level through a design process that
            includes data-backed user research, rapid iteration, and visually
            stunning user-focused UI.
          </p>

          <p>
            I've worked on digital solutions/products ranging from company’s
            internal software, B2B products, to eCommerce websites, Fintech, and
            e-learning platforms.
          </p>

          <p>
            I’m always ready to work on interesting and meaningful projects with
            people and businesses all over the world.
          </p>

          <p>
            When I'm not designing, you would find me binge-watching comedy
            movies, reading a book or sleeping.
          </p>

          <p>
            If you'd like to know more or have a project you'd like to discuss,
            don't hesitate to reach out: ifeanyichisomjane@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
