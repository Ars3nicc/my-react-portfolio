import React, {useEffect} from "react";
import "../TechStack/index.css";
import { LangTools } from "./Stacks/LangTools.js";
import { TechTools } from "./Stacks/TechTools.js";
import { FrameworkTools } from "./Stacks/FrameworkTools.js";
import { DatabaseTools } from "./Stacks/DatabaseTools.js";
import Grid from "@mui/material/Grid";
import Container from "react-bootstrap/Container";
import AOS from "aos";
import "aos/dist/aos.css";

const withAOS = (Component) => (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return <Component {...props} />;
};


const TitleHeader = ({ title, titleSub }) => {
  return (
    <main className="text-center md:text-justify">
      <header className="text-5xl">{title}</header>
      <div className="py-5 text-lg md:w-96">{titleSub}</div>
    </main>
  );
};

const TechHeader = ({ title }) => {
  return (
    <main>
      <header className="text-2xl font-bold">{title}</header>
    </main>
  );
};
const TitleDesc = ({ description }) => {
  return (
    <main>
      <header className="italic text-gray-500 ">{description}</header>
    </main>
  );
};

const TechStack = () => {
  return (
    <div className="py-16 animate-fade-up animate-delay-0" data-aos="fade-up">
      <Container fluid>
        <div className="md:flex md:justify-center gap-24 items-center">
          <TitleHeader
            title="My Toolbox"
            titleSub="I am currently advancing my career in software engineering. I hold a degree in BS Information Technology and am actively engaged in various fields within the IT industry."
          />

          <main className="">
            <Grid
              container
              direction="row"
              className="p-9"
              style={{
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "12px",
              }}
            >
              <Grid item xs={12} sm={6} className="md:mr-16">
                <div className="py-5">
                  <TechHeader title="Languages" />
                  <TitleDesc description="Experienced tools" />
                </div>
                <LangTools />
                <div className="py-5">
                  <TechHeader title="Frameworks" />
                  <TitleDesc description="Experienced tools" />
                </div>
                <FrameworkTools />
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className="py-5">
                  <TechHeader title="Technologies" />
                  <TitleDesc description="Experienced tools" />
                </div>
                <div className="w-96">
                  <TechTools />
                </div>
                <div className="py-5">
                  <TechHeader title="Databases" />
                  <TitleDesc description="Experienced tools" />
                </div>
                <DatabaseTools />
              </Grid>
            </Grid>
          </main>
        </div>
      </Container>
    </div>
  );
};

export default withAOS(TechStack);
