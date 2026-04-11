import React from "react";

export default function Challenges() {
  return (
    <section className="section-challenges">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-tag">Your Challenges</div>
          <h2 className="section-title">What's stopping your business<br />from more sales?</h2>
          <p className="section-sub">Select your biggest challenge and discover how Orbiters solves it for high-growth businesses in Fintech, Medicare, and Automotive.</p>
        </div>
        <div className="challenges-grid">
          <div className="challenge-card">
            <div className="challenge-num">Challenge 01</div>
            <h3 className="challenge-title">We're not generating enough quality leads from our digital presence.</h3>
            <p className="challenge-desc">Your competitors are capturing online shoppers while your website sits idle. Consumers research online before making decisions — you need to be visible at every touchpoint.</p>
            <a href="#" className="challenge-link">Get the solution →</a>
          </div>
          <div className="challenge-card">
            <div className="challenge-num">Challenge 02</div>
            <h3 className="challenge-title">Our team isn't following up on leads fast enough and we're losing deals.</h3>
            <p className="challenge-desc">Speed-to-lead is everything in specialized sectors. Without a consistent response process, you're handing sales to competitors who respond in minutes, not hours.</p>
            <a href="#" className="challenge-link">Get the solution →</a>
          </div>
          <div className="challenge-card">
            <div className="challenge-num">Challenge 03</div>
            <h3 className="challenge-title">We struggle to get positive reviews and manage our online reputation.</h3>
            <p className="challenge-desc">89% of consumers read reviews before choosing a service provider. A weak review profile means losing customers before they even contact you.</p>
            <a href="#" className="challenge-link">Get the solution →</a>
          </div>
          <div className="challenge-card">
            <div className="challenge-num">Challenge 04</div>
            <h3 className="challenge-title">Our SaaS product needs better design but we don't have an in-house team.</h3>
            <p className="challenge-desc">A poorly designed interface costs you clients who expect polished software. Great UI/UX isn't a luxury — it's a retention strategy for industrial platforms.</p>
            <a href="#" className="challenge-link">Get the solution →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

