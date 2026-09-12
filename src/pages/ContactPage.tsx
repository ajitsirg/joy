import React, { useState } from 'react';
import { MapPin, Phone, Mail, Building, Send, Heart, Award, Users, TrendingUp, Shield } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const interest = new URLSearchParams(window.location.search).get('interest');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType:
      interest === 'wedding' || interest === 'corporate'
        ? 'Theme Wedding / Birthday / Corporate'
        : interest === 'stay'
          ? 'Swiss Cottage / Farmhouse Stay'
          : 'Swiss Cottage / Farmhouse Stay',
    message: '',
  });

  const submitInquiry = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `Joy Club inquiry: ${form.inquiryType}`;
    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Inquiry type: ${form.inquiryType}`,
      '',
      'Requirements:',
      form.message,
    ].join('\n');
    window.location.href = `mailto:info@joyadventureresort.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const coreValues = [
    { title: 'TRUST', desc: 'Built on honesty and transparency', icon: <Shield className="w-5 h-5 text-[#cfa353]" /> },
    { title: 'QUALITY', desc: 'Committed to excellence in every experience', icon: <Award className="w-5 h-5 text-[#cfa353]" /> },
    { title: 'TOGETHERNESS', desc: 'Stronger together, better tomorrow', icon: <Users className="w-5 h-5 text-[#cfa353]" /> },
    { title: 'GROWTH', desc: 'Sustainable growth for a better future', icon: <TrendingUp className="w-5 h-5 text-[#cfa353]" /> },
    { title: 'VALUES', desc: 'Creating value for all our stakeholders', icon: <Heart className="w-5 h-5 text-[#cfa353]" /> },
  ];

  return (
    <div className="pt-24 pb-16 bg-[#f7f4ed] min-h-screen text-slate-900 selection:bg-[#cfa353]">
      <div className="max-w-[1540px] mx-auto px-2 sm:px-4 space-y-6">
        
        {/* Main Outer Card Wrapper */}
        <div className="bg-white rounded-[2.5rem] p-4 sm:p-8 lg:p-10 shadow-2xl border border-amber-900/10 space-y-8">
          
          {/* Section 1: THANK YOU Gratitude Banner (Brochure Page 11 / Screenshot 4) */}
          <div className="bg-[#0a291c] text-white rounded-3xl p-6 sm:p-10 border border-[#cfa353]/30 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[#cfa353] text-xs font-semibold tracking-[0.25em] uppercase">
                JOY CLUB ADVENTURE RESORT • GRATITUDE & SUPPORT
              </span>
              <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#cfa353]">
                THANK YOU
              </h1>
              <p className="text-lg font-serif italic text-amber-200">
                For Your Trust & Support
              </p>
              <p className="text-xs sm:text-sm text-gray-200 font-light leading-relaxed max-w-2xl">
                Your trust inspires us to create extraordinary experiences and build a better tomorrow together. We are grateful to have you as a part of the Joy Club family.
              </p>
            </div>

            <div className="lg:col-span-4 bg-white/5 border border-white/10 p-6 rounded-2xl text-center space-y-2 shadow-md">
              <span className="text-xs font-bold text-[#cfa353] uppercase tracking-wider block">TOGETHER</span>
              <h3 className="text-2xl font-serif font-bold text-white">WE GROW</h3>
              <h3 className="text-2xl font-serif font-bold text-white">WE ACHIEVE</h3>
              <h3 className="text-2xl font-serif font-bold text-[#cfa353]">WE CELEBRATE</h3>
            </div>
          </div>

          {/* 5 Core Values Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {coreValues.map((v, idx) => (
              <div key={idx} className="bg-gray-50 p-5 rounded-2xl border border-gray-200 text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#0a291c] text-[#cfa353] flex items-center justify-center mx-auto shadow-md">
                  {v.icon}
                </div>
                <h4 className="font-serif font-bold text-slate-900 text-xs">{v.title}</h4>
                <p className="text-[11px] text-gray-500 font-light leading-snug">{v.desc}</p>
              </div>
            ))}
          </div>

          {/* Section 2: Contact Form & Addresses */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Direct Address Cards */}
            <div className="lg:col-span-5 space-y-4">
              <div className="space-y-2">
                <span className="text-[#cfa353] text-xs font-semibold tracking-widest uppercase">GET IN TOUCH</span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0a291c]">Direct Resort Contact</h3>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0a291c] text-[#cfa353] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] font-bold text-[#cfa353] uppercase block">RESORT ADDRESS</span>
                  <h4 className="font-serif font-bold text-slate-900 text-sm">Sanskriti Village</h4>
                  <p className="text-xs text-gray-600 font-light">Garjeda Village, LNT Road, Diggi Malpura Jaipur Highway, Jaipur, Rajasthan</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0a291c] text-[#cfa353] flex items-center justify-center shrink-0">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] font-bold text-[#cfa353] uppercase block">REGISTERED CORPORATE OFFICE</span>
                  <h4 className="font-serif font-bold text-slate-900 text-sm">Jaipur Earth Developers Pvt. Ltd.</h4>
                  <p className="text-xs text-gray-600 font-light">S B-1, Nityanand Nagar, Gandhi Path, Vaishali Nagar, Jaipur — 302021</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#cfa353]" />
                  <div>
                    <span className="text-[9px] font-bold text-gray-400 uppercase">CALL US</span>
                    <span className="text-xs font-bold text-slate-900 block">+91 800 0928 080</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#cfa353]" />
                  <div>
                    <span className="text-[9px] font-bold text-gray-400 uppercase">EMAIL US</span>
                    <span className="text-xs font-bold text-slate-900 block">info@joyadventureresort.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="lg:col-span-7 bg-gray-50 p-6 sm:p-8 rounded-3xl border border-gray-200 space-y-4">
              <div className="space-y-1">
                <span className="text-[#cfa353] text-xs font-semibold tracking-widest uppercase">SEND A MESSAGE</span>
                <h3 className="text-2xl font-serif font-bold text-[#0a291c]">Booking & General Inquiry</h3>
              </div>

              <form onSubmit={submitInquiry} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Your Full Name</label>
                    <input type="text" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Enter name" required className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-xs focus:outline-none focus:border-[#cfa353]" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Phone Number</label>
                    <input type="tel" value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} placeholder="+91 98765 43210" required className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-xs focus:outline-none focus:border-[#cfa353]" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Email Address</label>
                  <input type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="name@example.com" required className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-xs focus:outline-none focus:border-[#cfa353]" />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Inquiry Type</label>
                  <select value={form.inquiryType} onChange={(event) => setForm({ ...form, inquiryType: event.target.value })} className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-xs focus:outline-none focus:border-[#cfa353]">
                    <option>Swiss Cottage / Farmhouse Stay</option>
                    <option>Day Outing Package</option>
                    <option>Night Outing / Adventure Tents</option>
                    <option>Theme Wedding / Birthday / Corporate</option>
                    <option>Investor Membership Plan</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Message</label>
                  <textarea rows={3} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="Tell us your requirements..." required className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-xs focus:outline-none focus:border-[#cfa353]" />
                </div>

                <button type="submit" className="w-full py-3.5 rounded-xl bg-[#0a291c] hover:bg-[#071a12] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-lg flex items-center justify-center gap-2">
                  <Send className="w-4 h-4 text-[#cfa353]" />
                  <span>SUBMIT INQUIRY</span>
                </button>
              </form>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
