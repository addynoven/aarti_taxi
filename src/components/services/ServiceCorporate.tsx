export function ServiceCorporate() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center bg-white rounded-[2.5rem] p-4 pr-12 shadow-sm border border-slate-100">
      <div className="relative h-[250px] lg:h-[300px] w-full rounded-[2rem] overflow-hidden">
         <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80" alt="Corporate Exec" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="py-8">
        <h2 className="text-2xl lg:text-3xl font-extrabold text-[#1A1A1A] mb-4">Corporate Rentals</h2>
        <p className="text-slate-600 text-[1rem] font-medium mb-8 leading-relaxed max-w-md">
          Professional drivers and premium sedans for business professionals and executives who value privacy and punctuality.
        </p>
        <a href="tel:+917838747009" className="inline-flex items-center justify-center bg-[#1A1A1A] text-white font-bold px-7 py-3 rounded-full hover:bg-black transition-colors shadow-sm text-sm">
          Inquire for Business
        </a>
      </div>
    </div>
  );
}
