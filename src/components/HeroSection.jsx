import React from "react";
import { Link } from 'react-scroll'; 

function HeroSection() {
  return (
    <div
      className="d-flex align-items-center"
      id="hero"
      style={{ height: "100vh", backgroundColor: "#D6EFD8" }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Bagian Teks */}
          <div className="col-md-6">
            <h1 className="display-5 fw-bold" style={{ color: "#1A5319" }}>
              Pahala Mengalir Meski <br /> Nafas Sudah Berakhir.
            </h1>
            <p className="lead mt-3" style={{ color: "#000" }}>
              Bersama kita memberikan harapan baru untuk <br /> masa depan
              mereka.
            </p>
            <div className="mt-4">
              {/* Tombol Donasi Sekarang */}
              <Link to="donasi" smooth={true} duration={500}>
                <button 
                  className="btn btn-primary" 
                  style={{
                    backgroundColor: "#508D4E", 
                    borderColor: "#508D4E",
                    padding: "10px 30px",
                    fontSize: "1.1rem",
                    width: "auto",
                    borderWidth: "2px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#3C6A3F'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#508D4E'}
                >
                  Donasi Sekarang
                </button>
              </Link>
              {/* Tombol Baca Lebih Lanjut */}
              <Link to="about" smooth={true} duration={500}>
                <button
                  className="btn btn-outline-dark btn-lg ms-3"
                  style={{
                    borderColor: "#508D4E",
                    color: "#508D4E",
                    padding: "10px 30px",
                    fontSize: "1.1rem",
                    width: "auto",
                    borderWidth: "2px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.borderColor = '#3C6A3F';
                    e.target.style.color = '#FFFFFF'; // Ubah warna teks saat hover
                    e.target.style.backgroundColor = '#3C6A3F'; // Ubah latar belakang
                  }}
                  onMouseOut={(e) => {
                    e.target.style.borderColor = '#508D4E';
                    e.target.style.color = '#508D4E'; // Kembali ke warna awal
                    e.target.style.backgroundColor = 'transparent'; // Latar kembali transparan
                  }}
                >
                  Baca Lebih Lanjut
                </button>
              </Link>
            </div>
          </div>

          {/* Bagian Gambar */}
          <div className="col-md-6 text-center">
            <img
              src="/assets/hero-image.png"
              alt="Hero"
              className="img-fluid rounded"
              style={{ maxHeight: "80vh" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
