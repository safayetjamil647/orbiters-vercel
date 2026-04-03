import React from "react";
import { Metadata } from "next";
import UtilityBar from "../../components/UtilityBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTABand from "../../components/CTABand";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Automotive Growth Solutions",
  description: "Explore our full suite of digital marketing and technology solutions built exclusively for the automotive industry.",
};

export default function SolutionsHub() {
  const solutions = [
    {
      title: "Attract New Clients",
      desc: "Digital ads, social media & SEO for automotive brands seeking high-intent buyers.",
      icon: "🎯",
      href: "/solutions/attract-clients",
      tags: ["Ads", "SEO", "Social"]
    },
    {
      title: "Convert Leads",
      desc: "High-performance landing pages, smart chat tools & lead response workflows.",
      icon: "💬",
      href: "/solutions/convert-leads",
      tags: ["Conversion", "CRM", "Chat"]
    },
    {
      title: "Build Reputation",
      desc: "Reputation management tools that automate reviews and protect your brand.",
      icon: "⭐",
      href: "/solutions/build-reputation",
      tags: ["Reviews", "Trust", "Authority"]
    },
    {
      title: "Design & Development",
      desc: "Production-grade UI/UX and product builds for automotive SaaS and platforms.",
      icon: "🛠️",
      href: "/solutions/design-development",
      tags: ["UI/UX", "SaaS", "React"]
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
                Our Expertise
              </div>
              <h1 className="hero-headline">
                Full-Stack Growth for<br />
                <span className="hl">Automotive Innovators.</span>
              </h1>
              <p className="hero-sub" style={{ maxWidth: '100%' }}>
                Orbiters provides the technical engine and creative fuel to help your automotive business scale across digital channels.
              </p>
            </div>
          </div>
        </section>

        <section className="section-challenges" style={{ background: 'var(--off-white)' }}>
          <div className="section-inner">
            <div className="section-header">
              <span className="section-tag">Core Pillars</span>
              <h2 className="section-title">Integrated Solutions</h2>
              <p className="section-sub">
                Our services are designed to work together, creating a seamless growth engine for your brand.
              </p>
            </div>

            <div className="challenges-grid">
              {solutions.map((sol) => (
                <div key={sol.title} className="challenge-card">
                  <div className="challenge-num">{sol.icon}</div>
                  <h3 className="challenge-title">{sol.title}</h3>
                  <p className="challenge-desc">{sol.desc}</p>
                  <div className="solution-tags" style={{ marginBottom: '20px' }}>
                    {sol.tags.map(tag => <span key={tag} className="solution-tag">{tag}</span>)}
                  </div>
                  <Link href={sol.href} className="challenge-link">Learn More →</Link>
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
