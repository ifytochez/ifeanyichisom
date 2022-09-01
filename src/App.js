import React from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import NavBar from "./NavBar";
import Projects from "./Projects"
import BorderlessCaseStudy from './BorderlessCaseStudy'
import CashietCaseStudy from "./CashietCaseStudy";
import About from "./About";
import Footer from "./Footer";

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>

      <Routes>
      <Route path='/' element={<Projects/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/borderlesscasestudy' element={<BorderlessCaseStudy/>}/>
      <Route path='/cashietcasestudy' element={<CashietCaseStudy/>}/>
      </Routes>


      <Footer/>
    </div>

    </Router>
  );
}

export default App;
