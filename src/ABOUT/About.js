import React from "react";
import NavBar from "../NAVBAR/NavBar";
import Contact from "../CONTACT/Contact";
import "./About.css";

function About() {
  return (
    <>
      <NavBar />
      <div className="about">
        <div className="about-container">
          <div className="aboutwriteup">
            <h1>
              Hello! I am <span>Chisom</span>{" "}
            </h1>

            <p>
              {" "}
              I create simple and accessible digital experiences that translate
              business objectives into solutions.
            </p>

            <p>
              I push products to the next level through a design process that
              includes data-backed user research, rapid iteration, and visually
              stunning UI.
            </p>

            <p>
              I've worked on digital products ranging from company’s internal
              software, B2B products, to eCommerce websites, and Fintech
              platforms.
            </p>

            <p>I’m currently on the lookout for my next opportunity</p>
          </div>

          <div className="about-image">
            <img
              className="About-picture"
              src="/images/Chisom.png"
              alt="abtpix"
            />
          </div>
        </div>

        <div className="experience">
          <h1>Work Experience</h1>
          <div className="experience_cont">
            <div className="experience1">
              <div className="experience1_left">
                <p className="head">
                  Product Designer /{" "}
                  <span>
                    {" "}
                    <u>Borderlesshr</u>{" "}
                  </span>{" "}
                </p>
                <p className="second">
                  DECEMBER 2021 — PRESENT (ONTARIO, CANADA)
                </p>
              </div>

              <div className="experience1_right">
                <p>
                  I redesigned a recruitment platform, its admin and super-admin
                  dashboards and company website. Collaborated with stakeholders
                  and engineers to translate technical requirements and business
                  objectives to product design.{" "}
                </p>
              </div>
            </div>

            <div className="experience1">
              <div className="experience1_left">
                <p className="head">
                  Product Designer /{" "}
                  <span>
                    <u>Anheuser-Busch InBev</u>{" "}
                  </span>
                </p>
                <p className="second">March 2021 — PRESENT (LAGOS, NIGERIA)</p>
              </div>

              <div className="experience1_right">
                <p>
                  Collaborated closely with cross-functional team of UX
                  designers and engineers to design inter-departmental
                  platforms, B2B &B2C platform and brand websites.
                </p>
              </div>
            </div>
            <div className="experience1">
              <div className="experience1_left">
                <p className="head">
                  Interaction Designer /{" "}
                  <span>
                    <u>Glocally</u>{" "}
                  </span>{" "}
                </p>
                <p className="second">May 2021 — July 2021 (ONTARIO, CANADA)</p>
              </div>

              <div className="experience1_right">
                <p>
                  Planned and conducted design research, validated ideas via
                  MVEs and prototype. Designed the product user interface from
                  low fidelity to high fidelity. Designed Story map and ensured
                  product mock-ups were in sync with the story map.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Contact />
      </div>
    </>
  );
}

export default About;
