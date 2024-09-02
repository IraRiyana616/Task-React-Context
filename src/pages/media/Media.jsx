import React from 'react';
import Footers from '/src/component/footer/Footer';
import Navbar from '/src/component/header/Navbar';
import media1 from '/src/assets/images/media1.jpg';
import media2 from '/src/assets/images/media2.jpg';
import media3 from '/src/assets/images/media3.jpg';

const Media = () => {
  const medias = [
    // Card 1
    {
      id: 1,
      title: 'Mengenal Jenis Tripod dan Kelebihannya',
      image: media1,
    },
    // Card 2
    {
      id: 2,
      title: 'Mengenal Jenis Kamera dan Kelebihannya',
      image: media2,
    },
    // Card 3
    {
      id: 3,
      title: '3 Rekomendasi Laptop yang Bisa Anda Beli',
      image: media3,
    },
  ];

  return (
    <div className="" id="media" style={{ marginTop: '120px' }}>
      <Navbar />
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-4">Media</h2>
        <p className="text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto">
          Informasi Seputar PaDi UMKM
        </p>
      </div>
      {/* All Media */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
        {medias.map((media) => (
          <div key={media.id} className="relative mb-4">
            <img
              src={media.image}
              alt={media.title}
              className="w-full h-auto rounded-lg hover:scale-95 transition-all duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white text-center px-4 py-8 shadow-lg rounded-md md:w-3/4 mx-auto">
              <h3 className="text-lg font-semibold text-neutralGrey">
                {media.title}
              </h3>
              <div className="flex items-center justify-center gap-8">
                <a
                  href="/"
                  className="font-bold text-brandPrimary hover:text-neutral-700">
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="11"
                    viewBox="0 0 17 11"
                    fill="none"
                    className="inline-block ml-2">
                    <path
                      d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
                      stroke="#4CAFAF"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footers />
    </div>
  );
};

export default Media;
