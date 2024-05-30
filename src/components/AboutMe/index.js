import React, { useEffect } from "react";
import Typed from "typed.js";
import "./about-me.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
// import ManriqueCV from "../../assets/document/Manrique_CV.pdf";
import avatarImage from "../../assets/img/my-avatar.png";

import ResumeContainer from "../Resume/resumeData";
import Header from "../Header/index";

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
    <>
      <>
        <main className="mt-8 md:mt-32 flex flex-col md:flex-row gap-8 md:gap-16 justify-center items-center animate-fade-up animate-ease-out">
          <section className="w-full md:w-1/2 text-center md:text-left">
            {/* About Me Section */}
            <header className="text-2xl md:text-3xl lg:text-4xl">
              Hello! I'm
            </header>
            <h1>
              {/* Typing animation with vanilla javascript */}
              <span className="input aboutme-name"></span>
            </h1>
            <header className="text-sm md:text-lg lg:text-xl">
              I am a proficient software developer with extensive expertise in
              fundamental to advanced programming concepts. My skill set allows
              me to excel in both technical and non-technical roles within the
              profession.
            </header>
            <div className="mt-4 flex justify-center md:justify-start">
              {/* Icon for LinkedIn Profile */}
              <a
                href="https://www.linkedin.com/in/franz-ronin-manrique-4b7612242/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 transform transition duration-500 ease-in-out hover:scale-125 hover:text-gray-500"
                title="LinkedIn"
              >
                <LinkedInIcon style={{ fontSize: 50 }} />
              </a>
              {/* Icon for Github Profile*/}
              <a
                href="https://github.com/Ars3nicc"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 transform transition duration-500 ease-in-out hover:scale-125 hover:text-gray-500"
                title="GitHub"
              >
                <GitHubIcon style={{ fontSize: 50 }} />
              </a>
              {/* Icon for Resume Link */}
              <a
                href="https://www.canva.com/design/DAFtSkW0F5c/1JwldvS4uv9Qikbt2A8oJg/edit?utm_content=DAFtSkW0F5c&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 transform transition duration-500 ease-in-out hover:scale-125 hover:text-gray-500"
                title="Resume"
              >
                <AssignmentIndIcon style={{ fontSize: 50 }} />
              </a>
            </div>
          </section>
          <div className="about-me-img mt-8 md:mt-0">
            <img
              src={avatarImage}
              alt="My Profile"
              className="w-64 md:w-96 lg:w-full rounded-full mx-auto md:mx-0"
            />
          </div>
        </main>
        <section className="md:mt-24">
          <Header title="Work Experience" />
        </section>

        <section className="md:mt-9 md:ml-16">
          <ResumeContainer />
        </section>
      </>
    </>
  );
};
