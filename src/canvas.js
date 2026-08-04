/* --------------------------------------------------------------------------
   KINETIC SCULPTURE ENGINE - NANAK TECH SOLUTIONS
   Procedural 3D Mathematical Form Render Loop
   -------------------------------------------------------------------------- */

class KineticSculpture {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    
    // Core parameters
    this.points = [];
    this.numPoints = 280;
    this.time = 0;
    this.rotationX = 0;
    this.rotationY = 0;
    this.rotationZ = 0;
    
    // Morph states: 'home', 'tech', 'design', 'growth'
    this.currentState = 'home';
    this.targetState = 'home';
    this.morphProgress = 1.0;
    
    // Scroll and Mouse tracking
    this.scrollOffset = 0;
    this.targetScrollOffset = 0;
    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0, hover: false };
    this.springMouse = { x: 0, y: 0 };
    
    // Dimensions
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    
    // Color states (mapped to CSS design system, bronze/copper/gold)
    this.colors = {
      home: { r: 140, g: 111, b: 79 },      // Bronze
      tech: { r: 207, g: 181, b: 132 },     // Champagne Gold
      design: { r: 178, g: 101, b: 59 },    // Copper
      growth: { r: 166, g: 78, b: 34 }      // Burnt Orange
    };
    
    this.init();
    this.bindEvents();
    this.animate();
  }

  init() {
    this.resize();
    this.points = [];
    
    // Initialize base points array
    for (let i = 0; i < this.numPoints; i++) {
      this.points.push({
        // Current coordinates
        x: 0, y: 0, z: 0,
        // Interpolated display coordinates
        px: 0, py: 0, pz: 0,
        // Seed value for individual noise
        seed: Math.random() * Math.PI * 2,
        index: i
      });
    }
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width * window.devicePixelRatio;
    this.canvas.height = this.height * window.devicePixelRatio;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  bindEvents() {
    window.addEventListener('resize', () => this.resize());
    
    window.addEventListener('mousemove', (e) => {
      this.mouse.targetX = (e.clientX - this.width / 2) / (this.width / 2);
      this.mouse.targetY = (e.clientY - this.height / 2) / (this.height / 2);
      this.mouse.hover = true;
    });

    window.addEventListener('mouseleave', () => {
      this.mouse.targetX = 0;
      this.mouse.targetY = 0;
      this.mouse.hover = false;
    });
  }

  setMorphState(state) {
    if (state === this.targetState) return;
    this.targetState = state;
    this.morphProgress = 0.0;
  }

  updateScroll(scrollY) {
    this.targetScrollOffset = scrollY * 0.001; // Scale down for slow rotation
  }

  // 3D coordinate mapping based on states
  getCoordinates(point, state, time) {
    const i = point.index;
    const seed = point.seed;
    
    switch (state) {
      case 'home': {
        // Evolving spherical orbit structure
        const theta = (i / this.numPoints) * Math.PI * 2 + time * 0.05;
        const phi = Math.acos((2 * i) / this.numPoints - 1) + Math.sin(time * 0.1 + seed) * 0.2;
        
        const r = 200 + Math.sin(theta * 5 + time) * 35;
        return {
          x: r * Math.sin(phi) * Math.cos(theta),
          y: r * Math.sin(phi) * Math.sin(theta),
          z: r * Math.cos(phi)
        };
      }
      
      case 'tech': {
        // Precise procedural grid mesh (computational networks)
        const cols = 15;
        const col = i % cols;
        const row = Math.floor(i / cols);
        const cellW = 35;
        
        const x = (col - cols / 2) * cellW;
        const z = (row - (this.numPoints / cols) / 2) * cellW;
        
        // Dynamic ripple waves
        const dist = Math.sqrt(x*x + z*z);
        const y = Math.sin(dist * 0.02 - time * 0.5) * 45;
        
        return { x, y, z };
      }
      
      case 'design': {
        // Flowing, folding mathematical ribbon (Mobius strip logic)
        const t = (i / this.numPoints) * Math.PI * 2;
        const r = 240 + Math.cos(t * 3 + time * 0.4) * 50;
        
        return {
          x: r * Math.cos(t) * Math.sin(t * 0.5 + time * 0.05),
          y: r * Math.sin(t) * Math.cos(t * 0.5 + time * 0.05),
          z: r * Math.sin(t * 2 + time * 0.2) * 40
        };
      }
      
      case 'growth': {
        // Rising intersecting waveforms trending upwards
        const ratio = i / this.numPoints;
        const x = (ratio - 0.5) * 550;
        const baseAngle = ratio * Math.PI * 4 + time * 0.6;
        
        const y = Math.sin(baseAngle) * 80 + (ratio * 120 - 60); // Upward lean
        const z = Math.cos(baseAngle) * 80;
        
        return { x, y, z };
      }
      
      default:
        return { x: 0, y: 0, z: 0 };
    }
  }

  animate() {
    this.time += 0.02;
    
    // Lerp scroll values
    this.scrollOffset += (this.targetScrollOffset - this.scrollOffset) * 0.06;
    
    // Spring physics for mouse interaction
    this.springMouse.x += (this.mouse.targetX - this.springMouse.x) * 0.04;
    this.springMouse.y += (this.mouse.targetY - this.springMouse.y) * 0.04;
    
    // Adjust rotations based on scroll and time
    this.rotationX = this.time * 0.05 + this.scrollOffset * 1.5;
    this.rotationY = this.time * 0.08 + this.springMouse.x * 0.6;
    this.rotationZ = this.time * 0.03 + this.springMouse.y * 0.4;
    
    // Handle morph interpolation
    if (this.morphProgress < 1.0) {
      this.morphProgress += 0.015; // Slow transition
      if (this.morphProgress >= 1.0) {
        this.morphProgress = 1.0;
        this.currentState = this.targetState;
      }
    }
    
    // Interpolate points
    this.points.forEach(p => {
      const coord1 = this.getCoordinates(p, this.currentState, this.time);
      const coord2 = this.getCoordinates(p, this.targetState, this.time);
      
      // Interpolate coordinates between states
      const t = this.morphProgress;
      // Smoothstep curve for morph progress
      const smoothT = t * t * (3 - 2 * t);
      
      p.x = coord1.x + (coord2.x - coord1.x) * smoothT;
      p.y = coord1.y + (coord2.y - coord1.y) * smoothT;
      p.z = coord1.z + (coord2.z - coord1.z) * smoothT;
      
      // Gravitational mouse distortion (pushes/pulls points dynamically)
      if (this.mouse.hover) {
        const mouseWorldX = this.springMouse.x * 250;
        const mouseWorldY = this.springMouse.y * 250;
        const dx = p.x - mouseWorldX;
        const dy = p.y - mouseWorldY;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 180) {
          const force = (180 - dist) * 0.22;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }
      }
      
      // Apply 3D Rotation matrices
      // Rotation X
      let y1 = p.y * Math.cos(this.rotationX) - p.z * Math.sin(this.rotationX);
      let z1 = p.y * Math.sin(this.rotationX) + p.z * Math.cos(this.rotationX);
      
      // Rotation Y
      let x2 = p.x * Math.cos(this.rotationY) + z1 * Math.sin(this.rotationY);
      let z2 = -p.x * Math.sin(this.rotationY) + z1 * Math.cos(this.rotationY);
      
      // Rotation Z
      let x3 = x2 * Math.cos(this.rotationZ) - y1 * Math.sin(this.rotationZ);
      let y3 = x2 * Math.sin(this.rotationZ) + y1 * Math.cos(this.rotationZ);
      
      // Perspective projection
      const fov = 400; // Focal length
      const cameraDistance = 550; // Camera distance from origin
      const scale = fov / (cameraDistance + z2);
      
      p.px = x3 * scale + this.width / 2;
      p.py = y3 * scale + this.height / 2;
      p.pz = z2; // Save projected depth
    });

    // Render step
    this.render();
    
    // Loop
    requestAnimationFrame(() => this.animate());
  }

  render() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    
    // Sort points by depth (painters algorithm) to ensure visual layers
    const sorted = [...this.points].sort((a, b) => b.pz - a.pz);
    
    // Determine color based on morph transition
    const c1 = this.colors[this.currentState];
    const c2 = this.colors[this.targetState];
    const t = this.morphProgress;
    
    const r = Math.round(c1.r + (c2.r - c1.r) * t);
    const g = Math.round(c1.g + (c2.g - c1.g) * t);
    const b = Math.round(c1.b + (c2.b - c1.b) * t);
    
    // Draw lines first (back to front)
    this.ctx.lineWidth = 0.55;
    
    // Connect lines to nearby points (creating structured web look)
    const maxDist = 72; // Maximum connection distance
    const screenWidthMobile = this.width < 768;
    const connectionLimit = screenWidthMobile ? 2 : 4; // Reduce lines on mobile for frame performance
    
    for (let i = 0; i < sorted.length; i++) {
      const p1 = sorted[i];
      let connections = 0;
      
      // Check depth values for alpha shading
      // Depth spans roughly -250 to 250
      const depthAlpha = Math.max(0.1, Math.min(1.0, (p1.pz + 250) / 500));
      
      for (let j = i + 1; j < sorted.length; j++) {
        if (connections >= connectionLimit) break;
        
        const p2 = sorted[j];
        const dx = p1.px - p2.px;
        const dy = p1.py - p2.py;
        const dist = Math.sqrt(dx*dx + dy*dy);
        
        if (dist < maxDist) {
          const alpha = (1.0 - dist / maxDist) * 0.28 * depthAlpha;
          this.ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
          
          this.ctx.beginPath();
          this.ctx.moveTo(p1.px, p1.py);
          this.ctx.lineTo(p2.px, p2.py);
          this.ctx.stroke();
          
          connections++;
        }
      }
    }
    
    // Draw point particles
    sorted.forEach(p => {
      // Depth calculation (larger size & brighter color if closer)
      const depthAlpha = Math.max(0.1, Math.min(1.0, (p.pz + 250) / 500));
      const size = Math.max(0.7, (p.pz + 250) / 130);
      
      this.ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${depthAlpha * 0.85})`;
      this.ctx.beginPath();
      this.ctx.arc(p.px, p.py, size, 0, Math.PI * 2);
      this.ctx.fill();
    });
  }
}

export default KineticSculpture;
