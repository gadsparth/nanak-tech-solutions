import { servicesData } from './servicesData.js';
import { blogData } from './blogData.js';

// Force all blogs to be written by Jatin Sharma
for (const key in blogData) {
  if (blogData.hasOwnProperty(key)) {
    blogData[key].author = {
      name: "Jatin Sharma",
      title: "Founder & CEO",
      bio: "Jatin Sharma is the Founder and CEO of Nanak Tech Solutions, designing enterprise automation workflows and search engine acquisition pipelines.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
    };
  }
}

export let cmsState = null;

export function setCmsState(state) {
  cmsState = state;
}

export const fallbackCmsState = {
  globalSettings: {
    customHeadCode: "<!-- Custom Head Code -->",
    customBodyStartCode: "<!-- Custom Body Start Code -->",
    customFooterCode: "<!-- Custom Footer Code -->"
  },
  about: {
    layoutOrder: ["hero", "who-we-are", "values", "expertise", "timeline", "why-choose-us", "tech-stack", "case-studies"],
    blocks: {
      hero: {
        eyebrow: "Studio Vision",
        title: "Engineering Intelligent Growth Through Technology",
        description: "Nanak Tech Solutions helps businesses accelerate growth by combining Artificial Intelligence, Digital Marketing, Software Engineering and Business Automation into one integrated ecosystem.",
        btnText: "Read Our Story ↓",
        graphicSvg: `<svg viewBox="0 0 200 200" width="100%" height="100%" class="dashboard-svg">
  <path d="M 10,10 L 190,10 L 190,190 L 10,190 Z" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="0.7" />
  <circle cx="100" cy="100" r="75" fill="none" stroke="rgba(207, 181, 132, 0.08)" stroke-width="0.8" stroke-dasharray="2 4" />
  <circle cx="100" cy="100" r="50" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="0.5" />
  <line x1="100" y1="25" x2="50" y2="100" stroke="rgba(255,255,255,0.08)" stroke-width="0.8" />
  <line x1="50" y1="100" x2="100" y2="175" stroke="rgba(255,255,255,0.08)" stroke-width="0.8" />
  <line x1="100" y1="175" x2="150" y2="100" stroke="rgba(255,255,255,0.08)" stroke-width="0.8" />
  <line x1="150" y1="100" x2="100" y2="25" stroke="rgba(255,255,255,0.08)" stroke-width="0.8" />
  <line x1="100" y1="25" x2="100" y2="175" stroke="rgba(207, 181, 132, 0.2)" stroke-width="0.8" />
  <line x1="50" y1="100" x2="150" y2="100" stroke="rgba(207, 181, 132, 0.2)" stroke-width="0.8" />
  <rect x="95" y="20" width="10" height="10" fill="none" stroke="var(--color-accent-gold)" stroke-width="0.8" class="spin-slow" style="transform-origin: 100px 25px;" />
  <rect x="45" y="95" width="10" height="10" fill="none" stroke="var(--color-white)" stroke-width="0.8" class="spin-slow" style="transform-origin: 50px 100px;" />
  <rect x="145" y="95" width="10" height="10" fill="none" stroke="var(--color-white)" stroke-width="0.8" class="spin-slow" style="transform-origin: 150px 100px;" />
  <circle cx="100" cy="175" r="4.5" fill="var(--color-accent-bronze)" />
  <circle cx="100" cy="100" r="8" fill="rgba(207, 181, 132, 0.15)" stroke="var(--color-accent-gold)" stroke-width="1.2" class="pulse-glow" />
</svg>`
      },
      "who-we-are": {
        label: "01 // Foundations & Motives",
        title: "Who We Are",
        leadText: "Nanak Tech Solutions was established to build systems that operate beyond ordinary templates. Traditional digital agencies focus on superficial visuals or high-volume ad spends; we build intelligent operational architectures.",
        missionTitle: "Our Mission",
        missionText: "To equip businesses with the technical leverage required to automate overhead, optimize organic customer search acquisitions, and scale margins through mathematical precision.",
        approachTitle: "Our Approach",
        approachText: "Restraint is luxury. Zero tech debt, clean code lines, private cloud deployments, and direct developer communication channels build long-term confidence."
      },
      values: {
        label: "02 // Operational Integrity",
        title: "Our Values",
        items: [
          {
            num: "01",
            title: "Precision Engineering",
            desc: "Every logic branch is written for longevity, high performance, and robust security."
          },
          {
            num: "02",
            title: "Absolute Transparency",
            desc: "No black-box metrics. We deliver clean code logs and clear attribution pipelines."
          },
          {
            num: "03",
            title: "Continuous Velocity",
            desc: "We construct prototypes rapidly and optimize iterations dynamically to outpace standard agency timelines."
          }
        ]
      },
      expertise: {
        label: "03 // Core Capabilities",
        title: "Core Expertise",
        items: [
          {
            num: "01",
            title: "AI Solutions",
            desc: "Custom agent structures, secure vector database indexing, private cloud fine-tuning, and logic flows."
          },
          {
            num: "02",
            title: "Web Development",
            desc: "Fast client-side SPAs using Next.js/Vite, structured API interfaces, and serverless architectures."
          },
          {
            num: "03",
            title: "PPC",
            desc: "Google search campaigns, negative keywords bidding strategy, audience targeting, remarketing loops, and budget management."
          },
          {
            num: "04",
            title: "Digital Marketing",
            desc: "Conversion landing designs, negative budget filters, enterprise lead audits, and audience lists."
          },
          {
            num: "05",
            title: "SEO & Search Growth",
            desc: "Technical crawl clearing, structured schemas mapping, semantic writing hubs, and keyword loops."
          },
          {
            num: "06",
            title: "CRO",
            desc: "Conversion rate audits, A/B testing, user journey mapping, heatmaps analysis, and landing page optimization."
          }
        ]
      },
      timeline: {
        label: "04 // Operational Timeline",
        title: "Process & Delivery"
      },
      "why-choose-us": {
        label: "05 // Market Differentiation",
        title: "Why Choose Us"
      },
      "tech-stack": {
        label: "07 // Technical Stack",
        title: "Built with Premium Tech"
      },
      "case-studies": {
        label: "08 // Operations Proof",
        title: "Case Study Previews",
        items: [
          {
            id: "ai-automation",
            category: "CASE STUDY // AI AUTOMATION",
            title: "Logistics Auto-Routing",
            description: "Automating route mapping for 80+ daily cargo transfers.",
            pills: "42 Hours Saved / Wk, 0% Manual Mistakes",
            link: "/services/ai-automation"
          },
          {
            id: "seo",
            category: "CASE STUDY // TECH SEO",
            title: "FinTech Traffic Growth",
            description: "Clearing indexing issues and setting schema maps.",
            pills: "+240% Click Growth, #1 Organic Terms",
            link: "/services/seo"
          },
          {
            id: "lead-generation",
            category: "CASE STUDY // LEAD GEN",
            title: "SaaS Lead Pipelines",
            description: "Deploying enriched cold email structures linked to LinkedIn.",
            pills: "4.8x Bidding ROAS, +150 Mapped Leads",
            link: "/services/lead-generation"
          },
          {
            id: "google-ads",
            category: "CASE STUDY // GOOGLE ADS",
            title: "High-Intent Google Ads Lead Gen",
            description: "Restructuring paid search campaigns for a specialist healthcare clinic.",
            pills: "+208% Enquiry Growth, -62% Cost Per Lead, +113% Conversion Rate",
            link: "/google-ads-healthcare-case-study.pdf"
          }
        ]
      }
    }
  },
  home: {
    layoutOrder: ["hero", "intro"],
    blocks: {
      hero: {
        eyebrow: "Digital Agency",
        title: "Handcrafted Digital Products & Intelligent Systems",
        description: "We architect premium digital solutions, custom software, and automated workflows that elevate your brand.",
        btnText: "Explore Capabilities"
      },
      intro: {
        label: "01 // High Performance",
        title: "Beyond Standard Templates"
      }
    }
  },
  consultation: {
    layoutOrder: ["hero"],
    blocks: {
      hero: {
        title: "Request Your Free Strategy Consultation",
        description: "Let's understand your business, identify opportunities, and build a customized AI & Digital Growth strategy for your company."
      }
    }
  }
};

export function getRouteContent(path) {
  // Normalize path
  if (path === '/' || path === '' || path === '/index.html') {
    return renderHome();
  }

  if (path === '/contact-us') {
    return renderConsultationPage();
  }

  if (path === '/thank-you') {
    return renderThankYouPage();
  }

  if (path === '/about-us') {
    return renderAboutPage();
  }

  if (path === '/admin') {
    return renderAdminPage();
  }

  if (path === '/privacy-policy') {
    return renderPrivacyPage();
  }

  if (path === '/blog') {
    return renderBlogHub();
  }

  if (path.startsWith('/blog/')) {
    const slug = path.replace('/blog/', '');
    const post = blogData[slug];
    if (post) {
      return renderBlogPost(post);
    }
  }

  if (path.startsWith('/services/')) {
    const serviceKey = path.replace('/services/', '');
    const service = servicesData[serviceKey];
    if (service) {
      return renderServicePage(service, serviceKey);
    }
  }

  return render404();
}

