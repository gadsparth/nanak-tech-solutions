/* --------------------------------------------------------------------------
   CORE APP ENTRY - NANAK TECH SOLUTIONS
   Handles SPA routing, Page Transitions, Smooth Scrolling, and Canvas coordination
   -------------------------------------------------------------------------- */

import KineticSculpture from './canvas.js';
import { getRouteContent, setCmsState, generateBlogCardHtml, getCharacterSvgHtml } from './router.js';
import { blogData } from './blogData.js';

class App {
  constructor() {
    this.canvasEngine = null;
    
    // Disable browser's native scroll restoration to prevent page jumping to footer on reload/load
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Smooth Scroll variables
    this.scroll = {
      current: 0,
      target: 0,
      ease: 0.08, // Smoothness coefficient
      active: false
    };
    
    // Bind global injection callback
    window.cmsScriptInjector = (state) => this.injectCustomScripts(state);
    
    this.init();
  }

  async init() {
    // 1. Initialize background kinetic sculpture
    this.canvasEngine = new KineticSculpture('sculpture-canvas');
    
    // 2. Fetch CMS content state from database
    try {
      const res = await fetch('/api/cms/load');
      const state = await res.json();
      setCmsState(state);
      this.injectCustomScripts(state);
    } catch (err) {
      console.warn('Failed to load live CMS data. Operating on fallback local state.', err);
    }
    
    // 3. Setup smooth scroll layout
    this.setupSmoothScroll();
    
    // 4. Setup client-side routing
    this.setupRouting();
    
    // 5. Initial page load
    this.handleRoute(window.location.pathname);
    
    // 6. Setup global event listeners
    this.setupGlobalEvents();
    
    // 7. Initialize Mega Menu dropdown with cursor forgiveness
    this.setupDropdownMenu();

    // 8. Inject and configure interactive overlays
    this.injectInteractiveOverlay();

    // 9. Inject premium WhatsApp widget
    this.injectWhatsAppWidget();

    // 10. Smoothly fade in content after initial routing is handled
    const content = document.getElementById('scroll-content');
    if (content) {
      content.style.opacity = '1';
    }
  }

  injectCustomScripts(state) {
    if (!state || !state.globalSettings) return;
    
    // 1. Inject Head Code
    const existingHead = document.getElementById('cms-custom-head');
    if (existingHead) existingHead.remove();
    
    if (state.globalSettings.customHeadCode) {
      const wrapper = document.createElement('div');
      wrapper.id = 'cms-custom-head';
      wrapper.style.display = 'none';
      wrapper.innerHTML = state.globalSettings.customHeadCode;
      document.head.appendChild(wrapper);
      
      // Execute any script tags nested inside
      Array.from(wrapper.querySelectorAll('script')).forEach(oldScript => {
        const newScript = document.createElement('script');
        Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
        newScript.appendChild(document.createTextNode(oldScript.innerHTML));
        oldScript.parentNode.replaceChild(newScript, oldScript);
      });
    }

    // 2. Inject Body Start Code
    const existingBodyStart = document.getElementById('cms-custom-bodystart');
    if (existingBodyStart) existingBodyStart.remove();
    
    if (state.globalSettings.customBodyStartCode) {
      const wrapper = document.createElement('div');
      wrapper.id = 'cms-custom-bodystart';
      wrapper.style.display = 'none';
      wrapper.innerHTML = state.globalSettings.customBodyStartCode;
      document.body.insertBefore(wrapper, document.body.firstChild);
      
      Array.from(wrapper.querySelectorAll('script')).forEach(oldScript => {
        const newScript = document.createElement('script');
        Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
        newScript.appendChild(document.createTextNode(oldScript.innerHTML));
        oldScript.parentNode.replaceChild(newScript, oldScript);
      });
    }

    // 3. Inject Footer Code
    const existingFooter = document.getElementById('cms-custom-footer');
    if (existingFooter) existingFooter.remove();
    
    if (state.globalSettings.customFooterCode) {
      const wrapper = document.createElement('div');
      wrapper.id = 'cms-custom-footer';
      wrapper.style.display = 'none';
      wrapper.innerHTML = state.globalSettings.customFooterCode;
      document.body.appendChild(wrapper);
      
      Array.from(wrapper.querySelectorAll('script')).forEach(oldScript => {
        const newScript = document.createElement('script');
        Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
        newScript.appendChild(document.createTextNode(oldScript.innerHTML));
        oldScript.parentNode.replaceChild(newScript, oldScript);
      });
    }
  }

  /* --------------------------------------------------------------------------
     SMOOTH SCROLL ENGINE (LERP-Based Visual Sync)
     -------------------------------------------------------------------------- */
  setupSmoothScroll() {
    // Check if mobile/tablet or touch device (disable custom smooth scroll to protect native inertia)
    const isMobile = window.innerWidth <= 1024 || ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
    
    if (isMobile) {
      document.body.style.overflow = 'auto';
      const wrapper = document.getElementById('scroll-wrapper');
      const content = document.getElementById('scroll-content');
      
      // Reset layout for native mobile scroll
      if (wrapper && content) {
        wrapper.style.position = 'relative';
        wrapper.style.height = 'auto';
        wrapper.style.overflow = 'visible';
        content.style.position = 'relative';
        content.style.transform = 'none';
      }
      
      // Update canvas scroll offset on standard scroll
      window.addEventListener('scroll', () => {
        if (this.canvasEngine) {
          this.canvasEngine.updateScroll(window.scrollY);
        }
      });
      
      return;
    }

    // Desktop: Create native scroll spacer to mimic page size
    let spacer = document.getElementById('scroll-spacer');
    if (!spacer) {
      spacer = document.createElement('div');
      spacer.id = 'scroll-spacer';
      document.body.appendChild(spacer);
    }

    this.scroll.active = true;
    this.updateScrollHeight();

    // Listen for browser scroll events
    window.addEventListener('scroll', () => {
      this.scroll.target = window.scrollY;
    }, { passive: true });

    // Run tick rendering loop
    this.scrollTick();
  }

  updateScrollHeight() {
    if (!this.scroll.active) return;
    const content = document.getElementById('scroll-content');
    const spacer = document.getElementById('scroll-spacer');
    
    if (content && spacer) {
      // Small timeout to ensure DOM paints and heights are accurate
      setTimeout(() => {
        spacer.style.height = `${content.clientHeight}px`;
      }, 50);
    }
  }

  scrollTick() {
    if (!this.scroll.active) return;
    
    // Linear interpolation
    this.scroll.current += (this.scroll.target - this.scroll.current) * this.scroll.ease;
    
    const content = document.getElementById('scroll-content');
    if (content) {
      content.style.transform = `translate3d(0, -${Math.round(this.scroll.current * 100) / 100}px, 0)`;
    }
    
    // Inform canvas of scroll offset
    if (this.canvasEngine) {
      this.canvasEngine.updateScroll(this.scroll.current);
    }
    
    requestAnimationFrame(() => this.scrollTick());
  }

