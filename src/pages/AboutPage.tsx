import React from 'react';
import { Palmtree, Leaf, Heart, Shield, TrendingUp, Users, Sparkles, User } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const commitments = [
    {
      title: 'SUSTAINABLE LIVING',
      subtitle: 'Eco-friendly practices for a better tomorrow',
      icon: <Leaf className="w-5 h-5 text-[#cfa353]" />,
    },
    {
      title: 'COMMUNITY FOCUSED',
      subtitle: 'Building strong relationships',
      icon: <Users className="w-5 h-5 text-[#cfa353]" />,
    },
    {
      title: 'HEALTH & WELLNESS',
      subtitle: 'Promoting a balanced and healthy life',
      icon: <Heart className="w-5 h-5 text-[#cfa353]" />,
    },
    {
      title: 'TRADITION & TRUST',
      subtitle: 'Values that stand the test of time',
      icon: <Shield className="w-5 h-5 text-[#cfa353]" />,
    },
    {
      title: 'INNOVATION & GROWTH',
      subtitle: 'Continuously evolving for a brighter future',
      icon: <TrendingUp className="w-5 h-5 text-[#cfa353]" />,
    },
    {
      title: 'HAPPINESS & MEMORIES',
      subtitle: 'Creating moments you will cherish forever',
      icon: <Sparkles className="w-5 h-5 text-[#cfa353]" />,
    },
  ];

  const photoCollage = [
    {
      title: 'Serene Resort Lake Boating',
      image: '/media/gallery/g01.jpg',
    },
    {
      title: 'Traditional Wooden Villa',
      image: '/media/rooms/lake-cottage.jpg',
    },
    {
      title: 'Lush Orchard Lawns',
      image: '/media/rooms/lake-aerial.jpg',
    },
    {
      title: 'Luxury Bedroom Interior',
      image: '/media/rooms/farmhouse.jpg',
    },
    {
      title: 'Sunset Lake Gazebo',
      image: '/media/resort/resort-02.jpg',
    },
  ];

  return (
    <div className="pt-24 pb-16 bg-[#f7f4ed] min-h-screen text-slate-900 selection:bg-[#cfa353]">
      <div className="max-w-[1540px] mx-auto px-2 sm:px-4 space-y-6">
        
        {/* Expanded Main Outer Wrapper Card */}
        <div className="bg-white rounded-[2.5rem] p-4 sm:p-8 lg:p-10 shadow-2xl border border-amber-900/10 space-y-8">
          
          {/* Top 3-Section Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* 1. Left Card: Sunset Resort Pathway & Brand Tagline */}
            <div className="lg:col-span-4 relative h-[480px] sm:h-[540px] rounded-3xl overflow-hidden shadow-xl group border border-amber-900/10 flex flex-col justify-between p-6">
              <img
                src="/media/gallery/g06.jpg"
                alt="Joy Hospitality Pathway"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.7]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/50" />

              {/* Brand Header */}
              <div className="relative z-10 space-y-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full border border-[#cfa353] bg-[#0d3423] flex items-center justify-center">
                    <Palmtree className="w-4 h-4 text-[#cfa353]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-serif font-bold text-base leading-none">
                      JOY HOSPITALITY
                    </span>
                    <span className="text-[8px] text-[#cfa353] tracking-[0.25em] font-semibold uppercase mt-0.5">
                      & REAL ESTATE GROUP
                    </span>
                  </div>
                </div>
                <span className="text-[9px] text-gray-300 tracking-widest uppercase block font-semibold pl-1">
                  LIVE BETTER, EARN TOGETHER
                </span>
              </div>

              {/* Wooden Signpost Tagline Card (Bottom Left) */}
              <div className="relative z-10 bg-[#0a291c]/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-[#cfa353]/40 shadow-xl space-y-1.5">
                <p className="text-xs sm:text-sm font-serif italic text-white leading-snug">
                  "Rooted in Nature. <br />
                  Inspired by Tradition. <br />
                  Crafted for a Better Life."
                </p>
              </div>
            </div>

            {/* 2. Middle Column: ABOUT US Vision & Description */}
            <div className="lg:col-span-4 space-y-5">
              {/* Header */}
              <div className="space-y-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <div className="w-2 h-2 bg-[#cfa353] rotate-45" />
                  <span className="text-[#cfa353] text-[11px] font-bold tracking-[0.25em] uppercase">
                    PROSPERITY & NATURE
                  </span>
                  <div className="w-2 h-2 bg-[#cfa353] rotate-45" />
                </div>
                <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a291c]">
                  ABOUT <span className="text-[#cfa353]">US</span>
                </h2>
                <div className="w-16 h-0.5 bg-[#cfa353] mx-auto lg:mx-0 mt-2" />
              </div>

              {/* 3 Iconic Paragraph Items */}
              <div className="space-y-3.5">
                
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#fbf9f4] border border-amber-900/5 shadow-sm">
                  <div className="w-9 h-9 rounded-full bg-[#f6ebd6] text-[#cfa353] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Leaf className="w-4 h-4" />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-light">
                    Joy Adventure Resort opened in Jaipur as a holiday stay that can both{' '}
                    <strong className="text-[#cfa353] font-semibold">entertain</strong> and{' '}
                    <strong className="text-[#cfa353] font-semibold">revitalize</strong> — lake cottages,
                    Swiss tents, and theme farmhouses with modern rooms.
                  </p>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#fbf9f4] border border-amber-900/5 shadow-sm">
                  <div className="w-9 h-9 rounded-full bg-[#f6ebd6] text-[#cfa353] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Palmtree className="w-4 h-4" />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-light">
                    Guests eat traditional Rajasthani and continental food, with vegetables from the resort’s own farms. The grounds host{' '}
                    <strong className="text-[#cfa353] font-semibold">weddings, birthdays, corporate days</strong> and New Year nights.
                  </p>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#fbf9f4] border border-amber-900/5 shadow-sm">
                  <div className="w-9 h-9 rounded-full bg-[#f6ebd6] text-[#cfa353] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-light">
                    The site is eco-friendly and quiet, with lake views and sunsets. Many guests end a trip by{' '}
                    <strong className="text-[#cfa353] font-semibold">planting a tree</strong> in the resort garden.
                  </p>
                </div>

              </div>
            </div>

            {/* 3. Right Column: Photo Collage & Leadership / Health Cards */}
            <div className="lg:col-span-4 space-y-5">
              
              {/* Styled 5-Photo Grid Collage */}
              <div className="grid grid-cols-2 gap-3">
                <div className="h-32 rounded-2xl overflow-hidden shadow-md">
                  <img src={photoCollage[0].image} alt={photoCollage[0].title} className="w-full h-full object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="h-32 rounded-2xl overflow-hidden shadow-md">
                  <img src={photoCollage[1].image} alt={photoCollage[1].title} className="w-full h-full object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="h-32 rounded-2xl overflow-hidden shadow-md">
                  <img src={photoCollage[2].image} alt={photoCollage[2].title} className="w-full h-full object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="h-32 rounded-2xl overflow-hidden shadow-md">
                  <img src={photoCollage[3].image} alt={photoCollage[3].title} className="w-full h-full object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="col-span-2 h-36 rounded-2xl overflow-hidden shadow-md">
                  <img src={photoCollage[4].image} alt={photoCollage[4].title} className="w-full h-full object-cover hover:scale-105 transition-transform" />
                </div>
              </div>

            </div>

          </div>

          {/* Leadership & Health Mantra Row (Side-by-Side) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Leadership Box */}
            <div className="bg-[#fbf9f4] p-5 sm:p-6 rounded-3xl border border-amber-900/10 shadow-sm space-y-4">
              <div className="text-center pb-2 border-b border-gray-200">
                <span className="text-[#cfa353] text-[11px] font-extrabold tracking-widest uppercase">
                  ❖ LEADERSHIP ❖
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0d3423] text-[#cfa353] flex items-center justify-center shrink-0 shadow-md">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-serif font-bold text-slate-900">Mr. Neeraj Sharma</h4>
                    <span className="text-[10px] text-gray-500 font-semibold block">Chairman Managing Director</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0d3423] text-[#cfa353] flex items-center justify-center shrink-0 shadow-md">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-serif font-bold text-slate-900">Mr. Pradeep Nehra</h4>
                    <span className="text-[10px] text-gray-500 font-semibold block">Director</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Health Mantra Box */}
            <div className="bg-[#0a291c] text-white p-5 sm:p-6 rounded-3xl border border-[#cfa353]/30 shadow-md space-y-3">
              <div className="text-center pb-2 border-b border-white/10">
                <span className="text-[#cfa353] text-[11px] font-extrabold tracking-widest uppercase">
                  ❖ HEALTH MANTRA ❖
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center items-center">
                <div>
                  <p className="text-sm sm:text-base font-serif font-bold text-amber-200">"स्वस्थ शरीर, सुखी जीवन।"</p>
                  <span className="text-[10px] text-gray-300 italic font-light block">Healthy Body, Happy Life.</span>
                </div>
                <div className="pt-2 sm:pt-0 sm:border-l sm:border-t-0 border-t border-white/10 sm:pl-4">
                  <p className="text-sm sm:text-base font-serif font-bold text-amber-200">"स्वास्थ्य ही सबसे बड़ा धन है।"</p>
                  <span className="text-[10px] text-gray-300 italic font-light block">Health is the Greatest Wealth.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Dark Green Section: OUR COMMITMENT (Cleaned up, no extra line) */}
          <div className="bg-[#0d3423] text-white rounded-3xl p-6 sm:p-8 border border-[#cfa353]/30 shadow-2xl space-y-6">
            <div className="text-center">
              <span className="text-[#cfa353] text-xs font-extrabold tracking-widest uppercase">
                ❖ OUR COMMITMENT ❖
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
              {commitments.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 p-5 rounded-2xl text-center space-y-3 hover:border-[#cfa353] transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#f6ebd6] text-[#cfa353] flex items-center justify-center mx-auto shadow-md">
                    {item.icon}
                  </div>
                  <h4 className="font-serif font-bold text-white text-xs sm:text-sm tracking-wider">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-gray-300 font-light leading-snug">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Join Our Family Banner (PDF Page 2) */}
          <div className="bg-[#0a291c] text-white rounded-2xl p-6 border border-[#cfa353]/30 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#cfa353] text-slate-950 font-bold flex items-center justify-center shrink-0">
                <Palmtree className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-serif font-bold text-white">JOIN OUR FAMILY</h4>
                <span className="text-xs text-[#cfa353] font-semibold uppercase tracking-wider block">
                  LIVE BETTER, EARN TOGETHER
                </span>
              </div>
            </div>

            <div className="text-xs text-gray-300 font-light">
              <span className="text-[#cfa353] font-bold">@joy_adventure_resort</span> | Creating Memories, Building Futures.
            </div>

            <div>
              <a
                href="#join"
                className="px-6 py-2.5 rounded-full bg-[#cfa353] hover:bg-[#b88e40] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md inline-block"
              >
                TOGETHER, LET'S BUILD A BETTER TOMORROW
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
