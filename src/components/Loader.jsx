import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Prevent scrolling during loader sequence
    document.body.style.overflow = 'hidden';

    // Simulate luxury resource compilation progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(() => {
              document.body.style.overflow = 'unset';
              onComplete();
            }, 600); // fade out duration
          }, 400); // delay at 100%
          return 100;
        }
        // Random incremental hops to feel natural
        const increment = Math.floor(Math.random() * 12) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = 'unset';
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="luxury-loader-overlay"
        >
          <div className="loader-center-container">
            {/* Animated emblem logo with gold sweep */}
            <div className="loader-emblem-box">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="loader-logo-ring"
              >
                <Zap size={36} className="loader-zap-icon" />
              </motion.div>
              {/* Sweep gradient overlay */}
              <div className="loader-sweep-overlay"></div>
            </div>

            {/* Staggered Branding Reveal */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="loader-title font-mono"
            >
              NANAK<span className="gold-txt">MARKETING</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="loader-subtitle font-mono"
            >
              INITIALIZING GROWTH MATRIX
            </motion.p>

            {/* Fine progress bar */}
            <div className="loader-progress-track">
              <motion.div 
                className="loader-progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Numerical percentage tracker */}
            <span className="loader-percent-num font-mono">
              {progress}%
            </span>
          </div>

          <style>{`
            .luxury-loader-overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              background-color: #111111;
              z-index: 99999;
              display: flex;
              align-items: center;
              justify-content: center;
              overflow: hidden;
            }

            .loader-center-container {
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
            }

            .loader-emblem-box {
              position: relative;
              margin-bottom: 2rem;
            }

            .loader-logo-ring {
              width: 80px;
              height: 80px;
              border-radius: 50%;
              border: 1px solid rgba(255, 255, 255, 0.08);
              background: #181818;
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
              position: relative;
              overflow: hidden;
            }

            .loader-logo-ring::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(
                135deg,
                rgba(200, 160, 74, 0.15) 0%,
                transparent 100%
              );
            }

            .loader-zap-icon {
              color: var(--gold-accent);
              filter: drop-shadow(0 2px 8px rgba(200, 160, 74, 0.3));
            }

            .loader-title {
              font-size: 1.4rem;
              font-weight: 800;
              letter-spacing: 2px;
              color: #ffffff;
              margin-bottom: 0.4rem;
            }

            .loader-title .gold-txt {
              color: var(--gold-accent);
              font-weight: 300;
              margin-left: 0.2rem;
            }

            .loader-subtitle {
              font-size: 0.75rem;
              color: var(--text-muted);
              letter-spacing: 3px;
              margin-bottom: 3rem;
            }

            .loader-progress-track {
              width: 220px;
              height: 2px;
              background: rgba(255, 255, 255, 0.05);
              border-radius: 99px;
              margin-bottom: 0.8rem;
              overflow: hidden;
            }

            .loader-progress-fill {
              height: 100%;
              background: var(--gold-accent);
              box-shadow: 0 0 8px rgba(200, 160, 74, 0.5);
              transition: width 0.1s cubic-bezier(0.16, 1, 0.3, 1);
            }

            .loader-percent-num {
              font-size: 0.85rem;
              color: var(--text-secondary);
              font-weight: 600;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
