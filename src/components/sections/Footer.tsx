import { Send } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#171717] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Ready to start your premium journey?</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Join thousands of satisfied travelers who trust Aarti Taxi for their daily commutes and luxury tours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-brand hover:bg-brand-hover text-white font-bold rounded-lg transition-colors text-lg shadow-lg shadow-brand/20">
              BOOK NOW
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-slate-700 hover:border-slate-500 text-white font-bold rounded-lg transition-colors text-lg">
              CALL SUPPORT
            </button>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-16 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="md:col-span-4 lg:col-span-5">
            <h3 className="text-2xl font-bold tracking-tight mb-4">Aarti<span className="text-brand">Taxi</span></h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              © 2026 Aarti Taxi. Kinetic Elegance in Motion. Providing premium mobility across India with precision and trust.
            </p>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-brand transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand transition-colors text-sm">Driver Portal</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand transition-colors text-sm">Careers</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-6">Connect</h4>
            <p className="text-slate-400 text-sm mb-4">Subscribe to our newsletter for luxury travel updates and offers.</p>
            <form className="relative max-w-sm">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg pl-4 pr-12 py-3 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
                required
              />
              <button type="submit" className="absolute right-2 top-2 bottom-2 bg-brand hover:bg-brand-hover text-heading p-2 rounded-md transition-colors flex items-center justify-center">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
