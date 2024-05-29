import React from "react";
import Resume from "./index"; // Import your Resume component
import laravel from "../../assets/img/tech-stack/frameworks/laravel.png";
import django from "../../assets/img/tech-stack/frameworks/django.png";
import react from "../../assets/img/tech-stack/frameworks/react.png";
import php from "../../assets/img/tech-stack/languages/php.png";
import python from "../../assets/img/tech-stack/languages/python.png";
import tailwind from "../../assets/img/tech-stack/languages/tailwind.png";
import javascript from "../../assets/img/tech-stack/languages/javascript.png";
import mysql from "../../assets/img/tech-stack/database/mysql.svg";
import postgresql from "../../assets/img/tech-stack/database/postgresql.png";
import git from "../../assets/img/tech-stack/technology/git.png";
import jquery from "../../assets/img/tech-stack/technology/jquery.png";
import mui from "../../assets/img/tech-stack/technology/mui.svg";
import nodejs from "../../assets/img/tech-stack/technology/node.png";
import trello from "../../assets/img/tech-stack/technology/trello.png";
import postman from "../../assets/img/tech-stack/technology/postman.jpg";
import figma from "../../assets/img/tech-stack/technology/figma.png";
import bootstrap from "../../assets/img/tech-stack/technology/bootstrap.png";

const indexGrpStyle = {
  display: "flex",
  marginLeft: "2vw",
};

