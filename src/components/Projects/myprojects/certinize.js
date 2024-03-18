import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import CertinizeImg from "../../../assets/img/projects/certinize.png";
import reactIcon from "../../../assets/img/tech-stack/frameworks/react.png";
import pythonIcon from "../../../assets/img/tech-stack/languages/python.png";
import typesciptIcon from "../../../assets/img/tech-stack/languages/typescript.png";
import postgresIcon from "../../../assets/img/tech-stack/database/postgresql.png";
import githubIcon from "../../../assets/img/tech-stack/technology/github.svg";
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
  marginTop: "25px"
};

export default function Certinize() {
  return (
    <Card
      sx={{
        width: 900, 
      }}
      className="card-content"
    >
      <CardMedia
        sx={{ height: 200 }}
        image={CertinizeImg}
        title="Certinize: Blockchain-enabled Verification System"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Certinize: Blockchain-enabled Verification System
        </Typography>
        <Typography>
          <b className="subheader">August 2022</b>
        </Typography>
        <Typography variant="body2" className="desc-body">
        An e-certificate issuance and verification system that integrates blockchain applications such as smart contracts, NFTs, Wallet Private Keys, etc. as its cutting-edge form of mid-to-high-end technological security and data integrity. Improves the network security structure of each end server and stabilizes a smooth mainstream of data flow for certificates.
        </Typography>
        <Grid container style={gridContainerStyle}>
          <Grid item>
            <header style={toolHeaderStyle}>Tools Used:</header>
          </Grid>
          <Grid item style={gridStyle}>
            <img src={reactIcon} alt="React Icon" style={iconImg} />
            <img src={pythonIcon} alt="Python Icon" style={iconImg} />
            <img src={typesciptIcon} alt="TypeScript Icon" style={iconImg} />
            <img src={postgresIcon} alt="PostgreSQL Icon" style={iconImg} />
          </Grid>
        </Grid>
        <Grid container style={gridContainerStyle}>
          <Grid item>
            <header style={toolHeaderStyle}>Existing Links:</header>
          </Grid>
          <Grid item style={gridStyle}>
            <a rel="noreferrer" href="https://github.com/certinize" target="_blank"><img src={githubIcon} alt="Github Icon" style={iconImg} /></a>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
