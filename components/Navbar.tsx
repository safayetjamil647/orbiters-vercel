"use client";

import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/" className="nav-logo">
        <div className="logo-mark"></div>
        <span className="logo-text">ORBIT<span>ERS</span></span>
      </Link>

      <ul className="nav-menu">
        <li className="nav-item">
          <Link href="/solutions" className="nav-link">
            Solutions
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </Link>
          <div className="dropdown">
            <Link href="/solutions/attract-clients" className="dropdown-item">
              <div className="dropdown-icon">🎯</div>
              <div>
                <div className="dropdown-label">Attract New Clients</div>
                <div className="dropdown-sub">Digital ads, social media & SEO for automotive brands</div>
              </div>
            </Link>
            <Link href="/solutions/convert-leads" className="dropdown-item">
              <div className="dropdown-icon">💬</div>
              <div>
                <div className="dropdown-label">Convert Leads</div>
                <div className="dropdown-sub">Landing pages, chat tools & lead response systems</div>
              </div>
            </Link>
            <Link href="/solutions/build-reputation" className="dropdown-item">
              <div className="dropdown-icon">⭐</div>
              <div>
                <div className="dropdown-label">Build Reputation</div>
                <div className="dropdown-sub">Review management & brand authority tools</div>
              </div>
            </Link>
            <div className="dropdown-divider"></div>
            <Link href="/solutions/design-development" className="dropdown-item">
              <div className="dropdown-icon">🛠️</div>
              <div>
                <div className="dropdown-label">Design & Development</div>
                <div className="dropdown-sub">UI/UX, web apps & SaaS product builds</div>
              </div>
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <Link href="/markets" className="nav-link">
            Markets
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </Link>
          <div className="dropdown">
            <Link href="/markets/dealerships" className="dropdown-item">
              <div className="dropdown-icon">🚗</div>
              <div>
                <div className="dropdown-label">Auto Dealerships</div>
                <div className="dropdown-sub">New & used car dealers, franchise networks</div>
              </div>
            </Link>
            <Link href="/markets/ev-fleet" className="dropdown-item">
              <div className="dropdown-icon">⚡</div>
              <div>
                <div className="dropdown-label">EV & Fleet</div>
                <div className="dropdown-sub">Electric vehicle brands & fleet management</div>
              </div>
            </Link>
            <Link href="/markets/saas" className="dropdown-item">
              <div className="dropdown-icon">💻</div>
              <div>
                <div className="dropdown-label">Automotive SaaS</div>
                <div className="dropdown-sub">Software companies serving the auto industry</div>
              </div>
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <Link href="/company" className="nav-link">Company</Link>
        </li>
        <li className="nav-item">
          <Link href="/resources" className="nav-link">Resources</Link>
        </li>
      </ul>

      <div className="nav-cta-group">
        <Link href="/work" className="btn-outline">View Our Work</Link>
        <Link href="/demo" className="btn-demo">Get a Free Demo</Link>
      </div>
    </nav>
  );
}
