import React, { useEffect } from "react";
import Typed from "typed.js";
import "./about-me.css";
import avatarImage from "../../assets/img/my-avatar.png";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import DescriptionIcon from "@mui/icons-material/Description";
import Container from "react-bootstrap/Container";
import ResumeContainer from "../Resume/resumeData"; 

export const AboutMe = () => {
  // const iconStyle = {
  //   fontSize: "3rem",
  // };

  // const iconGroupStyle = {
  //   marginTop: "3vh",
  //   display: "flex",
  // };

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
            {/* <div style={iconGroupStyle} className="icon-grp">
              <a
                href="https://github.com/Ars3nicc"
                className="aboutme-icon"
                data-label="GitHub"
              >
                <GitHubIcon style={iconStyle} />
              </a>
              <a
                href="https://www.linkedin.com/in/franz-ronin-manrique-4b7612242/"
                className="aboutme-icon"
                data-label="LinkedIn"
              >
                <LinkedInIcon style={iconStyle} />
              </a>
              <a
                href="https://www.linkedin.com/in/franz-ronin-manrique-4b7612242/"
                className="aboutme-icon"
                data-label="Resume"
              >
                <DescriptionIcon style={iconStyle} />
              </a>
            </div> */}
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
