import { Nav } from "@/components/layout/Nav";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
// import { Fleet } from "@/components/home/Fleet";
// import { Features } from "@/components/home/Features";
import { PopularRoutes } from "@/components/home/PopularRoutes";
import { Trust } from "@/components/home/Trust";
import { Steps } from "@/components/home/Steps";
import { Reviews } from "@/components/home/Reviews";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-grow pt-20"> {/* pt-20 offsets the fixed Nav */}
        <Hero />
        <Services />
        {/* <Fleet /> */}
        {/* <Features /> */}
        <PopularRoutes />
        <Trust />
        <Steps />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
