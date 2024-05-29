import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

// import portfolioLogo from "../../assets/img/portfolio-logo.png";
const Navbar = () => {
  return (
    <nav className="navbar-container">
      <header className="p-5 ">
        {/* <img src={portfolioLogo} alt="Portfolio Logo" className="profile-logo" /> */}
        <header className="text-4xl tracking-wider font-bold">Franz Manrique</header>
      </header>
      <div className="links">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeClassName="active">
              Projects
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
