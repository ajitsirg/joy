import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { packages } from '../data/resort';

export const PackagesSection: React.FC = () => {
  return (
    <section id="packages" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="text-[#b88e40] text-[11px] font-semibold tracking-[0.28em] uppercase">
              From the live resort
            </span>
            <h2 className="mt-2 text-4xl sm:text-6xl font-serif font-medium text-[#0a291c] leading-[1.05]">
              Day out.
              <span className="italic text-[#b88e40]"> Stay over.</span>
            </h2>
          </div>
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.12em] uppercase text-[#0a291c] hover:text-[#b88e40]"
          >
            All packages
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {packages.map((item) => (
            <article key={item.name} className="bg-white rounded-[1.6rem] overflow-hidden border border-[#cfa353]/15 shadow-[0_14px_36px_rgba(43,26,12,0.08)]">
              <div className="relative h-44">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="font-serif text-[#0a291c] text-lg">{item.price}</span>
                  <span className="text-[10px] text-slate-500 ml-1">{item.unit}</span>
                </div>
              </div>
              <div className="p-5 space-y-3">
                <h3 className="font-serif text-2xl text-[#0a291c]">{item.name}</h3>
                <ul className="space-y-1.5">
                  {item.includes.slice(0, 4).map((line) => (
                    <li key={line} className="text-[13px] text-slate-600 leading-relaxed">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
