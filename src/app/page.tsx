"use client";

import { useState } from "react";
import { Onboarding } from "@/components/Onboarding";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [onboardingComplete, setOnboardingComplete] = useState(false);

  return (
    <>
      {!onboardingComplete && (
        <Onboarding onComplete={() => setOnboardingComplete(true)} />
      )}
      <Navigation visible={onboardingComplete} />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
