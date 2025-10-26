import React from 'react';
import { Star, PawPrint } from 'lucide-react';

const Hero = ({ onBookClick }) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-white" />

      <div className="absolute -left-24 -top-24 w-[28rem] h-[28rem] rounded-full bg-rose-200/40 blur-3xl" />
      <div className="absolute -right-24 -bottom-24 w-[28rem] h-[28rem] rounded-full bg-pink-200/40 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-black/5 text-rose-600 text-xs font-medium shadow-sm">
              <Star size={14} className="fill-rose-500 text-rose-500" />
              Trusted by pet parents in your city
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
              Care your buddy deserves, at your doorstep
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-xl">
              Paws & Buddy connects you with verified Trainers, Groomers, and Vets. Pick a time slot that fits, share your pet's details, and relax — we’ll handle the rest.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onBookClick}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 text-base font-semibold shadow-lg shadow-rose-200/60 hover:shadow-rose-300/80 active:scale-[0.98] transition"
              >
                <PawPrint size={18} />
                Book a Service
              </button>
              <a href="#services" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-rose-200 text-rose-700 bg-white/70 hover:bg-white transition">
                Explore Services
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 text-center">
              <div className="rounded-2xl bg-white p-4 shadow-sm border border-black/5">
                <div className="text-3xl font-bold text-slate-900">4.9</div>
                <div className="flex justify-center text-rose-500 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="fill-current" />
                  ))}
                </div>
                <div className="text-xs text-slate-500 mt-1">2k+ Happy Reviews</div>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm border border-black/5">
                <div className="text-3xl font-bold text-slate-900">10k+</div>
                <div className="text-xs text-slate-500 mt-1">Bookings Completed</div>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm border border-black/5">
                <div className="text-3xl font-bold text-slate-900">Verified</div>
                <div className="text-xs text-slate-500 mt-1">Experts Only</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-white border border-black/5 shadow-xl p-6 overflow-hidden">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-rose-100/50 via-transparent to-pink-100/40" />
              <img
                src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1600&auto=format&fit=crop"
                alt="Happy dog with groomer"
                className="w-full h-full object-cover rounded-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
