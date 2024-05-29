import React, { useEffect } from "react";
import Typed from "typed.js";
import "./about-me.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";
import ManriqueCV from "../../assets/document/Manrique_CV.pdf";
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
            <div className="mt-4 flex justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/franz-ronin-manrique-4b7612242/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 transform transition duration-500 ease-in-out hover:scale-125 hover:text-gray-500"
              >
                <LinkedInIcon style={{ fontSize: 50 }} />
              </a>
              <a
                href="https://github.com/Ars3nicc"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 transform transition duration-500 ease-in-out hover:scale-125 hover:text-gray-500"
              >
                <GitHubIcon style={{ fontSize: 50 }} />
              </a>
              <a
                href="https://www.canva.com/design/DAFtSkW0F5c/1JwldvS4uv9Qikbt2A8oJg/edit?utm_content=DAFtSkW0F5c&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 transform transition duration-500 ease-in-out hover:scale-125 hover:text-gray-500"
              >
                <DescriptionIcon style={{ fontSize: 50 }} />
              </a>
            </div>
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
