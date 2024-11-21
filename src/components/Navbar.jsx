import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#1A5319" }}>
      <div className="container">
        <a className="navbar-brand" href="/" style={{ cursor: "pointer" }}>
          Yayasan Achmad Baidlowi
        </a>
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="home"
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="about"
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                Tentang Kami
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="program"
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                Program
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="donasi"
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                Donasi
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
