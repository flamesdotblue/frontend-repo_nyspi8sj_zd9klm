import React from 'react';
import { PawPrint, Calendar, Clock, Star, MapPin } from 'lucide-react';

const services = [
  {
    key: 'Trainer',
    title: 'Professional Trainers',
    desc: 'Personalized training sessions for obedience, agility, and socialization.',
    rating: 4.9,
    price: '₹899',
    slots: ['09:00 AM', '11:00 AM', '02:00 PM', '05:00 PM'],
  },
  {
    key: 'Groomer',
    title: 'Premium Groomers',
    desc: 'Full-service grooming including bath, trim, nail care, and styling.',
    rating: 4.8,
    price: '₹1199',
    slots: ['10:00 AM', '01:00 PM', '03:30 PM', '06:00 PM'],
  },
  {
    key: 'Vet',
    title: 'Licensed Vets',
    desc: 'On-demand veterinary consultations and routine health checkups.',
    rating: 4.9,
    price: '₹1499',
    slots: ['08:30 AM', '12:30 PM', '04:00 PM', '07:30 PM'],
  },
];

const Services = ({ onPickSlot }) => {
  return (
    <section id="services" className="py-16 bg-gradient-to-b from-white to-rose-50/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-medium">
            <PawPrint size={14} /> Our Services
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Book trusted experts for your buddy
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
            Choose a service and reserve a slot that works for you. We’ll confirm instantly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div key={svc.key} className="group rounded-3xl bg-white border border-black/5 shadow-sm hover:shadow-xl transition overflow-hidden">
              <div className="h-40 w-full bg-gradient-to-br from-rose-100 to-pink-100" />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-900">{svc.title}</h3>
                  <div className="flex items-center gap-1 text-rose-600">
                    <Star size={16} className="fill-current" />
                    <span className="text-sm font-medium">{svc.rating}</span>
                  </div>
                </div>
                <p className="mt-2 text-slate-600 text-sm">{svc.desc}</p>

                <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2"><MapPin size={16} />At-home or in-clinic</div>
                  <div className="inline-flex items-center gap-2"><Calendar size={16} />From {svc.price}</div>
                </div>

                <div className="mt-5">
                  <div className="text-xs text-slate-500 mb-2 inline-flex items-center gap-1">
                    <Clock size={14} /> Available slots today
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {svc.slots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => onPickSlot(svc.key, slot)}
                        className="px-3 py-1.5 rounded-full border border-rose-200 text-rose-700 bg-rose-50 hover:bg-rose-100 hover:border-rose-300 text-sm font-medium transition"
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
