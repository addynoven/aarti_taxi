import Link from "next/link";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="#home" className="text-2xl font-bold tracking-tight text-heading">
              Aarti<span className="text-brand">Taxi</span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link href="#home" className="text-slate-600 hover:text-brand transition-colors font-medium">Home</Link>
            <Link href="#services" className="text-slate-600 hover:text-brand transition-colors font-medium">Services</Link>
            <Link href="#fleet" className="text-slate-600 hover:text-brand transition-colors font-medium">Fleet</Link>
            <Link href="#contact" className="text-slate-600 hover:text-brand transition-colors font-medium">Contact</Link>
          </div>

          <div className="hidden md:flex items-center">
            <a href="tel:+1234567890" className="bg-brand hover:bg-brand-hover text-white font-semibold py-2.5 px-6 rounded-md shadow-sm transition-all duration-200 ease-in-out transform hover:-translate-y-0.5">
              Call +1 234 567 890
            </a>
          </div>

          <div className="md:hidden flex items-center">
            {/* Mobile menu button could go here, omitting for simplicity of this SPA */}
            <span className="text-brand font-bold">Aarti Taxi</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
