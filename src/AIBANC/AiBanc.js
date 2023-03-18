import React from "react";
import NavBar from "../NAVBAR/NavBar";
import "./AiBanc.css";

const AiBanc = () => {
  return (
    <>
      <NavBar />
      <div className="aibanc_container">
        <div className="blue_line_cont">
          <div className="blue_line"></div>
        </div>
        <header>
          <div className="project_name">AIBANC</div>
          <h1 className="aibanc_heading">
            A LENDING MOBILE APPLICATION FOR SALARIED WORKERS
          </h1>
          <div>
            <img
              src="/images/aibancBg.svg"
              className="aibancBg"
              alt="aibancBg"
            />
          </div>
        </header>

        <section className="overview_container">
          <div className="left">
            <h2 className="project_info">Project Overview</h2>
            <div className="skill_description">
              <div className="col_one">
                <li className="list_one">role:</li>
                <li className="list_two">UX / UI Designer</li>
              </div>
              <div className="col_one">
                <li className="list_one">duration:</li>
                <li className="list_two">5 Weeks</li>
              </div>
              <div className="col_one">
                <li className="list_one">tools:</li>
                <li className="list_two">Figma & Miro</li>
              </div>
            </div>
            <div>
              <p className="text_description">
                {" "}
                AiBanc provides credit to s alaried workers across the country
                through its Mobile application. This app doesn’t only offer
                personal loans, it generates a credit line for users who can
                decide to use at once or withdraw at intervals. AiBanc helps
                income earners gain quick, convenient, and secure access to
                credit that they deserve.
              </p>
              <p className="text_white">
                <span className="highlight">I was the the sole designer,</span>I
                collaborated with a team of four (4) developers with feedback
                from stakeholders
              </p>
            </div>
          </div>
          <div className="right">
            <img
              src="/images/abancoverviewmockup.svg"
              className="phoneimg"
              alt="aibanc-phone"
            />
          </div>
        </section>
        <section className="project_objective">
          <div className="blue_line"></div>
          <div className="objective_display">
            <div className="obj_item">
              <h2 className="obj_title">Meet with the stackholders</h2>
              <p className="obj_text">
                Stakeholders were conducting transactions manually using paper,
                emails and excel for documentation. This made reconcilation
                difficult. Credit request was stressfull as paper documents had
                to be signed first
              </p>
            </div>
            <div className="obj_item">
              <h2 className="obj_title">Goals and Objective</h2>
              <ul className="obj_text">
                <li>
                  To design a solution that help user access credit easily
                </li>
                <li>
                  To design a solution that enables a seamless credit
                  liquidation
                </li>
                <li>To design a solution for manual repayment</li>
                <li>
                  To design a solution for stakeholders to have an overview of
                  transcations
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="solutions_container">
          <h1 className="solutions_title">Understanding Existing Solutions</h1>
          <p className="solution_text">
            Stakeholders were conducting transactions manually using paper,
            emails and excel for documentation. This made reconcilation
            difficult. Credit request was stressfull as paper documents had to
            be signed first
          </p>
          <div className="img_box">
            <img src="/images/mockupp.svg" className="img_one" alt="" />
            <img src="/images/mockuppp.svg" className="img_two" alt="" />
          </div>
        </section>
      </div>
    </>
  );
};

export default AiBanc;
