import React from 'react';
import { Check, Calendar } from 'lucide-react';

export const StayPage: React.FC = () => {
  const accommodations = [
    {
      title: 'Luxury Villa',
      subtitle: 'Exclusive private villa with pool & butler service',
      description:
        'Nestled amidst lush greenery, our luxury villas feature private pools, serene gazebos, plush interiors, and personalized butler services.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
      price: '₹14,999 / Night',
      amenities: ['Private Pool', 'Butler Service', 'Complimentary Breakfast', 'Private Gazebo', 'High-Speed WiFi', 'Luxury Bath Tub'],
    },
    {
      title: 'Lake View Swiss Cottage',
      subtitle: 'Serene lakeside retreat with modern elegance',
      description:
        'Wake up to tranquil lake views and fresh mountain breeze in our luxury Swiss cottages equipped with premium wooden aesthetics.',
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1000&q=80',
      price: '₹9,999 / Night',
      amenities: ['Lake View Balcony', 'AC & Heating', 'Free Breakfast', 'Mini Bar', '24/7 Room Service'],
    },
    {
      title: 'Theme Based Farmhouse',
      subtitle: 'Experience rural charm with world-class comfort',
      description:
        'Spacious multi-bedroom farmhouses with private lawns, fruit orchards, and authentic traditional hospitality.',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80',
      price: '₹18,500 / Night',
      amenities: ['Private Garden', 'Organic Kitchen', 'Firepit Lounge', 'Group Dining', 'Game Lawn'],
    },
    {
      title: 'Executive Suite',
      subtitle: 'Sophisticated comfort with panoramic nature views',
      description:
        'Designed for corporate leaders and luxury travelers seeking tranquil work spaces and plush relaxation.',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80',
      price: '₹7,499 / Night',
      amenities: ['King Size Bed', 'Work Desk', 'Balcony Deck', 'Smart TV', 'Free WiFi'],
    },
  ];

  const resortKeys = [
    { title: 'Luxury Stays', text: 'Premium villas & cottages with world-class comfort' },
    { title: 'Natural Therapy Center', text: 'Ayurvedic wellness therapies for mind, body & soul' },
    { title: 'Adventure Park', text: 'Thrilling zipline, ATV & rope course activities' },
    { title: 'Century Park', text: 'Sprawling green spaces for relaxation & family time' },
    { title: 'Organic Herbal Farming', text: 'Pure organic farm-to-table dining experiences' },
    { title: 'Marriage Garden', text: 'Fairytale venue for dream destination weddings' },
  ];

  return (
    <div className="pt-24 pb-20 bg-[#f7f4ed] min-h-screen text-slate-800">
      
      {/* Hero Header Banner */}
      <section className="relative h-80 sm:h-96 flex items-center justify-center text-center text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury Stays Banner"
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a291c] via-black/30 to-transparent" />
        
        <div className="relative z-10 max-w-4xl px-4 space-y-3">
          <span className="text-[#cfa353] text-xs font-semibold tracking-[0.25em] uppercase font-sans">
            RESORT KEYS • ESCAPE. RELAX. REJUVENATE.
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-medium text-white">
            Luxury Stays & Accommodations
          </h1>
          <p className="text-gray-200 text-sm sm:text-base max-w-xl mx-auto font-light">
            Immerse yourself in world-class hospitality, tranquil nature views, and exquisite comfort in Rajasthan’s Aravalli Hills.
          </p>
        </div>
      </section>

      {/* Resort Keys Highlight Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-amber-900/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resortKeys.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-full bg-[#f6ebd6] text-[#cfa353] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-slate-900 text-base">{item.title}</h4>
                <p className="text-xs text-gray-500 font-sans mt-0.5">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Accommodations List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {accommodations.map((room, idx) => (
          <div
            key={idx}
            className={`bg-white rounded-3xl overflow-hidden shadow-xl border border-amber-900/10 grid grid-cols-1 lg:grid-cols-12 gap-0 hover:shadow-2xl transition-all duration-300 ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image Column */}
            <div className="lg:col-span-6 relative h-72 sm:h-96 lg:h-auto overflow-hidden">
              <img
                src={room.image}
                alt={room.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#0d3423] text-[#cfa353] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                {room.price}
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-[#cfa353] text-xs font-semibold tracking-widest uppercase block">
                  {room.subtitle}
                </span>
                <h3 className="text-3xl font-serif font-bold text-[#0a291c]">{room.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light">{room.description}</p>
                
                {/* Amenities List */}
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2.5">
                    {room.amenities.map((aItem, aIdx) => (
                      <div key={aIdx} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#cfa353]" />
                        <span>{aItem}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Booking CTA Button */}
              <div>
                <a
                  href="/contact?interest=stay"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#0d3423] hover:bg-[#071a12] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-lg hover:scale-105"
                >
                  <Calendar className="w-4 h-4 text-[#cfa353]" />
                  <span>BOOK THIS ROOM</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Booking Partners Footer Banner */}
      <section className="bg-[#0a291c] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="text-2xl font-serif font-semibold text-white">Official Hospitality Booking Partners</h3>
          <p className="text-xs text-gray-300 max-w-lg mx-auto">
            Book directly with us for best price guarantee or through our trusted global OTA partners.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 pt-2">
            <span className="px-6 py-2 rounded-xl bg-white/10 text-white font-bold text-sm border border-white/15">Booking.com</span>
            <span className="px-6 py-2 rounded-xl bg-white/10 text-white font-bold text-sm border border-white/15">Agoda</span>
            <span className="px-6 py-2 rounded-xl bg-white/10 text-white font-bold text-sm border border-white/15">MakeMyTrip</span>
          </div>
        </div>
      </section>

    </div>
  );
};
