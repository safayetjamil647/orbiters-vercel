import React from "react";
import { Metadata } from "next";
import UtilityBar from "../../components/UtilityBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTABand from "../../components/CTABand";

export const metadata: Metadata = {
  title: "About Our Agency",
  description: "Learn about Orbiters, the digital agency built exclusively for automotive businesses and SaaS innovators.",
};

export default function CompanyPage() {
  return (
    <>
      <UtilityBar />
      <Navbar />
      <main>
        <section className="hero">
          <div className="hero-grid-bg"></div>
          <div className="hero-glow"></div>
          <div className="hero-inner" style={{ gridTemplateColumns: '1fr', textAlign: 'center' }}>
            <div className="hero-left" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div className="hero-eyebrow" style={{ justifyContent: 'center' }}>
                <span className="hero-eyebrow-dot"></span>
                About Orbiters
              </div>
              <h1 className="hero-headline">
                The agency built for the<br />
                <span className="hl">Future of Automotive.</span>
              </h1>
              <p className="hero-sub" style={{ maxWidth: '100%' }}>
                We aren't just another digital agency. We are a team of automotive enthusiasts, data scientists, and creative designers dedicated to accelerating your brand's growth in an increasingly digital world.
              </p>
            </div>
          </div>
        </section>

        <section className="section-challenges" style={{ background: 'var(--off-white)' }}>
          <div className="section-inner">
            <div className="section-header">
              <span className="section-tag">Our Mission</span>
              <h2 className="section-title">Driving Innovation Forward</h2>
              <p className="section-sub">
                Our mission is to empower automotive dealers and SaaS providers with the technological tools and creative strategies they need to dominate their markets.
              </p>
            </div>

            <div className="challenges-grid">
              <div className="challenge-card">
                <div className="challenge-num">01</div>
                <h3 className="challenge-title">Exclusivity</h3>
                <p className="challenge-desc">We work exclusively with automotive brands, giving us an unmatched understanding of the industry's unique challenges and opportunities.</p>
              </div>
              <div className="challenge-card">
                <div className="challenge-num">02</div>
                <h3 className="challenge-title">Data-Driven</h3>
                <p className="challenge-desc">Every decision we make is backed by real-time market data and performance analytics to ensure maximum ROI for our clients.</p>
              </div>
              <div className="challenge-card">
                <div className="challenge-num">03</div>
                <h3 className="challenge-title">Full-Stack Experts</h3>
                <p className="challenge-desc">From complex SaaS builds to multi-channel advertising campaigns, we provide the complete technical engine for your business.</p>
              </div>
              <div className="challenge-card">
                <div className="challenge-num">04</div>
                <h3 className="challenge-title">Global Vision</h3>
                <p className="challenge-desc">Headquartered in Khulna with a global perspective, we help brands scale across borders and cultures.</p>
              </div>
            </div>
          </div>
        </section>

        <CTABand />
      </main>
      <Footer />
    </>
  );
}
