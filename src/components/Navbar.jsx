import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Zap, ChevronDown, ChevronRight, BarChart2, Globe, Palette, Layers, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // 'services' | 'industries' | null
  const location = useLocation();
  const menuRef = useRef(null);

  // Close menus on mouse leave or route transition
  useEffect(() => {
    setActiveMenu(null);
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Services definitions for Mega Menu columns
  const megaMenuData = {
    'Performance Marketing': {
      icon: <BarChart2 size={16} />,
      items: [
        { name: 'Google Ads', id: 'google-ads', desc: 'SaaS & conversion search campaign capture.' },
        { name: 'Meta Ads', id: 'meta-ads', desc: 'Social scaling and acquisition loops.' },
        { name: 'LinkedIn Ads', id: 'linkedin-ads', desc: 'B2B enterprise pipeline targeting.' },
        { name: 'YouTube Ads', id: 'youtube-ads', desc: 'Video storytelling & brand recall.' }
      ]
    },
    'SEO': {
      icon: <Globe size={16} />,
      items: [
        { name: 'Technical SEO', id: 'technical-seo', desc: 'Index optimizations, code reviews, and paint times.' },
        { name: 'Local SEO', id: 'local-seo', desc: 'Geo-targeted localized maps ranking.' },
        { name: 'Enterprise SEO', id: 'enterprise-seo', desc: 'Programmatic hub templates scaling.' },
        { name: 'Ecommerce SEO', id: 'ecommerce-seo', desc: 'Product listings structures & schema optimization.' }
      ]
    },
    'Website Solutions': {
      icon: <Palette size={16} />,
      items: [
        { name: 'Website Design', id: 'website-design', desc: 'Bespoke high-end digital design frameworks.' },
        { name: 'Landing Pages', id: 'landing-pages', desc: 'Frictionless sales pages & qualification flows.' },
        { name: 'Conversion Rate Optimization', id: 'cro', desc: 'Multivariate validation auditing & A/B testing.' },
        { name: 'UI/UX Design', id: 'ui-ux', desc: 'Mobile-first layout prototypes & wireframes.' }
      ]
    },
    'Automation & Tech': {
      icon: <Layers size={16} />,
      items: [
        { name: 'AI Automation', id: 'ai-automation', desc: 'Integrate LLMs directly into lead routing flows.' },
        { name: 'CRM Automation', id: 'crm-automation', desc: 'Optimize HubSpot and Salesforce pipelines.' },
        { name: 'Lead Automation', id: 'lead-automation', desc: 'Zero friction form triggers and lead updates.' }
      ]
    },
    'Content & Social': {
      icon: <FileText size={16} />,
      items: [
        { name: 'Social Media', id: 'social-growth', desc: 'Founder-led authority publishing templates.' },
        { name: 'Email Marketing', id: 'email-marketing', desc: 'Customer retention & database segmentation.' },
        { name: 'Content Marketing', id: 'content-marketing', desc: 'Long-form research assets & whitepapers.' }
      ]
    }
  };

  // Industries list
  const industriesList = [
    { name: 'Healthcare', id: 'healthcare' },
    { name: 'Real Estate', id: 'real-estate' },
    { name: 'Education', id: 'education' },
    { name: 'Ecommerce', id: 'ecommerce' },
    { name: 'Manufacturing', id: 'manufacturing' },
    { name: 'Hospitality', id: 'hospitality' },
    { name: 'Finance', id: 'finance' },
    { name: 'SaaS', id: 'saas' },
    { name: 'Technology', id: 'technology' },
    { name: 'Professional Services', id: 'professional-services' }
  ];

  // Hover preview state details
  const [hoveredPreview, setHoveredPreview] = useState({
    title: 'Growth Engineering Services',
    desc: 'Select a custom architecture blueprint on the left to analyze parameters, campaign strategies, and target metrics.',
    caseStudy: 'Enterprise scaling methodology',
    path: '/case-studies',
    img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80'
  });

  const handleServiceHover = (item) => {
    let unsplashImage = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80';
    if (item.id.includes('ads')) unsplashImage = 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80';
    if (item.id.includes('seo')) unsplashImage = 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80';
    if (item.id.includes('design') || item.id.includes('pages') || item.id.includes('cro') || item.id === 'ui-ux') unsplashImage = 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80';
    if (item.id.includes('automation')) unsplashImage = 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80';
    if (item.id.includes('content') || item.id.includes('marketing') || item.id.includes('social')) unsplashImage = 'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=600&q=80';

    setHoveredPreview({
      title: item.name,
      desc: item.desc || 'Accelerate conversion arbitrage and optimize organic search acquisition.',
      caseStudy: `Featured Case Study: ${item.name} Optimization`,
      path: `/services/${item.id}`,
      img: unsplashImage
    });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`} ref={menuRef} onMouseLeave={() => setActiveMenu(null)}>
        <div className="container nav-container">
          {/* Logo */}
          <Link to="/" className="nav-logo magnetic-target">
            <Zap className="logo-icon" />
            <span className="logo-text">NANAK<span className="logo-accent">MARKETING</span></span>
          </Link>

          {/* Desktop Links */}
          <div className="nav-desktop-links">
            <div className="nav-item-wrapper" onMouseEnter={() => setActiveMenu('services')}>
              <button className={`nav-link ${activeMenu === 'services' ? 'nav-link-active' : ''}`}>
                Services <ChevronDown size={12} className={`chevron-arrow ${activeMenu === 'services' ? 'arrow-rotate' : ''}`} />
              </button>
            </div>

            <div className="nav-item-wrapper" onMouseEnter={() => setActiveMenu('industries')}>
              <button className={`nav-link ${activeMenu === 'industries' ? 'nav-link-active' : ''}`}>
                Industries <ChevronDown size={12} className={`chevron-arrow ${activeMenu === 'industries' ? 'arrow-rotate' : ''}`} />
              </button>
            </div>

            <Link to="/case-studies" className="nav-link magnetic-target">
              Case Studies
            </Link>

            <Link to="/roi-calculator" className="nav-link magnetic-target">
              ROI Calculator
            </Link>

            <Link to="/authority" className="nav-link magnetic-target">
              Authority
            </Link>

            <Link to="/blog" className="nav-link magnetic-target">
              Resources
            </Link>
          </div>

          {/* Action CTA */}
          <div className="nav-desktop-actions">
            <Link to="/contact" className="btn-primary nav-cta magnetic-target">
              Book Call
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Mobile Drawer Trigger */}
          <button className="nav-mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mega Menu - Services */}
        <AnimatePresence>
          {activeMenu === 'services' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mega-menu-overlay"
            >
              <div className="container mega-menu-grid">
                {/* Categorized lists */}
                <div className="mega-menu-left">
                  {Object.keys(megaMenuData).map((catName) => {
                    const category = megaMenuData[catName];
                    return (
                      <div key={catName} className="mega-column">
                        <div className="mega-column-header font-mono">
                          {category.icon}
                          {catName.toUpperCase()}
                        </div>
                        <ul className="mega-item-list">
                          {category.items.map((item) => (
                            <li key={item.id}>
                              <Link
                                to={`/services/${item.id}`}
                                className="mega-item-link"
                                onMouseEnter={() => handleServiceHover(item)}
                              >
                                {item.name}
                                <ChevronRight size={10} className="hover-arrow" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>

                {/* Right side dynamic preview */}
                <div className="mega-menu-right">
                  <div className="preview-card glass-card" style={{ backgroundImage: `linear-gradient(to bottom, rgba(32,32,32,0.85), rgba(32,32,32,0.98)), url(${hoveredPreview.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="preview-content">
                      <span className="badge font-mono">CAPABILITY PROFILE</span>
                      <h4>{hoveredPreview.title}</h4>
                      <p>{hoveredPreview.desc}</p>
                      
                      <div className="card-spacer"></div>

                      <div className="preview-bottom">
                        <span className="preview-case font-mono">{hoveredPreview.caseStudy}</span>
                        <Link to={hoveredPreview.path} className="preview-cta-link btn-secondary">
                          Analyze Framework
                          <ChevronRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dropdown - Industries */}
        <AnimatePresence>
          {activeMenu === 'industries' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="industry-dropdown-overlay"
            >
              <div className="container industry-dropdown-container">
                <div className="industry-dropdown-grid glass-card">
                  <div className="ind-header-col">
                    <span className="badge font-mono">SECTOR BLUEPRINTS</span>
                    <h4>Industries We Serve</h4>
                    <p>Analyze how we structure custom funnels, programmatic search structures, and paid media setups for specific business verticals.</p>
                  </div>
                  <div className="ind-links-col">
                    {industriesList.map((ind) => (
                      <Link key={ind.id} to={`/industries/${ind.id}`} className="ind-dropdown-link font-mono">
                        {ind.name}
                        <ChevronRight size={12} className="ind-arrow" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Drawer (with collapsible sub-items) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="nav-mobile-drawer"
          >
            <div className="mobile-links-container">
              <Link to="/services" className="mobile-nav-link">Services</Link>
              <Link to="/industries" className="mobile-nav-link">Industries</Link>
              <Link to="/case-studies" className="mobile-nav-link">Case Studies</Link>
              <Link to="/roi-calculator" className="mobile-nav-link">ROI Calculator</Link>
              <Link to="/authority" className="mobile-nav-link">Authority</Link>
              <Link to="/blog" className="mobile-nav-link">Resources</Link>
              <Link to="/contact" className="btn-primary mobile-cta">
                Book Call
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: var(--transition-smooth);
        }

        .navbar-scrolled {
          padding: 0.8rem 0;
          background: rgba(17, 17, 17, 0.75);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-color);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 800;
          font-size: 1.35rem;
          letter-spacing: -0.5px;
        }

        .logo-icon {
          color: var(--gold-accent);
        }

        .logo-accent {
          color: var(--gold-accent);
          font-weight: 400;
          margin-left: 0.2rem;
        }

        .nav-desktop-links {
          display: flex;
          align-items: center;
          gap: 2.2rem;
        }

        .nav-item-wrapper {
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;
        }

        .nav-link {
          position: relative;
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.95rem;
          padding: 0.5rem 0;
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .nav-link:hover {
          color: var(--text-primary);
        }

        .chevron-arrow {
          transition: transform 0.3s ease;
        }

        .arrow-rotate {
          transform: rotate(180deg);
          color: var(--gold-accent);
        }

        .nav-desktop-actions {
          display: flex;
          align-items: center;
        }

        .nav-cta {
          padding: 0.6rem 1.25rem;
          font-size: 0.9rem;
        }

        /* Services Mega Menu */
        .mega-menu-overlay {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: rgba(17, 17, 17, 0.98);
          backdrop-filter: blur(25px);
          border-bottom: 1px solid var(--border-color);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.8);
          padding: 3rem 0;
          z-index: 999;
        }

        .mega-menu-grid {
          display: grid;
          grid-template-columns: 2.5fr 1fr;
          gap: 3rem;
        }

        .mega-menu-left {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }

        .mega-column {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .mega-column-header {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 1.5px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 0.5rem;
        }

        .mega-item-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .mega-item-link {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: var(--transition-fast);
        }

        .mega-item-link:hover {
          color: var(--gold-accent);
          transform: translateX(4px);
        }

        .hover-arrow {
          opacity: 0;
          transform: translateX(-4px);
          transition: all 0.25s ease;
        }

        .mega-item-link:hover .hover-arrow {
          opacity: 1;
          transform: translateX(0);
          color: var(--gold-accent);
        }

        .mega-menu-right {
          height: 100%;
        }

        .preview-card {
          height: 100%;
          border-radius: 12px;
          display: flex;
          transition: var(--transition-smooth);
        }

        .preview-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.8rem;
          width: 100%;
        }

        .preview-content h4 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
        }

        .preview-content p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .preview-bottom {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 1rem;
        }

        .preview-case {
          font-size: 0.75rem;
          color: var(--gold-accent);
        }

        .preview-cta-link {
          width: 100%;
          justify-content: center;
          padding: 0.5rem 1rem;
          font-size: 0.8rem;
        }

        /* Industries Dropdown */
        .industry-dropdown-overlay {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: rgba(17, 17, 17, 0.98);
          backdrop-filter: blur(25px);
          border-bottom: 1px solid var(--border-color);
          padding: 2rem 0;
          z-index: 999;
        }

        .industry-dropdown-container {
          display: flex;
          justify-content: center;
        }

        .industry-dropdown-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 3rem;
          max-width: 900px;
          width: 100%;
          padding: 2.5rem;
        }

        .ind-header-col h4 {
          font-size: 1.3rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }

        .ind-header-col p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .ind-links-col {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .ind-dropdown-link {
          font-size: 0.85rem;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem;
          border-radius: 6px;
          border: 1px solid transparent;
          transition: var(--transition-fast);
        }

        .ind-dropdown-link:hover {
          background: rgba(255, 255, 255, 0.02);
          border-color: rgba(255, 255, 255, 0.05);
          color: var(--gold-accent);
          padding-left: 0.8rem;
        }

        .ind-arrow {
          opacity: 0;
          transform: translateX(-4px);
          transition: all 0.2s ease;
        }

        .ind-dropdown-link:hover .ind-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .nav-mobile-toggle {
          display: none;
          color: var(--text-primary);
        }

        .nav-mobile-drawer {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(17, 17, 17, 0.98);
          backdrop-filter: blur(20px);
          z-index: 999;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .mobile-links-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          width: 80%;
          text-align: center;
        }

        .mobile-nav-link {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .mobile-nav-link:hover {
          color: var(--gold-accent);
        }

        .mobile-cta {
          width: 100%;
          justify-content: center;
          margin-top: 1.5rem;
        }

        @media (max-width: 1024px) {
          .nav-desktop-links, .nav-desktop-actions {
            display: none;
          }
          .nav-mobile-toggle {
            display: block;
          }
      `}</style>
    </>
  );
}
