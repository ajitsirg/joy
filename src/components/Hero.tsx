import React, { useEffect, useState } from 'react';
import { ArrowRight, MapPin, Play } from 'lucide-react';
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
    <section id="home" className="relative overflow-hidden bg-white pt-24 sm:pt-28">
      <div className="absolute right-0 top-0 h-72 w-72 sm:h-[32rem] sm:w-[32rem] rounded-full bg-[#edf4ee] blur-3xl" />
      <div className="absolute left-0 bottom-0 h-64 w-64 rounded-full bg-[#fbf3df] blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-8 lg:gap-14 items-center">
          <div className="order-2 lg:order-1 animate-rise">
            <img
              src="/brand/joy-hospitality-logo.png"
              alt="Joy Hospitality and Real Estate Group"
              className="w-48 sm:w-56 h-auto mb-7 rounded-xl"
            />

            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-[#cfa353]" />
              <span className="inline-flex items-center gap-1.5 text-[#8d6d2f] text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase">
                <MapPin className="w-3.5 h-3.5 text-[#cfa353]" />
                Sanskriti Village, Jaipur
              </span>
            </div>

            <h1 className="font-serif text-[#0a291c] text-5xl sm:text-6xl xl:text-7xl font-medium leading-[0.96] tracking-tight">
              Where every stay
              <br />
              becomes a <span className="italic text-[#b88e40]">story.</span>
            </h1>

            <p className="mt-6 max-w-xl text-slate-600 text-sm sm:text-lg font-sans leading-relaxed">
              Lake-view cottages, open-air adventures, farm-to-table dining and
              celebrations designed around the joy of being together.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3.5">
              <a
                href="#stay"
                className="inline-flex justify-center items-center px-7 py-3.5 rounded-full bg-[#0a291c] hover:bg-[#164b34] text-white font-semibold text-xs sm:text-sm tracking-[0.14em] uppercase transition-all shadow-lg"
              >
                Explore stays
              </a>
              <a
                href="#film"
                className="inline-flex justify-center items-center gap-2 px-7 py-3.5 rounded-full border border-[#0a291c]/15 bg-white hover:border-[#cfa353] text-[#0a291c] font-semibold text-xs sm:text-sm tracking-[0.14em] uppercase transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-[#cfa353] text-[#cfa353]" />
                Watch our film
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 max-w-md border-t border-[#0a291c]/10 pt-5">
              {[
                ['17+', 'games & rides'],
                ['5', 'stay options'],
                ['1', 'private lake'],
              ].map(([value, label]) => (
                <div key={label} className="border-r last:border-r-0 border-[#0a291c]/10 px-3 first:pl-0">
                  <p className="font-serif text-3xl sm:text-4xl text-[#0a291c]">{value}</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 uppercase tracking-wide">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative min-h-[360px] sm:min-h-[500px] lg:min-h-[620px] rounded-[2rem] overflow-hidden shadow-[0_24px_70px_rgba(10,41,28,0.18)]">
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a291c]/65 via-transparent to-transparent" />
            <div className="absolute left-5 right-5 bottom-5 sm:left-8 sm:right-8 sm:bottom-8 rounded-2xl bg-white/90 backdrop-blur-md px-5 py-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#b88e40] font-semibold">Joy Adventure Resort</p>
                <p className="font-serif text-xl sm:text-2xl text-[#0a291c]">Tradition meets technology.</p>
              </div>
              <span className="hidden sm:flex shrink-0 w-10 h-10 rounded-full bg-[#0a291c] items-center justify-center">
                <ArrowRight className="w-4 h-4 text-[#cfa353]" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
