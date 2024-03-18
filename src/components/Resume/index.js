import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const gridStyle = {
  width: "70%",
  padding: "3vw",
};
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
const descStyle = {
  marginTop: "3vh",
  marginLeft: "3vw",
  padding: "10px",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  borderRadius: "16px",
  maxWidth: "1000px",
};


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
      <Grid container style={gridStyle}>
        <Grid item>
          <PositionTitle
            title={title}
            experience={experience}
            company={company}
          />
          <Box style={descStyle}>
            <ul style={listStyle}>
              {description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
