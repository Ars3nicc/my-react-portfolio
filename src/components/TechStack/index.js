import React from "react";
import "./index.css";
import { LangTools } from "./Stacks/LangTools.js";
import { TechTools } from "./Stacks/TechTools.js";
import { FrameworkTools } from "./Stacks/FrameworkTools.js";
import { DatabaseTools } from "./Stacks/DatabaseTools.js";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "react-bootstrap/Container";

const titleHeaderStyle = {
  fontSize: "2rem",
  fontWeight: "bold",
  textAlign: "center",
  paddingTop: "3vh"
};
const TitlesubStyle = {
  fontSize: "1.3",
  textAlign: "center",
};
const techHeaderStyle = {
  fontSize: "1.5rem",
  fontWeight: "bold",
};
const descriptionStyle = {
  fontSize: "13px",
  color: "#969696",
  marginBottom: "3vh",
};
const gridStyle = {
  display: "flex",
  justifyContent: "center",
};
const gridItemStyle = {
  backgroundColor: "#ffff"
};
const TitleDesc = ({ description, }) => {
  return (
    <main>
      <header style={descriptionStyle}>{description}</header>

    </main>
  );
};

const TitleHeader = ({ title,titleSub }) => {
  return (
    <main>
      <header style={titleHeaderStyle}>{title}</header>
      <div style={TitlesubStyle}>{titleSub}</div>
    </main>
  );
};

const TechHeader = ({ title }) => {
  return (
    <main>
      <header style={techHeaderStyle}>{title}</header>
    </main>
  );
};

const TechStack = () => {
  return (
    <div>
      <Container fluid>
        <TitleHeader 
        title="Tech Stacks" 
        titleSub= "My collection of tools and frameworks used to develop fascinating software projects."
        />

        <Grid container spacing={5} style={gridStyle}>
          <Grid item>
            <Box
              height={400}
              width={600}
              my={4}
              gap={4}
              p={2}
              borderRadius={2}
              sx={{ border: "2px solid #969696" }}
              style={gridItemStyle}
            >
              <TechHeader title="Languages" />
              <TitleDesc description="Experienced tools" />
              <LangTools />
              <br></br>
              <br></br>
              <TechHeader title="Frameworks" />
              <TitleDesc description="Experienced tools" />
              <FrameworkTools />
            </Box>
          </Grid>
          <Grid item>
            <Box
              height={400}
              width={600}
              my={4}
              gap={4}
              p={2}
              borderRadius={2}
              sx={{ border: "2px solid #969696" }}
              style={gridItemStyle}
            >
              <TechHeader title="Technologies" />
              <TitleDesc description="Experienced tools" />
              <TechTools />
              <br></br>
              <br></br>
              <TechHeader title="Databases" />
              <TitleDesc description="Experienced tools" />
              <DatabaseTools />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TechStack;
