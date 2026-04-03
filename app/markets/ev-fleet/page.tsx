import React from "react";
import { Metadata } from "next";
import UtilityBar from "../../../components/UtilityBar";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import CTABand from "../../../components/CTABand";

export const metadata: Metadata = {
  title: "EV & Fleet Marketing | Growing Sustainable Brands",
  description: "Specialized automotive marketing strategies for electric vehicle brands and B2B fleet management software companies.",
};

export default function EVFleetPage() {
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
                Market: EV & Fleet
              </div>
              <h1 className="hero-headline">
                The engine for the<br />
                <span className="hl">Electric Transition.</span>
              </h1>
              <p className="hero-sub">
                Marketing electric vehicles and fleet management software requires a specialized technical and creative approach. We help EV brands and fleet SaaS providers scale in a rapidly growing market.
              </p>
            </div>
            <div className="hero-right">
              <div className="hero-card">
                <div className="hero-card-top">
                  <div className="hero-card-icon">⚡</div>
                  <div className="hero-card-title">EV Growth Ads</div>
                </div>
                <div className="hero-card-desc">Reach sustainability-focused buyers and fleet managers looking for electric-first solutions.</div>
              </div>
              <div className="hero-card">
                <div className="hero-card-top">
                  <div className="hero-card-icon">🚚</div>
                  <div className="hero-card-title">Fleet SaaS Design</div>
                </div>
                <div className="hero-card-desc">User-friendly dashboards and tracking interfaces designed for high-efficiency fleet operations.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-challenges" style={{ background: 'var(--off-white)' }}>
          <div className="section-inner">
            <div className="section-header">
              <span className="section-tag">Expertise</span>
              <h2 className="section-title">Specialized EV & Fleet Support</h2>
              <p className="section-sub">
                The EV and fleet markets have unique customer journeys that require data-driven and technically sound strategies.
              </p>
            </div>

            <div className="challenges-grid">
              <div className="challenge-card">
                <h3 className="challenge-title">B2B Fleet Lead Generation</h3>
                <p className="challenge-desc">Highly targeted LinkedIn and search campaigns to reach corporate fleet decision-makers.</p>
              </div>
              <div className="challenge-card">
                <h3 className="challenge-title">EV Infrastructure Branding</h3>
                <p className="challenge-desc">Branding and marketing for charging networks and home-charging solution providers.</p>
              </div>
              <div className="challenge-card">
                <h3 className="challenge-title">Sustainable Brand Storytelling</h3>
                <p className="challenge-desc">Communicating the benefits of sustainability without sacrificing performance messaging.</p>
              </div>
              <div className="challenge-card">
                <h3 className="challenge-title">Telematics Dashboard UI</h3>
                <p className="challenge-desc">UI/UX design for telematics and real-time fleet tracking software platforms.</p>
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
