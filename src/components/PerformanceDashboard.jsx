import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Activity, Calendar, HelpCircle } from 'lucide-react';

const industryData = {
  ecommerce: {
    title: 'E-Commerce Growth Loop',
    traffic: [120, 150, 190, 240, 310, 420],
    revenue: ['$240K', '$310K', '$450K', '$620K', '$890K', '$1.4M'],
    roas: '6.2x',
    conversion: '4.8%',
    leadVal: '14,200 Orders',
    chartColor: '#C8A04A',
    bars: [65, 78, 85, 92, 98]
  },
  saas: {
    title: 'B2B SaaS Pipeline Scaling',
    traffic: [40, 55, 72, 95, 130, 185],
    revenue: ['$80K', '$120K', '$180K', '$270K', '$410K', '$650K'],
    roas: '4.8x',
    conversion: '6.5%',
    leadVal: '3,800 SQLs',
    chartColor: '#E0B95A',
    bars: [42, 58, 70, 84, 95]
  },
  fintech: {
    title: 'FinTech High-Volume Capture',
    traffic: [90, 110, 140, 180, 230, 310],
    revenue: ['$180K', '$250K', '$390K', '$540K', '$790K', '$1.1M'],
    roas: '5.5x',
    conversion: '3.9%',
    leadVal: '9,400 Signups',
    chartColor: '#B88A2D',
    bars: [55, 68, 75, 88, 92]
  }
};

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

