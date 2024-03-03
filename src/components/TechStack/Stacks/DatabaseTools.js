import React from "react";
import Grid from "@mui/material/Grid";
import mysqlIcon from "../../../assets/img/tech-stack/database/mysql.svg";
import mongoIcon from "../../../assets/img/tech-stack/database/mongodb.png";
import postgresIcon from "../../../assets/img/tech-stack/database/postgresql.png";


export const DatabaseTools = () => {
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
        mysqlIcon,
        mongoIcon,
        postgresIcon,
    ];
  
    const techTitles = [
      "MySQL",
      "MongoDB",
      "PostgreSQL",
    ];
  
    return (
      <>
        <TechIcons icons={techIcons} titles={techTitles} />
      </>
    );
  };
  
  export default DatabaseTools;