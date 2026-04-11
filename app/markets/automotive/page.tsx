import React from "react";
import { Metadata } from "next";
import UtilityBar from "../../../components/UtilityBar";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import CTABand from "../../../components/CTABand";

export const metadata: Metadata = {
  title: "Growth for Automotive | Lead Generation & SEO | Orbiters",
  description: "Scale your automotive brand with high-intent digital advertising, local SEO, and automated lead response tools built for the retail and SaaS sectors.",
};

export default function AutomotiveMarketPage() {
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
                Market: Automotive
              </div>
              <h1 className="hero-headline">
                The lead engine for<br />
                <span className="hl">Automotive Innovators.</span>
              </h1>
              <p className="hero-sub">
                From high-intent digital advertising to seamless lead response tools, we help automotive businesses attract, convert, and retain more customers in a digital-first marketplace.
              </p>
            </div>
            <div className="hero-right">
              <div className="hero-card">
                <div className="hero-card-top">
                  <div className="hero-card-icon">🚗</div>
                  <div className="hero-card-title">Inventory Growth</div>
                </div>
                <div className="hero-card-desc">Targeted VDP advertising and retargeting that ensures every vehicle or product gets the visibility it deserves.</div>
              </div>
              <div className="hero-card">
                <div className="hero-card-top">
                  <div className="hero-card-icon">🤝</div>
                  <div className="hero-card-title">Lead Consistency</div>
                </div>
                <div className="hero-card-desc">Predictable, high-quality lead volume that keeps your sales pipeline full all month long.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-challenges" style={{ background: 'var(--off-white)' }}>
          <div className="section-inner">
            <div className="section-header">
              <span className="section-tag">Solutions</span>
              <h2 className="section-title">Automotive Success Toolkit</h2>
              <p className="section-sub">
                Our tools are designed specifically for the high-speed requirements of the modern automotive industry.
              </p>
            </div>

            <div className="challenges-grid">
              <div className="challenge-card">
                <h3 className="challenge-title">Digital Retailing Ads</h3>
                <p className="challenge-desc">Promote your online purchase tools directly to shoppers on Google and Meta platforms.</p>
              </div>
              <div className="challenge-card">
                <h3 className="challenge-title">24/7 Managed Chat</h3>
                <p className="challenge-desc">Ensure every consumer gets an answer, even when your business is offline.</p>
              </div>
              <div className="challenge-card">
                <h3 className="challenge-title">Local SEO Optimization</h3>
                <p className="challenge-desc">Dominate local show-up on Google Maps and drive organic foot traffic and inquiries.</p>
              </div>
              <div className="challenge-card">
                <h3 className="challenge-title">Dynamic Inventory Ads</h3>
                <p className="challenge-desc">Showcase your latest offers to in-market buyers in real-time with automated feed updates.</p>
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
