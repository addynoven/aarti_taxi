import { Phone, MessageCircle, ShieldCheck } from "lucide-react";

export function ContactHero() {
  return (
    <div className="pt-0 lg:pt-8">
      <div className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 font-extrabold px-3 py-1.5 rounded-full text-[0.65rem] mb-6 uppercase tracking-widest shadow-sm border border-green-200">
        <ShieldCheck className="w-3 h-3" /> We're here 24/7
      </div>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight mb-8">
        Let's Get You <span className="text-[#926F34] block mt-1">Moving.</span>
      </h1>
      <p className="text-slate-600 text-[1.1rem] font-medium leading-relaxed max-w-sm mb-12">
        Your urban concierge is just a message away. Whether it's a cross-city journey or a quick airport run, we've got you covered.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="tel:+917838747009" className="inline-flex justify-center items-center gap-2 bg-[#FACC15] hover:bg-[#EAB308] text-slate-900 font-bold py-3.5 px-8 rounded-full transition-all duration-200 ease-in-out shadow-sm text-sm">
          <Phone className="w-4 h-4" /> Click to Call
        </a>
        <a href="https://wa.me/917838747009" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-2 bg-[#00A859] hover:bg-green-700 text-white font-bold py-3.5 px-8 rounded-full transition-all duration-200 ease-in-out shadow-sm text-sm">
          <MessageCircle className="w-4 h-4" /> WhatsApp Now
        </a>
      </div>
    </div>
  );
}
