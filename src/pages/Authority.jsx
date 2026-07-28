import React from 'react';
import { ShieldCheck, Award, Users, BookOpen, Key, Target, Globe, Milestone } from 'lucide-react';
import SEO from '../components/SEO';

export default function Authority() {
  const certifications = [
    { name: 'Google Premier Partner', level: 'Top 3% Agency Tier', desc: 'Validated performance metrics across search, shopping, and display networks.' },
    { name: 'Meta Business Partner', level: 'Performance Channel Specialist', desc: 'Direct access to beta alpha products and API bidding algorithms.' },
    { name: 'HubSpot Gold Solutions Partner', level: 'Inbound CRM Engineering', desc: 'Certified integration setups mapping contacts database attributes to ad pixels.' }
  ];

  const coreValues = [
    { title: 'Data Sovereignty & Privacy', icon: <Key size={20} />, desc: 'We align pixel tracking directly with GDPR and CCPA requirements, protecting user identifiers.' },
    { title: 'Zero Bloat Performance', icon: <ShieldCheck size={20} />, desc: 'No heavy third-party dashboard trackers. We build light custom analytics layers on your code.' },
    { title: 'Accountability & Math', icon: <Milestone size={20} />, desc: 'We do not report simple vanity metrics. We attribute campaigns to cash flow, pipelines, and net margins.' }
  ];

  return (
    <div className="authority-page-wrapper">
      <SEO 
        title="Corporate Authority & EEAT Credentials" 
        description="Review Nanak Marketing founder history, Google Premier Partner certifications, corporate growth ethics, and server-side tracking security compliance guidelines."
      />

      <div className="container">
        
        {/* Page Header */}
        <div className="section-title-wrapper flex-center flex-column">
          <span className="section-badge font-mono">ESTABLISHED TRUST</span>
          <h2>Experience & Enterprise Authority</h2>
          <p className="section-subtext">How Nanak constructs compliant, high-performing growth loops for digital leaders.</p>
        </div>

        {/* Founders Story Section */}
        <div className="founders-section glass-card">
          <div className="founders-content">
            <span className="sub-badge font-mono">OUR HISTORICAL ORIGINS</span>
            <h3>Re-engineering Modern Digital Marketing</h3>
            <p>
              Founded in 2021 by a team of software engineers and growth directors, Nanak was built to solve a specific industry problem: standard agencies rely on generic advertising templates and bloated third-party tracking scripts that slow down load times, hurt SEO, and fail on conversions.
            </p>
            <p>
              By combining high-performance Javascript frontends with optimized database index caching and structured search queries, we built growth loops that scale. Today, we manage over $45M in annualized performance ad spends and deploy semantic search pipelines across three continents.
            </p>
          </div>
          <div className="founders-stat-display">
            <div className="f-stat glass-card">
              <span className="f-num font-mono">14+</span>
              <span className="f-label">Creative Engineers</span>
            </div>
            <div className="f-stat glass-card">
              <span className="f-num font-mono">3</span>
              <span className="f-label">Global Offices</span>
            </div>
          </div>
        </div>

        {/* Certifications Badge Section */}
        <div className="certifications-section">
          <div className="section-title-wrapper flex-center flex-column">
            <span className="section-badge font-mono">PARTNER PROTOCOLS</span>
            <h3>Certified Operational Expertise</h3>
            <p className="section-subtext">We are vetted directly by the principal ad networks and platform giants.</p>
          </div>

          <div className="grid-3 cert-grid">
            {certifications.map((cert, idx) => (
              <div key={idx} className="glass-card cert-card">
                <div className="cert-icon-box"><Award size={24} className="cert-icon" /></div>
                <h4>{cert.name}</h4>
                <span className="cert-level font-mono">{cert.level}</span>
                <p>{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ethical Marketing Practices & Compliance */}
        <div className="compliance-section glass-card">
          <div className="compliance-intro">
            <h3>Methodological Integrity & Compliance</h3>
            <p>Our work practices adhere to strict ethical growth and technical safety parameters.</p>
          </div>
          
          <div className="grid-3 value-grid">
            {coreValues.map((val, idx) => (
              <div key={idx} className="value-card">
                <div className="val-icon-container">{val.icon}</div>
                <h5>{val.title}</h5>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .authority-page-wrapper {
          padding: 8rem 0 6rem 0;
          position: relative;
        }

        .founders-section {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 6rem;
          padding: 3rem;
        }

        .founders-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .sub-badge {
          color: var(--neon-cyan);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .founders-content h3 {
          font-size: 1.8rem;
          font-weight: 800;
        }

        .founders-content p {
          color: var(--text-muted);
          line-height: 1.7;
          font-size: 1rem;
        }

        .founders-stat-display {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        .f-stat {
          padding: 1.5rem;
          text-align: center;
        }

        .f-num {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--neon-blue);
          display: block;
        }

        .f-label {
          color: var(--text-muted);
          font-size: 0.85rem;
          font-weight: 500;
        }

        .certifications-section {
          margin-bottom: 6rem;
        }

        .cert-card {
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .cert-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(200, 160, 74, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cert-icon {
          color: var(--gold-accent);
        }

        .cert-card h4 {
          font-size: 1.15rem;
          font-weight: 700;
        }

        .cert-level {
          font-size: 0.75rem;
          color: var(--gold-accent);
          background: rgba(200, 160, 74, 0.05);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          width: fit-content;
        }

        .cert-card p {
          color: var(--text-muted);
          font-size: 0.85rem;
          line-height: 1.6;
        }

        .compliance-section {
          padding: 3rem;
        }

        .compliance-intro {
          margin-bottom: 3rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 1.5rem;
        }

        .compliance-intro h3 {
          font-size: 1.6rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }

        .compliance-intro p {
          color: var(--text-muted);
        }

        .value-card {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .val-icon-container {
          color: var(--neon-cyan);
        }

        .value-card h5 {
          font-size: 1.05rem;
          font-weight: 700;
        }

        .value-card p {
          color: var(--text-muted);
          font-size: 0.85rem;
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .founders-section {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .founders-stat-display {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
}
