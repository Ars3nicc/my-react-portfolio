import React from "react";
import TechStack from "../TechStack/index";
import Header from "./Header.js";
import ProjectData from "./projectData.js";


export const Projects = () => {
  return (
    <>
      <Header/>
      <hr></hr>
      <TechStack />
      <ProjectData />
    </>
  );
};
