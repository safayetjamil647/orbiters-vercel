import React from "react";
import { Metadata } from "next";
import UtilityBar from "../../../components/UtilityBar";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import CTABand from "../../../components/CTABand";

export const metadata: Metadata = {
  title: "Growth for Medicare | Patient Acquisition & Compliance | Orbiters",
  description: "Scale your Medicare Advantage or Healthcare network with specialized acquisition strategies and HIPAA-compliant digital tools.",
};

export default function MedicareMarketPage() {
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
                Market: Medicare
              </div>
              <h1 className="hero-headline">
                The acquisition engine for<br />
                <span className="hl">Medicare Leaders.</span>
              </h1>
              <p className="hero-sub">
                From compliant lead generation to seamless patient onboarding, we help Medicare providers attract and enroll more members through specialized digital workflows.
              </p>
            </div>
            <div className="hero-right">
              <div className="hero-card">
                <div className="hero-card-top">
                  <div className="hero-card-icon">🏥</div>
                  <div className="hero-card-title">Patient Acquisition</div>
                </div>
                <div className="hero-card-desc">High-intent lead generation designed specifically for the Medicare Advantage and Healthcare ecosystem.</div>
              </div>
              <div className="hero-card">
                <div className="hero-card-top">
                  <div className="hero-card-icon">🔐</div>
                  <div className="hero-card-title">HIPAA Compliance</div>
                </div>
                <div className="hero-card-desc">Production-grade digital tools and tracking that adhere to the highest healthcare privacy standards.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-challenges" style={{ background: 'var(--off-white)' }}>
          <div className="section-inner">
            <div className="section-header">
              <span className="section-tag">Solutions</span>
              <h2 className="section-title">Medicare Success Toolkit</h2>
              <p className="section-sub">
                Our tools are designed specifically for the rigorous requirements of the healthcare and insurance industry.
              </p>
            </div>

            <div className="challenges-grid">
              <div className="challenge-card">
                <h3 className="challenge-title">Compliant Ad Creative</h3>
                <p className="challenge-desc">Marketing assets that drive action while meeting all CMS and healthcare regulatory guidelines.</p>
              </div>
              <div className="challenge-card">
                <h3 className="challenge-title">Patient Journey Mapping</h3>
                <p className="challenge-desc">UI/UX optimization for enrollment and educational flows that increase patient trust and conversion.</p>
              </div>
              <div className="challenge-card">
                <h3 className="challenge-title">Local SEO for Providers</h3>
                <p className="challenge-desc">Dominate local healthcare search and drive patients to your specific regional locations and clinics.</p>
              </div>
              <div className="challenge-card">
                <h3 className="challenge-title">Enrollment Automation</h3>
                <p className="challenge-desc">Seamless integrations with enrollment platforms and CRMs to ensure no lead is lost in the funnel.</p>
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
