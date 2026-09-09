import React from 'react';
import { galleryPhotos, media, resortFilm } from '../data/resort';


export const GalleryPage: React.FC = () => {
  const masterPlanKey = [
    { id: 1, name: 'Entrance Gate', desc: 'Grand entry archway with security' },
    { id: 2, name: 'Park', desc: 'Lush green landscaping & walking paths' },
    { id: 3, name: 'Theme Based Farmhouse', desc: 'Private luxury themed villas' },
    { id: 4, name: 'Yoga & Meditation', desc: 'Serene wellness deck' },
    { id: 5, name: 'Park', desc: 'Central botanical gardens' },
    { id: 6, name: 'Cattle Farming', desc: 'Organic dairy & natural farm' },
    { id: 7, name: 'Birds Sanctuary Park & Lake', desc: 'Natural wetland avian haven' },
    { id: 8, name: 'Marriage Garden', desc: 'Sprawling wedding lawn venue' },
    { id: 9, name: 'Club House', desc: 'Exclusive member lounge & games' },
    { id: 10, name: 'Joy City Ville', desc: 'Residential villa enclave' },
    { id: 11, name: 'Joy Adventure Park', desc: '20+ Thrilling adventure activities' },
    { id: 12, name: 'Resort Lake', desc: 'Boating & serene water activities' },
    { id: 13, name: 'Lake View Swiss Cottages', desc: 'Luxury lakeside glamping tents' },
    { id: 14, name: 'Spa & Dance Floor', desc: 'Naturopathy spa & open-air party floor' },
    { id: 15, name: 'Swimming Pool', desc: 'Infinity pool & sun loungers' },
    { id: 16, name: 'Restaurant & Banquet Hall', desc: 'Fine dining & corporate hall' },
    { id: 17, name: 'Garden', desc: 'Exotic flower gardens' },
    { id: 18, name: 'Future Extension Farmhouses', desc: 'Expansion phase plots' },
  ];

  return (
    <div className="pt-24 pb-16 bg-[#f7f4ed] min-h-screen text-slate-900 selection:bg-[#cfa353]">
      <div className="max-w-[1540px] mx-auto px-2 sm:px-4 space-y-6">
        
        {/* Main Outer Container */}
        <div className="bg-white rounded-[2.5rem] p-4 sm:p-8 lg:p-10 shadow-2xl border border-amber-900/10 space-y-8">
          
          <div className="aspect-video rounded-[1.6rem] overflow-hidden bg-black">
            <iframe
              title="Joy Adventure Resort film"
              src={`${resortFilm}?rel=0`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
            {galleryPhotos.map((photo) => (
              <div key={photo.image} className="mb-3 break-inside-avoid rounded-2xl overflow-hidden">
                <img src={photo.image} alt={photo.title} className="w-full h-auto object-cover" />
              </div>
            ))}
          </div>

          {/* Header Banner */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-gray-200 pb-6 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#0a291c] text-[#cfa353] flex items-center justify-center font-bold font-serif text-2xl shadow-lg shrink-0 border border-[#cfa353]/40">
                👣
              </div>
              <div className="space-y-0.5">
                <span className="text-xs text-[#cfa353] font-bold tracking-widest uppercase block">Welcome to</span>
                <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a291c]">
                  JOY <span className="text-[#cfa353]">HOSPITALITY & REAL ESTATE GROUP</span>
                </h1>
                <p className="text-xs text-gray-500 font-serif italic">Tradition meets Technology</p>
              </div>
            </div>

            <div className="px-5 py-2.5 rounded-full bg-[#0a291c] text-[#cfa353] font-bold text-xs uppercase tracking-wider shadow-md">
              18 Key Landmarks Layout
            </div>
          </div>

          {/* Master Site Plan Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Master Site Plan Vector Graphic Box */}
            <div className="lg:col-span-8 bg-[#f4f7f2] p-6 rounded-3xl border border-emerald-900/20 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-emerald-900/10">
                <h3 className="text-xl font-serif font-bold text-[#0a291c]">Master Site Architectural Map</h3>
                <span className="text-xs font-bold text-[#cfa353] uppercase">Garjeda Jaipur Property</span>
              </div>

              {/* Styled Master Map Illustration Graphic */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-emerald-800/30">
                <img
                  src="/media/rooms/lake-aerial.jpg"
                  alt="Master Site Layout Map"
                  className="w-full h-[420px] object-cover filter brightness-90"
                />
                
                {/* 18 Interactive Pins Overlay Grid */}
                <div className="absolute inset-0 bg-emerald-950/40 backdrop-blur-[1px] p-6 grid grid-cols-3 sm:grid-cols-6 gap-3 items-center justify-items-center">
                  {masterPlanKey.map((item) => (
                    <div
                      key={item.id}
                      className="w-10 h-10 rounded-full bg-[#cfa353] text-slate-950 font-bold font-serif text-sm flex items-center justify-center shadow-2xl border-2 border-white hover:scale-125 transition-transform cursor-pointer group relative"
                    >
                      {item.id}
                      
                      {/* Tooltip on Hover */}
                      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden group-hover:block bg-[#0a291c] text-white text-[10px] py-1.5 px-3 rounded-xl whitespace-nowrap shadow-2xl z-30 border border-[#cfa353]">
                        {item.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: 18 Numbered Landmarks Directory */}
            <div className="lg:col-span-4 bg-gray-50 p-6 rounded-3xl border border-gray-200 shadow-xl space-y-4 max-h-[580px] overflow-y-auto">
              <div className="border-b border-gray-200 pb-3">
                <h3 className="text-lg font-serif font-bold text-[#0a291c]">18 Master Plan Landmarks</h3>
                <span className="text-xs text-gray-500 font-light">Complete Resort Landmarks Key</span>
              </div>

              <div className="space-y-2">
                {masterPlanKey.map((landmark) => (
                  <div key={landmark.id} className="p-2.5 rounded-xl bg-white border border-gray-200 flex items-start gap-3 hover:border-[#cfa353] transition-colors">
                    <span className="w-6 h-6 rounded-full bg-[#0a291c] text-[#cfa353] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {landmark.id}
                    </span>
                    <div>
                      <h5 className="text-xs font-bold text-slate-900">{landmark.name}</h5>
                      <p className="text-[10px] text-gray-500 font-light">{landmark.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Banner: Lakeside Swiss Cottages Photo Strip */}
          <div className="space-y-4 pt-4 border-t border-gray-200">
            <div className="text-center space-y-1">
              <p className="text-xl font-serif italic text-[#0a291c]">"Where tradition meets technology"</p>
              <span className="text-xs text-[#cfa353] font-bold uppercase tracking-widest block">LAKE VIEW SWISS COTTAGES & WATER RESERVOIR</span>
            </div>

            <div className="h-56 sm:h-64 rounded-3xl overflow-hidden shadow-2xl border border-amber-900/10 relative group">
              <img
                src={media.lakeAerial}
                alt="Lakeside Swiss Cottages Strip"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-6 text-white">
                <div>
                  <h4 className="text-2xl font-serif font-bold text-[#cfa353]">Lake View Luxury Cottages</h4>
                  <p className="text-xs text-gray-200 font-light">Serene water views, private deck & five-star hospitality</p>
                </div>

                <a
                  href="/contact"
                  className="px-6 py-2.5 rounded-full bg-[#cfa353] text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-[#b88e40] transition-colors shadow-md"
                >
                  BOOK COTTAGE
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
