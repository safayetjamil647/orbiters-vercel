"use client";

import React, { useState } from "react";

export default function Solutions() {
  const [activeTab, setActiveTab] = useState("All Solutions");

  const tabs = ["All Solutions", "Attract", "Convert", "Retain", "Design & Build"];

  return (
    <section className="section-solutions">
      <div className="solutions-bg"></div>
      <div className="section-inner">
        <div className="section-header" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-tag">Our Solutions</div>
          <h2 className="section-title">Everything your business<br />needs to grow.</h2>
          <p className="section-sub">From digital advertising to product design — Orbiters gives high-growth businesses a competitive edge.</p>
        </div>
        
        <div className="solutions-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`sol-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="solutions-grid">
          <div className="solution-card">
            <div className="solution-icon">🎯</div>
            <h3 className="solution-title">Digital Advertising</h3>
            <p className="solution-desc">Precision-targeted campaigns across Google, Meta, YouTube and programmatic networks — reaching customers exactly when they're in-market.</p>
            <div className="solution-tags">
              <span className="solution-tag">Google Ads</span>
              <span className="solution-tag">Meta Ads</span>
              <span className="solution-tag">Programmatic</span>
            </div>
          </div>
          
          <div className="solution-card">
            <div className="solution-icon">📱</div>
            <h3 className="solution-title">Social Media Marketing</h3>
            <p className="solution-desc">Organic and paid social strategies that build brand authority and drive real engagement from your target audience.</p>
            <div className="solution-tags">
              <span className="solution-tag">Instagram</span>
              <span className="solution-tag">Facebook</span>
              <span className="solution-tag">TikTok</span>
            </div>
          </div>

          <div className="solution-card">
            <div className="solution-icon">⭐</div>
            <h3 className="solution-title">Reputation Management</h3>
            <p className="solution-desc">Automate review requests, respond to feedback, and build a 5-star profile across every major platform consumers trust.</p>
            <div className="solution-tags">
              <span className="solution-tag">Google Reviews</span>
              <span className="solution-tag">Trustpilot</span>
              <span className="solution-tag">G2 / Capterra</span>
            </div>
          </div>

          <div className="solution-card">
            <div className="solution-icon">💬</div>
            <h3 className="solution-title">Lead Response & Chat</h3>
            <p className="solution-desc">Never miss a lead again. Smart chat tools and structured follow-up workflows that respond to prospects in minutes.</p>
            <div className="solution-tags">
              <span className="solution-tag">Live Chat</span>
              <span className="solution-tag">SMS Follow-up</span>
              <span className="solution-tag">CRM Integration</span>
            </div>
          </div>

          <div className="solution-card">
            <div className="solution-icon">🛠️</div>
            <h3 className="solution-title">UI/UX Design</h3>
            <p className="solution-desc">Dashboards, portals, onboarding flows and complex SaaS interfaces — designed to convert and retain.</p>
            <div className="solution-tags">
              <span className="solution-tag">SaaS Design</span>
              <span className="solution-tag">Dashboards</span>
              <span className="solution-tag">Prototyping</span>
            </div>
          </div>

          <div className="solution-card">
            <div className="solution-icon">💻</div>
            <h3 className="solution-title">Web & App Development</h3>
            <p className="solution-desc">Fast, production-grade frontend builds for specialized SaaS products, landing pages, and web apps that actually convert.</p>
            <div className="solution-tags">
              <span className="solution-tag">React</span>
              <span className="solution-tag">Next.js</span>
              <span className="solution-tag">Webflow</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

