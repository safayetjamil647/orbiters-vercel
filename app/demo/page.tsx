import React from "react";
import { Metadata } from "next";
import UtilityBar from "../../components/UtilityBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Book a Free Demo",
  description: "Schedule your free automotive growth consultation and see how Orbiters can accelerate your brand.",
};

export default function DemoPage() {
  return (
    <>
      <UtilityBar />
      <Navbar />
      <main>
        <section className="hero">
          <div className="hero-grid-bg"></div>
          <div className="hero-glow"></div>
          <div className="hero-inner">
            <div className="hero-left">
              <div className="hero-eyebrow">
                <span className="hero-eyebrow-dot"></span>
                Get a Free Demo
              </div>
              <h1 className="hero-headline">
                Ready to accelerate your<br />
                <span className="hl">Automotive Growth?</span>
              </h1>
              <p className="hero-sub">
                Our team of experts is ready to show you how Orbiters can help you attract more customers, optimize your digital footprint, and scale your business with ease.
              </p>
              
              <div className="hero-features" style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div className="hero-card">
                  <div className="hero-card-top">
                    <div className="hero-card-icon">🚀</div>
                    <div className="hero-card-title">Personalized Growth Roadmap</div>
                  </div>
                  <div className="hero-card-desc">During our demo, we'll provide a custom strategy for your specific business goals.</div>
                </div>
                <div className="hero-card">
                  <div className="hero-card-top">
                    <div className="hero-card-icon">💡</div>
                    <div className="hero-card-title">Actionable Insights</div>
                  </div>
                  <div className="hero-card-desc">Walk away with clear insights and immediate steps to improve your digital marketing ROI.</div>
                </div>
              </div>
            </div>
            
            <div className="hero-right demo-form-container" style={{ background: 'var(--white)', padding: '40px', borderRadius: '16px', boxShadow: '0 12px 48px rgba(0,0,0,0.15)' }}>
              <div className="section-header" style={{ textAlign: 'left', marginBottom: '24px' }}>
                <h2 className="section-title" style={{ fontSize: '24px', color: 'var(--navy)' }}>Request Your Demo</h2>
                <p className="section-sub" style={{ margin: '0', fontSize: '14px', color: 'var(--text-light)' }}>Complete the form below and an Orbiters specialist will reach out within 24 hours.</p>
              </div>
              
              <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="form-row">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--navy)' }}>Full Name</label>
                    <input type="text" placeholder="John Doe" style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--gray-200)', fontSize: '14px' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--navy)' }}>Work Email</label>
                    <input type="email" placeholder="john@company.com" style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--gray-200)', fontSize: '14px' }} />
                  </div>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--navy)' }}>Company Name</label>
                  <input type="text" placeholder="Orbiters Auto Group" style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--gray-200)', fontSize: '14px' }} />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--navy)' }}>Market Type</label>
                  <select style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--gray-200)', fontSize: '14px', background: 'white' }}>
                    <option>Auto Dealership</option>
                    <option>EV & Fleet</option>
                    <option>Automotive SaaS</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--navy)' }}>Your Goal</label>
                  <textarea placeholder="Tell us what you'd like to achieve..." rows={3} style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--gray-200)', fontSize: '14px', resize: 'none' }}></textarea>
                </div>
                
                <button type="submit" className="btn-hero-primary" style={{ border: 'none', justifyContent: 'center', marginTop: '8px' }}>
                  Schedule Demo
                </button>
              </form>
              
              <div style={{ marginTop: '24px', textAlign: 'center', fontSize: '12px', color: 'var(--text-light)' }}>
                By clicking submit, you agree to our <a href="#" style={{ color: 'var(--teal)', fontWeight: '600' }}>Privacy Policy</a>.
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
