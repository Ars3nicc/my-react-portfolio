import React from "react";
import HeightClearance from "./myprojects/heightClearance";
import DGCA from "./myprojects/dgca";
import AirportProjectDB from "./myprojects/airportProjectsDB";
import { Grid } from "@mui/material";

const gridContainer = {
  display: "flex",
  justifyContent: "center",
};

const ProjectData = () => {
  return (
    <>
      <Grid container style={gridContainer} spacing={3}>
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
