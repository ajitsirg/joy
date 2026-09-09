import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { games } from '../data/resort';

const featured = games.filter((game) =>
  ['Zip Line', 'ATV Ride', 'Rope Course', 'Boating', 'Archery'].includes(game.name)
);

export const AdventureSection: React.FC = () => {
  return (
    <section id="adventure" className="bg-white py-20 text-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-xl space-y-3">
            <span className="text-[#b88e40] text-[11px] font-semibold tracking-[0.28em] uppercase">
              Games on the grounds
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-medium text-[#0a291c] leading-[1.05]">
              Seventeen ways
              <span className="italic text-[#b88e40]"> to play.</span>
            </h2>
          </div>
          <p className="max-w-sm text-slate-600 text-sm leading-relaxed">
            Zip line across the river, ATVs, rope course, paintball, zorbing, camel carts
            and a toy train — priced as listed on the live resort.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 items-end">
          {featured.map((item, index) => (
            <article
              key={item.name}
              className={`relative rounded-[1.4rem] overflow-hidden group ${
                index % 2 === 0 ? 'h-80 sm:h-[26rem]' : 'h-64 sm:h-80'
              }`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a140c]/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-3">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#e6bf73]">{item.price}</p>
                <h3 className="font-serif text-xl sm:text-2xl text-white">{item.name}</h3>
              </div>
            </article>
          ))}

          <Link
            to="/adventure"
            className="h-64 sm:h-80 rounded-[1.4rem] bg-[#cfa353] text-[#1a140c] p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform"
          >
            <span className="font-serif text-5xl leading-none">17</span>
            <div>
              <p className="font-serif text-xl">Games listed</p>
              <span className="mt-3 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] uppercase">
                See prices
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
