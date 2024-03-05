import React from "react";
import TechStack from "../TechStack/index";
import Header from "./Header.js";
import ProjectData from "./projectData.js";

const hrStyle ={
  marginTop: '3vh',
  width: '30%',
  border: '1px solid #50A9FB'
}

export const Projects = () => {
  return (
    <>
      <Header/>
      <hr style={hrStyle}></hr>
      <TechStack />
      <ProjectData />
    </>
  );
};
