import React from "react";

export default function Trust() {
  const logos = ["Dealertrack", "Lotame", "AutoFi", "Tekion", "Roadster", "DealerSocket"];

  return (
    <div className="section-trust">
      <div className="trust-label">Trusted by businesses across automotive & SaaS</div>
      <div className="trust-logos">
        {logos.map((logo, idx) => (
          <div key={idx} className="trust-logo">
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
}
