"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={isOpen ? "nav-open" : ""}>
      <Link href="/" className="nav-logo">
        <Image 
          src="/Orbiter%20Logo.svg" 
          alt="Orbiters Logo" 
          width={120} 
          height={40} 
          className="nav-logo-img"
          priority
        />
      </Link>

      <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        )}
      </button>

      <div className={`nav-container ${isOpen ? "active" : ""}`}>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link href="/solutions" className="nav-link" onClick={() => setIsOpen(false)}>
              Solutions
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </Link>
            <div className="dropdown">
              <Link href="/solutions/attract-clients" className="dropdown-item" onClick={() => setIsOpen(false)}>
                <div className="dropdown-icon">🎯</div>
                <div>
                <div className="dropdown-label">Attract New Clients</div>
                  <div className="dropdown-sub">Digital ads, social media & SEO for high-growth brands</div>
                </div>
              </Link>
              <Link href="/solutions/convert-leads" className="dropdown-item" onClick={() => setIsOpen(false)}>
                <div className="dropdown-icon">💬</div>
                <div>
                  <div className="dropdown-label">Convert Leads</div>
                  <div className="dropdown-sub">Landing pages, chat tools & lead response systems</div>
                </div>
              </Link>
              <Link href="/solutions/build-reputation" className="dropdown-item" onClick={() => setIsOpen(false)}>
                <div className="dropdown-icon">⭐</div>
                <div>
                  <div className="dropdown-label">Build Reputation</div>
                  <div className="dropdown-sub">Review management & brand authority tools</div>
                </div>
              </Link>
              <div className="dropdown-divider"></div>
              <Link href="/solutions/design-development" className="dropdown-item" onClick={() => setIsOpen(false)}>
                <div className="dropdown-icon">🛠️</div>
                <div>
                  <div className="dropdown-label">Design & Development</div>
                  <div className="dropdown-sub">UI/UX, web apps & SaaS product builds</div>
                </div>
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link href="/markets" className="nav-link" onClick={() => setIsOpen(false)}>
              Markets
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </Link>
            <div className="dropdown">
              <Link href="/markets/automotive" className="dropdown-item" onClick={() => setIsOpen(false)}>
                <div className="dropdown-icon">🚗</div>
                <div>
                  <div className="dropdown-label">Automotive</div>
                  <div className="dropdown-sub">Dealerships, EV brands & fleet management software</div>
                </div>
              </Link>
              <Link href="/markets/fintech" className="dropdown-item" onClick={() => setIsOpen(false)}>
                <div className="dropdown-icon">💳</div>
                <div>
                  <div className="dropdown-label">Fintech</div>
                  <div className="dropdown-sub">Banking, payments, insurance & financial SaaS</div>
                </div>
              </Link>
              <Link href="/markets/medicare" className="dropdown-item" onClick={() => setIsOpen(false)}>
                <div className="dropdown-icon">🏥</div>
                <div>
                  <div className="dropdown-label">Medicare</div>
                  <div className="dropdown-sub">Healthcare providers, insurance & patient platforms</div>
                </div>
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link href="/company" className="nav-link" onClick={() => setIsOpen(false)}>Company</Link>
          </li>
          <li className="nav-item">
            <Link href="/resources" className="nav-link" onClick={() => setIsOpen(false)}>Resources</Link>
          </li>
        </ul>

        <div className="nav-cta-group">
          <Link href="/work" className="btn-outline" onClick={() => setIsOpen(false)}>View Our Work</Link>
          <Link href="/demo" className="btn-demo" onClick={() => setIsOpen(false)}>Get a Free Demo</Link>
        </div>
      </div>
    </nav>
  );
}