function renderHomeHero(data) {
  return `
    <!-- Cinematic Editorial Hero -->
    <section class="hero-sec container">
      <div class="hero-editorial">
        <span class="hero-eyebrow">${data.eyebrow}</span>
        <h1 class="hero-headline">
          <span>${data.title}</span>
        </h1>
        
        <div class="hero-footer">
          <div class="hero-meta-col">
            <span class="hero-meta-label">Identity</span>
            <p>${data.description}</p>
          </div>
          <div class="hero-meta-col">
            <span class="hero-meta-label">Philosophy</span>
            <p>Timeless structural restraint meets technical ambition. Handcrafted web architectures built to perform.</p>
          </div>
          <div class="hero-meta-col">
            <span class="hero-meta-label">Scroll to travel</span>
            <p style="color: var(--color-accent-gold); font-size: 0.85rem; letter-spacing: 0.1em; text-transform: uppercase;">Discover our environment ↓</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderHomeIntro(data) {
  return `
    <!-- Deep Narrative Section -->
    <section class="section container" id="about">
      <span class="section-label">${data.label}</span>
      <div class="narrative-grid">
        <div class="narrative-large">
          ${data.title}
        </div>
        <div class="narrative-details">
          <p>
            Nanak Tech Solutions was established as a high-end interactive development house. We work at the intersection of mathematical code and editorial aesthetics.
          </p>
          <p>
            Whether engineering multi-agent LLM systems, creating fluid WebGL platforms, or launching high-performance search campaigns, we design to command authority and capture market share.
          </p>
        </div>
      </div>
    </section>
  `;
}

function renderHome() {
  // Generate service directory rows
  const directoryRows = Object.keys(servicesData).map((key, index) => {
    const service = servicesData[key];
    const displayNum = String(index + 1).padStart(2, '0');
    return `
      <a href="/services/${key}" class="directory-item" data-link>
        <span class="directory-num">${displayNum}</span>
        <h3 class="directory-title">${service.title}</h3>
        <span class="directory-desc">${service.tagline}</span>
        <span class="directory-arrow" aria-hidden="true">→</span>
      </a>
    `;
  }).join('');

  const state = cmsState || fallbackCmsState;
  const layout = state.home.layoutOrder;
  const blocks = state.home.blocks;

  const dynamicSections = layout.map(blockId => {
    const data = blocks[blockId] || fallbackCmsState.home.blocks[blockId];
    if (!data) return '';
    switch (blockId) {
      case 'hero': return renderHomeHero(data);
      case 'intro': return renderHomeIntro(data);
      default: return '';
    }
  }).join('');

  return `
    ${dynamicSections}

    <!-- Service Directory Section -->
    <section class="section container" id="services">
      <span class="section-label">02 // Core Capabilities</span>
      <h2 class="editorial-title-md">Our Services</h2>
      <p class="lead-text" style="max-width: 600px; margin-bottom: 2rem;">
        An interconnected suite of digital marketing, software development, creative design, and AI automation.
      </p>
      
      <div class="directory-list">
        ${directoryRows}
      </div>
    </section>

    <!-- Interactive Client Case Studies Overview -->
    <section class="section container" id="case-studies">
      <span class="section-label">03 // Empirical Results</span>
      <h2 class="editorial-title-md" style="margin-bottom: 3rem;">Recent Highlights</h2>
      
      <div class="grid-cards-3">
        <div class="luxury-card">
          <span class="card-num">AI & LOGISTICS</span>
          <h3 class="card-title">Cognitive Underwriting</h3>
          <p>Deploying RAG multi-agent models to audit freight contract leakages, saving $1.2M in quarterly billing differences.</p>
          <a href="/services/ai-automation" class="nav-item" style="display:inline-block; margin-top: 1.5rem;" data-link>View Case Study</a>
        </div>
        <div class="luxury-card">
          <span class="card-num">WEB & FINANCE</span>
          <h3 class="card-title">Next.js VC Pipeline</h3>
          <p>Crafting a headless CMS portfolio for an elite venture capital firm, driving Lighthouse performance to 100/100.</p>
          <a href="/services/website-development" class="nav-item" style="display:inline-block; margin-top: 1.5rem;" data-link>View Case Study</a>
        </div>
        <div class="luxury-card">
          <span class="card-num">PORTAL & DESIGN</span>
          <h3 class="card-title">Investor Onboarding</h3>
          <p>Structuring a secure investor KYC and Plaid-integrated billing portal, slashing customer signup times to 7 minutes.</p>
          <a href="/services/business-automation" class="nav-item" style="display:inline-block; margin-top: 1.5rem;" data-link>View Case Study</a>
        </div>
      </div>
    </section>

    <!-- Interactive Consultation Section -->
    <section class="consultation-sec" id="consultation">
      <div class="container">
        <div class="consultation-grid">
          <div class="contact-text-col">
            <span class="section-label" style="color: var(--color-accent-gold);">04 // Project Initiation</span>
            <h2 class="editorial-title-md" style="margin-bottom: 2rem;">Build beyond what is ordinary.</h2>
            <p style="max-width: 500px; margin-bottom: 2rem; color: var(--color-stone); line-height: 1.7; text-align: left !important;">
              Let's align on your digital goals. We host intimate engineering reviews to map potential ROI, workflow architectures, and UI strategies.
            </p>
            <div class="contact-details-block" style="margin-top: 3rem; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 2rem;">
              <h4 style="font-family: var(--font-sans); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-accent-gold); margin-bottom: 1rem;">Direct Channels</h4>
              <p style="margin-bottom: 0.75rem; color: var(--color-stone);">
                Email: <a href="mailto:info@nanaktechsolutions.com" style="color: var(--color-white); text-decoration: none; border-bottom: 1px solid var(--color-accent-gold); padding-bottom: 2px;">info@nanaktechsolutions.com</a>
              </p>
              <p style="color: var(--color-stone);">
                Phone: <a href="tel:+919888809768" style="color: var(--color-white); text-decoration: none; border-bottom: 1px solid var(--color-accent-gold); padding-bottom: 2px;">+91-9888809768</a>
              </p>
            </div>
            <div class="contact-details-block" style="margin-top: 2rem;">
              <h4 style="font-family: var(--font-sans); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-accent-gold); margin-bottom: 1rem;">Studio Presence</h4>
              <p style="color: var(--color-stone); font-size: 0.9rem; line-height: 1.6;">
                Nanak Tech Solutions LLP<br />
                Global Delivery • Secure Encrypted Channels
              </p>
            </div>
          </div>
          <div class="consultation-form-wrapper">
            <form id="consultation-form" novalidate>
              <div class="form-group">
                <label class="form-label" for="form-name">Full Name</label>
                <input class="form-input" type="text" id="form-name" required />
              </div>
              <div class="form-group">
                <label class="form-label" for="form-email">Email Address</label>
                <input class="form-input" type="email" id="form-email" required />
              </div>
              <div class="form-group">
                <label class="form-label" for="form-phone">Phone Number</label>
                <input class="form-input" type="tel" id="form-phone" required />
              </div>
              <div class="form-group">
                <label class="form-label" for="form-service">Services Interested In</label>
                <select class="form-input" id="form-service" required>
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
              </div>
              <div class="form-group">
                <label class="form-label" for="form-msg">Message</label>
                <textarea class="form-input" id="form-msg" rows="4" required></textarea>
              </div>
              <button class="form-submit" type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderServicePage(service, key) {
  // Generate challenges cards
  const challengesHtml = service.challenges.map((c, i) => `
    <div class="luxury-card">
      <span class="card-num">Challenge 0${i + 1}</span>
      <h3 class="card-title">${c.title}</h3>
      <p>${c.desc}</p>
    </div>
  `).join('');

  // Generate benefits list
  const benefitsHtml = service.benefits.map((b, i) => `
    <div class="luxury-card">
      <span class="card-num">Value 0${i + 1}</span>
      <h3 class="card-title">${b.title}</h3>
      <p>${b.desc}</p>
    </div>
  `).join('');

  // Generate process steps
  const processHtml = service.process.map(p => `
    <div class="process-step">
      <span class="process-step-node"></span>
      <div class="process-step-meta">
        <span class="process-step-num">${p.stepNum}</span>
        <h3 class="process-step-title">${p.title}</h3>
      </div>
      <div>
        <p>${p.desc}</p>
      </div>
    </div>
  `).join('');

  // Generate technology tags
  const techHtml = service.technologies.map(t => `
    <span class="cta-button" style="font-size: 0.75rem; padding: 0.4rem 1rem; border-color: var(--color-border-strong); pointer-events: none; margin: 0 0.5rem 0.5rem 0; display: inline-block;">${t}</span>
  `).join('');

  // Generate industry tags
  const industryHtml = service.industries.map(ind => `
    <span class="cta-button" style="font-size: 0.75rem; padding: 0.4rem 1rem; color: var(--color-accent-gold); border-color: rgba(207, 181, 132, 0.3); pointer-events: none; margin: 0 0.5rem 0.5rem 0; display: inline-block;">${ind}</span>
  `).join('');

  // Generate FAQs accordions
  const faqsHtml = service.faqs.map((faq, i) => `
    <div class="faq-item">
      <button class="faq-question" aria-expanded="false" onclick="this.parentElement.classList.toggle('active'); const expanded = this.getAttribute('aria-expanded') === 'true'; this.setAttribute('aria-expanded', !expanded)">
        <span>${faq.q}</span>
        <span class="faq-toggle-icon">+</span>
      </button>
      <div class="faq-answer">
        <p>${faq.a}</p>
      </div>
    </div>
  `).join('');

  return `
    <!-- Cinematic Hero -->
    <section class="inner-hero-sec container">
      <div class="inner-hero-inner">
        <a href="/" class="inner-hero-eyebrow" data-link>← Back to Studio Overview</a>
        <h1 class="inner-hero-title" style="margin-top: 1.5rem;">
          <span>${service.title}</span>
        </h1>
        <p class="inner-hero-subtitle" style="font-size: 1.25rem; max-width: 800px; margin-bottom: 2rem;">
          ${service.tagline}
        </p>
        <p style="max-width: 600px; color: var(--color-stone); font-size: 0.95rem; line-height: 1.6;">
          ${service.heroDescription}
        </p>
      </div>
    </section>

    <!-- Service Overview & Vision -->
    <section class="section container">
      <div class="service-overview-section">
        <div>
          <span class="section-label">01 // The Core Strategy</span>
          <h2 class="editorial-title-md">Overview</h2>
        </div>
        <div>
          <p class="lead-text" style="margin-bottom: 2rem;">
            ${service.overview}
          </p>
          <div style="border-top: 1px solid var(--color-border); padding-top: 2rem; margin-top: 2rem;">
            <span class="hero-meta-label" style="margin-bottom: 1rem;">Primary Architecture</span>
            <div style="margin-top: 1rem;">
              ${techHtml}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Business Challenges -->
    <section class="service-challenges-sec">
      <div class="container">
        <span class="section-label">02 // Structural Vulnerabilities</span>
        <h2 class="editorial-title-md">Market Friction</h2>
        <p class="lead-text" style="max-width: 600px; margin-bottom: 2rem; color: var(--color-stone);">
          These are the typical systemic bottlenecks enterprise operations experience prior to audit and intervention.
        </p>
        <div class="grid-cards-3">
          ${challengesHtml}
        </div>
      </div>
    </section>

    <!-- Our Solution -->
    <section class="section container">
      <div class="service-overview-section">
        <div>
          <span class="section-label">03 // The Intervention</span>
          <h2 class="editorial-title-md">Our Solution</h2>
        </div>
        <div>
          <p class="lead-text" style="margin-bottom: 2rem; color: var(--color-white);">
            ${service.solution}
          </p>
          <div style="border-top: 1px solid var(--color-border); padding-top: 2rem; margin-top: 2rem;">
            <span class="hero-meta-label" style="margin-bottom: 1rem;">Target Environments</span>
            <div style="margin-top: 1rem;">
              ${industryHtml}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Grid -->
    <section class="section container">
      <span class="section-label">04 // Value Realization</span>
      <h2 class="editorial-title-md" style="margin-bottom: 3rem;">Tangible Impact</h2>
      <div class="grid-cards-3">
        ${benefitsHtml}
      </div>
    </section>

    <!-- Detailed Process -->
    <section class="process-sec container">
      <span class="section-label">05 // Kinetic Implementation</span>
      <h2 class="editorial-title-md">How We Build</h2>
      <p class="lead-text" style="max-width: 600px; margin-bottom: 2rem; color: var(--color-stone);">
        A highly disciplined engineering roadmap executing with absolute mathematical alignment.
      </p>
      
      <div class="process-timeline">
        <div class="process-timeline-progress" id="process-progress-line"></div>
        ${processHtml}
      </div>
    </section>

    <!-- Case Study Highlight -->
    <section class="section container" style="background-color: var(--color-charcoal); border: 1px solid var(--color-border); padding: 4rem;">
      <span class="section-label" style="color: var(--color-accent-gold);">06 // Empirical Evidence</span>
      <h2 class="editorial-title-md" style="margin-bottom: 2rem; font-size: clamp(2rem, 3.5vw, 3.8rem);">${service.caseStudy.title}</h2>
      
      <div class="narrative-grid" style="margin-top: 3rem;">
        <div>
          <span class="hero-meta-label">The Conflict</span>
          <p style="color: var(--color-white); margin-bottom: 2rem;">${service.caseStudy.challenge}</p>
          <span class="hero-meta-label">Our Approach</span>
          <p style="color: var(--color-stone);">${service.caseStudy.approach}</p>
        </div>
        <div style="background-color: var(--color-black); padding: 2.5rem; border: 1px solid var(--color-border-strong);">
          <span class="hero-meta-label" style="color: var(--color-accent-gold);">Empirical Outcomes</span>
          <p class="lead-text" style="color: var(--color-white); font-size: 1.4rem; margin-top: 1rem; line-height: 1.4;">
            ${service.caseStudy.results}
          </p>
        </div>
      </div>
    </section>

    <!-- Frequently Asked Questions -->
    <section class="section container">
      <div class="faq-grid">
        <div>
          <span class="section-label">07 // Technical Dialogue</span>
          <h2 class="editorial-title-md">FAQs</h2>
          <p style="margin-top: 1.5rem; color: var(--color-stone);">
            Clear, detailed answers regarding technical parameters, integration procedures, security, and project onboarding timelines.
          </p>
        </div>
        <div class="faq-list">
          ${faqsHtml}
        </div>
      </div>
    </section>

    <!-- Premium Call to Action -->
    <section class="cta-sec container">
      <div class="cta-inner">
        <h2 class="cta-heading">Ready to scale your leverage?</h2>
        <p class="cta-desc lead-text">
          Connect with Nanak Tech Solutions. Let's draft your custom systems layout, calculate automation benchmarks, and structure your platform deployment.
        </p>
        <a href="/contact-us" class="cta-btn-lg" data-link>Contact Us</a>
      </div>
    </section>
  `;
}

function renderConsultationHero(data) {
  return `
    <!-- Page Hero Experience -->
    <section class="hero-sec container">
      <div class="hero-editorial hero-split-editorial">
        <div>
          <span class="hero-eyebrow">Strategic Alignment</span>
          <h1 class="hero-headline" style="font-size: clamp(2.2rem, 5vw, 5rem); margin-bottom: 2rem;">
            <span>${data.title}</span>
          </h1>
          <p class="lead-text" style="max-width: 600px; margin-bottom: 3rem;">
            ${data.description}
          </p>
          <a href="#consultation-workspace" class="cta-btn-lg" id="scroll-to-form-btn">Unlock Growth Strategy ↓</a>
        </div>
        
        <!-- Subtle 3D-Like Dashboard/Network Vector Representation -->
        <div class="hero-dashboard-graphic" aria-hidden="true">
          <svg viewBox="0 0 200 200" width="100%" height="100%" class="dashboard-svg">
            <defs>
              <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="var(--color-accent-gold)" stop-opacity="0.8" />
                <stop offset="100%" stop-color="var(--color-accent-bronze)" stop-opacity="0.2" />
              </linearGradient>
            </defs>
            <!-- Background grids -->
            <path d="M 10,10 L 190,10 L 190,190 L 10,190 Z" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="0.7" />
            <path d="M 10,70 L 190,70 M 10,130 L 190,130 M 70,10 L 70,190 M 130,10 L 130,190" fill="none" stroke="rgba(255,255,255,0.02)" stroke-width="0.5" />
            
            <!-- Concentric design circles -->
            <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(207, 181, 132, 0.08)" stroke-width="1" stroke-dasharray="4 6" class="spin-slow" />
            <circle cx="100" cy="100" r="45" fill="none" stroke="rgba(207, 181, 132, 0.15)" stroke-width="0.8" />
            
            <!-- Computational node network -->
            <g class="nodes-group">
              <line x1="50" y1="60" x2="100" y2="40" stroke="rgba(255,255,255,0.1)" stroke-width="0.8" />
              <line x1="100" y1="40" x2="150" y2="70" stroke="rgba(255,255,255,0.1)" stroke-width="0.8" />
              <line x1="150" y1="70" x2="130" y2="140" stroke="rgba(255,255,255,0.1)" stroke-width="0.8" />
              <line x1="130" y1="140" x2="70" y2="130" stroke="rgba(255,255,255,0.1)" stroke-width="0.8" />
              <line x1="70" y1="130" x2="50" y2="60" stroke="rgba(255,255,255,0.1)" stroke-width="0.8" />
              <line x1="100" y1="40" x2="100" y2="100" stroke="rgba(207, 181, 132, 0.3)" stroke-width="1" />
              <line x1="70" y1="130" x2="100" y2="100" stroke="rgba(207, 181, 132, 0.3)" stroke-width="1" />
              <line x1="130" y1="140" x2="100" y2="100" stroke="rgba(207, 181, 132, 0.3)" stroke-width="1" />
              
              <!-- Glowing circle nodes -->
              <circle cx="50" cy="60" r="3" fill="var(--color-white)" />
              <circle cx="100" cy="40" r="4" fill="var(--color-accent-gold)" />
              <circle cx="150" cy="70" r="3" fill="var(--color-white)" />
              <circle cx="130" cy="140" r="4" fill="var(--color-accent-bronze)" />
              <circle cx="70" cy="130" r="3" fill="var(--color-white)" />
<circle cx="100" cy="100" r="6" fill="url(#gold-grad)" class="pulse-glow" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  `;
}

function renderConsultationPage() {
  return `
    <!-- Centered Custom Character Onboarding Experience -->
    <div class="page-consultation-wrapper">
      <div class="overlay-backdrop active-backdrop"></div>
      <div class="overlay-spotlight active-spotlight"></div>

      <div class="interactive-consultation-modal" id="consultation-modal-panel">
        <div class="modal-progress-container">
          <span class="progress-ticks-label" id="modal-progress-label">Contact Progress □□□□□□□□□□ 0%</span>
          <div class="progress-bar-track">
            <div class="progress-bar-fill" id="modal-progress-bar-fill"></div>
          </div>
        </div>

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
        ` + getCharacterSvgHtml() + `
      </div>
    </div>
  `;
}



function renderAboutHero(data) {
  return `
    <!-- About Hero Section -->
    <section class="inner-hero-sec container">
      <div class="inner-hero-inner">
        <span class="inner-hero-eyebrow">${data.eyebrow}</span>
        <h1 class="inner-hero-title">
          <span>${data.title}</span>
        </h1>
        <p class="inner-hero-subtitle">
          ${data.description}
        </p>
        <a href="#about-who-we-are" class="cta-btn-lg">${data.btnText}</a>
      </div>
    </section>
  `;
}

function renderAboutWhoWeAre(data) {
  return `
    <!-- Who We Are Section -->
    <section class="section container" id="about-who-we-are">
      <div class="editorial-about-grid">
        <div>
          <span class="section-label">${data.label}</span>
          <h2 class="editorial-title-md">${data.title}</h2>
        </div>
        <div class="about-story-content">
          <p class="lead-text" style="color: var(--color-white); font-size: 1.35rem; line-height: 1.4; margin-bottom: 2rem;">
            ${data.leadText}
          </p>
          <div class="story-columns">
            <div>
              <h4 style="color: var(--color-accent-gold); margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 0.08em;">${data.missionTitle}</h4>
              <p style="color: var(--color-stone); font-size: 0.95rem; line-height: 1.6; margin-bottom: 2rem;">
                ${data.missionText}
              </p>
            </div>
            <div>
              <h4 style="color: var(--color-accent-gold); margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 0.08em;">${data.approachTitle}</h4>
              <p style="color: var(--color-stone); font-size: 0.95rem; line-height: 1.6;">
                ${data.approachText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderAboutValues(data) {
  const cardsHtml = data.items.map(item => `
    <div class="luxury-card scroll-reveal-value">
      <span class="card-num">${item.num}</span>
      <h3 class="card-title">${item.title}</h3>
      <p>${item.desc}</p>
    </div>
  `).join('');

  return `
    <!-- Our Values Section -->
    <section class="section container" id="about-values">
      <span class="section-label">${data.label}</span>
      <h2 class="editorial-title-md" style="margin-bottom: 3.5rem;">${data.title}</h2>
      <div class="grid-cards-3">
        ${cardsHtml}
      </div>
    </section>
  `;
}

function renderAboutExpertise(data) {
  const cardsHtml = data.items.map(item => `
    <div class="expertise-card">
      <span class="exp-num">${item.num}</span>
      <h4 class="exp-title">${item.title}</h4>
      <p>${item.desc}</p>
    </div>
  `).join('');

  return `
    <!-- Our Expertise Cards -->
    <section class="section container">
      <span class="section-label">${data.label}</span>
      <h2 class="editorial-title-md" style="margin-bottom: 3.5rem;">${data.title}</h2>
      <div class="expertise-grid">
        ${cardsHtml}
      </div>
    </section>
  `;
}

function renderAboutTimeline(data) {
  return `
    <!-- Interactive Scroll Timeline Process -->
    <section class="section container" id="about-process-section">
      <span class="section-label">${data.label}</span>
      <h2 class="editorial-title-md" style="margin-bottom: 4rem;">${data.title}</h2>
      
      <div class="interactive-timeline-wrapper">
        <div class="timeline-vertical-bar">
          <div class="timeline-progress-indicator" id="timeline-indicator-glow"></div>
        </div>
        
        <div class="timeline-steps-list">
          <div class="timeline-step-row" id="step-row-1" data-step="1">
            <div class="timeline-bullet-wrapper">
              <div class="timeline-bullet"></div>
            </div>
            <div class="timeline-content-panel">
              <span class="step-meta">STAGE 01 // DATA ANALYSIS</span>
              <h3 class="step-headline">01. Research</h3>
              <p style="color: var(--color-stone); font-size: 0.95rem;">
                We execute thorough technical audits of your software interfaces, keyword competition volumes, page indexing gaps, and operational overheads to frame potential benchmarks.
              </p>
            </div>
          </div>
          
          <div class="timeline-step-row" id="step-row-2" data-step="2">
            <div class="timeline-bullet-wrapper">
              <div class="timeline-bullet"></div>
            </div>
            <div class="timeline-content-panel">
              <span class="step-meta">STAGE 02 // ARCHITECTURE DESIGN</span>
              <h3 class="step-headline">02. Strategy</h3>
              <p style="color: var(--color-stone); font-size: 0.95rem;">
                We draft a customized growth blueprint detailing target API integrations, keyword mapping targets, budget weights, and automation savings models.
              </p>
            </div>
          </div>

          <div class="timeline-step-row" id="step-row-3" data-step="3">
            <div class="timeline-bullet-wrapper">
              <div class="timeline-bullet"></div>
            </div>
            <div class="timeline-content-panel">
              <span class="step-meta">STAGE 03 // COMPONENT CREATION</span>
              <h3 class="step-headline">03. Design</h3>
              <p style="color: var(--color-stone); font-size: 0.95rem;">
                We compile visual prototypes, wireframe UX logic pathways, and mock up high-conversion UI templates for your review and approval.
              </p>
            </div>
          </div>

          <div class="timeline-step-row" id="step-row-4" data-step="4">
            <div class="timeline-bullet-wrapper">
              <div class="timeline-bullet"></div>
            </div>
            <div class="timeline-content-panel">
              <span class="step-meta">STAGE 04 // ENGINEERING PHASE</span>
              <h3 class="step-headline">04. Development</h3>
              <p style="color: var(--color-stone); font-size: 0.95rem;">
                Our engineers write clean, fast scripts, compile client assets, secure system databases, train private AI agents, and set up tracking configurations.
              </p>
            </div>
          </div>

          <div class="timeline-step-row" id="step-row-5" data-step="5">
            <div class="timeline-bullet-wrapper">
              <div class="timeline-bullet"></div>
            </div>
            <div class="timeline-content-panel">
              <span class="step-meta">STAGE 05 // SYSTEM TUNING</span>
              <h3 class="step-headline">05. Optimization</h3>
              <p style="color: var(--color-stone); font-size: 0.95rem;">
                We monitor lead conversions, optimize keyword biddings, A/B test layouts, clean data queries, and patch scripting anomalies in real-time.
              </p>
            </div>
          </div>

          <div class="timeline-step-row" id="step-row-6" data-step="6">
            <div class="timeline-bullet-wrapper">
              <div class="timeline-bullet"></div>
            </div>
            <div class="timeline-content-panel">
              <span class="step-meta">STAGE 06 // MULTIPLICATION SCALE</span>
              <h3 class="step-headline">06. Growth</h3>
              <p style="color: var(--color-stone); font-size: 0.95rem;">
                We launch campaigns into secondary markets, automate additional operational steps, scale advertising spend on validated targets, and maximize margins.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderAboutWhyChooseUs(data) {
  return `
    <!-- Why Choose Us: Agency Comparison Table -->
    <section class="section container">
      <span class="section-label">${data.label}</span>
      <h2 class="editorial-title-md" style="margin-bottom: 3.5rem;">${data.title}</h2>
      
      <div class="comparison-grid">
        <div class="comparison-card-traditional">
          <h3 class="comparison-card-title">Traditional Agency</h3>
          <ul class="comparison-list">
            <li>Speculative budgets spent on generic keyword bundles</li>
            <li>Bloated drag-and-drop templates with slow load times</li>
            <li>Siloed sales-first account representatives and laggy feedback</li>
            <li>Static dashboards showing vanity analytics metrics</li>
            <li>Manual overheads on administrative pipelines</li>
          </ul>
        </div>
        <div class="comparison-card-nanak">
          <h3 class="comparison-card-title">Nanak Tech Solutions</h3>
          <ul class="comparison-list">
            <li>Validated lead conversions matching corporate buying intent</li>
            <li>Bespoke compiled SPA frameworks running at 60 FPS</li>
            <li>Direct Slack coordination lines with core system engineers</li>
            <li>Real-time database synchronizations and CRM ledger tracking</li>
            <li>Procedural workflow scripts automating team workflows</li>
          </ul>
        </div>
      </div>
    </section>
  `;
}

function renderAboutTechStack(data) {
  return `
    <!-- Interactive Technology Stack Hover System -->
    <section class="section container">
      <span class="section-label">${data.label}</span>
      <h2 class="editorial-title-md" style="margin-bottom: 3.5rem;">${data.title}</h2>
      
      <div class="tech-stack-hover-grid">
        <div class="tech-logo-card">
          <span class="tech-logo-text">OpenAI</span>
          <span class="tech-logo-desc">LLM Models / Agents</span>
        </div>
        <div class="tech-logo-card">
          <span class="tech-logo-text">Claude</span>
          <span class="tech-logo-desc">Context Fine-tuning</span>
        </div>
        <div class="tech-logo-card">
          <span class="tech-logo-text">Google AI</span>
          <span class="tech-logo-desc">Gemini Analytics ML</span>
        </div>
        <div class="tech-logo-card">
          <span class="tech-logo-text">Meta Llama</span>
          <span class="tech-logo-desc">Private Cloud Models</span>
        </div>
        <div class="tech-logo-card">
          <span class="tech-logo-text">React</span>
          <span class="tech-logo-desc">Dynamic Interfaces</span>
        </div>
        <div class="tech-logo-card">
          <span class="tech-logo-text">Next.js</span>
          <span class="tech-logo-desc">Server-Side Renders</span>
        </div>
        <div class="tech-logo-card">
          <span class="tech-logo-text">Node.js</span>
          <span class="tech-logo-desc">Secure Proxy Backends</span>
        </div>
        <div class="tech-logo-card">
          <span class="tech-logo-text">Python</span>
          <span class="tech-logo-desc">Data Analytics & Scripts</span>
        </div>
        <div class="tech-logo-card">
          <span class="tech-logo-text">WordPress</span>
          <span class="tech-logo-desc">Headless content pipelines</span>
        </div>
        <div class="tech-logo-card">
          <span class="tech-logo-text">Shopify</span>
          <span class="tech-logo-desc">Custom Headless Stores</span>
        </div>
        <div class="tech-logo-card">
          <span class="tech-logo-text">Google Ads</span>
          <span class="tech-logo-desc">Search Bidding Automation</span>
        </div>
        <div class="tech-logo-card">
          <span class="tech-logo-text">Meta Ads</span>
          <span class="tech-logo-desc">Dynamic Retargeting loops</span>
        </div>
      </div>
    </section>
  `;
}

function renderAboutCaseStudies(data) {
  const cardsHtml = data.items.map(item => {
    const pillsHtml = item.pills.split(',').map(pill => `<span>${pill.trim()}</span>`).join('');
    const isExternal = item.link.endsWith('.pdf') || item.link.startsWith('http') || item.target === '_blank';
    const targetAttr = isExternal ? 'target="_blank" rel="noopener noreferrer"' : 'data-link';
    return `
      <a href="${item.link}" class="luxury-card clickable-case-card" ${targetAttr}>
        <span class="card-num">${item.category}</span>
        <h3 class="card-title" style="margin-top: 1rem;">${item.title}</h3>
        <p style="color: var(--color-white); font-size: 1.1rem; margin-bottom: 1.5rem;">
          ${item.description}
        </p>
        <div class="case-outcome-pills">
          ${pillsHtml}
        </div>
      </a>
    `;
  }).join('');

  return `
    <!-- Case Studies Preview -->
    <section class="section container">
      <span class="section-label">${data.label}</span>
      <h2 class="editorial-title-md" style="margin-bottom: 3.5rem;">${data.title}</h2>
      <div class="grid-cards-3">
        ${cardsHtml}
      </div>
    </section>
  `;
}

function renderAboutPage() {
  const state = cmsState || fallbackCmsState;
  const layout = state.about.layoutOrder;
  const blocks = state.about.blocks;

  const dynamicSections = layout.map(blockId => {
    const data = blocks[blockId] || fallbackCmsState.about.blocks[blockId];
    if (!data) return '';
    switch (blockId) {
      case 'hero': return renderAboutHero(data);
      case 'who-we-are': return renderAboutWhoWeAre(data);
      case 'values': return renderAboutValues(data);
      case 'expertise': return renderAboutExpertise(data);
      case 'timeline': return renderAboutTimeline(data);
      case 'why-choose-us': return renderAboutWhyChooseUs(data);
      case 'tech-stack': return renderAboutTechStack(data);
      case 'case-studies': return renderAboutCaseStudies(data);
      default: return '';
    }
  }).join('');

  return `
    ${dynamicSections}

    <!-- Interactive Client Testimonials Slider -->
    <section class="section container" id="about-testimonials-section" style="overflow: hidden;">
      <span class="section-label">09 // Verified Dialogue</span>
      <h2 class="editorial-title-md" style="margin-bottom: 3.5rem;">Client Testimonials</h2>
      
      <div class="testimonial-slider-container">
        <div class="testimonial-slides-wrapper" id="testimonial-slider-track">
          <!-- Slide 1 -->
          <div class="testimonial-slide active" data-index="0">
            <p class="testimonial-text">
              "Jatin conducted a detailed website audit and implemented key technical improvements, including form enhancements and mobile optimization. His proactive recommendations, clear communication, and high-quality work delivered immediate value. I highly recommend him for web development and digital marketing."
            </p>
            <div class="testimonial-author">
              <span class="author-name">Colin Parker</span>
              <span class="author-title">CTI Display // UK</span>
            </div>
          </div>
          
          <!-- Slide 2 -->
          <div class="testimonial-slide" data-index="1">
            <p class="testimonial-text">
              "Working with Sakshi on our Shopify store's SEO was a great experience. She was highly organized, providing clear step-by-step documentation and explaining complex strategies simply. She was responsive, thorough, and delivered reliable, expert SEO results."
            </p>
            <div class="testimonial-author">
              <span class="author-name">Mathieu</span>
              <span class="author-title">RisethroughMedals // Canada</span>
            </div>
          </div>

          <!-- Slide 3 -->
          <div class="testimonial-slide" data-index="2">
            <p class="testimonial-text">
              "Jatin did an outstanding job managing our Meta Ads. He brought fresh concepts, optimized our audience targeting, and delivered strong campaign performance while staying within budget. Responsive, proactive, and highly recommended for ad management."
            </p>
            <div class="testimonial-author">
              <span class="author-name">Philip Sampson</span>
              <span class="author-title">PS Digital // Perth</span>
            </div>
          </div>

          <!-- Slide 4 -->
          <div class="testimonial-slide" data-index="3">
            <p class="testimonial-text">
              "Jatin exceeded all expectations by rapidly auditing and optimizing our Google Ads accounts. He is highly knowledgeable, proactive, and kept us fully informed. His ability to diagnose issues and drive strategic performance made an immediate impact."
            </p>
            <div class="testimonial-author">
              <span class="author-name">Maria</span>
              <span class="author-title">MO Marketing Group</span>
            </div>
          </div>
        </div>
        
        <!-- Slider Dots -->
        <div class="slider-dots-row">
          <button class="slider-dot active" data-slide="0" aria-label="Go to slide 1"></button>
          <button class="slider-dot" data-slide="1" aria-label="Go to slide 2"></button>
          <button class="slider-dot" data-slide="2" aria-label="Go to slide 3"></button>
          <button class="slider-dot" data-slide="3" aria-label="Go to slide 4"></button>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="cta-sec container">
      <div class="cta-inner">
        <h2 class="cta-heading">Ready to scale your leverage?</h2>
        <p class="cta-desc lead-text">
          Connect with Nanak Tech Solutions. Let's draft your custom systems layout, calculate automation benchmarks, and structure your platform deployment.
        </p>
        <a href="/contact-us" class="cta-btn-lg" data-link>Contact Us</a>
      </div>
    </section>
  `;
}

function renderPrivacyPage() {
  return `
    <section class="section container privacy-page-sec">
      <div class="privacy-split-layout">
        
        <!-- Left Side: Floating Table of Contents -->
        <aside class="privacy-sidebar-col">
          <div class="sticky-toc-panel">
            <span class="toc-header">Policy Index</span>
            <ul class="toc-links-list" id="privacy-toc-list">
              <li><a href="#intro" class="toc-link active">Introduction</a></li>
              <li><a href="#collect" class="toc-link">Information We Collect</a></li>
              <li><a href="#cookies" class="toc-link">Cookies & Analytics</a></li>
              <li><a href="#use" class="toc-link">How We Use Information</a></li>
              <li><a href="#security" class="toc-link">Data Security</a></li>
              <li><a href="#third-party" class="toc-link">Third Party Services</a></li>
              <li><a href="#rights" class="toc-link">Your Rights</a></li>
              <li><a href="#retention" class="toc-link">Data Retention</a></li>
              <li><a href="#contact" class="toc-link">Contact Information</a></li>
            </ul>
          </div>
        </aside>
        
        <!-- Right Side: Content Sections -->
        <div class="privacy-content-col">
          <span class="hero-eyebrow">Data Governance</span>
          <h1 class="editorial-title-md" style="font-size: clamp(2rem, 4vw, 3.5rem); line-height: 1.2; margin-top: 1rem; margin-bottom: 2rem; text-transform: uppercase;">Privacy Policy</h1>
          <p style="color: var(--color-stone); font-size: 0.9rem; margin-bottom: 4rem;">
            Last Updated: July 30, 2026 // Version 1.2
          </p>

          <article class="privacy-legal-document">
            
            <section id="intro" class="privacy-section">
              <h3>1. Introduction</h3>
              <p>
                At Nanak Tech Solutions ("we," "our," "us"), we prioritize the security and confidentiality of our clients' data. This Privacy Policy documents how we collect, process, secure, and store personal, business, and technical details when you visit our website, communicate with our coordinates, or engage our engineering systems.
              </p>
              <p>
                By accessing our systems, you consent to the processing models outlined here. We operate in strict compliance with global privacy regulations, including the General Data Protection Regulation (GDPR) and state-level data directives.
              </p>
            </section>
            
            <section id="collect" class="privacy-section">
              <h3>2. Information We Collect</h3>
              <p>
                To deliver our customized AI models, automation maps, and performance campaigns, we collect key records across three categories:
              </p>
              <ul>
                <li><strong>Personal Information:</strong> Includes your full name, email address, corporate phone number, and physical office coordinates when submitted via onboarding forms.</li>
                <li><strong>Business Information:</strong> Includes your company name, website URL, industry sector, target growth budgets, and statements describing operational bottlenecks.</li>
                <li><strong>Technical Information:</strong> Includes client IP addresses, browser agents, operating system parameters, referral paths, and click histories collected automatically during browser sessions.</li>
              </ul>
            </section>

            <section id="cookies" class="privacy-section">
              <h3>3. Cookies & Analytics</h3>
              <p>
                We use cookies and client tracking libraries to monitor traffic pathways, log technical speeds, and measure user retention parameters. These tools help us customize our interfaces and prevent click spams.
              </p>
              <p>
                We collect session logs, tracking cookies, and performance metrics. You can control cookie preferences inside your native browser settings; however, disabling cookies may block specific client integrations or interactive form features.
              </p>
            </section>

            <section id="use" class="privacy-section">
              <h3>4. How We Use Information</h3>
              <p>
                All data collected is processed strictly to support customer acquisitions, system setups, and service optimization loops:
              </p>
              <ul>
                <li>Constructing your customized AI and digital growth blueprints.</li>
                <li>Verifying corporate credentials and qualifying business applications.</li>
                <li>Routing sales leads, scheduling meetings, and answering questions.</li>
                <li>Auditing website speed, compiling technical stats, and stopping DDoS threats.</li>
                <li>Optimizing PPC bidding scripts, measuring return on ad spend, and targeting retargeting lists.</li>
              </ul>
            </section>

            <section id="security" class="privacy-section">
              <h3>5. Data Security</h3>
              <p>
                We protect your details against unauthorized access, loss, or alteration. All connection lines use Secure Socket Layer (SSL/TLS) tunnels. Customer database storage partitions utilize AES-256 encryption keys.
              </p>
              <p>
                Our engineers enforce the principle of least privilege: only certified technicians holding active security tokens can access production lead storage databases. Furthermore, we regularly audit configurations, run threat simulations, and patch dependencies to ensure compliance.
              </p>
            </section>

            <section id="third-party" class="privacy-section">
              <h3>6. Third Party Services</h3>
              <p>
                To provide specific services, we integrate secure third-party platforms. These platforms act as processors and process data according to strict confidentiality standards:
              </p>
              <ul>
                <li><strong>Google Analytics (GA4):</strong> Analyzes page traffic routes and user click histories. No personally identifiable details are sent.</li>
                <li><strong>Meta Pixel:</strong> Tracks performance advertising responses and configures dynamic retargeting groups.</li>
                <li><strong>OpenAI APIs:</strong> Powers intelligent chat features and workflow scripts. Data sent is not used to train public LLM bases.</li>
                <li><strong>Cloud Infrastructure (AWS/GCP):</strong> Hosts secure application instances, databases, and assets.</li>
              </ul>
            </section>

            <section id="rights" class="privacy-section">
              <h3>7. Your Rights</h3>
              <p>
                You retain complete ownership of your personal records. Depending on your jurisdiction (such as EU GDPR or California CCPA), you can invoke the following rights:
              </p>
              <ul>
                <li>The right to request copies of the records we maintain.</li>
                <li>The right to request corrections to outdated details.</li>
                <li>The right to request the permanent deletion of your data from our servers.</li>
                <li>The right to object to automatic profiling or performance ad targeting lists.</li>
              </ul>
              <p>
                To invoke any right, contact our data administrator using our email coordinates.
              </p>
            </section>

            <section id="retention" class="privacy-section">
              <h3>8. Data Retention</h3>
              <p>
                We retain client personal data only as long as necessary to complete business scheduling, manage active service contracts, or satisfy statutory legal requirements.
              </p>
              <p>
                Lead records submitted via our blueprint form are automatically archived or deleted after 180 days if a business contract is not executed. Backups are periodically overwritten according to our security schedule.
              </p>
            </section>

            <section id="contact" class="privacy-section">
              <h3>9. Contact Information</h3>
              <p>
                If you have questions regarding our data policies, wish to invoke your rights, or want to report security vulnerabilities, reach our data coordinator:
              </p>
              <p style="color: var(--color-white); font-weight: 400; margin-top: 1.5rem;">
                Nanak Tech Solutions Data Officer<br />
                <span style="color: var(--color-accent-gold);">info@nanaktechsolutions.com</span><br />
                Tower 4B, Cybercity, Sector 24, New Delhi NCR, India
              </p>
            </section>

          </article>
        </div>
      </div>
    </section>
  `;
}

function renderAdminPage() {
  return `
    <div class="admin-cms-wrapper container" style="margin-top: 8rem; min-height: 85vh; padding-bottom: 6rem;">
      <div class="admin-cms-header" style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 2rem;">
        <div>
          <span class="section-label" style="text-align: left; margin-bottom: 0.5rem;">Executive CMS Engine</span>
          <h1 class="editorial-title-md" style="text-align: left; font-size: 2.5rem; margin-bottom: 0.5rem; letter-spacing: -0.02em;">Visual Page Editor</h1>
          <p style="color: var(--color-stone); font-size: 0.95rem;">
            Drag & Drop blocks to reorder page elements, click them to edit copy/SVG vectors, and add custom scripts.
          </p>
        </div>
        <div class="admin-action-row" style="display: flex; align-items: center; gap: 1rem;">
          <button class="cta-button" onclick="adminCms.publish()" id="cms-publish-btn" style="border-radius: 0;">Publish Changes</button>
          <a href="/about-us" class="cta-button" data-link style="background: transparent; border: 1px solid var(--color-border); color: var(--color-white); border-radius: 0;">Preview Site</a>
        </div>
      </div>

      <div class="admin-grid-layout" style="margin-top: 3rem; display: grid; grid-template-columns: 280px 1fr 360px; gap: 2rem;">
        <!-- Left Sidebar: Select page & unused blocks -->
        <div class="admin-panel admin-sidebar" style="background-color: var(--color-charcoal); border: 1px solid var(--color-border); padding: 1.8rem; box-sizing: border-box;">
          <h3 class="panel-header-title" style="font-family: var(--font-display); font-size: 1rem; text-transform: uppercase; color: var(--color-white); letter-spacing: 0.1em; border-bottom: 1px solid var(--color-border-strong); padding-bottom: 0.8rem; margin-bottom: 1.5rem;">Select Context</h3>
          <select id="cms-page-selector" onchange="adminCms.changePage(this.value)" class="cms-select" style="width: 100%; padding: 0.8rem; background: var(--color-black); border: 1px solid var(--color-border); color: var(--color-white); font-family: var(--font-sans); font-size: 0.9rem; cursor: pointer; outline: none; margin-bottom: 2.5rem;">
            <option value="about">About Us Page</option>
            <option value="home">Home Page</option>
            <option value="consultation">Request Consultation</option>
            <option value="globalSettings">Global Settings & Custom Codes</option>
          </select>

          <h3 class="panel-header-title" style="font-family: var(--font-display); font-size: 1rem; text-transform: uppercase; color: var(--color-white); letter-spacing: 0.1em; border-bottom: 1px solid var(--color-border-strong); padding-bottom: 0.8rem; margin-bottom: 1rem;">Add Modules</h3>
          <div id="cms-deleted-blocks-list" style="display: flex; flex-direction: column; gap: 0.8rem;">
            <!-- Rendered dynamically -->
          </div>
        </div>

        <!-- Center: Drag-sort canvas workspace -->
        <div class="admin-panel admin-canvas" style="background-color: rgba(12, 12, 12, 0.4); border: 1px dashed var(--color-border-strong); padding: 2rem; box-sizing: border-box; display: flex; flex-direction: column; gap: 1.2rem;">
          <h3 class="panel-header-title" style="font-family: var(--font-display); font-size: 1rem; text-transform: uppercase; color: var(--color-white); letter-spacing: 0.1em; margin-bottom: 0.8rem;">Active Layout Stack</h3>
          <div id="cms-drag-sort-list" style="display: flex; flex-direction: column; gap: 1rem;">
            <!-- Rendered dynamically -->
          </div>
        </div>

        <!-- Right: Inspector properties panel -->
        <div class="admin-panel admin-inspector" style="background-color: var(--color-charcoal); border: 1px solid var(--color-border); padding: 1.8rem; box-sizing: border-box;">
          <h3 class="panel-header-title" style="font-family: var(--font-display); font-size: 1rem; text-transform: uppercase; color: var(--color-white); letter-spacing: 0.1em; border-bottom: 1px solid var(--color-border-strong); padding-bottom: 0.8rem; margin-bottom: 1rem;">Inspector Panel</h3>
          <div id="cms-form-fields-inspector" style="max-height: 65vh; overflow-y: auto; padding-right: 0.5rem;">
            <p style="color: var(--color-stone); font-size: 0.9rem; text-align: center; margin-top: 6rem; line-height: 1.5;">
              Select a block from the layout stack to edit its field content values.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Toast Notification -->
    <div id="cms-toast-alert" style="position: fixed; bottom: 2rem; left: 50%; transform: translateX(-50%) translateY(40px); background-color: var(--color-accent-gold); color: var(--color-black); padding: 1rem 2.5rem; font-family: var(--font-sans); font-weight: 500; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.1em; border: 1px solid rgba(255,255,255,0.1); opacity: 0; visibility: hidden; transition: transform 0.4s var(--ease-expo), opacity 0.4s var(--ease-expo), visibility 0.4s var(--ease-expo); z-index: 9999;">
      CMS Database Updated Successfully!
    </div>

    <script>
      (function() {
        const defaultState = \${JSON.stringify(fallbackCmsState)};
        
        window.adminCms = {
          state: null,
          activePage: 'about',
          selectedBlockId: null,
          draggedIndex: null,

          async init() {
            try {
              const res = await fetch('/api/cms/load');
              this.state = await res.json();
            } catch (err) {
              console.warn('Failed to load live CMS data. Operating on fallback local state.', err);
              this.state = JSON.parse(JSON.stringify(defaultState));
            }
            this.renderAll();
          },

          changePage(page) {
            this.activePage = page;
            this.selectedBlockId = (page === 'globalSettings') ? 'globalSettings' : null;
            this.renderAll();
          },

          renderAll() {
            this.renderCanvas();
            this.renderAddableBlocks();
            this.renderInspector();
          },

          renderCanvas() {
            const listContainer = document.getElementById('cms-drag-sort-list');
            if (!listContainer) return;

            if (this.activePage === 'globalSettings') {
              listContainer.innerHTML = \`
                <div class="admin-block-card" 
                     onclick="adminCms.selectBlock('globalSettings')"
                     style="padding: 1.5rem; border: 1px solid var(--color-accent-gold); background-color: rgba(207,181,132,0.03); cursor: pointer; text-align: center;">
                  <span style="color: var(--color-accent-gold); font-weight: 500; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 0.05em; display: block; margin-bottom: 0.5rem;">Global Custom Code Settings</span>
                  <span style="color: var(--color-stone); font-size: 0.8rem;">Click to edit custom HTML elements for Head, Body and Footer tags.</span>
                </div>
              \`;
              return;
            }

            const pageData = this.state[this.activePage];
            if (!pageData) {
              listContainer.innerHTML = '<p style="color: var(--color-stone);">No layout data config for this page.</p>';
              return;
            }

            const layout = pageData.layoutOrder;
            if (layout.length === 0) {
              listContainer.innerHTML = '<p style="color: var(--color-stone-muted); text-align: center; padding: 3rem 0;">Stack empty. Add blocks from the left sidebar panel.</p>';
              return;
            }

            listContainer.innerHTML = layout.map((blockId, index) => {
              const isSelected = blockId === this.selectedBlockId;
              const borderStyle = isSelected ? 'border: 1px solid var(--color-accent-gold); background-color: rgba(207,181,132,0.03);' : 'border: 1px solid var(--color-border); background-color: rgba(18,18,18,0.6);';
              return \`
                <div class="admin-block-card" 
                     draggable="true" 
                     ondragstart="adminCms.handleDragStart(event, \\\${index})" 
                     ondragover="adminCms.handleDragOver(event)" 
                     ondrop="adminCms.handleDrop(event, \\\${index})"
                     onclick="adminCms.selectBlock('\\\${blockId}')"
                     style="padding: 1.2rem; cursor: grab; display: flex; justify-content: space-between; align-items: center; transition: all var(--transition-medium); \\\${borderStyle}">
                  <div style="display: flex; align-items: center; gap: 1rem;">
                    <span style="color: var(--color-stone-muted); font-size: 0.8rem; font-family: monospace;">:: \\\${index + 1}</span>
                    <div>
                      <span style="color: var(--color-white); font-weight: 500; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 0.05em; display: block;">\\\${blockId}</span>
                      <span style="color: var(--color-stone-muted); font-size: 0.75rem;">Page Module Card</span>
                    </div>
                  </div>
                  <div style="display: flex; gap: 0.5rem; align-items: center;" onclick="event.stopPropagation()">
                    <button onclick="adminCms.moveUp(\\\${index})" class="cms-btn-icon" title="Move Up" style="background:none; border:none; color:var(--color-stone); font-size:1.1rem; cursor:pointer;">↑</button>
                    <button onclick="adminCms.moveDown(\\\${index})" class="cms-btn-icon" title="Move Down" style="background:none; border:none; color:var(--color-stone); font-size:1.1rem; cursor:pointer;">↓</button>
                    <button onclick="adminCms.deleteBlock('\\\${blockId}')" class="cms-btn-icon cms-btn-delete" title="Delete" style="background:none; border:none; color:var(--color-accent-orange); font-size:1.2rem; cursor:pointer; margin-left: 0.8rem;">×</button>
                  </div>
                </div>
              \`;
            }).join('');
          },

          renderAddableBlocks() {
            const container = document.getElementById('cms-deleted-blocks-list');
            if (!container) return;

            if (this.activePage === 'globalSettings') {
              container.innerHTML = '<p style="color: var(--color-stone-muted); font-size: 0.8rem; text-align: center; padding-top: 1rem;">No layout blocks for global settings.</p>';
              return;
            }

            const pageData = this.state[this.activePage];
            const allBlocks = Object.keys(pageData.blocks);
            const activeLayout = pageData.layoutOrder;
            const unusedBlocks = allBlocks.filter(b => !activeLayout.includes(b));

            if (unusedBlocks.length === 0) {
              container.innerHTML = '<p style="color: var(--color-stone-muted); font-size: 0.8rem; text-align: center; padding-top: 1rem;">All library modules active.</p>';
              return;
            }

            container.innerHTML = unusedBlocks.map(blockId => \`
              <button onclick="adminCms.addBlock('\\\${blockId}')" class="cms-add-btn" style="width: 100%; text-align: left; padding: 0.8rem; background: rgba(255,255,255,0.02); border: 1px solid var(--color-border); color: var(--color-stone); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer; transition: all var(--transition-medium);">
                + Add \\\${blockId}
              </button>
            \`).join('');
          },

          renderInspector() {
            const container = document.getElementById('cms-form-fields-inspector');
            if (!container) return;

            if (this.activePage === 'globalSettings') {
              const settings = this.state.globalSettings || { customHeadCode: '', customBodyStartCode: '', customFooterCode: '' };
              container.innerHTML = \`
                <h4 style="color: var(--color-accent-gold); text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.08em; margin-bottom: 1.5rem;">Global Integrations</h4>
                
                <div style="margin-bottom: 1.5rem;">
                  <label style="color: var(--color-stone); font-size: 0.7rem; text-transform: uppercase; display: block; margin-bottom: 0.4rem; letter-spacing: 0.05em;">Custom Head Elements (Scripts, Metas)</label>
                  <textarea oninput="adminCms.updateGlobalSetting('customHeadCode', this.value)" style="width: 100%; height: 120px; padding: 0.7rem; background: var(--color-black); border: 1px solid var(--color-border); color: var(--color-white); font-family: monospace; font-size: 0.8rem; resize: vertical; line-height: 1.4;">\\\${settings.customHeadCode || ''}</textarea>
                </div>

                <div style="margin-bottom: 1.5rem;">
                  <label style="color: var(--color-stone); font-size: 0.7rem; text-transform: uppercase; display: block; margin-bottom: 0.4rem; letter-spacing: 0.05em;">Custom Body Start Code</label>
                  <textarea oninput="adminCms.updateGlobalSetting('customBodyStartCode', this.value)" style="width: 100%; height: 100px; padding: 0.7rem; background: var(--color-black); border: 1px solid var(--color-border); color: var(--color-white); font-family: monospace; font-size: 0.8rem; resize: vertical; line-height: 1.4;">\\\${settings.customBodyStartCode || ''}</textarea>
                </div>

                <div style="margin-bottom: 1.5rem;">
                  <label style="color: var(--color-stone); font-size: 0.7rem; text-transform: uppercase; display: block; margin-bottom: 0.4rem; letter-spacing: 0.05em;">Custom Footer Elements (Tracking pixels)</label>
                  <textarea oninput="adminCms.updateGlobalSetting('customFooterCode', this.value)" style="width: 100%; height: 120px; padding: 0.7rem; background: var(--color-black); border: 1px solid var(--color-border); color: var(--color-white); font-family: monospace; font-size: 0.8rem; resize: vertical; line-height: 1.4;">\\\${settings.customFooterCode || ''}</textarea>
                </div>
              \`;
              return;
            }

            if (!this.selectedBlockId) {
              container.innerHTML = \`
                <p style="color: var(--color-stone); font-size: 0.9rem; text-align: center; margin-top: 6rem; line-height: 1.5;">
                  Select a block from the layout stack to edit its field content values.
                </p>
              \`;
              return;
            }

            const blockData = this.state[this.activePage].blocks[this.selectedBlockId];
            if (!blockData) {
              container.innerHTML = '<p style="color: var(--color-stone);">Error loading settings.</p>';
              return;
            }

            let fieldsHtml = \`<h4 style="color: var(--color-accent-gold); text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.08em; margin-bottom: 1.5rem;">Editing \\\${this.selectedBlockId}</h4>\`;

            for (const key in blockData) {
              if (key === 'items') {
                fieldsHtml += \`<div style="border-top: 1px solid var(--color-border-strong); padding-top: 1rem; margin-top: 1rem;"><span style="color: var(--color-white); font-size: 0.8rem; text-transform: uppercase; font-weight: 500; display:block; margin-bottom:0.5rem;">List Cards</span></div>\`;
                blockData.items.forEach((item, idx) => {
                  if (this.selectedBlockId === 'case-studies') {
                    // Specific case study properties editor
                    fieldsHtml += \`
                      <div style="margin-top: 1rem; background-color: var(--color-black); padding: 0.8rem; border: 1px solid var(--color-border-strong);">
                        <label style="color: var(--color-accent-gold); font-size: 0.7rem; text-transform: uppercase; display: block; margin-bottom: 0.4rem;">Case \\\${idx + 1} Category</label>
                        <input type="text" value="\\\${item.category}" oninput="adminCms.updateListItem('\\\${this.selectedBlockId}', \\\${idx}, 'category', this.value)" style="width: 100%; padding: 0.5rem; background: var(--color-charcoal); border: 1px solid var(--color-border); color: var(--color-white); margin-bottom: 0.6rem; font-size: 0.85rem;" />

                        <label style="color: var(--color-accent-gold); font-size: 0.7rem; text-transform: uppercase; display: block; margin-bottom: 0.4rem;">Case \\\${idx + 1} Title</label>
                        <input type="text" value="\\\${item.title}" oninput="adminCms.updateListItem('\\\${this.selectedBlockId}', \\\${idx}, 'title', this.value)" style="width: 100%; padding: 0.5rem; background: var(--color-charcoal); border: 1px solid var(--color-border); color: var(--color-white); margin-bottom: 0.6rem; font-size: 0.85rem;" />

                        <label style="color: var(--color-accent-gold); font-size: 0.7rem; text-transform: uppercase; display: block; margin-bottom: 0.4rem;">Description</label>
                        <textarea oninput="adminCms.updateListItem('\\\${this.selectedBlockId}', \\\${idx}, 'description', this.value)" style="width: 100%; padding: 0.5rem; background: var(--color-charcoal); border: 1px solid var(--color-border); color: var(--color-white); font-size: 0.85rem; height: 50px; resize: vertical; margin-bottom:0.6rem; font-family: var(--font-sans);">\\\${item.description}</textarea>

                        <label style="color: var(--color-accent-gold); font-size: 0.7rem; text-transform: uppercase; display: block; margin-bottom: 0.4rem;">Pills (Comma Separated)</label>
                        <input type="text" value="\\\${item.pills}" oninput="adminCms.updateListItem('\\\${this.selectedBlockId}', \\\${idx}, 'pills', this.value)" style="width: 100%; padding: 0.5rem; background: var(--color-charcoal); border: 1px solid var(--color-border); color: var(--color-white); margin-bottom: 0.6rem; font-size: 0.85rem;" />

                        <label style="color: var(--color-accent-gold); font-size: 0.7rem; text-transform: uppercase; display: block; margin-bottom: 0.4rem;">Link Route URL</label>
                        <input type="text" value="\\\${item.link}" oninput="adminCms.updateListItem('\\\${this.selectedBlockId}', \\\${idx}, 'link', this.value)" style="width: 100%; padding: 0.5rem; background: var(--color-charcoal); border: 1px solid var(--color-border); color: var(--color-white); font-size: 0.85rem;" />
                      </div>
                    \`;
                  } else {
                    // Values cards editor
                    fieldsHtml += \`
                      <div style="margin-top: 1rem; background-color: var(--color-black); padding: 0.8rem; border: 1px solid var(--color-border-strong);">
                        <label style="color: var(--color-accent-bronze); font-size: 0.7rem; text-transform: uppercase; display: block; margin-bottom: 0.4rem;">Card \\\${idx + 1} Title</label>
                        <input type="text" value="\\\${item.title}" oninput="adminCms.updateListItem('\\\${this.selectedBlockId}', \\\${idx}, 'title', this.value)" style="width: 100%; padding: 0.5rem; background: var(--color-charcoal); border: 1px solid var(--color-border); color: var(--color-white); margin-bottom: 0.8rem; font-size: 0.85rem;" />
                        
                        <label style="color: var(--color-accent-bronze); font-size: 0.7rem; text-transform: uppercase; display: block; margin-bottom: 0.4rem;">Card \\\${idx + 1} Description</label>
                        <textarea oninput="adminCms.updateListItem('\\\${this.selectedBlockId}', \\\${idx}, 'desc', this.value)" style="width: 100%; padding: 0.5rem; background: var(--color-charcoal); border: 1px solid var(--color-border); color: var(--color-white); font-size: 0.85rem; height: 50px; resize: none; font-family: var(--font-sans);">\\\${item.desc}</textarea>
                      </div>
                    \`;
                  }
                });
              } else {
                const labelText = key.replace(/([A-Z])/g, ' $1').toUpperCase();
                const isLongText = key === 'description' || key === 'leadText' || key === 'missionText' || key === 'approachText' || key === 'graphicSvg';
                const isCode = key === 'graphicSvg';
                const inputStyle = isCode ? 'font-family: monospace; font-size: 0.75rem; height: 180px;' : 'font-family: var(--font-sans); font-size: 0.85rem; height: 100px;';
                
                fieldsHtml += \`
                  <div style="margin-bottom: 1.2rem;">
                    <label style="color: var(--color-stone-muted); font-size: 0.7rem; text-transform: uppercase; display: block; margin-bottom: 0.4rem; letter-spacing: 0.05em;">\\\${labelText}</label>
                \`;
                
                if (isLongText) {
                  fieldsHtml += \`
                    <textarea class="cms-field-textarea" oninput="adminCms.updateField('\\\${this.selectedBlockId}', '\\\${key}', this.value)" style="width: 100%; padding: 0.7rem; background: var(--color-black); border: 1px solid var(--color-border); color: var(--color-white); resize: vertical; line-height: 1.4; \\\${inputStyle}">\\\${blockData[key]}</textarea>
                  \`;
                } else {
                  fieldsHtml += \`
                    <input type="text" class="cms-field-input" value="\\\${blockData[key]}" oninput="adminCms.updateField('\\\${this.selectedBlockId}', '\\\${key}', this.value)" style="width: 100%; padding: 0.7rem; background: var(--color-black); border: 1px solid var(--color-border); color: var(--color-white); font-size: 0.85rem;" />
                  \`;
                }
                
                fieldsHtml += \`</div>\`;
              }
            }

            container.innerHTML = fieldsHtml;
          },

          handleDragStart(e, index) {
            this.draggedIndex = index;
            e.dataTransfer.effectAllowed = 'move';
          },

          handleDragOver(e) {
            e.preventDefault();
          },

          handleDrop(e, index) {
            e.preventDefault();
            if (this.draggedIndex === null || this.draggedIndex === index) return;
            const layout = this.state[this.activePage].layoutOrder;
            const draggedItem = layout[this.draggedIndex];
            layout.splice(this.draggedIndex, 1);
            layout.splice(index, 0, draggedItem);
            this.renderCanvas();
          },

          moveUp(index) {
            if (index === 0) return;
            const layout = this.state[this.activePage].layoutOrder;
            const item = layout[index];
            layout.splice(index, 1);
            layout.splice(index - 1, 0, item);
            this.renderCanvas();
          },

          moveDown(index) {
            const layout = this.state[this.activePage].layoutOrder;
            if (index === layout.length - 1) return;
            const item = layout[index];
            layout.splice(index, 1);
            layout.splice(index + 1, 0, item);
            this.renderCanvas();
          },

          selectBlock(blockId) {
            this.selectedBlockId = blockId;
            this.renderCanvas();
            this.renderInspector();
          },

          updateField(blockId, fieldKey, value) {
            this.state[this.activePage].blocks[blockId][fieldKey] = value;
          },

          updateListItem(blockId, idx, fieldKey, value) {
            this.state[this.activePage].blocks[blockId].items[idx][fieldKey] = value;
          },

          updateGlobalSetting(key, value) {
            this.state.globalSettings[key] = value;
          },

          deleteBlock(blockId) {
            const layout = this.state[this.activePage].layoutOrder;
            const idx = layout.indexOf(blockId);
            if (idx !== -1) {
              layout.splice(idx, 1);
            }
            if (this.selectedBlockId === blockId) {
              this.selectedBlockId = null;
            }
            this.renderAll();
          },

          addBlock(blockId) {
            const layout = this.state[this.activePage].layoutOrder;
            if (!layout.includes(blockId)) {
              layout.push(blockId);
            }
            this.renderAll();
          },

          async publish() {
            const publishBtn = document.getElementById('cms-publish-btn');
            if (publishBtn) {
              publishBtn.innerText = 'Publishing...';
              publishBtn.disabled = true;
            }

            try {
              const res = await fetch('/api/cms/save', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
              });
              
              if (res.ok) {
                // Synchronize global RAM state instantly
                import('/src/router.js').then(module => {
                  module.setCmsState(this.state);
                });

                this.showToast('CMS Database Published Live!');
              } else {
                alert('Server validation error. Publish failed.');
              }
            } catch (err) {
              console.error('Publish error:', err);
              alert('Connection failed. CMS state not saved.');
            } finally {
              if (publishBtn) {
                publishBtn.innerText = 'Publish Changes';
                publishBtn.disabled = false;
              }
            }
          },

          showToast(msg) {
            const toast = document.getElementById('cms-toast-alert');
            if (toast) {
              toast.innerText = msg;
              toast.style.visibility = 'visible';
              toast.style.opacity = '1';
              toast.style.transform = 'translateX(-50%) translateY(0)';
              
              setTimeout(() => {
                toast.style.visibility = 'hidden';
                toast.style.opacity = '0';
                toast.style.transform = 'translateX(-50%) translateY(40px)';
              }, 3000);
            }
          }
        };

        window.adminCms.init();
      })();
    </script>
  `;
}

function render404() {
  return `
    <section class="hero-sec container" style="text-align: center; min-height: 80vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
      <span class="hero-eyebrow" style="color: var(--color-accent-orange);">404 // Boundary Intercepted</span>
      <h1 class="hero-headline" style="margin-top: 1.5rem; margin-bottom: 2rem;">Route Not Found</h1>
      <p class="lead-text" style="max-width: 500px; margin-bottom: 3rem;">
        You have attempted to load a digital coordinate that does not exist in this environment.
      </p>
      <a href="/" class="cta-button" data-link>Return to Studio</a>
    </section>
  `;
}

/* --------------------------------------------------------------------------
   BLOG RENDERING ENGINE
   -------------------------------------------------------------------------- */

export function generateBlogCardHtml(post) {
  return `
    <article class="blog-card" data-slug="${post.slug}" data-category="${post.category}">
      <a href="/blog/${post.slug}" data-link class="blog-card-img-wrapper">
        <img class="blog-card-img" src="${post.featuredImage}" alt="${post.title}" loading="lazy" />
        <span class="blog-card-category-badge">${post.category}</span>
      </a>
      <div class="blog-card-body">
        <div class="blog-card-meta">
          <span>${post.date}</span>
          <span class="meta-dot"></span>
          <span>${post.readTime}</span>
        </div>
        <h3 class="blog-card-title">
          <a href="/blog/${post.slug}" data-link>${post.title}</a>
        </h3>
        <p class="blog-card-excerpt">${post.excerpt}</p>
        <div class="blog-card-footer">
          <div class="blog-card-author">
            <img class="author-avatar-sm" src="${post.author.avatar}" alt="${post.author.name}" />
            <div>
              <span class="author-name-sm">${post.author.name}</span>
              <span class="author-title-sm">${post.author.title}</span>
            </div>
          </div>
          <a href="/blog/${post.slug}" data-link class="blog-card-read-btn">
            Read More
            <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 12l4-4-4-4"/></svg>
          </a>
        </div>
      </div>
    </article>
  `;
}

function renderBlogHub() {
  const posts = Object.values(blogData);
  const featured = posts[0]; // First post featured
  const gridPosts = posts; // Pre-render all in server output for SEO bots

  const categories = [
    "All Insights",
    "AI & Automation",
    "Digital Marketing",
    "SEO",
    "Google Ads",
    "Meta Ads",
    "Web Development",
    "App Development",
    "Analytics",
    "Business Growth",
    "Case Studies"
  ];

  const categoryPillsHtml = categories.map((cat, idx) => `
    <button class="blog-filter-pill ${idx === 0 ? 'active' : ''}" data-category="${cat === 'All Insights' ? 'all' : cat}">
      ${cat}
    </button>
  `).join('');

  const gridHtml = gridPosts.map(p => generateBlogCardHtml(p)).join('');

  return `
    <!-- Blog Hub Hero Section -->
    <section class="inner-hero-sec container">
      <div class="inner-hero-inner">
        <span class="inner-hero-eyebrow">Studio Knowledge Network</span>
        <h1 class="inner-hero-title">Insights, AI & Digital Growth Resources</h1>
        <p class="inner-hero-subtitle">
          Expert insights on Artificial Intelligence, Digital Marketing, SEO, Automation, Web Development, Analytics and Business Growth.
        </p>

        <!-- Search Bar with smooth focus transitions -->
        <div class="blog-search-wrapper">
          <input type="text" id="blog-search-input" placeholder="Search insights by keywords..." aria-label="Search posts" />
          <button id="blog-search-clear" class="blog-search-clear-btn" aria-label="Clear search" style="visibility: hidden;">×</button>
          <div class="blog-search-icon">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          </div>
        </div>
      </div>
    </section>

    <!-- Filters and Sorting Control Bar -->
    <section class="blog-controls-sec container" style="justify-content: flex-end;">
      <div class="blog-sorting-wrapper">
        <label for="blog-sort-select">Sort By:</label>
        <div class="blog-select-wrapper">
          <select id="blog-sort-select">
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </div>
    </section>

    <!-- Featured Post Section -->
    <section class="blog-featured-sec container" id="blog-featured-section">
      <span class="section-label">Featured Insight</span>
      <div class="blog-featured-card">
        <a href="/blog/${featured.slug}" data-link class="blog-featured-img-wrapper">
          <img src="${featured.featuredImage}" alt="${featured.title}" />
        </a>
        <div class="blog-featured-content">
          <div class="blog-featured-meta">
            <span class="blog-card-category-badge">${featured.category}</span>
            <span>${featured.date}</span>
            <span class="meta-dot"></span>
            <span>${featured.readTime}</span>
          </div>
          <h2 class="blog-featured-title">
            <a href="/blog/${featured.slug}" data-link>${featured.title}</a>
          </h2>
          <p class="blog-featured-excerpt">${featured.excerpt}</p>
          <div class="blog-featured-footer">
            <div class="blog-card-author">
              <img class="author-avatar-sm" src="${featured.author.avatar}" alt="${featured.author.name}" />
              <div>
                <span class="author-name-sm">${featured.author.name}</span>
                <span class="author-title-sm">${featured.author.title}</span>
              </div>
            </div>
            <a href="/blog/${featured.slug}" data-link class="cta-btn-lg" style="padding: 0.8rem 2rem; font-size: 0.85rem;">Read Article</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Grid List Section -->
    <section class="blog-grid-sec container">
      <span class="section-label" id="blog-count-label">All Publications</span>
      <div id="blog-grid" class="blog-grid-cards">
        ${gridHtml}
      </div>
      <div id="blog-no-results" class="blog-empty-state" style="display: none;">
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="var(--color-stone-muted)" stroke-width="1"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/><path d="M8 11h6"/></svg>
        <h3>No matching publications found</h3>
        <p>Try refining your keyword query or resetting the category tabs.</p>
        <button id="blog-reset-filters-btn" class="cta-button" style="margin-top: 1.5rem;">Reset All Filters</button>
      </div>
    </section>

    <!-- Newsletter Nurturing Section -->
    <section class="blog-newsletter-sec container">
      <div class="blog-newsletter-inner">
        <div class="blog-newsletter-content">
          <span class="section-label" style="color: var(--color-accent-gold);">Structured Insights</span>
          <h3>Subscribe to Nanak Tech Solutions's Newsletter</h3>
          <p>We transmit monthly technical briefs containing detailed AI blueprints, search data audits, and web efficiency optimization studies.</p>
        </div>
        <form class="blog-newsletter-form" id="blog-newsletter-form">
          <input type="email" placeholder="Your corporate email address" required aria-label="Corporate Email" />
          <button type="submit" class="cta-button">Subscribe</button>
        </form>
      </div>
    </section>
  `;
}

function renderBlogPost(post) {
  // Find previous and next articles
  const posts = Object.values(blogData);
  const curIdx = posts.findIndex(p => p.slug === post.slug);
  const prevPost = curIdx > 0 ? posts[curIdx - 1] : posts[posts.length - 1];
  const nextPost = curIdx < posts.length - 1 ? posts[curIdx + 1] : posts[0];

  // Dynamic TOC links setup
  const tocHtml = post.sections.map((sec, i) => `
    <li>
      <a href="#toc-heading-${i}" class="toc-link">
        <span class="toc-num">0${i + 1}</span>
        <span class="toc-text">${sec.h2}</span>
      </a>
    </li>
  `).join('');

  // Main post content sections setup
  const contentHtml = post.sections.map((sec, i) => `
    <section id="toc-heading-${i}" class="blog-article-section">
      <h2 class="blog-heading-h2">${sec.h2}</h2>
      ${sec.paragraphs.map(p => `<p class="blog-body-p">${p}</p>`).join('')}
    </section>
  `).join('');

  // Takeaways block
  const takeawaysHtml = post.takeaways.map(t => `
    <li class="takeaway-item">
      <span class="takeaway-bullet"></span>
      <p>${t}</p>
    </li>
  `).join('');

  // FAQs block
  const faqsHtml = post.faqs.map((f, i) => `
    <div class="faq-item">
      <button class="faq-question" aria-expanded="false" onclick="this.parentElement.classList.toggle('active'); const expanded = this.getAttribute('aria-expanded') === 'true'; this.setAttribute('aria-expanded', !expanded)">
        <span>${f.q}</span>
        <span class="faq-toggle-icon">+</span>
      </button>
      <div class="faq-answer">
        <p>${f.a}</p>
      </div>
    </div>
  `).join('');

  // Related posts block
  const relatedHtml = post.related.map(slug => {
    const rel = blogData[slug];
    if (!rel) return '';
    return `
      <a href="/blog/${rel.slug}" data-link class="blog-related-card">
        <img class="blog-related-img" src="${rel.featuredImage}" alt="${rel.title}" />
        <div class="blog-related-info">
          <span class="blog-card-category-badge" style="font-size: 0.65rem; padding: 0.2rem 0.6rem;">${rel.category}</span>
          <h4 class="blog-related-title">${rel.title}</h4>
        </div>
      </a>
    `;
  }).join('');

  return `
    <!-- Top reading progress element -->
    <div id="blog-progress-container" aria-hidden="true">
      <div id="blog-progress-bar"></div>
    </div>

    <!-- Blog Header Banner -->
    <header class="blog-post-header container">
      <div class="blog-post-header-inner">
        <a href="/blog" data-link class="blog-back-btn">← Back to publications hub</a>
        <div class="blog-post-meta-top">
          <span class="blog-card-category-badge">${post.category}</span>
          <span>${post.date}</span>
          <span class="meta-dot"></span>
          <span>${post.readTime}</span>
        </div>
        <h1 class="blog-post-title">${post.title}</h1>
        
        <div class="blog-post-author-row">
          <div class="blog-card-author">
            <img class="author-avatar-sm" src="${post.author.avatar}" alt="${post.author.name}" />
            <div>
              <span class="author-name-sm" style="color: var(--color-white); font-weight: 500;">${post.author.name}</span>
              <span class="author-title-sm">${post.author.title}</span>
            </div>
          </div>
          <div class="blog-share-buttons">
            <span class="share-label">Share:</span>
            <button class="share-btn" onclick="window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent(document.title)+'&url='+encodeURIComponent(window.location.href), '_blank')" aria-label="Share on X">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></button>
            <button class="share-btn" onclick="window.open('https://www.linkedin.com/sharing/share-offsite/?url='+encodeURIComponent(window.location.href), '_blank')" aria-label="Share on LinkedIn">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></button>
            <button class="share-btn" id="blog-copy-link-btn" aria-label="Copy article link">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg></button>
          </div>
        </div>
      </div>
    </header>

    <!-- Featured Post Large Image Banner -->
    <section class="blog-featured-banner container">
      <div class="blog-post-featured-image-wrapper">
        <img class="blog-post-featured-image" src="${post.featuredImage}" alt="${post.title}" />
      </div>
    </section>

    <!-- Main Content Split Layout -->
    <section class="blog-main-layout-sec container">
      <div class="blog-split-layout">
        <!-- Sidebar Navigation (Sticky on Desktop) -->
        <aside class="blog-sidebar-col">
          <div class="blog-sticky-panel">
            <span class="toc-title">Article Outline</span>
            <ul class="blog-toc-list" id="blog-toc-list">
              ${tocHtml}
            </ul>
          </div>
        </aside>

        <!-- Main Body Article Text -->
        <article class="blog-body-col">
          <!-- Intro / Sections -->
          <div class="blog-article-content">
            ${contentHtml}
          </div>

          <!-- Pull Quote -->
          <div class="blog-pull-quote">
            <p>${post.pullQuote}</p>
          </div>

          <!-- Key Takeaways summary card -->
          <div class="blog-takeaways-card">
            <span class="hero-meta-label" style="color: var(--color-accent-gold); margin-bottom: 1.5rem; display: block;">Key Takeaways Matrix</span>
            <ul class="blog-takeaways-list">
              ${takeawaysHtml}
            </ul>
          </div>

          <!-- FAQ Section -->
          <section class="blog-article-faqs">
            <h3 class="blog-section-subheading">Topical Questions & Answers</h3>
            <div class="faq-list">
              ${faqsHtml}
            </div>
          </section>
        </article>
      </div>
    </section>

    <!-- Related Articles Section -->
    <section class="blog-related-sec container">
      <span class="section-label">Related Publications</span>
      <h3 class="editorial-title-md" style="margin-bottom: 3rem; text-align: left;">Deepen Your Context</h3>
      <div class="blog-related-grid">
        ${relatedHtml}
      </div>
    </section>

    <!-- Previous and Next Article Navigation Footer -->
    <section class="blog-post-nav-footer container">
      <div class="blog-post-nav-grid">
        <a href="/blog/${prevPost.slug}" data-link class="blog-nav-link-card prev">
          <span class="nav-direction">← Previous Publication</span>
          <h4 class="nav-title">${prevPost.title}</h4>
        </a>
        <a href="/blog/${nextPost.slug}" data-link class="blog-nav-link-card next">
          <span class="nav-direction">Next Publication →</span>
          <h4 class="nav-title">${nextPost.title}</h4>
        </a>
      </div>
    </section>

    <!-- Bottom Converting CTA -->
    <section class="blog-bottom-cta-sec container">
      <div class="cta-inner">
        <span class="section-label" style="color: var(--color-accent-gold); margin-bottom: 1rem; display: block;">Leverage Audit</span>
        <h2 class="cta-heading">Get in Touch</h2>
        <p class="cta-desc lead-text" style="max-width: 650px; margin-left: auto; margin-right: auto; text-align: center;">
          Let's align your systems infrastructure. Partner with Nanak Tech Solutions to build custom AI agents, deploy high-performance web systems, and design technical SEO networks.
        </p>
        <a href="/contact-us" class="cta-btn-lg" data-link>Contact Us</a>
      </div>
    </section>

    <!-- Non-Intrusive Floating Consultation CTA -->
    <div id="blog-floating-cta" class="blog-floating-cta-panel">
      <div>
        <span class="floating-cta-title">Ready to scale operational leverage?</span>
        <span class="floating-cta-desc">Reach out for a 30-minute tech audit with Nanak experts.</span>
      </div>
      <a href="/contact-us" class="cta-button" data-link>Contact Us</a>
    </div>
  `;
}

export function renderThankYouPage() {
  return `
    <div class="thank-you-page-container container">
      <!-- Background subtle elements (volumetric glow and blueprint grid) -->
      <div class="volumetric-glow" aria-hidden="true"></div>
      <div class="blueprint-texture" aria-hidden="true"></div>

      <div class="thank-you-content-card">
        <!-- Outlined Circular Bronze Success Icon with self-draw path -->
        <div class="success-icon-wrapper">
          <svg class="success-circle-svg" viewBox="0 0 80 80">
            <circle class="success-circle-path" cx="40" cy="40" r="36" fill="none" stroke="var(--color-accent-gold)" stroke-width="2" />
            <path class="success-check-path" d="M 28,40 L 36,48 L 52,32" fill="none" stroke="var(--color-accent-gold)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <div class="bronze-sweep-light"></div>
        </div>

        <span class="thank-you-eyebrow">CONSULTATION REQUEST RECEIVED</span>
        <h1 class="thank-you-heading">Thank You!</h1>
        
        <div class="thank-you-body-text">
          <p>Thank you for reaching out to Nanak Tech Solutions.</p>
          <p>We've successfully received your consultation request and our strategy team is already reviewing your requirements.</p>
          <p>You can expect a response from us within the next 24 business hours.</p>
          <p>We look forward to helping your business grow.</p>
        </div>

        <div class="thank-you-actions">
          <a href="/" class="cta-button primary-btn" data-link>Return to Home</a>
          <a href="/services/digital-marketing" class="cta-button secondary-btn" data-link>Explore Our Services</a>
        </div>
      </div>
    </div>
  `;
}

export function getCharacterSvgHtml() {
  return `
    <svg class="consultant-svg" viewBox="0 0 200 400" width="100%" height="100%">
      <defs>
        <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fcd5b8" />
          <stop offset="100%" stop-color="#e8a880" />
        </linearGradient>
        <linearGradient id="hairGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#3a3028" />
          <stop offset="100%" stop-color="#1c1612" />
        </linearGradient>
        <linearGradient id="blazerGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#282828" />
          <stop offset="100%" stop-color="#121212" />
        </linearGradient>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#cfb584" />
          <stop offset="100%" stop-color="#a47c43" />
        </linearGradient>
      </defs>

      <!-- Left Leg -->
      <g class="char-leg char-left-leg" style="transform-origin: 90px 240px;">
        <path d="M 80,240 L 98,240 L 92,340 L 76,340 Z" fill="#2d3436" />
        <path d="M 76,340 L 92,340 L 94,352 L 68,352 Z" fill="#ffffff" />
        <path d="M 68,352 L 94,352 L 94,355 L 68,355 Z" fill="#cfb584" />
      </g>

      <!-- Right Leg -->
      <g class="char-leg char-right-leg" style="transform-origin: 110px 240px;">
        <path d="M 102,240 L 120,240 L 124,340 L 108,340 Z" fill="#1e272e" />
        <path d="M 108,340 L 124,340 L 128,352 L 100,352 Z" fill="#ffffff" />
        <path d="M 100,352 L 128,352 L 128,355 L 100,355 Z" fill="#cfb584" />
      </g>

      <!-- Left Arm -->
      <g class="char-arm char-left-arm" style="transform-origin: 75px 120px;">
        <path d="M 70,120 L 80,120 L 60,200 L 50,195 Z" fill="url(#blazerGrad)" />
        <path d="M 50,195 L 60,200 L 58,205 L 48,200 Z" fill="#ffffff" />
        <circle cx="50" cy="208" r="7" fill="url(#skinGrad)" />
      </g>

      <!-- Torso -->
      <g class="char-torso">
        <path d="M 72,118 L 128,118 L 120,242 L 80,242 Z" fill="url(#blazerGrad)" />
        <path d="M 92,118 L 108,118 L 100,150 Z" fill="#ffffff" />
        <circle cx="100" cy="180" r="2.5" fill="url(#goldGrad)" />
        <circle cx="100" cy="205" r="2.5" fill="url(#goldGrad)" />
      </g>

      <!-- Right Arm -->
      <g class="char-arm char-right-arm" style="transform-origin: 125px 120px;">
        <path d="M 120,120 L 130,120 L 142,200 L 132,205 Z" fill="url(#blazerGrad)" />
        <path d="M 132,205 L 142,200 L 144,205 L 134,210 Z" fill="#ffffff" />
        <circle cx="140" cy="214" r="7" fill="url(#skinGrad)" id="char-right-hand" />
      </g>

      <!-- Head & Face -->
      <g class="char-head" style="transform-origin: 100px 115px;">
        <rect x="94" y="105" width="12" height="15" fill="url(#skinGrad)" />
        <circle cx="100" cy="85" r="24" fill="url(#skinGrad)" />
        <circle cx="75" cy="85" r="4.5" fill="url(#skinGrad)" />
        <circle cx="125" cy="85" r="4.5" fill="url(#skinGrad)" />
        <g class="char-eyes">
          <ellipse cx="92" cy="81" rx="2.5" ry="3" fill="#1c1612" />
          <ellipse cx="108" cy="81" rx="2.5" ry="3" fill="#1c1612" />
          <path d="M 88,74 Q 92,72 96,75" stroke="#1c1612" stroke-width="1.2" fill="none" />
          <path d="M 104,74 Q 108,72 112,75" stroke="#1c1612" stroke-width="1.2" fill="none" />
        </g>
        <path d="M 99,82 L 100,87 L 97,87" stroke="#e8a880" stroke-width="1.2" fill="none" />
        <path id="char-smile-path" d="M 91,93 Q 100,99 109,93" stroke="#9e3a3a" stroke-width="2" fill="none" stroke-linecap="round" />
        <path d="M 76,80 Q 72,58 92,54 Q 108,50 122,62 Q 128,72 124,80 Q 120,70 108,68 Q 92,66 76,80 Z" fill="url(#hairGrad)" />
      </g>
    </svg>
  `;
}
