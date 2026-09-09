import React from 'react';
import { Palmtree, Leaf, Heart, Sparkles, Building, Waves, Trees, Sun } from 'lucide-react';
import { rooms, resort } from '../data/resort';

export const ResortKeysPage: React.FC = () => {
  const resortKeysList = [
    {
      title: 'Resort',
      desc: 'Premium stay with world-class hospitality & comfort',
      icon: <Building className="w-4 h-4 text-[#cfa353]" />,
    },
    {
      title: 'Natural Therapy Center',
      desc: 'Ayurvedic wellness therapies for mind, body & soul',
      icon: <Heart className="w-4 h-4 text-[#cfa353]" />,
    },
    {
      title: 'Adventure Park',
      desc: 'Thrilling activities for adventure enthusiasts',
      icon: <Sparkles className="w-4 h-4 text-[#cfa353]" />,
    },
    {
      title: 'Century Park',
      desc: 'Green spaces for relaxation and family time',
      icon: <Trees className="w-4 h-4 text-[#cfa353]" />,
    },
    {
      title: 'Natural & Organic Herbal Farming',
      desc: 'Pure, organic & sustainable farming practices',
      icon: <Leaf className="w-4 h-4 text-[#cfa353]" />,
    },
    {
      title: 'Farm House',
      desc: 'Experience rural living with modern comfort',
      icon: <Building className="w-4 h-4 text-[#cfa353]" />,
    },
    {
      title: 'Luxury Villas',
      desc: 'Exclusive villas with luxury & privacy',
      icon: <Palmtree className="w-4 h-4 text-[#cfa353]" />,
    },
    {
      title: 'Marriage Garden',
      desc: 'Perfect venue for dream weddings & celebrations',
      icon: <Sparkles className="w-4 h-4 text-[#cfa353]" />,
    },
    {
      title: 'Private Lake',
      desc: 'Serene lake for peaceful moments & boating',
      icon: <Waves className="w-4 h-4 text-[#cfa353]" />,
    },
    {
      title: '100% Natural Green Environment',
      desc: 'Clean air, lush greenery & a pollution-free environment',
      icon: <Sun className="w-4 h-4 text-[#cfa353]" />,
    },
  ];

  return (
    <div className="pt-24 pb-16 bg-[#f7f4ed] min-h-screen text-slate-900 selection:bg-[#cfa353]">
      <div className="max-w-[1540px] mx-auto px-2 sm:px-4 space-y-6">
        
        {/* Main Outer Card Wrapper */}
        <div className="bg-white rounded-[2.5rem] p-4 sm:p-8 lg:p-10 shadow-2xl border border-amber-900/10 space-y-8">
          
          {/* Top Brand Header Banner */}
          <div className="bg-[#0a291c] text-white rounded-2xl p-4 sm:p-5 border border-[#cfa353]/30 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-[#cfa353] bg-[#0d3423] flex items-center justify-center">
                <Palmtree className="w-5 h-5 text-[#cfa353]" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-serif font-bold text-lg sm:text-xl leading-none">
                  JOY HOSPITALITY & REAL ESTATE GROUP
                </span>
                <span className="text-[9px] text-[#cfa353] tracking-[0.25em] font-semibold uppercase mt-1">
                  NATURE. COMFORT. TRUST. TOGETHER.
                </span>
              </div>
            </div>
            <div className="text-xs text-gray-300 font-serif italic">
              "Escape. Relax. Rejuvenate."
            </div>
          </div>

          {/* Main 3-Column Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* 1. Left Column: Resort Keys Directory */}
            <div className="lg:col-span-5 bg-[#fbf9f4] p-6 sm:p-7 rounded-3xl border border-amber-900/10 shadow-md space-y-5 flex flex-col justify-between">
              <div>
                <div className="space-y-1 pb-4 border-b border-gray-200">
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0a291c]">
                    Resort <span className="text-[#cfa353] font-serif italic">keys</span> 🌿
                  </h2>
                  <p className="text-xs text-gray-600 font-serif italic">
                    Escape. <span className="text-[#cfa353]">Relax.</span> Rejuvenate.
                  </p>
                </div>

                <div className="divide-y divide-gray-200/70 pt-2">
                  {resortKeysList.map((item, idx) => (
                    <div key={idx} className="py-2.5 flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-[#0d3423] text-[#cfa353] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        {item.icon}
                      </div>
                      <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <span className="text-xs font-serif font-bold text-slate-900">{item.title}</span>
                        <span className="text-[11px] text-gray-500 font-light sm:text-right">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Middle Column: Nature & Luxury Sunset Gazebo Feature Card */}
            <div className="lg:col-span-4 relative rounded-3xl overflow-hidden shadow-xl border border-amber-900/10 min-h-[500px] flex flex-col justify-between p-6 group">
              <img
                src="/media/resort/resort-01.jpg"
                alt="A Perfect Blend of Nature & Luxury"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.75]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/40" />

              {/* Top Text Header */}
              <div className="relative z-10 text-center space-y-1">
                <span className="text-xs font-serif italic text-amber-200 block">A Perfect Blend of</span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-wider">
                  NATURE & LUXURY
                </h3>
                <div className="w-12 h-0.5 bg-[#cfa353] mx-auto mt-2" />
              </div>

              {/* Bottom Quote Badge */}
              <div className="relative z-10 bg-[#0a291c]/90 backdrop-blur-md p-4 rounded-2xl border border-[#cfa353]/40 text-center shadow-xl">
                <p className="text-xs font-serif italic text-[#cfa353]">
                  "Where every moment becomes a memory"
                </p>
              </div>
            </div>

            {/* 3. Right Column: Photo Stack (3 Cards) */}
            <div className="lg:col-span-3 space-y-4 flex flex-col justify-between">
              
              <div className="relative h-44 rounded-2xl overflow-hidden shadow-md group">
                <img
                  src="/media/rooms/lake-aerial.jpg"
                  alt="Lush Green Landscapes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-serif font-bold text-white">🌿 Lush Green Landscapes</span>
                </div>
              </div>

              <div className="relative h-44 rounded-2xl overflow-hidden shadow-md group">
                <img
                  src="/media/gallery/g02.jpg"
                  alt="Serene Lakes & Sunsets"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-serif font-bold text-white">🌅 Serene Lakes & Sunsets</span>
                </div>
              </div>

              <div className="relative h-44 rounded-2xl overflow-hidden shadow-md group">
                <img
                  src="/media/rooms/garden-facing.jpg"
                  alt="Luxury Redefined"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-serif font-bold text-white">✨ Luxury Redefined</span>
                </div>
              </div>

            </div>

          </div>

          <div className="space-y-4">
            <div>
              <span className="text-[#cfa353] text-xs font-semibold tracking-widest uppercase">Stay list from the resort</span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0a291c] mt-1">
                Swiss cottages, tents and farmhouses
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Check-in {resort.checkIn} · Check-out {resort.checkOut} · {resort.kidsPolicy}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {rooms.map((room) => (
                <article key={room.name} className="bg-[#fbf9f4] rounded-2xl overflow-hidden border border-amber-900/10">
                  <img src={room.image} alt={room.name} className="w-full h-40 object-cover" />
                  <div className="p-4 space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-serif font-bold text-slate-900">{room.name}</h4>
                      <span className="text-[#b88e40] font-serif font-bold shrink-0">{room.price}</span>
                    </div>
                    <p className="text-[11px] text-gray-500">{room.note} · {room.unit}</p>
                    <ul className="text-[11px] text-gray-600 space-y-1">
                      {room.includes.slice(0, 3).map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Bottom Dark Green Section: WORLD CLASS AMENITIES */}
          <div className="bg-[#0d3423] text-white rounded-3xl p-6 sm:p-8 border border-[#cfa353]/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 flex-1">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f6ebd6] text-[#cfa353] flex items-center justify-center shrink-0 shadow-md">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-serif font-bold text-white">WORLD CLASS AMENITIES</h4>
                  <p className="text-[10px] text-gray-300 font-light">Designed for comfort & exclusivity</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f6ebd6] text-[#cfa353] flex items-center justify-center shrink-0 shadow-md">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-serif font-bold text-white">SUSTAINABLE LIVING</h4>
                  <p className="text-[10px] text-gray-300 font-light">Eco-friendly practices for a better tomorrow</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f6ebd6] text-[#cfa353] flex items-center justify-center shrink-0 shadow-md">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-serif font-bold text-white">MEMORABLE EXPERIENCE</h4>
                  <p className="text-[10px] text-gray-300 font-light">Creating moments that last a lifetime</p>
                </div>
              </div>
            </div>

            {/* Join Joy Callout */}
            <div className="bg-[#0a291c] p-4 rounded-2xl border border-[#cfa353]/40 text-center shrink-0 space-y-1">
              <h4 className="text-lg font-serif font-bold text-[#cfa353]">JOIN JOY</h4>
              <span className="text-[9px] text-white font-bold tracking-widest uppercase block">
                LIVE BETTER, EARN TOGETHER
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
