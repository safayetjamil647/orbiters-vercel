import React from "react";
import { Metadata } from "next";
import UtilityBar from "../../../components/UtilityBar";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import CTABand from "../../../components/CTABand";

export const metadata: Metadata = {
  title: "Automotive SaaS Design & Development",
  description: "Production-grade UI/UX and product builds for automotive SaaS, dealer portals, and inventory platforms.",
};

export default function DesignDevelopmentPage() {
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
                Solution: Design & Development
              </div>
              <h1 className="hero-headline">
                The product engine for<br />
                <span className="hl">Automotive SaaS.</span>
              </h1>
              <p className="hero-sub">
                From complex dealer portals to high-growth automotive SaaS interfaces, our design and development team builds products that are fast, beautiful, and built for scale.
              </p>
            </div>
            <div className="hero-right">
              <div className="hero-card">
                <div className="hero-card-top">
                  <div className="hero-card-icon">🛠️</div>
                  <div className="hero-card-title">Production UI/UX</div>
                </div>
                <div className="hero-card-desc">High-fidelity design systems and user flows crafted specifically for the automotive software ecosystem.</div>
              </div>
              <div className="hero-card">
                <div className="hero-card-top">
                  <div className="hero-card-icon">💻</div>
                  <div className="hero-card-title">Fullstack Build</div>
                </div>
                <div className="hero-card-desc">Next.js, React, and high-performance backend integrations that ensure your automotive app is production-ready.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-challenges" style={{ background: 'var(--off-white)' }}>
          <div className="section-inner">
            <div className="section-header">
              <span className="section-tag">Capabilities</span>
              <h2 className="section-title">Product Engineering</h2>
              <p className="section-sub">
                Our team specializes in the technical and creative requirements of the automotive software industry.
              </p>
            </div>

            <div className="challenges-grid">
              <div className="challenge-card">
                <h3 className="challenge-title">SaaS UI/UX Design</h3>
                <p className="challenge-desc">Clean, conversion-focused interfaces for dealer-facing dashboards and consumer-facing tools.</p>
              </div>
              <div className="challenge-card">
                <h3 className="challenge-title">Custom Tech Stacks</h3>
                <p className="challenge-desc">Next.js and high-performance frontend builds with complex API and CRM integrations as standard.</p>
              </div>
              <div className="challenge-card">
                <h3 className="challenge-title">SaaS Prototyping</h3>
                <p className="challenge-desc">Rapidly turn your idea into a production-ready prototype with detailed user flows and design systems.</p>
              </div>
              <div className="challenge-card">
                <h3 className="challenge-title">Interactive Visuals</h3>
                <p className="challenge-desc">Custom charts and data visualizations that help your automotive SaaS users understand their numbers effortlessly.</p>
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
