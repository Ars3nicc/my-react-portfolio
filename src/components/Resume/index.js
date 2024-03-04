import React from "react";
import Grid from "@mui/material/Grid";
import Description from './Description'

const gridStyle = {
  width: "100%",
  padding: "3vw",
};
const positionStyle = {
  fontSize: "2rem",
  fontWeight: "bold",
};
const companyStyle = {
  fontSize: "1.5rem",
  color: "#969696",
};
const PositionTitle = ({ title, company }) => {
  return (
    <main>
      <header style={positionStyle}>{title}</header>
      <div style={companyStyle}>{company}</div>
    </main>
  );
};
const Resume = () => {
  return (
    <>
      <Grid container style={gridStyle}>
        <Grid item ms={10}>
          <PositionTitle title="Computer Maintenance Specialist II" />
          <PositionTitle company="Civil Aviation Authority of the Philippines" />
          <Description/>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
