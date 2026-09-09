import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const journeys = [
  {
    num: '01',
    title: 'Stay',
    line: 'Villas that open onto water and trees.',
    href: '#stay',
    image: '/media/rooms/lake-cottage.jpg',
  },
  {
    num: '02',
    title: 'Heal',
    line: 'Sunrise yoga, spa, and slow Ayurveda.',
    href: '#wellness',
    image: '/media/resort/table.jpg',
  },
  {
    num: '03',
    title: 'Play',
    line: 'Ziplines, ATVs, and lakeside camps.',
    href: '#adventure',
    image: '/media/games/zipline.jpg',
  },
  {
    num: '04',
    title: 'Celebrate',
    line: 'Weddings and retreats under the hills.',
    href: '#weddings',
    image: '/media/packages/wedding.jpg',
  },
];

export const FloatingCards: React.FC = () => {
  return (
    <section className="relative z-30 -mt-24 sm:-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {journeys.map((item) => (
            <a
              key={item.num}
              href={item.href}
              className="group relative overflow-hidden rounded-[1.6rem] bg-white shadow-[0_18px_40px_rgba(43,26,12,0.1)] border border-[#cfa353]/15 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-36 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 font-serif text-2xl text-white/90">{item.num}</span>
              </div>
              <div className="p-5 flex items-end justify-between gap-3">
                <div>
                  <h3 className="font-serif text-2xl text-[#0a291c] leading-none">{item.title}</h3>
                  <p className="mt-2 text-[13px] text-slate-500 font-sans leading-relaxed">{item.line}</p>
                </div>
                <span className="shrink-0 w-9 h-9 rounded-full bg-[#f6eedc] text-[#0a291c] group-hover:bg-[#cfa353] flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
