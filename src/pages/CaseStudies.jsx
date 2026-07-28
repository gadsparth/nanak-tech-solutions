import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, ArrowRight, Zap, Target, TrendingUp, CheckCircle2, Clock, Star, ShieldAlert
} from 'lucide-react';
import SEO from '../components/SEO';

const caseStudiesData = {
  'apex-saas': {
    title: 'Apex Analytics MRR scaled from $120K to $650K via Programmatic SEO engines.',
    client: 'Apex Analytics',
    industry: 'saas',
    service: 'seo',
    challenge: 'Struggling to scale traffic past a organic plateau, experiencing high reliance on expensive Google search CPC, and recording low conversion rates.',
    strategy: 'Map high-intent search console clusters and deploy programmatic landing assets resolving technical crawl budgets.',
    execution: 'Constructed custom fast layout nodes, optimized database structures to resolve core web vitals, and structured dynamic sitemap links.',
    channels: 'Google Search, Technical SEO, Content Architecture',
    timeline: '6 Months',
    stats: {
      traffic: '+340% Traffic',
      revenue: '$650K MRR',
      leads: '+180% SQLs',
      roas: '5.2x Equiv'
    },
    testimonial: {
      quote: "Nanak's SEO architecture solved our scaling challenges. We saw search rankings and lead inquiries skyrocket in under 60 days.",
      author: "Sarah Jenkins",
      role: "VP of Growth, Apex Analytics"
    }
  },
  'lux-jewelry': {
    title: 'Unlocking 6.2x ROAS for Lux Jewels using custom qualify flows.',
    client: 'Lux Jewels',
    industry: 'ecommerce',
    service: 'cro',
    challenge: 'High cart abandonment rate on checkouts, high cost per customer acquisition (CAC), and low average order values (AOV).',
    strategy: 'Deploy a multi-step qualifications form flow, A/B test layout structures, and insert urgency triggers.',
    execution: 'Designed highly polished checkout routes, integrated dynamic micro-incentives, and streamlined cart loading speeds.',
    channels: 'Meta Ads, Conversion Rate Optimization, A/B Testing',
    timeline: '3 Months',
    stats: {
      traffic: '+80% Growth',
      revenue: '$1.4M Scaled',
      leads: '+280% Orders',
      roas: '6.2x ROAS'
    },
    testimonial: {
      quote: "The multi-step qualify form doubled our checkout conversion rates almost overnight. Outstanding conversion designs.",
      author: "Robert Miller",
      role: "CEO, Lux Jewels"
    }
  },
  'payflow-fintech': {
    title: 'Scaling signup volumes by 180% with performance ads optimization.',
    client: 'Payflow App',
    industry: 'finance',
    service: 'paid-ads',
    challenge: 'High cost per acquisition (CPA) on LinkedIn and Google search campaigns, low credit qualify rate for prospects.',
    strategy: 'Build lookalike bidding matrices and route ads to custom qualify nodes.',
    execution: 'Calibrated performance ads parameters, designed localized intent ads, and automated landing validation steps.',
    channels: 'LinkedIn Ads, Google Search, Custom Funnels',
    timeline: '5 Months',
    stats: {
      traffic: '+120% Traffic',
      revenue: '$1.1M Budget Rev',
      leads: '9,400 Accounts',
      roas: '5.5x ROAS'
    },
    testimonial: {
      quote: "Our Cost Per Acquisition dropped by 44% in the first quarter of working with the Nanak team.",
      author: "Marcus Chen",
      role: "Director of Marketing, Payflow"
    }
  }
};

