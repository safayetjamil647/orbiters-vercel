import React from "react";
import { Metadata } from "next";
import UtilityBar from "../../../components/UtilityBar";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import CTABand from "../../../components/CTABand";

export const metadata: Metadata = {
  title: "Growth for Fintech | Acquisition & Trust | Orbiters",
  description: "Scale your Fintech platform with specialized acquisition strategies, high-conversion UX, and trust-building reputation tools.",
};

export default function FintechMarketPage() {
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
                Market: Fintech
              </div>
              <h1 className="hero-headline">
                The acquisition engine for<br />
                <span className="hl">Fintech Innovators.</span>
              </h1>
              <p className="hero-sub">
                From reducing customer acquisition costs to building long-term user trust, we help Fintech brands scale their user base with data-driven creative and high-performance product design.
              </p>
            </div>
            <div className="hero-right">
              <div className="hero-card">
                <div className="hero-card-top">
                  <div className="hero-card-icon">💳</div>
                  <div className="hero-card-title">User Growth</div>
                </div>
                <div className="hero-card-desc">Multi-channel acquisition campaigns that reach high-intent users on the platforms they trust most.</div>
              </div>
              <div className="hero-card">
                <div className="hero-card-top">
                  <div className="hero-card-icon">📈</div>
                  <div className="hero-card-title">Optimized LTV</div>
                </div>
                <div className="hero-card-desc">Retention-focused UX and lifecycle marketing that turns new sign-ups into long-term brand advocates.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-challenges" style={{ background: 'var(--off-white)' }}>
          <div className="section-inner">
            <div className="section-header">
              <span className="section-tag">Solutions</span>
              <h2 className="section-title">Fintech Growth Toolkit</h2>
              <p className="section-sub">
                Our tools are built for the fast-paced, high-stakes requirements of the digital finance industry.
              </p>
            </div>

            <div className="challenges-grid">
              <div className="challenge-card">
                <h3 className="challenge-title">Trust-First Advertising</h3>
                <p className="challenge-desc">Compliant, authority-building ad creative that resonates with sophisticated financial consumers.</p>
              </div>
              <div className="challenge-card">
                <h3 className="challenge-title">Frictionless Onboarding</h3>
                <p className="challenge-desc">UI/UX optimization for sign-up and KYC flows that increase conversion while maintaining security.</p>
              </div>
              <div className="challenge-card">
                <h3 className="challenge-title">LTV Analytics</h3>
                <p className="challenge-desc">Deep attribution models to understand exactly which channels drive your most valuable depositors.</p>
              </div>
              <div className="challenge-card">
                <h3 className="challenge-title">Regulatory Creative</h3>
                <p className="challenge-desc">High-impact marketing assets that meet strict financial compliance standards without losing engagement.</p>
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
