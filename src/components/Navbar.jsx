import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#1A5319" }}>
      <div className="container">
        <a className="navbar-brand" href="/">
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
              <a className="nav-link active" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">Tentang Kami</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/programs">Program</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/donation">Donasi</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
