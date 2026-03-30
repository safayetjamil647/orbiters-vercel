import React from "react";

export default function Process() {
  const steps = [
    {
      dot: "📞",
      num: "Step 01",
      title: "Discovery Call",
      desc: "We learn your business, goals, and challenges. No templates — every engagement starts from your specific context.",
    },
    {
      dot: "📋",
      num: "Step 02",
      title: "Proposal & Scope",
      desc: "A clear deliverable list, timeline, and fixed price. You know exactly what you're getting before we start.",
    },
    {
      dot: "🚀",
      num: "Step 03",
      title: "Design & Execute",
      desc: "We work in focused sprints with regular check-ins. You see real progress early and often — no black boxes.",
    },
    {
      dot: "✅",
      num: "Step 04",
      title: "Deliver & Support",
      desc: "Clean handoff — files, code, documentation. Optional retainer available to keep growing momentum.",
    },
  ];

  return (
    <section className="section-process">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-tag">How We Work</div>
          <h2 className="section-title">Simple process. Zero surprises.</h2>
          <p className="section-sub">From first call to final delivery — we keep things clear, fast, and collaborative.</p>
        </div>
        <div className="process-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="process-step">
              <div className="process-dot">{step.dot}</div>
              <div className="process-num">{step.num}</div>
              <div className="process-title">{step.title}</div>
              <div className="process-desc">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
