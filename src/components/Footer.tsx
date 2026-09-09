import React from 'react';
import { Link } from 'react-router-dom';
import { Palmtree } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0d3423] text-white pt-16 pb-8 border-t border-[#cfa353]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Column 1: Brand & Slogan */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-[#cfa353] bg-[#0a291c] flex items-center justify-center">
                <Palmtree className="w-5 h-5 text-[#cfa353]" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-serif font-bold text-lg leading-none tracking-wider">
                  JOY CLUB
                </span>
                <span className="text-[8px] text-[#cfa353] tracking-[0.25em] font-semibold uppercase mt-0.5">
                  ADVENTURE RESORT
                </span>
              </div>
            </Link>
            
            <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              Joy Adventure Resort, Sanskriti Village, Garjeda — lake cottages, farmhouses and 17 games on the Diggi Malpura Jaipur Highway.
            </p>
            <p className="text-[#cfa353] text-xs">+91 800 0928 080 · info@joyadventureresort.com</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-base font-serif font-semibold text-white">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2.5 text-xs text-gray-300 font-light">
              <Link to="/" className="hover:text-[#cfa353] transition-colors">Home</Link>
              <Link to="/stay" className="hover:text-[#cfa353] transition-colors">Stay</Link>
              <Link to="/wellness" className="hover:text-[#cfa353] transition-colors">Wellness</Link>
              <Link to="/weddings" className="hover:text-[#cfa353] transition-colors">Weddings</Link>
              <Link to="/gallery" className="hover:text-[#cfa353] transition-colors">Gallery</Link>
              <Link to="/adventure" className="hover:text-[#cfa353] transition-colors">Adventure</Link>
              <Link to="/packages" className="hover:text-[#cfa353] transition-colors">Packages</Link>
              <Link to="/contact" className="hover:text-[#cfa353] transition-colors">Contact Us</Link>
            </div>
          </div>

          {/* Column 3: Newsletter */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-base font-serif font-semibold text-white">
              Newsletter
            </h4>
            <p className="text-xs text-gray-300 font-light">
              Get seasonal offers and packages.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3 pt-1">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-xl bg-[#082317] border border-white/10 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#cfa353]"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#cfa353] hover:bg-[#b88e40] text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Joy Adventure Resort. All Rights Reserved.</p>
          
          <div className="flex items-center space-x-5 text-gray-300">
            <a href="#facebook" className="hover:text-[#cfa353] transition-colors"><FaFacebookF className="w-3.5 h-3.5" /></a>
            <a href="#instagram" className="hover:text-[#cfa353] transition-colors"><FaInstagram className="w-3.5 h-3.5" /></a>
            <a href="#twitter" className="hover:text-[#cfa353] transition-colors"><FaTwitter className="w-3.5 h-3.5" /></a>
            <a href="#youtube" className="hover:text-[#cfa353] transition-colors"><FaYoutube className="w-3.5 h-3.5" /></a>
          </div>

          <div className="flex items-center space-x-4 text-gray-400">
            <Link to="/contact" className="hover:text-[#cfa353] transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="/contact" className="hover:text-[#cfa353] transition-colors">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
