import React from "react";
import { Metadata } from "next";
import UtilityBar from "../../components/UtilityBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTABand from "../../components/CTABand";

export const metadata: Metadata = {
  title: "Resources & Insights",
  description: "Explore the latest automotive marketing case studies, whitepapers, and reports from the Orbiters team.",
};

export default function ResourcesPage() {
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
                Insights & Resources
              </div>
              <h1 className="hero-headline">
                Knowledge to fuel your<br />
                <span className="hl">Digital Growth.</span>
              </h1>
              <p className="hero-sub" style={{ maxWidth: '100%' }}>
                Stay ahead of the curve with our latest insights, case studies, and industry reports specifically tailored for automotive businesses and SaaS innovators.
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
                Explore our curated collection of articles and guides to help you optimize your automotive digital strategy.
              </p>
            </div>

            <div className="challenges-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              <div className="challenge-card">
                <div className="challenge-num">Case Study</div>
                <h3 className="challenge-title">The Future of EV Marketing</h3>
                <p className="challenge-desc">How specialized digital strategies are reshaping lead generation for electric vehicle brands in 2025.</p>
                <a href="#" className="challenge-link">Read Case Study →</a>
              </div>
              <div className="challenge-card">
                <div className="challenge-num">Report</div>
                <h3 className="challenge-title">2025 Auto SaaS Trends</h3>
                <p className="challenge-desc">A deep dive into the technical and creative trends driving success for automotive software providers.</p>
                <a href="#" className="challenge-link">Download Report →</a>
              </div>
              <div className="challenge-card">
                <div className="challenge-num">Guide</div>
                <h3 className="challenge-title">Mastering Dealer SEO</h3>
                <p className="challenge-desc">A comprehensive roadmap to local SEO dominance for automotive dealerships and franchise networks.</p>
                <a href="#" className="challenge-link">Get the Guide →</a>
              </div>
              <div className="challenge-card">
                <div className="challenge-num">Article</div>
                <h3 className="challenge-title">Social Media Conversion</h3>
                <p className="challenge-desc">Optimizing your social ad spend for high-intent automotive buyers and lead conversion.</p>
                <a href="#" className="challenge-link">Read Article →</a>
              </div>
              <div className="challenge-card">
                <div className="challenge-num">Whitepaper</div>
                <h3 className="challenge-title">SaaS Product Growth</h3>
                <p className="challenge-desc">Strategies for scaling automotive SaaS platforms from MVP to global market leader.</p>
                <a href="#" className="challenge-link">Download Whitepaper →</a>
              </div>
              <div className="challenge-card">
                <div className="challenge-num">Case Study</div>
                <h3 className="challenge-title">Brand Authority Mastery</h3>
                <p className="challenge-desc">How Orbiters helped a regional dealer network build a 5-star reputation in under 6 months.</p>
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