export default function CaseStudies() {
  const { caseStudyId } = useParams();
  const currentCase = caseStudiesData[caseStudyId];
  
  const [industryFilter, setIndustryFilter] = useState('all');
  const [serviceFilter, setServiceFilter] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Extract unique sectors and capabilities dynamically
  const uniqueIndustries = ['all', ...new Set(Object.values(caseStudiesData).map(item => item.industry))];
  const uniqueServices = ['all', ...new Set(Object.values(caseStudiesData).map(item => item.service))];

  // If viewing a specific case study (Render as Slide Deck Presentation)
  if (currentCase) {
    const slides = [
      {
        title: "Client Profile & Overview",
        content: (
          <div className="slide-layout-split">
            <div className="sl-left">
              <span className="badge font-mono">STEP 01 / 07</span>
              <h3>Background Analysis</h3>
              <p className="slide-intro-text">We partnered with <strong>{currentCase.client}</strong> to optimize their acquisition metrics, reconstruct conversion paths, and establish clear market authority.</p>
              <div className="slide-details-list font-mono">
                <div className="sdl-item"><strong>Timeline:</strong> {currentCase.timeline}</div>
                <div className="sdl-item"><strong>Channels Mapped:</strong> {currentCase.channels}</div>
              </div>
            </div>
            <div className="sl-right">
              <div className="glass-card visual-badge-card">
                <Clock size={28} className="gold-txt" style={{ marginBottom: '1rem' }} />
                <h4>Campaign Term</h4>
                <p className="font-mono" style={{ fontSize: '1.4rem', color: '#ffffff', marginTop: '0.5rem' }}>
                  {currentCase.timeline}
                </p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Validated campaign cycle.</p>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "The Core Challenge",
        content: (
          <div className="slide-layout-split">
            <div className="sl-left">
              <span className="badge font-mono">STEP 02 / 07</span>
              <h3>Identifying Funnel Bottlenecks</h3>
              <p className="slide-intro-text">{currentCase.challenge}</p>
            </div>
            <div className="sl-right">
              <div className="glass-card stat-alert-card">
                <ShieldAlert size={28} className="gold-txt" style={{ marginBottom: '1rem' }} />
                <h4>Identified Blockages</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Legacy metrics suffered from acquisition leaks, rising CPCs, and checkout abandoned form events.</p>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Technical Research & Audits",
        content: (
          <div className="slide-layout-split">
            <div className="sl-left">
              <span className="badge font-mono">STEP 03 / 07</span>
              <h3>Data Diagnostics</h3>
              <p className="slide-intro-text">Our tech teams scanned legacy log data, crawl budget parameters, LCP page paint speeds, and scroll behavior maps to pinpoint friction variables.</p>
            </div>
            <div className="sl-right">
              <div className="glass-card diagnostic-result-card">
                <Target size={28} className="gold-txt" style={{ marginBottom: '1rem' }} />
                <h4>Audit Parameters</h4>
                <ul className="diag-list font-mono">
                  <li>Crawl budget waste: 34%</li>
                  <li>LCP Paint Speed: 4.2s</li>
                  <li>Form dropout rates: 58%</li>
                </ul>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Growth Strategy Blueprint",
        content: (
          <div className="slide-layout-split">
            <div className="sl-left">
              <span className="badge font-mono">STEP 04 / 07</span>
              <h3>Formulating Optimization Paths</h3>
              <p className="slide-intro-text">{currentCase.strategy}</p>
            </div>
            <div className="sl-right">
              <div className="glass-card strategy-map-card">
                <TrendingUp size={28} className="gold-txt" style={{ marginBottom: '1rem' }} />
                <h4>Planned Interventions</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Rebuild sitemaps structures, deploy exact-match paid campaigns, and launch secure multi-step surveys.</p>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Execution Protocols",
        content: (
          <div className="slide-layout-split">
            <div className="sl-left">
              <span className="badge font-mono">STEP 05 / 07</span>
              <h3>Engineering The Pipeline</h3>
              <p className="slide-intro-text">{currentCase.execution}</p>
            </div>
            <div className="sl-right">
              <div className="glass-card execution-badge-card">
                <Zap size={28} className="gold-txt" style={{ marginBottom: '1rem' }} />
                <h4>Deployed Systems</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Vite React layouts, cloud conversions API (CAPI), programmatic SEO nodes, and automated scheduling forms.</p>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Performance Impact",
        content: (
          <div className="slide-layout-split">
            <div className="sl-left">
              <span className="badge font-mono">STEP 06 / 07</span>
              <h3>Measurable Growth Results</h3>
              <p className="slide-intro-text">The campaign optimization quickly locked in target acquisition, traffic volumes, and conversion metrics.</p>
              <div className="performance-checklist font-mono">
                <div className="pc-row"><CheckCircle2 size={16} className="gold-txt" /> <span>Revenue: {currentCase.stats.revenue}</span></div>
                <div className="pc-row"><CheckCircle2 size={16} className="gold-txt" /> <span>Traffic: {currentCase.stats.traffic}</span></div>
                <div className="pc-row"><CheckCircle2 size={16} className="gold-txt" /> <span>Acquisitions: {currentCase.stats.leads}</span></div>
                <div className="pc-row"><CheckCircle2 size={16} className="gold-txt" /> <span>ROAS: {currentCase.stats.roas}</span></div>
              </div>
            </div>
            <div className="sl-right">
              <div className="glass-card impact-chart-container">
                <svg viewBox="0 0 200 120" className="animated-svg-chart">
                  <motion.path
                    d="M 10 110 L 50 80 L 90 90 L 130 40 L 170 10"
                    fill="none"
                    stroke="var(--gold-accent)"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.8, ease: 'easeInOut' }}
                  />
                  <circle cx="10" cy="110" r="4" fill="#ffffff" />
                  <circle cx="50" cy="80" r="4" fill="#ffffff" />
                  <circle cx="90" cy="90" r="4" fill="#ffffff" />
                  <circle cx="130" cy="40" r="4" fill="#ffffff" />
                  <circle cx="170" cy="10" r="4" fill="var(--gold-accent)" />
                </svg>
                <div className="chart-label font-mono">Revenue Compounding Curve</div>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Client Feedback & Call",
        content: (
          <div className="slide-layout-split">
            <div className="sl-left">
              <span className="badge font-mono">STEP 07 / 07</span>
              <h3>Verified Testimonial</h3>
              <div className="testimonial-quote-box">
                <Star size={24} className="gold-txt" style={{ marginBottom: '1rem' }} />
                <p className="testimonial-quote">"{currentCase.testimonial.quote}"</p>
                <span className="author-name">{currentCase.testimonial.author}</span>
                <span className="author-role font-mono">{currentCase.testimonial.role}</span>
              </div>
            </div>
            <div className="sl-right">
              <div className="glass-card cta-box-case flex-center flex-column" style={{ padding: '2.5rem' }}>
                <h4>Ready to replicate this scale?</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0.5rem 0 1.5rem 0', textAlign: 'center' }}>Map cost boundaries and outline campaigns with our scale engineers.</p>
                <Link to="/contact" className="btn-primary full-btn magnetic-target">
                  Request Growth Audit
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        )
      }
    ];

    return (
      <div className="case-detail-wrapper">
        <SEO 
          title={`${currentCase.client} Case Study`}
          description={currentCase.title}
          schemaType="Article"
          schemaData={{
            'headline': currentCase.title,
            'publisher': {
              '@type': 'Organization',
              'name': 'Nanak Marketing'
            },
            'author': {
              '@type': 'Organization',
              'name': 'Nanak Growth Team'
            }
          }}
        />

        <div className="container">
          <Link to="/case-studies" className="back-link font-mono magnetic-target">
            <ArrowLeft size={16} /> Back to Archives
          </Link>

          {/* Presentation Header */}
          <div className="presentation-header-row">
            <div>
              <span className="case-client font-mono">{currentCase.client}</span>
              <h2>Interactive Growth Case Study</h2>
            </div>
            <div className="slide-step-counter font-mono">
              SLIDE {currentSlide + 1} / {slides.length}
            </div>
          </div>

          {/* Slide Deck Container */}
          <div className="slide-deck-card glass-card">
            <div className="slide-deck-header font-mono">
              {slides[currentSlide].title}
            </div>
            <div className="slide-deck-body">
              {slides[currentSlide].content}
            </div>
          </div>

          {/* Presentation Nav Controls */}
          <div className="slider-navigation-bar">
            <button
              onClick={() => setCurrentSlide(prev => Math.max(prev - 1, 0))}
              disabled={currentSlide === 0}
              className="btn-secondary nav-slide-btn magnetic-target"
            >
              <ArrowLeft size={16} /> Previous
            </button>
            <div className="slide-tracker">
              {slides.map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`tracker-dot ${currentSlide === idx ? 'tracker-dot-active' : ''}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1))}
              disabled={currentSlide === slides.length - 1}
              className="btn-primary nav-slide-btn magnetic-target"
            >
              Next <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <style>{`
          .case-detail-wrapper {
            padding: 8rem 0 6rem 0;
            background-color: var(--bg-color);
          }

          .back-link {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--text-muted);
            font-size: 0.85rem;
            margin-bottom: 3.5rem;
          }

          .back-link:hover {
            color: #ffffff;
          }

          .presentation-header-row {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-bottom: 2.5rem;
          }

          .case-client {
            color: var(--gold-accent);
            font-size: 0.85rem;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 0.4rem;
            display: block;
          }

          .presentation-header-row h2 {
            font-size: 2rem;
            font-weight: 850;
            letter-spacing: -1px;
          }

          .slide-step-counter {
            font-size: 0.85rem;
            color: var(--text-muted);
          }

          .slide-deck-card {
            padding: 0;
            overflow: hidden;
            min-height: 420px;
            display: flex;
            flex-direction: column;
            border-color: rgba(255,255,255,0.06);
            margin-bottom: 2rem;
          }

          .slide-deck-header {
            padding: 1.25rem 2.5rem;
            background: rgba(255,255,255,0.01);
            border-bottom: 1px solid var(--border-color);
            font-size: 0.75rem;
            font-weight: 700;
            color: var(--text-muted);
            letter-spacing: 1.5px;
          }

          .slide-deck-body {
            padding: 3rem 3.5rem;
            flex: 1;
            display: flex;
            align-items: center;
          }

          .slide-layout-split {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 4rem;
            width: 100%;
            align-items: center;
          }

          .sl-left h3 {
            font-size: 1.8rem;
            font-weight: 800;
            margin: 1rem 0 1.2rem 0;
            color: #ffffff;
          }

          .slide-intro-text {
            font-size: 1.05rem;
            color: var(--text-secondary);
            line-height: 1.6;
          }

          .slide-details-list {
            margin-top: 1.8rem;
            display: flex;
            flex-direction: column;
            gap: 0.6rem;
            font-size: 0.85rem;
            color: var(--text-muted);
          }

          .visual-badge-card, .stat-alert-card, .diagnostic-result-card, .strategy-map-card, .execution-badge-card {
            padding: 2rem;
          }

          .diag-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 0.6rem;
            margin-top: 0.8rem;
            font-size: 0.85rem;
            color: var(--text-secondary);
          }

          .performance-checklist {
            margin-top: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 0.6rem;
            font-size: 0.9rem;
            color: var(--text-primary);
          }

          .pc-row {
            display: flex;
            align-items: center;
            gap: 0.6rem;
          }

          .impact-chart-container {
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .animated-svg-chart {
            width: 100%;
            height: auto;
            overflow: visible;
          }

          .chart-label {
            font-size: 0.75rem;
            color: var(--text-muted);
            margin-top: 0.8rem;
          }

          .testimonial-quote-box {
            display: flex;
            flex-direction: column;
          }

          .testimonial-quote {
            font-size: 1.2rem;
            line-height: 1.6;
            color: #ffffff;
            font-style: italic;
            margin-bottom: 1.25rem;
          }

          .author-name {
            font-weight: 600;
            color: var(--text-primary);
          }

          .author-role {
            font-size: 0.75rem;
            color: var(--text-muted);
            margin-top: 0.1rem;
          }

          .slider-navigation-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .nav-slide-btn {
            padding: 0.6rem 1.5rem;
            font-size: 0.85rem;
          }

          .slide-tracker {
            display: flex;
            gap: 0.8rem;
          }

          .tracker-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.12);
            cursor: pointer;
            transition: var(--transition-fast);
          }

          .tracker-dot:hover {
            background: rgba(255, 255, 255, 0.3);
          }

          .tracker-dot-active {
            background: var(--gold-accent);
            box-shadow: 0 0 8px var(--gold-accent);
          }

          @media (max-width: 1024px) {
            .slide-layout-split {
              grid-template-columns: 1fr;
              gap: 2.5rem;
            }
            .slide-deck-body {
              padding: 2.5rem;
            }
          }
        `}</style>
      </div>
    );
  }

  // Directory Portfolio view (Filtered dynamically by Sector and Capability)
  const filteredCases = Object.keys(caseStudiesData).filter(key => {
    const item = caseStudiesData[key];
    const matchIndustry = industryFilter === 'all' || item.industry === industryFilter;
    const matchService = serviceFilter === 'all' || item.service === serviceFilter;
    return matchIndustry && matchService;
  });

  return (
    <div className="case-directory-wrapper">
      <SEO 
        title="Case Study Success Archives" 
        description="Verify how we optimize organic traffic channels, scale sales conversions, and rebalance media spend across SaaS and e-commerce campaigns."
      />

      <div className="container">
        <div className="section-title-wrapper flex-center flex-column">
          <span className="section-badge font-mono">CASE ARCHIVES</span>
          <h2>Validated Growth Transformations</h2>
          <p className="section-subtext">Filter our success blueprints by sector or channel capability to trace exact optimization paths.</p>
        </div>

        {/* Filter controls */}
        <div className="portfolio-filters glass-card">
          <div className="filter-group">
            <span className="filter-label font-mono">Sector:</span>
            <div className="filter-buttons">
              {uniqueIndustries.map(ind => (
                <button
                  key={ind}
                  onClick={() => setIndustryFilter(ind)}
                  className={`filter-btn ${industryFilter === ind ? 'active-filter' : ''}`}
                >
                  {ind.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <span className="filter-label font-mono">Capability:</span>
            <div className="filter-buttons">
              {uniqueServices.map(ser => (
                <button
                  key={ser}
                  onClick={() => setServiceFilter(ser)}
                  className={`filter-btn ${serviceFilter === ser ? 'active-filter' : ''}`}
                >
                  {ser.replace('-', ' ').toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results grid */}
        <div className="grid-3 portfolio-grid">
          <AnimatePresence mode="popLayout">
            {filteredCases.map(key => {
              const item = caseStudiesData[key];
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={key}
                  className="glass-card case-archive-card"
                >
                  <div className="case-card-top">
                    <span className="case-card-client font-mono">{item.client}</span>
                    <span className="case-card-tag font-mono">{item.industry.toUpperCase()}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <div className="case-card-metrics font-mono">
                    <div className="ccm-stat">
                      <span className="ccm-val">{Object.values(item.stats)[0]}</span>
                    </div>
                    <div className="ccm-stat">
                      <span className="ccm-val">{Object.values(item.stats)[1]}</span>
                    </div>
                  </div>
                  <div className="card-spacer"></div>
                  <Link to={`/case-studies/${key}`} className="btn-secondary read-case-btn magnetic-target">
                    Analyze Methodology
                    <ArrowRight size={14} />
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
          {filteredCases.length === 0 && (
            <div className="no-results font-mono">
              Zero records matching selected criteria combinations.
            </div>
          )}
        </div>
      </div>

      <style>{`
        .case-directory-wrapper {
          padding: 8rem 0 6rem 0;
          position: relative;
        }

        .portfolio-filters {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 3.5rem;
          padding: 1.5rem 2rem;
        }

        .filter-group {
          display: flex;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .filter-label {
          font-size: 0.85rem;
          color: var(--text-muted);
          width: 80px;
        }

        .filter-buttons {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          border: 1px solid var(--border-color);
          padding: 0.4rem 1rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-muted);
          transition: var(--transition-fast);
        }

        .filter-btn:hover {
          color: #ffffff;
          border-color: rgba(255,255,255,0.2);
        }

        .active-filter {
          background: rgba(200, 160, 74, 0.08);
          border-color: var(--gold-accent);
          color: var(--gold-accent);
        }

        .case-archive-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.25rem;
          height: 100%;
        }

        .case-card-top {
          display: flex;
          justify-content: space-between;
          width: 100%;
          font-size: 0.75rem;
        }

        .case-card-client {
          color: var(--gold-accent);
          font-weight: 700;
        }

        .case-card-tag {
          color: var(--text-muted);
        }

        .case-archive-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          line-height: 1.4;
        }

        .case-card-metrics {
          display: flex;
          gap: 1rem;
          width: 100%;
          border-top: 1px solid var(--border-color);
          padding-top: 1rem;
        }

        .ccm-val {
          font-weight: 700;
          color: #ffffff;
          font-size: 0.85rem;
        }

        .read-case-btn {
          width: 100%;
          justify-content: center;
          font-size: 0.85rem;
        }

        .no-results {
          grid-column: span 3;
          text-align: center;
          padding: 4rem;
          color: var(--text-muted);
        }

        .card-spacer {
          flex: 1;
        }
      `}</style>
    </div>
  );
}
