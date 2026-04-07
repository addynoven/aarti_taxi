import { Star, Quote } from "lucide-react";

export function Reviews() {
  const reviews = [
    {
      stars: 5,
      text: "Very smooth booking process for my trip from Delhi to Agra. The driver was professional and the car was spotless.",
      name: "Rahul Sharma",
      role: "Verified Customer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
      stars: 5,
      text: "Best rates for airport transfers. They were waiting for me even though my flight was delayed by an hour.",
      name: "Ananya Patel",
      role: "Frequent Traveler",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
      stars: 4,
      text: "Reliable service for outstation trips. We booked a round trip to Jaipur and everything was handled perfectly.",
      name: "Vikram Singh",
      role: "Business User",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100&h=100"
    }
  ];

  return (
    <section className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-full bg-white rounded-l-full -z-10 opacity-60 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] tracking-tight mb-4">
            Don't just take our <span className="text-[#CA8A04]">word</span> for it.
          </h2>
          <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">
            Join thousands of travelers who have experienced the Aarti Taxi difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div 
              key={i} 
              className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100/50 flex flex-col h-full relative group hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]"
            >
              <div className="absolute top-8 right-8 text-slate-100 transition-colors duration-500 group-hover:text-[#CA8A04]/10">
                <Quote fill="currentColor" className="w-14 h-14" />
              </div>
              
              <div className="flex gap-1 mb-8 relative z-10">
                {[...Array(5)].map((_, index) => (
                  <Star 
                    key={index} 
                    className={`w-5 h-5 ${index < review.stars ? 'text-[#CA8A04] fill-[#CA8A04]' : 'text-slate-200'}`} 
                  />
                ))}
              </div>
              
              <p className="text-slate-600 text-lg leading-relaxed flex-grow mb-10 font-medium relative z-10">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100 relative z-10">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full flex-shrink-0 object-cover aspect-square shadow-sm ring-2 ring-white" />
                <div>
                  <h4 className="font-extrabold text-[#1A1A1A] tracking-tight">{review.name}</h4>
                  <p className="text-[0.7rem] text-slate-400 font-bold uppercase tracking-widest mt-0.5">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
