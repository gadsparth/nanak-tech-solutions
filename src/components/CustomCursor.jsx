import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [ripples, setRipples] = useState([]);
  const [trail, setTrail] = useState([]);
  
  // Snap parameters
  const [snappedEl, setSnappedEl] = useState(null);
  const [snapBounds, setSnapBounds] = useState(null);

  // Position reference values
  const mousePos = useRef({ x: -100, y: -100 });
  const prevMousePos = useRef({ x: -100, y: -100 });
  const velocity = useRef({ x: 0, y: 0 });
  
  // Outer ring spring state
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [ringStyle, setRingStyle] = useState({ width: 32, height: 32, borderRadius: '50%', rotate: 0, scaleX: 1, scaleY: 1 });
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    // 1. Mouse movements
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      mousePos.current = { x, y };
      if (!visible) setVisible(true);

      // Add to trailing particle list
      setTrail((prev) => {
        const next = [...prev, { id: Math.random(), x, y }];
        if (next.length > 5) next.shift(); // keep trail length short for performance
        return next;
      });
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);

    // 2. High performance frame updates
    let animationFrameId;
    const updatePhysics = () => {
      // Calculate velocity and angle
      const dx = mousePos.current.x - prevMousePos.current.x;
      const dy = mousePos.current.y - prevMousePos.current.y;
      velocity.current = { x: dx, y: dy };
      prevMousePos.current = { ...mousePos.current };

      const speed = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      // Render dot exactly at cursor
      setDotPos({ x: mousePos.current.x, y: mousePos.current.y });

      if (snappedEl && snapBounds) {
        // SNAPPED STATE: snap outer ring to element center and expand to outline it
        const targetX = snapBounds.left + snapBounds.width / 2;
        const targetY = snapBounds.top + snapBounds.height / 2;
        
        // Smoothly interpolate snapped ring position
        setRingPos((prev) => ({
          x: prev.x + (targetX - prev.x) * 0.25,
          y: prev.y + (targetY - prev.y) * 0.25
        }));

        setRingStyle({
          width: snapBounds.width + 12,
          height: snapBounds.height + 12,
          borderRadius: window.getComputedStyle(snappedEl).borderRadius || '8px',
          rotate: 0,
          scaleX: 1,
          scaleY: 1
        });
      } else {
        // NORMAL STATE: interpolate ring position and apply stretch
        setRingPos((prev) => {
          const rx = prev.x + (mousePos.current.x - prev.x) * 0.2;
          const ry = prev.y + (mousePos.current.y - prev.y) * 0.2;
          return { x: rx, y: ry };
        });

        // Stretch dynamic scales (stretch along move vector, squash perp)
        const stretch = Math.min(speed * 0.015, 0.5);
        setRingStyle({
          width: hovering ? 48 : 32,
          height: hovering ? 48 : 32,
          borderRadius: '50%',
          rotate: angle,
          scaleX: 1 + stretch,
          scaleY: 1 - stretch * 0.5
        });
      }

      animationFrameId = requestAnimationFrame(updatePhysics);
    };
    updatePhysics();

    // 3. Hover elements (snapping & morphing)
    const handleMouseOver = (e) => {
      const target = e.target;
      const interactive = target.closest('a') || target.closest('button') || target.closest('.magnetic-target');
      
      if (interactive) {
        setHovering(true);
        if (interactive.classList.contains('magnetic-target') || interactive.tagName === 'A' || interactive.tagName === 'BUTTON') {
          setSnappedEl(interactive);
          setSnapBounds(interactive.getBoundingClientRect());
        }
      } else {
        setHovering(false);
        setSnappedEl(null);
        setSnapBounds(null);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    // 4. Click ripple injector
    const handleClick = (e) => {
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples((prev) => [...prev, newRipple]);
      
      // Auto prune ripple
      setTimeout(() => {
        setRipples((prev) => prev.filter(r => r.id !== newRipple.id));
      }, 600);
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, [visible, snappedEl, snapBounds, hovering]);

  if (!visible) return null;

  return (
    <div className="luxury-cursor-container">
      {/* Click ripples */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ scale: 0.1, opacity: 0.8 }}
            animate={{ scale: 2.2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="cursor-ripple-circle"
            style={{ left: ripple.x, top: ripple.y }}
          />
        ))}
      </AnimatePresence>

      {/* Particle trail */}
      {trail.map((p, idx) => (
        <div
          key={p.id}
          className="cursor-trail-bubble"
          style={{
            left: p.x,
            top: p.y,
            opacity: (idx + 1) * 0.15,
            transform: `translate(-50%, -50%) scale(${(idx + 1) * 0.18})`
          }}
        />
      ))}

      {/* Stretching Outer Ring */}
      <div
        className={`cursor-outer-ring ${snappedEl ? 'cursor-snapped' : ''}`}
        style={{
          left: ringPos.x,
          top: ringPos.y,
          width: ringStyle.width,
          height: ringStyle.height,
          borderRadius: ringStyle.borderRadius,
          transform: `translate(-50%, -50%) rotate(${ringStyle.rotate}deg) scaleX(${ringStyle.scaleX}) scaleY(${ringStyle.scaleY})`,
          transition: snappedEl ? 'width 0.25s cubic-bezier(0.16, 1, 0.3, 1), height 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-radius 0.25s' : 'none'
        }}
      />

      {/* Snappy Center Point */}
      <div
        className="cursor-inner-dot"
        style={{
          left: dotPos.x,
          top: dotPos.y,
          transform: `translate(-50%, -50%) scale(${snappedEl ? 0.3 : 1})`,
          transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      />

      <style>{`
        .luxury-cursor-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          pointer-events: none;
          z-index: 999999;
        }

        .cursor-inner-dot {
          width: 5px;
          height: 5px;
          background-color: var(--gold-accent);
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 1000000;
        }

        .cursor-outer-ring {
          position: fixed;
          border: 1px solid rgba(200, 160, 74, 0.35);
          background-color: rgba(200, 160, 74, 0.015);
          pointer-events: none;
          z-index: 999999;
          will-change: transform, left, top, width, height;
          box-shadow: 0 0 4px rgba(200, 160, 74, 0.05);
        }

        .cursor-snapped {
          border-color: rgba(200, 160, 74, 0.85);
          background-color: rgba(200, 160, 74, 0.04);
          box-shadow: 0 0 10px rgba(200, 160, 74, 0.15);
        }

        .cursor-trail-bubble {
          position: fixed;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: rgba(200, 160, 74, 0.4);
          pointer-events: none;
          z-index: 999998;
        }

        .cursor-ripple-circle {
          position: fixed;
          width: 30px;
          height: 30px;
          border: 1.5px solid var(--gold-accent);
          background: rgba(200, 160, 74, 0.15);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 999997;
        }
      `}</style>
    </div>
  );
}
