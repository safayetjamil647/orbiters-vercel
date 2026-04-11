import React from "react";
import { Metadata } from "next";
import UtilityBar from "../../../components/UtilityBar";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import CTABand from "../../../components/CTABand";

export const metadata: Metadata = {
  title: "Build Reputation & Authority | Orbiters",
  description: "Automate review requests and protect your brand's 5-star reputation across high-stakes industries like Fintech and Medicare.",
};

export default function BuildReputationPage() {
  return (
    <>
      <UtilityBar />
      <Navbar />
      <main>
        <section className="hero">
          <div className="hero-grid-bg"></div>
          <div className="hero-glow"></div>
          <div className="hero-inner">
            <div className="hero-left">
              <div className="hero-eyebrow">
                <span className="hero-eyebrow-dot"></span>
                Solution: Build Reputation
              </div>
              <h1 className="hero-headline">
                The brand authority<br />
                <span className="hl">your customers trust.</span>
              </h1>
              <p className="hero-sub">
                In specialized sectors, reputation is everything. We help you automate review requests, manage consumer feedback, and build a brand authority that drives conversions.
              </p>
            </div>
            <div className="hero-right">
              <div className="hero-card">
                <div className="hero-card-top">
                  <div className="hero-card-icon">⭐</div>
                  <div className="hero-card-title">Review Automation</div>
                </div>
                <div className="hero-card-desc">Automatically request reviews after a customer interaction, and boost your local and industry rankings effortlessly.</div>
              </div>
              <div className="hero-card">
                <div className="hero-card-top">
                  <div className="hero-card-icon">🔐</div>
                  <div className="hero-card-title">Brand Protection</div>
                </div>
                <div className="hero-card-desc">Keep your profiles safe with active monitoring and structured response management across all critical platforms.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-challenges" style={{ background: 'var(--off-white)' }}>
          <div className="section-inner">
            <div className="section-header">
              <span className="section-tag">Capabilities</span>
              <h2 className="section-title">Authority Management</h2>
              <p className="section-sub">
                Build authority across Google, Trustpilot, and specialized industry review platforms.
              </p>
            </div>

            <div className="challenges-grid">
              <div className="challenge-card">
                <h3 className="challenge-title">Active Review Growth</h3>
                <p className="challenge-desc">Improve your local SEO and sector trust with constant 5-star review growth and professional automated responses.</p>
              </div>
              <div className="challenge-card">
                <h3 className="challenge-title">Platform Integration</h3>
                <p className="challenge-desc">Dominate sector-specific review sites with automated requests and centralized profile management.</p>
              </div>
              <div className="challenge-card">
                <h3 className="challenge-title">Real-time Monitoring</h3>
                <p className="challenge-desc">Identify and resolve customer concerns before they become public reviews on social or industry platforms.</p>
              </div>
              <div className="challenge-card">
                <h3 className="challenge-title">Social Proof Badges</h3>
                <p className="challenge-desc">Turn your success into trust with automated review widgets and trust badges for your website and landing pages.</p>
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