  /* --------------------------------------------------------------------------
     CLIENT-SIDE SPA ROUTING
     -------------------------------------------------------------------------- */
  setupRouting() {
    document.addEventListener('click', (e) => {
      const anchor = e.target.closest('a[data-link]');
      if (anchor) {
        e.preventDefault();
        const path = anchor.getAttribute('href');
        
        // Close mobile nav menu on routing
        const header = document.querySelector('.site-header');
        const mobileToggle = document.querySelector('.mobile-nav-toggle');
        if (header && header.classList.contains('nav-active')) {
          header.classList.remove('nav-active');
          document.body.classList.remove('no-scroll');
          if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
        }

        // Direct navigation to destination path (like /request-consultation)

        this.navigateTo(path);
      }
    });


    // Handle back/forward navigation
    window.addEventListener('popstate', () => {
      this.handleRoute(window.location.pathname);
    });
  }

  navigateTo(path) {
    if (window.location.pathname === path) return;
    
    // Trigger transition sweep overlay
    const overlay = document.getElementById('transition-overlay');
    if (overlay) {
      overlay.classList.add('active');
      
      // Delay rendering content until overlay covers viewport
      setTimeout(() => {
        window.history.pushState(null, null, path);
        this.handleRoute(path);
        
        // Sweep overlay back down
        setTimeout(() => {
          overlay.classList.remove('active');
        }, 150);
      }, 400); // Transitions animation timings
    } else {
      window.history.pushState(null, null, path);
      this.handleRoute(path);
    }
  }

  handleRoute(path) {
    // Clear active timers or scroll listeners from previous page context to avoid memory leaks
    if (this.aboutInterval) {
      clearInterval(this.aboutInterval);
      this.aboutInterval = null;
    }
    if (this.timelineScrollHandler) {
      window.removeEventListener('scroll', this.timelineScrollHandler);
      this.timelineScrollHandler = null;
    }
    if (this.privacyScrollHandler) {
      window.removeEventListener('scroll', this.privacyScrollHandler);
      this.privacyScrollHandler = null;
    }
    if (this.blogScrollHandler) {
      window.removeEventListener('scroll', this.blogScrollHandler);
      this.blogScrollHandler = null;
    }
    if (this.processScrollHandler) {
      window.removeEventListener('scroll', this.processScrollHandler);
      this.processScrollHandler = null;
    }
    if (this.consultationScrollHandler) {
      window.removeEventListener('scroll', this.consultationScrollHandler);
      this.consultationScrollHandler = null;
    }
    if (this.consultationMouseMoveHandler) {
      window.removeEventListener('mousemove', this.consultationMouseMoveHandler);
      this.consultationMouseMoveHandler = null;
    }

    const appContent = document.getElementById('app-content');
    if (!appContent) return;

    // Inject routing templates
    appContent.innerHTML = getRouteContent(path);
    
    // Reset scroll values to top of page
    this.scroll.current = 0;
    this.scroll.target = 0;
    window.scrollTo(0, 0);
    
    // Force transform reset
    const content = document.getElementById('scroll-content');
    if (content) {
      content.style.transform = `translate3d(0, 0, 0)`;
    }

    // Re-verify layouts and reset heights
    this.updateScrollHeight();
    this.updateNavHighlight(path);
    
    // Synchronize canvas animation states
    this.syncCanvasState(path);
    // Initialize page-specific logics
    if (path === '/contact-us') {
      this.initializeConsultationPage();
    } else if (path === '/thank-you') {
      this.initializeThankYouPage();
    } else if (path === '/about-us') {
      this.initializeAboutPage();
    } else if (path === '/privacy-policy') {
      this.initializePrivacyPage();
    } else if (path === '/blog') {
      this.initializeBlogHub();
    } else if (path.startsWith('/blog/')) {
      const slug = path.replace('/blog/', '');
      this.initializeBlogPost(slug);
    } else if (path.startsWith('/services/')) {
      this.setupProcessTimeline();
    }

    // Inject Head SEO meta tags dynamically
    this.injectBlogSEO(path);

    // Setup scroll reveal observations
    this.setupScrollReveal();
  }

  syncCanvasState(path) {
    if (!this.canvasEngine) return;
    
    // Hide background sculpture on all blog pages for design clarity and reading readability
    const canvas = document.getElementById('sculpture-canvas');
    if (canvas) {
      if (path.startsWith('/blog')) {
        canvas.style.opacity = '0';
      } else {
        canvas.style.opacity = '0.35';
      }
    }
    
    if (path === '/' || path === '' || path === '/index.html') {
      this.canvasEngine.setMorphState('home');
    } else if (path.includes('ai-automation') || path.includes('business-automation') || path.includes('mobile-apps') || path.includes('website-development')) {
      this.canvasEngine.setMorphState('tech');
    } else if (path.includes('ui-ux-design') || path.includes('website-design') || path.includes('brand-strategy')) {
      this.canvasEngine.setMorphState('design');
    } else {
      // Marketing, SEO, Performance, Social, Lead Gen, About Us, Privacy Policy, Blog
      this.canvasEngine.setMorphState('growth');
    }
  }

