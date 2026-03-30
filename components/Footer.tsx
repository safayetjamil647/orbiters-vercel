import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo-wrap">
            <div className="footer-logo-mark"></div>
            <span className="footer-logo-text">ORBIT<span>ERS</span></span>
          </div>
          <p className="footer-desc">Digital marketing and design agency built exclusively for automotive businesses and SaaS companies worldwide.</p>
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
            <a href="#">Auto Dealerships</a>
            <a href="#">EV & Fleet</a>
            <a href="#">Automotive SaaS</a>
            <a href="#">Specialty Dealers</a>
          </div>
        </div>
        <div>
          <div className="footer-col-title">Company</div>
          <div className="footer-links">
            <a href="#">About Us</a>
            <a href="#">Our Work</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
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
