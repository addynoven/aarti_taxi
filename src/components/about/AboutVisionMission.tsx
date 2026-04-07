import { Eye, Target } from "lucide-react";

export function AboutVisionMission() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-slate-200 pt-16">
        <div>
          <div className="w-10 h-10 rounded-full bg-[#FACC15] flex items-center justify-center mb-6 shadow-sm">
            <Eye className="w-5 h-5 text-slate-900" />
          </div>
          <h3 className="text-xl font-extrabold text-[#1A1A1A] mb-4">Our Vision</h3>
          <p className="text-slate-600 font-medium leading-relaxed max-w-sm">
            To become India's most trusted mobility partner, where every kilometer traveled is a testament to safety, punctuality, and the spirit of Indian hospitality.
          </p>
        </div>
        <div>
          <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center mb-6 shadow-sm">
            <Target className="w-5 h-5 text-green-900" />
          </div>
          <h3 className="text-xl font-extrabold text-[#1A1A1A] mb-4">Our Mission</h3>
          <p className="text-slate-600 font-medium leading-relaxed max-w-sm">
            Delivering affordable, high-quality taxi services through technology-driven logistics and a community-first approach for our drivers and customers.
          </p>
        </div>
      </div>
    </div>
  );
}
