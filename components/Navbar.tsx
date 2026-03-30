"use client";

import React from "react";

export default function Navbar() {
  return (
    <nav>
      <a href="#" className="nav-logo">
        <div className="logo-mark"></div>
        <span className="logo-text">ORBIT<span>ERS</span></span>
      </a>

      <ul className="nav-menu">
        <li className="nav-item">
          <span className="nav-link">
            Solutions
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </span>
          <div className="dropdown">
            <div className="dropdown-item">
              <div className="dropdown-icon">🎯</div>
              <div>
                <div className="dropdown-label">Attract New Clients</div>
                <div className="dropdown-sub">Digital ads, social media & SEO for automotive brands</div>
              </div>
            </div>
            <div className="dropdown-item">
              <div className="dropdown-icon">💬</div>
              <div>
                <div className="dropdown-label">Convert Leads</div>
                <div className="dropdown-sub">Landing pages, chat tools & lead response systems</div>
              </div>
            </div>
            <div className="dropdown-item">
              <div className="dropdown-icon">⭐</div>
              <div>
                <div className="dropdown-label">Build Reputation</div>
                <div className="dropdown-sub">Review management & brand authority tools</div>
              </div>
            </div>
            <div className="dropdown-divider"></div>
            <div className="dropdown-item">
              <div className="dropdown-icon">🛠️</div>
              <div>
                <div className="dropdown-label">Design & Development</div>
                <div className="dropdown-sub">UI/UX, web apps & SaaS product builds</div>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <span className="nav-link">
            Markets
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </span>
          <div className="dropdown">
            <div className="dropdown-item">
              <div className="dropdown-icon">🚗</div>
              <div>
                <div className="dropdown-label">Auto Dealerships</div>
                <div className="dropdown-sub">New & used car dealers, franchise networks</div>
              </div>
            </div>
            <div className="dropdown-item">
              <div className="dropdown-icon">⚡</div>
              <div>
                <div className="dropdown-label">EV & Fleet</div>
                <div className="dropdown-sub">Electric vehicle brands & fleet management</div>
              </div>
            </div>
            <div className="dropdown-item">
              <div className="dropdown-icon">💻</div>
              <div>
                <div className="dropdown-label">Automotive SaaS</div>
                <div className="dropdown-sub">Software companies serving the auto industry</div>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Company</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Resources</a>
        </li>
      </ul>

      <div className="nav-cta-group">
        <button className="btn-outline">View Our Work</button>
        <button className="btn-demo">Get a Free Demo</button>
      </div>
    </nav>
  );
}
