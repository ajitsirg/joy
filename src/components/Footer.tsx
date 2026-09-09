import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-[#0a291c] pt-14 pb-7 border-t border-[#0a291c]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#0a291c]/10">
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block">
              <img
                src="/brand/joy-hospitality-logo.png"
                alt="Joy Hospitality and Real Estate Group"
                className="w-64 max-w-full h-auto rounded-xl"
              />
            </Link>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm">
              Joy Adventure Resort, Sanskriti Village, Garjeda — lake cottages, farmhouses and 17 games on the Diggi Malpura Jaipur Highway.
            </p>
            <p className="text-[#8d6d2f] text-xs font-medium">+91 800 0928 080 · info@joyadventureresort.com</p>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xl font-serif font-semibold text-[#0a291c]">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2.5 text-xs text-slate-600">
              <Link to="/" className="hover:text-[#b88e40] transition-colors">Home</Link>
              <Link to="/stay" className="hover:text-[#b88e40] transition-colors">Stay</Link>
              <Link to="/wellness" className="hover:text-[#b88e40] transition-colors">Wellness</Link>
              <Link to="/weddings" className="hover:text-[#b88e40] transition-colors">Weddings</Link>
              <Link to="/gallery" className="hover:text-[#b88e40] transition-colors">Gallery</Link>
              <Link to="/adventure" className="hover:text-[#b88e40] transition-colors">Adventure</Link>
              <Link to="/packages" className="hover:text-[#b88e40] transition-colors">Packages</Link>
              <Link to="/contact" className="hover:text-[#b88e40] transition-colors">Contact Us</Link>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xl font-serif font-semibold text-[#0a291c]">
              Newsletter
            </h4>
            <p className="text-xs text-slate-600">
              Get seasonal offers and packages.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3 pt-1">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-xl bg-[#faf9f6] border border-[#0a291c]/15 text-xs text-[#0a291c] placeholder-slate-400 focus:outline-none focus:border-[#cfa353]"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#0a291c] hover:bg-[#164b34] text-white font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>

        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Joy Adventure Resort. All Rights Reserved.</p>
          
          <div className="flex items-center space-x-5 text-[#0a291c]">
            <a href="#facebook" className="hover:text-[#b88e40] transition-colors"><FaFacebookF className="w-3.5 h-3.5" /></a>
            <a href="#instagram" className="hover:text-[#b88e40] transition-colors"><FaInstagram className="w-3.5 h-3.5" /></a>
            <a href="#twitter" className="hover:text-[#b88e40] transition-colors"><FaTwitter className="w-3.5 h-3.5" /></a>
            <a href="#youtube" className="hover:text-[#b88e40] transition-colors"><FaYoutube className="w-3.5 h-3.5" /></a>
          </div>

          <div className="flex items-center space-x-4 text-slate-500">
            <Link to="/contact" className="hover:text-[#b88e40] transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="/contact" className="hover:text-[#b88e40] transition-colors">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
