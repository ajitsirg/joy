import React from 'react';
import { MapPin, Mail, Navigation, Building, QrCode, Palmtree, Compass, TrendingUp } from 'lucide-react';

export const LocationPage: React.FC = () => {
  const nearbyPlaces = [
    { name: 'Jaipur - Bhilwara Highway', distance: '2 KM', desc: 'Fast & smooth highway access' },
    { name: 'World Famous Diggi Kalyan Ji Temple', distance: '14 KM', desc: 'Revered spiritual pilgrimage center' },
    { name: 'Diggi Talab', distance: '14 KM', desc: 'Scenic historic water reservoir' },
    { name: 'Dadabadi Jain Temple', distance: '15 KM', desc: 'Peaceful marble Jain pilgrimage site' },
  ];

  const locationBadges = [
    { title: 'EASY ACCESS', desc: 'Well Connected Location', icon: <MapPin className="w-5 h-5 text-[#cfa353]" /> },
    { title: 'WELL CONNECTED', desc: 'Close to Main Highway & Key Destinations', icon: <Navigation className="w-5 h-5 text-[#cfa353]" /> },
    { title: 'SPIRITUAL NEARBY', desc: 'Famous Temples at Short Distance', icon: <Compass className="w-5 h-5 text-[#cfa353]" /> },
    { title: 'IDEAL INVESTMENT', desc: 'High Growth Area with Great Potential', icon: <TrendingUp className="w-5 h-5 text-[#cfa353]" /> },
  ];

  return (
    <div className="pt-24 pb-16 bg-[#071d13] min-h-screen text-white selection:bg-[#cfa353]">
      <div className="max-w-[1540px] mx-auto px-2 sm:px-4 space-y-6">
        
        {/* Main Outer Dark Green Container with Gold Border */}
        <div className="bg-[#0a291c] rounded-[2.5rem] p-4 sm:p-8 lg:p-10 shadow-2xl border-2 border-[#cfa353]/40 space-y-8 relative overflow-hidden">
          
          {/* Top Header Row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 border-b border-white/10 pb-6 text-center lg:text-left">
            
            {/* Left Brand Shield */}
            <div className="flex items-center gap-3">
              <div className="w-16 h-20 rounded-2xl bg-[#0d3423] border-2 border-[#cfa353] flex flex-col items-center justify-center p-2 text-center shadow-lg shrink-0">
                <Palmtree className="w-6 h-6 text-[#cfa353]" />
                <span className="text-[8px] font-bold text-white tracking-widest uppercase mt-1">JOY RESORT</span>
                <span className="text-[6px] text-[#cfa353] tracking-widest uppercase">JAIPUR</span>
              </div>

              <div>
                <span className="text-[10px] text-[#cfa353] tracking-[0.25em] font-semibold uppercase block">
                  JOY ADVENTURE RESORT
                </span>
                <h3 className="text-xl font-serif font-bold text-white leading-none">
                  HOSPITALITY & REAL ESTATE GROUP
                </h3>
                <span className="text-[9px] text-gray-300 tracking-wider uppercase mt-1 block">
                  NATURE'S TOUCH. SOUL'S RENEWAL.
                </span>
              </div>
            </div>

            {/* Center Title */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#cfa353] tracking-wider">
                LOCATION <span className="text-white">MAP</span>
              </h1>
              <p className="text-xs text-gray-300 font-serif italic">
                HOW TO REACH JOY ADVENTURE RESORT • Multiple Streams. One Destination. Unlimited Growth.
              </p>
            </div>

            {/* Right Cursive Slogan */}
            <div className="text-right hidden lg:block">
              <p className="text-lg font-serif italic text-[#cfa353]">"Escape. Explore. Experience Joy."</p>
            </div>

          </div>

          {/* Main White Map Box (Matching Screenshot 1) */}
          <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-[#cfa353]/30 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Road Diagram Box */}
            <div className="lg:col-span-8 bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-6 flex flex-col justify-between">
              
              <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                <h3 className="text-2xl font-serif font-bold text-[#0a291c]">Location Map</h3>
                <span className="text-xs font-bold text-[#cfa353] uppercase tracking-widest">NOT TO SCALE</span>
              </div>

              {/* Road Network Diagram Graphics */}
              <div className="bg-[#071d13] text-white p-6 rounded-2xl border-2 border-[#cfa353]/40 space-y-6 text-center relative overflow-hidden shadow-inner">
                
                {/* Top Highway Nodes */}
                <div className="grid grid-cols-3 gap-2 text-[11px] font-bold text-[#cfa353]">
                  <div className="bg-white/10 p-2.5 rounded-xl border border-white/15">AGRA ROAD ➔</div>
                  <div className="bg-white/10 p-2.5 rounded-xl border border-white/15">CHAKSU / TONK ROAD</div>
                  <div className="bg-white/10 p-2.5 rounded-xl border border-white/15">SOHELA</div>
                </div>

                {/* Center Resort Location Pin */}
                <div className="p-6 rounded-2xl bg-[#0d3423] border-2 border-[#cfa353] space-y-2 shadow-2xl">
                  <div className="w-12 h-12 rounded-full bg-[#cfa353] text-slate-950 font-bold flex items-center justify-center mx-auto shadow-md">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-[#cfa353]">JOY ADVENTURE RESORT</h4>
                  <p className="text-xs text-gray-200 font-mono">LNT ROAD • GARJEDA VILLAGE • DIGGI MALPURA HIGHWAY</p>
                </div>

                {/* Bottom Arterial Roads */}
                <div className="grid grid-cols-3 gap-2 text-[11px] font-bold text-[#cfa353]">
                  <div className="bg-white/10 p-2.5 rounded-xl border border-white/15">⬅ SANGANER</div>
                  <div className="bg-white/10 p-2.5 rounded-xl border border-white/15">DIGGI-MALPURA ROAD (PHAGI / DIGGI CIRCLE)</div>
                  <div className="bg-white/10 p-2.5 rounded-xl border border-white/15">AJMER ROAD (DUDU) ➔</div>
                </div>

              </div>

            </div>

            {/* Right Dark Column: NEARBY PLACES & QR Badge */}
            <div className="lg:col-span-4 bg-[#0a291c] text-white p-6 sm:p-7 rounded-2xl border border-[#cfa353]/40 shadow-xl space-y-6 flex flex-col justify-between">
              
              <div className="space-y-4">
                <div className="border-b border-white/10 pb-3 text-center">
                  <span className="text-[#cfa353] text-xs font-serif font-bold tracking-widest uppercase block">
                    ❖ NEARBY PLACES ❖
                  </span>
                </div>

                <div className="space-y-3 divide-y divide-white/10">
                  {nearbyPlaces.map((place, idx) => (
                    <div key={idx} className="pt-3 first:pt-0 flex items-center justify-between">
                      <div>
                        <h5 className="text-xs font-serif font-bold text-white">{place.name}</h5>
                        <span className="text-[10px] text-gray-400 font-light">{place.desc}</span>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-[#cfa353] text-slate-950 font-bold font-serif text-[11px] shrink-0 shadow-sm">
                        {place.distance}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* QR Code Visit Badge */}
              <div className="bg-[#071d13] p-4 rounded-xl border border-[#cfa353]/30 flex items-center gap-4 text-left shadow-md">
                <QrCode className="w-12 h-12 text-[#cfa353] shrink-0" />
                <div>
                  <span className="text-[9px] text-[#cfa353] font-bold uppercase tracking-wider block">VISIT US ONLINE</span>
                  <span className="text-xs font-mono font-bold text-white block">www.joyadventureresort.com</span>
                </div>
              </div>

            </div>

          </div>

          {/* 4 Location Value Badges Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {locationBadges.map((badge, idx) => (
              <div key={idx} className="bg-[#0d3423] p-4 rounded-2xl border border-white/10 text-center space-y-1.5 shadow-md">
                <div className="w-10 h-10 rounded-full bg-[#0a291c] text-[#cfa353] flex items-center justify-center mx-auto shadow-sm">
                  {badge.icon}
                </div>
                <h4 className="font-serif font-bold text-xs text-[#cfa353]">{badge.title}</h4>
                <p className="text-[10px] text-gray-300 font-light leading-snug">{badge.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom Addresses Bar */}
          <div className="bg-[#071d13] text-white rounded-2xl p-6 border border-[#cfa353]/30 grid grid-cols-1 md:grid-cols-3 gap-6 shadow-lg text-center md:text-left">
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-[#cfa353] shrink-0" />
              <div>
                <span className="text-[9px] font-bold text-[#cfa353] uppercase block">RESORT ADDRESS</span>
                <p className="text-xs text-gray-200">Sanskriti Village, Garjeda Village, LNT Road, Diggi Malpura Jaipur Highway</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-[#cfa353] shrink-0" />
              <div>
                <span className="text-[9px] font-bold text-[#cfa353] uppercase block">EMAIL US</span>
                <p className="text-xs text-gray-200">info@joyadventureresort.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Building className="w-6 h-6 text-[#cfa353] shrink-0" />
              <div>
                <span className="text-[9px] font-bold text-[#cfa353] uppercase block">REGISTERED OFFICE</span>
                <p className="text-xs text-gray-200">Jaipur Earth Developers Pvt. Ltd., S B-1, Nityanand Nagar, Vaishali Nagar, Jaipur</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
