import React, { useEffect } from "react";
import Typed from "typed.js";
import "./about-me.css";
import avatarImage from "../../assets/img/my-avatar.png";
import Container from "react-bootstrap/Container";
import ResumeContainer from "../Resume/resumeData";

export const AboutMe = () => {
  useEffect(() => {
    const typed = new Typed(".input", {
      strings: [
        "Franz Manrique",
        "A UI/UX Designer",
        "A Digital Artist",
        "A Project Manager",
      ],
      typeSpeed: 70,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.destroy(); // Destroy the Typed instance on component unmount to prevent memory leaks
    };
  }, []);

  return (
    <Container>
      <>
        <section className="mt-8 md:mt-32 flex flex-col md:flex-row gap-8 md:gap-16 justify-center items-center animate-fade-up animate-ease-out">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <header className="text-2xl md:text-3xl">Hello! I'm</header>
            <h1>
              <span className="input aboutme-name"></span>
            </h1>
            <header className="text-sm md:text-lg">
              I am a proficient software developer with extensive expertise in
              fundamental to advanced programming concepts. My skill set allows
              me to excel in both technical and non-technical roles within the
              profession.
            </header>
          </div>
          <div className="about-me-img mt-8 md:mt-0">
            <img
              src={avatarImage}
              alt="My Profile"
              className="my-profile-img mx-auto md:mx-0"
            />
          </div>
        </section>
        <section className="md:mt-24 md:ml-16">
          <ResumeContainer />
        </section>
      </>
    </Container>
  );
};
