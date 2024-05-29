import React, { useEffect } from "react";
import TechStack from "../TechStack/index";
import Header from "./Header.js";
import ProjectsCard from "../../components/ProjectCard/Projects.js";
import AOS from "aos";
import "aos/dist/aos.css";

const withAOS = (Component) => (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return <Component {...props} />;
};

export const Projects = withAOS(() => {
  return (
    <>
      <Header />

      <TechStack />
      <header
        className="py-6 text-5xl font-bold text-center animate-fade-up animate-delay-0"
        data-aos="fade-up"
      >
        My Projects
      </header>
      <hr />
      <ProjectsCard />
    </>
  );
});
