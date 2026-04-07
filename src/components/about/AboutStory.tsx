export function AboutStory() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Side: Image + Quote */}
        <div className="lg:col-span-5 relative">
          <div className="relative h-[550px] rounded-[1.5rem] overflow-hidden shadow-sm">
            <img 
              src="/images/about/founder.png" 
              alt="Aarshyam Mishra" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          {/* Quote floating card */}
          <div className="absolute -bottom-8 -right-4 lg:-right-16 bg-[#FACC15] p-8 rounded-[1rem] shadow-md max-w-[280px]">
            <div className="text-slate-900 font-black text-4xl leading-none mb-4 absolute top-4 left-6 opacity-30">"</div>
            <p className="text-slate-900 font-bold text-sm leading-relaxed mb-1 relative z-10 pt-2">
              "Reliability shouldn't be a luxury; it's a basic promise we owe to every traveler in India."
            </p>
          </div>
        </div>

        {/* Right Side: Text content */}
        <div className="lg:col-span-6 lg:col-start-7 pt-16 lg:pt-0">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1A1A1A] mb-8 tracking-tight">
            A Vision Born on the Highway
          </h2>
          <p className="text-slate-600 text-[1rem] font-medium leading-loose mb-6">
            Aarti Taxi Services was founded with a single mission: to eliminate the uncertainty of Indian road travel. Our journey inspired by the resilience of local drivers and the beauty of intercity routes, envisioned a service that combined traditional hospitality with modern safety standards.
          </p>
          <p className="text-slate-600 text-[1rem] font-medium leading-loose mb-10">
            We believe in the dignity of our driver partners and the peace of mind of our passengers. Every ride is curated to ensure you arrive not just at your destination, but in the right frame of mind.
          </p>
          <div>
            <h4 className="font-extrabold text-[#1A1A1A]">Aarshyam Mishra</h4>
            <p className="text-[#CA8A04] font-bold text-xs uppercase tracking-widest mt-1">Founder & CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
}
