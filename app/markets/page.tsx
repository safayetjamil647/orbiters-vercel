import React from "react";
import { Metadata } from "next";
import UtilityBar from "../../components/UtilityBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTABand from "../../components/CTABand";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Markets We Serve | Orbiters",
  description: "Explore our specialized expertise across Fintech, Medicare, and Automotive sectors.",
};

export default function MarketsHub() {
  const markets = [
    {
      title: "Fintech",
      desc: "Growth strategies and secure product design for banking, payments, and financial SaaS innovators.",
      icon: "💳",
      href: "/markets/fintech",
      tags: ["Digital Banking", "Payments", "Insurtech"]
    },
    {
      title: "Medicare",
      desc: "Patient acquisition and compliant digital experiences for healthcare providers and insurance networks.",
      icon: "🏥",
      href: "/markets/medicare",
      tags: ["Healthcare Providers", "Medicare Advantage", "Patient UX"]
    },
    {
      title: "Automotive",
      desc: "The industry-leading engine for dealerships, EV brands, and fleet management platforms.",
      icon: "🚗",
      href: "/markets/automotive",
      tags: ["Dealerships", "EV Transition", "Auto SaaS"]
    }
  ];

  return (
    <>
      <UtilityBar />
      <Navbar />
      <main>
        <section className="hero hero-center">
          <div className="hero-grid-bg"></div>
          <div className="hero-glow"></div>
          <div className="hero-inner">
            <div className="hero-left">
              <div className="hero-eyebrow">
                <span className="hero-eyebrow-dot"></span>
                Target Industries
              </div>
              <h1 className="hero-headline">
                Deep Expertise in every<br />
                <span className="hl">Specialized Sector.</span>
              </h1>
              <p className="hero-sub" style={{ maxWidth: '100%' }}>
                We understand the unique dynamics and regulatory requirements of Fintech, Medicare, and Automotive.
              </p>
            </div>
          </div>
        </section>

        <section className="section-challenges" style={{ background: 'var(--off-white)' }}>
          <div className="section-inner">
            <div className="section-header">
              <span className="section-tag">Segments</span>
              <h2 className="section-title">Who We Serve</h2>
              <p className="section-sub">
                Our approach is never one-size-fits-all. We build tailored growth engines for high-stakes industries.
              </p>
            </div>

            <div className="challenges-grid">
              {markets.map((market) => (
                <div key={market.title} className="challenge-card">
                  <div className="challenge-num">{market.icon}</div>
                  <h3 className="challenge-title">{market.title}</h3>
                  <p className="challenge-desc">{market.desc}</p>
                  <div className="solution-tags" style={{ marginBottom: '20px' }}>
                    {market.tags.map(tag => <span key={tag} className="solution-tag">{tag}</span>)}
                  </div>
                  <Link href={market.href} className="challenge-link">View Industry Case Studies →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABand />
      </main>
      <Footer />
    </>
  );
}

