import React from "react";

export default function CTABand() {
  return (
    <section className="cta-band">
      <div className="cta-glow"></div>
      <div className="cta-inner">
        <div className="section-tag" style={{ marginBottom: "20px" }}>Ready to launch?</div>
        <h2 className="cta-title">Give your business the<br /><span>ultimate advantage.</span></h2>
        <p className="cta-sub">Connect with our team today and discover how Orbiters helps automotive businesses attract more clients, convert more leads, and build lasting brands.</p>
        <div className="cta-actions">
          <button className="btn-cta-primary">Get a Free Demo</button>
          <button className="btn-cta-ghost">View Our Work</button>
        </div>
      </div>
    </section>
  );
}
