import React from "react";
import { Metadata } from "next";
import UtilityBar from "../../components/UtilityBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTABand from "../../components/CTABand";

export const metadata: Metadata = {
  title: "Our Work | Orbiters",
  description: "Discover how Orbiters has transformed specialized brands across Fintech, Medicare, and Automotive with data-driven design and marketing.",
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
                The technical engine for<br />
                <span className="hl">Specialized Leaders.</span>
              </h1>
              <p className="hero-sub" style={{ maxWidth: '100%' }}>
                Explore how we've helped innovators in Fintech, Medicare, and Automotive scale their digital presence, optimize their lead generation, and build high-performance products.
              </p>
            </div>
          </div>
        </section>

        <section className="section-challenges" style={{ background: 'var(--white)' }}>
          <div className="section-inner">
            <div className="section-header">
              <span className="section-tag">Case Studies</span>
              <h2 className="section-title">Sector Success Stories</h2>
              <p className="section-sub">
                Our portfolio highlights our commitment to data-driven results and creative excellence across high-stakes industries.
              </p>
            </div>

            <div className="challenges-grid">
              <div className="challenge-card" style={{ padding: '0', overflow: 'hidden' }}>
                <div style={{ background: 'var(--navy)', height: '240px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px' }}>💳</div>
                <div style={{ padding: '28px' }}>
                  <div className="challenge-num">Fintech Scale-up</div>
                  <h3 className="challenge-title">Scaling a Global Neo-bank</h3>
                  <p className="challenge-desc">Developed a multi-channel acquisition engine that decreased CAC by 35% while scaling active monthly users from 50k to 500k in 12 months.</p>
                  <a href="#" className="challenge-link">Full Case Study →</a>
                </div>
              </div>
              <div className="challenge-card" style={{ padding: '0', overflow: 'hidden' }}>
                <div style={{ background: 'var(--navy-mid)', height: '240px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px' }}>🏥</div>
                <div style={{ padding: '28px' }}>
                  <div className="challenge-num">Medicare Provider</div>
                  <h3 className="challenge-title">Patient Acquisition Mastery</h3>
                  <p className="challenge-desc">A complete digital overhaul for a regional Medicare network, integrating HIPAA-compliant lead capture and generating 10k+ new enrollments.</p>
                  <a href="#" className="challenge-link">Full Case Study →</a>
                </div>
              </div>
              <div className="challenge-card" style={{ padding: '0', overflow: 'hidden' }}>
                <div style={{ background: 'var(--navy-light)', height: '240px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px' }}>🚗</div>
                <div style={{ padding: '28px' }}>
                  <div className="challenge-num">Automotive Retail Group</div>
                  <h3 className="challenge-title">Next-Gen Dealer Transformation</h3>
                  <p className="challenge-desc">UI/UX design and frontend development for a unified inventory marketplace used by national dealership chains to drive digital sales.</p>
                  <a href="#" className="challenge-link">Full Case Study →</a>
                </div>
              </div>
              <div className="challenge-card" style={{ padding: '0', overflow: 'hidden' }}>
                <div style={{ background: 'var(--teal-dark)', height: '240px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px' }}>📈</div>
                <div style={{ padding: '28px' }}>
                  <div className="challenge-num">SaaS Analytics Platform</div>
                  <h3 className="challenge-title">UI/UX for Specialized Data</h3>
                  <p className="challenge-desc">Designing complex dashboards and predictive analytics tools for industry-specific SaaS platforms that require high-density data visualization.</p>
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

