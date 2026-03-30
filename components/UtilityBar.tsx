import React from "react";

export default function UtilityBar() {
  return (
    <div className="util-bar">
      <div className="util-links">
        <a href="#">Client Login</a>
        <span className="util-sep">|</span>
        <a href="#">Partner Portal</a>
        <span className="util-sep">|</span>
        <a href="#">Support</a>
      </div>
      <div className="util-contact">
        <span>Sales: +1 (888) 000-0000</span>
        <span className="util-sep">|</span>
        <a href="mailto:hello@orbiters.io">hello@orbiters.io</a>
      </div>
    </div>
  );
}
