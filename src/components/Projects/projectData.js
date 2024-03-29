import React from "react";
import HeightClearance from "./myprojects/heightClearance";
import DGCA from "./myprojects/dgca";
import AirportProjectDB from "./myprojects/airportProjectsDB";
import Certinize from "./myprojects/certinize";
import { Grid } from "@mui/material";
import "../Projects/main.css";

const gridContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const titleHeaderStyle = {
  fontSize: "2rem",
  fontWeight: "bold",
  textAlign: "center",
  paddingTop: "3vh",
};
const TitlesubStyle = {
  fontSize: "1.3",
  textAlign: "center",
};
const TitleHeader = ({ title, titleSub }) => {
  return (
    <main>
      <header style={titleHeaderStyle}>{title}</header>
      <div style={TitlesubStyle}>{titleSub}</div>
    </main>
  );
};

const ProjectData = () => {
  return (
    <>
      <TitleHeader
        title="My Projects"
        titleSub="A collection of all my existing projects that I used through my software developer career."
      />
      <br></br>
        <Grid container style={gridContainer} spacing={8}>
          <Grid item>
            <Certinize />
          </Grid>
          <Grid item>
            <HeightClearance />
          </Grid>
          <Grid item>
            <DGCA />
          </Grid>
          <Grid item>
            <AirportProjectDB />
          </Grid>
        </Grid>
    </>
  );
};

export default ProjectData;
