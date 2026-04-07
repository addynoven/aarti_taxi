"use client";

import { MessageCircle, PhoneCall } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 min-h-[90vh] flex items-center">
      {/* High-Impact Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero_bg.png"
          alt="Luxury Taxi at Sunset"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left mb-16 lg:mb-0"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-2xl">
              Ride Anywhere in <span className="text-brand drop-shadow-lg">India</span> with Aarti Taxi.
            </h1>
            <p className="text-lg lg:text-xl text-slate-200 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Experience kinetic elegance with our premium mobility services. From airport transfers to pan-India corporate travel, we define the precision concierge.
            </p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#fleet" className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold text-white bg-brand hover:bg-brand-hover rounded-md shadow-[0_0_30px_rgba(224,129,18,0.4)] hover:shadow-[0_0_40px_rgba(224,129,18,0.6)] transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm">
                EXPLORE FLEET
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Premium Glassmorphism Contact CTA */}
            <div className="backdrop-blur-xl bg-white/95 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-6 sm:p-8 lg:p-12 border border-white/60 relative overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -ml-10 -mb-10"></div>
              
              <div className="mx-auto w-16 h-1.5 bg-brand rounded-full mb-6 sm:mb-8"></div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#121826] mb-4 relative z-10 tracking-tight">Instant Booking</h2>
              <p className="text-slate-600 font-medium mb-8 sm:mb-10 relative z-10 leading-relaxed text-base sm:text-lg">
                Skip the forms. Connect with our dispatch team instantly and get your premium ride confirmed in minutes.
              </p>
              
              <div className="space-y-4 relative z-10">
                <a 
                  href="https://wa.me/917838747009?text=Hi!%20I%20would%20like%20to%20book%20a%20taxi." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ backgroundColor: '#25D366' }}
                  className="w-full flex items-center justify-center gap-3 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-emerald-500/30 transition-all duration-300 text-lg transform hover:-translate-y-1 hover:brightness-105"
                >
                  <MessageCircle className="w-6 h-6" />
                  Chat on WhatsApp
                </a>

                <a 
                  href="tel:+917838747009" 
                  className="w-full flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-[#121826] border-2 border-slate-200 font-bold py-4 px-8 rounded-xl shadow-sm transition-all duration-300 text-lg transform hover:-translate-y-1"
                >
                  <PhoneCall className="w-6 h-6 text-brand" />
                  Call 7838747009
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
