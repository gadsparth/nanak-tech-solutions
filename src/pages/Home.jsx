import React, { useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, CheckCircle2, Star, Target, Sparkles, TrendingUp, ShieldAlert, Award, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Globe3D from '../components/Globe3D';
import PerformanceDashboard from '../components/PerformanceDashboard';
import InteractiveFunnel from '../components/InteractiveFunnel';
import RoiCalculator from '../components/RoiCalculator';
import SEO from '../components/SEO';

// Reusable scroll-lit timeline item
function TimelineStep({ step, index }) {
  const [ref, inView] = useInView({ threshold: 0.45, triggerOnce: false });
  return (
    <motion.div
      ref={ref}
      className={`timeline-item ${inView ? 'timeline-active' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
    >
      <div className="timeline-num font-mono">{step.num}</div>
      <div className="timeline-card glass-card">
        <h4>{step.title}</h4>
        <p>{step.desc}</p>
      </div>
    </motion.div>
  );
}

export default function Home({ introCompleted }) {
  const clients = [
    'Vercel', 'Linear', 'Stripe', 'Framer', 'Retool', 'Supabase'
  ];

  const timelineSteps = [
    { num: '01', title: 'Data Discovery', desc: 'Perform deep-dive audits of conversion channels, search engine profiles, and tracking logs to map blockages.' },
    { num: '02', title: 'Market Research', desc: 'Reverse-engineer competitor paid search parameters and organize industry query intent taxonomy.' },
    { num: '03', title: 'Strategy Blueprint', desc: 'Draft multi-layer landing paths, database programmatic SEO templates, and firmographic list targeting.' },
    { num: '04', title: 'Creative Execution', desc: 'Build responsive design frameworks, mobile-first video hook assets, and high-performance forms.' },
    { num: '05', title: 'Launch Phase', desc: 'Sync tracking logs, configure Conversions APIs (CAPI), and initiate campaigns across search and social channels.' },
    { num: '06', title: 'Funnel Optimization', desc: 'Track scroll behaviors, identify qualifying form leakages, and run dynamic A/B split validation tests.' },
    { num: '07', title: 'Global Scaling', desc: 'Shift ad budgets to high-ROAS segments and expand programmatic search page domains to capture market share.' }
  ];

  // Framer Motion staggered variants for Hero reveal sequence
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="home-page-container">
      <SEO 
        title="World-Class Digital Marketing Engines" 
        description="Premium, futuristic marketing agency using high-end SaaS designs, Three.js 3D dashboards, interactive ROI tools, and expert SEO optimizations."
        schemaType="LocalBusiness"
        schemaData={{
          'name': 'Nanak Marketing Agency',
          'image': 'https://nanakmarketing.com/hero.jpg',
          'priceRange': '$$$$',
          'telephone': '+1-800-NANAK-MKTG',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': '77 Silicon Square Suite 400',
            'addressLocality': 'San Francisco',
            'addressRegion': 'CA',
            'postalCode': '94107',
            'addressCountry': 'US'
          }
        }}
      />

      <div className="ambient-glows">
        <div className="glow-orb" style={{ top: '10%', left: '5%', width: '500px', height: '500px', background: 'var(--gold-accent)', opacity: 0.04 }}></div>
        <div className="glow-orb" style={{ top: '35%', right: '5%', width: '600px', height: '600px', background: 'var(--bg-secondary)', opacity: 0.02 }}></div>
        <div className="glow-orb" style={{ bottom: '15%', left: '10%', width: '500px', height: '500px', background: 'var(--gold-accent)', opacity: 0.03 }}></div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <AnimatePresence>
            {introCompleted && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="hero-content"
              >
                <motion.div
                  variants={itemVariants}
                  className="hero-badge font-mono"
                >
                  <Sparkles size={12} className="hero-badge-icon" />
                  THE FUTURE OF GROWTH SCALING
                </motion.div>
                
                <motion.h1 
                  variants={lineVariants}
                  className="hero-title"
                >
                  Engineered for <br/>
                  <span className="hero-gold-sweep font-mono">Unfair Growth.</span>
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="hero-subtitle"
                >
                  We don't build generic marketing campaigns. We build premium, high-converting digital pipelines that scale MRR, reduce CAC, and unlock measurable market authority.
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="hero-actions"
                >
                  <Link to="/contact" className="btn-primary magnetic-target">
                    Book Scaling Session
                    <ArrowRight size={16} />
                  </Link>
                  <Link to="/roi-calculator" className="btn-secondary magnetic-target">
                    Calculate Projected ROI
                  </Link>
                </motion.div>

                {/* Floating Live KPI Widget */}
                <motion.div
                  variants={itemVariants}
                  className="hero-live-kpi glass-card"
                >
                  <div className="kpi-radar"></div>
                  <div>
                    <span className="kpi-label font-mono">Live Campaign Performance</span>
                    <span className="kpi-value font-mono">5.4x Avg ROAS Locked</span>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="hero-visual">
            <Globe3D />
          </div>
        </div>
      </section>

      {/* Social Proof Client Ticker */}
      <section className="client-ticker-section">
        <div className="ticker-heading">
          <p className="font-mono">TRUSTED BY MARGIN LEADERS WORLDWIDE</p>
        </div>
        <div className="ticker-container">
          <div className="ticker-track">
            {clients.concat(clients).map((client, idx) => (
              <span key={idx} className="ticker-item font-mono">{client}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Authority Stats Grid */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card glass-card">
              <h2 className="stat-num font-mono">$142M+</h2>
              <p className="stat-label">Client Revenue Scaled</p>
            </div>
            <div className="stat-card glass-card">
              <h2 className="stat-num font-mono">5.4x</h2>
              <p className="stat-label">Average Campaign ROAS</p>
            </div>
            <div className="stat-card glass-card">
              <h2 className="stat-num font-mono">1.2M+</h2>
              <p className="stat-label">High-Intent Leads Captured</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before / After Case Comparison Section */}
      <section className="comparison-section">
        <div className="container">
          <div className="section-title-wrapper flex-center flex-column">
            <span className="section-badge font-mono">LEGACY VS OPTIMIZED PIPELINES</span>
            <h2>Stop Leaking Qualified Pipeline</h2>
            <p className="section-subtext">See the measurable difference between legacy agency campaigns and Nanak engineered growth pipelines.</p>
          </div>

          <InteractiveFunnel />
        </div>
      </section>

      {/* Services Hub Preview */}
      <section className="services-preview-section">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-badge font-mono">OUR PIPELINE ARCHITECTURE</span>
            <h2>Core Growth Capabilities</h2>
            <p className="section-subtext">Click into our specialized blueprints to discover how we scale enterprise acquisitions.</p>
          </div>

          <div className="services-grid grid-3">
            <div className="service-preview-card glass-card">
              <div className="service-icon"><Target className="blue-icon" /></div>
              <h4>Search Engine Optimization</h4>
              <p>Programmatic SEO structures designed to claim top rankings for search volumes that drive bottom-line ARR.</p>
              <Link to="/services/technical-seo" className="service-link magnetic-target">
                Review Blueprint <ArrowRight size={14} />
              </Link>
            </div>

            <div className="service-preview-card glass-card">
              <div className="service-icon"><TrendingUp className="cyan-icon" /></div>
              <h4>Paid Media & Performance</h4>
              <p>Targeted search and social ads mapped directly to conversion layers, securing low CAC and high ROAS.</p>
              <Link to="/services/google-ads" className="service-link magnetic-target">
                Review Blueprint <ArrowRight size={14} />
              </Link>
            </div>

            <div className="service-preview-card glass-card">
              <div className="service-icon"><CheckCircle2 className="violet-icon" /></div>
              <h4>Conversion Rate Optimization</h4>
              <p>A/B testing, friction removal, and interactive qualified layout designs that double conversion probabilities.</p>
              <Link to="/services/cro" className="service-link magnetic-target">
                Review Blueprint <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-title-wrapper flex-center flex-column">
            <span className="section-badge font-mono">OUR EXECUTION ENGINE</span>
            <h2>The Growth Velocity Pipeline</h2>
            <p className="section-subtext">How we transition your digital presence from a legacy site into a high-converting machine.</p>
          </div>

          <div className="timeline-wrapper">
            {timelineSteps.map((step, idx) => (
              <TimelineStep key={idx} step={step} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Command Center */}
      <section className="dashboard-preview-section">
        <div className="container">
          <div className="section-title-wrapper flex-center flex-column">
            <span className="section-badge font-mono">DATA TRANSPARENCY</span>
            <h2>Interactive Command Center</h2>
            <p className="section-subtext">Interact with our active growth engines. Toggle industries to see simulated metrics.</p>
          </div>

          <PerformanceDashboard />
        </div>
      </section>

      {/* ROI Slider Calculator */}
      <section className="roi-calculator-section">
        <div className="container">
          <div className="section-title-wrapper flex-center flex-column">
            <span className="section-badge font-mono">PROJECTED YIELDS</span>
            <h2>ROI Projection Engine</h2>
            <p className="section-subtext">Model your target returns. Drag parameters to map cost boundaries and budget limits.</p>
          </div>

          <RoiCalculator />
        </div>
      </section>

      {/* Sticky Bottom Lead Capture Banner */}
      <div className="sticky-cta font-mono">
        <div className="sticky-dot"></div>
        <span className="sticky-text">QUALIFIED DEMO SLOTS AVAILABLE</span>
        <Link to="/contact" className="btn-primary nav-cta magnetic-target">
          Lock Time Slot
          <ArrowUpRight size={14} />
        </Link>
      </div>

      <style>{`
        .home-page-container {
          position: relative;
          width: 100%;
        }

        .hero-section {
          padding: 8rem 0 6rem 0;
          min-height: 90vh;
          display: flex;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.75rem;
          text-align: left;
        }

        .hero-badge {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: 99px;
          padding: 0.4rem 1rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--gold-accent);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .hero-badge-icon {
          animation: spin 3s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .hero-title {
          font-size: 3.8rem;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -2px;
          color: #ffffff;
        }

        .hero-gold-sweep {
          background: linear-gradient(90deg, #FAFAFA 0%, #C8A04A 50%, #FAFAFA 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gold-sweep 4s linear infinite;
        }

        @keyframes gold-sweep {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }

        .hero-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.7;
          max-width: 580px;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .hero-live-kpi {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem 1.25rem;
          border-radius: 12px;
          margin-top: 1.5rem;
        }

        .kpi-radar {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--gold-accent);
          position: relative;
        }

        .kpi-radar::after {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          border-radius: 50%;
          border: 1px solid var(--gold-accent);
          animation: radar-ping 1.5s ease-out infinite;
        }

        @keyframes radar-ping {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2.2); opacity: 0; }
        }

        .kpi-label {
          display: block;
          font-size: 0.7rem;
          color: var(--text-muted);
          margin-bottom: 0.1rem;
        }

        .kpi-value {
          font-size: 0.85rem;
          color: #ffffff;
          font-weight: 700;
        }

        .hero-visual {
          width: 100%;
          height: 500px;
          position: relative;
        }

        /* Client Ticker */
        .client-ticker-section {
          padding: 3rem 0;
          border-y: 1px solid var(--border-color);
          background-color: rgba(24, 24, 24, 0.4);
          overflow: hidden;
          position: relative;
          z-index: 1;
        }

        .ticker-heading {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .ticker-heading p {
          font-size: 0.7rem;
          letter-spacing: 2px;
          color: var(--text-muted);
        }

        .ticker-container {
          width: 100%;
          display: flex;
          overflow: hidden;
        }

        .ticker-track {
          display: flex;
          gap: 5rem;
          animation: ticker-roll 30s linear infinite;
        }

        @keyframes ticker-roll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        .ticker-item {
          font-size: 1.15rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.2);
          transition: var(--transition-fast);
        }

        .ticker-item:hover {
          color: var(--gold-accent);
          text-shadow: 0 0 8px rgba(200, 160, 74, 0.2);
        }

        /* Stats Grid */
        .stats-section {
          padding: 5rem 0;
          position: relative;
          z-index: 1;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .stat-card {
          text-align: center;
          padding: 2.5rem;
        }

        .stat-num {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .stat-label {
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 500;
        }

        /* Comparison Section */
        .comparison-section {
          padding: 6rem 0;
          position: relative;
          z-index: 1;
        }

        .section-title-wrapper {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .section-badge {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: 99px;
          padding: 0.3rem 0.8rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--gold-accent);
          margin-bottom: 0.8rem;
          display: inline-block;
        }

        .section-title-wrapper h2 {
          font-size: 2.5rem;
          font-weight: 800;
          letter-spacing: -1px;
          margin-bottom: 0.8rem;
        }

        .section-subtext {
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Services Preview */
        .services-preview-section {
          padding: 6rem 0;
          position: relative;
          z-index: 1;
        }

        .service-preview-card {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          text-align: left;
        }

        .service-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .blue-icon { color: var(--gold-accent); }
        .cyan-icon { color: var(--gold-accent); }
        .violet-icon { color: var(--gold-accent); }

        .service-preview-card h4 {
          font-size: 1.2rem;
          font-weight: 700;
        }

        .service-preview-card p {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .service-link {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--gold-accent);
        }

        .service-link:hover {
          color: #ffffff;
        }

        /* Timeline Process */
        .timeline-section {
          padding: 6rem 0;
          position: relative;
          z-index: 1;
        }

        .timeline-wrapper {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          max-width: 800px;
          margin: 4rem auto 0 auto;
          position: relative;
        }

        .timeline-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 30px;
          width: 1px;
          height: 100%;
          background: linear-gradient(to bottom, var(--gold-accent), var(--border-color), transparent);
          opacity: 0.2;
        }

        .timeline-item {
          display: flex;
          gap: 2rem;
          align-items: flex-start;
          position: relative;
        }

        .timeline-num {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #040408;
          border: 1.5px solid var(--border-color);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--text-muted);
          flex-shrink: 0;
          z-index: 2;
          transition: all 0.4s ease;
        }

        .timeline-card {
          flex: 1;
          padding: 1.5rem 2rem;
        }

        .timeline-card h4 {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 0.4rem;
        }

        .timeline-card p {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        /* Active Timeline Highlight classes */
        .timeline-item.timeline-active .timeline-num {
          border-color: var(--gold-accent);
          background: var(--gold-accent);
          color: #111111;
          box-shadow: 0 0 15px rgba(200, 160, 74, 0.35);
        }

        .timeline-item.timeline-active .timeline-card {
          border-color: rgba(200, 160, 74, 0.25);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(200, 160, 74, 0.08);
        }

        /* Dashboard & ROI previews */
        .dashboard-preview-section, .roi-calculator-section {
          padding: 6rem 0;
          position: relative;
          z-index: 1;
        }

        /* Sticky bottom dot info */
        .sticky-dot {
          width: 8px;
          height: 8px;
          background-color: var(--gold-accent);
          border-radius: 50%;
          display: inline-block;
          animation: pulse-dot 1.5s infinite;
        }

        @keyframes pulse-dot {
          0% { transform: scale(0.8); opacity: 0.5; }
          50% { transform: scale(1.3); opacity: 1; }
          100% { transform: scale(0.8); opacity: 0.5; }
        }

        .sticky-text {
          font-size: 0.8rem;
          color: #ffffff;
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }
          .hero-content {
            align-items: center;
          }
          .hero-title {
            font-size: 3rem;
          }
          .hero-actions {
            justify-content: center;
          }
          .hero-visual {
            height: 380px;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 2.2rem;
          }
          .stats-grid {
            grid-template-columns: 1fr;
          }
          .timeline-wrapper::before {
            left: 20px;
          }
          .timeline-num {
            width: 40px;
            height: 40px;
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  );
}
