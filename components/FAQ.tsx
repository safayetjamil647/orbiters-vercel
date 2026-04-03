import React from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "How does Orbiters help automotive dealerships scale?",
      answer: "We provide high-intensity digital advertising, automated lead response tools, and reputation management specifically designed to increase showroom visits and conversion rates for dealerships."
    },
    {
      question: "What is the best digital marketing strategy for EV brands?",
      answer: "EV brands succeed by combining educational content about charging and range with highly targeted ads reaching sustainability-focused and tech-savvy buyers."
    },
    {
      question: "Does Orbiters offer custom UI/UX design for automotive SaaS?",
      answer: "Yes, our team specializes in production-grade UI/UX for automotive dashboards, dealer portals, and SaaS platforms, ensuring high retention and an intuitive user experience."
    },
    {
      question: "How long does it take to see results from an automotive SEO campaign?",
      answer: "While SEO is a long-term play, most of our automotive clients see measurable local rankings and organic lead growth within 3 to 6 months."
    }
  ];

  return (
    <section className="section-challenges" style={{ background: 'var(--white)' }}>
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag">AEO Hub</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-sub">
            Commonly searched questions about automotive digital transformation and our proven solutions.
          </p>
        </div>

        <div className="challenges-grid" style={{ gridTemplateColumns: '1fr' }}>
          {faqs.map((faq, index) => (
            <div key={index} className="challenge-card" style={{ padding: '24px' }}>
              <h3 className="challenge-title" style={{ fontSize: '18px', marginBottom: '12px' }}>{faq.question}</h3>
              <p className="challenge-desc" style={{ fontSize: '14px', maxWidth: '100%' }}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
