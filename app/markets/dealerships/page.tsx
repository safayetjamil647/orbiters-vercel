import React from "react";
import { Metadata } from "next";
import UtilityBar from "../../../components/UtilityBar";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import CTABand from "../../../components/CTABand";

export const metadata: Metadata = {
  title: "Growth for Auto Dealerships | Lead Generation & SEO",
  description: "Scale your dealership with high-intent digital advertising, local SEO, and automated lead response tools built for auto retail.",
};

export default function DealershipsPage() {
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
                Market: Auto Dealerships
              </div>
              <h1 className="hero-headline">
                The lead engine for<br />
                <span className="hl">Modern Dealerships.</span>
              </h1>
              <p className="hero-sub">
                From high-intent digital advertising to seamless lead response tools, we help car dealerships attract, convert, and retain more customers — and sell more vehicles.
              </p>
            </div>
            <div className="hero-right">
              <div className="hero-card">
                <div className="hero-card-top">
                  <div className="hero-card-icon">🚗</div>
                  <div className="hero-card-title">Inventory Growth</div>
                </div>
                <div className="hero-card-desc">Targeted VDP advertising and retargeting that ensures every vehicle on your lot gets the eyes it deserves.</div>
              </div>
              <div className="hero-card">
                <div className="hero-card-top">
                  <div className="hero-card-icon">🤝</div>
                  <div className="hero-card-title">Lead Consistency</div>
                </div>
                <div className="hero-card-desc">Predictable, high-quality lead volume that keeps your sales floor busy all month long.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-challenges" style={{ background: 'var(--off-white)' }}>
          <div className="section-inner">
            <div className="section-header">
              <span className="section-tag">Solutions</span>
              <h2 className="section-title">Dealer Success Toolkit</h2>
              <p className="section-sub">
                Our tools are designed specifically for the high-speed requirements of modern automotive retail.
              </p>
            </div>

            <div className="challenges-grid">
              <div className="challenge-card">
                <h3 className="challenge-title">Digital Retailing Ads</h3>
                <p className="challenge-desc">Promote your online purchase tools directly to shoppers on Google and Facebook.</p>
              </div>
              <div className="challenge-card">
                <h3 className="challenge-title">24/7 Managed Chat</h3>
                <p className="challenge-desc">Ensure every consumer gets an answer, even when your dealership is closed.</p>
              </div>
              <div className="challenge-card">
                <h3 className="challenge-title">Local SEO GMB</h3>
                <p className="challenge-desc">Dominate local show-up on Google Maps and drive organic showroom visits.</p>
              </div>
              <div className="challenge-card">
                <h3 className="challenge-title">Dynamic Offer Ads</h3>
                <p className="challenge-desc">Showcase your latest lease and finance offers to in-market buyers in real-time.</p>
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
