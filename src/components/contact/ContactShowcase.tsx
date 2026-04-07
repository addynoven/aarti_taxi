import { ContactHero } from "./ContactHero";
import { ContactHeroImage } from "./ContactHeroImage";
import { ContactForm } from "./ContactForm";
import { ContactDetails } from "./ContactDetails";

export function ContactShowcase() {
  return (
    <main className="flex-grow pt-32 pb-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <ContactHero />
          <ContactHeroImage />
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="xl:col-span-8">
            <ContactForm />
          </div>
          <div className="xl:col-span-4">
            <ContactDetails />
          </div>
        </div>
      </div>
    </main>
  );
}
