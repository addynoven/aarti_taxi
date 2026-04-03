"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Services() {
  const services = [
    {
      title: "One-way",
      description: "Punctual inter-city travel with no hidden return charges. Pay only for what you travel.",
      image: "/images/service_city.png"
    },
    {
      title: "Round-trip",
      description: "Perfect for weekend getaways and multi-day tours with verified premium drivers.",
      image: "/images/service_nature.png"
    },
    {
      title: "Airport Transfers",
      description: "Timely pickups and drops for all major Indian airports with meet-and-greet options.",
      image: "/images/service_airport.png"
    },
    {
      title: "Corporate Travel",
      description: "Premium fleet management for business professionals with automated invoicing.",
      image: "/images/service_corporate.png"
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="text-4xl font-bold text-heading mb-4">Our Services</h2>
          <p className="text-lg text-slate-600">Tailored mobility solutions designed for comfort, reliability, and corporate excellence across India.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative rounded-2xl overflow-hidden h-96 shadow-lg shadow-slate-200/50 cursor-pointer"
            >
              <div className="absolute inset-0 w-full h-full">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{service.title}</h3>
                <p className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-3 leading-relaxed text-sm">
                  {service.description}
                </p>
                <div className="h-1 w-12 bg-brand mt-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
