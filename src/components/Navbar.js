import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          LOGO
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/#FormBack">
                Create Post
              </a>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/post?found=true">
                Found Items
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/post?lost=true">
                Lost Items
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About Us
              </NavLink>
            </li>
          </ul>
          <form className="fit-c" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link login" to="/login">
                  Login
                </NavLink>
              </li>
              <li>
                <input
                  className="nav-link"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </li>
            </ul>
            {/* <button className="btn btn-outline-dark" type="submit">
              Search
            </button> */}
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
