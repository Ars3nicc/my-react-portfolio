import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import HCPImg from "../../../assets/img/projects/sample.jpg";
import laravelIcon from "../../../assets/img/tech-stack/frameworks/laravel.png";
import mySQLIcon from "../../../assets/img/tech-stack/database/mysql.svg";
import phpIcon from "../../../assets/img/tech-stack/languages/php.png";
import githubIcon from "../../../assets/img/tech-stack/technology/github.svg";


const iconImg = {
  width: "30px",
  height: "auto",
};
const gridContainerStyle = {
    margin: "10px",
    display: "block"
  };
const gridStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};
const toolHeaderStyle = {
  fontWeight: "bold",
  fontSize: "16px",
};

export default function heightClearance() {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={HCPImg}
        title="Online Height Clearance"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Online Height Clearance
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Digitalized clearance and verification system used as a prerequisites
          for a contractor's building permit.
        </Typography>
        <Grid container style={gridContainerStyle}>
          <Grid item>
            <header style={toolHeaderStyle}>Tools Used:</header>
          </Grid>
          <Grid item style={gridStyle}>
            <img src={laravelIcon} alt="Laravel Icon" style={iconImg} />
            <img src={phpIcon} alt="Php Icon" style={iconImg} />
            <img src={mySQLIcon} alt="MySQL Icon" style={iconImg} />
            <img src={githubIcon} alt="Github Icon" style={iconImg} />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button variant="outlined">Learn More</Button>
      </CardActions>
    </Card>
  );
}
