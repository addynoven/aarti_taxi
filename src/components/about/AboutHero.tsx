export function AboutHero() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 lg:mb-32">
      <div className="inline-block bg-green-100 text-green-700 font-extrabold px-4 py-1.5 rounded-full text-[0.7rem] mb-6 uppercase tracking-widest">
        About Us
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#1A1A1A] max-w-2xl leading-tight tracking-tight">
          The Urban <span className="text-[#CA8A04]">Curator</span> of Indian Roads.
        </h1>
        <p className="text-slate-600 text-[1.05rem] font-medium leading-relaxed max-w-sm pb-2">
          Beyond just a ride, we provide a reliable sanctuary for your journeys across the diverse landscapes of India.
        </p>
      </div>
    </div>
  );
}
