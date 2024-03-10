import React from "react";
import Resume from "./index"; // Import your Resume component
import { stackIcons } from "./stackIcons"; // Import stackIcons



const indexGrpStyle = {
    display: 'flex',
    marginLeft: "2vw",
}
const indexNumberStyle = {
  display: "inline-block",
  marginTop: "10vh",
  width: "60px",
  height: "60px",
  textAlign: "center",
  borderRadius: "99px",
  backgroundColor: "#387adf",
  color: "#fff",
  fontWeight: "bold",
  fontSize: "2.4rem",
};

const resumeData = [
  {
    title: "IT Consultant/Computer Programmer",
    experience: "August 2023 - Present",
    company: "Civil Aviation Authority of the Philippines",
    description: [
      "Responsible for providing technical support and maintenance for computer systems, hardware, and peripherals within the Civil Aviation Authority of the Philippines.",
      "Established collaborative partnerships and fostered internal connections with Executive Boards to drive the digitalization transformation of the system.",
      "Installed, configured, and upgraded computer hardware, software, and operating systems according to organizational standards and user requirements.",
      "Actively engaged with key stakeholders to understand organizational objectives and requirements, facilitating the adoption of innovative technologies and strategies to enhance operational efficiency and effectiveness.",
      "Implemented preventive maintenance procedures to minimize downtime and maximize the reliability of computer systems and equipment.",
      "Provided user training and support to enhance computer literacy and optimize the utilization of technology resources.",
    ],
    stack1: [stackIcons.laravel],
  },
  {
    title: "Associate Operations Manager",
    experience: "June 2023 - September 2023",
    company: "Centrive Technologies",
    description: [
      "Recruited as a trainee-to-associate within a dynamic startup environment, where I quickly transitioned to assume responsibilities akin to an associate level.",
      "My role encompassed various aspects, including backlog management, platform organization, and active collaboration on multiple IT projects and initiatives in development.",
      "Played a pivotal role in documenting the progression of development stages, ensuring comprehensive records and insights for ongoing projects.",
      "Contributed the system designs while maintaing 100% functionality of the system and remain aligned to the customer's requirements.",
      "Engaged proactively with cross-functional teams to streamline processes and foster a collaborative environment. Acted as a liaison between different departments, facilitating communication and coordination to drive projects forward effectively.",
      "Contributed innovative ideas and solutions to address challenges and optimize workflows, supporting the overall growth and success of the organization.",
      "Leveraged creativity and critical thinking to propose enhancements and improvements across various aspects of the business.",
    ],
    
  },
  {
    title: "IT Intern",
    experience: "September 2022 - March 2023",
    company: "Persons",
    description: [
      "Spearheaded with the innovation of anti-tampering systems for user credentials from the company services.",
      "Assisted and cooperated with educational experience through temporarily providing teachings and trainings to aspiring ICT students.",
      "Tasked as substitute IT consultant for clients while providing high-end solutions and recommendations for their outputs and projects.",
      "Demonstrated proficiency in delivering cutting-edge technology solutions and recommendations.",
    ],
    
  },
  
];


const ResumeContainer = () => {
  return (
    <>
      {resumeData.map((resume, index) => (
        <div style={indexGrpStyle} key={index}>
          <span style={indexNumberStyle}>{index + 1}</span>{" "}
          {/* Display index number */}
          <Resume
            title={resume.title}
            experience={resume.experience}
            company={resume.company}
            description={resume.description}
          />
        </div>
      ))}
      
    </>
  );
};
export default ResumeContainer;