const resumeData = [
  {
    title: "IT Consultant",
    experience: "August 2023 - Present",
    company: "Civil Aviation Authority of the Philippines",
    description: [
      "Applied API practices to digitalization development of CAAP and enabled automation scriptings.",
      "Established collaborative partnerships and fostered internal connections with Executive Boards to drive the digitalization transformation of the system.",
      "Installed, configured, and upgraded computer hardware, software, and operating systems according to organizational standards and user requirements.",
      "Applied scripting and Integrations to automate system testing phases.",
      "Implemented preventive maintenance procedures to minimize downtime and maximize the reliability of computer systems and equipment.",
      "Moderated backend tasks together with frontend designs.",
      "Applied front-end tasks to deliver the most interactive design for the project stakeholders and clients.",
      "Spearheaded the design of intuitive system interfaces, enhancing user experience and facilitating seamless interactions with applications.",
    ],
    stacks: [
      <div className="flex gap-2">
        <img
          src={laravel}
          alt="Laravel"
          style={{ width: "30px", height: "30px" }}
        />
        <img src={php} alt="PHP" style={{ width: "50px", height: "30px" }} />
        <img
          src={python}
          alt="Python"
          style={{ width: "30px", height: "auto" }}
        />
        <img
          src={javascript}
          alt="Javascript"
          style={{ width: "30px", height: "30px" }}
        />
        <img
          src={mui}
          alt="Material UI"
          style={{ width: "30px", height: "30px" }}
        />
        <img
          src={tailwind}
          alt="Tailwind"
          style={{ width: "50px", height: "auto" }}
        />
        <img
          src={mysql}
          alt="MySQL"
          style={{ width: "50px", height: "auto" }}
        />
        <img src={git} alt="Git" style={{ width: "35px", height: "auto" }} />
      </div>,
    ],
  },
  {
    title: "Computer Programmer",
    experience: "January 2023 - August 2023",
    company: "Civil Aviation Authority of the Philippines",
    description: [
      "Developed and integrated robust Python-based solutions, significantly enhancing the efficiency and functionality of various systems.",
      "Leveraged Python scripting to automate and streamline testing processes, resulting in improved software quality and reliability.",
      "Applied expert knowledge of PHP in creating dynamic, user-friendly front-end interfaces, enhancing user experience and engagement.",
      "Collaborated closely with the UX team to ensure the delivery of exceptional user experiences through intuitive design and seamless functionality.",
      "Played a key role in the development and implementation of a comprehensive testing strategy, using Python to automate tests and ensure software quality.",
      "Utilized PHP to create and implement innovative front-end solutions, contributing to the development of highly interactive and user-friendly applications.",
      "Spearheaded a team initiative to integrate Python scripts into the system, resulting in improved efficiency and automation of key processes.",
      "Championed the use of Python and PHP in the development of cutting-edge solutions, contributing to the company's digital transformation journey.",
    ],
    stacks: [
      <div className="flex gap-2">
        <img
          src={django}
          alt="Django"
          style={{ width: "30px", height: "30px" }}
        />
        <img
          src={react}
          alt="React"
          style={{ width: "30px", height: "30px" }}
        />
        <img src={php} alt="PHP" style={{ width: "50px", height: "30px" }} />
        <img
          src={python}
          alt="Python"
          style={{ width: "30px", height: "auto" }}
        />
        <img
          src={javascript}
          alt="Javascript"
          style={{ width: "30px", height: "30px" }}
        />
        <img
          src={nodejs}
          alt="Node.JS"
          style={{ width: "30px", height: "auto" }}
        />
        <img
          src={postgresql}
          alt="PostgreSQL"
          style={{ width: "30px", height: "auto" }}
        />
        <img src={git} alt="Git" style={{ width: "35px", height: "auto" }} />
        <img
          src={bootstrap}
          alt="Bootstrap"
          style={{ width: "30px", height: "30px" }}
        />
      </div>,
    ],
  },
  {
    title: "Junior Operations Manager",
    experience: "June 2022 - January 2023",
    company: "Centrive Technologies",
    description: [
      "Successfully managed and streamlined backlogs of IT projects and proposals, contributing to improved project timelines and operational efficiency.",
      "My role encompassed various aspects, including backlog management, platform organization, and active collaboration on multiple IT projects and initiatives in development.",
      "Played a pivotal role in programming tasks, demonstrating proficiency in JavaScript and React development, and actively contributed to project development.",
      "Contributed the system designs while maintaing 100% functionality of the system and remain aligned to the customer's requirements.",
      "Engaged proactively with cross-functional teams to streamline processes and foster a collaborative environment. Acted as a liaison between different departments, facilitating communication and coordination to drive projects forward effectively.",
      "Contributed innovative ideas and solutions to address challenges and optimize workflows, supporting the overall growth and success of the organization.",
      "Leveraged creativity and critical thinking to propose enhancements and improvements across various aspects of the business.",
      "Applied operations assistance and technical support by use of ticketing system.",
      "Contributed to web development tasks especially in frontend using React technologies to a more interactive design.",
    ],
    stacks: [
      <div className="flex gap-2">
        <img
          src={trello}
          alt="Trello"
          style={{ width: "30px", height: "30px" }}
        />
        <img src={git} alt="Git" style={{ width: "30px", height: "30px" }} />
        <img
          src={jquery}
          alt="JQuery"
          style={{ width: "30px", height: "30px" }}
        />
        <img
          src={figma}
          alt="Figma"
          style={{ width: "30px", height: "35px" }}
        />
        <img
          src={postman}
          alt="Postman"
          style={{ width: "30px", height: "30px" }}
        />
      </div>,
    ],
  },
  {
    title: "IT Intern",
    experience: "March 2022 - June 2023",
    company: "Persons",
    description: [
      "Contributed with the improvements for anti-tampering systems, significantly enhancing the security of user credentials across all company services.",
      "Collaborated with educational institutions, providing temporary instruction and training to aspiring ICT students, fostering the next generation of tech professionals.",
      "Served as a substitute IT consultant for clients, delivering high-end, tailored solutions and recommendations that drove their projects to success.",
      "Demonstrated proficiency in delivering cutting-edge technology solutions, staying ahead of industry trends and consistently pushing the boundaries of innovation.",
      "Led a cross-functional team in the development and implementation of strategic IT projects, resulting in improved operational efficiency.",
      "Implemented robust cybersecurity measures, protecting company data and instilling customer trust.",
      "Played a key role in the digital transformation initiatives of the company, modernizing legacy systems and processes.",
      "Managed IT infrastructure, ensuring high availability and minimal downtime, leading to increased productivity across the organization.",
      "Excelled in adapting loud technologies, resulting in cost savings and improved scalability for the company.",
      "Continually updated technical knowledge and skills, demonstrating a commitment to professional growth and mastery in the field of IT.",
    ],
    stacks: [
      <div className="flex gap-2">
        <img
          src={trello}
          alt="Trello"
          style={{ width: "30px", height: "30px" }}
        />
        <img src={git} alt="Git" style={{ width: "30px", height: "30px" }} />
        <img
          src={figma}
          alt="Figma"
          style={{ width: "30px", height: "35px" }}
        />
        <img
          src={postman}
          alt="Postman"
          style={{ width: "30px", height: "30px" }}
        />
      </div>,
    ],
  },
];

const ResumeContainer = () => {
  return (
    <>
      {resumeData.map((resume, index) => (
        <div style={indexGrpStyle} key={index}>
          {/* <span style={indexNumberStyle}>{index + 1}</span>{" "} */}
          {/* Display index number */}
          <Resume
            title={resume.title}
            experience={resume.experience}
            company={resume.company}
            description={resume.description}
            stacks={resume.stacks}
          />
        </div>
      ))}
    </>
  );
};
export default ResumeContainer;
