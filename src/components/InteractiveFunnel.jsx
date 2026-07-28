import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Percent, ShieldCheck, Zap } from 'lucide-react';

export default function InteractiveFunnel() {
  const [pipelineType, setPipelineType] = useState('nanak'); // 'traditional' or 'nanak'

  // Funnel steps with conversion ratios
  const traditionalSteps = [
    { label: 'Brand Awareness', value: '1,000,000', percent: 100, color: '#94a3b8', desc: 'Unqualified traffic landing on generic landing pages.' },
    { label: 'Interest & Research', value: '120,000', percent: 12, color: '#64748b', desc: 'High bounce rate due to slow load speeds and poor copy.' },
    { label: 'Decision & Intent', value: '18,000', percent: 1.8, color: '#475569', desc: 'Form abandonments and friction in checkout flows.' },
    { label: 'Acquisition (ROAS)', value: '1,500 (1.2x)', percent: 0.15, color: '#334155', desc: 'High Customer Acquisition Cost (CAC) eating margins.' }
  ];

  const nanakSteps = [
    { label: 'Targeted Reach', value: '1,000,000', percent: 100, color: '#FAFAFA', desc: 'AI-qualified intent leads routed through semantic funnels.' },
    { label: 'Active Engagement', value: '550,000', percent: 55, color: '#E0B95A', desc: 'Instant paint times, custom layout paths, dynamic personalization.' },
    { label: 'System Conversion', value: '88,000', percent: 8.8, color: '#C8A04A', desc: 'Zero friction multi-step qualify flows. 4.8x higher conversions.' },
    { label: 'Advocacy (ROAS)', value: '12,000 (5.4x)', percent: 1.2, color: '#B88A2D', desc: 'Viral growth loops, automated onboarding, high life-time values.' }
  ];

  const activeSteps = pipelineType === 'nanak' ? nanakSteps : traditionalSteps;

  return (
    <div className="funnel-container glass-card">
      <div className="funnel-header">
        <div>
          <h3>Conversion Funnel Engineering</h3>
          <p className="subtitle">Interactive visualization of campaign funnel optimization</p>
        </div>
        <div className="funnel-toggle-control">
          <button 
            className={`toggle-btn ${pipelineType === 'traditional' ? 'active traditional-active' : ''}`}
            onClick={() => setPipelineType('traditional')}
          >
            Legacy Agency
          </button>
          <button 
            className={`toggle-btn ${pipelineType === 'nanak' ? 'active nanak-active' : ''}`}
            onClick={() => setPipelineType('nanak')}
          >
            Nanak Growth Engine
            <Zap size={14} className="flash-icon" />
          </button>
        </div>
      </div>

      <div className="funnel-visualization">
        <div className="funnel-graphic">
          <svg viewBox="0 0 400 400" className="funnel-svg">
            <defs>
              <linearGradient id="nanak-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C8A04A" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#E0B95A" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#B88A2D" stopOpacity="0.85" />
              </linearGradient>
              <linearGradient id="trad-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2A2A2A" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#151515" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Render 4 blocks of trapezoids */}
            <AnimatePresence mode="wait">
              {activeSteps.map((step, idx) => {
                // Coordinates calculation for funnel levels
                // Top width changes, bottom width changes
                const topY = idx * 90 + 20;
                const bottomY = (idx + 1) * 90 + 10;
                
                const shrinkFactor = pipelineType === 'nanak' ? 0.8 : 0.6;
                const startWidthTop = 360 - idx * 60;
                const startWidthBottom = 360 - (idx + 1) * 60;

                const tLeftX = 200 - startWidthTop / 2;
                const tRightX = 200 + startWidthTop / 2;
                const bLeftX = 200 - startWidthBottom / 2;
                const bRightX = 200 + startWidthBottom / 2;

                const points = `${tLeftX},${topY} ${tRightX},${topY} ${bRightX},${bottomY} ${bLeftX},${bottomY}`;

                return (
                  <g key={`${pipelineType}-${idx}`}>
                    <motion.polygon
                      initial={{ scaleX: 0.2, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      exit={{ scaleX: 0.2, opacity: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      points={points}
                      fill={pipelineType === 'nanak' ? 'url(#nanak-grad)' : 'url(#trad-grad)'}
                      stroke="rgba(255, 255, 255, 0.15)"
                      strokeWidth="1"
                      className="funnel-polygon"
                      style={{
                        filter: pipelineType === 'nanak' 
                          ? `drop-shadow(0 0 10px ${step.color}20)` 
                          : 'none'
                      }}
                    />
                    {/* SVG Label overlays */}
                    <motion.text
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      x="200"
                      y={topY + 50}
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="13"
                      fontWeight="600"
                      className="funnel-text-val"
                    >
                      {step.value}
                    </motion.text>
                  </g>
                );
              })}
            </AnimatePresence>
          </svg>
        </div>

        <div className="funnel-details">
          {activeSteps.map((step, idx) => (
            <motion.div 
              key={`${pipelineType}-detail-${idx}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="funnel-detail-row"
            >
              <div className="detail-index-indicator" style={{ backgroundColor: step.color, boxShadow: `0 0 8px ${step.color}` }}>
                {idx + 1}
              </div>
              <div className="detail-text-area">
                <div className="detail-meta">
                  <span className="detail-name">{step.label}</span>
                  <span className="detail-rate font-mono">
                    {step.percent}%
                  </span>
                </div>
                <p className="detail-description">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="funnel-summary-footer">
        <div className="summary-card">
          <div className="summary-icon-box blue-glow">
            <TrendingUp size={20} />
          </div>
          <div>
            <span className="summary-label">Average ROAS</span>
            <h4 className="summary-val font-mono">{pipelineType === 'nanak' ? '5.4x Average' : '1.2x Average'}</h4>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon-box cyan-glow">
            <Percent size={20} />
          </div>
          <div>
            <span className="summary-label">Leakage Ratio</span>
            <h4 className="summary-val font-mono">{pipelineType === 'nanak' ? '12.4% Leakage' : '88.3% Leakage'}</h4>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon-box pink-glow">
            <ShieldCheck size={20} />
          </div>
          <div>
            <span className="summary-label">Conversion Rate</span>
            <h4 className="summary-val font-mono">{pipelineType === 'nanak' ? '8.8% System' : '1.8% Legacy'}</h4>
          </div>
        </div>
      </div>

      <style>{`
        .funnel-container {
          padding: 2.5rem;
          margin-top: 2rem;
          position: relative;
          z-index: 1;
        }

        .funnel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .funnel-header h3 {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.5px;
          margin-bottom: 0.3rem;
        }

        .funnel-header .subtitle {
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        .funnel-toggle-control {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          border-radius: 99px;
          padding: 0.3rem;
          display: flex;
          gap: 0.25rem;
        }

        .toggle-btn {
          padding: 0.5rem 1.25rem;
          border-radius: 99px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
          transition: var(--transition-fast);
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .toggle-btn.active {
          color: #ffffff;
        }

        .traditional-active {
          background: rgba(255, 255, 255, 0.1);
        }

        .nanak-active {
          background: var(--gold-accent);
          color: #111111 !important;
          box-shadow: 0 4px 12px rgba(200, 160, 74, 0.2);
        }

        .flash-icon {
          color: #111111;
        }

        .funnel-visualization {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 3rem;
          align-items: center;
        }

        .funnel-graphic {
          width: 100%;
          max-width: 380px;
          margin: 0 auto;
        }

        .funnel-svg {
          width: 100%;
          height: auto;
          overflow: visible;
        }

        .funnel-polygon {
          transition: fill 0.3s ease;
        }

        .funnel-text-val {
          font-family: var(--font-mono);
          letter-spacing: -0.5px;
          pointer-events: none;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }

        .funnel-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .funnel-detail-row {
          display: flex;
          gap: 1.2rem;
          align-items: flex-start;
        }

        .detail-index-indicator {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          font-weight: 700;
          color: #ffffff;
          flex-shrink: 0;
        }

        .detail-text-area {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .detail-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          gap: 1rem;
        }

        .detail-name {
          font-weight: 600;
          font-size: 1rem;
        }

        .detail-rate {
          font-size: 0.9rem;
          font-weight: 700;
          color: #ffffff;
        }

        .detail-description {
          color: var(--text-muted);
          font-size: 0.85rem;
          line-height: 1.5;
        }

        .funnel-summary-footer {
          margin-top: 3rem;
          border-top: 1px solid var(--border-color);
          padding-top: 2rem;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .summary-card {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .summary-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
        }

        .blue-glow {
          color: var(--gold-accent);
          border-color: rgba(200, 160, 74, 0.2);
        }

        .cyan-glow {
          color: var(--text-primary);
          border-color: rgba(255, 255, 255, 0.12);
        }

        .pink-glow {
          color: var(--text-secondary);
          border-color: rgba(255, 255, 255, 0.08);
        }

        .summary-label {
          display: block;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 0.2rem;
        }

        .summary-val {
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
        }

        @media (max-width: 768px) {
          .funnel-visualization {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .funnel-summary-footer {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
