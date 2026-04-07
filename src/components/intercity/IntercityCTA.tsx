import { Phone, MessageCircle } from "lucide-react";

export function IntercityCTA() {
  const waMsg = encodeURIComponent("Hi Aarti Taxi, I want to book an outstation ride.");

  return (
    <div className="bg-white py-24 pb-32 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#1A1A1A] mb-2 leading-[1.1]">
          Book Your Outstation<br/>
          <span className="text-[#CA8A04]">Ride Now</span>
        </h2>
        
        <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed max-w-lg mx-auto mb-10 mt-6">
          Don't wait for the weekend. Your next adventure is just a call or a text away. Experience India like never before.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+917838747009"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#CA8A04] text-white hover:bg-[#A16207] font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:-translate-y-1"
          >
            <Phone className="w-5 h-5 fill-white shrink-0" />
            <span>Call to Book</span>
          </a>

          <a
            href={`https://wa.me/917838747009?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
             className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#00A859] text-white hover:bg-green-700 font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5 shrink-0" />
            <span>WhatsApp Us</span>
          </a>
        </div>
        
      </div>
    </div>
  );
}
