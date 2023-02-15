import React from "react";
import "./BorderlessCaseStudy.css";
import { AiOutlineArrowUp } from "react-icons/ai";

function BorderlessCaseStudy() {
  return (
    <div className="borderless_cont">
      <div className="borderless_landing_page">
        <div className="horizontal_line"></div>
        <p>Borderlesshr</p>
        <h3>
          A Recruitment platform For <br /> hiring prevetted talent{" "}
        </h3>
        <div className="landing_page_pix">
          <img src="/images/borderless1.png" alt="" />
        </div>
      </div>

      <div className="project_overview_section">
        <div className="project_overview">
          <h3>Project Overview</h3>
          <div className="overview_cont">
            <div className="overview">
              <p className="p1">role :</p>
              <p className="p2">UX Designer</p>
              <p className="p2">UI Designer</p>
            </div>
            <div className="overview">
              <p className="p1">tools :</p>
              <p className="p2">Figma</p>
              <p className="p2">Miro</p>
            </div>
            <div className="overview">
              <p className="p1">duration :</p>
              <p className="p2">5 weeks</p>
            </div>
            <div className="overview">
              <p className="p1">team :</p>
              <p className="p2">
                I worked in a team of two designers, with feedback <br /> from
                stakeholder
              </p>
            </div>
          </div>

          <div className="overview_writeup">
            <p className="p3">
              BorderlessHR is a recruitment software platform that helps
              businesses find the right talent, faster and easier. It gives
              businesses complete visibility of their candidates, manage hiring
              process and save valuable time. BorderlessHR has been specifically
              designed to meet the unique needs of today’s global workforce,
              helping companies grow their teams faster and more efficiently
              than ever before.
            </p>
          </div>

          <div className="horizontal_line2"></div>

          <div className="setting_the_stage">
            <div className="left">
              <p className="p4">Setting the stage</p>
              <p className="p5">
                On joining Borderlesshr, I and Jessica were tasked with
                redesigning the platform but before we jumped into Figma we
                needed to understand what exactly was wrong with the current
                platform, this led to a brainstorming session with the
                stakeholders and we discovered:
                <ul>
                  <li>
                    More than 50% of the tech talents who signed up on the
                    platform had incomplete profiles
                  </li>
                  <li>
                    It was difficult for talents to get matched to businesses,
                    defeating the company's primary purpose.
                  </li>
                  <li>
                    Businesses needed a lot of human support to complete a
                    recruitment circle which cost the company a lot of money
                  </li>
                </ul>
              </p>
            </div>
            <div className="right">
              <div className="right_image">
                <img src="/images/borderless2.png" alt="" />
              </div>
            </div>
          </div>

          <p className="p6">
            These discoveries led to two important questions:
          </p>
          <div className="questions">
            <div className="question1">
              How might we enhance the profile-creating process for candidates?
            </div>
            <div className="question2">
              How might we reduce human support in the recruitment process
            </div>
          </div>
        </div>
      </div>

      <div className="problem_diagnosis">
        <div className="problem_cont">
          <h3>Problem Diagnosis 1</h3>
          <p className="p7">
            Our research first centered around understanding the experiences of
            <br /> the people currently using the web app, issues they are
            facing, and why they have incomplete profiles. I formulated
            questions for an online survey that 28 people answered. Here are
            some of the responses;
          </p>
          <div className="survey_cont">
            <div className="survey survey1">
              A long-form requesting for details contained in the resume is
              overwhelming
            </div>
            <div className="survey survey2">
              Uncertainty or lack of communication after applying for a job
            </div>
            <div className="survey survey3">Unaware of the hiring process.</div>
          </div>

          <div className="statement">
            <div className="vertical_line"></div>
            <p className="statement_p">
              One of the statements that stood out was: “ Uploading my resume
              and having to fill out details already contained in it, <br /> is
              a redundant profile creating process.”
            </p>
          </div>
        </div>
      </div>

      <div className="results_of_diagnosis">
        <div className="result_cont">
          <div className="session1">
            <h3>Results of Problem Diagnosis</h3>
            <p className="p8">
              Based on the responses received, we segmented our users into two
              groups: tech talents looking for jobs and businesses looking to
              hire tech talents. We also broke down the users by their
              attributes, pain points, motivations, goals, and responsibilities.{" "}
            </p>
          </div>

          <div className="session2">
            <img src="/images/borderless3.png" alt="" />
          </div>

          <div className="session3">
            <div className="session3_cont">
              <div className="session3_image">
                <img src="/images/borderless4.png" alt="" />
              </div>
              <div className="session3_writeup">
                <div className="write">
                  <h6>Bio:</h6>
                  <p>
                    Ada is a 24 years old software developer is looking for a
                    new job opportunity. She registers on job platforms in
                    search of her dream job.{" "}
                  </p>
                </div>
                <div className="write">
                  <h6>Pain points</h6>
                  <p>
                    <ul>
                      <li>Long sign up process</li>
                      <li>
                        Fill in details contained in her resume into job
                        platforms
                      </li>
                      <li>Lack of feedback after a job application</li>
                    </ul>
                  </p>
                </div>
                <div className="write">
                  <h6>Needs</h6>
                  <p>
                    <ul>
                      <li>Fast and smooth sign up process</li>
                      <li>Feedback after a job appliction</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="horizontal_line2"></div>
        </div>
      </div>

      <div className="desigh_solution">
        <div className="solutions">
          <h3>Design solution</h3>
          <img src="/images/borderless5.png" className="solution_pix" alt="" />
          <img src="/images/borderless6.png" className="solution_pix" alt="" />
          <img src="/images/borderless7.png" className="solution_pix" alt="" />
          <img src="/images/borderless8.png" className="solution_pix" alt="" />
          <img src="/images/borderless9.png" className="solution_pix" alt="" />
        </div>
      </div>

      <div className="validating_solution">
        <div className="validation_cont">
          <div className="validation1">
            <h3>Validating Solution</h3>
            <p>
              <span>Rewind</span> was used as usability testing tool, on rewind
              we could see how users interacted with the web app and what page
              has the most drop offs. With <span>Rewind</span> we noticed a
              significant percent of users did not make it pass the onboarding
              stage.
            </p>

            <p>
              We conducted interview with 6 talents who recent sign up and left
              mid way and below are our findings
            </p>
          </div>
        </div>
        <div className="validation_image">
          <img src="/images/borderless10.png" alt="" />
        </div>

        <div className="validation_cont">
          <div className="validation2">
            <h3>
              Back to base <span>&#128530;</span>
            </h3>
            <p>
              After the usability texting we held a braining storming section
              with the stockholders to determine how might we make talent
              onboarding fast and smooth and we arrived at solutions below:
              <ol>
                <li>
                  Streamline the requirement for account creation to fit what is
                  obtainable from resume
                </li>
                <li>
                  The most important information should be gotten at the
                  onboarding and the rest can be gotten after a successful sign
                  up
                </li>
                <li>Show information in sections</li>
              </ol>
            </p>
          </div>
          <div className="horizontal_line2"></div>
        </div>
      </div>

      <div className="desigh_solution">
        <div className="solutions">
          <h3>Design solution</h3>
          <img src="/images/borderless11.png" className="solution_pix" alt="" />
          <img src="/images/borderless12.png" className="solution_pix" alt="" />
        </div>
      </div>

      <div className="validate">
        <div className="validation_cont result_cont">
          <div className="validation1">
            <h3>Results</h3>
            <p>
              <span>Heap analytics</span> was used to monitor and track users
              activities after the new solution was implemented. This gave us
              accurate data and insight of users interaction with the product
              and below are the numbers after 1 week:
            </p>
          </div>
        </div>
      </div>

      <div className="resultss">
        <div className="results_container">
          <div className="result1">
            <div className="cont">
              <button>
                <AiOutlineArrowUp className="arrow" />
              </button>
              <span>63</span>
            </div>
            <p>New accounts</p>
            <p>created</p>
          </div>

          <div className="result1">
            <div className="cont">
              <button>
                {" "}
                <AiOutlineArrowUp className="arrow" />
              </button>
              <span>87%</span>
            </div>
            <p>Completed</p>
            <p>profiles</p>
          </div>

          <div className="result1">
            <div className="cont">
              <button>
                {" "}
                <AiOutlineArrowUp className="arrow" />
              </button>
              <span>22%</span>
            </div>
            <p>Existing profiles</p>
            <p>Completed</p>
          </div>
        </div>

        <p className="numbers">numbers after 1 week</p>

        <div className="learnings">
          <h1>Learnings</h1>
          <div className="learning_cont">
            <div className="first_learnings">
              <div className="learninga">
                <span>1</span>
                <p className="learning_paragraph paragraph">
                  I learn a lot about about aligning users need with business
                  goals while working on this project.
                </p>
              </div>
              <div className="learninga">
                <span>3</span>
                <p className="paragraph">
                  I learn how to use new tools like Rewind and Heap analytics
                </p>
              </div>
            </div>
            <div className="second_learnings">
              <div className="learningb">
                <span>2</span>
                <p className="learning_paragraph paragraph">
                  I learn about the importance of validating design solutions
                  and different means to do it
                </p>
              </div>

              <div className="learningb">
                <span>4</span>
                <p className="paragraph">
                  I improved my collaborations skills, this was my first time
                  working with another designer on a project and it was fun
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="reach_out">
        <div className="reachout_writeup">
          <p>
            This doesn’t need to end here. Let's design something spectacular!
          </p>
          <button>
            <a href="mailto:ifeanyichisomjane@gmail.com">
              ifeanyichisomjane@gmail.com
            </a>
          </button>
        </div>
        <div className="reachout_pix">
          <img src="/images/borderless13.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default BorderlessCaseStudy;