  updateNavHighlight(path) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.classList.remove('active');
      const href = item.getAttribute('href');
      if (href && (path === href || (href !== '/' && path.startsWith(href)))) {
        item.classList.add('active');
      }
    });
  }

  /* --------------------------------------------------------------------------
     REQUEST CONSULTATION INTERACTIVE LOGIC
     -------------------------------------------------------------------------- */
  initializeConsultationPage() {
    const char = document.getElementById('overlay-consultant-character');
    const modal = document.getElementById('consultation-modal-panel');
    const bubble = document.getElementById('char-speech-bubble');
    const bubbleText = document.getElementById('char-speech-text');

    if (!char || !modal) return;

    // Reset components prior to playing walk sequence
    modal.classList.remove('pulled-in', 'assembling-active');
    if (bubble) bubble.classList.remove('bubble-active');

    char.style.right = '-250px';
    char.style.transform = 'none';
    char.classList.remove('waving', 'pulling', 'thumbs-up', 'celebrating');
    char.classList.add('walking');

    // Walk character in
    setTimeout(() => {
      char.style.right = '8%';
      if (window.innerWidth <= 768) {
        char.style.right = '4%';
        char.style.bottom = '-40px';
      }
    }, 50);

    // Greet Speech Bubble
    setTimeout(() => {
      char.classList.remove('walking');
      char.classList.add('waving');

      if (bubbleText) bubbleText.innerHTML = `👋 Hi!<br>Let's build your business growth strategy together.`;
      if (bubble) bubble.classList.add('bubble-active');

      // Grab and pull modal panel from side
      setTimeout(() => {
        if (bubble) bubble.classList.remove('bubble-active');

        char.classList.remove('waving');
        char.classList.add('pulling');
        char.style.transform = 'translateX(-25px)';

        setTimeout(() => {
          modal.classList.add('pulled-in');

          setTimeout(() => {
            char.classList.remove('pulling');
            char.style.transform = 'none';

            modal.classList.add('assembling-active');
            const borderPath = document.getElementById('modal-assembling-border-path');
            if (borderPath) borderPath.style.strokeDashoffset = '0';

            const fullNameInput = document.getElementById('m-fullname');
            if (fullNameInput) fullNameInput.focus();

          }, 800);
        }, 200); // Natural inertia drag lag

      }, 3000); // 3 seconds reading greetings
    }, 2500); // Walking timeline duration

    // Bind reactive progress ticks & validation
    const modalForm = document.getElementById('modal-consultation-form');
    if (modalForm) {
      const inputs = modalForm.querySelectorAll('input, select, textarea');
      const progressLabel = document.getElementById('modal-progress-label');
      const progressBar = document.getElementById('modal-progress-bar-fill');

      const updateProgress = () => {
        let filledCount = 0;
        inputs.forEach(inp => {
          if (inp.type === 'checkbox') {
            if (inp.checked) filledCount++;
          } else {
            if (inp.value.trim() !== '') filledCount++;
          }
        });

        const percentage = Math.round((filledCount / 5) * 100); // 5 inputs total
        const completedTicks = Math.round(filledCount * 2);
        let progressString = '';
        for (let i = 0; i < 10; i++) {
          progressString += i < completedTicks ? '■' : '□';
        }

        if (progressLabel) progressLabel.textContent = `Contact Progress ${progressString} ${percentage}%`;
        if (progressBar) progressBar.style.width = `${percentage}%`;
      };

      inputs.forEach(inp => {
        inp.addEventListener('input', updateProgress);
        inp.addEventListener('change', updateProgress);
        
        // Positive character thumbs-up gestures
        inp.addEventListener('blur', () => {
          if (inp.checkValidity() && inp.value.trim() !== '' && char) {
            char.classList.add('thumbs-up');
            setTimeout(() => {
              char.classList.remove('thumbs-up');
            }, 1800);
          }
        });
      });

      // Handle Form submission
      modalForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let formIsValid = true;
        let firstInvalidInput = null;
        inputs.forEach(input => {
          const group = input.closest('.glass-form-group');
          if (!input.checkValidity()) {
            formIsValid = false;
            if (group) {
              group.classList.remove('valid');
              group.classList.add('invalid-error');
            }
            if (!firstInvalidInput) firstInvalidInput = input;
          } else {
            if (group) {
              group.classList.add('valid');
              group.classList.remove('invalid-error');
            }
          }
        });

        if (!formIsValid) {
          if (firstInvalidInput) {
            firstInvalidInput.focus();
            firstInvalidInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
          alert('Please enter all parameters correctly to send the message.');
          return;
        }

        const successOverlay = document.getElementById('modal-success-overlay');
        const loaderText = document.getElementById('modal-loader-text');
        const checkmarkIcon = document.getElementById('modal-checkmark-icon');
        const fillRing = document.getElementById('loading-progress-ring-fill');

        if (successOverlay) successOverlay.classList.remove('hidden');
        if (fillRing) {
          fillRing.style.transition = 'stroke-dashoffset 2.2s linear';
          fillRing.style.strokeDashoffset = '0';
        }

        inputs.forEach(inp => inp.disabled = true);

        const formData = {
          fullname: document.getElementById('m-fullname').value,
          email: document.getElementById('m-email').value,
          phone: document.getElementById('m-phone').value,
          service: document.getElementById('m-service').value,
          message: document.getElementById('m-message').value
        };

        fetch('/api/consultation', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })
        .then(response => {
          if (!response.ok) throw new Error('Registration sync failed.');
          return response.json();
        })
        .then(() => {
          setTimeout(() => {
            if (checkmarkIcon) {
              checkmarkIcon.classList.remove('hidden');
              checkmarkIcon.classList.add('checkmark-active');
            }
            if (loaderText) loaderText.textContent = 'Message Sent Successfully';

            if (char) {
              char.classList.add('celebrating');
              
              const successBubble = document.createElement('div');
              successBubble.className = 'character-speech-bubble bubble-active';
              successBubble.style.top = '-95px';
              successBubble.style.right = '50%';
              successBubble.innerHTML = `
                <div class="bubble-inner">🎉 Great!<br>Your message has been received.<br>We'll connect shortly.</div>
                <div class="bubble-arrow"></div>
              `;
              char.appendChild(successBubble);

              setTimeout(() => {
                if (successOverlay) successOverlay.classList.add('hidden');
                successBubble.remove();
                
                // Clear fields for next triggers
                modalForm.reset();
                this.navigateTo('/thank-you');
              }, 1800);
            }
          }, 2200);
        })
        .catch(err => {
          alert(err.message || 'Submission request failed.');
          inputs.forEach(inp => inp.disabled = false);
          if (successOverlay) successOverlay.classList.add('hidden');
        });
      });
    }
  }

  animateTrustCounters() {
    const counterSec = document.getElementById('trust-metrics-section') || document.getElementById('about-stats-section');
    if (!counterSec) return;

    const countElements = counterSec.querySelectorAll('[id^="count-"], [id^="stat-"]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          countElements.forEach(el => {
            const targetVal = parseFloat(el.getAttribute('data-count'));
            this.runNumberAnimation(el, targetVal);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(counterSec);
  }

  runNumberAnimation(element, targetVal) {
    let startVal = 0;
    const duration = 2000; // 2 seconds animation duration
    const startTime = performance.now();
    
    const isDecimal = targetVal % 1 !== 0;

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1.0);
      
      // Easing curve (easeOutExpo)
      const easeVal = progress === 1.0 ? 1.0 : 1.0 - Math.pow(2, -10 * progress);
      const current = startVal + (targetVal - startVal) * easeVal;
      
      if (isDecimal) {
        element.textContent = current.toFixed(1) + 'x';
      } else {
        const formatted = Math.floor(current).toLocaleString();
        element.textContent = formatted + (element.id === 'count-hours' || element.id === 'stat-hours' ? '' : '+');
      }

      if (progress < 1.0) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }

  /* --------------------------------------------------------------------------
     ABOUT US INTERACTIVE SCRIPTS
     -------------------------------------------------------------------------- */
  initializeAboutPage() {
    // 1. Testimonial slider setup
    let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.slider-dot');
    
    const selectSlide = (index) => {
      slides.forEach(s => s.classList.remove('active'));
      dots.forEach(d => d.classList.remove('active'));
      if (slides[index]) slides[index].classList.add('active');
      if (dots[index]) dots[index].classList.add('active');
      currentSlide = index;
    };

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const idx = parseInt(dot.getAttribute('data-slide'));
        selectSlide(idx);
        // Reset slide timer on manual click to give readability time
        clearInterval(this.aboutInterval);
        startInterval();
      });
    });

    const startInterval = () => {
      this.aboutInterval = setInterval(() => {
        if (slides.length > 0) {
          let next = (currentSlide + 1) % slides.length;
          selectSlide(next);
        }
      }, 6000);
    };

    if (slides.length > 0) {
      startInterval();
    }

    // 2. Value cards scroll fade reveal setup
    const values = document.querySelectorAll('.scroll-reveal-value');
    const valuesObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          valuesObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    values.forEach(v => valuesObserver.observe(v));

    // 3. Process timeline scrolling progression
    const timelineSection = document.getElementById('about-process-section');
    const progressIndicator = document.getElementById('timeline-indicator-glow');
    const stepRows = document.querySelectorAll('.timeline-step-row');

    const onTimelineScroll = () => {
      if (!timelineSection || !progressIndicator) return;
      
      const rect = timelineSection.getBoundingClientRect();
      const sectionHeight = timelineSection.clientHeight;
      const scrolledIn = (window.innerHeight * 0.6) - rect.top;
      
      let progressPct = 0;
      if (scrolledIn > 0) {
        progressPct = Math.min((scrolledIn / (sectionHeight - 300)) * 100, 100);
      }
      progressIndicator.style.height = `${progressPct}%`;
      
      let maxActiveIndex = 0;
      stepRows.forEach((row, index) => {
        const rowRect = row.getBoundingClientRect();
        if (rowRect.top < window.innerHeight * 0.6) {
          row.classList.add('active');
          maxActiveIndex = index + 1;
        } else {
          row.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', onTimelineScroll);
    this.timelineScrollHandler = onTimelineScroll;
    
    // Initial call to set active rows
    onTimelineScroll();

    // 4. Initialize numbers count-up animation observer
    this.animateTrustCounters();
  }



  /* --------------------------------------------------------------------------
     PRIVACY POLICY ACTIVE TOC HIGHLIGHTING
     -------------------------------------------------------------------------- */
  initializePrivacyPage() {
    const sections = document.querySelectorAll('.privacy-section');
    const tocLinks = document.querySelectorAll('.toc-link');

    const onPrivacyScroll = () => {
      let activeId = '';
      sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.4 && rect.bottom > window.innerHeight * 0.2) {
          activeId = sec.id;
        }
      });

      if (activeId) {
        tocLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${activeId}`) {
            link.classList.add('active');
          }
        });
      }
    };

    window.addEventListener('scroll', onPrivacyScroll);
    this.privacyScrollHandler = onPrivacyScroll;
    onPrivacyScroll(); // Initial active mapping

    // Setup smooth scrolling overrides on TOC link clicks
    tocLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          if (this.scroll.active) {
            this.scroll.target = targetEl.offsetTop - 120; // Clearance for header
          } else {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     GLOBAL EVENT HANDLERS & RESIZING
     -------------------------------------------------------------------------- */
  setupGlobalEvents() {
    // Mobile navigation toggle handler
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const header = document.querySelector('.site-header');
    
    if (mobileToggle && header) {
      mobileToggle.addEventListener('click', () => {
        const isOpen = header.classList.contains('nav-active');
        if (isOpen) {
          header.classList.remove('nav-active');
          document.body.classList.remove('no-scroll');
          mobileToggle.setAttribute('aria-expanded', 'false');
        } else {
          header.classList.add('nav-active');
          document.body.classList.add('no-scroll');
          mobileToggle.setAttribute('aria-expanded', 'true');
        }
      });
    }

    // (Toggling of dropdown is now handled via setupDropdownMenu on startup)

    // Monitor window resize to adjust scroll spacer
    window.addEventListener('resize', () => {
      this.updateScrollHeight();
    });

    // Event delegation on app content container to track sub-interactions
    const appContent = document.getElementById('app-content');
    if (appContent) {
      // Listen for contact form submission inside route scope
      appContent.addEventListener('submit', (e) => {
        const form = e.target.closest('#consultation-form');
        if (form) {
          e.preventDefault();

          const nameInput = document.getElementById('form-name');
          const emailInput = document.getElementById('form-email');
          const phoneInput = document.getElementById('form-phone');
          const serviceInput = document.getElementById('form-service');
          const msgInput = document.getElementById('form-msg');

          if (!nameInput || !emailInput || !phoneInput || !serviceInput || !msgInput) return;

          let formIsValid = true;
          const fields = [nameInput, emailInput, phoneInput, serviceInput, msgInput];

          fields.forEach(input => {
            if (!input.value || !input.checkValidity()) {
              formIsValid = false;
              input.style.borderBottomColor = 'red';
            } else {
              input.style.borderBottomColor = '';
            }
          });

          if (!formIsValid) {
            alert('Please enter all parameters correctly to send the message.');
            return;
          }

          const submitBtn = form.querySelector('.form-submit');
          if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending Message...';
          }

          const formData = {
            fullname: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            service: serviceInput.value,
            message: msgInput.value
          };

          fetch('/api/consultation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          })
          .then(response => {
            if (!response.ok) throw new Error('Registration sync failed.');
            return response.json();
          })
          .then(() => {
            form.reset();
            this.navigateTo('/thank-you');
          })
          .catch(err => {
            alert(err.message || 'Submission request failed.');
          })
          .finally(() => {
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.textContent = 'Send Message';
            }
            this.updateScrollHeight();
          });
        }
      });
      
      // Dynamic updates to height when content elements stretch (like accordion clicks)
      appContent.addEventListener('click', (e) => {
        const button = e.target.closest('.faq-question');
        if (button) {
          // Allow height calculations to adjust after dynamic CSS transitions (300ms)
          setTimeout(() => {
            this.updateScrollHeight();
          }, 350);
        }
      });
    }
  }

  /* --------------------------------------------------------------------------
     MEGA MENU SERVICES DROPDOWN - CURSOR FORGIVENESS & HOVER DELAY
     -------------------------------------------------------------------------- */
  setupDropdownMenu() {
    const trigger = document.querySelector('.nav-services-trigger');
    const menu = document.querySelector('.nav-dropdown-menu');
    if (!trigger || !menu) return;

    let timeoutId = null;

    const openMenu = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      trigger.classList.add('dropdown-active');
    };

    const closeMenu = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        trigger.classList.remove('dropdown-active');
        timeoutId = null;
      }, 300); // 300ms cursor forgiveness delay
    };

    // Desktop hover bindings
    trigger.addEventListener('mouseenter', () => {
      if (window.innerWidth > 768) openMenu();
    });

    trigger.addEventListener('mouseleave', () => {
      if (window.innerWidth > 768) closeMenu();
    });

    menu.addEventListener('mouseenter', () => {
      if (window.innerWidth > 768) openMenu();
    });

    menu.addEventListener('mouseleave', () => {
      if (window.innerWidth > 768) closeMenu();
    });

    // Keyboard focus bindings
    const navLink = trigger.querySelector('.nav-item');
    if (navLink) {
      navLink.addEventListener('focus', () => {
        if (window.innerWidth > 768) openMenu();
      });
      navLink.addEventListener('blur', () => {
        setTimeout(() => {
          if (!menu.contains(document.activeElement)) {
            closeMenu();
          }
        }, 50);
      });
    }

    const dropdownLinks = menu.querySelectorAll('a');
    if (dropdownLinks.length > 0) {
      const lastLink = dropdownLinks[dropdownLinks.length - 1];
      lastLink.addEventListener('blur', () => {
        closeMenu();
      });
    }

    // Mobile tap triggers
    trigger.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        if (!menu.contains(e.target)) {
          e.preventDefault();
          trigger.classList.toggle('dropdown-active');
        }
      }
    });
  }

  /* --------------------------------------------------------------------------
     BLOG SEARCH & FILTERS CONTROLLER
     -------------------------------------------------------------------------- */
  initializeBlogHub() {
    const searchInput = document.getElementById('blog-search-input');
    const searchClear = document.getElementById('blog-search-clear');
    const sortSelect = document.getElementById('blog-sort-select');
    const filterPills = document.querySelectorAll('.blog-filter-pill');
    const blogGrid = document.getElementById('blog-grid');
    const featuredSec = document.getElementById('blog-featured-section');
    const countLabel = document.getElementById('blog-count-label');
    const emptyState = document.getElementById('blog-no-results');
    const resetBtn = document.getElementById('blog-reset-filters-btn');

    if (!blogGrid) return;

    let activeCategory = 'all';
    let searchQuery = '';
    let sortBy = 'newest';

    const filterAndRender = () => {
      let filtered = Object.values(blogData);

      // 1. Keyword query search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        filtered = filtered.filter(p => 
          p.title.toLowerCase().includes(query) || 
          p.excerpt.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.keywords.some(k => k.toLowerCase().includes(query))
        );
      }

      // 2. Category selection
      if (activeCategory !== 'all') {
        filtered = filtered.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());
      }

      // 3. Sorting orders
      filtered.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return sortBy === 'newest' ? dateB - dateA : dateA - dateB;
      });

      // 4. Update UI
      if (filtered.length > 0) {
        blogGrid.style.display = 'grid';
        emptyState.style.display = 'none';
        blogGrid.innerHTML = filtered.map(p => generateBlogCardHtml(p)).join('');
        countLabel.textContent = `All Publications (${filtered.length})`;
      } else {
        blogGrid.style.display = 'none';
        emptyState.style.display = 'flex';
        countLabel.textContent = 'All Publications (0)';
      }
      this.updateScrollHeight();
    };

    // Category selection tabs listener
    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        activeCategory = pill.getAttribute('data-category');
        
        if (activeCategory !== 'all' && featuredSec) {
          featuredSec.style.display = 'none';
        } else if (featuredSec) {
          featuredSec.style.display = 'block';
        }
        
        filterAndRender();
      });
    });

    // Search bar listener
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        if (searchQuery.trim()) {
          if (searchClear) searchClear.style.visibility = 'visible';
          if (featuredSec) featuredSec.style.display = 'none';
        } else {
          if (searchClear) searchClear.style.visibility = 'hidden';
          if (featuredSec && activeCategory === 'all') featuredSec.style.display = 'block';
        }
        filterAndRender();
      });
    }

    // Search clear click
    if (searchClear) {
      searchClear.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        searchClear.style.visibility = 'hidden';
        if (featuredSec && activeCategory === 'all') featuredSec.style.display = 'block';
        filterAndRender();
      });
    }

    // Sorting selection change
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        sortBy = e.target.value;
        filterAndRender();
      });
    }

    // Reset button click
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        searchQuery = '';
        if (searchClear) searchClear.style.visibility = 'hidden';
        
        filterPills.forEach(p => p.classList.remove('active'));
        if (filterPills[0]) filterPills[0].classList.add('active');
        activeCategory = 'all';

        if (sortSelect) sortSelect.value = 'newest';
        sortBy = 'newest';

        if (featuredSec) featuredSec.style.display = 'block';

        filterAndRender();
      });
    }
  }

  /* --------------------------------------------------------------------------
     BLOG ARTICLE DETAILS CONTROLLER
     -------------------------------------------------------------------------- */
  initializeBlogPost(slug) {
    const post = blogData[slug];
    if (!post) return;

    // 1. Progress bar and TOC dynamic highlight scroll listener
    const progressBar = document.getElementById('blog-progress-bar');
    const onBlogScroll = () => {
      const article = document.querySelector('.blog-body-col');
      if (!article || !progressBar) return;
      
      const rect = article.getBoundingClientRect();
      const articleHeight = rect.height;
      const scrolled = window.scrollY - (rect.top + window.scrollY - 120);
      
      let progress = (scrolled / (articleHeight - window.innerHeight + 300)) * 100;
      progress = Math.max(0, Math.min(100, progress));
      progressBar.style.width = `${progress}%`;

      // Sync sticky TOC outline list highlights
      const sections = document.querySelectorAll('.blog-article-section');
      const tocLinks = document.querySelectorAll('.toc-link');
      
      let activeId = '';
      sections.forEach(sec => {
        const secRect = sec.getBoundingClientRect();
        if (secRect.top < window.innerHeight * 0.3) {
          activeId = sec.getAttribute('id');
        }
      });

      if (activeId) {
        tocLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${activeId}`) {
            link.classList.add('active');
          }
        });
      }

      // Display floating consultation callout
      const floatingCta = document.getElementById('blog-floating-cta');
      if (floatingCta) {
        if (window.scrollY > 800) {
          floatingCta.classList.add('active');
        } else {
          floatingCta.classList.remove('active');
        }
      }
    };

    window.addEventListener('scroll', onBlogScroll);
    this.blogScrollHandler = onBlogScroll;
    onBlogScroll();

    // 2. TOC outline anchors smooth offsets
    const tocLinks = document.querySelectorAll('.toc-link');
    tocLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').replace('#', '');
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          if (this.scroll.active) {
            this.scroll.target = targetEl.offsetTop - 120;
          } else {
            window.scrollTo({
              top: targetEl.offsetTop - 120,
              behavior: 'smooth'
            });
          }
        }
      });
    });

    // 3. Share URL Copy clipboard functionality
    const copyBtn = document.getElementById('blog-copy-link-btn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
          const originalSvg = copyBtn.innerHTML;
          copyBtn.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--color-accent-gold)" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>`;
          
          if (window.adminCms && typeof window.adminCms.showToast === 'function') {
            window.adminCms.showToast('Article URL copied to clipboard');
          }

          setTimeout(() => {
            copyBtn.innerHTML = originalSvg;
          }, 1800);
        });
      });
    }

    // 4. Newsletter form submission logic
    const newsForm = document.getElementById('blog-newsletter-form');
    if (newsForm) {
      newsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = newsForm.querySelector('input');
        if (input && input.value) {
          if (window.adminCms && typeof window.adminCms.showToast === 'function') {
            window.adminCms.showToast("Subscribed to Nanak Tech Solutions's Newsletter");
          }
          input.value = '';
        }
      });
    }
  }

  /* --------------------------------------------------------------------------
     DYNAMIC SEO INJECTOR
     -------------------------------------------------------------------------- */
  injectBlogSEO(path) {
    let title = "Nanak Tech Solutions | Bespoke AI Automation & Creative Technology Studio";
    let desc = "We craft premium digital experiences, custom AI automation, high-performance web applications, and editorial brand strategies.";
    let canonical = window.location.origin + path;
    let schema = null;
    let isArticle = false;

    if (path === '/blog') {
      title = "Insights, AI & Digital Growth Resources | Nanak Tech Solutions";
      desc = "Expert insights on Artificial Intelligence, Digital Marketing, SEO, Automation, Web Development, Analytics and Business Growth.";
      schema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Nanak Tech Solutions Insights",
        "description": desc,
        "url": canonical,
        "publisher": {
          "@type": "Organization",
          "name": "Nanak Tech Solutions",
          "logo": {
            "@type": "ImageObject",
            "url": window.location.origin + "/favicon.svg"
          }
        }
      };
    } else if (path.startsWith('/blog/')) {
      const slug = path.replace('/blog/', '');
      const post = blogData[slug];
      if (post) {
        title = post.metaTitle;
        desc = post.metaDesc;
        isArticle = true;

        schema = {
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": canonical
          },
          "headline": post.title,
          "description": post.metaDesc,
          "image": post.featuredImage,
          "datePublished": new Date(post.date).toISOString(),
          "dateModified": new Date(post.date).toISOString(),
          "author": {
            "@type": "Person",
            "name": post.author.name
          },
          "publisher": {
            "@type": "Organization",
            "name": "Nanak Tech Solutions",
            "logo": {
              "@type": "ImageObject",
              "url": window.location.origin + "/favicon.svg"
            }
          }
        };
      }
    } else if (path === '/contact-us') {
      title = "Contact Us | Nanak Tech Solutions";
      desc = "Get in touch with Nanak Tech Solutions. Share your project requirements, goals, and schedule a call.";
    } else if (path === '/thank-you') {
      title = "Thank You | Nanak Tech Solutions";
      desc = "Your message has been received successfully.";
    }

    // 1. Page Title & Meta Description update
    document.title = title;
    const metaDescEl = document.querySelector('meta[name="description"]');
    if (metaDescEl) {
      metaDescEl.setAttribute('content', desc);
    }

    // 2. Canonical tag injection
    let canonEl = document.querySelector('link[rel="canonical"]');
    if (!canonEl) {
      canonEl = document.createElement('link');
      canonEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonEl);
    }
    canonEl.setAttribute('href', canonical);

    // 3. Open Graph Tags injection
    const ogData = {
      'og:title': title,
      'og:description': desc,
      'og:url': canonical,
      'og:type': isArticle ? 'article' : 'website'
    };
    Object.keys(ogData).forEach(property => {
      let ogEl = document.querySelector(`meta[property="${property}"]`);
      if (!ogEl) {
        ogEl = document.createElement('meta');
        ogEl.setAttribute('property', property);
        document.head.appendChild(ogEl);
      }
      ogEl.setAttribute('content', ogData[property]);
    });

    // 4. Twitter Cards injection
    const twData = {
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': desc
    };
    Object.keys(twData).forEach(name => {
      let twEl = document.querySelector(`meta[name="${name}"]`);
      if (!twEl) {
        twEl = document.createElement('meta');
        twEl.setAttribute('name', name);
        document.head.appendChild(twEl);
      }
      twEl.setAttribute('content', twData[name]);
    });

    // 5. Schema script injection
    const schemaEl = document.getElementById('seo-schema-script');
    if (schemaEl) schemaEl.remove();

    if (schema) {
      const script = document.createElement('script');
      script.id = 'seo-schema-script';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }

  /* --------------------------------------------------------------------------
     SCROLL REVEAL ANIMATOR
     -------------------------------------------------------------------------- */
  setupScrollReveal() {
    const revealElements = document.querySelectorAll('.process-step, .luxury-card, .blog-card');
    if (revealElements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => {
      el.classList.add('reveal-item');
      observer.observe(el);
    });
  }

  /* --------------------------------------------------------------------------
     PROCESS TIMELINE SCROLL PROGRESS
     -------------------------------------------------------------------------- */
  setupProcessTimeline() {
    const timeline = document.querySelector('.process-timeline');
    const steps = document.querySelectorAll('.process-step');
    const progressLine = document.getElementById('process-progress-line');
    
    if (!timeline || steps.length === 0 || !progressLine) return;

    const onScroll = () => {
      const timelineRect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress starting when the timeline enters the middle screen area
      const startThreshold = windowHeight * 0.65;
      const timelineHeight = timelineRect.height;
      const scrolled = startThreshold - timelineRect.top;
      
      let progress = scrolled / (timelineHeight - 200);
      progress = Math.max(0, Math.min(1.0, progress));
      
      progressLine.style.height = `${progress * 100}%`;

      steps.forEach((step) => {
        const stepRect = step.getBoundingClientRect();
        // Activate steps as they pass the 55% screen mark
        if (stepRect.top < windowHeight * 0.55) {
          step.classList.add('active');
        } else {
          step.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    this.processScrollHandler = onScroll;
    onScroll();
  }

  injectInteractiveOverlay() {
    let overlay = document.getElementById('consultation-interactive-overlay');
    if (overlay) return;

    overlay = document.createElement('div');
    overlay.id = 'consultation-interactive-overlay';
    overlay.className = 'interactive-overlay-wrapper';
    
    overlay.innerHTML = `
      <div class="overlay-backdrop"></div>
      <div class="overlay-spotlight"></div>

      <div class="interactive-consultation-modal" id="consultation-modal-panel">
        <div class="modal-progress-container">
          <span class="progress-ticks-label" id="modal-progress-label">Contact Progress □□□□□□□□□□ 0%</span>
          <div class="progress-bar-track">
            <div class="progress-bar-fill" id="modal-progress-bar-fill"></div>
          </div>
        </div>

        <button class="modal-close-btn" id="close-consultation-overlay-btn" aria-label="Close Overlay">✕</button>

        <div class="form-assembling-frame" aria-hidden="true">
          <svg viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="none" class="assembling-frame-svg">
            <path id="modal-assembling-border-path" d="M 0,0 L 100,0 L 100,100 L 0,100 Z" fill="none" stroke="var(--color-accent-gold)" stroke-width="0.3" stroke-dasharray="400" stroke-dashoffset="400" />
          </svg>
        </div>

        <div class="modal-form-content">
          <span class="form-panel-eyebrow">Contact Us</span>
          <h3 class="form-panel-title">Get in Touch</h3>

          <form id="modal-consultation-form" novalidate>
            <div class="form-grid-2-col">
              <div class="glass-form-group">
                <input type="text" id="m-fullname" name="fullname" placeholder=" " required />
                <label for="m-fullname">Full Name</label>
                <div class="focus-border"></div>
                <span class="field-check-icon">✓</span>
              </div>
              <div class="glass-form-group">
                <input type="email" id="m-email" name="email" placeholder=" " required />
                <label for="m-email">Email Address</label>
                <div class="focus-border"></div>
                <span class="field-check-icon">✓</span>
              </div>
            </div>

            <div class="form-grid-2-col">
              <div class="glass-form-group">
                <input type="tel" id="m-phone" name="phone" placeholder=" " required />
                <label for="m-phone">Phone Number</label>
                <div class="focus-border"></div>
                <span class="field-check-icon">✓</span>
              </div>
              <div class="glass-form-group select-group">
                <select id="m-service" name="service" required>
                  <option value="" disabled selected></option>
                  <option value="ai-automation">AI Automation Systems</option>
                  <option value="seo">Organic Search & SEO</option>
                  <option value="google-ads">Google Search Ads</option>
                  <option value="meta-ads">Meta Ads (Instagram & FB)</option>
                  <option value="web-dev">Website Development (Next.js/Vite)</option>
                  <option value="app-dev">Mobile App Engineering</option>
                  <option value="crm-auto">HubSpot / CRM Automation</option>
                  <option value="software-dev">Custom Software Engineering</option>
                </select>
                <label for="m-service">Services Interested In</label>
                <div class="focus-border"></div>
                <span class="field-check-icon">✓</span>
              </div>
            </div>

            <div class="glass-form-group textarea-group" style="margin-bottom: 2rem;">
              <textarea id="m-message" name="message" rows="4" placeholder=" " required></textarea>
              <label for="m-message">Message</label>
              <div class="focus-border"></div>
              <span class="field-check-icon">✓</span>
            </div>

            <button class="form-submit" type="submit" id="m-unlock-strategy-btn">Send Message</button>
          </form>

          <div class="modal-success-overlay hidden" id="modal-success-overlay">
            <div class="modal-success-inner">
              <div class="loader-checkmark-wrapper">
                <svg class="loading-ring-svg" width="80" height="80" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(207, 181, 132, 0.15)" stroke-width="3" />
                  <circle id="loading-progress-ring-fill" cx="40" cy="40" r="34" fill="none" stroke="var(--color-accent-gold)" stroke-width="3" stroke-dasharray="213" stroke-dashoffset="213" />
                </svg>
                <div class="animated-success-checkmark-icon hidden" id="modal-checkmark-icon">✓</div>
              </div>
              <h4 class="loader-status-text" id="modal-loader-text">Sending Message...</h4>
            </div>
          </div>

        </div>
      </div>

      <div class="consultant-character-wrapper" id="overlay-consultant-character">
        <div class="character-speech-bubble" id="char-speech-bubble">
          <div class="bubble-inner" id="char-speech-text">👋 Hi!<br>Let's build your business growth strategy together.</div>
          <div class="bubble-arrow"></div>
        </div>
        ${getCharacterSvgHtml()}
      </div>
    `;

    document.body.appendChild(overlay);

    // Bind Close events
    const closeBtn = document.getElementById('close-consultation-overlay-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        overlay.classList.remove('overlay-active');
        const modal = document.getElementById('consultation-modal-panel');
        if (modal) modal.classList.remove('pulled-in', 'assembling-active');
      });
    }

    // Bind reactive progress ticks
    const modalForm = document.getElementById('modal-consultation-form');
    if (modalForm) {
      const inputs = modalForm.querySelectorAll('input, select, textarea');
      const progressLabel = document.getElementById('modal-progress-label');
      const progressBar = document.getElementById('modal-progress-bar-fill');
      const char = document.getElementById('overlay-consultant-character');

      const updateProgress = () => {
        let filledCount = 0;
        inputs.forEach(inp => {
          if (inp.type === 'checkbox') {
            if (inp.checked) filledCount++;
          } else {
            if (inp.value.trim() !== '') filledCount++;
          }
        });

        const percentage = Math.round((filledCount / 5) * 100); // 5 inputs total
        const completedTicks = Math.round(filledCount * 2);
        let progressString = '';
        for (let i = 0; i < 10; i++) {
          progressString += i < completedTicks ? '■' : '□';
        }

        if (progressLabel) progressLabel.textContent = `Contact Progress ${progressString} ${percentage}%`;
        if (progressBar) progressBar.style.width = `${percentage}%`;
      };

      inputs.forEach(inp => {
        inp.addEventListener('input', updateProgress);
        inp.addEventListener('change', updateProgress);
        
        // Positive character thumbs-up gestures
        inp.addEventListener('blur', () => {
          if (inp.checkValidity() && inp.value.trim() !== '' && char) {
            char.classList.add('thumbs-up');
            setTimeout(() => {
              char.classList.remove('thumbs-up');
            }, 1800);
          }
        });
      });

      // Handle Modal submission
      modalForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let formIsValid = true;
        let firstInvalidInput = null;
        inputs.forEach(input => {
          const group = input.closest('.glass-form-group');
          if (!input.checkValidity()) {
            formIsValid = false;
            if (group) {
              group.classList.remove('valid');
              group.classList.add('invalid-error');
            }
            if (!firstInvalidInput) firstInvalidInput = input;
          } else {
            if (group) {
              group.classList.add('valid');
              group.classList.remove('invalid-error');
            }
          }
        });

        if (!formIsValid) {
          if (firstInvalidInput) {
            firstInvalidInput.focus();
            firstInvalidInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
          alert('Please enter all parameters correctly to send the message.');
          return;
        }

        const successOverlay = document.getElementById('modal-success-overlay');
        const loaderText = document.getElementById('modal-loader-text');
        const checkmarkIcon = document.getElementById('modal-checkmark-icon');
        const fillRing = document.getElementById('loading-progress-ring-fill');

        if (successOverlay) successOverlay.classList.remove('hidden');
        if (fillRing) {
          fillRing.style.transition = 'stroke-dashoffset 2.2s linear';
          fillRing.style.strokeDashoffset = '0';
        }

        inputs.forEach(inp => inp.disabled = true);

        const formData = {
          fullname: document.getElementById('m-fullname').value,
          email: document.getElementById('m-email').value,
          phone: document.getElementById('m-phone').value,
          service: document.getElementById('m-service').value,
          message: document.getElementById('m-message').value
        };

        fetch('/api/consultation', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })
        .then(response => {
          if (!response.ok) throw new Error('Registration sync failed.');
          return response.json();
        })
        .then(() => {
          setTimeout(() => {
            if (checkmarkIcon) {
              checkmarkIcon.classList.remove('hidden');
              checkmarkIcon.classList.add('checkmark-active');
            }
            if (loaderText) loaderText.textContent = 'Message Sent Successfully';

            if (char) {
              char.classList.add('celebrating');
              
              const successBubble = document.createElement('div');
              successBubble.className = 'character-speech-bubble bubble-active';
              successBubble.style.top = '-95px';
              successBubble.style.right = '50%';
              successBubble.innerHTML = `
                <div class="bubble-inner">🎉 Great!<br>Your message has been received.<br>We'll connect shortly.</div>
                <div class="bubble-arrow"></div>
              `;
              char.appendChild(successBubble);

              setTimeout(() => {
                overlay.classList.remove('overlay-active');
                if (successOverlay) successOverlay.classList.add('hidden');
                successBubble.remove();
                
                // Clear modal fields for next triggers
                modalForm.reset();
                if (progressBar) progressBar.style.width = '0%';
                
                this.navigateTo('/thank-you');
              }, 1800);
            }
          }, 2200);
        })
        .catch(err => {
          alert(err.message || 'Submission request failed.');
          inputs.forEach(inp => inp.disabled = false);
          if (successOverlay) successOverlay.classList.add('hidden');
        });
      });
    }
  }

  openConsultationWalkthrough() {
    const overlay = document.getElementById('consultation-interactive-overlay');
    const char = document.getElementById('overlay-consultant-character');
    const modal = document.getElementById('consultation-modal-panel');
    const bubble = document.getElementById('char-speech-bubble');
    const bubbleText = document.getElementById('char-speech-text');

    if (!overlay || !char || !modal) return;

    // Reset components prior to playing walk sequence
    overlay.classList.add('overlay-active');
    modal.classList.remove('pulled-in', 'assembling-active');
    if (bubble) bubble.classList.remove('bubble-active');

    char.style.right = '-250px';
    char.style.transform = 'none';
    char.classList.remove('waving', 'pulling', 'thumbs-up', 'celebrating');
    char.classList.add('walking');

    // Walk character in
    setTimeout(() => {
      char.style.right = '8%';
      if (window.innerWidth <= 768) {
        char.style.right = '4%';
        char.style.bottom = '-40px';
      }
    }, 50);

    // Greet Speech Bubble
    setTimeout(() => {
      char.classList.remove('walking');
      char.classList.add('waving');

      if (bubbleText) bubbleText.innerHTML = `👋 Hi!<br>Let's build your business growth strategy together.`;
      if (bubble) bubble.classList.add('bubble-active');

      // Grab and pull modal panel from side
      setTimeout(() => {
        if (bubble) bubble.classList.remove('bubble-active');

        char.classList.remove('waving');
        char.classList.add('pulling');
        char.style.transform = 'translateX(-25px)';

        setTimeout(() => {
          modal.classList.add('pulled-in');

          setTimeout(() => {
            char.classList.remove('pulling');
            char.style.transform = 'none';

            modal.classList.add('assembling-active');
            const borderPath = document.getElementById('modal-assembling-border-path');
            if (borderPath) borderPath.style.strokeDashoffset = '0';

            const fullNameInput = document.getElementById('m-fullname');
            if (fullNameInput) fullNameInput.focus();

          }, 800);
        }, 200); // Natural inertia drag lag

      }, 3000); // 3 seconds reading greetings
    }, 2500); // Walking timeline duration
  }

  initializeThankYouPage() {
    // Layout animations handled natively in CSS
  }

  injectWhatsAppWidget() {
    let widget = document.getElementById('whatsapp-floating-widget');
    if (widget) return;

    widget = document.createElement('div');
    widget.id = 'whatsapp-floating-widget';
    widget.className = 'whatsapp-widget-container';
    
    widget.innerHTML = `
      <a href="https://wa.me/919888809768?text=Hello%20Nanak%20Tech%20Solutions%2C%20I'm%20interested%20in%20your%20services%20and%20would%20like%20to%20discuss%20my%20requirements." 
         class="whatsapp-link" 
         target="_blank" 
         rel="noopener noreferrer"
         aria-label="Chat with Nanak Tech Solutions on WhatsApp">
        
        <!-- WhatsApp Us bubble label -->
        <div class="whatsapp-label" id="whatsapp-bubble-label">WhatsApp Us</div>
        
        <!-- Circular WhatsApp Button -->
        <div class="whatsapp-icon-btn">
          <!-- Official WhatsApp SVG icon inside -->
          <svg viewBox="0 0 448 512" class="whatsapp-svg-icon" width="22" height="22">
            <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
          <!-- Small Notification Glow -->
          <div class="whatsapp-glow-dot"></div>
        </div>
      </a>
    `;

    document.body.appendChild(widget);

    // Fade-in / Fade-out loop logic for the "WhatsApp Us" label
    const label = document.getElementById('whatsapp-bubble-label');
    if (label) {
      let active = false;
      const toggleLabel = () => {
        if (active) {
          label.classList.remove('label-visible');
          active = false;
        } else {
          label.classList.add('label-visible');
          active = true;
          // Hide it after 3 seconds
          setTimeout(() => {
            label.classList.remove('label-visible');
            active = false;
          }, 3000);
        }
      };

      // Initial delay: wait 4 seconds before first appearance
      setTimeout(() => {
        toggleLabel();
        // Repeat cycle every 9 seconds
        setInterval(toggleLabel, 9000);
      }, 4000);
    }
  }
}

// Instantiate App on window load
window.addEventListener('DOMContentLoaded', () => {
  window.app = new App();
});

