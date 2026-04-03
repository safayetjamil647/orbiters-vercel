import React from "react";
import { Metadata } from "next";
import UtilityBar from "../../components/UtilityBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTABand from "../../components/CTABand";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Discover how Orbiters has transformed automotive brands and scaled SaaS products with data-driven design and marketing.",
};

export default function WorkPage() {
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
                Our Work
              </div>
              <h1 className="hero-headline">
                Technological engine for<br />
                <span className="hl">Automotive Leaders.</span>
              </h1>
              <p className="hero-sub" style={{ maxWidth: '100%' }}>
                Explore how we've helped automotive businesses and SaaS innovators scale their digital presence, optimize their lead generation, and build high-performance products.
              </p>
            </div>
          </div>
        </section>

        <section className="section-challenges" style={{ background: 'var(--white)' }}>
          <div className="section-inner">
            <div className="section-header">
              <span className="section-tag">Case Studies</span>
              <h2 className="section-title">Success Stories</h2>
              <p className="section-sub">
                Our portfolio highlights our commitment to data-driven results and creative excellence in the automotive sector.
              </p>
            </div>

            <div className="challenges-grid">
              <div className="challenge-card" style={{ padding: '0', overflow: 'hidden' }}>
                <div style={{ background: 'var(--navy)', height: '240px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px' }}>🚗</div>
                <div style={{ padding: '28px' }}>
                  <div className="challenge-num">Automotive Dealer Network</div>
                  <h3 className="challenge-title">Scaling 14 Dealership Locations</h3>
                  <p className="challenge-desc">Developed a unified digital marketing strategy and lead response engine that increased conversion rates by 42% across all 14 locations.</p>
                  <a href="#" className="challenge-link">Full Case Study →</a>
                </div>
              </div>
              <div className="challenge-card" style={{ padding: '0', overflow: 'hidden' }}>
                <div style={{ background: 'var(--navy-mid)', height: '240px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px' }}>⚡</div>
                <div style={{ padding: '28px' }}>
                  <div className="challenge-num">EV Charging Infrastructure</div>
                  <h3 className="challenge-title">Brand Building for EV Power</h3>
                  <p className="challenge-desc">A complete creative redesign and digital launch for a leading EV charging network, generating 5k high-intent B2B leads in the first quarter.</p>
                  <a href="#" className="challenge-link">Full Case Study →</a>
                </div>
              </div>
              <div className="challenge-card" style={{ padding: '0', overflow: 'hidden' }}>
                <div style={{ background: 'var(--navy-light)', height: '240px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px' }}>💻</div>
                <div style={{ padding: '28px' }}>
                  <div className="challenge-num">Automotive SaaS Provider</div>
                  <h3 className="challenge-title">Next-Gen Dealer Dashboard</h3>
                  <p className="challenge-desc">UI/UX design and frontend development for a cutting-edge automotive inventory management system used by national dealership chains.</p>
                  <a href="#" className="challenge-link">Full Case Study →</a>
                </div>
              </div>
              <div className="challenge-card" style={{ padding: '0', overflow: 'hidden' }}>
                <div style={{ background: 'var(--teal-dark)', height: '240px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px' }}>🚀</div>
                <div style={{ padding: '28px' }}>
                  <div className="challenge-num">Pre-Owned Marketplace</div>
                  <h3 className="challenge-title">Digital Transformation for Used Cars</h3>
                  <p className="challenge-desc">Transforming a traditional pre-owned dealership into a high-growth digital marketplace with integrated chat and lead response automation.</p>
                  <a href="#" className="challenge-link">Full Case Study →</a>
                </div>
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
