import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { specialties } from '../data/resort';

const facts = [
  { value: '17', label: 'Games on site' },
  { value: '5', label: 'Ways to stay' },
  { value: '1', label: 'Natural lake' },
];

export const AboutSection: React.FC = () => {
  return (
    <section className="bg-white pt-24 pb-24 text-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[#b88e40] text-[11px] font-semibold tracking-[0.28em] uppercase">
              Joy Adventure Resort, Jaipur
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-medium text-[#0a291c] leading-[1.05]">
              A lake, a farm,
              <br />
              and a play field
              <br />
              <span className="italic text-[#b88e40]">outside the city.</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md">
              Started as a holiday resort in the Pink City — air-conditioned cottages,
              Swiss tents, theme farmhouses, and a kitchen that cooks from its own farms.
              Built to entertain and to let people rest.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              {specialties.slice(0, 4).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.14em] uppercase text-[#0a291c] hover:text-[#b88e40] transition-colors"
            >
              Our story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="lg:col-span-7 relative h-[420px] sm:h-[520px]">
            <div className="absolute left-0 top-8 w-[58%] h-[78%] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white rotate-[-2deg]">
              <img
                src="/resort-media/rooms/lake-aerial.jpg"
                alt="Aerial of Joy Adventure Resort"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute right-0 top-0 w-[46%] h-[46%] rounded-[1.6rem] overflow-hidden shadow-xl border-4 border-white rotate-[3deg]">
              <img
                src="/resort-media/rooms/garden-facing.jpg"
                alt="Garden facing Swiss cottage"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute right-4 bottom-0 w-[48%] h-[42%] rounded-[1.6rem] overflow-hidden shadow-xl border-4 border-white rotate-[1deg]">
              <img
                src="/resort-media/resort/resort-01.jpg"
                alt="Joy Adventure Resort grounds"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 border-y border-[#cfa353]/25 divide-y sm:divide-y-0 sm:divide-x divide-[#cfa353]/25">
          {facts.map((fact) => (
            <div key={fact.label} className="py-7 sm:py-8 px-2 text-center">
              <p className="font-serif text-4xl sm:text-5xl text-[#0a291c]">{fact.value}</p>
              <p className="mt-1 text-[11px] tracking-[0.22em] uppercase text-[#b88e40]">{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
