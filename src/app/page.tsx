import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Thesis } from "@/components/Thesis";
import { Mission } from "@/components/Mission";
import { Investment } from "@/components/Investment";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <div className="section-divider" />
        <Thesis />
        <div className="section-divider" />
        <Mission />
        <div className="section-divider" />
        <Investment />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
