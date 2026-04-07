import { Star } from "lucide-react";

export function OutstationTestimonials() {
  const reviews = [
    {
      id: 1,
      name: "Animesh Sharma",
      location: "Gurgaon, HR",
      text: "Booked a Tempo Traveller for our 12-person family trip to Haridwar. The driver was exceptionally polite and the vehicle was spotless. Highly recommend!",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100",
    },
    {
      id: 2,
      name: "Priya Verma",
      location: "Mumbai, MH",
      text: "Best highway taxi service. We traveled from Mumbai to Udaipur and the driving was very safe. Even at night, I felt completely secure.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100",
    },
    {
      id: 3,
      name: "Rajesh & Suman",
      location: "Pune, MH",
      text: "Aarti Taxi's group rates are unbeatable. Their Innova Crysta is maintained very well. Will definitely use them for our next tour.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100",
    }
  ];

  return (
    <div className="bg-[#EAEAEA] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-[#1A1A1A] tracking-tight">Travel Stories from our Passengers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-3xl p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#CA8A04] text-[#CA8A04]" />
                  ))}
                </div>
                <p className="text-slate-600 font-medium text-[0.95rem] leading-relaxed mb-8">
                  "{review.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover shadow-sm bg-slate-100" />
                <div>
                  <h4 className="font-extrabold text-[#1A1A1A] text-sm">{review.name}</h4>
                  <p className="text-slate-500 font-bold text-[0.65rem] uppercase tracking-widest">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
