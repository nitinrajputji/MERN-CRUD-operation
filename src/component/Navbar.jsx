import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav  mx-auto ">
              <li className="nav-item">
                <NavLink
                  className="nav-link  btn-info btn-outline-sccess   mx-5"
                  to="/"
                >
                  AddData
                </NavLink>
              </li>
              <li className="nav-item btn-success btn-outline-primary">
                <NavLink className="nav-link" to="/allData">
                  AllData
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
