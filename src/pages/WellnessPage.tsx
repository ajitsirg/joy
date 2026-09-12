import React from 'react';
import { Check } from 'lucide-react';

export const WellnessPage: React.FC = () => {
  const therapies = [
    {
      title: 'HEALING THERAPY',
      subtitle: 'Touch that Heals from Within',
      desc: 'Therapeutic treatments using herbal oils & ancient techniques to balance doshas, relieve pain and restore inner harmony.',
      bullets: ['Relieves Pain & Tension', 'Improves Circulation', 'Restores Balance & Well-being'],
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'NATURAL LIVING',
      subtitle: 'Back to Nature, Back to You',
      desc: 'Surround yourself with nature’s purity to calm your senses, reduce stress and promote a healthy & peaceful life.',
      bullets: ['Reduces Stress & Anxiety', 'Boosts Mental Clarity', 'Enhances Overall Well-being'],
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'MEDITATION',
      subtitle: 'Silence the Mind, Heal the Soul',
      desc: 'Meditation calms the mind, enhances focus, reduces stress and brings inner peace & emotional balance.',
      bullets: ['Improves Focus & Concentration', 'Reduces Stress & Anxiety', 'Brings Inner Peace & Happiness'],
      image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'YOGA',
      subtitle: 'Balance. Strength. Harmony.',
      desc: 'Yoga harmonizes body, mind & spirit through asanas, pranayama & mindful movement for a healthier you.',
      bullets: ['Improves Flexibility & Strength', 'Boosts Energy & Stamina', 'Promotes Overall Wellness'],
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'DINE IN NATURE',
      subtitle: 'Pure Food. Pure Mood.',
      desc: 'Savor delicious, organic & satvic meals crafted to nourish your body and delight your senses.',
      bullets: ['Boosts Digestion & Immunity', 'Nourishes Body Naturally', 'Enhances Mood & Energy'],
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'RELAX & UNWIND',
      subtitle: 'Let Go. Relax. Refresh.',
      desc: 'Unwind in peaceful surroundings, recharge your energy and experience deep relaxation.',
      bullets: ['Releases Mental Stress', 'Improves Sleep Quality', 'Restores Energy & Calm'],
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const bottomPillars = [
    { title: 'HOLISTIC HEALING', desc: 'Therapies for complete well-being' },
    { title: 'PURE & ORGANIC', desc: 'Chemical-free, nature-approved' },
    { title: 'AYURVEDIC WISDOM', desc: 'Ancient knowledge, modern care' },
    { title: 'PEACEFUL ENVIRONMENT', desc: 'Serene locations, stress-free spaces' },
    { title: 'SUSTAINABLE LIVING', desc: 'Eco-friendly practices for a better tomorrow' },
    { title: 'HOSPITALITY WITH HEART', desc: 'Warmth, care & comfort in every moment' },
  ];

  return (
    <div className="pt-24 pb-16 bg-[#071d13] min-h-screen text-white selection:bg-[#cfa353]">
      <div className="max-w-[1540px] mx-auto px-2 sm:px-4 space-y-6">
        
        {/* Main Outer Card Wrapper */}
        <div className="bg-[#0a291c] rounded-[2.5rem] p-4 sm:p-8 lg:p-10 shadow-2xl border border-[#cfa353]/30 space-y-8">
          
          {/* Top Section Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Header Column */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-[#cfa353] text-[10px] font-bold tracking-[0.25em] uppercase block">
                JOY HOSPITALITY & REAL ESTATE GROUP
              </span>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
                NATURAL <br />
                <span className="text-[#cfa353] font-serif italic">THERAPIES</span> 🌿
              </h1>
              <p className="text-xs text-gray-300 font-serif italic">
                Refresh. Restore. Rejuvenate. Rooted in Nature. Inspired by Tradition.
              </p>
            </div>

            {/* Center Waterfall Meditation Hero Banner */}
            <div className="lg:col-span-5 relative h-56 sm:h-64 rounded-3xl overflow-hidden shadow-xl border border-[#cfa353]/30 p-6 flex flex-col justify-between group">
              <img
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80"
                alt="Reconnect Rebalance Rediscover You"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform filter brightness-[0.6]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

              <div className="relative z-10 text-center space-y-1">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  Reconnect. Rebalance. Rediscover You.
                </h3>
                <p className="text-xs text-gray-200 font-light">
                  Healing starts where nature embraces you. Experience timeless therapies for mind, body & soul.
                </p>
              </div>
            </div>

            {/* Right Mahamrityunjaya Mantra Box */}
            <div className="lg:col-span-3 bg-[#071d13] p-5 rounded-3xl border border-[#cfa353]/30 text-center space-y-2 shadow-md">
              <span className="text-[#cfa353] text-[10px] font-extrabold tracking-widest uppercase block">
                ❖ HEALTH MANTRA ❖
              </span>
              <p className="text-xs font-serif font-bold text-amber-200 leading-relaxed">
                ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। <br />
                उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय माऽमृतात्॥
              </p>
              <p className="text-[10px] text-gray-300 italic font-light">
                "This mantra brings good health, healing, and protection from illness."
              </p>
            </div>

          </div>

          {/* Middle 6 Therapy Cards Grid */}
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

          {/* Bottom Vedic Mantra Banner */}
          <div className="bg-[#071d13] text-white p-5 rounded-2xl border border-[#cfa353]/30 text-center space-y-2">
            <p className="text-sm sm:text-base font-serif font-bold text-amber-200">
              ॐ असतो मा सद्गमय। तमसो मा ज्योतिर्गमय। मृत्योर्मा अमृतं गमय॥
            </p>
            <p className="text-xs text-gray-300 font-light">
              "Om Asato Ma Sadgamaya | Tamaso Ma Jyotirgamaya | Mrityor Ma Amritam Gamaya || Lead me from the unreal to the real, from darkness to light, from mortality to immortality."
            </p>
          </div>

          {/* Bottom 6 Feature Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
            {bottomPillars.map((p, idx) => (
              <div key={idx} className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <h5 className="text-[10px] font-serif font-bold text-[#cfa353]">{p.title}</h5>
                <p className="text-[9px] text-gray-300 font-light leading-tight">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Footer Join Family Banner */}
          <div className="bg-[#071d13] text-white rounded-2xl p-5 border border-[#cfa353]/30 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left shadow-lg">
            <div className="text-xs text-gray-300 font-light">
              <span className="text-[#cfa353] font-bold">@joy_adventure_resort</span> | Live in Harmony with Nature. Live Better, Live Joyfully.
            </div>

            <div>
              <a
                href="/account/register"
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
