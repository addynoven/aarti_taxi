export function RouteFAQ() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-[#1A1A1A] tracking-tight mb-4">Frequently Asked Questions</h2>
        <p className="text-slate-500 font-medium text-sm">Everything you need to know about the Delhi-Jaipur taxi route.</p>
      </div>

      <div className="space-y-4">
        
        {/* Accordion 1 (Expanded visual state) */}
        <div className="bg-[#F9FAFB] rounded-2xl p-6 md:p-8 cursor-pointer hover:bg-slate-50 transition-colors border border-transparent shadow-sm">
          <div className="flex justify-between items-start">
            <h3 className="font-extrabold text-[#1A1A1A] pr-8">Are toll taxes included in the fare?</h3>
            <span className="text-[#926F34] font-bold text-xl leading-none transition-transform rotate-45">+</span>
          </div>
          <p className="text-slate-600 font-medium text-sm mt-4 leading-relaxed">
            Yes, our quoted prices are all-inclusive of toll taxes, state taxes, and parking fees for a hassle-free journey.
          </p>
        </div>

        {/* Accordion 2 */}
        <div className="bg-[#F9FAFB] rounded-2xl p-6 md:p-8 cursor-pointer hover:bg-[#F3F4F6] transition-colors border border-transparent hover:border-slate-200">
          <div className="flex justify-between items-center">
            <h3 className="font-extrabold text-[#1A1A1A] pr-8">Can I book a one-way taxi from Delhi to Jaipur?</h3>
            <span className="text-[#926F34] font-bold text-xl leading-none">+</span>
          </div>
          <p className="text-slate-600 font-medium text-sm mt-4 leading-relaxed">
            Absolutely! We specialize in one-way intercity drops at highly competitive rates.
          </p>
        </div>

        {/* Accordion 3 */}
        <div className="bg-[#F9FAFB] rounded-2xl p-6 md:p-8 cursor-pointer hover:bg-[#F3F4F6] transition-colors border border-transparent hover:border-slate-200">
          <div className="flex justify-between items-center">
            <h3 className="font-extrabold text-[#1A1A1A] pr-8">What is the cancellation policy?</h3>
            <span className="text-[#926F34] font-bold text-xl leading-none">+</span>
          </div>
          <p className="text-slate-600 font-medium text-sm mt-4 leading-relaxed">
             We offer free cancellation up to 6 hours before the scheduled pickup time.
          </p>
        </div>

      </div>
    </div>
  );
}
