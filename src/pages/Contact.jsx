import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, Phone, Mail, MapPin, MessageSquare, Calendar, 
  ArrowRight, ArrowLeft, ShieldCheck, Check, Sparkles 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import SEO from '../components/SEO';

export default function Contact() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyUrl: '',
    budget: '',
    revenue: '',
    challenge: []
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const challenges = [
    { id: 'seo', name: 'Search Volume Plateau (SEO)' },
    { id: 'ads', name: 'High Acquisition Costs (PPC)' },
    { id: 'cro', name: 'Leaking Landing Funnels (CRO)' },
    { id: 'auth', name: 'Low Authority Credibility' }
  ];

  const handleNext = () => {
    if (step === 1 && (!formData.name || !formData.email || !formData.companyUrl)) return;
    if (step === 2 && (!formData.budget || !formData.revenue)) return;
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const toggleChallenge = (id) => {
    setFormData(prev => {
      const alreadyChecked = prev.challenge.includes(id);
      return {
        ...prev,
        challenge: alreadyChecked 
          ? prev.challenge.filter(item => item !== id)
          : [...prev.challenge, id]
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    // Trigger high-end client success confetti
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#C8A04A', '#E0B95A', '#FAFAFA', '#8A8A8A']
    });
  };

  return (
    <div className="contact-page-wrapper">
      <SEO 
        title="Qualify Your Growth Pipeline" 
        description="Submit your enterprise details, map primary acquisition challenges, and access scheduling slots with our scale engineers."
      />

      <div className="container contact-container">
        
        {/* Left Side: Contact Information & Trust */}
        <div className="contact-info-panel">
          <div className="contact-badge font-mono">
            <Sparkles size={12} className="spark-icon-spin" />
            PARTNER SELECTION PROTOCOL
          </div>
          <h2>Let's Scale Your Pipeline.</h2>
          <p className="contact-sub">
            We evaluate organizations based on product-market validation and scale readiness. Complete the qual matrix to see if our systems align.
          </p>

          <div className="info-cards-list">
            <div className="info-card glass-card">
              <Phone size={18} className="info-icon blue" />
              <div>
                <span className="info-label font-mono">Direct Communication</span>
                <span className="info-val font-mono">+1-800-NANAK-MKTG</span>
              </div>
            </div>

            <div className="info-card glass-card">
              <Mail size={18} className="info-icon cyan" />
              <div>
                <span className="info-label font-mono">Secured Transmission</span>
                <span className="info-val font-mono">verify@nanakmarketing.com</span>
              </div>
            </div>

            <div className="info-card glass-card">
              <MapPin size={18} className="info-icon violet" />
              <div>
                <span className="info-label font-mono">Command Centers</span>
                <span className="info-val font-mono">San Francisco &middot; London &middot; Mumbai</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Multi-Step qual form */}
        <div className="contact-form-panel glass-card">
          <AnimatePresence mode="wait">
            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="qualification-form">
                
                {/* Step Indicators */}
                <div className="form-steps-header">
                  {[1, 2, 3].map(num => (
                    <div 
                      key={num} 
                      className={`form-step-dot font-mono ${step === num ? 'active-dot' : ''} ${step > num ? 'done-dot' : ''}`}
                    >
                      {step > num ? <Check size={12} /> : num}
                    </div>
                  ))}
                </div>

                {/* Step 1: Corporate Profile */}
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="form-step-content"
                  >
                    <h4>Corporate Profile</h4>
                    <p className="step-instruction">Detail identifiers to route search query audits.</p>
                    
                    <div className="form-group-field">
                      <label htmlFor="name">Lead Representative</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="form-text-input"
                      />
                    </div>

                    <div className="form-group-field">
                      <label htmlFor="email">Work Email</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="form-text-input"
                      />
                    </div>

                    <div className="form-group-field">
                      <label htmlFor="companyUrl">Company Website URL</label>
                      <input
                        type="url"
                        id="companyUrl"
                        required
                        value={formData.companyUrl}
                        onChange={(e) => setFormData({ ...formData, companyUrl: e.target.value })}
                        placeholder="https://company.com"
                        className="form-text-input"
                      />
                    </div>

                    <button 
                      type="button" 
                      onClick={handleNext} 
                      className="btn-primary form-action-btn"
                      disabled={!formData.name || !formData.email || !formData.companyUrl}
                    >
                      Calibrate Budget Parameters
                      <ArrowRight size={16} />
                    </button>
                  </motion.div>
                )}

                {/* Step 2: Scale Metrics */}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="form-step-content"
                  >
                    <h4>Volume & Parameters</h4>
                    <p className="step-instruction">Calibrate tracking parameters to model ROI projections.</p>

                    <div className="form-group-field">
                      <label>Monthly Marketing Budget</label>
                      <select 
                        value={formData.budget} 
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="form-select-field"
                        required
                      >
                        <option value="">Select allocation target...</option>
                        <option value="under-10k">Under $10,000 / month</option>
                        <option value="10k-50k">$10,000 - $50,000 / month</option>
                        <option value="50k-plus">$50,000+ / month</option>
                      </select>
                    </div>

                    <div className="form-group-field">
                      <label>Current Monthly Revenue</label>
                      <select 
                        value={formData.revenue} 
                        onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                        className="form-select-field"
                        required
                      >
                        <option value="">Select scaling layer...</option>
                        <option value="under-100k">Under $100K / month</option>
                        <option value="100k-500k">$100K - $500K / month</option>
                        <option value="500k-plus">$500K+ / month</option>
                      </select>
                    </div>

                    <div className="form-button-navigation">
                      <button type="button" onClick={handleBack} className="btn-secondary">
                        <ArrowLeft size={16} /> Back
                      </button>
                      <button 
                        type="button" 
                        onClick={handleNext} 
                        className="btn-primary"
                        disabled={!formData.budget || !formData.revenue}
                      >
                        Map Target Challenges
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Challenges Mapping */}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="form-step-content"
                  >
                    <h4>Target Growth Challenges</h4>
                    <p className="step-instruction">Select blockers slowing your current scale trajectory.</p>

                    <div className="challenges-selection-grid">
                      {challenges.map(item => {
                        const isChecked = formData.challenge.includes(item.id);
                        return (
                          <div 
                            key={item.id} 
                            onClick={() => toggleChallenge(item.id)}
                            className={`challenge-option-card glass-card ${isChecked ? 'selected-option' : ''}`}
                          >
                            <span className="option-checkbox">
                              {isChecked && <Check size={12} />}
                            </span>
                            <span className="option-name">{item.name}</span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="form-button-navigation">
                      <button type="button" onClick={handleBack} className="btn-secondary">
                        <ArrowLeft size={16} /> Back
                      </button>
                      <button 
                        type="submit" 
                        className="btn-primary"
                      >
                        Lock In Target Blueprint
                        <Send size={16} />
                      </button>
                    </div>
                  </motion.div>
                )}

              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="submission-success-panel"
              >
                <div className="success-icon-badge">
                  <ShieldCheck size={36} className="shield-icon" />
                </div>
                <h3>Qualification Complete.</h3>
                <p>
                  Our algorithms verified your profile parameters. You qualify for an expedited growth analysis session.
                </p>

                {/* Mock Calendly scheduling widget container */}
                <div className="scheduler-wrapper glass-card">
                  <div className="scheduler-header font-mono">
                    <Calendar size={14} /> Schedule Launch Briefing
                  </div>
                  <p className="scheduler-sub">Access active scheduling slots with our scale architect.</p>
                  <div className="mock-calendar-interface">
                    <div className="mock-slots">
                      <button type="button" className="slot-btn btn-secondary font-mono">July 28 - 10:00 AM</button>
                      <button type="button" className="slot-btn btn-secondary font-mono">July 28 - 02:30 PM</button>
                      <button type="button" className="slot-btn btn-secondary font-mono">July 29 - 11:00 AM</button>
                    </div>
                  </div>
                </div>

                <a href="https://wa.me/18005550190" target="_blank" rel="noopener noreferrer" className="btn-secondary wa-btn">
                  <MessageSquare size={16} /> WhatsApp Live Bridge
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      <style>{`
        .contact-page-wrapper {
          padding: 8rem 0 6rem 0;
          position: relative;
        }

        .contact-container {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 5rem;
          align-items: center;
        }

        .contact-info-panel {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.5rem;
        }

        .contact-badge {
          background: rgba(0, 210, 255, 0.08);
          border: 1px solid rgba(0, 210, 255, 0.2);
          border-radius: 99px;
          padding: 0.3rem 0.8rem;
          font-size: 0.75rem;
          color: var(--neon-blue);
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .spark-icon-spin {
          animation: spin 3s linear infinite;
        }

        .contact-info-panel h2 {
          font-size: 3rem;
          font-weight: 800;
          letter-spacing: -1.5px;
          line-height: 1.1;
        }

        .contact-sub {
          color: var(--text-muted);
          font-size: 1.05rem;
          line-height: 1.6;
        }

        .info-cards-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          width: 100%;
          margin-top: 1.5rem;
        }

        .info-card {
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .info-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
        }

        .info-icon.blue { color: var(--neon-blue); border-color: rgba(0, 210, 255, 0.2); }
        .info-icon.cyan { color: var(--neon-cyan); border-color: rgba(0, 245, 212, 0.2); }
        .info-icon.violet { color: var(--neon-violet); border-color: rgba(138, 43, 226, 0.2); }

        .info-label {
          display: block;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .info-val {
          font-size: 0.9rem;
          font-weight: 700;
          color: #ffffff;
        }

        /* Form styling */
        .contact-form-panel {
          padding: 3rem;
        }

        .form-steps-header {
          display: flex;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .form-step-dot {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1.5px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-muted);
          transition: var(--transition-smooth);
        }

        .active-dot {
          border-color: var(--gold-accent);
          color: var(--gold-accent);
          box-shadow: 0 0 8px rgba(200, 160, 74, 0.15);
        }

        .done-dot {
          border-color: var(--gold-accent);
          background: var(--gold-accent);
          color: #111111;
        }

        .form-step-content h4 {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .step-instruction {
          color: var(--text-muted);
          font-size: 0.85rem;
          margin-bottom: 2rem;
        }

        .form-group-field {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .form-group-field label {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .form-text-input {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          padding: 0.75rem 1rem;
          border-radius: 8px;
          color: #ffffff;
          font-size: 0.95rem;
          transition: var(--transition-smooth);
        }

        .form-text-input:focus {
          border-color: var(--gold-accent);
          box-shadow: 0 0 8px rgba(200, 160, 74, 0.15);
        }

        .form-select-field {
          background: rgba(4, 4, 8, 0.95);
          border: 1px solid var(--border-color);
          padding: 0.75rem 1rem;
          border-radius: 8px;
          color: #ffffff;
          font-size: 0.95rem;
          cursor: pointer;
        }

        .form-action-btn {
          width: 100%;
          justify-content: center;
          margin-top: 1.5rem;
        }

        .form-button-navigation {
          display: flex;
          justify-content: space-between;
          margin-top: 2rem;
          gap: 1rem;
        }

        .challenges-selection-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .challenge-option-card {
          padding: 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .challenge-option-card:hover {
          border-color: rgba(255, 255, 255, 0.15);
        }

        .selected-option {
          border-color: var(--gold-accent);
          box-shadow: 0 0 8px rgba(200, 160, 74, 0.15);
        }

        .option-checkbox {
          width: 18px;
          height: 18px;
          border: 1.5px solid var(--border-color);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.02);
        }

        .selected-option .option-checkbox {
          border-color: var(--gold-accent);
          background: var(--gold-accent);
          color: #111111;
        }

        /* Success Panel */
        .submission-success-panel {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .success-icon-badge {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(200, 160, 74, 0.08);
          border: 1px solid rgba(200, 160, 74, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .shield-icon {
          color: var(--gold-accent);
        }

        .scheduler-wrapper {
          width: 100%;
          padding: 1.5rem;
          text-align: left;
        }

        .scheduler-header {
          font-size: 0.85rem;
          color: var(--neon-blue);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .scheduler-sub {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
        }

        .mock-slots {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .slot-btn {
          width: 100%;
          justify-content: center;
          font-size: 0.85rem;
        }

        .wa-btn {
          width: 100%;
          justify-content: center;
          color: var(--gold-accent);
          border-color: var(--gold-accent);
        }

        @media (max-width: 1024px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }
      `}</style>
    </div>
  );
}
