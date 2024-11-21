import React from 'react';


const Program = () => {
  const programs = [
    {
      title: 'Bimbingan Belajar (Bimbel)',
      description: 'Program ini membantu anak-anak yatim dan dhuafa memahami pelajaran di sekolah dengan bimbingan dari guru relawan.',
      image: 'https://via.placeholder.com/150', // Placeholder untuk gambar
    },
    {
      title: 'Santunan Bulanan',
      description: 'Santunan bulanan berupa uang tunai atau kebutuhan pokok untuk mendukung kebutuhan sehari-hari anak yatim dan dhuafa.',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Bantuan Hari Raya',
      description: 'Memberikan paket sembako, pakaian baru, atau santunan menjelang hari besar seperti Idul Fitri dan Idul Adha.',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Kegiatan Berbagi',
      description: 'Mengadakan kegiatan berbagi seperti buka puasa bersama, pemberian makanan gratis, dan bantuan bencana.',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <section className="container py-5" id='program'>
      <h2 className="text-center mb-4" style={{ color: '#508D4E' }}>Program Yayasan</h2>
      <div className="row">
        {programs.map((program, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div
              className="card"
              style={{ backgroundColor: '#D6EFD8', border: 'none', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
            >
              <img
                src={program.image}
                alt={program.title}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#1A5319' }}>{program.title}</h5>
                <p className="card-text">{program.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Program;
