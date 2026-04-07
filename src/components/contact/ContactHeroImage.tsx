export function ContactHeroImage() {
  return (
    <div className="relative rounded-[2rem] overflow-hidden shadow-xl group h-[450px]">
      <img src="/images/fleet/innova_crysta_taxi.png" alt="Pristine Taxi Fleet" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10 pointer-events-none">
        <h3 className="text-3xl font-extrabold text-white mb-2 leading-tight">Pristine. Always.</h3>
        <p className="text-slate-200 text-sm font-medium">Our fleet is sanitized after every ride.</p>
      </div>
    </div>
  );
}
