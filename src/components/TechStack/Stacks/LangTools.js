import React from "react";
import Grid from "@mui/material/Grid";
import htmlIcon from "../../../assets/img/tech-stack/languages/html.png";
import cssIcon from "../../../assets/img/tech-stack/languages/css.png";
import jsIcon from "../../../assets/img/tech-stack/languages/javascript.png";
import phpIcon from "../../../assets/img/tech-stack/languages/php.png";
import tsIcon from "../../../assets/img/tech-stack/languages/typescript.png";
import cIcon from "../../../assets/img/tech-stack/languages/c++.png";
import pythonIcon from "../../../assets/img/tech-stack/languages/python.png";
import tailwinIcon from "../../../assets/img/tech-stack/languages/tailwind.png";
import sassIcon from "../../../assets/img/tech-stack/languages/sass.png";

export const LangTools = () => {
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
    textAlign: "center",
    overflow: "hidden", // Hide overflow text
    textOverflow: "ellipsis", // Display ellipsis for overflow text
  };
  

  const handleMouseEnter = (event) => {
    const label = event.target.nextSibling; // Get the next sibling element (label)
    if (label) {
      label.style.display = "inline-block";
    }
  };

  const handleMouseLeave = (event) => {
    const label = event.target.nextSibling; // Get the next sibling element (label)
    if (label) {
      label.style.display = "none";
    }
  };

  const LanguageIcons = ({ icons, titles }) => {
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

  const langicons = [
    htmlIcon,
    cssIcon,
    jsIcon,
    phpIcon,
    tsIcon,
    cIcon,
    pythonIcon,
    tailwinIcon,
    sassIcon,
  ];

  const langTitles = [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "TypeScript",
    "C++",
    "Python",
    "Tailwind",
    "Sass",
  ];

  return (
    <>
      <LanguageIcons icons={langicons} titles={langTitles} />
    </>
  );
};

export default LangTools;
