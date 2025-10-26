import React, { useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BookingForm from './components/BookingForm';

function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState('');
  const bookingRef = useRef(null);

  const scrollToBooking = () => {
    if (bookingRef.current) {
      bookingRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.hash = '#booking';
    }
  };

  const handlePickSlot = (service, slot) => {
    setSelectedService(service);
    setSelectedSlot(slot);
    scrollToBooking();
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar onBookClick={scrollToBooking} />
      <main>
        <Hero onBookClick={scrollToBooking} />
        <Services onPickSlot={handlePickSlot} />
        <div ref={bookingRef}>
          <BookingForm preselectedService={selectedService} preselectedSlot={selectedSlot} />
        </div>
      </main>

      <footer className="border-t border-black/5 bg-gradient-to-tr from-white to-rose-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Paws & Buddy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-rose-600">Services</a>
            <a href="#booking" className="hover:text-rose-600">Booking</a>
            <a href="#about" className="hover:text-rose-600">About</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
