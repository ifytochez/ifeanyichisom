import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./PROJECT/Projects";
import About from "./ABOUT/About";
import BorderlessCaseStudy from "./BORDERLESS/BorderlessCaseStudy";
import AiBanc from "./AIBANC/AiBanc";
import Footer from "./FOOTER/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/borderlesscasestudy"
            element={<BorderlessCaseStudy />}
          />
          <Route path="/aibanc" element={<AiBanc />}></Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
