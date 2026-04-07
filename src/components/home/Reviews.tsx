import { Star } from "lucide-react";

export function Reviews() {
  const reviews = [
    {
      stars: 5,
      text: "Very smooth booking process for my trip from Delhi to Agra. The driver was professional and the car was spotless.",
      name: "Rahul Sharma",
      role: "Verified Customer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
    },
    {
      stars: 5,
      text: "Best rates for airport transfers. They were waiting for me even though my flight was delayed by an hour.",
      name: "Ananya Patel",
      role: "Frequent Traveler",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100"
    },
    {
      stars: 4,
      text: "Reliable service for outstation trips. We booked a round trip to Jaipur and everything was handled perfectly.",
      name: "Vikram Singh",
      role: "Business User",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-[#1A1A1A] mb-3 tracking-tight">Real Reviews</h2>
          <p className="text-slate-600 text-lg">See what our community has to say about their experiences.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div 
              key={i} 
              className="bg-[#F8F9FA] rounded-[20px] p-8 border-l-[8px] border-[#8C6D23] shadow-sm flex flex-col h-full"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, index) => (
                  <Star 
                    key={index} 
                    className={`w-5 h-5 ${index < review.stars ? 'text-[#8C6D23] fill-[#8C6D23]' : 'text-[#8C6D23]'}`} 
                    strokeWidth={2}
                  />
                ))}
              </div>
              <p className="text-[#333333] italic text-[1.1rem] leading-relaxed flex-grow mb-10 font-medium">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full flex-shrink-0 object-cover" />
                <div>
                  <h4 className="font-extrabold text-[#1A1A1A]">{review.name}</h4>
                  <p className="text-sm text-slate-500 font-medium">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
