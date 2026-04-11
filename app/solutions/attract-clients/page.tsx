import React from "react";
import { Metadata } from "next";
import UtilityBar from "../../../components/UtilityBar";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import CTABand from "../../../components/CTABand";

export const metadata: Metadata = {
  title: "Attract New Clients | Specialized Multi-Sector Advertising",
  description: "Reach high-intent customers in Fintech, Medicare, and Automotive with precision Google & Social Ads designed for maximum ROI.",
};

export default function AttractClientsPage() {
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
                Solution: Attract
              </div>
              <h1 className="hero-headline">
                Dominate your market<br />
                <span className="hl">with Targeted Ads.</span>
              </h1>
              <p className="hero-sub">
                Put your brand in front of high-intent customers exactly when they're looking for your services. Our data-driven ad strategies ensure your budget works harder across Fintech, Medicare, and Automotive sectors.
              </p>
            </div>
            <div className="hero-right">
              <div className="hero-card">
                <div className="hero-card-top">
                  <div className="hero-card-icon">🎯</div>
                  <div className="hero-card-title">Precision Targeting</div>
                </div>
                <div className="hero-card-desc">We reach customers based on search history, sector intent, and demographic profiles tailored to your ideal audience.</div>
              </div>
              <div className="hero-card">
                <div className="hero-card-top">
                  <div className="hero-card-icon">⚡</div>
                  <div className="hero-card-title">Retargeting Engine</div>
                </div>
                <div className="hero-card-desc">Bring back previous visitors with dynamic ads showing exactly the products or services they viewed on your platform.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-challenges" style={{ background: 'var(--off-white)' }}>
          <div className="section-inner">
            <div className="section-header">
              <span className="section-tag">Capabilities</span>
              <h2 className="section-title">Multi-Channel Dominance</h2>
              <p className="section-sub">
                We leverage every major digital channel to create a cohesive attraction machine for your specialized brand or SaaS.
              </p>
            </div>

            <div className="challenges-grid">
              <div className="challenge-card">
                <h3 className="challenge-title">Google & Search Ads</h3>
                <p className="challenge-desc">Dominate industry-related search queries with precision PPC campaigns designed for maximum conversion and compliance.</p>
              </div>
              <div className="challenge-card">
                <h3 className="challenge-title">Social Media Ads</h3>
                <p className="challenge-desc">Vibrant, engaging creative on Meta, Instagram, and LinkedIn that reaches decision-makers and high-intent consumers.</p>
              </div>
              <div className="challenge-card">
                <h3 className="challenge-title">YouTube & Video</h3>
                <p className="challenge-desc">High-production value video ads that tell your brand story and showcase your platform in action.</p>
              </div>
              <div className="challenge-card">
                <h3 className="challenge-title">Specialized SEO</h3>
                <p className="challenge-desc">Long-term organic authority built through local SEO and sector-specific keyword-rich content strategies.</p>
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

