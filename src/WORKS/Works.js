import React from "react";
import "./Works.css";
import { Link } from "react-router-dom";

function Works() {
  return (
    <div className="project-container">
      <div className="project-contact">
        {/* <div className="content">
          <h3>Selected Projects</h3>
        </div> */}

        <div className="project-row">
          <div className="case-image">
            <img
              className="frame"
              src="/images/Group689.png"
              alt="cashietbanner"
            />
          </div>

          <div className="case">
            <p className="progressive">PROGRESSIVE WEB APP</p>
            <h3>Borderless Redesign</h3>
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
            <p className="progressive">PROGRESSIVE WEB APP</p>
            <h3>Aibanc Design</h3>
            <p className="cashiet">
              AiBanc provides credit to s alaried workers across the country
              through its Mobile application.
            </p>
            <Link to="/aibanc" className="readmore">
              {" "}
              Read Case Study
            </Link>
          </div>

          <div className="casee-image">
            <img
              src="/images/Cashiet-Banner.png"
              className="cashiet"
              alt="cashietbanner"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;