import "./header.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";

const iconStyle = {
  fontSize: "3rem",
};

const iconGroupStyle = {
  marginTop: "3vh",
  display: "flex",
  justifyContent: "center",
};

const Header = () => {
  return (
    <>
      <section className="intro-project">
        <header className="project-header">Welcome to my Projects</header>
        <div className="project-header-desc">
          This compilation showcases the breadth of projects undertaken
          throughout my software developer career. From diverse initiatives
          aimed at bolstering the company's infrastructure to advancing its
          digitalization efforts, each project represents a significant
          contribution. These endeavors have made substantial impacts on both
          the organization and its clientele, reflecting my commitment to
          driving innovation and delivering value.
        </div>
        <div style={iconGroupStyle} className="icon-grp">
          <a
            href="https://github.com/Ars3nicc"
            className="aboutme-icon"
            data-label="GitHub"
          >
            <GitHubIcon className="github-icon" style={iconStyle} />
          </a>
          <a
            href="https://www.linkedin.com/in/franz-ronin-manrique-4b7612242/"
            className="aboutme-icon"
            data-label="LinkedIn"
          >
            <LinkedInIcon className="linkedin-icon" style={iconStyle} />
          </a>
          <a
            href="https://www.linkedin.com/in/franz-ronin-manrique-4b7612242/"
            className="aboutme-icon"
            data-label="Resume"
          >
            <DescriptionIcon className="resume-icon" style={iconStyle} />
          </a>
        </div>
      </section>
    </>
  );
};

export default Header;
