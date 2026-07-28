import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function Globe3D() {
  const containerRef = useRef(null);
  const [webGLSupported, setWebGLSupported] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    // Detect WebGL capability
    let renderer;
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGLSupported(false);
        setLoading(false);
        return;
      }
    } catch (e) {
      setWebGLSupported(false);
      setLoading(false);
      return;
    }

    const container = containerRef.current;
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 250;

    // 3. Renderer setup
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    setLoading(false);

    // 4. Globe Particle System (Fibonacci Lattice for perfect dots layout)
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const radius = 80;
    const particleCount = window.innerWidth < 768 ? 400 : 800; // performance scaling
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorGold = new THREE.Color('#C8A04A');
    const colorGrey = new THREE.Color('#8A8A8A');

    // Create dot points on sphere surface
    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Gradient color interpolation based on latitude
      const mixRatio = (y + radius) / (radius * 2);
      const mixedColor = new THREE.Color().copy(colorGold).lerp(colorGrey, mixRatio);
      
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom glowing dot particle material
    const material = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    const globeParticles = new THREE.Points(geometry, material);
    globeGroup.add(globeParticles);

    // 5. Connective Marketing Arc Lines
    const linesGroup = new THREE.Group();
    globeGroup.add(linesGroup);

    const arcCount = 12;
    const arcsList = [];

    // Helper to get random coordinates on sphere surface
    const getLatLongOnSphere = () => {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      return new THREE.Vector3(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );
    };

    // Construct arcs with glowing bezier paths
    for (let k = 0; k < arcCount; k++) {
      const start = getLatLongOnSphere();
      const end = getLatLongOnSphere();

      // Control points for bezier curve to bend outwards
      const midPoint = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
      const distance = start.distanceTo(end);
      const bendFactor = 1.0 + (distance / radius) * 0.4;
      midPoint.normalize().multiplyScalar(radius * bendFactor);

      const curve = new THREE.QuadraticBezierCurve3(start, midPoint, end);
      const points = curve.getPoints(30);
      const arcGeom = new THREE.BufferGeometry().setFromPoints(points);

      const lineMat = new THREE.LineBasicMaterial({
        color: k % 2 === 0 ? '#C8A04A' : '#FAFAFA',
        transparent: true,
        opacity: 0.2,
        blending: THREE.AdditiveBlending
      });

      const line = new THREE.Line(arcGeom, lineMat);
      linesGroup.add(line);

      // Create glowing pulse particles floating on the arcs
      const pulseGeom = new THREE.BufferGeometry();
      const pulsePos = new Float32Array(3);
      pulseGeom.setAttribute('position', new THREE.BufferAttribute(pulsePos, 3));
      
      const pulseMat = new THREE.PointsMaterial({
        color: k % 2 === 0 ? '#FAFAFA' : '#E0B95A',
        size: 3,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending
      });
      const pulse = new THREE.Points(pulseGeom, pulseMat);
      linesGroup.add(pulse);

      arcsList.push({
        curve,
        pulse,
        progress: Math.random(),
        speed: 0.005 + Math.random() * 0.008
      });
    }

    // 6. Glowing ambient lights
    const light = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(light);

    const dirLight = new THREE.DirectionalLight(0xC8A04A, 1.0);
    dirLight.position.set(100, 100, 100);
    scene.add(dirLight);

    // 7. Mouse drag and parallax interaction
    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let isDragging = false;
    let prevMousePosition = { x: 0, y: 0 };

    const onMouseMove = (e) => {
      // Parallax target positions
      mouse.targetX = (e.clientX - window.innerWidth / 2) * 0.05;
      mouse.targetY = (e.clientY - window.innerHeight / 2) * 0.05;

      if (isDragging) {
        const deltaX = e.clientX - prevMousePosition.x;
        const deltaY = e.clientY - prevMousePosition.y;
        globeGroup.rotation.y += deltaX * 0.005;
        globeGroup.rotation.x += deltaY * 0.005;
        prevMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    const onMouseDown = (e) => {
      isDragging = true;
      prevMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // 8. Animation loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Auto rotation when not dragging
      if (!isDragging) {
        globeGroup.rotation.y += 0.0008;
      }

      // Parallax smooth interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;
      linesGroup.position.x = mouse.x * 0.15;
      linesGroup.position.y = -mouse.y * 0.15;

      // Animate active pulse nodes along bezier paths
      arcsList.forEach(arc => {
        arc.progress += arc.speed;
        if (arc.progress > 1) {
          arc.progress = 0;
        }
        const point = arc.curve.getPointAt(arc.progress);
        const positionAttr = arc.pulse.geometry.attributes.position;
        positionAttr.setXYZ(0, point.x, point.y, point.z);
        positionAttr.needsUpdate = true;
      });

      renderer.render(scene, camera);
    };
    animate();

    // 9. Resize support
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup WebGL context and event handlers
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      // Recursive disposal
      scene.remove(globeGroup);
      globeGroup.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((mat) => mat.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="globe-canvas-wrapper" ref={containerRef}>
      {loading && (
        <div className="globe-loader">
          <div className="loader-ring"></div>
        </div>
      )}
      {!webGLSupported && (
        <div className="globe-fallback">
          <div className="fallback-sphere">
            <div className="pulse-circle pulse-1"></div>
            <div className="pulse-circle pulse-2"></div>
            <div className="pulse-circle pulse-3"></div>
          </div>
        </div>
      )}
      <style>{`
        .globe-canvas-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: grab;
        }

        .globe-canvas-wrapper:active {
          cursor: grabbing;
        }

        .globe-loader {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .loader-ring {
          width: 80px;
          height: 80px;
          border: 2px solid rgba(0, 210, 255, 0.1);
          border-top-color: var(--neon-blue);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .globe-fallback {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .fallback-sphere {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(200, 160, 74, 0.1) 0%, rgba(24, 24, 24, 0.8) 70%, transparent 100%);
          border: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pulse-circle {
          position: absolute;
          border: 1.5px solid var(--gold-accent);
          border-radius: 50%;
          opacity: 0;
          animation: wave 4s cubic-bezier(0.1, 0.8, 0.3, 1) infinite;
        }

        .pulse-1 { animation-delay: 0s; }
        .pulse-2 { animation-delay: 1.3s; }
        .pulse-3 { animation-delay: 2.6s; }

        @keyframes wave {
          0% {
            width: 180px;
            height: 180px;
            opacity: 0.4;
          }
          100% {
            width: 320px;
            height: 320px;
            opacity: 0;
            border-color: var(--gold-accent);
          }
        }
      `}</style>
    </div>
  );
}
