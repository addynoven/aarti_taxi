"use client";

import { Banknote, ShieldCheck, Clock, Sparkles, Headset } from "lucide-react";
import { motion } from "framer-motion";

export function Trust() {
  const reasons = [
    {
      icon: Banknote,
      title: "No Hidden Charges",
      desc: "All-inclusive pricing with complete transparency."
    },
    {
      icon: ShieldCheck,
      title: "Verified Drivers",
      desc: "Background-checked professional chauffeurs."
    },
    {
      icon: Clock,
      title: "On-time Pickup",
      desc: "We value your time. Guaranteed punctuality."
    },
    {
      icon: Sparkles,
      title: "Clean Vehicles",
      desc: "Sanitized, well-maintained, and comfortable rides."
    },
    {
      icon: Headset,
      title: "24/7 Support",
      desc: "Round-the-clock assistance for all your journeys."
    }
  ];

  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-50 rounded-full blur-3xl opacity-50 -mr-40 -mt-40 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/50 transform transition-transform hover:scale-[1.02] duration-500">
              <img 
                src="/images/image.png" 
                alt="Professional Taxi Driver" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="flex flex-col">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[#121826] mb-12 tracking-tight"
            >
              Why Thousands Trust Us
            </motion.h2>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8 lg:space-y-6"
            >
              {reasons.map((reason, i) => {
                const Icon = reason.icon;
                return (
                  <motion.div variants={itemVariants} key={i} className="flex items-start gap-6 group">
                    <div className="w-[3.25rem] h-[3.25rem] rounded-2xl bg-amber-100 flex items-center justify-center flex-shrink-0 shadow-sm transition-colors duration-300 group-hover:bg-[#FACC15]">
                      <Icon className="w-6 h-6 text-amber-900 transition-colors duration-300 group-hover:text-slate-900" strokeWidth={2.5} />
                    </div>
                    <div className="mt-1 flex-1">
                      <h4 className="text-[1.15rem] font-bold text-[#1A1A1A] mb-1.5 leading-tight">{reason.title}</h4>
                      <p className="text-slate-600 text-[1rem] font-medium leading-snug">{reason.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
