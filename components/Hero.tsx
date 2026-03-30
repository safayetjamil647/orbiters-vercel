import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid-bg"></div>
      <div className="hero-glow"></div>
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot"></span>
            Automotive Digital Agency
          </div>
          <h1 className="hero-headline">
            Technology that puts<br />
            your business<br />
            <span className="hl">in orbit.</span>
          </h1>
          <p className="hero-sub">
            Orbiters is the digital marketing and design agency built exclusively for automotive businesses and SaaS companies. We help you attract, convert, and retain customers — faster.
          </p>
          <div className="hero-actions">
            <button className="btn-hero-primary">
              Get a Free Demo
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <button className="btn-hero-ghost">See Our Solutions</button>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-card">
            <div className="hero-card-top">
              <div className="hero-card-icon">🎯</div>
              <div className="hero-card-title">Targeted Digital Advertising</div>
            </div>
            <div className="hero-card-desc">Reach in-market automotive buyers across Google, Meta, and programmatic channels.</div>
          </div>
          <div className="hero-card">
            <div className="hero-card-top">
              <div className="hero-card-icon">🛠️</div>
              <div className="hero-card-title">Design & Development</div>
            </div>
            <div className="hero-card-desc">Production-grade UI/UX design and frontend development for automotive SaaS products.</div>
          </div>
          <div className="hero-card">
            <div className="hero-card-top">
              <div className="hero-card-icon">⭐</div>
              <div className="hero-card-title">Reputation Management</div>
            </div>
            <div className="hero-card-desc">Build 5-star reviews and protect your brand across Google, Yelp, and DealerRater.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
