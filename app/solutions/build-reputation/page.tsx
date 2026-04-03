import React from "react";
import { Metadata } from "next";
import UtilityBar from "../../../components/UtilityBar";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import CTABand from "../../../components/CTABand";

export const metadata: Metadata = {
  title: "Build Reputation & Brand Authority",
  description: "Automate automotive review requests and protect your dealership's 5-star reputation across Google and social platforms.",
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
                The 5-star brand<br />
                <span className="hl">your customers trust.</span>
              </h1>
              <p className="hero-sub">
                In automotive, reputation is everything. We help you automate review requests, manage consumer feedback, and build a brand authority that drives sales.
              </p>
            </div>
            <div className="hero-right">
              <div className="hero-card">
                <div className="hero-card-top">
                  <div className="hero-card-icon">⭐</div>
                  <div className="hero-card-title">Review Automation</div>
                </div>
                <div className="hero-card-desc">Automatically request reviews after a sale or service appointment, and boost your local rankings effortlessly.</div>
              </div>
              <div className="hero-card">
                <div className="hero-card-top">
                  <div className="hero-card-icon">🔐</div>
                  <div className="hero-card-title">Brand Protection</div>
                </div>
                <div className="hero-card-desc">Keep your 5-star profiles safe with active monitoring and structured response management across all platforms.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-challenges" style={{ background: 'var(--off-white)' }}>
          <div className="section-inner">
            <div className="section-header">
              <span className="section-tag">Capabilities</span>
              <h2 className="section-title">Reputation Management</h2>
              <p className="section-sub">
                Build authority across Google, Yelp, and specialized automotive review platforms.
              </p>
            </div>

            <div className="challenges-grid">
              <div className="challenge-card">
                <h3 className="challenge-title">Google Review Management</h3>
                <p className="challenge-desc">Improve your local SEO with constant 5-star Google review growth and professional responses.</p>
              </div>
              <div className="challenge-card">
                <h3 className="challenge-title">DealerRater Integration</h3>
                <p className="challenge-desc">Dominate automotive-specific review sites with automated requests and profile management.</p>
              </div>
              <div className="challenge-card">
                <h3 className="challenge-title">Negative Review Filtering</h3>
                <p className="challenge-desc">Identify and resolve customer concerns before they become public reviews on social platforms.</p>
              </div>
              <div className="challenge-card">
                <h3 className="challenge-title">Social Proof Badges</h3>
                <p className="challenge-desc">Turn your success into trust with automated review widgets and trust badges for your website.</p>
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
