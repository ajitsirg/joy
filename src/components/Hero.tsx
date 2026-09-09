import React, { useEffect, useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { heroPoster, heroVideos } from '../data/resort';

export const Hero: React.FC = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current === 0 ? 1 : 0));
    }, 14000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-[#1a140c]">
      {heroVideos.map((src, index) => (
        <video
          key={src}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            active === index ? 'opacity-100' : 'opacity-0'
          }`}
          src={src}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-[#1a140c]/55 via-transparent to-[#f6e7c4]/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a140c]/35 via-transparent to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#f7f4ed] to-transparent" />

      <p className="pointer-events-none select-none absolute -left-3 sm:left-0 top-16 sm:top-20 font-serif italic text-[#fff8e8]/15 text-[28vw] sm:text-[22vw] leading-none tracking-tight">
        Joy
      </p>

      <div className="relative z-10 min-h-[100svh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-36 sm:pb-40 pt-32">
        <div className="max-w-3xl animate-rise">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-[#cfa353]" />
            <span className="inline-flex items-center gap-1.5 text-[#f4e6c0] text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase">
              <MapPin className="w-3.5 h-3.5 text-[#cfa353]" />
              Sanskriti Village, Jaipur
            </span>
          </div>

          <h1 className="font-serif text-[#fff8ec] text-5xl sm:text-7xl md:text-8xl font-medium leading-[0.95] tracking-tight drop-shadow-[0_8px_28px_rgba(43,26,12,0.35)]">
            Their lake.
            <br />
            Their film.
          </h1>

          <p className="mt-6 max-w-lg text-[#f7eed8] text-sm sm:text-lg font-sans font-light leading-relaxed">
            Original resort footage from joyadventureresort.com — Swiss cottages,
            the zip line over water, and the grounds as they really look.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#stay"
              className="px-7 sm:px-8 py-3.5 rounded-full bg-[#cfa353] hover:bg-[#e6bf73] text-[#1a140c] font-semibold text-xs sm:text-sm tracking-[0.16em] uppercase transition-all shadow-lg"
            >
              Reserve a cottage
            </a>
            <a
              href="#film"
              className="px-7 sm:px-8 py-3.5 rounded-full border border-[#fff8ec]/40 bg-[#fff8ec]/15 hover:bg-[#fff8ec]/28 backdrop-blur-md text-[#fff8ec] font-semibold text-xs sm:text-sm tracking-[0.16em] uppercase transition-all inline-flex items-center gap-2 group"
            >
              Watch the resort
              <ArrowRight className="w-4 h-4 text-[#cfa353] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
