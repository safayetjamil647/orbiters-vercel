import React from "react";
import { Metadata } from "next";
import UtilityBar from "../../../components/UtilityBar";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import CTABand from "../../../components/CTABand";

export const metadata: Metadata = {
  title: "Attract New Clients | Specialized Automotive Advertising",
  description: "Reach high-intent automotive buyers with precision Google & Social Ads designed for maximum ROI.",
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
                Put your automotive brand in front of high-intent buyers exactly when they're looking to purchase. Our data-driven ad strategies ensure your budget works harder.
              </p>
            </div>
            <div className="hero-right">
              <div className="hero-card">
                <div className="hero-card-top">
                  <div className="hero-card-icon">🎯</div>
                  <div className="hero-card-title">Precision Targeting</div>
                </div>
                <div className="hero-card-desc">We reach buyers based on vehicle search history, brand interest, and geographic proximity to your showroom.</div>
              </div>
              <div className="hero-card">
                <div className="hero-card-top">
                  <div className="hero-card-icon">⚡</div>
                  <div className="hero-card-title">Retargeting Engine</div>
                </div>
                <div className="hero-card-desc">Bring back previous visitors with dynamic ads showing exactly what they viewed on your inventory page.</div>
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
                We leverage every major digital channel to create a cohesive attraction machine for your dealership or SaaS.
              </p>
            </div>

            <div className="challenges-grid">
              <div className="challenge-card">
                <h3 className="challenge-title">Google & Search Ads</h3>
                <p className="challenge-desc">Dominate automotive-related search queries with precision PPC campaigns designed for maximum conversion.</p>
              </div>
              <div className="challenge-card">
                <h3 className="challenge-title">Social Media Ads</h3>
                <p className="challenge-desc">Vibrant, engaging creative on Meta, Instagram, and TikTok that reaches buyers on their favorite platforms.</p>
              </div>
              <div className="challenge-card">
                <h3 className="challenge-title">YouTube & Video</h3>
                <p className="challenge-desc">High-production value video ads that tell your brand story and showcase your inventory in action.</p>
              </div>
              <div className="challenge-card">
                <h3 className="challenge-title">Automotive SEO</h3>
                <p className="challenge-desc">Long-term organic authority built through specialized local SEO and keyword-rich content strategies.</p>
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
