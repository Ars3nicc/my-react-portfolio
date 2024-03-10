import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import HCPImg from "../../../assets/img/projects/sample.jpg";
import django from "../../../assets/img/tech-stack/frameworks/django.png";
import reactIcon from "../../../assets/img/tech-stack/frameworks/react.png";
import pythonIcon from "../../../assets/img/tech-stack/languages/python.png";
import postgresIcon from "../../../assets/img/tech-stack/database/postgresql.png";
import bootstrapIcon from "../../../assets/img/tech-stack/technology/bootstrap.png";

const iconImg = {
  width: "30px",
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
  fontWeight: "bold",
  fontSize: "16px",
};

export default function heightClearance() {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={HCPImg}
        title="Airport Project Management Website"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Airport Project Management Website
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A centralized platform designed to streamline project management
          within airport facilities.
        </Typography>
        <Grid container style={gridContainerStyle}>
          <Grid item>
            <header style={toolHeaderStyle}>Tools Used:</header>
          </Grid>
          <Grid item style={gridStyle}>
            <img src={django} alt="Django Icon" style={iconImg} />
            <img src={pythonIcon} alt="Python Icon" style={iconImg} />
            <img src={postgresIcon} alt="PostgreSQL Icon" style={iconImg} />
            <img src={bootstrapIcon} alt="Bootstrap Icon" style={iconImg} />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button variant="outlined">Learn More</Button>
      </CardActions>
    </Card>
  );
}
