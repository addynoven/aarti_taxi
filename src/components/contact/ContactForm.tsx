"use client";

import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedMessage = encodeURIComponent(
      `Hello Aarti Taxi! My name is ${formData.name}. Phone: ${formData.phone}. Trip details: ${formData.details}`
    );
    window.open(`https://wa.me/917838747009?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-sm border border-slate-100 h-full">
      <h2 className="text-2xl font-extrabold text-[#1A1A1A] tracking-tight mb-8">Trip Inquiry</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[0.65rem] font-bold text-slate-500 uppercase tracking-widest mb-2">Full Name</label>
            <input 
              type="text" 
              required
              placeholder="Radha Krishna"
              className="w-full bg-[#F5F5F5] border border-transparent focus:border-[#CA8A04] focus:ring-1 focus:ring-[#CA8A04] rounded-xl px-4 py-3.5 text-sm font-medium text-slate-900 outline-none transition-all"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-[0.65rem] font-bold text-slate-500 uppercase tracking-widest mb-2">Phone Number</label>
            <input 
              type="tel" 
              required
              placeholder="+91 00000 00000"
              className="w-full bg-[#F5F5F5] border border-transparent focus:border-[#CA8A04] focus:ring-1 focus:ring-[#CA8A04] rounded-xl px-4 py-3.5 text-sm font-medium text-slate-900 outline-none transition-all"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className="block text-[0.65rem] font-bold text-slate-500 uppercase tracking-widest mb-2">Trip Details</label>
          <textarea 
            required
            rows={4}
            placeholder="From where to where? Date & Time?"
            className="w-full bg-[#F5F5F5] border border-transparent focus:border-[#CA8A04] focus:ring-1 focus:ring-[#CA8A04] rounded-xl px-4 py-3.5 text-sm font-medium text-slate-900 outline-none transition-all resize-none"
            value={formData.details}
            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-[#725422] text-white font-bold py-4 rounded-xl hover:bg-[#5C431A] transition-colors shadow-sm mt-2"
        >
          Request Callback
        </button>
      </form>
    </div>
  );
}
