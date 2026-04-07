export function ServiceStats() {
  return (
    <div className="max-w-7xl mx-auto mb-24">
       <div className="border-t border-b border-slate-200 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center bg-[#FAFAFA] shadow-none">
         <div>
           <div className="text-[1.75rem] font-extrabold text-[#926F34]">10,000+</div>
           <div className="text-[0.65rem] font-black text-slate-900 uppercase tracking-widest mt-1.5">Completed Trips</div>
         </div>
         <div>
           <div className="text-[1.75rem] font-extrabold text-[#926F34]">24/7</div>
           <div className="text-[0.65rem] font-black text-slate-900 uppercase tracking-widest mt-1.5">Roadside Support</div>
         </div>
         <div>
           <div className="text-[1.75rem] font-extrabold text-[#926F34]">4.9/5</div>
           <div className="text-[0.65rem] font-black text-slate-900 uppercase tracking-widest mt-1.5">User Rating</div>
         </div>
         <div>
           <div className="text-[1.75rem] font-extrabold text-[#926F34]">100%</div>
           <div className="text-[0.65rem] font-black text-slate-900 uppercase tracking-widest mt-1.5">Safe Journeys</div>
         </div>
       </div>
    </div>
  );
}
