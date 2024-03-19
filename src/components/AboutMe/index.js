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
        <div className="aboutme-container">
          <div className="about-me">
            <header className="about-me-hello">Hello! I'm</header>
            <h1>
              <span className="input aboutme-name"></span>
            </h1>
            <header className="aboutme-desc">
              I am a proficient software developer with extensive expertise in
              fundamental to advanced programming concepts. My skill set allows
              me to excel in both technical and non-technical roles within the
              profession.
            </header>
          
          </div>
          <div className="about-me-img">
            <img
              src={avatarImage}
              alt="My Profile"
              className="my-profile-img"
            />
          </div>
        </div>
        <ResumeContainer
        />
      </>
    </Container>
  );
};
