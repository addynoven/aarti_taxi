import { Phone, MessageCircle } from "lucide-react";

export function RouteCTA() {
  const whatsappMessage = encodeURIComponent("Hi, I want to book a taxi from Delhi to Jaipur.");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <div className="bg-[#1A1A1A] rounded-[2.5rem] p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-[#CA8A04]/10 blur-3xl pointer-events-none"></div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Ready for the Pink City?
          </h2>
          <p className="text-slate-400 font-medium text-sm md:text-base max-w-md mx-auto mb-10 leading-relaxed">
            Skip the bus queues and unreliable drivers. Book your private sanctuary on wheels today.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="tel:+917838747009" 
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#FACC15] text-[#1A1A1A] font-bold px-8 py-3.5 rounded-full hover:bg-[#EAB308] transition-colors shadow-sm text-sm"
            >
              <Phone className="w-4 h-4" /> Call for Booking
            </a>
            <a 
              href={`https://wa.me/917838747009?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#00A859] text-white font-bold px-8 py-3.5 rounded-full hover:bg-green-700 transition-colors shadow-sm text-sm"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
