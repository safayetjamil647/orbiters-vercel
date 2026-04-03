import React from "react";
import { Metadata } from "next";
import UtilityBar from "../../../components/UtilityBar";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import CTABand from "../../../components/CTABand";

export const metadata: Metadata = {
  title: "Growth for Automotive SaaS | Design & Growth Marketing",
  description: "Specialized UI/UX design and growth marketing strategies to help automotive software companies reduce churn and scale faster.",
};

export default function AutomotiveSaasPage() {
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
                Market: Automotive SaaS
              </div>
              <h1 className="hero-headline">
                The growth engine for<br />
                <span className="hl">Automotive Software.</span>
              </h1>
              <p className="hero-sub">
                In a crowded SaaS market, your product needs to stand out. We provide the UI/UX design and growth marketing strategies that help automotive software companies scale faster.
              </p>
            </div>
            <div className="hero-right">
              <div className="hero-card">
                <div className="hero-card-top">
                  <div className="hero-card-icon">💻</div>
                  <div className="hero-card-title">SaaS UI/UX Design</div>
                </div>
                <div className="hero-card-desc">Dashboards and onboarding user flows designed to reduce churn and maximize platform usage.</div>
              </div>
              <div className="hero-card">
                <div className="hero-card-top">
                  <div className="hero-card-icon">📈</div>
                  <div className="hero-card-title">Scalable Lead Acquisition</div>
                </div>
                <div className="hero-card-desc">Predictable, data-driven B2B lead generation to fill your sales team's calendar with demos.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-challenges" style={{ background: 'var(--off-white)' }}>
          <div className="section-inner">
            <div className="section-header">
              <span className="section-tag">Expertise</span>
              <h2 className="section-title">Specialized SaaS Support</h2>
              <p className="section-sub">
                We combine deep automotive industry knowledge with SaaS growth best practices to help you scale your platform.
              </p>
            </div>

            <div className="challenges-grid">
              <div className="challenge-card">
                <h3 className="challenge-title">B2B Content Strategy</h3>
                <h4 style={{ fontSize: '12px', color: 'var(--teal)', marginBottom: '8px' }}>Market Authority</h4>
                <p className="challenge-desc">Position your SaaS as the category leader through expert-led whitepapers, articles, and webinars.</p>
              </div>
              <div className="challenge-card">
                <h3 className="challenge-title">Product Onboarding UX</h3>
                <h4 style={{ fontSize: '12px', color: 'var(--teal)', marginBottom: '8px' }}>User Retention</h4>
                <p className="challenge-desc">Streamline user onboarding to ensure your customers understand the value of your product on day one.</p>
              </div>
              <div className="challenge-card">
                <h3 className="challenge-title">SaaS Advertising Mix</h3>
                <h4 style={{ fontSize: '12px', color: 'var(--teal)', marginBottom: '8px' }}>Acquisition Efficiency</h4>
                <p className="challenge-desc">The perfect blend of search, social, and programmatic ads specifically for automotive software buyers.</p>
              </div>
              <div className="challenge-card">
                <h3 className="challenge-title">Conversion Rate Optimization</h3>
                <h4 style={{ fontSize: '12px', color: 'var(--teal)', marginBottom: '8px' }}>Platform Growth</h4>
                <p className="challenge-desc">Continuously test and optimize your marketing landing pages and trial signup flows to maximize ROI.</p>
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
