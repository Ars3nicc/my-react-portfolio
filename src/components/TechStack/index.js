import React from "react";
import "./index.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "react-bootstrap/Container";

const titleHeaderStyle = {
  fontSize: "4.3rem",
  fontWeight: "bold",
};
const techHeaderStyle = {
  fontSize: "1.5rem",
  fontWeight: "bold",
};
const descriptionStyle = {
  fontSize: "14px",
  color: "#969696",
};

const TitleDesc = ({ description }) => {
  return (
    <main>
      <header style={descriptionStyle}>{description}</header>
    </main>
  );
};

const TitleHeader = ({ title }) => {
  return (
    <main>
      <header style={titleHeaderStyle}>{title}</header>
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
        <TitleHeader title="Tech Stack" />

        <Grid container spacing={2}>
          <Grid item>
            <Box
              height={200}
              width={600}
              my={4}
              gap={4}
              p={2}
              borderRadius={2}
              sx={{ border: "2px solid #969696" }}
            >
              <TechHeader title="Languages & Frameworks" />
              <TitleDesc description="Experienced tools" />
            </Box>
          </Grid>
          <Grid item>
            <Box
              height={200}
              width={600}
              my={4}
              gap={4}
              p={2}
              borderRadius={2}
              sx={{ border: "2px solid #969696" }}
            >
              <TechHeader title="Technologies" />
              <TitleDesc description="Experienced tools" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TechStack;
