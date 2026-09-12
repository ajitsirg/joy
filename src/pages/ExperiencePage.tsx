import React from 'react';
import { Check } from 'lucide-react';

export const ExperiencePage: React.FC = () => {
  const joyPillars = [
    {
      title: 'NATURE FIRST',
      desc: 'Experience nature in its purest form and rejuvenate your senses.',
    },
    {
      title: 'MEANINGFUL STAYS',
      desc: 'Thoughtfully designed stays that blend comfort, culture and care.',
    },
    {
      title: 'ADVENTURE FOR ALL',
      desc: 'From thrill seekers to peace lovers — something for everyone.',
    },
    {
      title: 'WELLNESS FOR LIFE',
      desc: 'Holistic activities for a healthier body, calmer mind & happier you.',
    },
    {
      title: 'TOGETHER WE GROW',
      desc: 'A community that inspires, connects and creates lasting value.',
    },
  ];

  const therapies = [
    {
      title: 'SUN THERAPY',
      subtitle: 'ENERGY FROM THE SUN',
      desc: 'Start your day with natural sunlight, boost your energy, improve mood and support overall well-being.',
      bullets: ['Morning Sunbaths', 'Vitamin D Boost', 'Better Sleep & Immunity'],
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'MUD THERAPY',
      subtitle: 'DETOX. CLEANSE. REVIVE.',
      desc: "Nature's clay to draw out impurities, improve skin health and promote deep detoxification.",
      bullets: ['Skin Rejuvenation', 'Improves Circulation', 'Natural Cooling Effect'],
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'HEALING THERAPY',
      subtitle: 'HEAL WITH NATURE',
      desc: "Embrace nature's calming touch to reduce stress, heal emotions and restore inner balance.",
      bullets: ['Stress Relief', 'Emotional Balance', 'Mind-Body Harmony'],
      image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'NATURAL LIVING',
      subtitle: 'BACK TO OUR ROOTS',
      desc: 'Eat clean, live green and reconnect with simple, sustainable and purposeful living.',
      bullets: ['Organic Food', 'Eco-Friendly Lifestyle', 'Fresh Air & Pure Water'],
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'MEDITATION',
      subtitle: 'SILENCE. FOCUS. PEACE.',
      desc: 'Quiet your mind, find inner peace and experience clarity through guided meditation.',
      bullets: ['Improves Focus', 'Reduces Anxiety', 'Inner Peace & Clarity'],
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'YOGA',
      subtitle: 'STRENGTH. FLEXIBILITY. BALANCE.',
      desc: 'Rebalance your body and mind with yoga practices for all levels in the lap of nature.',
      bullets: ['Improves Flexibility', 'Strengthens Body', 'Enhances Concentration'],
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const bottomValues = [
    { title: 'HOLISTIC WELLNESS FOR BODY & MIND' },
    { title: 'ADVENTURE THAT EXCITES' },
    { title: 'MEMORIES THAT LAST FOREVER' },
    { title: 'SUSTAINABLE TODAY BETTER TOMORROW' },
    { title: 'INCOME TODAY FREEDOM TOMORROW' },
  ];

  return (
    <div className="pt-24 pb-16 bg-[#071d13] min-h-screen text-white selection:bg-[#cfa353]">
      <div className="max-w-[1540px] mx-auto px-2 sm:px-4 space-y-6">
        
        {/* Main Outer Card Wrapper */}
        <div className="bg-[#0a291c] rounded-[2.5rem] p-4 sm:p-8 lg:p-10 shadow-2xl border border-[#cfa353]/30 space-y-8">
          
          {/* Top Section Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Header Box */}
            <div className="lg:col-span-3 bg-white text-slate-900 p-5 rounded-3xl space-y-2 border border-amber-900/10 shadow-md">
              <span className="text-[#cfa353] text-[9px] font-bold tracking-[0.2em] uppercase block">
                JOY HOSPITALITY & REAL ESTATE GROUP
              </span>
              <h2 className="text-xl font-serif font-bold text-[#0a291c]">Rooted in Nature.</h2>
              <p className="text-xs text-gray-600 font-light">Built on Trust. Growing Together.</p>
            </div>

            {/* Center Main Header */}
            <div className="lg:col-span-6 text-center space-y-2">
              <span className="text-[#cfa353] text-[10px] font-bold tracking-[0.25em] uppercase block">
                WHERE NATURE HEALS, ADVENTURE THRILLS AND MEMORIES LAST FOREVER.
              </span>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
                EXPERIENCE LIFE. <br />
                <span className="text-[#cfa353]">THE JOY WAY.</span>
              </h1>
              <div className="flex items-center justify-center gap-3 text-xs text-amber-200 font-bold uppercase tracking-widest pt-1">
                <span>RELAX</span> • <span>RECHARGE</span> • <span>RECONNECT</span>
              </div>
            </div>

            {/* Right Our Mission Box */}
            <div className="lg:col-span-3 bg-[#071d13] p-5 rounded-3xl border border-[#cfa353]/30 text-left space-y-3 shadow-md">
              <span className="text-[#cfa353] text-[10px] font-extrabold tracking-widest uppercase block">
                ❖ OUR MISSION ❖
              </span>
              <p className="text-xs text-gray-200 font-light leading-relaxed">
                "To create world-class nature resorts that inspire well-being, celebrate life and deliver long-term value to our guests, partners and communities."
              </p>
              <div className="space-y-1 pt-2 border-t border-white/10">
                {['Exceptional guest experience', 'Sustainable tourism', 'Financial freedom', 'Legacy of trust and joy'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-[10px] text-gray-300">
                    <Check className="w-3 h-3 text-[#cfa353] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* 5 Joy Life Pillars Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {joyPillars.map((p, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-2xl text-center space-y-2 hover:border-[#cfa353] transition-colors">
                <span className="w-7 h-7 rounded-full bg-[#cfa353] text-slate-950 font-extrabold text-xs flex items-center justify-center mx-auto">
                  0{idx + 1}
                </span>
                <h4 className="font-serif font-bold text-white text-xs sm:text-sm">{p.title}</h4>
                <p className="text-[11px] text-gray-300 font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Section Divider Header */}
          <div className="text-center">
            <span className="text-[#cfa353] text-xs font-extrabold tracking-widest uppercase block">
              ❖ MULTIPLE EXPERIENCES, ONE DESTINATION. ❖
            </span>
          </div>

          {/* 6 Therapy Showcase Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {therapies.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 rounded-3xl border border-[#cfa353]/30 p-4 space-y-3 hover:border-[#cfa353] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-32 rounded-2xl overflow-hidden mb-3">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-serif font-bold text-[#cfa353] text-xs uppercase">{item.title}</h4>
                  <span className="text-[10px] text-gray-300 font-serif italic block mb-1">{item.subtitle}</span>
                  <p className="text-[11px] text-gray-300 font-light leading-snug mb-3">{item.desc}</p>
                </div>

                <div className="space-y-1 pt-2 border-t border-white/10">
                  {item.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-1.5 text-[10px] text-gray-200">
                      <Check className="w-3 h-3 text-[#cfa353] shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom 5 Future Value Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-center">
            {bottomValues.map((v, idx) => (
              <div key={idx} className="p-3 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-serif font-bold text-[#cfa353]">
                {v.title}
              </div>
            ))}
          </div>

          {/* Footer Join Joy Banner */}
          <div className="bg-[#071d13] text-white rounded-2xl p-5 border border-[#cfa353]/30 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left shadow-lg">
            <div className="text-xs text-gray-300 font-light">
              <span className="text-[#cfa353] font-bold">JOY HOSPITALITY & REAL ESTATE GROUP</span> | LIVE BETTER, EARN TOGETHER
            </div>

            <div>
              <a
                href="/account/register"
                className="px-6 py-2.5 rounded-full bg-[#cfa353] hover:bg-[#b88e40] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md inline-block"
              >
                JOIN JOY • LIVE BETTER, EARN TOGETHER
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
