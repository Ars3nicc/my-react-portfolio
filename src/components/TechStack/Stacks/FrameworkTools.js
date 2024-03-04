import React from "react";
import Grid from "@mui/material/Grid";
import laravelIcon from "../../../assets/img/tech-stack/frameworks/laravel.png";
import reactIcon from "../../../assets/img/tech-stack/frameworks/react.png";
import djangoIcon from "../../../assets/img/tech-stack/frameworks/django.png";
import nextIcon from "../../../assets/img/tech-stack/frameworks/nextjs.png";
import vueIcon from "../../../assets/img/tech-stack/frameworks/vuejs.png";
export const FrameworkTools = () => {
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
      textAlign: "center"
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
  
    const FrameworkIcons = ({ icons, titles }) => {
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
  
    const frameworkicons = [
      laravelIcon,
      reactIcon,
      djangoIcon,
      nextIcon,
      vueIcon,
    ];
  
    const frameworkTitles = [
      "Laravel",
      "React",
      "Django",
      "NextJS",
      "VueJS",
    ];
  
    return (
      <>
        <FrameworkIcons icons={frameworkicons} titles={frameworkTitles} />
      </>
    );
  };
  
  export default FrameworkTools;