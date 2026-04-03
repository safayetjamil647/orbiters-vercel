import React from "react";
import { Metadata } from "next";
import UtilityBar from "../../components/UtilityBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTABand from "../../components/CTABand";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Markets We Serve",
  description: "Explore our specialized automotive marketing expertise across Dealerships, EV & Fleet, and SaaS sectors.",
};

export default function MarketsHub() {
  const markets = [
    {
      title: "Auto Dealerships",
      desc: "Custom strategies for independent and franchise dealers to scale lead volume and showroom visits.",
      icon: "🚗",
      href: "/markets/dealerships",
      tags: ["Independent", "Group Dealer", "Franchise"]
    },
    {
      title: "EV & Fleet",
      desc: "Marketing and product builds for electric vehicle brands and fleet management platforms.",
      icon: "⚡",
      href: "/markets/ev-fleet",
      tags: ["EV Transition", "Fleet SaaS", "Sustainable Tech"]
    },
    {
      title: "Automotive SaaS",
      desc: "Product design and growth marketing for software companies serving the automotive ecosystem.",
      icon: "💻",
      href: "/markets/saas",
      tags: ["SaaS Design", "Growth", "Product Engineering"]
    }
  ];

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
                Target Industries
              </div>
              <h1 className="hero-headline">
                Deep Expertise in every<br />
                <span className="hl">Automotive Sector.</span>
              </h1>
              <p className="hero-sub" style={{ maxWidth: '100%' }}>
                We understand the unique dynamics and customer behaviors of each automotive market segment.
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
                Our approach is never one-size-fits-all. We build tailored engines for your specific industry challenges.
              </p>
            </div>

            <div className="challenges-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
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
