import React from 'react';
import { heroVideos, madeFilm, media } from '../data/resort';

export const FilmStrip: React.FC = () => {
  return (
    <section id="film" className="bg-[#0a291c] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8">
          <div>
            <span className="text-[#cfa353] text-[11px] font-semibold tracking-[0.28em] uppercase">
              Made for Joy Club
            </span>
            <h2 className="mt-2 text-4xl sm:text-5xl font-serif font-medium text-white leading-[1.05]">
              A 50-second
              <span className="italic text-[#cfa353]"> resort film.</span>
            </h2>
          </div>
          <p className="max-w-sm text-white/70 text-sm">
            Built from their own photos and clips — cottages, games, the lake, then a booking card.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
          <div className="lg:col-span-7 aspect-video rounded-[1.6rem] overflow-hidden bg-black shadow-2xl">
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
              <video
                key={src}
                src={src}
                poster={index === 0 ? media.resort01 : media.games01}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-44 sm:h-48 lg:h-[11.4rem] object-cover rounded-[1.4rem]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
