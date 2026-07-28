import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Shield, Award, HelpCircle, CheckCircle, BarChart, Compass, Target, Activity } from 'lucide-react';
import SEO from '../components/SEO';

const industriesData = {
  'healthcare': {
    title: 'Healthcare & Medical Growth Systems',
    tagline: 'HIPAA-compliant patient acquisition architectures.',
    overview: 'Acquiring high-lifetime-value patients requires strict regulatory compliance, trust-driven branding, and highly localized search visibility. We build robust search loops and semantic funnels tailored specifically for clinics, specialized medical centers, and telemedicine groups.',
    metrics: [
      { label: 'Patient Inquiries Lift', val: '+180%' },
      { label: 'Average Local MAP CPA', val: '-42%' },
      { label: 'SQL Conversion Rate', val: '7.8%' }
    ],
    challenges: [
      'Maintaining HIPAA data protection standards across digital forms.',
      'Sustaining visibility under search engine YMYL (Your Money or Your Life) standards.',
      'Reducing high customer acquisition costs in competitive geo-regions.'
    ],
    strategies: [
      'Local maps pack ranking and technical SEO auditing.',
      'Strict client-side form encryption for patient inquiries.',
      'Educational author bio signals aligning with medical guidelines.'
    ],
    faqs: [
      { q: 'Are your landing pages HIPAA compliant?', a: 'Yes, we integrate with secure medical CRMs and deploy client-side encryption scripts so no patient health information is cached on local web hosts.' },
      { q: 'How do you handle medical guidelines for SEO?', a: 'We construct dedicated doctor-reviewed article schemes and author bio tags, satisfying search engine standards for medical accuracy.' }
    ],
    relatedServices: ['local-seo', 'cro', 'lead-automation']
  },
  'real-estate': {
    title: 'Real Estate Developer Lead Pipelines',
    tagline: 'Capture high-intent property investors programmatically.',
    overview: 'Real estate marketing requires hyper-targeted localized search coverage, high-end visual landing layouts, and rapid buyer qualification. We engineer localized search indexes, paid media lookalike structures, and automated scheduling funnels for premium developments and agencies.',
    metrics: [
      { label: 'Qualified Buyer Leads', val: '+210%' },
      { label: 'Viewing Booking Rate', val: '12.4%' },
      { label: 'Cost Per SQL Reduction', val: '-35%' }
    ],
    challenges: [
      'Filtering out low-intent lookers from premium property listing ads.',
      'Keeping lead capture forms engaging while gathering financial qualifiers.',
      'Sustaining high search visibility across specific neighborhood developments.'
    ],
    strategies: [
      'Interactive multi-step buyer qualification surveys.',
      'Programmatic landing hubs for specific neighborhoods and complexes.',
      'Geo-fenced ad campaigns across premium wealth corridors.'
    ],
    faqs: [
      { q: 'How do you filter high-net-worth investors?', a: 'We employ multi-step qualifying question nodes on forms (e.g. timeline, investment range) before routing users to booking screens.' },
      { q: 'Do you design custom interactive maps?', a: 'Yes, we create custom light-weight vector maps showing development features and local amenities.' }
    ],
    relatedServices: ['google-ads', 'cro', 'landing-pages']
  },
  'education': {
    title: 'Education & Institutional Enrollment Engines',
    tagline: 'Automate student recruitment and scale enrollment pools.',
    overview: 'Educational groups must guide prospective students and parents through detailed decision journeys. We configure multi-stage paid search structures, content hubs, and automated email nurturing sequences to maximize class registrations and course sign-ups.',
    metrics: [
      { label: 'Enrollment Registrations', val: '+85%' },
      { label: 'Lead-to-App Conversion', val: '14.2%' },
      { label: 'CAC Cost Reduction', val: '-28%' }
    ],
    challenges: [
      'Long institutional decision-making cycles leading to high form dropouts.',
      'Attributing enrollments across multiple parent-student touchpoints.',
      'Maintaining brand authenticity across large academic directories.'
    ],
    strategies: [
      'Targeted search queries capture focusing on curriculum terms.',
      'Staggered retargeting ads addressing parent inquiries separately.',
      'Automated WhatsApp and SMS enrollment notification setups.'
    ],
    faqs: [
      { q: 'How do you handle enrollment attribution?', a: 'We deploy multi-touch attribution trackers to monitor student journeys from initial guide download to final application.' },
      { q: 'Can you integrate with school management systems?', a: 'Yes, we build custom lead routing scripts connecting web landing pages directly with tools like Salesforce Education Cloud.' }
    ],
    relatedServices: ['google-ads', 'email-marketing', 'lead-automation']
  },
  'ecommerce': {
    title: 'E-Commerce Scale & Growth Loops',
    tagline: 'Maximize Average Order Value and recurring purchase ROAS.',
    overview: 'Retaining e-commerce margins requires lightning-fast load times, structured product catalog SEO feeds, and high-efficiency paid media funnels. We construct custom search feeds, cart abandonment tracking, and programmatic shopping campaigns built to scale.',
    metrics: [
      { label: 'Monthly ROAS Average', val: '6.2x' },
      { label: 'Cart Abandonment Drop', val: '-30%' },
      { label: 'Returning Buyer Rate', val: '+45%' }
    ],
    challenges: [
      'Eroding profit margins due to rising acquisition costs on paid platforms.',
      'High check-out abandonment rates on complex cart layouts.',
      'Managing dynamic programmatic feeds across thousands of SKUs.'
    ],
    strategies: [
      'Structured schema markups for merchant center listings.',
      'Instant-loading product layouts built with Vite architectures.',
      'Dynamic automated email recovery flows triggered by cart behavior.'
    ],
    faqs: [
      { q: 'How do you help optimize Google Merchant Center?', a: 'We optimize feed tags, product descriptions, and structural images to ensure high visibility in organic Google Shopping tabs.' },
      { q: 'Do you help setup Shopify custom designs?', a: 'Yes, we optimize custom liquid codes and script integrations to reduce site load speed and boost Core Web Vitals.' }
    ],
    relatedServices: ['ecommerce-seo', 'meta-ads', 'email-marketing']
  },
  'manufacturing': {
    title: 'Industrial & B2B Manufacturing Channels',
    tagline: 'Secure long-term supply contracts via search authority.',
    overview: 'Industrial buyers search using highly specific technical, spec-driven keywords. We design custom B2B SEO networks, detailed whitepaper templates, and targeted paid query setups that position your production facilities as the primary choice for distributors.',
    metrics: [
      { label: 'Distributor RFQ Volume', val: '+120%' },
      { label: 'Search Rank Visibility', val: 'Top 3' },
      { label: 'B2B Lead Qualification', val: '24%' }
    ],
    challenges: [
      'Low monthly search volume for niche industrial component specifications.',
      'Long-term sales cycles with multiple procurement stakeholders.',
      'Outdated site designs that fail to convey structural enterprise stability.'
    ],
    strategies: [
      'Programmatic SEO targeting spec sheets and materials codes.',
      'Detailed downloadable specification sheets with integrated lead forms.',
      'LinkedIn Account-Based Marketing setups targeting procurement managers.'
    ],
    faqs: [
      { q: 'How do you target buyers searching for specific parts?', a: 'We construct dynamic catalog search templates that auto-index part numbers, spec codes, and compliance standards.' },
      { q: 'Do you assist with distributor communication setups?', a: 'Yes, we build custom B2B inquiry portals that filter leads based on volume requirements and wholesale intent.' }
    ],
    relatedServices: ['enterprise-seo', 'linkedin-ads', 'lead-automation']
  },
  'hospitality': {
    title: 'Hospitality & Luxury Booking Systems',
    tagline: 'Drive direct hotel and resort bookings to bypass OTAs.',
    overview: 'Bypassing high commissions from booking networks requires an immersive digital experience, high local map relevance, and fast booking layouts. We build high-end visual pages, local citation arrays, and conversion loops that turn viewers into guest reservations.',
    metrics: [
      { label: 'Direct Booking Lift', val: '+95%' },
      { label: 'OTA Commission Savings', val: '$85K/mo' },
      { label: 'Site Paint Time Speed', val: '<0.8s' }
    ],
    challenges: [
      'High user reliance on booking aggregators (Booking.com, Expedia).',
      'Slow hotel template load times with heavy visual assets.',
      'Inconsistent booking engine layouts causing check-out dropouts.'
    ],
    strategies: [
      'Highly optimized local maps listings and local citations.',
      'Direct, zero-friction booking widgets embedded directly on home.',
      'Retargeting campaigns showing neighborhood guides and amenities.'
    ],
    faqs: [
      { q: 'How do we compete with OTA booking engines?', a: 'We build direct booking benefits layouts (e.g. best rate guarantees, complimentary rewards) and link them to seamless checkout experiences.' },
      { q: 'Do you handle hospitality media assets?', a: 'We help optimize image compression and lazy loading systems so your high-resolution resort photos load instantly.' }
    ],
    relatedServices: ['local-seo', 'cro', 'email-marketing']
  },
  'finance': {
    title: 'Financial & Wealth Management Pipelines',
    tagline: 'Build digital trust and capture high-intent asset investors.',
    overview: 'Finance decisions are driven by authority, security, and proven results. We construct premium wealth dashboards, highly optimized research hubs, and HIPAA/SEC compliance setups to route qualified leads into advisor schedules.',
    metrics: [
      { label: 'High-Intent Consults', val: '+140%' },
      { label: 'Asset Under Management', val: '+$42M' },
      { label: 'Cost Per SQL Reduction', val: '-30%' }
    ],
    challenges: [
      'Adhering to strict compliance and trust indicators (SEC, FINRA).',
      'Overcoming client friction related to sharing sensitive details.',
      'Ranking in search channels under Google financial YMYL guidelines.'
    ],
    strategies: [
      'Educational expert-written resources with full trust disclosures.',
      'Secure qualification forms that protect investor details.',
      'LinkedIn thought-leadership publishing mapping founder insights.'
    ],
    faqs: [
      { q: 'How do you handle compliance reviews for copy?', a: 'All finance copy goes through structured reviews matching compliance and legal disclosures before launch.' },
      { q: 'Can you integrate calculators with custom rates?', a: 'Yes, we build interactive financial calculator widgets that recalculate parameters locally in Javascript.' }
    ],
    relatedServices: ['technical-seo', 'cro', 'linkedin-ads']
  },
  'saas': {
    title: 'B2B SaaS Pipeline Engineering',
    tagline: 'Scale Demo Signups and product adoption velocity.',
    overview: 'Accelerating software growth requires interactive UI mockups, instant booking routes, and robust search setups targeting high-value buyers. We configure semantic B2B search structures, paid ad retargeting paths, and API integrations built to scale MRR.',
    metrics: [
      { label: 'Demo Bookings Lift', val: '+220%' },
      { label: 'Cost Per Demo Reduction', val: '-40%' },
      { label: 'Product Sign-up Rate', val: '9.2%' }
    ],
    challenges: [
      'Differentiating software products in saturated tech markets.',
      'High conversion funnel drop-offs between signup and onboarding.',
      'Reaching enterprise procurement decision-makers efficiently.'
    ],
    strategies: [
      'Interactive ROI projection widgets illustrating software value.',
      'Targeted paid search campaigns capturing competitor terms.',
      'Programmatic software feature guides indexing specific search intents.'
    ],
    faqs: [
      { q: 'Do you target enterprise buyers or mid-market?', a: 'We configure custom lists on LinkedIn and target search terms to align budget allocation with your primary customer target profile.' },
      { q: 'Do you help optimize software trial onboarding?', a: 'Yes, we analyze app flows and build automated email sequences to guide trial signups into product activation.' }
    ],
    relatedServices: ['google-ads', 'cro', 'crm-automation']
  },
  'technology': {
    title: 'Technology & IT Services Authority',
    tagline: 'Scale B2B technical consultations via authority loops.',
    overview: 'Enterprise IT buyers seek specialized engineers, not salespeople. We build structured technical whitepapers, localized maps arrays, and search campaigns that outline your engineering qualifications and secure enterprise IT proposals.',
    metrics: [
      { label: 'IT RFP Inquiries', val: '+160%' },
      { label: 'Organic Search Share', val: '+110%' },
      { label: 'SQL Conversion Rate', val: '8.4%' }
    ],
    challenges: [
      'Explaining complex tech architectures to both CEOs and CTOs.',
      'Long procurement timelines involving extensive hardware audits.',
      'High ad bid competition on generic enterprise tech keywords.'
    ],
    strategies: [
      'Structured technical content targeting niche system requirements.',
      'Interactive checklists detailing client security and compliance audits.',
      'Automated lead scheduling routed directly into engineering managers.'
    ],
    faqs: [
      { q: 'How do you write copy for technical architectures?', a: 'Our copy editors have background experience in IT infrastructure, allowing us to publish technically accurate, peer-reviewed content.' },
      { q: 'Do you support multi-region localized SEO?', a: 'Yes, we build regional service architectures targeting multiple city markets dynamically.' }
    ],
    relatedServices: ['technical-seo', 'landing-pages', 'crm-automation']
  },
  'professional-services': {
    title: 'Professional Services & Consulting Agencies',
    tagline: 'Secure high-value consulting briefs programmatically.',
    overview: 'Legal, consulting, and accounting firms succeed based on reputation, local presence, and professional expertise. We build high-end corporate designs, local search citations, and secure consult schedulers that convert high-value clients.',
    metrics: [
      { label: 'Client Inquiries Lift', val: '+195%' },
      { label: 'Average Contract ROAS', val: '8.2x' },
      { label: 'Lead Quality Upgrade', val: '+60%' }
    ],
    challenges: [
      'High volume of low-value, unqualified lead queries.',
      'Strong client preference for traditional local recommendations.',
      'Building trust markers under tight state and professional guidelines.'
    ],
    strategies: [
      'Detailed customer qualify forms that filter out low-value inquiries.',
      'High-authority client testimonials carousels showing validated results.',
      'Localized search maps ranking and citation optimization arrays.'
    ],
    faqs: [
      { q: 'How do you ensure leads are qualified for our fees?', a: 'We construct question nodes requesting budget indicators, company size, and specific services requirements before scheduling.' },
      { q: 'Do you help setup local map directories?', a: 'Yes, we optimize local listings, sync citations, and build local reputation systems.' }
    ],
    relatedServices: ['local-seo', 'cro', 'linkedin-ads']
  }
};

