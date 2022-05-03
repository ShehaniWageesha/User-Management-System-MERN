/** @format */

import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="navbar navbar-dark bg-dark navbar-expand-md">
    <Link to="/" className="navbar-brand">
      Mern Project
    </Link>

    <div className="collpase navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
          <Link to="/" className="nav-link">
            Users
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="/create" className="nav-link">
            Create Users
          </Link>
        </li>
        
      </ul>
    </div>
  </nav>
);

export default NavBar;
