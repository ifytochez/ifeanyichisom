import React from "react";
import HerosectionBanner from "./images/Herosectionimage.png";
import "./Projects.css";
import Frame from "./images/Frame2.png";
import Laptop from "./images/Borderless.png";
import Cashiet from "./images/Cashiet.png";
import ContactImage from "./images/contactImage.png";
import Aibanc from "./images/aibanc.png";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="projects " id="projects">
      <div className="hero " id="hero">
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

      <div className="project-contact">
        <div className="project-container">
          <div className="content">
            <h3>Selected Projects</h3>
          </div>

          <div className="project-row">
            <div className="case-image">
              <img className="frame" src={Laptop} alt="" />
            </div>

            <div className="case">
              {/* <p className="progressive">PROGRESSIVE WEB APP</p> */}
              <h3>Borderless (Redesign)</h3>
              <p className="cashiet">
                Reinventing job search experinces and encouraging Easy and
                Seamless job application and recruitment.
              </p>
              <Link to="/borderlesscasestudy" className="readmore">
                {" "}
                Read Case Study
              </Link>
            </div>
          </div>

          <div className="project-row project-rows">
            <div className="case">
              {/* <p className="progressive">PROGRESSIVE WEB APP</p> */}
              <h3>AIBANC</h3>
              <p className="cashiet">
                AiBanc provides credit to salaried workers across the country
                through its Mobile application.
              </p>
              <Link to="/aiBanc" className="readmore">
                {" "}
                Read Case Study
              </Link>
            </div>

            <div className="casee-image">
              <img className="aibanc" src={Aibanc} alt="aibancbanner" />
            </div>
          </div>

          <div className="project-row project-rowss">
            <div className="case-image">
              <img src={Cashiet} className="cashiet" alt="cashietbanner" />
            </div>

            <div className="case">
              {/* <p className="progressive">PROGRESSIVE WEB APP</p> */}
              <h3>Cashiet Website Redesign</h3>
              <p className="cashiet">
                Cashiet is a marketplace that let Nigerians buy products and pay
                in installments at a zero interest.
              </p>
              <Link to="/cashietcasestudy" className="readmore">
                {" "}
                Read Case Study
              </Link>
            </div>
          </div>
        </div>

        <div className="contact" id="contact">
          <div className="contact-container">
            <div className="contact-content-container">
              <p className="h3">
                This doesn't need to end here. Let's design something
                spectacular
              </p>
              <div className="contact-details">
                <button>
                  <a href="mailto:ifeanyichisomjane@gmail.com">
                    ifeanyichisomjane@gmail.com
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="contact-image">
            <img className="" src={ContactImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
