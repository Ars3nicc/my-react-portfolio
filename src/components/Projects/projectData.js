import React from "react";
import HeightClearance from "./myprojects/heightClearance";
import DGCA from "./myprojects/dgca";
import AirportProjectDB from "./myprojects/airportProjectsDB";
import Certinize from "./myprojects/certinize";
import { Grid } from "@mui/material";
import "../Projects/main.css";



const TitleHeader = ({ title, titleSub }) => {
  return (
    <main className="py-24">
      <header className="m-5  uppercase text-7xl font-bold text-center">{title}</header>
    </main>
  );
};

const ProjectData = () => {
  return (
    <>
      <TitleHeader
        title="My Projects"
        // titleSub="A collection of all my existing projects that I used through my software developer career."
      />
      <br></br>
        <Grid container spacing={8}>
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
