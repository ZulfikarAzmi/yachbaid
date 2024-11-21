import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="py-5"
      style={{ backgroundColor: '#D6EFD8', width: '100%', margin: '0 auto' }}
    >
      <div className="container">
        <h2 className="text-center mb-4" style={{ color: '#1A5319' }}>Tentang Kami</h2>

        {/* Sejarah Yayasan */}
        <div className="mb-5">
          <h3 className="mt-4" style={{ color: '#508D4E' }}>Sejarah Yayasan</h3>
          <p>
            Yayasan kami didirikan pada tahun 20xx dengan tujuan utama memberikan dukungan 
            kepada anak yatim dan dhuafa agar mereka dapat meraih masa depan yang lebih cerah. 
            Dengan komitmen tinggi, kami terus berkembang menjadi mitra terpercaya masyarakat.
          </p>
        </div>

        {/* Visi dan Misi */}
        <div className="mb-5">
          <h3 className="mt-4" style={{ color: '#508D4E' }}>Visi dan Misi</h3>
          <p>
            <strong>Visi:</strong> Menjadi yayasan terpercaya dalam mendukung kehidupan 
            anak yatim dan dhuafa.
          </p>
          <p>
            <strong>Misi:</strong> Memberikan pendidikan, pelatihan, dan bantuan sosial 
            yang berkelanjutan demi kemandirian mereka.
          </p>
        </div>

        {/* Lokasi dan Kontak */}
        <div>
          <h3 className="mt-4" style={{ color: '#1A5319' }}>Lokasi dan Kontak</h3>
          <p className="mt-3">
            <strong>Alamat:</strong> Jl. Pucangan No.61, Surabaya, Jawa Timur<br />
            <strong>Telepon:</strong> +62 812-3456-7890<br />
            <strong>Email:</strong> yachbaid@gmail.com
          </p>

          {/* Google Maps Embed */}
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.6336144150328!2d112.74981817318526!3d-7.282461871567222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbc8b85a04e3%3A0xa2deeafccb891805!2sYayasan%20Achmad%20Baidlowi!5e0!3m2!1sen!2sid!4v1732174714175!5m2!1sen!2sid"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Yayasan"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
