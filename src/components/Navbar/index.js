import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <main className="navbar">
      <div className="navbar-container">
        <header className="title">Franz Manrique</header>
        <div className="links">
          <ul>
            <li>
              <a href="#">About Me</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
