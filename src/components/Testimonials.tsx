import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from '../data/resort';

export const Testimonials: React.FC = () => {

  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Get 3 visible items with circular wrapping
  const visibleTestimonials = [
    testimonials[startIndex % testimonials.length],
    testimonials[(startIndex + 1) % testimonials.length],
    testimonials[(startIndex + 2) % testimonials.length],
  ];

  return (
    <section className="bg-white py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2">
            <div className="w-2.5 h-2.5 bg-[#cfa353] rotate-45" />
          </div>
          <span className="text-[#cfa353] text-xs font-semibold tracking-[0.25em] uppercase block">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-medium text-[#0a291c]">
            Guests from the resort
          </h2>
        </div>

        {/* 3 Interactive Testimonial Cards Slider */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 transition-all duration-500">
          {visibleTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 shadow-xl border border-amber-900/10 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 min-h-[280px]"
            >
              <div className="space-y-4">
                {/* Gold Quote Icon */}
                <FaQuoteLeft className="text-[#cfa353]/40 text-3xl" />

                {/* 5 Gold Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 fill-[#cfa353] text-[#cfa353]" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-gray-600 text-xs sm:text-sm font-sans leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3.5 pt-6 border-t border-gray-100 mt-6">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#cfa353]"
                />
                <div>
                  <h4 className="text-sm font-serif font-bold text-slate-900">
                    {item.name}
                  </h4>
                  <span className="text-[11px] text-gray-500 font-sans block">
                    {item.city}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls at Bottom */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            type="button"
            onClick={handlePrev}
            className="w-11 h-11 rounded-full border border-amber-900/20 bg-white flex items-center justify-center text-slate-700 hover:border-[#cfa353] hover:text-white hover:bg-[#cfa353] transition-all shadow-md active:scale-95"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2.5">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setStartIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  startIndex === idx ? 'w-8 bg-[#cfa353]' : 'w-2.5 bg-gray-300 hover:bg-[#cfa353]/50'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="w-11 h-11 rounded-full border border-amber-900/20 bg-white flex items-center justify-center text-slate-700 hover:border-[#cfa353] hover:text-white hover:bg-[#cfa353] transition-all shadow-md active:scale-95"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
