import React from 'react';
import { Heart, Shield, Award, Users, TrendingUp, Phone, Mail, MapPin, Globe, Share2 } from 'lucide-react';

export const ThankYouPage: React.FC = () => {
  const coreValues = [
    { title: 'TRUST', desc: 'Built on honesty and transparency', icon: <Shield className="w-5 h-5 text-[#cfa353]" /> },
    { title: 'QUALITY', desc: 'Committed to excellence in every experience', icon: <Award className="w-5 h-5 text-[#cfa353]" /> },
    { title: 'TOGETHERNESS', desc: 'Stronger together, better tomorrow', icon: <Users className="w-5 h-5 text-[#cfa353]" /> },
    { title: 'GROWTH', desc: 'Sustainable growth for a better future', icon: <TrendingUp className="w-5 h-5 text-[#cfa353]" /> },
    { title: 'VALUES', desc: 'Creating value for all our stakeholders', icon: <Heart className="w-5 h-5 text-[#cfa353]" /> },
  ];

  const photoCards = [
    { title: 'LUXURY STAYS', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80' },
    { title: 'ADVENTURE', image: 'https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?auto=format&fit=crop&w=400&q=80' },
    { title: 'DESTINATION WEDDINGS', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80' },
    { title: 'FAMILY FUN', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=400&q=80' },
    { title: 'WELLNESS & RELAXATION', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=400&q=80' },
    { title: 'SUSTAINABLE FUTURE', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <div className="pt-24 pb-16 bg-[#f7f4ed] min-h-screen text-slate-900 selection:bg-[#cfa353]">
      <div className="max-w-[1540px] mx-auto px-2 sm:px-4 space-y-6">
        
        {/* Main Outer Container with Gold Border */}
        <div className="bg-[#faf7f0] rounded-[2.5rem] p-4 sm:p-8 lg:p-10 shadow-2xl border-2 border-[#cfa353]/40 space-y-8 relative overflow-hidden">
          
          {/* Top Section: Left Title & Right Hero Pool Photo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-amber-900/10 pb-6">
            
            {/* Left Top Title & Gratitude Text */}
            <div className="lg:col-span-7 space-y-4 text-center sm:text-left">
              
              {/* Gold Shield Logo */}
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <div className="w-14 h-14 rounded-2xl bg-white border-2 border-[#cfa353] flex items-center justify-center p-1.5 shadow-lg shrink-0">
                  <img
                    src="/brand/joy-hospitality-logo.png?v=20260911"
                    alt="Joy Hospitality and Real Estate Group"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-sm font-serif font-bold text-[#0a291c] tracking-wider block">
                    JOY CLUB ADVENTURE RESORT
                  </span>
                  <span className="text-[9px] text-[#cfa353] font-bold tracking-widest uppercase block">
                    NATURE'S TOUCH. SOUL'S RENEWAL.
                  </span>
                </div>
              </div>

              {/* Massive Title THANK YOU */}
              <div className="space-y-1">
                <h1 className="text-5xl sm:text-7xl font-serif font-bold tracking-wider leading-none">
                  <span className="text-[#0a291c]">THANK </span>
                  <span className="text-[#cfa353]">YOU</span>
                </h1>
                
                <div className="flex items-center justify-center sm:justify-start gap-2 pt-1">
                  <span className="text-amber-500">♥</span>
                  <p className="text-xl sm:text-2xl font-serif italic text-amber-800 font-medium">
                    For Your Trust & Support
                  </p>
                  <span className="text-amber-500">♥</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 font-light leading-relaxed max-w-xl">
                Your trust inspires us to create extraordinary experiences and build a better tomorrow together. <br />
                <strong className="text-[#0a291c] font-semibold">We are grateful to have you as a part of the Joy Club family.</strong>
              </p>
            </div>

            {/* Right Top Curved Hero Photo with Floating Badge */}
            <div className="lg:col-span-5 relative h-56 sm:h-64 rounded-3xl overflow-hidden shadow-2xl border-2 border-[#cfa353]/30 group">
              <img
                src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80"
                alt="Luxury Resort Sunset Pool"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform filter brightness-90"
              />

              {/* Dark Green Scalloped Badge Floating in Center-Left */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-center justify-start p-6">
                <div className="bg-[#0a291c]/95 text-white p-5 rounded-3xl border-2 border-[#cfa353] text-center shadow-2xl max-w-xs space-y-1">
                  <span className="text-[10px] text-[#cfa353] font-bold uppercase tracking-widest block">TOGETHER</span>
                  <h3 className="text-base font-serif font-bold text-white">WE GROW</h3>
                  <h3 className="text-base font-serif font-bold text-white">WE ACHIEVE</h3>
                  <h3 className="text-base font-serif font-bold text-[#cfa353]">WE CELEBRATE</h3>
                </div>
              </div>
            </div>

          </div>

          {/* Middle Section: 5 Core Values & Adventures Sub-Banner */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left 5 Core Values Row (60% width) */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-5 gap-3">
              {coreValues.map((v, idx) => (
                <div key={idx} className="bg-white p-3.5 rounded-2xl border border-amber-900/10 text-center space-y-1.5 shadow-md flex flex-col justify-between hover:border-[#cfa353] transition-colors">
                  <div className="w-9 h-9 rounded-full bg-[#0a291c] text-[#cfa353] flex items-center justify-center mx-auto shadow-sm">
                    {v.icon}
                  </div>
                  <h4 className="font-serif font-bold text-slate-900 text-xs">{v.title}</h4>
                  <p className="text-[9px] text-gray-500 font-light leading-snug">{v.desc}</p>
                </div>
              ))}
            </div>

            {/* Right Adventures Sub-Banner (40% width) */}
            <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-amber-900/10 text-center space-y-3 shadow-md flex flex-col justify-between">
              <div>
                <p className="text-sm font-serif italic text-[#0a291c]">"Here's to many more Adventures Together!"</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pt-1">
                <div className="p-2 bg-amber-50/50 rounded-xl border border-amber-900/10"><span className="text-[9px] font-bold text-slate-800 block">EXCITING ADVENTURES</span></div>
                <div className="p-2 bg-amber-50/50 rounded-xl border border-amber-900/10"><span className="text-[9px] font-bold text-slate-800 block">NATURE AT ITS BEST</span></div>
                <div className="p-2 bg-amber-50/50 rounded-xl border border-amber-900/10"><span className="text-[9px] font-bold text-slate-800 block">MEMORIES THAT LAST</span></div>
                <div className="p-2 bg-amber-50/50 rounded-xl border border-amber-900/10"><span className="text-[9px] font-bold text-slate-800 block">BONDS FOREVER</span></div>
              </div>
            </div>

          </div>

          {/* Bottom Section: 6 Photo Cards Strip */}
          <div className="space-y-3">
            <span className="text-[#cfa353] text-xs font-serif font-bold tracking-widest uppercase text-center block">
              ❖ OUR EXPERIENCES & DESTINATIONS ❖
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {photoCards.map((photo, idx) => (
                <div key={idx} className="h-36 rounded-2xl overflow-hidden relative border-2 border-[#cfa353]/40 shadow-lg group">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center p-2 text-center">
                    <span className="text-[10px] font-serif font-bold text-[#cfa353] uppercase leading-tight">{photo.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Dark Green Contact Footer Bar */}
          <div className="bg-[#0a291c] text-white rounded-2xl p-5 border border-[#cfa353]/30 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#cfa353] text-slate-950 flex items-center justify-center font-bold shrink-0 shadow-md">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-white font-mono">+91 8000928080</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#cfa353] shrink-0" />
              <span className="text-xs font-mono text-gray-200">joyadventureresort.com</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#cfa353] shrink-0" />
              <span className="text-xs text-gray-200">Joy Adventure Resort, Creating Memories, Building Futures.</span>
            </div>

            <div className="flex items-center gap-3 text-[#cfa353]">
              <Globe className="w-4 h-4 hover:text-white transition-colors cursor-pointer" />
              <Share2 className="w-4 h-4 hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
