import React from 'react';
import { Link } from 'react-router-dom';
import { galleryPhotos } from '../data/resort';

export const GalleryGrid: React.FC = () => {
  const photos = galleryPhotos.slice(0, 8);

  return (
    <section id="gallery" className="bg-white pb-24 pt-8 text-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 max-w-xl mx-auto mb-12">
          <span className="text-[#cfa353] text-xs font-semibold tracking-[0.25em] uppercase block">
            From the resort camera
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-medium text-[#0a291c]">
            Their own pictures
          </h2>
        </div>

        <div className="columns-2 md:columns-4 gap-3 sm:gap-4">
          {photos.map((item, idx) => (
            <div
              key={item.image}
              className={`mb-3 sm:mb-4 break-inside-avoid rounded-2xl overflow-hidden relative group ${
                idx % 3 === 0 ? 'h-64' : 'h-44'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a140c]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <span className="text-white text-[11px] font-medium">{item.title}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/gallery"
            className="inline-block text-sm font-semibold tracking-[0.14em] uppercase text-[#0a291c] hover:text-[#b88e40]"
          >
            Open the full gallery
          </Link>
        </div>
      </div>
    </section>
  );
};
