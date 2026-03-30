import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="stats-inner">
        <div className="stat-item">
          <div className="stat-num">500<span>+</span></div>
          <div className="stat-label">Clients Served Globally</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">12<span>M+</span></div>
          <div className="stat-label">Leads Generated</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">32<span></span></div>
          <div className="stat-label">Countries Reached</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">4.9<span>★</span></div>
          <div className="stat-label">Average Client Rating</div>
        </div>
      </div>
    </div>
  );
}
