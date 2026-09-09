import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export const WeddingsPage: React.FC = () => {
  const venues = [
    {
      title: 'Royal Marriage Garden',
      tag: 'OUTDOOR MANDAP',
      capacity: 'Up to 1500 Guests',
      description: 'Sprawling green lawn surrounded by palm trees, fairy lights, and fairytale Aravalli backdrop for grand weddings.',
      image: '/resort-media/packages/wedding.jpg',
    },
    {
      title: 'Lakeside Pool Deck & Lawn',
      tag: 'COCKTAIL & MEHENDI',
      capacity: 'Up to 500 Guests',
      description: 'Picturesque poolside venue ideal for haldi, mehendi, sunset cocktail parties, and musical sangeet nights.',
      image: '/resort-media/rooms/lake-cottage.jpg',
    },
    {
      title: 'Grand Banquet & Conference Hall',
      tag: 'INDOOR RECEPTION',
      capacity: 'Up to 400 Guests',
      description: 'Climate-controlled luxury banquet hall with wooden paneling, crystal lighting, and state-of-the-art AV systems.',
      image: '/resort-media/packages/corporate.jpg',
    },
  ];

  const features = [
    'Exclusive Villa Accommodations for Guests',
    'Customized Satvic & Multi-Cuisine Gourmet Catering',
    'Fairytale Open-Air Mandap & Stage Lighting',
    'Bridal Suite & Personalized Hospitality Managers',
    'Ample Valet Parking & Helipad Options',
    'Pre-Wedding Shoot Locations Across 18+ Resort Landmarks',
  ];

  return (
    <div className="pt-24 pb-20 bg-[#f7f4ed] min-h-screen text-slate-800">
      
      {/* Hero Banner */}
      <section className="relative h-80 sm:h-96 flex items-center justify-center text-center text-white overflow-hidden">
        <img
          src="/resort-media/events/holi-1.jpg"
          alt="Destination Weddings Banner"
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a291c] via-black/30 to-transparent" />
        
        <div className="relative z-10 max-w-4xl px-4 space-y-3">
          <span className="text-[#cfa353] text-xs font-semibold tracking-[0.25em] uppercase font-sans">
            DESTINATION WEDDINGS & CELEBRATIONS
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-medium text-white">
            Celebrate Love In Nature.
          </h1>
          <p className="text-gray-200 text-sm sm:text-base max-w-xl mx-auto font-light">
            Magical venues, fairy light gardens, and royal hospitality for your dream wedding moments in Rajasthan.
          </p>
        </div>
      </section>

      {/* Feature Highlights Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-amber-900/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#f6ebd6] text-[#cfa353] flex items-center justify-center shrink-0">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Venues Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-[#cfa353] text-xs font-semibold tracking-widest uppercase">OUR CELEBRATION VENUES</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-medium text-[#0a291c]">Magical Wedding Spaces</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {venues.map((venue, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-amber-900/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={venue.image}
                    alt={venue.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#0d3423] text-[#cfa353] px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {venue.tag}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-serif font-bold text-slate-900">{venue.title}</h3>
                  </div>
                  <span className="text-xs text-[#cfa353] font-bold block">{venue.capacity}</span>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light">{venue.description}</p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="#book-wedding"
                  className="w-full py-3 rounded-xl bg-[#0d3423] hover:bg-[#071a12] text-white font-bold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <span>INQUIRE FOR WEDDING</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#cfa353]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate Retreats Banner */}
      <section className="bg-[#0a291c] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[#cfa353] text-xs font-semibold tracking-widest uppercase">CORPORATE RETREATS & EVENTS</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white">Inspire. Connect. Achieve.</h2>
            <p className="text-gray-300 text-sm leading-relaxed font-light max-w-xl">
              Host your next executive board meeting, annual conference, or team-building retreat at Joy Club Resort. Combines high-speed tech, luxury suites, ziplining, and gourmet dining.
            </p>
          </div>
          <div className="lg:col-span-5 text-left lg:text-right">
            <a
              href="#book-corporate"
              className="inline-block px-8 py-3.5 rounded-full bg-[#cfa353] hover:bg-[#b88e40] text-slate-950 font-bold text-xs tracking-wider uppercase transition-all shadow-lg hover:scale-105"
            >
              EXPLORE CORPORATE PACKAGES
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
