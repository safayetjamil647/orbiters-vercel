import React from "react";
import UtilityBar from "../components/UtilityBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import Challenges from "../components/Challenges";
import Marquee from "../components/Marquee";
import Solutions from "../components/Solutions";
import Process from "../components/Process";
import Trust from "../components/Trust";
import CTABand from "../components/CTABand";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <UtilityBar />
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Challenges />
        <Marquee />
        <Solutions />
        <Process />
        <Trust />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
