import React from 'react';
import { Link } from 'react-router-dom';
import { packages, resort } from '../data/resort';

export const PackagesPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-[#f7f4ed] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-2xl space-y-3">
          <span className="text-[#b88e40] text-[11px] font-semibold tracking-[0.28em] uppercase">
            Joy Adventure Resort
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-medium text-[#0a291c] leading-[1.05]">
            Packages from
            <span className="italic text-[#b88e40]"> the resort.</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base">
            Silver to Diamond day outings, night tents, anniversaries and corporate slots —
            listed as they appear on{' '}
            <a href={resort.website} className="text-[#b88e40] underline" target="_blank" rel="noreferrer">
              joyadventureresort.com
            </a>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {packages.map((item) => (
            <article key={item.name} className="bg-white rounded-[1.8rem] overflow-hidden border border-[#cfa353]/15 shadow-md">
              <div className="relative h-52">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-end justify-between gap-4">
                  <h2 className="font-serif text-3xl text-[#0a291c]">{item.name}</h2>
                  <p className="text-right shrink-0">
                    <span className="font-serif text-2xl text-[#b88e40] block">{item.price}</span>
                    <span className="text-[11px] text-slate-500">{item.unit}</span>
                  </p>
                </div>
                <ul className="space-y-2">
                  {item.includes.map((line) => (
                    <li key={line} className="text-sm text-slate-600">{line}</li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-block text-xs font-semibold tracking-[0.14em] uppercase text-[#0a291c] hover:text-[#b88e40]"
                >
                  Ask to book
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
