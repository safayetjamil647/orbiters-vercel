import React from "react";

export default function Marquee() {
  const items = [
    "Digital Advertising",
    "Social Media Marketing",
    "Reputation Management",
    "UI/UX Design",
    "Lead Response",
    "Web Development",
    "Product Strategy",
    "Text Marketing",
    "Inventory Merchandising",
  ];

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {/* Repeat twice for seamless infinite scroll */}
        {[...items, ...items].map((item, idx) => (
          <span key={idx} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
