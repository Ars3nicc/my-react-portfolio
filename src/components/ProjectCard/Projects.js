import React, {useEffect} from "react";
import { Grid } from "@mui/material";
// import ProjectCard from "./ProjectCard";
import { techStackImages } from "../techstackImages";
import Certinize from "../../assets/img/projects/certinize.png";
import DGCAImage from "../../assets/img/projects/dgca-banner.png";
import HCPImage from "../../assets/img/projects/height-clearance.png";
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



const projects = [
  {
    image: Certinize,
    title: "Certinize: Blockchain-enabled Verification System",
    description:
      "An e-certificate issuance and verification system that integrates blockchain applications such as smart contracts, NFTs, Wallet Private Keys, etc. as its cutting-edge form of mid-to-high-end technological security and data integrity.",
    techStack: ["react", "nodejs", "postgresql"],
    date: "December 2022",
  },
  {
    image: DGCAImage,
    title: "DGCA 59 APAC Conference Website",
    description:
      "An online and strategic initiative aimed at optimising the digital infrastructure for the Directorate General of Civil Aviation (DGCA) Conference, exclusively serving nations within the Asia-Pacific Region (APAC).",
    techStack: ["laravel", "php", "mysql", "tailwind"],
    date: "November 2023",
  },
  {
    image: HCPImage,
    title: "CAAP Height Clearance",
    description:
      "A streamlined permit/certification application used as a requirement for all proposed PTTIs that are fifty (50) meters or higher above the elevation of the ground.",
    techStack: ["laravel", "php", "mysql", "tailwind"],
    date: "October 2023",
  },
  {
    title: "Aeronautical Information Publication",
    description:
      "An online and strategic initiative aimed at optimising the digital infrastructure for the Directorate General of Civil Aviation (DGCA) Conference, exclusively serving nations within the Asia-Pacific Region (APAC). This web-based platform streamlines the submission of electronic files and programs, fostering seamless preparations ahead of the conference.",
    techStack: ["laravel", "php", "mysql", "tailwind"],
    date: "March 2024",
  },
];

const Projects = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      <div className="mt-5 p-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4" data-aos="fade-up">
        {projects.map((project) => (
          <div className="flex flex-col rounded overflow-hidden shadow-lg p-6 bg-white h-full">
            <img src={project.image} alt={project.title} className="w-full h-32 object-cover" />
            <header className="py-7">
            <p className="mt-2 text-gray-500">{project.date}</p>
            <h2 className="font-bold text-2xl mb-2">{project.title}</h2>
            </header>

            <p className="text-gray-700 text-base flex-grow text-justify">
              {project.description}
            </p>
            <div className="mt-auto">
            <h1 className="mt-5 my-3 text-xl font-semibold">Tools Used:</h1>
              <div className="flex">
                {project.techStack.map((tech) => (
                  <img
                    src={techStackImages[tech]}
                    alt={tech}
                    className="w-7 h-auto inline-block mr-2"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Grid>
  );
};

export default withAOS(Projects);
