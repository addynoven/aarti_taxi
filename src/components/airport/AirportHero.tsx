"use client";

import { useState } from "react";
import { Star, MapPin, Plane } from "lucide-react";

export function AirportHero() {
  const [formData, setFormData] = useState({
    pickup: "",
    airport: "Delhi IGI Airport (DEL)",
    date: "",
    time: "",
  });

  const handleCheckRates = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi! I need to check rates for an airport transfer:\n*Pickup:* ${formData.pickup}\n*Airport:* ${formData.airport}\n*Date:* ${formData.date}\n*Time:* ${formData.time}`;
    window.open(`https://wa.me/917838747009?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 min-h-[600px] flex items-center border-b border-slate-200">
      
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80" 
          alt="Modern Airport Terminal" 
          className="w-full h-full object-cover transform scale-105 opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-100/90 via-slate-100/70 to-slate-100/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-100 via-transparent to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 bg-[#DCFCE7] text-[#166534] font-extrabold px-3 py-1.5 rounded-full text-[0.65rem] mb-6 uppercase tracking-widest shadow-sm border border-green-200">
              <Star className="w-3 h-3 fill-[#166534]" /> 4.9/5 RATING • 10,000+ RIDES
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight mb-6">
              Punctual & Stress-Free <span className="text-[#CA8A04]">Airport Transfers</span><br/>Across India
            </h1>
            
            <p className="text-slate-600 text-sm md:text-base font-bold leading-relaxed mb-4 max-w-lg">
              24/7 Doorstep Pickup | Professional Drivers | No Hidden Charges
            </p>
          </div>

          <div className="lg:col-span-5 lg:pl-10">
            <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] p-8 shadow-xl border border-white/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100/50 blur-3xl rounded-full pointer-events-none"></div>
              
              <h3 className="text-xl font-extrabold text-[#1A1A1A] mb-8 tracking-tight">Book Your Transfer</h3>
              
              <form onSubmit={handleCheckRates} className="space-y-5 relative z-10">
                <div>
                  <label className="block text-[0.65rem] font-bold text-slate-500 uppercase tracking-widest mb-2">Pickup Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="text" 
                      required
                      placeholder="Enter area or landmark"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#CA8A04] focus:ring-1 focus:ring-[#CA8A04] rounded-xl pl-11 pr-4 py-3.5 text-sm font-medium text-slate-900 outline-none transition-all"
                      value={formData.pickup}
                      onChange={(e) => setFormData({...formData, pickup: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[0.65rem] font-bold text-slate-500 uppercase tracking-widest mb-2">Select Airport</label>
                  <div className="relative">
                    <Plane className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <select 
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#CA8A04] focus:ring-1 focus:ring-[#CA8A04] rounded-xl pl-11 pr-4 py-3.5 text-sm font-medium text-slate-900 outline-none transition-all appearance-none"
                      value={formData.airport}
                      onChange={(e) => setFormData({...formData, airport: e.target.value})}
                    >
                      <option>Delhi IGI Airport (DEL)</option>
                      <option>Mumbai CSIA (BOM)</option>
                      <option>Bangalore KIA (BLR)</option>
                      <option>Hyderabad RGIA (HYD)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[0.65rem] font-bold text-slate-500 uppercase tracking-widest mb-2">Date</label>
                    <input 
                      type="date" 
                      required
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#CA8A04] focus:ring-1 focus:ring-[#CA8A04] rounded-xl px-4 py-3.5 text-sm font-medium text-slate-900 outline-none transition-all"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-[0.65rem] font-bold text-slate-500 uppercase tracking-widest mb-2">Time</label>
                    <input 
                      type="time" 
                      required
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#CA8A04] focus:ring-1 focus:ring-[#CA8A04] rounded-xl px-4 py-3.5 text-sm font-medium text-slate-900 outline-none transition-all"
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#CA8A04] text-white hover:bg-[#A16207] font-bold py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg mt-2"
                >
                  Check Rates
                </button>
              </form>

            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
