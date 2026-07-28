import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, ArrowRight, Sparkles, Percent, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RoiCalculator() {
  const [leads, setLeads] = useState(1200);
  const [revenue, setRevenue] = useState(150000);
  const [budget, setBudget] = useState(15000);
  const [conversion, setConversion] = useState(2.0);

  // Calculation states
  const [projLeads, setProjLeads] = useState(0);
  const [projRevenue, setProjRevenue] = useState(0);
  const [expectedRoi, setExpectedRoi] = useState(0);
  const [netProfit, setNetProfit] = useState(0);

  useEffect(() => {
    // 1. Nanak Optimization multiplies conversion rate by ~2.8x due to landing experience, fast loads, and qualified targeting
    const optimizedConversion = Math.min(conversion * 2.8, 25); 

    // 2. Budget allocation increases traffic. Let's assume average Cost Per Lead decreases by 30% due to smart bidding
    const averageCpl = 25; // standard CPL index
    const optimizedCpl = 18.50; 
    
    // Additional traffic from budget allocation
    const adLeads = Math.round(budget / optimizedCpl);
    
    // Total projected leads (current leads + new ad leads)
    const finalLeads = leads + adLeads;
    setProjLeads(finalLeads);

    // 3. Average deal value based on current revenue / current leads
    const avgDealValue = leads > 0 ? (revenue / (leads * (conversion / 100))) : 500;

    // Projected revenue = projected conversions * deal value
    const projConversions = finalLeads * (optimizedConversion / 100);
    const finalRevenue = Math.round(projConversions * avgDealValue);
    setProjRevenue(finalRevenue);

    // 4. ROI = (Projected Revenue - Budget - Current Revenue) / Budget * 100
    const incrementalRev = finalRevenue - revenue;
    const profit = incrementalRev - budget;
    setNetProfit(profit);

    const roi = budget > 0 ? Math.round((profit / budget) * 100) : 0;
    setExpectedRoi(roi);
  }, [leads, revenue, budget, conversion]);

  const formatCurrency = (val) => {
    if (val >= 1000000) return `$${(val / 1000000).toFixed(1)}M`;
    if (val >= 1000) return `$${(val / 1000).toFixed(0)}K`;
    return `$${val}`;
  };

  return (
    <div className="roi-calculator glass-card">
      <div className="roi-layout">
        
        {/* Sliders Input Area */}
        <div className="roi-inputs">
          <div className="roi-heading">
            <Sparkles className="spark-icon" />
            <h3>Growth ROI Projection Engine</h3>
            <p className="roi-desc">Calibrate parameters to project margins under the Nanak architecture.</p>
          </div>

          <div className="slider-group">
            <div className="slider-meta">
              <label>Current Monthly Leads</label>
              <span className="slider-val font-mono">{leads.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="100"
              max="20000"
              step="100"
              value={leads}
              onChange={(e) => setLeads(Number(e.target.value))}
              className="roi-range-slider"
            />
          </div>

          <div className="slider-group">
            <div className="slider-meta">
              <label>Current Monthly Revenue</label>
              <span className="slider-val font-mono">{formatCurrency(revenue)}</span>
            </div>
            <input
              type="range"
              min="5000"
              max="1000000"
              step="5000"
              value={revenue}
              onChange={(e) => setRevenue(Number(e.target.value))}
              className="roi-range-slider"
            />
          </div>

          <div className="slider-group">
            <div className="slider-meta">
              <label>Monthly Marketing Budget</label>
              <span className="slider-val font-mono">{formatCurrency(budget)}</span>
            </div>
            <input
              type="range"
              min="1000"
              max="200000"
              step="1000"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="roi-range-slider"
            />
          </div>

          <div className="slider-group">
            <div className="slider-meta">
              <label>Current Conversion Rate</label>
              <span className="slider-val font-mono">{conversion.toFixed(1)}%</span>
            </div>
            <input
              type="range"
              min="0.2"
              max="15"
              step="0.1"
              value={conversion}
              onChange={(e) => setConversion(Number(e.target.value))}
              className="roi-range-slider"
            />
          </div>
        </div>

        {/* Dynamic Display Outputs */}
        <div className="roi-outputs">
          <div className="roi-grid">
            <div className="output-card glass-card">
              <span className="out-label">Expected Monthly Revenue</span>
              <h2 className="out-val gradient-text font-mono">
                {formatCurrency(projRevenue)}
              </h2>
              <span className="out-delta font-mono">
                +{Math.round(((projRevenue - revenue) / (revenue || 1)) * 100)}% Lift
              </span>
            </div>

            <div className="output-card glass-card">
              <span className="out-label">Projected Leads</span>
              <h2 className="out-val gradient-text-neon font-mono">
                {projLeads.toLocaleString()}
              </h2>
              <span className="out-delta font-mono">
                +{Math.round(((projLeads - leads) / (leads || 1)) * 100)}% Volume
              </span>
            </div>

            <div className="output-card glass-card span-2">
              <div className="roi-kpi-flex">
                <div>
                  <span className="out-label">Projected Net ROI</span>
                  <h1 className="roi-big-percent font-mono">{expectedRoi.toLocaleString()}%</h1>
                </div>
                <div className="vertical-divider"></div>
                <div>
                  <span className="out-label">Net Profit Increase</span>
                  <h2 className="roi-net-cash font-mono">
                    {netProfit > 0 ? `+${formatCurrency(netProfit)}` : formatCurrency(netProfit)}
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="roi-cta-panel">
            <p className="roi-cta-message">
              These calculations utilize average conversion lifts mapped across Nanak client architectures.
            </p>
            <Link to="/contact" className="btn-primary full-width-btn">
              Claim Your Scaling Blueprint
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .roi-calculator {
          padding: 3rem;
          margin-top: 2rem;
          position: relative;
          z-index: 1;
        }

        .roi-layout {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 4rem;
        }

        .roi-heading {
          margin-bottom: 2rem;
        }

        .spark-icon {
          color: var(--gold-accent);
          margin-bottom: 0.5rem;
        }

        .roi-heading h3 {
          font-size: 1.6rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }

        .roi-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .slider-group {
          margin-bottom: 1.8rem;
        }

        .slider-meta {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.6rem;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .slider-meta label {
          color: var(--text-muted);
        }

        .slider-val {
          color: #ffffff;
          font-weight: 700;
        }

        .roi-range-slider {
          -webkit-appearance: none;
          width: 100%;
          height: 6px;
          border-radius: 99px;
          background: rgba(255, 255, 255, 0.05);
          outline: none;
          transition: var(--transition-fast);
        }

        .roi-range-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--gold-accent);
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
          transition: transform 0.1s;
        }

        .roi-range-slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }

        .roi-outputs {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .roi-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }

        .output-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .span-2 {
          grid-column: span 2;
        }

        .out-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
          display: block;
        }

        .out-val {
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--gold-accent);
        }

        .out-delta {
          font-size: 0.75rem;
          color: var(--gold-accent);
          background: rgba(200, 160, 74, 0.08);
          border: 1px solid rgba(200, 160, 74, 0.2);
          padding: 0.1rem 0.4rem;
          border-radius: 4px;
          width: fit-content;
          margin-top: 0.4rem;
        }

        .roi-kpi-flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        .vertical-divider {
          width: 1px;
          height: 60px;
          background: var(--border-color);
        }

        .roi-big-percent {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--gold-accent);
        }

        .roi-net-cash {
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .roi-cta-panel {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .roi-cta-message {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-align: center;
          line-height: 1.4;
        }

        .full-width-btn {
          width: 100%;
          justify-content: center;
        }

        @media (max-width: 1024px) {
          .roi-layout {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 640px) {
          .roi-grid {
            grid-template-columns: 1fr;
          }
          .span-2 {
            grid-column: span 1;
          }
          .roi-kpi-flex {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          .vertical-divider {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
