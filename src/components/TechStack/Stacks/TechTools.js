import React from "react";
import Grid from "@mui/material/Grid";
import bootstrapIcon from "../../../assets/img/tech-stack/technology/bootstrap.png";
import gitIcon from "../../../assets/img/tech-stack/technology/git.png";
import githubIcon from "../../../assets/img/tech-stack/technology/github.svg";
import jqueryIcon from "../../../assets/img/tech-stack/technology/jquery.png";
import muiIcon from "../../../assets/img/tech-stack/technology/mui.svg";
import nodeIcon from "../../../assets/img/tech-stack/technology/node.png";
import composerIcon from "../../../assets/img/tech-stack/technology/composer.png";
import xamppIcon from "../../../assets/img/tech-stack/technology/xampp.png";
import jsonIcon from "../../../assets/img/tech-stack/technology/json.png";

export const TechTools = () => {
    const iconStyle = {
      display: "flex",
      alignItems: "center",
      width: "35px",
      height: "auto",
      flexWrap: "wrap",
      position: "relative", // Add position relative to the icon container
    };
  
    const labelStyle = {
        position: "absolute",
        bottom: "120%", // Position the label above the icon
        left: "50%", // Center the label horizontally
        transform: "translateX(-50%)", // Adjust centering
        backgroundColor: "#387adf", // Semi-transparent background
        color: "#fff", // White text color
        padding: "4px 8px", // Padding around the label
        borderRadius: "4px", // Rounded corners
        fontSize: "12px", // Font size
        display: "none", // Initially hide the label
        width: "60px", // Adjust width as needed
        textAlign: "center",
        overflow: "hidden", // Hide overflow text
        textOverflow: "ellipsis", // Display ellipsis for overflow text
    };
  
    const handleMouseEnter = (event) => {
      const label = event.target.nextSibling; // Get the next sibling element (label)
      if (label) {
        label.style.display = "block";
      }
    };
  
    const handleMouseLeave = (event) => {
      const label = event.target.nextSibling; // Get the next sibling element (label)
      if (label) {
        label.style.display = "none";
      }
    };
  
    const TechIcons = ({ icons, titles }) => {
      return (
        <Grid container spacing={2}>
          {icons.map((icon, index) => (
            <Grid item key={index}>
              <div
                style={iconStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img src={icon} alt={`Icon ${index}`} style={iconStyle} />
                <span style={labelStyle}>{titles[index]}</span>
              </div>
            </Grid>
          ))}
        </Grid>
      );
    };
  
    const techIcons = [
        bootstrapIcon,
        gitIcon,
        githubIcon,
        jqueryIcon,
        muiIcon,
        nodeIcon,
        jsonIcon,
        composerIcon,
        xamppIcon,



    ];
  
    const techTitles = [
      "Bootstrap",
      "Git",
      "Github",
      "Jquery",
      "MUI",
      "NodeJS",
      "JSON",
      "Composer",
      "XAMPP",
    ];
  
    return (
      <>
        <TechIcons icons={techIcons} titles={techTitles} />
      </>
    );
  };
  
  export default TechTools;