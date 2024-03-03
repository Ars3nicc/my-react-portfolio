import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/index";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { Routes, Route } from "react-router-dom";

function App() {
  // const marginStyle = {
  //   marginTop: "10vh",
  // };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
