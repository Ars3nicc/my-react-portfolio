import React from "react";

import Grid from "@mui/material/Grid";
import "../Resume/index.css";
import { Card } from "@mui/material";

const positionStyle = {
  fontSize: "25px",
  fontWeight: "bold",
};
const companyStyle = {
  fontSize: "18px",
  color: "#969696",
};
const yearsExperienceStyle = {
  fontSize: "1.3rem",
  color: "#387adf",
  marginTop: "10px",
  fontWeight: "bold",
};
// const headerStyle = {
//   fontSize: "1.3rem",
//   fontWeight: "bold",
//   marginTop: "15px",
// };
// const stacksStyle = {
//   width: "40px",
//   height: "auto",
//   padding: "10px",
// };


const listStyle = {
  fontSize: "15px",
  lineHeight: "3vh",
  textAlign: "justify",
  margin: "15px"
};

const PositionTitle = ({ title, company, experience, stack1, stack2 }) => {
  return (
    <main>
      <header style={positionStyle}>{title}</header>
      <div style={companyStyle}>{company}</div>
      <div style={yearsExperienceStyle}>{experience}</div>
    </main>
  );
};
const Resume = ({ title, company, experience, description, stack1,stack2 }) => {
  return (
    <>
      <Grid container className="main-container">
        <Grid item>
          <PositionTitle
            title={title}
            experience={experience}
            company={company}
          />
          <Card className="desc-card">
            <ul style={listStyle}>
              {description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
