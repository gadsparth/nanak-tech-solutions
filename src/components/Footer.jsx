import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="footer">
      <div className="footer-glow glow-orb" style={{ bottom: '-10%', left: '30%', width: '400px', height: '400px', background: 'var(--neon-violet)' }}></div>
      
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <Zap className="logo-icon" />
              <span className="logo-text">NANAK<span className="logo-accent">MARKETING</span></span>
            </Link>
            <p className="footer-desc">
              Empowering next-generation enterprises through data-driven digital acceleration, premium marketing architectures, and custom conversions.
            </p>
            <div className="footer-socials">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="footer-links-col">
              <h4>Services</h4>
              <ul>
                <li><Link to="/services/seo">Search Optimization (SEO)</Link></li>
                <li><Link to="/services/paid-ads">Paid Advertising (PPC)</Link></li>
                <li><Link to="/services/cro">Conversion Tuning (CRO)</Link></li>
                <li><Link to="/services/social-growth">Social Engines</Link></li>
                <li><Link to="/services/content-marketing">Content Architecture</Link></li>
              </ul>
            </div>

            <div className="footer-links-col">
              <h4>Platform</h4>
              <ul>
                <li><Link to="/case-studies">Success Archives</Link></li>
                <li><Link to="/roi-calculator">ROI Analytics Tool</Link></li>
                <li><Link to="/authority">EEAT Authority Hub</Link></li>
                <li><Link to="/blog">Resource Center</Link></li>
                <li><Link to="/contact">Book Call</Link></li>
              </ul>
            </div>

            <div className="footer-links-col">
              <h4>Join the Pulse</h4>
              <p className="newsletter-text">Weekly breakdown of SaaS growth loops, marketing engineering, and AI pipelines.</p>
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="newsletter-submit" aria-label="Subscribe">
                  <Send size={16} />
                </button>
              </form>
              {subscribed && (
                <motion.span 
                  initial={{ opacity: 0, y: 5 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="newsletter-success"
                >
                  Systems online. Subscription locked.
                </motion.span>
              )}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-divider"></div>
          <div className="footer-copyright-terms">
            <p className="copyright-text">&copy; {new Date().getFullYear()} Nanak Marketing. All paths reserved.</p>
            <div className="footer-terms-links">
              <Link to="/authority">Privacy & Security Protocols</Link>
              <span className="dot-separator">&middot;</span>
              <Link to="/authority">Terms of Engagement</Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: #111111;
          position: relative;
          padding: 8rem 0 3rem 0;
          overflow: hidden;
          border-top: 1px solid var(--border-color);
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.2fr 2fr;
          gap: 4rem;
          position: relative;
          z-index: 1;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 800;
          font-size: 1.4rem;
          letter-spacing: -0.5px;
        }

        .footer-desc {
          color: var(--text-muted);
          line-height: 1.7;
          font-size: 0.95rem;
        }

        .footer-socials {
          display: flex;
          gap: 1rem;
        }

        .social-icon-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid var(--border-color);
          background: rgba(255, 255, 255, 0.02);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          transition: var(--transition-fast);
        }

        .social-icon-btn:hover {
          color: var(--gold-accent);
          border-color: var(--gold-accent);
          transform: translateY(-2px);
        }

        .footer-links-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .footer-links-col h4 {
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .footer-links-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .footer-links-col ul a {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .footer-links-col ul a:hover {
          color: var(--gold-accent);
          padding-left: 4px;
        }

        .newsletter-text {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .newsletter-form {
          position: relative;
          display: flex;
          width: 100%;
        }

        .newsletter-input {
          flex: 1;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          padding: 0.75rem 3rem 0.75rem 1rem;
          border-radius: 8px;
          color: #ffffff;
          font-size: 0.9rem;
          transition: var(--transition-smooth);
        }

        .newsletter-input:focus {
          border-color: var(--gold-accent);
          box-shadow: 0 0 8px rgba(200, 160, 74, 0.15);
        }

        .newsletter-submit {
          position: absolute;
          right: 0.5rem;
          top: 50%;
          transform: translateY(-50%);
          width: 32px;
          height: 32px;
          border-radius: 6px;
          background: var(--gold-accent);
          color: #111111;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .newsletter-submit:hover {
          background: var(--gold-hover);
        }

        .newsletter-success {
          display: block;
          margin-top: 0.5rem;
          font-size: 0.8rem;
          color: var(--gold-accent);
        }

        .footer-bottom {
          margin-top: 5rem;
          position: relative;
          z-index: 1;
        }

        .footer-bottom-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(to right, transparent, var(--gold-accent), transparent);
          opacity: 0.25;
          margin-bottom: 2rem;
        }

        .footer-copyright-terms {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        .footer-terms-links {
          display: flex;
          gap: 0.8rem;
          align-items: center;
        }

        .dot-separator {
          color: rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 1024px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 640px) {
          .footer-links-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .footer-copyright-terms {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
}
