import React from 'react';
import { heroVideos, madeFilm, media } from '../data/resort';

export const FilmStrip: React.FC = () => {
  return (
    <section id="film" className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-9">
          <div>
            <span className="text-[#b88e40] text-[11px] font-semibold tracking-[0.28em] uppercase">
              Made for Joy Club
            </span>
            <h2 className="mt-2 text-4xl sm:text-5xl font-serif font-medium text-[#0a291c] leading-[1.05]">
              See the joy
              <span className="italic text-[#b88e40]"> in motion.</span>
            </h2>
          </div>
          <p className="max-w-sm text-slate-600 text-sm leading-relaxed">
            A short look at the lake, cottages, games and celebrations waiting at the resort.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
          <div className="lg:col-span-7 aspect-video rounded-[1.6rem] overflow-hidden bg-[#0a291c] shadow-xl border border-[#0a291c]/10">
            <video
              src={madeFilm}
              poster={media.lakeAerial}
              controls
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {heroVideos.map((src, index) => (
              <div key={src} className="relative overflow-hidden rounded-[1.4rem]">
                <video
                  src={src}
                  poster={index === 0 ? media.resort01 : media.games01}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-44 sm:h-48 lg:h-[11.4rem] object-cover"
                />
                <span className="absolute left-4 bottom-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold tracking-[0.14em] uppercase text-[#0a291c]">
                  {index === 0 ? 'Lakeside living' : 'Adventure days'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
