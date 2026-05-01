import Atmosphere from "@/components/Atmosphere";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Features from "@/components/Features";
import Ranks from "@/components/Ranks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Atmosphere />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <Features />
        <Ranks />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
