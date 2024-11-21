import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          {/* Informasi Yayasan */}
          <div className="col-md-4">
            <h5>Yayasan Achmad Baidlowi</h5>
            <p>
              Kami adalah yayasan yang berfokus pada pemberian bantuan kepada anak yatim dan dhuafa
              demi masa depan yang lebih cerah.
            </p>
          </div>

          {/* Kontak */}
          <div className="col-md-4">
            <h5>Kontak</h5>
            <ul className="list-unstyled">
              <li>Alamat: Jl. Pucangan No 61 Surabaya</li>
              <li>Telepon: 021-1234567</li>
              <li>Email: infoyachbaid@gmail.com</li>
            </ul>
          </div>

          {/* Sosial Media */}
          <div className="col-md-4">
            <h5>Ikuti Kami</h5>
            <div>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
            </div>
            <div>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-4">
        <p>&copy; {new Date().getFullYear()} Yayasan Achmad Baidlowi.</p>
      </div>
    </footer>
  );
};

export default Footer;