export default function Industries() {
  const { industryId } = useParams();
  const current = industriesData[industryId];

  // If viewing a specific industry page
  if (current) {
    return (
      <div className="industry-page-wrapper">
        <SEO 
          title={current.title}
          description={current.overview}
          schemaType="Service"
          schemaData={{
            'name': current.title,
            'provider': {
              '@type': 'Organization',
              'name': 'Nanak Marketing'
            },
            'description': current.overview
          }}
        />

        <div className="container">
          {/* Back button */}
          <Link to="/industries" className="back-link font-mono magnetic-target">
            <ArrowLeft size={16} /> Back to Sectors
          </Link>

          {/* Hero section */}
          <div className="industry-hero-section">
            <div className="ind-hero-content">
              <span className="badge font-mono">SECTOR EXPORT BLUEPRINT</span>
              <h2>{current.title}</h2>
              <p className="ind-tagline font-mono">{current.tagline}</p>
              <p className="ind-desc">{current.overview}</p>
              <div className="ind-cta-box">
                <Link to="/contact" className="btn-primary magnetic-target">
                  Request Sector Audit
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Metrics cards */}
            <div className="ind-metrics-panel glass-card">
              <div className="ind-icon-badge">
                <Activity size={28} className="gold-txt" />
              </div>
              <div className="metrics-grid-vertical">
                {current.metrics.map((m, idx) => (
                  <div key={idx} className="metric-item-block">
                    <span className="mib-val font-mono">{m.val}</span>
                    <span className="mib-lbl">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Details body */}
          <div className="industry-body-grid">
            {/* Left: Challenges & Strategies */}
            <div className="ind-grid-col glass-card">
              <h3>Structural Market Challenges</h3>
              <div className="challenges-check-list">
                {current.challenges.map((c, idx) => (
                  <div key={idx} className="check-list-row">
                    <div className="bad-indicator font-mono">X</div>
                    <p>{c}</p>
                  </div>
                ))}
              </div>

              <h3 style={{ marginTop: '3rem' }}>Acquisition Strategies We Deploy</h3>
              <div className="strategies-check-list">
                {current.strategies.map((s, idx) => (
                  <div key={idx} className="check-list-row">
                    <CheckCircle className="gold-check" size={20} />
                    <p>{s}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: FAQs */}
            <div className="ind-grid-col glass-card">
              <h3>Frequently Asked Questions</h3>
              <div className="ind-faqs-list">
                {current.faqs.map((faq, idx) => (
                  <div key={idx} className="ind-faq-box">
                    <div className="faq-q-row">
                      <HelpCircle size={18} className="gold-txt" />
                      <span>{faq.q}</span>
                    </div>
                    <p className="faq-a-text">{faq.a}</p>
                  </div>
                ))}
              </div>

              {/* Related capabilities */}
              <div className="related-services-box">
                <h4>Recommended Capability Blueprints</h4>
                <div className="related-links-flex">
                  {current.relatedServices.map((sid) => (
                    <Link key={sid} to={`/services/${sid}`} className="related-link-badge font-mono magnetic-target">
                      {sid.replace('-', ' ').toUpperCase()}
                      <ArrowRight size={12} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .industry-page-wrapper {
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

          .industry-hero-section {
            display: grid;
            grid-template-columns: 1.3fr 0.7fr;
            gap: 4rem;
            align-items: center;
            margin-bottom: 5rem;
          }

          .ind-hero-content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
          }

          .ind-hero-content h2 {
            font-size: 3rem;
            font-weight: 800;
            letter-spacing: -1.5px;
          }

          .ind-tagline {
            font-size: 1.1rem;
            color: var(--gold-accent);
          }

          .ind-desc {
            font-size: 1.05rem;
            color: var(--text-secondary);
            line-height: 1.7;
          }

          .ind-metrics-panel {
            padding: 3rem;
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .ind-icon-badge {
            width: 50px;
            height: 50px;
            border-radius: 12px;
            background: rgba(200,160,74,0.05);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .metrics-grid-vertical {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .metric-item-block {
            display: flex;
            flex-direction: column;
          }

          .mib-val {
            font-size: 2.2rem;
            font-weight: 800;
            color: #ffffff;
          }

          .mib-lbl {
            font-size: 0.8rem;
            color: var(--text-muted);
            font-weight: 500;
          }

          .industry-body-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }

          .ind-grid-col {
            padding: 3rem;
          }

          .ind-grid-col h3 {
            font-size: 1.4rem;
            font-weight: 800;
            margin-bottom: 2rem;
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 0.8rem;
          }

          .challenges-check-list, .strategies-check-list {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .check-list-row {
            display: flex;
            gap: 1.25rem;
            align-items: flex-start;
          }

          .bad-indicator {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: rgba(214,90,90,0.1);
            color: var(--error-color);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.75rem;
            font-weight: 700;
            flex-shrink: 0;
            margin-top: 2px;
          }

          .gold-check {
            color: var(--gold-accent);
            flex-shrink: 0;
            margin-top: 2px;
          }

          .check-list-row p {
            font-size: 0.95rem;
            color: var(--text-secondary);
            line-height: 1.5;
          }

          .ind-faqs-list {
            display: flex;
            flex-direction: column;
            gap: 1.8rem;
          }

          .ind-faq-box {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          .faq-q-row {
            display: flex;
            align-items: center;
            gap: 0.6rem;
            font-weight: 600;
            font-size: 0.95rem;
            color: #ffffff;
          }

          .faq-a-text {
            color: var(--text-muted);
            font-size: 0.9rem;
            line-height: 1.6;
          }

          .related-services-box {
            margin-top: 3.5rem;
            border-top: 1px solid var(--border-color);
            padding-top: 2rem;
          }

          .related-services-box h4 {
            font-size: 0.95rem;
            font-weight: 700;
            margin-bottom: 1rem;
          }

          .related-links-flex {
            display: flex;
            flex-wrap: wrap;
            gap: 0.8rem;
          }

          .related-link-badge {
            font-size: 0.75rem;
            font-weight: 600;
            color: var(--text-secondary);
            border: 1px solid var(--border-color);
            padding: 0.4rem 0.8rem;
            border-radius: 6px;
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            transition: var(--transition-fast);
          }

          .related-link-badge:hover {
            color: var(--gold-accent);
            border-color: var(--gold-accent);
            background: rgba(200,160,74,0.03);
          }

          @media (max-width: 1024px) {
            .industry-hero-section {
              grid-template-columns: 1fr;
            }
            .industry-body-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </div>
    );
  }

  // Directory Grid: list all 10 Industries
  return (
    <div className="industries-directory-wrapper">
      <SEO 
        title="Target Sectors & Verticals" 
        description="Analyze how we tailor conversion funnels, local search schemas, and media algorithms for SaaS, real estate, healthcare, and ecommerce."
      />

      <div className="container">
        <div className="section-title-wrapper flex-center flex-column">
          <span className="section-badge font-mono">TARGET SECTORS</span>
          <h2>Digital Industry Matrices</h2>
          <p className="section-subtext">Click into your business vertical to analyze marketing parameters, acquisition strategies, and validated ROAS benchmarks.</p>
        </div>

        <div className="grid-3 industries-grid">
          {Object.keys(industriesData).map((key) => {
            const ind = industriesData[key];
            return (
              <div key={key} className="glass-card industry-card">
                <h3>{ind.title.split(' & ')[0]}</h3>
                <p>{ind.tagline}</p>
                
                <div className="ind-card-metrics font-mono">
                  <div>
                    <span className="ind-m-val">{ind.metrics[0].val}</span>
                    <span className="ind-m-lbl">{ind.metrics[0].label.split(' ')[0]}</span>
                  </div>
                  <div>
                    <span className="ind-m-val">{ind.metrics[1].val}</span>
                    <span className="ind-m-lbl">{ind.metrics[1].label.split(' ')[0]}</span>
                  </div>
                </div>

                <div className="card-spacer"></div>

                <Link to={`/industries/${key}`} className="btn-secondary ind-blueprint-btn magnetic-target">
                  Analyze Strategy
                  <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .industries-directory-wrapper {
          padding: 8rem 0 6rem 0;
          background-color: var(--bg-color);
        }

        .industry-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.25rem;
          height: 100%;
        }

        .industry-card h3 {
          font-size: 1.3rem;
          font-weight: 700;
        }

        .industry-card p {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .ind-card-metrics {
          display: flex;
          gap: 1.8rem;
          width: 100%;
          border-top: 1px solid var(--border-color);
          padding-top: 1rem;
        }

        .ind-m-val {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--gold-accent);
          display: block;
        }

        .ind-m-lbl {
          font-size: 0.7rem;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .ind-blueprint-btn {
          width: 100%;
          justify-content: center;
          font-size: 0.85rem;
        }

        .card-spacer {
          flex: 1;
        }
      `}</style>
    </div>
  );
}
