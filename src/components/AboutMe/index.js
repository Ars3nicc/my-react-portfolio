import React, { useEffect } from "react";
import Typed from "typed.js";
import "./about-me.css";
import fubukiImage from "../../assets/img/fubuki.jpg";

export const AboutMe = () => {
  useEffect(() => {
    const typed = new Typed(".input", {
      strings: ["Franz Manrique", "A UI/UX Designer", "A Digital Artist", "A Project Manager"],
      typeSpeed: 70,
      backSpeed: 60,
      loop: true
    });

    return () => {
      typed.destroy(); // Destroy the Typed instance on component unmount to prevent memory leaks
    };
  }, []);

  return (
    <div className='aboutme-container'>
      <div className='about-me'>
        <header className='about-me-hello'>Hello! I'm</header>
        <h1><span className="input aboutme-name"></span></h1>
        <header>a professional software developer.</header>
      </div>
      <div className='about-me-img'>
        <img src={fubukiImage} alt="My Profile" className="my-profile-img" />
      </div>
    </div>
  );
};
