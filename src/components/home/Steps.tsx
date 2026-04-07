"use client";

import { motion, Variants } from "framer-motion";

export function Steps() {
  const steps = [
    {
      num: 1,
      title: "Pick Your Route",
      desc: "Select pickup and drop locations, date, and preferred time for your trip."
    },
    {
      num: 2,
      title: "Confirm Fare",
      desc: "Get an instant transparent fare quote and confirm your booking with one click."
    },
    {
      num: 3,
      title: "Enjoy The Ride",
      desc: "Track your driver in real-time and travel in complete comfort and safety."
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#121826] mb-4 tracking-tight">Simple 3-Step Booking</h2>
          <p className="text-slate-600 text-lg">From clicks to comfort - here's how we get you to your destination.</p>
        </motion.div>

        <div className="relative">
          {/* Dashed line connecting steps (hidden on vertical small screens) */}
          <div className="hidden md:block absolute top-[2.5rem] left-[15%] right-[15%] border-t-[3px] border-dashed border-slate-300 z-0"></div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10"
          >
            {steps.map((step) => (
              <motion.div variants={itemVariants} key={step.num} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center text-[1.75rem] font-bold text-slate-800 shadow-lg shadow-slate-200/50 mb-8 mx-auto group-hover:border-[#FACC15] group-hover:bg-[#FACC15] transition-all duration-300 group-hover:-translate-y-2">
                  {step.num}
                </div>
                <h3 className="text-[1.3rem] font-bold text-[#1A1A1A] mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed max-w-sm font-medium">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
