import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

import portfolioLogo from "../../assets/img/portfolio-logo.png";
const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="logo-grp">
        <img src={portfolioLogo} alt="Portfolio Logo" className="profile-logo" />
        <header className="title">Franz Manrique</header>
      </div>
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
