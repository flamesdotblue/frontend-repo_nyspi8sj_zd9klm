import React from 'react';
import { PawPrint, Phone, Calendar } from 'lucide-react';

const Navbar = ({ onBookClick }) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-pink-500 to-rose-500 text-white shadow-lg shadow-rose-200/40">
              <PawPrint size={20} />
            </div>
            <span className="text-xl font-semibold tracking-tight">Paws & Buddy</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#services" className="hover:text-rose-600 transition-colors">Services</a>
            <a href="#booking" className="hover:text-rose-600 transition-colors">Booking</a>
            <a href="#about" className="hover:text-rose-600 transition-colors">About</a>
          </nav>

          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-2 text-sm font-medium shadow-lg shadow-rose-200/50 hover:shadow-rose-300/70 active:scale-[0.98] transition"
          >
            <Calendar size={16} />
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
