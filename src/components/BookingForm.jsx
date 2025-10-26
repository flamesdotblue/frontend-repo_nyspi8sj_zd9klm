import React, { useEffect, useMemo, useState } from 'react';
import { Calendar, Clock, PawPrint, User, Phone } from 'lucide-react';

const petTypes = ['Dog', 'Cat', 'Rabbit', 'Bird', 'Other'];

const BookingForm = ({ preselectedService, preselectedSlot }) => {
  const [service, setService] = useState(preselectedService || 'Trainer');
  const [slot, setSlot] = useState(preselectedSlot || '');
  const [date, setDate] = useState('');
  const [owner, setOwner] = useState({ name: '', email: '', phone: '' });
  const [pet, setPet] = useState({ name: '', type: 'Dog', breed: '', age: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) setService(preselectedService);
  }, [preselectedService]);

  useEffect(() => {
    if (preselectedSlot) setSlot(preselectedSlot);
  }, [preselectedSlot]);

  const disabled = useMemo(() => {
    return !service || !date || !slot || !owner.name || !owner.phone || !pet.name;
  }, [service, date, slot, owner, pet]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { service, slot, date, owner, pet };
    console.log('Booking submitted:', payload);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    // Reset basic fields but keep service for convenience
    setSlot('');
    setDate('');
    setOwner({ name: '', email: '', phone: '' });
    setPet({ name: '', type: 'Dog', breed: '', age: '' });
  };

  return (
    <section id="booking" className="py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-medium">
            <PawPrint size={14} /> Book a slot
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Share details and confirm your appointment
          </h2>
          <p className="mt-2 text-slate-600">We’ll match you with a nearby expert and send instant confirmation.</p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl bg-white border border-black/5 shadow-xl p-6 grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Service</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-300"
              >
                <option>Trainer</option>
                <option>Groomer</option>
                <option>Vet</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Preferred Date</label>
              <div className="mt-1 relative">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-300"
                />
                <Calendar size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Time Slot</label>
              <div className="mt-1 relative">
                <input
                  type="text"
                  placeholder="e.g., 11:00 AM"
                  value={slot}
                  onChange={(e) => setSlot(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-300"
                />
                <Clock size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
              <p className="mt-1 text-xs text-slate-500">Tip: Pick a slot from the cards above to auto-fill here.</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Your Name</label>
                <div className="mt-1 relative">
                  <input
                    type="text"
                    value={owner.name}
                    onChange={(e) => setOwner({ ...owner, name: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-300"
                  />
                  <User size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Phone</label>
                <div className="mt-1 relative">
                  <input
                    type="tel"
                    value={owner.phone}
                    onChange={(e) => setOwner({ ...owner, phone: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-300"
                  />
                  <Phone size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Email (optional)</label>
              <input
                type="email"
                value={owner.email}
                onChange={(e) => setOwner({ ...owner, email: e.target.value })}
                className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-300"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Pet Name</label>
                <input
                  type="text"
                  value={pet.name}
                  onChange={(e) => setPet({ ...pet, name: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Pet Type</label>
                <select
                  value={pet.type}
                  onChange={(e) => setPet({ ...pet, type: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-300"
                >
                  {petTypes.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Breed</label>
                <input
                  type="text"
                  value={pet.breed}
                  onChange={(e) => setPet({ ...pet, breed: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Age</label>
                <input
                  type="text"
                  value={pet.age}
                  onChange={(e) => setPet({ ...pet, age: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-300"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-2 flex items-center justify-between pt-2">
            <p className="text-xs text-slate-500">We will never share your information. By booking, you agree to our terms and privacy policy.</p>
            <button
              type="submit"
              disabled={disabled}
              className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-white font-semibold shadow-lg transition ${
                disabled ? 'bg-slate-300 cursor-not-allowed' : 'bg-gradient-to-r from-rose-500 to-pink-500 hover:shadow-rose-300/80 active:scale-[0.98]'
              }`}
            >
              Confirm Booking
            </button>
          </div>
        </form>

        {submitted && (
          <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-800 px-4 py-3">
            Booking submitted! We\'ll text you a confirmation shortly.
          </div>
        )}
      </div>
    </section>
  );
};

export default BookingForm;
