import React from "react";
import { Metadata } from "next";
import UtilityBar from "../../../components/UtilityBar";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import CTABand from "../../../components/CTABand";

export const metadata: Metadata = {
  title: "Convert More Leads | High-Performance Landings & Chat",
  description: "Turn your automotive traffic into showroom appointments with optimized landing pages and smart chat tools.",
};

export default function ConvertLeadsPage() {
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
                Solution: Convert
              </div>
              <h1 className="hero-headline">
                Turn your traffic<br />
                <span className="hl">into Showroom Visits.</span>
              </h1>
              <p className="hero-sub">
                Don't let high-intent traffic slip through your fingers. Our lead conversion tools and workflows ensure no prospect is ever left waiting.
              </p>
            </div>
            <div className="hero-right">
              <div className="hero-card">
                <div className="hero-card-top">
                  <div className="hero-card-icon">💬</div>
                  <div className="hero-card-title">Smart Chat Tools</div>
                </div>
                <div className="hero-card-desc">Engage prospects in real-time with automated or agent-led chat that guides them toward booking a test drive.</div>
              </div>
              <div className="hero-card">
                <div className="hero-card-top">
                  <div className="hero-card-icon">🚀</div>
                  <div className="hero-card-title">High-Performance Landing Pages</div>
                </div>
                <div className="hero-card-desc">Speed and conversion-optimized landing pages designed to drive action for every campaign you run.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-challenges" style={{ background: 'var(--off-white)' }}>
          <div className="section-inner">
            <div className="section-header">
              <span className="section-tag">Capabilities</span>
              <h2 className="section-title">Conversion Mastery</h2>
              <p className="section-sub">
                Our suite of conversion tools works 24/7 to capture, qualify, and route your automotive leads.
              </p>
            </div>

            <div className="challenges-grid">
              <div className="challenge-card">
                <h3 className="challenge-title">Automated Follow-up</h3>
                <p className="challenge-desc">Smart email and SMS workflows that touch base with leads immediately after their inquiry.</p>
              </div>
              <div className="challenge-card">
                <h3 className="challenge-title">CRM Integrations</h3>
                <p className="challenge-desc">Native integrations with all major automotive CRMs ensuring leads flow perfectly to your sales team.</p>
              </div>
              <div className="challenge-card">
                <h3 className="challenge-title">Lead Attribution</h3>
                <p className="challenge-desc">Deep analytics to understand exactly which campaigns are driving your showroom's most profitable leads.</p>
              </div>
              <div className="challenge-card">
                <h3 className="challenge-title">A/B Testing</h3>
                <p className="challenge-desc">Constant optimization of headlines, copy, and forms to ensure lowest cost-per-lead for your budget.</p>
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
