import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import HCPImg from "../../../assets/img/projects/height-clearance.png";
import laravelIcon from "../../../assets/img/tech-stack/frameworks/laravel.png";
import phpIcon from "../../../assets/img/tech-stack/languages/php.png";
import typesciptIcon from "../../../assets/img/tech-stack/languages/typescript.png";
import mysqlIcon from "../../../assets/img/tech-stack/database/mysql.svg";
import githubIcon from "../../../assets/img/tech-stack/technology/github.svg";
import bootstrapIcon from "../../../assets/img/tech-stack/technology/bootstrap.png";
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

export default function Certinize() {
  return (
    <Card
      className="card-content"
    >
      <CardMedia
        sx={{ height: 300 }}
        image={HCPImg}
        title="Online Height Clearance"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Online Height Clearance
        </Typography>
        <Typography>
          <b className="subheader">October 2023</b>
        </Typography>
        <Typography variant="body2" className="desc-body">
          A streamlined permit/certification application used as a requirement
          for all proposed PTTIs that are fifty (50) meters or higher above the
          elevation of the ground. It uses the Laravel framework for the
          submission process and Javascript for the critical area mapping.
        </Typography>
        <Grid container style={gridContainerStyle}>
          <Grid item>
            <header style={toolHeaderStyle}>Tools Used:</header>
          </Grid>
          <Grid item style={gridStyle}>
            <img src={laravelIcon} alt="Laravel Icon" style={iconImg} />
            <img src={phpIcon} alt="PHP Icon" style={iconImg} />
            <img src={typesciptIcon} alt="TypeScript Icon" style={iconImg} />
            <img src={bootstrapIcon} alt="Bootstrap Icon" style={iconImg} />
            <img src={mysqlIcon} alt="MySQL Icon" style={iconImg} />
          </Grid>
        </Grid>
        <Grid container style={gridContainerStyle}>
          <Grid item>
            <header style={toolHeaderStyle}>Existing Links:</header>
          </Grid>
          <Grid item style={gridStyle}>
            <a
              rel="noreferrer"
              href="https://github.com/CAAP-Information-System/height-clearance-laravel"
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
