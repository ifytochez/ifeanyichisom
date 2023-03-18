import React from "react";
import "./Works.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Works() {
  const navigate = useNavigate();
  return (
    <div className="project-container">
      <div className="project-contact">
        <h1>Featured Projects.</h1>
        <div className="project-row">
          <div className="case">
            <h3>A Recruitment platform for hiring pre-vetted Talents </h3>
            <p className="cashiet">
              BorderlessHR is a recruitment software platform that helps
              businesses find the right talent, faster and easier. It gives
              businesses complete visibility of their candidates, manage hiring
              process and save valuable time.
            </p>
            <button
              className="readmore"
              onClick={() => navigate("/borderlesscasestudy")}
            >
              Read Case Study
            </button>
          </div>

          <div className="casee-image">
            <img
              src="/images/Borderless 1.png"
              className="cashiet"
              alt="cashietbanner"
            />
          </div>
        </div>

        <div className="project-row">
          <div className="case">
            <h2 className="h3">
              A Lending Mobile Application for salaried workers
            </h2>
            <p className="cashiet">
              AiBanc provides credit to salaried workers across the country
              through its Mobile application. This app doesn’t only offer
              personal loans, it generates a credit line for users who can
              decide to use at once or withdraw at intervals
            </p>
            <button className="readmore" onClick={() => navigate("/aibanc")}>
              Read Case Study
            </button>
          </div>

          <div className="casee-image">
            <img
              className="frame"
              src="/images/Aibanc 1.png"
              alt="cashietbanner"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
