// src/components/Layout.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Layout.css'; // Create this file for custom styles

const Layout = ({ children }) => {
  return (
    <>
      {/* 🔷 Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top w-100">
        <div className="container-fluid px-4">
          {/* 🔹 Logo + Brand */}
          <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
            <img src="/logo.png" alt="Logo" width="32" height="32" className="me-2" />
            CareerAdvisor AI
          </Link>

          {/* 🔹 Mobile toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* 🔹 Nav links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/features">Features</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>

              {/* 🔹 Login & Signup Buttons */}
              <li className="nav-item">
  <Link to="/login" className="btn btn-outline-primary btn-rounded ms-3 me-2">
    Login
  </Link>
</li>
<li className="nav-item">
  <Link to="/register" className="btn btn-primary btn-rounded">
    Signup
  </Link>
</li>

            </ul>
          </div>
        </div>
      </nav>

      {/* 🔷 Page Content with space below fixed navbar */}
      // Layout.jsx
<main style={{ padding: 0, margin: 0 }}>
  {children}
</main>

    </>
  );
};

export default Layout;
