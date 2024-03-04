import React from "react";
import Resume from "./index"; // Import your Resume component
// import laravelIcon from "../assets/img/tech-stack/frameworks/laravel.png";



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
    title: "Computer Programmer",
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
    stacks: [
        // laravelIcon
      ]
  },
  {
    title: "Associate Operations Manager",
    experience: "June 2023 - September 2023",
    company: "Centrive Technologies",
    description: [
      "Recruited as a trainee-to-associate within a dynamic startup environment.",
      "Entrusted with pivotal responsibilities including backlog management and platform organization.",
      "Actively collaborated on various IT projects and initiatives in development.",
      "Played a key role in documenting the progression of development stages.",
      "Ensured comprehensive records and insights for ongoing projects.",
      "Engaged proactively with cross-functional teams to streamline processes.",
      "Contributed innovative ideas to support the overall growth and success of the organization.",
    ],
  },
  // Add more resume data objects as needed
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
            stacks={resume.stacks} // Pass the tech stack icons
          />
        </div>
      ))}
    </>
  );
};

export default ResumeContainer;
