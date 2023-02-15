import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NAVBAR/NavBar";
import Projects from "./PROJECT/Projects";
import About from "./ABOUT/About";
import CashietCaseStudy from "./CASHIET/CashietCaseStudy";
import BorderlessCaseStudy from "./BORDERLESS/BorderlessCaseStudy";
import AiBanc from "./AIBANC/AiBanc";
import Footer from "./FOOTER/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/borderlesscasestudy"
            element={<BorderlessCaseStudy />}
          />
          <Route path="/cashietcasestudy" element={<CashietCaseStudy />} />
          <Route path="/aibanc" element={<AiBanc />}></Route>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
