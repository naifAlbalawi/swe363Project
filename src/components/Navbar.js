import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logout from "./logOutAuth";
import { auth } from "../components/fb";
function Navbar() {
  let [user, setUser] = useState(null);
  auth.onAuthStateChanged((user) => {
    setUser(user);
  });
  if (!user)
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              LOGO
            </Link>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li id="about" className="nav-item">
                  <Link className={"nav-link"} to="/about">
                    About Us
                  </Link>
                </li>
              </ul>
              <form className="fit-c" role="search">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className={"nav-link login"} id="LogIn" to={"/login"}>
                      Login
                    </Link>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </nav>

        <Outlet />
      </>
    );
  else
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              LOGO
            </Link>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li id="Creat-post" className="nav-item">
                  <Link className={"nav-link"} to="#FormBack">
                    Create Post
                  </Link>
                </li>
                <li id="found" className="nav-item">
                  <Link className={"nav-link"} to="/found">
                    Found Items
                  </Link>
                </li>
                <li id="lost" className="nav-item">
                  <Link className={"nav-link"} to="/lost">
                    Lost Items
                  </Link>
                </li>
                <li id="about" className="nav-item">
                  <Link className={"nav-link"} to="/about">
                    About Us
                  </Link>
                </li>
              </ul>
              <form className="fit-c" role="search">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      onClick={logout}
                      id="LogOut"
                      className={"nav-link login"}
                      to="/login"
                    >
                      Logout
                    </Link>
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
              </form>
            </div>
          </div>
        </nav>
        <Outlet />
      </>
    );
}

export default Navbar;
