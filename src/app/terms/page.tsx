import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Terms and Conditions | Aarti Taxi",
  description: "Terms and Conditions for Aarti Taxi service.",
};

const sections = [
  {
    title: "1. Booking Confirmation",
    items: [
      "All taxi bookings are subject to vehicle and driver availability.",
      "Customers must provide accurate pickup and drop details.",
      "Booking confirmation may be provided through phone call, WhatsApp, or website communication.",
    ],
  },
  {
    title: "2. Pricing and Payments",
    items: [
      "Fare depends on distance, route, vehicle type, tolls, waiting charges, and travel duration.",
      "Prices may vary during peak hours or special situations.",
      "Customers are responsible for paying applicable toll taxes, parking charges, or state taxes if required.",
    ],
  },
  {
    title: "3. Cancellation Policy",
    items: [
      "Customers may cancel bookings before ride confirmation.",
      "Last-minute cancellations may result in cancellation charges.",
      "Repeated fake or spam bookings may lead to service restrictions.",
    ],
  },
  {
    title: "4. Driver and Vehicle Availability",
    items: [
      "We try to provide timely service, but delays may occur due to traffic, weather, or operational issues.",
      "In rare cases, vehicle replacement may be provided if necessary.",
    ],
  },
  {
    title: "5. Customer Responsibilities",
    items: [
      "To behave respectfully with drivers.",
      "Not to carry illegal or dangerous items.",
      "Not to damage the vehicle.",
      "Not to use the service for unlawful activities.",
      "Additional charges may apply for vehicle damage caused by customers.",
    ],
    note: "Customers agree:",
  },
  {
    title: "6. Refund Policy",
    items: [
      "Refunds, if applicable, will be processed within 5–7 business days.",
      "No refund will be provided after trip completion unless there is a verified service issue.",
    ],
  },
  {
    title: "7. Limitation of Liability",
    items: [
      "Traffic delays.",
      "Missed trains/flights due to external conditions.",
      "Delays caused by weather, road closures, or emergencies.",
      "Customers are advised to keep personal belongings secure during travel. Aarti Taxi will not be responsible for any lost, forgotten, or damaged items left inside the vehicle.",
    ],
    note: "Aarti Taxi is not responsible for:",
  },
  {
    title: "8. Privacy and Data Usage",
    items: [
      "Customer information such as phone numbers and trip details may be used only for booking, customer support, and service-related communication.",
      "We do not sell customer data to third parties.",
    ],
  },
  {
    title: "9. Third-Party Services",
    items: [
      "Google Ads",
      "WhatsApp",
      "Google Maps",
      "Analytics tools",
      "These services may collect technical data according to their own privacy policies.",
    ],
    note: "Our website may use third-party tools and services including:",
  },
  {
    title: "10. Changes to Terms",
    items: [
      "We reserve the right to update or modify these Terms and Conditions at any time without prior notice.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="pt-20 min-h-screen bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Terms and Conditions</h1>
          <p className="text-slate-500 text-sm mb-8">Welcome to Aarti Taxi service. By accessing this website and using our taxi booking services, you agree to comply with the following Terms and Conditions. Please read them carefully before using our services.</p>

          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-base font-extrabold text-slate-900 mb-2">{section.title}</h2>
                {section.note && <p className="text-slate-600 text-sm mb-1">{section.note}</p>}
                <ul className="list-disc list-inside space-y-1">
                  {section.items.map((item, i) => (
                    <li key={i} className="text-slate-600 text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-slate-200 pt-8">
            <h2 className="text-base font-extrabold text-slate-900 mb-3">11. Contact Information</h2>
            <p className="text-slate-600 text-sm">Aarti Taxi</p>
            <p className="text-slate-600 text-sm">Phone: <a href="tel:8510014700" className="text-[#CA8A04] hover:underline">8510014700</a></p>
            <p className="text-slate-600 text-sm">Email: <a href="mailto:Rudra.tours01@gmail.com" className="text-[#CA8A04] hover:underline">Rudra.tours01@gmail.com</a></p>
            <p className="text-slate-600 text-sm mt-1">Service Hours: 24/7</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
