import React from "react";
import { useState } from "react";
import Contact from "../CONTACT/Contact";
import NavBar from "../NAVBAR/NavBar";
import ScrollTop from "../utils/ScrollTop";
import "./AiBanc.css";

const AiBanc = () => {
  ScrollTop();
  const [background, setbackground] = useState(true);
  return (
    <>
      <NavBar bgColor={background} />
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
            <img src="/images/mockuppp.svg" className="img_two" alt="" />
          </div>
        </section>

        <section className="customers_section">
          <div className="customers_content">
            <h2 className="project_title">Talking to Customers</h2>
            <p className="customer_text">
              I conducted one-on-one interviews with 5 customers who are
              currently using Aibanc’s service to{" "}
              <b>
                understand their pain points and validate some of my assumptions
              </b>
            </p>
            <p className="customer_text">
              {" "}
              I also interviewed 3 people who are not AiBanc’s customer but use
              other loan apps, this was aimed at understand problems the face
              with loan companies
            </p>
            <p className="customer_text">Below are some of my findings:</p>

            <div className="customer_points">
              <li className="blue_box">
                Loan request takes 1 to 2 days which is poor compared to
                competitors with mobile app
              </li>
              <li className="peach_box">
                Lack of trust to give out personal and financial information
              </li>
              <li className="brown_box">
                Users hates not knowing how much they are eligble to until they
                have tried out different figures
              </li>
            </div>
          </div>
          <div className="customer_img_container">
            <img src="/images/customer.png" className="customer_img" alt="" />
          </div>
        </section>
        <div className="white_line_cont">
          <div className="white_line"></div>
        </div>
        <section className="user_Persona">
          <div className="user_Persona_intro">
            <h2 className="project_title">User Persona and User Flow</h2>
            <p className="persona_text">
              Based on insights gathered, I was enble to come up with a persona
              which emcompasses their attributes, pain points and needs of our
              target audience.
            </p>
          </div>
          <div className="user_persona_template">
            <div className="user_img_container">
              <img
                src="/images/userpersona.png"
                className="userPic"
                alt="userPerson"
              />
            </div>
            <div className="user_details">
              <div className="user_data">
                <p className="user_data_head">Bio:</p>
                <p className="user_data_subhead">
                  {" "}
                  Tunde is a 30 years old marketing executive working in a beer
                  company. He is tech savy and belives it is necessary to have
                  easy access to credits as it enables a person stretch out
                  his/her needs and makes life more comfortable.
                </p>
              </div>
              <div className="user_data">
                <p className="user_data_head">Pain points:</p>
                <ul className="user_data_subhead">
                  <li>Tedious application process</li>
                  <li>High interest rate</li>
                  <li>Lack of knowledge on loan eligibility</li>
                </ul>
              </div>
              <div className="user_data">
                <p className="user_data_head">Needs:</p>
                <ul className="user_data_subhead">
                  <li>
                    A way to borrow money without going through a stressfull
                    application process
                  </li>
                  <li>
                    Needs no know amount he is eligible for before going on with
                    the application process
                  </li>
                  <li>
                    Needs to know the interest rate before starting the
                    application process
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="user_flow">
            <div className="user_flow_content">
              <p className="user_flow_text">
                <b className="user_flow_text_bold">User flows</b> depict the
                user's progression from the application's launch to the
                Interctions with app functionalities . I created userflows to
                give me clarity on screens to be designed,
                <b>
                  but due to the non-discloure atteached to them I couldn’t
                  present them here.
                </b>
              </p>
            </div>
            <div className="product_content_img_container">
              <img
                src="/images/Screens.svg"
                className="screenPic"
                alt="userPerson"
              />
            </div>
          </div>
        </section>
        <div className="white_line_cont">
          <div className="white_line"></div>
        </div>

        <section className="the_Solution">
          <h2 className="the_Solution_title">The solution</h2>
          <div className="the_Solution_img_box">
            <img src="/images/sol1.svg" className="the_Solution_img" alt="" />
            <img src="/images/sol2.svg" className="the_Solution_img" alt="" />
            <img src="/images/sol1.svg" className="the_Solution_img" alt="" />
          </div>
        </section>
        <section className="validate_solution">
          <div>
            <div className="user_Persona_intro">
              <h2 className="project_title">Validate Solution</h2>
              <p className="persona_text">
                I led a few moderated usability tests with 6 users. Our aim was
                to find out if the solution solved the problems and how easy
                users could request for credit
              </p>
            </div>
            <div className="validateBox">
              <div className="product_content_img_container">
                <img
                  src="/images/valmockup.svg"
                  className=""
                  alt="userPerson"
                />
              </div>
              <div className="validate_content">
                <div className="inner_content">
                  <h2 className="validate_content_title">
                    Conflict(access to users financial history):
                  </h2>
                  <p className="validate_content_text">
                    To determine a user’s credit limit (the maximum amount a
                    user should get) we tried to use third party Api which can
                    scan through users financial histroy and how much they earn
                    in few mintues, but most banks in nigeria denies these third
                    party companies access to users record. With no access to
                    users financial histroy we could not generate credit limit
                    for users and offer them the credit.{" "}
                  </p>
                </div>
                <div className="Val_img_container">
                  <div className="square_img_container">
                    <img
                      src="./images/twosquares.png"
                      className="square_img"
                      alt="circle"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="illustration_section">
          <div className="illustration_section_container">
            <div className="illustration_section_content">
              <h2 className="illustration_title">Solutions</h2>
              <p className="illustration_section_text">
                If third party api fails, app should generate a credit limit of
                user ₦20,000
              </p>
              <p className="illustration_section_text_two">
                Introduced “ account upgrade “ feature. Users can upgrade there
                account by uploading their bank statement
              </p>
            </div>
            <div>
              <img src="/images/Lineone.svg" className="dotted_arrow" alt="" />
              <br />
              <img src="/images/Linetwo.svg" className="dotted_arrow" alt="" />
            </div>
            <div>
              <img src="/images/solmockup.svg" className="solMockup" alt="" />
            </div>
          </div>
        </section>
        <section className="impact_section">
          <div className="impact_intro">
            <h2 className="impact_title">Impacts & Learnings </h2>
            <p className="impact_text">
              Working on this project introduced me to Api documentations and
              how they can affect your design decision if your app is dependent
              on a 3 party Api. I learn that reading third party documentation
              before designing informs you of what is obtainable.{" "}
              <b> Below are the numbers month after launch</b>
            </p>
          </div>
          <div className="impact_row">
            <div className="impact_col">
              <div className="col_item">
                <img
                  src="/images/ArrowCircleUp.svg"
                  className="arrowpng"
                  alt=""
                />
                <p className="col_item_text">70%</p>
              </div>
              <div className="col_item_two">
                <p className="col_item_two_text">Increase Weekly transaction</p>
              </div>
            </div>
            <div className="impact_col">
              <div className="col_item">
                <img
                  src="/images/ArrowCircleUp.svg"
                  className="arrowpng"
                  alt=""
                />
                <p className="col_item_text">70%</p>
              </div>
              <div className="col_item_two">
                <p className="col_item_two_text">Increase active users</p>
              </div>
            </div>
            <div className="impact_col">
              <div className="col_item">
                <img
                  src="/images/ArrowCircleUp.svg"
                  className="arrowpng"
                  alt=""
                />
                <p className="col_item_text">500</p>
              </div>
              <div className="col_item_two">
                <p className="col_item_two_text">App download on play store</p>
              </div>
            </div>
          </div>
        </section>
        <Contact />
      </div>
    </>
  );
};

export default AiBanc;
