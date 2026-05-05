import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="/" className="footer-logo-wrap">
            <Image 
              src="/Orbiter%20Logo%20Footer.svg" 
              alt="Orbiters Logo" 
              width={180} 
              height={40} 
              className="footer-logo-img"
            />
          </Link>
          <p className="footer-desc">Digital marketing and design agency built for Fintech, Medicare, and Automotive scale-ups worldwide.</p>
          <div className="footer-contact">
            <div>Sales: <a href="tel:+18880000000">+1 (888) 000-0000</a></div>
            <div>Email: <a href="mailto:hello@orbiters.io">hello@orbiters.io</a></div>
            <div>Khulna, Bangladesh</div>
          </div>
        </div>
        <div>
          <div className="footer-col-title">Solutions</div>
          <div className="footer-links">
            <a href="#">Digital Advertising</a>
            <a href="#">Social Media</a>
            <a href="#">Reputation Management</a>
            <a href="#">Lead Response</a>
            <a href="#">UI/UX Design</a>
            <a href="#">Web Development</a>
          </div>
        </div>
        <div>
          <div className="footer-col-title">Markets</div>
          <div className="footer-links">
            <Link href="/markets/automotive">Automotive</Link>
            <Link href="/markets/fintech">Fintech</Link>
            <Link href="/markets/medicare">Medicare</Link>
            <Link href="/markets/saas">Industry SaaS</Link>
          </div>
        </div>
        <div>
          <div className="footer-col-title">Company</div>
          <div className="footer-links">
            <Link href="/company">About Us</Link>
            <Link href="/work">Our Work</Link>
            <Link href="/resources">Blog</Link>
            <a href="#">Careers</a>
            <Link href="/demo">Contact</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">© 2025 Orbiters. All rights reserved.</div>
        <div className="footer-bottom-right">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}

