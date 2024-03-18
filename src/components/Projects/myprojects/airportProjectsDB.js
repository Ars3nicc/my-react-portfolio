import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import HCPImg from "../../../assets/img/projects/sample.jpg";
import djangoIcon from "../../../assets/img/tech-stack/frameworks/django.png";
import pythonIcon from "../../../assets/img/tech-stack/languages/python.png";
import postgresIcon from "../../../assets/img/tech-stack/database/postgresql.png";
import githubIcon from "../../../assets/img/tech-stack/technology/github.svg";
import bootstrapIcon from "../../../assets/img/tech-stack/technology/bootstrap.png";
import postmanIcon from "../../../assets/img/tech-stack/technology/postman.jpg";
import "../myprojects/card.css";

const iconImg = {
  width: "35px",
  height: "auto",
};
const gridContainerStyle = {
  margin: "10px",
  display: "block",
};
const gridStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};
const toolHeaderStyle = {
  fontSize: "16px",
  marginTop: "25px",
};

export default function DGCA() {
  return (
    <Card
      sx={{
        width: 900,
      }}
      className="card-content"
    >
      <CardMedia
        sx={{ height: 200 }}
        image={HCPImg}
        title="Airport Project Management Website"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Airport Project Management Website
        </Typography>
        <Typography>
          <b className="subheader">March 2023</b>
        </Typography>
        <Typography variant="body2" className="desc-body">
          An online and strategic initiative aimed at optimising the digital
          infrastructure for the Directorate General of Civil Aviation (DGCA)
          Conference, exclusively serving nations within the Asia-Pacific Region
          (APAC). This web-based platform streamlines the submission of
          electronic files and programs, fostering seamless preparations ahead
          of the conference.
        </Typography>
        <Grid container style={gridContainerStyle}>
          <Grid item>
            <header style={toolHeaderStyle}>Tools Used:</header>
          </Grid>
          <Grid item style={gridStyle}>
            <img src={djangoIcon} alt="Django Icon" style={iconImg} />
            <img src={pythonIcon} alt="Python Icon" style={iconImg} />
            <img src={bootstrapIcon} alt="Bootstrap Icon" style={iconImg} />
            <img src={postgresIcon} alt="PostgreSQL Icon" style={iconImg} />
            <img src={postmanIcon} alt="Postman Icon" style={iconImg} />
          </Grid>
        </Grid>
        <Grid container style={gridContainerStyle}>
          <Grid item>
            <header style={toolHeaderStyle}>Existing Links:</header>
          </Grid>
          <Grid item style={gridStyle}>
            <a
              rel="noreferrer"
              href="https://github.com/CAAP-Information-System/airman-database-laravel"
              target="_blank"
            >
              <img src={githubIcon} alt="Github Icon" style={iconImg} />
            </a>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
