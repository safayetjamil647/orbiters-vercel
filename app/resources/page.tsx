import React from "react";
import { Metadata } from "next";
import UtilityBar from "../../components/UtilityBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTABand from "../../components/CTABand";

export const metadata: Metadata = {
  title: "Resources & Insights | Orbiters",
  description: "Explore the latest sector insights, whitepapers, and reports across Fintech, Medicare, and Automotive.",
};

export default function ResourcesPage() {
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
                Insights & Resources
              </div>
              <h1 className="hero-headline">
                Knowledge to fuel your<br />
                <span className="hl">Industry Growth.</span>
              </h1>
              <p className="hero-sub" style={{ maxWidth: '100%' }}>
                Stay ahead of the curve with our latest insights, case studies, and industry reports specifically tailored for Fintech, Medicare, and Automotive innovators.
              </p>
            </div>
          </div>
        </section>

        <section className="section-challenges" style={{ background: 'var(--off-white)' }}>
          <div className="section-inner">
            <div className="section-header">
              <span className="section-tag">Library</span>
              <h2 className="section-title">Latest Resources</h2>
              <p className="section-sub">
                Explore our curated collection of articles and guides to help you optimize your digital strategy.
              </p>
            </div>

            <div className="challenges-grid">
              <div className="challenge-card">
                <div className="challenge-num">Whitepaper</div>
                <h3 className="challenge-title">The Future of Fintech UX</h3>
                <p className="challenge-desc">How specialized design patterns are reshaping trust and conversion for global digital banking platforms.</p>
                <a href="#" className="challenge-link">Read Whitepaper →</a>
              </div>
              <div className="challenge-card">
                <div className="challenge-num">Report</div>
                <h3 className="challenge-title">2025 Medicare Trends</h3>
                <p className="challenge-desc">A deep dive into the technical and compliant creative trends driving success for Medicare Advantage providers.</p>
                <a href="#" className="challenge-link">Download Report →</a>
              </div>
              <div className="challenge-card">
                <div className="challenge-num">Guide</div>
                <h3 className="challenge-title">Automotive SEO Mastery</h3>
                <p className="challenge-desc">A comprehensive roadmap to local SEO dominance for dealerships and specialized auto retail networks.</p>
                <a href="#" className="challenge-link">Get the Guide →</a>
              </div>
              <div className="challenge-card">
                <div className="challenge-num">Article</div>
                <h3 className="challenge-title">Compliant Lead Gen</h3>
                <p className="challenge-desc">Optimizing your digital ad spend for high-stakes industries while maintaining strict regulatory compliance.</p>
                <a href="#" className="challenge-link">Read Article →</a>
              </div>
              <div className="challenge-card">
                <div className="challenge-num">Study</div>
                <h3 className="challenge-title">SaaS Product Retention</h3>
                <p className="challenge-desc">Strategies for scaling specialized SaaS platforms from MVP to market leader through design excellence.</p>
                <a href="#" className="challenge-link">Download Study →</a>
              </div>
              <div className="challenge-card">
                <div className="challenge-num">Case Study</div>
                <h3 className="challenge-title">Digital Transformation</h3>
                <p className="challenge-desc">How Orbiters helped a traditional financial institution pivot to a mobile-first digital presence in 6 months.</p>
                <a href="#" className="challenge-link">Read Case Study →</a>
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

