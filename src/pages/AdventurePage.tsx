import React from 'react';
import { ShieldCheck, Compass, Zap, Activity } from 'lucide-react';
import { games } from '../data/resort';

export const AdventurePage: React.FC = () => {
  const mainActivities = games.slice(0, 9).map((game) => ({
    title: `${game.name.toUpperCase()} · ${game.price}`,
    image: game.image,
  }));

  const directoryActivities = games.map((game) => ({
    name: `${game.name} · ${game.price}`,
    icon: '✦',
  }));

  return (
    <div className="pt-24 pb-16 bg-[#071d13] min-h-screen text-white selection:bg-[#cfa353]">
      <div className="max-w-[1540px] mx-auto px-2 sm:px-4 space-y-6">
        
        {/* Main Outer Card Wrapper */}
        <div className="bg-[#0a291c] rounded-[2.5rem] p-4 sm:p-8 lg:p-10 shadow-2xl border border-[#cfa353]/30 space-y-8">
          
          {/* Top Section Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Header Column */}
            <div className="lg:col-span-4 space-y-5">
              <div className="space-y-2">
                <span className="text-[#cfa353] text-[10px] font-bold tracking-[0.25em] uppercase block">
                  JOY HOSPITALITY & REAL ESTATE GROUP • LIVE BETTER, EARN TOGETHER
                </span>
                <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
                  ADVENTURE <br />
                  <span className="text-[#cfa353] font-serif italic">Awaits You</span> 🌿
                </h1>
                <p className="text-xs sm:text-sm text-gray-300 font-light">
                  Experience Nature. Embrace Adventure. Create Memories that Last a Lifetime.
                </p>
              </div>

              {/* 4 Feature Cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 border border-white/10 p-3 rounded-2xl space-y-1">
                  <Zap className="w-5 h-5 text-[#cfa353]" />
                  <h4 className="text-xs font-serif font-bold text-white">THRILLING EXPERIENCES</h4>
                  <p className="text-[10px] text-gray-300 font-light">Exciting activities for every seeker.</p>
                </div>

                <div className="bg-white/5 border border-white/10 p-3 rounded-2xl space-y-1">
                  <ShieldCheck className="w-5 h-5 text-[#cfa353]" />
                  <h4 className="text-xs font-serif font-bold text-white">SAFE & SECURE</h4>
                  <p className="text-[10px] text-gray-300 font-light">Your safety is our top priority always.</p>
                </div>

                <div className="bg-white/5 border border-white/10 p-3 rounded-2xl space-y-1">
                  <Compass className="w-5 h-5 text-[#cfa353]" />
                  <h4 className="text-xs font-serif font-bold text-white">FUN FOR EVERYONE</h4>
                  <p className="text-[10px] text-gray-300 font-light">Perfect for friends & families.</p>
                </div>

                <div className="bg-white/5 border border-white/10 p-3 rounded-2xl space-y-1">
                  <Activity className="w-5 h-5 text-[#cfa353]" />
                  <h4 className="text-xs font-serif font-bold text-white">NATURE CONNECTED</h4>
                  <p className="text-[10px] text-gray-300 font-light">Reconnect & refresh your soul.</p>
                </div>
              </div>

              {/* 20+ Adventures Highlight Box */}
              <div className="bg-[#cfa353] text-slate-950 p-4 rounded-2xl text-center space-y-0.5 shadow-lg">
                <span className="text-3xl sm:text-4xl font-serif font-extrabold block">17</span>
                <span className="text-xs font-bold uppercase tracking-wider block">GAMES LISTED ON THE RESORT</span>
              </div>
            </div>

            {/* Middle Activity Cards & 20+ Adventures Yellow Banner */}
            <div className="lg:col-span-6 space-y-5">
              
              {/* 20+ Adventures Central Banner */}
              <div className="bg-[#cfa353] text-slate-950 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left shadow-xl">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-extrabold">17 GAMES</h3>
                  <span className="text-xs font-bold tracking-wider uppercase block">SOMETHING FOR EVERY EXPLORER!</span>
                </div>
                <div className="px-4 py-1.5 rounded-full bg-[#0a291c] text-[#cfa353] font-bold text-[10px] uppercase tracking-widest">
                  CHALLENGE • EXPLORE • CONQUER
                </div>
              </div>

              {/* 9 Activity Photo Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {mainActivities.map((act, idx) => (
                  <div key={idx} className="relative h-36 rounded-2xl overflow-hidden shadow-md group border border-white/10">
                    <img src={act.image} alt={act.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5">
                      <span className="text-[10px] font-serif font-bold text-white">{act.title}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Health Mantra Column */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-[#071d13] p-5 rounded-2xl border border-[#cfa353]/30 text-center space-y-4 shadow-md">
                <span className="text-[#cfa353] text-[10px] font-extrabold tracking-widest uppercase block">
                  ❖ OUR HEALTH MANTRA ❖
                </span>

                <div className="space-y-1 pt-2 border-t border-white/10">
                  <p className="text-sm font-serif font-bold text-amber-200">"स्वस्थ शरीर, सुखी जीवन।"</p>
                  <span className="text-[10px] text-gray-300 italic font-light block">Healthy Body, Happy Life.</span>
                </div>

                <div className="space-y-1 pt-2 border-t border-white/10">
                  <p className="text-sm font-serif font-bold text-amber-200">"स्वास्थ्य ही सबसे बड़ा धन है।"</p>
                  <span className="text-[10px] text-gray-300 italic font-light block">Health is the Greatest Wealth.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom White Directory Box: AND MANY MORE EXCITING ACTIVITIES */}
          <div className="bg-white text-slate-900 rounded-3xl p-6 shadow-xl border border-amber-900/10 space-y-4 text-center">
            <span className="text-[#cfa353] text-xs font-bold tracking-widest uppercase block">
              ➜ AND MANY MORE EXCITING ACTIVITIES ↵
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
              {directoryActivities.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-gray-50 border border-gray-100 flex flex-col items-center justify-center space-y-1">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-[10px] font-bold text-slate-800 tracking-wider">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Join The Joy Family Banner */}
          <div className="bg-[#071d13] text-white rounded-2xl p-5 border border-[#cfa353]/30 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left shadow-lg">
            <div className="text-xs text-gray-300 font-light">
              <span className="text-[#cfa353] font-bold">@joy_adventure_resort</span> | Joy Hospitality & Real Estate Group (Creating Memories, Building Futures.)
            </div>

            <div>
              <a
                href="#join"
                className="px-6 py-2.5 rounded-full bg-[#cfa353] hover:bg-[#b88e40] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md inline-block"
              >
                JOIN THE JOY FAMILY • LIVE BETTER, EARN TOGETHER
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
