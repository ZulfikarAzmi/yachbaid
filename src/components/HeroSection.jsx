import React from "react";

function HeroSection() {
  return (
    <div
      className="d-flex align-items-center"
      style={{ height: "100vh", backgroundColor: "#D6EFD8" }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Bagian Teks */}
          <div className="col-md-6">
            <h1 className="display-5 fw-bold" style={{ color: "#1A5319" }}>
              Pahala Mengalir Meski <br /> Nafas Sudah Berakhir.
            </h1>
            <p className="lead mt-3" style={{ color: "#508D4E" }}>
              Bersama kita memberikan harapan baru untuk <br />  masa depan mereka.
            </p>
            <div className="mt-4">
              <button
                className="btn btn-primary btn-lg me-3"
                style={{ backgroundColor: "#1A5319", borderColor: "#1A5319" }}
              >
                Donasi Sekarang
              </button>
              <button
                className="btn btn-outline-dark btn-lg"
                style={{ borderColor: "#508D4E" }}
              >
                Baca Lebih Lanjut
              </button>
            </div>
          </div>

          {/* Bagian Gambar */}
          <div className="col-md-6 text-center">
            <img
              src="https://via.placeholder.com/500x500" // Ganti URL gambar
              alt="Anak-anak"
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
