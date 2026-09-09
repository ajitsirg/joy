import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { rooms, resort } from '../data/resort';

export const VillasSection: React.FC = () => {
  const featured = rooms[0];
  const others = rooms.slice(1, 3);

  return (
    <section id="stay" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="text-[#b88e40] text-[11px] font-semibold tracking-[0.28em] uppercase">
              Rooms from the resort
            </span>
            <h2 className="mt-2 text-4xl sm:text-6xl font-serif font-medium text-[#0a291c] leading-[1.05]">
              Cottages, tents,
              <span className="italic text-[#b88e40]"> farmhouses.</span>
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              Check-in {resort.checkIn} · Check-out {resort.checkOut}
            </p>
          </div>
          <Link
            to="/resort-keys"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.12em] uppercase text-[#0a291c] hover:text-[#b88e40]"
          >
            All stays
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
          <article className="lg:col-span-7 relative h-[380px] sm:h-[520px] rounded-[2rem] overflow-hidden group">
            <img
              src={featured.image}
              alt={featured.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a140c]/55 via-transparent to-transparent" />
            <div className="absolute bottom-7 left-7 right-7 text-white">
              <p className="text-[11px] tracking-[0.22em] uppercase text-[#e6bf73]">
                {featured.price} {featured.unit}
              </p>
              <h3 className="font-serif text-3xl sm:text-4xl mt-1">{featured.name}</h3>
            </div>
          </article>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-5">
            {others.map((room) => (
              <article key={room.name} className="relative h-[240px] lg:h-[250px] rounded-[1.7rem] overflow-hidden group">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a140c]/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 text-white">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#e6bf73]">
                    {room.price} {room.unit}
                  </p>
                  <h3 className="font-serif text-2xl">{room.name}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