export default function PerformanceDashboard() {
  const [activeTab, setActiveTab] = useState('ecommerce');
  const [hoveredPoint, setHoveredPoint] = useState(null);
  
  const current = industryData[activeTab];

  // Helper to map values to coordinates inside SVG (300 height, 600 width)
  const getSvgPath = (points) => {
    const maxVal = Math.max(...points);
    const minVal = Math.min(...points);
    const range = maxVal - minVal;

    return points.map((p, idx) => {
      const x = (idx / (points.length - 1)) * 520 + 40;
      // Invert Y coordinate so 0 is at bottom
      const y = 260 - ((p - minVal) / range) * 200;
      return { x, y, val: p };
    });
  };

  const coordinates = getSvgPath(current.traffic);
  const pathString = coordinates.reduce((acc, curr, idx) => {
    return idx === 0 ? `M ${curr.x} ${curr.y}` : `${acc} L ${curr.x} ${curr.y}`;
  }, '');

  const areaPathString = `${pathString} L ${coordinates[coordinates.length - 1].x} 280 L ${coordinates[0].x} 280 Z`;

  return (
    <div className="perf-dashboard glass-card">
      <div className="dashboard-top">
        <div className="dashboard-meta-info">
          <div className="dashboard-badge font-mono">
            <Activity size={12} className="pulse-icon" />
            Live Growth Metrics
          </div>
          <h3>Performance Command Center</h3>
        </div>
        <div className="dashboard-tabs">
          {Object.keys(industryData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`dashboard-tab-btn ${activeTab === tab ? 'active-tab' : ''}`}
            >
              {tab === 'ecommerce' ? 'E-Commerce' : tab === 'saas' ? 'B2B SaaS' : 'FinTech'}
            </button>
          ))}
        </div>
      </div>

      <div className="dashboard-stats-grid">
        <div className="stat-pill glass-card">
          <div className="stat-pill-icon blue-glow"><Users size={18} /></div>
          <div>
            <span className="pill-title">Qualified Leads / Volume</span>
            <div className="pill-flex">
              <span className="pill-number font-mono">{current.leadVal}</span>
              <span className="pill-trend trend-up">+38%</span>
            </div>
          </div>
        </div>

        <div className="stat-pill glass-card">
          <div className="stat-pill-icon cyan-glow"><DollarSign size={18} /></div>
          <div>
            <span className="pill-title">Monthly Recuring Revenue</span>
            <div className="pill-flex">
              <span className="pill-number font-mono">{current.revenue[current.revenue.length - 1]}</span>
              <span className="pill-trend trend-up">+44%</span>
            </div>
          </div>
        </div>

        <div className="stat-pill glass-card">
          <div className="stat-pill-icon violet-glow"><TrendingUp size={18} /></div>
          <div>
            <span className="pill-title">Campaign ROAS Ratio</span>
            <div className="pill-flex">
              <span className="pill-number font-mono">{current.roas}</span>
              <span className="pill-trend trend-up">Target Lock</span>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-chart-area">
        <div className="chart-header">
          <div>
            <h4>{current.title}</h4>
            <span className="chart-subtitle">Traffic volume scaling over last 6 months (Thousands)</span>
          </div>
          <span className="chart-timeline"><Calendar size={14} /> H1 Performance</span>
        </div>

        <div className="svg-chart-container">
          <svg viewBox="0 0 600 300" className="chart-svg">
            <defs>
              <linearGradient id="chart-glow-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={current.chartColor} stopOpacity="0.25" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Grid Lines */}
            <line x1="40" y1="60" x2="560" y2="60" stroke="rgba(255,255,255,0.03)" />
            <line x1="40" y1="120" x2="560" y2="120" stroke="rgba(255,255,255,0.03)" />
            <line x1="40" y1="180" x2="560" y2="180" stroke="rgba(255,255,255,0.03)" />
            <line x1="40" y1="240" x2="560" y2="240" stroke="rgba(255,255,255,0.03)" />
            <line x1="40" y1="280" x2="560" y2="280" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5" />

            {/* Area path */}
            <AnimatePresence mode="wait">
              <motion.path
                key={`area-${activeTab}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                d={areaPathString}
                fill="url(#chart-glow-grad)"
              />
            </AnimatePresence>

            {/* Line path */}
            <AnimatePresence mode="wait">
              <motion.path
                key={`line-${activeTab}`}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                d={pathString}
                fill="none"
                stroke={current.chartColor}
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </AnimatePresence>

            {/* Glowing nodes */}
            {coordinates.map((coord, idx) => (
              <g key={`coord-${idx}`}>
                <motion.circle
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: idx * 0.08, duration: 0.3 }}
                  cx={coord.x}
                  cy={coord.y}
                  r="6"
                  fill="#ffffff"
                  stroke={current.chartColor}
                  strokeWidth="3.5"
                  onMouseEnter={() => setHoveredPoint({ ...coord, idx })}
                  onMouseLeave={() => setHoveredPoint(null)}
                  style={{ cursor: 'pointer' }}
                />
                <text x={coord.x} y="295" textAnchor="middle" fill="var(--text-muted)" fontSize="11" fontWeight="500">
                  {months[idx]}
                </text>
              </g>
            ))}

            {/* Hover Tooltip Overlay in SVG */}
            {hoveredPoint && (
              <g>
                <rect
                  x={hoveredPoint.x - 55}
                  y={hoveredPoint.y - 45}
                  width="110"
                  height="30"
                  rx="6"
                  fill="rgba(10, 10, 20, 0.95)"
                  stroke="var(--border-color)"
                  strokeWidth="1"
                />
                <text
                  x={hoveredPoint.x}
                  y={hoveredPoint.y - 25}
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="11"
                  fontWeight="600"
                  className="font-mono"
                >
                  {hoveredPoint.val}K Visitors
                </text>
              </g>
            )}
          </svg>
        </div>
      </div>

      <style>{`
        .perf-dashboard {
          padding: 2.5rem;
          position: relative;
          z-index: 1;
        }

        .dashboard-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .dashboard-meta-info h3 {
          font-size: 1.6rem;
          font-weight: 800;
          letter-spacing: -0.5px;
          margin-top: 0.4rem;
        }

        .dashboard-badge {
          background: rgba(0, 210, 255, 0.08);
          border: 1px solid rgba(0, 210, 255, 0.2);
          border-radius: 99px;
          padding: 0.3rem 0.8rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--neon-blue);
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
        }

        .pulse-icon {
          animation: pulse-glow 2s infinite;
        }

        @keyframes pulse-glow {
          0% { opacity: 0.4; }
          50% { opacity: 1; }
          100% { opacity: 0.4; }
        }

        .dashboard-tabs {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 0.25rem;
          display: flex;
          gap: 0.25rem;
        }

        .dashboard-tab-btn {
          padding: 0.5rem 1.25rem;
          font-size: 0.85rem;
          font-weight: 600;
          border-radius: 6px;
          color: var(--text-muted);
          transition: var(--transition-fast);
        }

        .dashboard-tab-btn:hover {
          color: #ffffff;
        }

        .active-tab {
          background: rgba(255, 255, 255, 0.05);
          color: #ffffff;
          box-shadow: 0 1px 1px rgba(255, 255, 255, 0.05) inset;
        }

        .dashboard-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .stat-pill {
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .stat-pill-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
        }

        .blue-glow { color: var(--gold-accent); border-color: rgba(200, 160, 74, 0.15); }
        .cyan-glow { color: var(--text-primary); border-color: rgba(255, 255, 255, 0.15); }
        .violet-glow { color: var(--text-secondary); border-color: rgba(255, 255, 255, 0.08); }

        .pill-title {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 0.2rem;
          display: block;
        }

        .pill-flex {
          display: flex;
          align-items: baseline;
          gap: 0.6rem;
        }

        .pill-number {
          font-size: 1.35rem;
          font-weight: 700;
          color: #ffffff;
        }

        .pill-trend {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--gold-accent);
          background: rgba(200, 160, 74, 0.08);
          border: 1px solid rgba(200, 160, 74, 0.2);
          padding: 0.1rem 0.4rem;
          border-radius: 4px;
        }

        .dashboard-chart-area {
          border-top: 1px solid var(--border-color);
          padding-top: 2rem;
        }

        .chart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .chart-header h4 {
          font-size: 1.1rem;
          font-weight: 700;
        }

        .chart-subtitle {
          color: var(--text-muted);
          font-size: 0.85rem;
          display: block;
          margin-top: 0.2rem;
        }

        .chart-timeline {
          font-size: 0.8rem;
          color: var(--text-muted);
          border: 1px solid var(--border-color);
          padding: 0.3rem 0.8rem;
          border-radius: 99px;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
        }

        .svg-chart-container {
          width: 100%;
          overflow: visible;
        }

        .chart-svg {
          width: 100%;
          height: auto;
          overflow: visible;
        }

        @media (max-width: 900px) {
          .dashboard-stats-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
