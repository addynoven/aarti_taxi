"use client";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const defaultMsg = encodeURIComponent("Hi Aarti Taxi! I need to book a cab.");
  
  return (
    <a 
      href={`https://wa.me/917838747009?text=${defaultMsg}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#00A859] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-green-600 transition-all duration-300 flex items-center justify-center cursor-pointer"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
