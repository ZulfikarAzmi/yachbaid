import React from "react";

const DonasiSection = () => {
  return (
    <section id="donasi" className="container py-5">
      <h2 className="text-center" style={{ color: '#508D4E' }}>Donasi</h2>

      <div className="row">
        {/* QR Code */}
        <div className="col-md-6">
          <h3 className="text-center" style={{ color: '#508D4E' }}>Donasi via QR Code</h3>
          <div className="d-flex justify-content-center">
            {/* Placeholder for QR Code */}
            <img
              src="https://via.placeholder.com/200" // Ganti dengan URL QR Code yang valid
              alt="QR Code Donasi"
              className="img-fluid"
            />
          </div>
          <p className="text-center mt-3">Scan QR Code di atas untuk melakukan donasi melalui aplikasi E-Wallet.</p>
        </div>

        {/* Nomor Rekening */}
        <div className="col-md-6">
          <h3 className="text-center" style={{ color: '#508D4E' }}>Donasi via Transfer Bank</h3>
          <div className="text-center">
            <p>Silakan transfer ke nomor rekening berikut:</p>
            <p>
              <strong>Bank BCA</strong><br />
              Nomor Rekening: 123 456 7890<br />
              Atas Nama: Yayasan Achmad Baidlowi
            </p>
            <p>
              <strong>Bank Mandiri</strong><br />
              Nomor Rekening: 987 654 3210<br />
              Atas Nama: Yayasan Achmad Baidlowi
            </p>
          </div>
          <p className="text-center mt-3">Pastikan untuk mengonfirmasi transfer Anda melalui kontak yang tersedia.</p>
        </div>
      </div>
    </section>
  );
};

export default DonasiSection;
