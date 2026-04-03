import { Nav } from "@/components/layout/Nav";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Fleet } from "@/components/sections/Fleet";
import { Features } from "@/components/sections/Features";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-grow pt-20"> {/* pt-20 offsets the fixed Nav */}
        <Hero />
        <Services />
        <Fleet />
        <Features />
      </main>
      <Footer />
    </>
  );
}
