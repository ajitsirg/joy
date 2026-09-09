import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const rituals = [
  { name: 'Spa', note: 'Warm stone & still rooms' },
  { name: 'Yoga', note: 'First light on the lawn' },
  { name: 'Meditation', note: 'Breath beside the lake' },
  { name: 'Ayurveda', note: 'Slow, seasonal care' },
];

export const WellnessSection: React.FC = () => {
  return (
    <section id="wellness" className="bg-[#f7f4ed] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative">
            <div className="rounded-[2rem] overflow-hidden h-[360px] sm:h-[500px] shadow-xl">
              <img
                src="/media/resort/resort-02.jpg"
                alt="Quiet grounds at Joy Adventure Resort"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 right-6 sm:right-10 bg-white rounded-2xl px-5 py-4 shadow-lg border border-[#cfa353]/20 max-w-[200px]">
              <p className="font-serif text-2xl text-[#0a291c] italic leading-tight">“Reset, then stay a little longer.”</p>
            </div>
          </div>

          <div className="space-y-6 pt-6 lg:pt-0">
            <span className="text-[#b88e40] text-[11px] font-semibold tracking-[0.28em] uppercase">
              Therapy & stillness
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-medium text-[#0a291c] leading-[1.05]">
              Heal in the
              <span className="italic text-[#b88e40]"> open air.</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md">
              Naturopathy, sunrise practice, and farm-to-table meals — a reset
              that does not happen behind closed spa doors alone.
            </p>

            <ul className="divide-y divide-[#cfa353]/20 border-y border-[#cfa353]/20">
              {rituals.map((ritual) => (
                <li key={ritual.name} className="py-3.5 flex items-baseline justify-between gap-4">
                  <span className="font-serif text-xl text-[#0a291c]">{ritual.name}</span>
                  <span className="text-xs text-slate-500 tracking-wide">{ritual.note}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/wellness"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0a291c] hover:bg-[#0d3423] text-[#f7f4ed] text-xs font-semibold tracking-[0.16em] uppercase transition-colors"
            >
              Enter wellness
              <ArrowRight className="w-4 h-4 text-[#cfa353]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
