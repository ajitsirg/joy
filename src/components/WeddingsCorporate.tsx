import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WeddingsCorporate: React.FC = () => {
  return (
    <section id="weddings" className="bg-[#f7f4ed] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
          <Link
            to="/weddings"
            className="lg:col-span-7 relative h-[420px] sm:h-[500px] rounded-[2rem] overflow-hidden group"
          >
            <img
              src="/resort-media/packages/wedding.jpg"
              alt="Weddings at Joy Club"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a140c]/55 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="text-[11px] tracking-[0.24em] uppercase text-[#e6bf73]">Weddings</p>
              <h3 className="font-serif text-4xl sm:text-5xl mt-2 leading-tight">
                Say yes under
                <span className="italic"> the lanterns.</span>
              </h3>
              <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase">
                Plan a celebration
                <ArrowRight className="w-4 h-4 text-[#cfa353]" />
              </span>
            </div>
          </Link>

          <Link
            to="/experience"
            className="lg:col-span-5 relative h-[420px] sm:h-[500px] rounded-[2rem] overflow-hidden group bg-[#0a291c]"
          >
            <img
              src="/resort-media/packages/corporate.jpg"
              alt="Corporate retreats"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a291c]/70 via-[#0a291c]/10 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="text-[11px] tracking-[0.24em] uppercase text-[#e6bf73]">Corporate</p>
              <h3 className="font-serif text-3xl sm:text-4xl mt-2 leading-tight">
                Think better
                <span className="italic"> outdoors.</span>
              </h3>
              <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase">
                Host a retreat
                <ArrowRight className="w-4 h-4 text-[#cfa353]" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
