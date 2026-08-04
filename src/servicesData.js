export const servicesData = {
  "ai-automation": {
    title: "AI Automation Systems",
    tagline: "Orchestrating intelligence to elevate human capability.",
    heroDescription: "We engineer proprietary agentic workflows, custom large language models, and semantic data search engines that transform operational efficiency from linear steps to exponential scale.",
    overview: "In the modern enterprise, standard automation is no longer a competitive advantage. True leverage comes from cognitive orchestration—systems that can interpret intent, analyze complex datasets, and take autonomous actions. Nanak Tech Solutions designs and deploys custom AI automation pipelines that integrate deeply with your existing software stack. We bypass simple wrapper APIs to build robust, secure, and self-improving AI solutions. Our engineering focuses on semantic retrieval (RAG), autonomous multi-agent frameworks, and fine-tuned models tailored to your corporate intelligence. By automating high-overhead cognitive processes, we enable your elite team to focus on strategic breakthroughs while systems handle execution with precision. In addition, we design custom vector search indexes and cognitive search systems that allow businesses to tap into unstructured document vaults (such as PDF files, spreadsheets, and scanned documents) dynamically. This transforms your company's data graveyard into a real-time, queryable intelligence dashboard.",
    challenges: [
      {
        title: "Manual Knowledge Bottlenecks",
        desc: "Subject matter experts spend up to 30% of their workday searching through unstructured PDFs, legacy wikis, and email chains. This cognitive load slows down decision-making, introduces operational risk, and caps your organizational bandwidth. It prevents rapid responding to RFP processes, client queries, and internal operational checks, creating significant administrative friction."
      },
      {
        title: "Fragile Rule-Based Workflows",
        desc: "Traditional RPA and basic Zapier connections break the moment an input format changes. These systems lack the semantic understanding required to handle unexpected data variances, leading to constant maintenance overhead, broken pipelines, and missing records. Business operations are frequently halted to fix basic data-handling errors."
      },
      {
        title: "Data Isolation & Security Risks",
        desc: "Using generic public AI models exposes sensitive proprietary IP. Enterprises struggle to leverage their unique organizational intelligence while maintaining strict compliance, data sovereignty, and security protocols. Sending data to third-party endpoints creates compliance gaps under GDPR, SOC2, and HIPAA frameworks."
      }
    ],
    solution: "We build custom LLM pipelines and multi-agent frameworks (using LangChain and Autogen) that act as intelligent overlays on your enterprise systems. By implementing robust Retrieval-Augmented Generation (RAG) architectures, we ground AI outputs in your private databases, ensuring 99.9% accuracy. These systems operate autonomously under human-in-the-loop validation, resolving complex multi-step processes like automated underwriting, contract analysis, and cognitive customer operations securely on private cloud deployments. Our architecture includes prompt safety filters, strict compliance monitors, and semantic output verification layers that ensure the AI does not hallucinate and acts strictly within operational boundaries.",
    benefits: [
      {
        title: "90% Reduction in Processing Time",
        desc: "Transform complex document review, classification, and data extraction pipelines from days to seconds with consistent, structured outputs that import directly into your system databases."
      },
      {
        title: "Absolute IP Protection",
        desc: "Deploy models within your private VPC (AWS, GCP, or Azure) using isolated endpoints, ensuring zero data leakage and full compliance with SOC2 and GDPR standards."
      },
      {
        title: "Frictionless API Integrations",
        desc: "We integrate custom neural networks and LLMs directly with legacy databases, CRMs (Salesforce, HubSpot), ERP platforms, and internal chat applications like Slack or Teams."
      },
      {
        title: "Predictive Analysis",
        desc: "Incorporate time-series forecasting models to calculate market shifts, customer churn, and inventory requirements ahead of schedule."
      },
      {
        title: "Multi-Agent Networks",
        desc: "Deploy interconnected autonomous agents that collaborate, critique, and solve complex business tasks without human intervention."
      },
      {
        title: "Real-Time Telemetry",
        desc: "Stream model inference logs and accuracy metrics to interactive dashboards, ensuring full operational visibility and audit trails."
      }
    ],
    process: [
      {
        stepNum: "01",
        title: "Cognitive Audit",
        desc: "We map your operational bottlenecks, document structures, and data flows to locate high-impact areas for intelligent automation. We evaluate legacy pipelines and highlight areas where decision-making can be accelerated."
      },
      {
        stepNum: "02",
        title: "Architecture Design",
        desc: "We engineer the semantic data pipeline, selecting appropriate open-source or proprietary models and designing custom RAG pipelines. We define index strategies and system communication schemas."
      },
      {
        stepNum: "03",
        title: "Prototype & Validation",
        desc: "We develop a functional sandbox environment, testing model parameters against your unique edge cases to eliminate hallucination risks. We run automated checks to optimize precision and recall rates."
      },
      {
        stepNum: "04",
        title: "Secure Deployment",
        desc: "We containerize the system using Docker and Kubernetes, deploying it straight to your cloud architecture with rigorous security barriers. We setup key rotations, VPC boundaries, and logging filters."
      },
      {
        stepNum: "05",
        title: "Continuous Tuning",
        desc: "We establish performance monitoring dashboards, auditing agent output quality and fine-tuning weights for sustained reliability. We run periodic evaluations to adjust prompts as operational targets shift."
      }
    ],
    technologies: ["Python", "PyTorch", "OpenAI API", "LangChain", "LlamaIndex", "HuggingFace", "Qdrant", "PostgreSQL", "Docker", "Kubernetes"],
    industries: ["FinTech", "Healthcare", "Legal Tech", "Logistics", "SaaS Enterprise"],
    caseStudy: {
      title: "Automating Contract Auditing for a Global Logistics Enterprise",
      challenge: "The client was manually auditing thousands of multi-lingual freight contracts monthly, leading to billing discrepancies and slow turnaround times.",
      approach: "We deployed a custom multi-agent RAG pipeline using LlamaIndex and fine-tuned Llama-3 models to extract terms, cross-reference invoices, and flag discrepancies.",
      results: "Audit processing times dropped by 94%, human error rates were cut to zero, and the system recaptured $1.2M in annual billing leakages within the first quarter."
    },
    faqs: [
      {
        q: "How do you guarantee that our private data is not used for training?",
        a: "We only deploy models via private API endpoints or host open-source LLMs (like Llama-3 or Mistral) on your dedicated cloud infrastructure. We sign legally binding data protection agreements ensuring your proprietary data never leaves your secure VPC boundaries. The data is locked inside your private tenancy, meaning third-party model providers never gain visibility or use your records to train public architectures."
      },
      {
        q: "Can your AI systems handle unstructured data like PDFs and audio?",
        a: "Yes. Our custom ingestion pipelines convert unstructured documents, scanned invoices, audio recordings, and handwritten sheets into clean vector representations, allowing the model to perform highly accurate cognitive reasoning on complex layouts. We write custom parsers that handle tables, charts, nested bullet points, and signatures to ensure no context is lost during digitization."
      },
      {
        q: "What is the typical timeline to deploy a custom AI agent system?",
        a: "A functional sandbox prototype is usually ready within 3 to 4 weeks. Full enterprise integration, security audits, and production rollout generally take between 8 to 12 weeks, depending on system complexity. We follow a modular delivery strategy, allowing you to deploy core functionalities to production while we refine advanced features."
      },
      {
        q: "How do you address AI hallucination in critical workflows?",
        a: "We implement strict guardrails through Retrieval-Augmented Generation (RAG), structured output formatting (Pydantic), and double-pass validation agents. Crucial actions are configured with a human-in-the-loop interface before execution. The AI system drafts decisions and reports, but any final transaction or transmission requires an authorized administrator to review and approve with a single click."
      }
    ]
  },
  "business-automation": {
    title: "Business Process Automation",
    tagline: "Replacing operational drag with flawless kinetic logic.",
    heroDescription: "We architect resilient back-office systems that synchronize databases, manage inventories, and streamline complex business operations without breaking.",
    overview: "Growth breaks manual processes. As transactions scale, operational errors multiply, and software communication gaps turn into bottlenecks. Nanak Tech Solutions designs and builds end-to-end business process automation (BPA) systems that align software, data, and human workflows into a single cohesive engine. We build robust middleware, custom webhooks, and event-driven architectures that eliminate manual data entry and human-prone transfer steps. Our process begins with an in-depth systems audit, documenting manual dependencies and system silos. We then design integrations that link your CRM, accounting, inventory, and fulfillment platforms into an automated operational loop. The result is a resilient digital foundation that allows your business to scale transaction volume without increasing administrative overhead. In addition, we design secure dashboard layers that give your executive team a single pane of glass to watch work states, identify bottlenecks, and run audits on transactions instantly.",
    challenges: [
      {
        title: "Fragmented Software Silos",
        desc: "Enterprises run on dozens of SaaS applications that do not talk to each other. Staff spend hours manually copying customer, sales, and inventory data across platforms, creating immediate data discrepancies. This manual syncing creates duplicate accounts, billing mistakes, and delays in order fulfillment, which ultimately harms customer retention and brand authority."
      },
      {
        title: "Scaling Administrative Overhead",
        desc: "As client acquisition grows, companies are forced to hire a linear stream of administrative personnel just to handle billing, reporting, scheduling, and onboarding tasks, choking operational profitability. This administrative scaling model erodes the cost leverage of growth, meaning that your overhead costs rise almost as fast as your top-line revenue."
      },
      {
        title: "Zero Visibility into Bottlenecks",
        desc: "Without unified system logs, identifying where a process gets stuck is guesswork. Customer satisfaction suffers when orders, approvals, or support requests sit in email queues undetected. Managers struggle to locate performance gaps, resulting in slow operations and unpredictable lead times."
      }
    ],
    solution: "We develop centralized, event-driven middleware using Node.js and Python that connects your disparate APIs. By building custom dashboards, we provide real-time visibility into your entire pipeline. We automate invoicing, customer onboarding, reporting, and scheduling tasks, wrapping them in secure, fault-tolerant architectures with automatic retry mechanisms and instant error alerting. If an external service is temporarily unavailable, our systems queue the transaction and attempt re-delivery, guaranteeing that no sales or customer records are lost in transmission. We construct these systems to handle millions of monthly transactions without degradation in processing performance.",
    benefits: [
      {
        title: "Zero Admin Redundancy",
        desc: "Automate manual data entry, customer creation, contract distribution, and financial bookkeeping tasks entirely, allowing your operations team to focus on customer relationship management."
      },
      {
        title: "Real-Time System Sync",
        desc: "Keep inventory levels, customer status, billing records, and project tracking up-to-date across all platforms within milliseconds of an event."
      },
      {
        title: "Predictable Operational Costs",
        desc: "Scale your transaction and customer volume infinitely without needing to expand your administrative team or pay for bloated software seats."
      },
      {
        title: "Transparent Performance Logs",
        desc: "Gain micro-level insight into every automated workflow with instant error detection and Slack/Teams warnings, ensuring 100% visibility into pipeline health."
      },
      {
        title: "Error Auto-Recovery",
        desc: "Our middleware pipelines include intelligent self-healing networks that automatically retry and resolve temporarily failed requests, ensuring zero data loss."
      },
      {
        title: "Custom Webhook Receivers",
        desc: "Deploy optimized endpoints that listen to external webhooks securely, converting and piping payloads directly to your core databases."
      }
    ],
    process: [
      {
        stepNum: "01",
        title: "Operational Discovery",
        desc: "We analyze your administrative tasks, mapping software interdependencies and identifying manual labor black holes. We interview operational heads to understand custom workflows and document compliance rules."
      },
      {
        stepNum: "02",
        title: "Integration Schema",
        desc: "We design a comprehensive API mapping and database synchronization flow to connect all software platforms. We create data diagrams showing exactly how information moves through your business tools."
      },
      {
        stepNum: "03",
        title: "Middleware Development",
        desc: "We write clean, secure API connectors and queue systems to ensure data flows reliably even under peak loads. We implement validation logic to double-check data formats before they are written to target databases."
      },
      {
        stepNum: "04",
        title: "System Dry-Run",
        desc: "We run parallel shadow testing to verify data accuracy, matching automated entries against historical manual work. This ensures that no data points are missed or misaligned before we deploy live."
      },
      {
        stepNum: "05",
        title: "Launch & Monitoring",
        desc: "We activate the live synchronization, handing over custom monitoring dashboards and alert channels for constant uptime. We run performance audits during the initial launch phase to ensure absolute stability."
      }
    ],
    technologies: ["Node.js", "Python", "PostgreSQL", "Redis", "AWS Lambda", "Stripe API", "Salesforce API", "HubSpot API", "Docker", "Git"],
    industries: ["E-commerce", "Professional Services", "Real Estate", "Manufacturing", "SaaS Companies"],
    caseStudy: {
      title: "Streamlining Client Onboarding for a Real Estate Investment Fund",
      challenge: "The client was manually collecting investor KYC, generating PDFs, and sending payment details, taking over 4 hours per investor.",
      approach: "We built a custom onboarding portal integrated with Plaid, DocuSign, and Stripe, automating compliance checking and portal creation.",
      results: "Onboarding time was cut from 4 hours to 7 minutes. Document completion rates increased by 40%, and the firm processed $15M in capital in 30 days."
    },
    faqs: [
      {
        q: "What happens if one of our SaaS platforms changes its API?",
        a: "We build our automations with strict API version pinning and wrap integrations in automated testing suites. If an external API changes, our monitoring system alerts our engineers instantly, allowing us to deploy updates without system downtime. Most minor API changes are resolved silently behind the scenes without any interruption to your daily business operations."
      },
      {
        q: "Can you automate legacy systems that do not have APIs?",
        a: "Yes. In cases where legacy platforms lack modern API access, we use secure, headless browser automation, database-level replication, or custom screen-scraping connectors to extract and push data reliably. This allows us to bridge the gap between modern cloud tools and older internal servers without requiring a costly system replacement."
      },
      {
        q: "How secure is our financial and client data within these workflows?",
        a: "Security is built into our core. All data is encrypted in transit and at rest using AES-256 standards. We strictly implement the principle of least privilege, ensuring API keys only access the minimal required scopes. We also set up regular security patches, run automated vulnerability checks, and maintain detailed audit logs for compliance."
      },
      {
        q: "Do you build custom portals or use existing integration platforms?",
        a: "While we can build on standard platforms like Make or Zapier for simple tasks, we build custom node/python middleware for complex enterprise logic to ensure scalability, cost efficiency, and absolute reliability. Custom code has zero licensing fees per execution, scales much faster, and allows us to implement custom error handling and complex routing rules."
      }
    ]
  },
  "website-development": {
    title: "Web Engineering & Applications",
    tagline: "Stunning performance meets flawless web execution.",
    heroDescription: "We code custom, high-speed web apps and marketing sites using next-gen front-end architectures that score 100 on Core Web Vitals and convert visitors.",
    overview: "A website is the digital front door of your enterprise. Slow loading times, page jank, and template code reflect poorly on your brand. Nanak Tech Solutions builds bespoke, high-performance web applications and marketing sites designed to captivate and convert. We don't use bloated page builders or generic WordPress templates. Our engineering team writes clean, semantic code using modern architectures (like Vite, Next.js, and Svelte) styled with raw, performant CSS. We focus heavily on layout stability, search engine crawlability, and micro-interactions that make navigation feel natural. Every site we build is optimized for GPU-accelerated rendering, ensuring 60 FPS page transitions and interactions on both mobile and desktop screens. We build with a modular design approach, compiling lightweight javascript bundles that load instantly over 3G networks and perform flawlessly on low-tier mobile devices.",
    challenges: [
      {
        title: "Slow Page Loading & Bounce Rates",
        desc: "Studies show that a 1-second delay in page load times drops conversions by 7%. Bloated templates and unoptimized assets drive potential high-value clients straight to your competitors. A slow website also hurts your keyword rankings on search engines, as Google actively penalizes slow-loading domains under its Core Web Vitals guidelines."
      },
      {
        title: "Low Conversion Architecture",
        desc: "Most websites are designed as static brochures. They lack intentional user journeys, micro-interactions that reward exploration, and logical, conversion-focused layout flows. Visitors arrive but leave without taking action because there is no clear visual narrative, no engagement incentives, and no streamlined contact channel."
      },
      {
        title: "Difficult CMS Maintenance",
        desc: "Marketing teams are often blocked by rigid backend setups or complex code editing. Changing copy or launching a landing page shouldn't require a developer and a sprint cycle. This dependency creates operational bottlenecks, slowing down marketing campaigns and preventing rapid response to market shifts."
      }
    ],
    solution: "We build ultra-fast, static, or server-rendered sites optimized for maximum Core Web Vitals performance. We construct custom headless CMS configurations (using Sanity, Storyblok, or Strapi) that empower your marketing team to edit text, media, and layouts without breaking design patterns or writing code. Our build pipeline compiles page structures into static HTML files served from global CDN edge networks, making your website virtually immune to traffic spikes and database connection crashes.",
    benefits: [
      {
        title: "100/100 Core Web Vitals Score",
        desc: "We optimize images, implement lazy loading, and eliminate render-blocking scripts to ensure near-instant load speeds across all global devices."
      },
      {
        title: "Dynamic Headless CMS Access",
        desc: "Enable your marketing team to create pages and edit content in real-time through intuitive, customized editing interfaces without changing code."
      },
      {
        title: "SEO-Ready Out of the Box",
        desc: "We build with semantic HTML5 markup, structured schema data, index files, and absolute accessibility compliance (WCAG AA standards)."
      },
      {
        title: "Robust Scalability & Uptime",
        desc: "Deploy on global edge networks (Vercel, Netlify, Cloudflare) with automated backups, protecting your site from traffic spikes and DDoS attacks."
      },
      {
        title: "Secure API Gateways",
        desc: "Protect your backend endpoints using edge authentication, rate limiters, and clean data parsing configurations to block malicious requests."
      },
      {
        title: "Modular Style Architecture",
        desc: "Maintainable component structures built with vanilla CSS design systems, avoiding code bloat and ensuring quick style modifications."
      }
    ],
    process: [
      {
        stepNum: "01",
        title: "Tech Stack Selection",
        desc: "We align your project goals with the ideal framework to ensure scalability, security, and future ease of maintenance. We evaluate traffic expectations, editing needs, and backend integrations before writing code."
      },
      {
        stepNum: "02",
        title: "Interface Assembly",
        desc: "We convert approved UI designs into clean, responsive HTML/CSS structures, adhering strictly to architectural grids. We build modular, reusable CSS component styles that avoid utility bloating."
      },
      {
        stepNum: "03",
        title: "CMS Integration",
        desc: "We configure the headless CMS, creating flexible schemas that match our component library for easy editing. We train your content managers to edit typography, upload media, and launch layouts."
      },
      {
        stepNum: "04",
        title: "Optimization & Audit",
        desc: "We perform deep asset compression, lazy loading setup, and strict performance audits on Lighthouse and PageSpeed. We optimize script delivery to ensure render-blocking calls are removed."
      },
      {
        stepNum: "05",
        title: "Global Launch",
        desc: "We hook up production domains, configure SSL certificates, set up redirect rules, and launch on CDN networks. We verify search engine crawler indexing and activate performance monitoring tracking."
      }
    ],
    technologies: ["React", "Next.js", "Vite", "Node.js", "HTML5/CSS3", "Three.js", "GSAP", "Sanity CMS", "Vercel", "Cloudflare"],
    industries: ["Venture Capital", "Luxury Brands", "SaaS Startup", "Architecture & Design", "Corporate Enterprise"],
    caseStudy: {
      title: "Re-Engineering the Digital Presence of an Elite Venture Capital Firm",
      challenge: "The client's legacy WordPress website was slow, failed mobile audit tests, and made editing team roster details painful.",
      approach: "We built a static site using Next.js and Sanity CMS, incorporating custom SVG animations and smooth page transitions.",
      results: "Lighthouse performance scores rose from 42 to 100. Contact page submissions grew by 35%, and editing team bios now takes 30 seconds."
    },
    faqs: [
      {
        q: "What is a headless CMS, and what are its benefits?",
        a: "A headless CMS separates the content database from the visual frontend. This allows us to write ultra-fast, secure frontend code using modern frameworks while giving your editors an easy visual editor to modify text and media. It eliminates the security vulnerabilities of legacy platforms like WordPress, speeds up build times, and allows you to push content to multiple channels (web, mobile, apps) simultaneously."
      },
      {
        q: "Do you build custom e-commerce applications?",
        a: "Yes. We design and build high-performance storefronts using headless Shopify, Stripe integrations, or custom database configurations, optimizing checkout flows to reduce cart abandonment. We focus heavily on layout stability and mobile purchasing performance, ensuring your checkout loads in under 300 milliseconds and processes payments securely."
      },
      {
        q: "How do you ensure our website looks good on all mobile devices?",
        a: "We practice mobile-first engineering. We build fluid, grid-based layouts that dynamically adjust to all screen heights and widths, testing on physical devices to ensure smooth touch performance. We also adapt font sizes, target sizes, and layout compositions for touchscreens so your mobile interface feels like a native mobile app rather than a shrunken desktop site."
      },
      {
        q: "Can you migrate our current content during the redesign?",
        a: "Absolutely. We write custom migration scripts to safely export posts, team profiles, and media from your legacy CMS and clean them before importing them into the new headless setup. We map URL redirects to protect your organic search engine keyword positions, ensuring your SEO traffic is maintained during the system switch."
      }
    ]
  },
  "mobile-apps": {
    title: "Mobile App Engineering",
    tagline: "Native performance, bespoke interface execution.",
    heroDescription: "We build intuitive, high-performance iOS and Android applications with fluid animations, offline capabilities, and secure cloud synchronization.",
    overview: "Mobile apps demand the highest standards of interaction design. A sluggish frame rate, complex navigation, or poor offline behavior will cause users to delete your app. Nanak Tech Solutions engineers premium, custom mobile applications that users love to open daily. We leverage modern cross-platform technologies (like React Native and Flutter) to deliver native-grade animations, fast load times, and access to device features like haptics, biometrics, and push notifications. Our focus is on visual response, memory efficiency, and secure backend sync, ensuring your app runs reliably even in low-connectivity areas. We build with a clean layer structure, ensuring that your business logic is isolated from the UI rendering code, making updates fast and simple to deploy as your offerings expand. We also write custom bridge modules for hardware sensor synchronization, ensuring smooth telemetry records for IoT and corporate equipment monitoring.",
    challenges: [
      {
        title: "Jittery Custom Animations",
        desc: "Poorly optimized app code causes dropped frames during view transitions and scrolling. Users expect smooth transitions that match native iOS/Android behaviors. When custom interactions drop below 60 frames per second, the user experience feels cheap, which directly impacts customer trust and brand value."
      },
      {
        title: "Fragile Data Sync & Offline Modes",
        desc: "Apps that freeze or lose user data when cell signals drop create immediate frustration. Designing clean local caching is complex but necessary to retain users. Users expect to read documents, draft forms, and view status changes even when in airplanes, basements, or rural areas with poor connectivity."
      },
      {
        title: "Slow App Store Approvals",
        desc: "Failing compliance checks, missing privacy details, and poor build settings can delay launch dates by weeks. Navigating Apple and Google guidelines is a specialized hurdle. A single rejection due to a technical misinterpretation can delay product launch campaigns and create immediate friction with stakeholders."
      }
    ],
    solution: "We build optimized React Native and Swift/Kotlin applications with hardware-accelerated animations and offline-first local databases (WatermelonDB/Realm). We configure automated CI/CD pipelines (Fastlane) to push builds directly to App Store Connect and Google Play Console, ensuring smooth updates. By separating concerns between UI rendering threads and database calls, we prevent interface blocks, delivering smooth performance even when loading large records or running heavy operations in the background.",
    benefits: [
      {
        title: "60 FPS Fluid Interactions",
        desc: "We write highly optimized React Native threads that compile directly into native Swift and Kotlin visual controls, keeping frames locked at 60 FPS."
      },
      {
        title: "Robust Offline-First Core",
        desc: "We utilize local SQLite and WatermelonDB caches that store data locally and sync with cloud instances seamlessly once a network connection is found."
      },
      {
        title: "Secured Enterprise Encryptions",
        desc: "We secure user sessions using device keychain controls, biometric verification, and SSL pinning to block data interception attacks."
      },
      {
        title: "Automated Deployments",
        desc: "We establish Fastlane build configurations that compile and distribute updates to testers and app stores automatically on every code push."
      },
      {
        title: "Biometric Access Control",
        desc: "Deploy instant FaceID and Fingerprint authentication layers directly matching secure Apple/Google device security frameworks."
      },
      {
        title: "Smart Push Notification Hub",
        desc: "Deliver user notifications dynamically based on localized timezones, customer preferences, and real-time interaction patterns."
      }
    ],
    process: [
      {
        stepNum: "01",
        title: "Interface Mapping",
        desc: "We outline the interactive app steps, drawing user journeys that reduce click steps and place actions where they fit hand holds naturally."
      },
      {
        stepNum: "02",
        title: "Database Engineering",
        desc: "We design local caching tables and synchronize APIs to keep data aligned across phone databases and corporate cloud platforms."
      },
      {
        stepNum: "03",
        title: "Component Construction",
        desc: "We translate approved mockups into active code, creating custom animations, gesture controls, and hardware API connections."
      },
      {
        stepNum: "04",
        title: "Device Testing Audits",
        desc: "We test code builds on physical phone models, tracking battery drain, layout alignment, memory usage, and loading behaviors."
      },
      {
        stepNum: "05",
        title: "App Store Publishing",
        desc: "We bundle app packages, write store descriptions, configure privacy declarations, and submit builds for developer approval."
      }
    ],
    technologies: ["React Native", "Swift", "Kotlin", "WatermelonDB", "Fastlane", "Firebase API", "AWS Gateway", "Redux Toolkit"],
    industries: ["FinTech", "Healthcare Logistics", "IoT Systems", "On-Demand Platforms", "Corporate Portals"],
    caseStudy: {
      title: "Building a High-Security Telehealth App for Concierge Clinics",
      challenge: "The clinic needed HIPAA-compliant videostreaming and offline patient logs that synchronize securely across devices.",
      approach: "We programmed a React Native application utilizing WebRTC connection protocols and Realm databases for local file logs.",
      results: "Approved by Apple on first submission. The app holds a 4.9 rating, processes 10,000 monthly bookings, and maintains zero sync issues."
    },
    faqs: [
      {
        q: "What are the benefits of cross-platform frameworks?",
        a: "Frameworks like React Native compile to native components, sharing 90% of code across iOS and Android. This cuts initial development costs and future updates by 40% while maintaining native-grade performance, touch responses, and access to phone hardware features."
      },
      {
        q: "How do you protect private app data?",
        a: "We encrypt local databases using AES-256 keys, store user credentials securely using iOS Keychain and Android Keystore, and require biometric checks (FaceID/TouchID) for transaction clearances."
      },
      {
        q: "Do you handle the App Store publishing details?",
        a: "Yes. We manage the entire store configuration, including screen captures, privacy terms, age ratings, metadata keywords, and compliance validations, guiding the app past reviews without delays."
      },
      {
        q: "Can you build integrations for custom Bluetooth hardware?",
        a: "Absolutely. We write custom native modules to link apps with BLE (Bluetooth Low Energy) devices, handling data streams from medical sensors, smart home locks, and telemetry tracking chips."
      }
    ]
  },
  "ui-ux-design": {
    title: "UI / UX Design Studio",
    tagline: "Sculpting digital interfaces with architectural clarity.",
    heroDescription: "We design bespoke digital experiences, interfaces, and layouts that prioritize visual rhythm, semantic layout structure, and physical interaction feel.",
    overview: "Elite design is not about decoration; it is about cognitive clarity and physical rhythm. Interfaces should guide the eye, reduce friction, and make interaction feel rewarding. Nanak Tech Solutions designs bespoke web and mobile interfaces that combine beautiful typography with layouts that feel functional and premium. We skip standard UI templates to draft bespoke visual layouts designed for your exact audience. Our design system methodology ensures that spacing, type hierarchies, grid structures, and interactive states remain mathematically consistent. By designing digital products that feel physically responsive, we build immediate brand trust and drive higher customer retention. We balance creative experimentation with strict layout grids, producing interfaces that look highly unique while remaining intuitive for users to navigate.",
    challenges: [
      {
        title: "Confusing User Flows & Drop-Offs",
        desc: "When users struggle to find information or complete basic tasks, they leave. Cluttered layouts, missing visual hierarchies, and complex navigation flows kill product adoption. This user friction results in abandoned carts, dropped registrations, and negative product reviews, eroding your marketing ROI."
      },
      {
        title: "Disconnected Design Systems",
        desc: "Without a structured design system, layout inconsistencies accumulate. Buttons, fonts, and card styles vary page-by-page, diluting brand credibility and confusing users. It also slows down development speed, as engineers must build custom components for every page rather than reusing verified design tokens. This visual divergence makes it hard to maintain quality."
      },
      {
        title: "Developer Hand-Off Friction",
        desc: "Beautiful designs often fall apart during development because layouts are built without grid logic or lack comprehensive interaction specs. Without detailed guidelines on hover states, responsive layouts, and font hierarchies, developers are forced to make assumptions, leading to UI misalignment and constant feedback cycles."
      }
    ],
    solution: "We draft interactive prototypes in Figma using strict layout grids and auto-layout systems. We build comprehensive, production-ready design tokens and UI component libraries, detailing hover states, click behaviors, and animations to ensure developers build interfaces exactly as designed. Our hand-off files contain clean specs, CSS property mappings, and layout coordinates, bridging the gap between artistic vision and code implementation. We also run regular design reviews during implementation sprints to check margins, eases, and typographic alignment.",
    benefits: [
      {
        title: "Seamless Journey Layouts",
        desc: "We structure interfaces that resolve decision flows naturally, reducing checkout clicks and signup steps to maximize site conversion metrics."
      },
      {
        title: "Interactive Motion Testing",
        desc: "We prototype animations, dropdown menus, hover responses, and button clicks, ensuring developer teams match static designs identically."
      },
      {
        title: "Absolute Design Consistency",
        desc: "Every typography pairing, button radius, margin gap, and form style is governed by a unified system built for responsive performance."
      },
      {
        title: "Strict User Testing Loops",
        desc: "We validate design iterations against active client testers, mapping screen tracking patterns to eliminate usage bottlenecks."
      },
      {
        title: "Interactive Figma Components",
        desc: "Construct high-fidelity Figma components with complex micro-interactions, simulating the final product experience accurately."
      },
      {
        title: "Bespoke Design Systems",
        desc: "Structure scalable color palettes, font files, and component tokens that align perfectly with your corporate brand guidelines."
      }
    ],
    process: [
      {
        stepNum: "01",
        title: "User Profile Audits",
        desc: "We study target user habits, screen environments, and product expectations to set visual limits and guide interface design. We create user personas representing core buyer groups."
      },
      {
        stepNum: "02",
        title: "Grid Wireframing",
        desc: "We map out layout structures, aligning information priorities, button placements, and columns before introducing styles. We check layout balances across window dimensions."
      },
      {
        stepNum: "03",
        title: "Style & Element Identity",
        desc: "We establish font combinations, luxury color sets, and spacing scales that represent your brand positioning. We create visual libraries for forms, buttons, and menus."
      },
      {
        stepNum: "04",
        title: "Prototype Animations",
        desc: "We link screens in Figma mockups, defining custom scroll speeds, menu expansions, active states, and interactive transitions. We verify screen flows feel logical."
      },
      {
        stepNum: "05",
        title: "Design System Assembly",
        desc: "We compile all UI assets into an organized Figma component library with clean developer specs, variables, style definitions, and layout grids."
      }
    ],
    technologies: ["Figma", "Adobe Suite", "Protopie", "CSS Grid Layouts", "SVG Vector Assets", "Typographic Scale Grids"],
    industries: ["Venture Capital", "Luxury E-commerce", "SaaS Enterprises", "Boutique Agencies", "Corporate Portfolios"],
    caseStudy: {
      title: "Designing the Portal Experience for an Enterprise Analytics Platform",
      challenge: "The client's software screen was cluttered with charts, resulting in high employee training times and contract churn.",
      approach: "We restructured the portal using asymmetrical grids, progressive page cards, and clean typography scales.",
      results: "Employee onboarding times fell by 70%. Task completion rates grew by 45%, and the product secured a $22M Series B round."
    },
    faqs: [
      {
        q: "What makes your design system process different?",
        a: "We construct design libraries on atomic coding rules, defining basic spacing, margins, and text lines before building UI boxes. This keeps layouts consistent and allows us to make global updates across hundreds of screens in seconds. It bridges the gap between design concepts and clean production code."
      },
      {
        q: "Do you run user testing rounds during design?",
        a: "Yes. We create functional clickable prototypes and observe target users navigating key tasks, refining visual paths, navigation logic, and text sizes based on observed behaviors. This data-driven layout tuning guarantees high product adoption rates."
      },
      {
        q: "How do you coordinate design hand-offs with developers?",
        a: "Our designers work closely with developers from day one. We hand over Figma libraries containing clean autolayout groups, responsive constraints, style tokens, and motion specifications, eliminating guesswork and coding drift during build phases."
      },
      {
        q: "Can you design for both web portals and native phone apps?",
        a: "Absolutely. We build design grids that adapt layout patterns for iOS and Android native guidelines while preserving a unified brand identity across platforms. We adapt targets, margins, and inputs to feel native to touch screens and desktop mouse users."
      }
    ]
  },
  "website-design": {
    title: "Bespoke Web Design",
    tagline: "Editorial storytelling in the browser window.",
    heroDescription: "We design immersive, story-driven websites that capture user attention with bold typography, balanced negative space, and premium layouts.",
    overview: "Generic templates suggest a generic product. Nanak Tech Solutions designs bespoke web interfaces for brands that refuse to look ordinary. We treat the browser window as an editorial canvas, creating custom layouts that prioritize layout grids, balanced negative space, and strong typographic hierarchies. Our designers collaborate directly with our engineers, ensuring every animation, scroll transition, and canvas effect supports your brand story. We avoid trend-chasing patterns (like neon glows and floating cards) in favor of timeless editorial structures that project authority, build trust, and drive high-ticket conversions. We analyze your brand positioning, selecting color schemes and layout rhythms that express your unique corporate voice. In addition, we design interactive storytelling components that react as the visitor scrolls, rewarding curiosity and keeping reader engagement levels high.",
    challenges: [
      {
        title: "Template Visual Conformity",
        desc: "When every site in your industry looks like the same Tailwind template, you become a commodity. Brands struggle to differentiate themselves online, losing customer attention. If your website looks like a generic SaaS template, prospective clients will assume your services are generic too. This conformity limits brand recall and degrades corporate authority."
      },
      {
        title: "Poor Brand Narrative Flow",
        desc: "Websites often dump information without guiding visitors through a structured argument. Without clear transitions, visitors fail to understand your unique value proposition. They skim through pages without feeling the premium quality of your brand, resulting in low average session durations and high bounce rates. Content must be paced visually to convince reader attention."
      },
      {
        title: "Lack of High-End Polish",
        desc: "Subtle design details like micro-interactions, layout borders, and typographic rhythm separate premium brands from the pack. Missing these cues dilutes trust. A luxury brand must feel luxury in every corner, from the speed of page shifts to the physics of its hover state responses. Without this alignment, websites fail to convert elite enterprise clients."
      }
    ],
    solution: "We design custom web layouts with distinct visual styles, structured layout grids, and premium typography scales. We build immersive storytelling journeys using scroll-linked visual systems, ensuring each section transitions into the next as one continuous digital experience. We coordinate layouts directly with copywriter flows, placing CTAs and graphics where they naturally align with the reader's interest. We optimize layout structures to guide scanning habits, making value arguments clear instantly.",
    benefits: [
      {
        title: "Kinetic Page Structures",
        desc: "We combine custom SVG elements and lightweight scroll animations to draw visitor eyes straight to core marketing offers."
      },
      {
        title: "Mobile-First Fluidity",
        desc: "Every layout scales perfectly across laptops, tablets, and phones, maintaining correct proportions and font sizes."
      },
      {
        title: "Headless Content Schemes",
        desc: "We design layout structures ready for headless CMS setups, ensuring visual blocks are fully reusable across future campaigns."
      },
      {
        title: "High-Contrast Readability",
        desc: "Strict compliance with contrast rules, color balances, and typographic scales to ensure content is accessible to all."
      },
      {
        title: "Responsive Layout Testing",
        desc: "Design pixel-perfect layout sheets optimized for desktop, tablet, and mobile dimensions, ensuring visual continuity."
      },
      {
        title: "SEO Content Mapping",
        desc: "Coordinate structure hierarchies that index key topics naturally, making your visual sections rank high on search engines."
      }
    ],
    process: [
      {
        stepNum: "01",
        title: "Creative Storyboarding",
        desc: "We define page narratives and content flows, ensuring text sections build a unified argument before styling. We compose a structural content map to outline values."
      },
      {
        stepNum: "02",
        title: "Palette & Font Pairing",
        desc: "We select typeface scales, color ranges, and imagery assets to anchor the premium tone of your project. We coordinate tones to match corporate branding parameters."
      },
      {
        stepNum: "03",
        title: "Grid Composition",
        desc: "We compose screens using custom columns, asymmetrical spacing blocks, and structured borders. We place content elements to guide scanning patterns naturally."
      },
      {
        stepNum: "04",
        title: "Motion Specification",
        desc: "We program custom hover behaviors, button responses, and page loaders to maintain a smooth experience. We document eases and speeds for frontend implementation."
      },
      {
        stepNum: "05",
        title: "Developer Synthesis",
        desc: "We run reviews with our build engineers, verifying that canvas elements and scroll lines compile cleanly. We check mobile adjustments to protect layout stability."
      }
    ],
    technologies: ["Figma", "Vector SVGs", "Google Fonts API", "Layout Spacing Tokens", "WebGL Coordination Tools"],
    industries: ["Venture Capital", "Luxury Property", "Boutique Consulting", "Design Studios", "Enterprise Tech"],
    caseStudy: {
      title: "Designing the Digital Home for an Architectural Design Studio",
      challenge: "The client needed a digital portfolio that highlighted their physical spaces without clutter or slow speeds.",
      approach: "We composed an editorial interface using broad whitespace, asymmetrical grids, and slate-line boundaries.",
      results: "Received an Awwwards Honorable Mention. Online queries grew by 60%, and average view times rose to 4.5 minutes."
    },
    faqs: [
      {
        q: "What makes your web design process unique?",
        a: "We do not use page builders, themes, or templates. We treat your browser window as a blank canvas, designing custom grid structures and interactions that express your specific brand positioning. Every button, menu, card, and line is drafted from scratch to suit your visual story."
      },
      {
        q: "How do you select fonts and colors?",
        a: "We base selections on market positioning audits, pairing clean display typefaces with muted palettes (like charcoal, stone, and bronze) to project high-end quality. We avoid neon trends, focusing on balanced type weights and natural contrasts that stay readable over time."
      },
      {
        q: "Do you design for mobile views?",
        a: "Yes. Every desktop layout is completely restructured for tablet and phone dimensions, ensuring that images and editorial text hierarchies remain readable on small screens. We adjust margins and navigation maps so touch interactions feel native."
      },
      {
        q: "How do you verify developers follow your design specs?",
        a: "Our designers and developers work in integrated teams. We inspect developer builds, verifying line margins, type sizes, and animation eases against approved Figma specs before launch. This unified approach eliminates layout offsets."
      }
    ]
  },
  "brand-strategy": {
    title: "Brand Strategy & Identity",
    tagline: "Clarifying market position, detailing brand expression.",
    heroDescription: "We build timeless verbal and visual brand foundations, positioning enterprises to stand out and capture high-value market share.",
    overview: "A premium brand is built on a clear market position. Without strategic clarity, marketing spend is wasted and logos look generic. Nanak Tech Solutions defines brand strategy and design guidelines that position your company for high-value growth. We audit your competitors, research your target buyers, and clarify your brand message. From there, we design complete visual identity systems, selecting typefaces, color palettes, and editorial details that project authority. We provide extensive brand guidelines, helping your team present a unified brand presence across all digital channels. We help companies refine their core values and translate them into visual cues that signal quality, reliability, and technical competence. By establishing a clear brand voice, we help your business cut through market noise and connect directly with high-value enterprise accounts.",
    challenges: [
      {
        title: "Undifferentiated Brand Positioning",
        desc: "When companies use the same messaging as their competitors, they are forced to compete on price. Standing out requires a distinct brand voice and clear differentiators. Without this clarity, marketing messages fall flat and target customers struggle to see why they should pay a premium for your services. You end up looking like a commodity rather than a market leader."
      },
      {
        title: "Inconsistent Visual Assets",
        desc: "Marketing assets created by different teams without clear guidelines dilute brand credibility and create visual confusion. Slide decks, social banners, and website copy that use different styles suggest an organization that lacks attention to detail, which harms enterprise sales. Enterprise buyers notice layout gaps and downgrade trust."
      },
      {
        title: "Weak Verbal Message",
        desc: "Enterprises struggle to explain what they do clearly. Vague corporate speak confuses buyers and slows sales cycles. If a buyer cannot understand your value proposition in 5 seconds, they will leave. We clarify your copy, aligning headings with what buyers actually care about. We translate technical features into clear business value."
      }
    ],
    solution: "We run workshops to define your brand positioning, core message, and visual direction. We build clean brand assets, corporate typography guidelines, and style handbooks that align your team around a premium identity. We output complete assets, logo lockups, corporate patterns, and color system specifications designed to perform consistently across screens, print formats, and physical products. We establish standard guidelines for writing style, tone, and brand messaging across all digital assets.",
    benefits: [
      {
        title: "Mathematical Market Analysis",
        desc: "We audit market niches, search volumes, and search term valuations to build brand positioning statements grounded in hard data."
      },
      {
        title: "Cohesive Visual Systems",
        desc: "Establish clear style guidelines defining color codes, typography pairings, grid structures, and usage policies."
      },
      {
        title: "Direct Strategic Alignment",
        desc: "Map your technical features directly to customer business needs, translating complex code advantages into clean value messages."
      },
      {
        title: "Long-Term Value Protection",
        desc: "Position your brand as an industry leader, protecting high product pricing against low-cost market alternatives."
      },
      {
        title: "Competitor Landscape Analysis",
        desc: "Identify gaps in competitor branding and positioning to craft unique, defensible market identities for your company."
      },
      {
        title: "Comprehensive Brand Guidelines",
        desc: "Bespoke style manuals detailing color codes, typography pairings, grid systems, and tone of voice rules."
      }
    ],
    process: [
      {
        stepNum: "01",
        title: "Market Audits",
        desc: "We analyze competitor visual identities and verbal messages, locating empty niches where your brand can stand out. We study client profiles to understand visual triggers."
      },
      {
        stepNum: "02",
        title: "Positioning Workshops",
        desc: "We define your ideal buyer profiles, primary corporate messages, brand values, and core elevator pitches. We align team visions around a single market position."
      },
      {
        stepNum: "03",
        title: "Visual Identity Design",
        desc: "We draft clean brand marks, typography guidelines, palette directions, and image standards that represent your firm. We design assets for print, web, and internal tools."
      },
      {
        stepNum: "04",
        title: "Collateral System Review",
        desc: "We apply visual rules to business cards, presentation slides, report sheets, and banners to verify layout consistency. We adjust designs to perform on dark and light layouts."
      },
      {
        stepNum: "05",
        title: "Style Guidelines Hand-off",
        desc: "We bundle all final vector assets and layout rules into a clean brand handbook for your internal teams. We support launch assets and team training steps."
      }
    ],
    technologies: ["Figma Workspace", "Adobe Illustrator", "Corporate Brand Manuals", "Typography Specs", "Color Token Schemes"],
    industries: ["Venture Capital", "Luxury Commerce", "B2B Logistics", "Enterprise Software", "Corporate Consulting"],
    caseStudy: {
      title: "Rebranding an Enterprise Cybersecurity Firm",
      challenge: "The client looked like a generic software startup, failing to win trust with senior IT security buyers.",
      approach: "We redesigned their identity with slate-grey palettes, clean serif typefaces, and risk-focused copy.",
      results: "The firm secured three new enterprise clients worth $4M within 60 days of launching the updated brand identity."
    },
    faqs: [
      {
        q: "What is included in a brand strategy manual?",
        a: "Our brand handbooks contain market positioning statements, elevator pitches, primary and secondary logo lockups, type scales, color swatches, icon sets, slide layouts, and print guidelines. We write style examples to show content teams how to apply copy rules in ads, blog articles, and social posts."
      },
      {
        q: "How long does a brand identity project take?",
        a: "A complete strategy and visual identity project generally takes between 6 to 8 weeks, including competitive audit, direction alignment, design reviews, and asset hand-off. We run parallel work streams to deliver core assets early for immediate campaign use."
      },
      {
        q: "Can you refresh an existing corporate logo?",
        a: "Yes. We offer brand refreshes, preserving your historical name recognition and brand equity while updating visual assets for modern digital displays. We clean line ratios, improve color dynamics, and refine margins to make assets perform on modern web interfaces."
      },
      {
        q: "How do we receive our final visual assets?",
        a: "We export all logos and visual elements in vector print formats (EPS, PDF) and web formats (SVG, PNG), along with a linked Figma library for dev access. This keeps all assets aligned and makes future updates simple to execute across your organization."
      }
    ]
  },
  "digital-marketing": {
    title: "Editorial Digital Marketing",
    tagline: "Connecting stories with high-value audiences.",
    heroDescription: "We build integrated marketing campaigns that combine content, SEO, and paid media to drive pipeline growth and conversions.",
    overview: "Premium marketing requires a balance of story and data. Nanak Tech Solutions designs digital marketing campaigns that build brand authority while driving conversions. We focus on search engine optimization, editorial content production, and paid media management. Our team maps your buyer journey, creating content that answers client objections and drives pipeline growth. We prioritize analytics, setting up clean attribution models so you see the return on your marketing spend. We help enterprise brands build inbound lead pipelines, combining educational copy with advertising targeting to capture prospects when they are actively looking to purchase. Our methodology avoids intrusive popups and generic sales pitches, using editorial authority to build trust. We design custom advertising and outreach assets that align with your corporate guidelines, ensuring that campaigns project brand quality while generating high-value pipeline opportunities. By implementing advanced audience segmentation, we make sure that your ad budget is directed exclusively at relevant corporate buyers, avoiding high-churn consumer traffic.",
    challenges: [
      {
        title: "High Ad Spend, Low Conversions",
        desc: "Generic ad campaigns drive traffic but fail to convert high-value B2B buyers, leading to wasted marketing budget. Advertisers often focus on clicks rather than closed sales, creating vanity metrics that do not translate into company revenue or sales pipeline growth. This lack of conversion-driven structure means you pay for traffic that leaves immediately without interacting with your brand."
      },
      {
        title: "Weak Search Engine Presence",
        desc: "Without an intentional search strategy, companies miss out on high-intent search traffic, relying entirely on paid ads. This creates a dependencies on rising ad costs, making customer acquisition expensive and unsustainable as ad networks increase click pricing. A weak SEO foundation means you lose out on organic leads that actively search for your solutions daily."
      },
      {
        title: "Disconnected Campaign Messaging",
        desc: "Fragmented campaigns across platforms dilute your brand message and confuse potential buyers. When LinkedIn ads, Google search landing pages, and email follow-ups do not share a single visual style and tone, prospects drop out of the sales funnel. Inconsistency in messaging signals a lack of professional execution, driving buyers to more unified competitors."
      }
    ],
    solution: "We build digital marketing campaigns that align search engine presence with clear paid media funnels. We manage search strategy, ad platforms, and conversion analytics, providing clear reports on customer acquisition costs. We optimize every touchpoint in the funnel, from the initial ad click to landing page layouts, copy, and contact forms, ensuring a seamless user experience that drives form fills and booking calls. We also establish tag systems and custom event logs to track visitor patterns, allowing us to tweak landing page performance and target parameters dynamically.",
    benefits: [
      {
        title: "High-Intent Lead Sourcing",
        desc: "We focus budgets on searches with transactional intent, filtering out casual queries to lower client acquisition costs."
      },
      {
        title: "Clean Tracking Dashboards",
        desc: "We deploy GA4, GTM, and custom pixel layers to attribute leads, phone calls, and form submissions to specific campaigns."
      },
      {
        title: "Dynamic Retargeting Loops",
        desc: "Build automated remarketing lists that re-engage lost website visitors with targeted messaging across social platforms."
      },
      {
        title: "Continuous Budget Tuning",
        desc: "We audit ad positions, click costs, and conversion numbers daily, reallocating budget to campaigns that drive sales."
      },
      {
        title: "Negative Keyword Filtering",
        desc: "Optimize ad spend budgets by blocking irrelevant searches, ensuring your ads only trigger for high-intent queries."
      },
      {
        title: "Cross-Channel Remarketing",
        desc: "Build unified marketing loops that target interested visitors across Google, Meta, and LinkedIn networks simultaneously."
      }
    ],
    process: [
      {
        stepNum: "01",
        title: "Performance Audits",
        desc: "We review past campaign performance, landing page conversions, traffic sources, and analytics metrics to locate leakage points. We check tracking codes, ad copy history, and competitor positioning to build a baseline."
      },
      {
        stepNum: "02",
        title: "Search & Buyer Strategy",
        desc: "We research keyword opportunities and map out ad targets based on decision-maker habits and needs. We construct detailed buyer profiles and define negative keywords to block unqualified traffic."
      },
      {
        stepNum: "03",
        title: "Funnel Setup & Assets",
        desc: "We write ad copy, design custom visual templates, and assemble fast landing pages built for high conversion responses. We integrate tracking codes and connect forms with your sales team CRM tools."
      },
      {
        stepNum: "04",
        title: "Campaign Management",
        desc: "We deploy paid ads, tracking conversion rates, adjusting bid variables, and scaling budgets on high-converting ads. We run ad copy tests weekly to optimize click-through rates and acquisition costs."
      },
      {
        stepNum: "05",
        title: "Attribution Synthesis",
        desc: "We connect CRM pipelines with campaign analytics, supplying clear reports on acquisition costs and closed revenue. We review results with your executive team to align marketing spend with business goals."
      }
    ],
    technologies: ["Google Analytics 4", "Google Tag Manager", "LinkedIn Ads", "Google Ads", "SEMrush", "Hotjar Conversions"],
    industries: ["Venture Capital", "B2B SaaS", "Corporate Legal", "Enterprise Logistics", "Consulting Firms"],
    caseStudy: {
      title: "Scaling Lead Acquisition for a FinTech SaaS Brand",
      challenge: "The client faced high acquisition costs on paid platforms and had zero search engine visibility for valuable search terms.",
      approach: "We re-aligned landing page copy, updated keyword bidding targets, and launched technical SEO articles.",
      results: "Lead volume grew by 120% in 12 weeks, while cost-per-lead dropped by 40%, generating $2.4M in pipeline value."
    },
    faqs: [
      {
        q: "What ad channels work best for B2B brands?",
        a: "We find Google Search is best to capture prospects searching for immediate solutions, while LinkedIn Ads work best to reach specific corporate buyers by company size and job title. By running search and social ads in parallel, we build brand awareness and capture high-intent inquiries simultaneously."
      },
      {
        q: "How do you track conversions?",
        a: "We configure Google Tag Manager, GA4, and platform tracking cookies to measure form submissions, button clicks, page visits, and call bookings, ensuring data is 100% accurate. We also set up offline conversion tracking to map sales contracts back to the original ad."
      },
      {
        q: "Do you design the ad creative and copy?",
        a: "Yes. Our creative team handles copywriting, layout designs, landing page assembly, and visual asset production to ensure campaigns look professional. We make sure all ad designs match your brand guidelines and present a clean, high-end visual presence."
      },
      {
        q: "What is your minimum budget requirement?",
        a: "We work with clients starting at a minimum ad spend of $5,000 per month. This budget level ensures we collect enough conversion data to optimize campaigns. It allows us to run multiple ad variations and landing page tests to find the most cost-effective acquisition routes."
      }
    ]
  },
  "seo": {
    title: "Organic Search & SEO",
    tagline: "Securing organic visibility for key search queries.",
    heroDescription: "We build technical and editorial search engine foundations, ranking your brand for high-intent queries that drive conversions.",
    overview: "Organic search is the most cost-effective customer acquisition channel. Paid ads stop the moment budgets dry up, but a strong search presence generates high-intent traffic for years. Nanak Tech Solutions designs and executes technical and content SEO strategies that rank your business for valuable search terms. We audit site architecture, optimize page speeds, build clean schemas, and draft content hubs that build organic authority. We focus on search intent, mapping topics to what buyers search for when they are ready to hire your agency. We perform technical cleanup to ensure search engines index your pages correctly, avoiding duplicate contents and indexing errors. Our approach goes beyond standard keyword stuffing; we write comprehensive, authoritative resource hubs that solve complex user queries and project your brand's technical capability. We analyze search volume distributions, technical crawling limits, and backlink networks to design long-term search growth plans.",
    challenges: [
      {
        title: "Low Organic Traffic",
        desc: "Websites that do not rank on page one of Google miss out on high-intent customer search traffic. Potential buyers actively searching for solutions find your competitors instead, resulting in missed revenue opportunities and high reliance on outgoing sales outreach. This search gap leaves your brand invisible to buyers researching platforms. Without high page rankings, your digital footprint remains minimal, capping organic growth."
      },
      {
        title: "Technical Search Barriers",
        desc: "Slow load times, broken links, and poor mobile rendering block search bots from indexing your site pages. If your website has layout shift issues or duplicate pages, search engines will downgrade your domain authority, burying your pages below competitors. These indexing blocks prevent your quality content from ever being seen by prospective leads, wasting content writing spend."
      },
      {
        title: "High Search Volume, Zero Value",
        desc: "Ranking for generic terms drives unqualified traffic that bounces, wasting bandwidth without driving sales. It is better to rank for a low-volume keyword used by corporate decision-makers than a high-volume keyword searched by casual students. Target keywords must align with commercial purchase intent to drive real sales pipeline value. We audit keywords to align search terms with buying signals."
      }
    ],
    solution: "We run technical website audits to clear indexing issues, speed up page loading, and implement structured schemas. We build keyword strategies that focus on buyers, writing deep articles that position your brand as the expert. We setup search monitoring pipelines, tracking keyword positions, click volumes, and conversion sources, adjusting our writing schedules to target high-yield search terms. We write detailed meta tags, configure URL structures, and build authoritative internal link architectures to guide search engines through your site. We also establish structured schemas and breadcrumb arrays to capture rich snippet listings in search results.",
    benefits: [
      {
        title: "Clean Crawler Pathing",
        desc: "Eliminate duplicate index structures, fix redirect loops, and optimize page load speeds so search bots can crawl your pages easily."
      },
      {
        title: "High-Authority Content Plans",
        desc: "Establish content strategies around topics with high search potential, writing articles that position your team as experts."
      },
      {
        title: "Structured Schema Maps",
        desc: "Inject schema code into your pages to help search engines index your services, reviews, and case study outcomes clearly."
      },
      {
        title: "Sustainable Position Growth",
        desc: "Build high-quality backlinks and clean link structures to grow your search rankings without risking search engine penalties."
      },
      {
        title: "Schema Markup Layouts",
        desc: "Embed structured schema code to display rich snippets, reviews, and event details directly in Google search results."
      },
      {
        title: "Internal Link Optimization",
        desc: "Map optimal page relationships to distribute domain authority naturally, ranking your target conversion pages higher."
      }
    ],
    process: [
      {
        stepNum: "01",
        title: "Technical Site Audits",
        desc: "We run crawl checks, identifying index issues, layout shifting problems, slow page response times, and broken links. We check mobile layout behaviors and evaluate server response configurations."
      },
      {
        stepNum: "02",
        title: "Keyword Analysis",
        desc: "We find search queries used by target buyers when research and purchasing options, aligning keywords with user intent. We evaluate competitor keyword maps and target search volumes."
      },
      {
        stepNum: "03",
        title: "On-Page Optimization",
        desc: "We update title tags, rewrite metadata descriptions, add heading systems, and format structured schema data. We align keywords inside content headings to clarify topics for crawlers."
      },
      {
        stepNum: "04",
        title: "Editorial Copywriting",
        desc: "We draft in-depth content articles that satisfy user search intent, explain solutions, and naturally lead to consultation steps. We keep content readable, structured, and informative."
      },
      {
        stepNum: "05",
        title: "Performance Monitoring",
        desc: "We monitor keyword index positions, organic impressions, search clicks, and landing page form submissions. We compile ranking logs and adjust content focus based on monthly data."
      }
    ],
    technologies: ["SEMrush", "Google Search Console", "Google Analytics 4", "Screaming Frog Crawler", "Structured Schema Data", "Ahrefs API"],
    industries: ["Enterprise Logistics", "B2B SaaS", "Corporate Legal", "Specialized Healthcare", "Venture Capital"],
    caseStudy: {
      title: "Increasing Organic Leads for a Mid-Market B2B Consultancy",
      challenge: "The client paid high PPC costs and wanted to build a permanent organic inbound channel for key terms.",
      approach: "We cleared code issues, updated schema properties, and launched an educational search content hub.",
      results: "Search impressions grew by 300% in 6 months, driving a 150% rise in organic leads and lowering search CAC by 65%."
    },
    faqs: [
      {
        q: "How long does it take to rank for keywords?",
        a: "Search engine indexing can happen in days, but ranking competitive search queries on page one generally takes between 3 to 6 months of technical optimization and content publishing. SEO is a long-term compound marketing asset that requires consistent tracking."
      },
      {
        q: "What is the role of technical SEO?",
        a: "Technical SEO focuses on optimizing website code, page speed, mobile compatibility, URL redirect structures, and index formatting so search engine crawlers can scan and list your pages. It ensures there are no coding bugs blocking indexing crawlers."
      },
      {
        q: "Do you write content for our pages?",
        a: "Yes. Our copywriting team drafts educational, search-optimized content blocks based on keyword strategies approved by your team. We ensure the tone is professional, technical details are accurate, and copy is conversion-focused."
      },
      {
        q: "How do you measure SEO campaign performance?",
        a: "We track organic impressions, click-through rates, target keyword positions, and organic goal conversions using Google Search Console and GA4, giving you transparent visibility into keyword traffic value."
      }
    ]
  },
  "performance-marketing": {
    title: "Performance Marketing",
    tagline: "Maximizing advertising return with clean data pipelines.",
    heroDescription: "We build and optimize paid acquisition campaigns across Google, Meta, and LinkedIn, focusing on client conversion metrics.",
    overview: "Paid ads should be a predictable customer acquisition machine, not a speculative expense. Nanak Tech Solutions designs and manages performance marketing campaigns focused on client conversions. We write ad copy, design optimized landers, and set up conversion tracking systems. Our team monitors click data, bidding strategies, and cost-per-acquisition metrics, adjusting targets to maximize return on ad spend (ROAS). We design campaigns that target specific job roles, enterprise sizes, and purchase intents, ensuring your ad budget is focused on high-yield accounts. In addition, we configure automated bidding scripts that adjust keyword costs in real-time, protecting your advertising spend from competitor click spams and capturing top-page placements during peak search hours. We also construct custom audience tracking loops, allowing us to retarget engaged site visitors with tailored messaging across LinkedIn and Google Display networks.",
    challenges: [
      {
        title: "Poor Ad Target Quality",
        desc: "Ad budget is wasted when campaigns serve ads to casual searchers rather than target corporate buyers. Without strict negative keyword filters and audience exclusions, you pay for clicks that have zero chance of converting into sales contracts. This untargeted ad spend inflates acquisition costs and dilutes campaign performance statistics. You end up bidding on high-volume terms that have zero buyer intent."
      },
      {
        title: "Inaccurate Conversion Metrics",
        desc: "Without clean conversion tracking, companies struggle to identify which ad campaigns drive sales. If you cannot trace a sales contract back to a specific keyword or ad creative, you cannot optimize your budget or scale winning campaigns. This data gap makes it impossible to calculate true return on investment accurately, leading to incorrect budget allocations."
      },
      {
        title: "Ad Creative Fatigue",
        desc: "Ad click-through rates decline when creatives are not updated, increasing conversion costs. Running the same banners and copy for months causes audience blindness, pushing up click pricing and reducing lead volumes. Keeping copy and ad graphics fresh requires constant monitoring, graphic design updates, and copy experiments."
      }
    ],
    solution: "We build custom target audiences using buyer data and track conversions across ad platforms. We refresh ad designs and run tests on landing page layouts to lower acquisition costs. We connect campaign tracking with your internal sales database, ensuring we optimize ads based on closed revenue rather than just lead volumes. We build custom landing pages that load instantly and feature clear, high-converting copy that addresses target pain points directly. We deploy automated alerts that warn us if ad performance indicators drop, allowing us to adjust bids instantly.",
    benefits: [
      {
        title: "High-Intent Search Targeting",
        desc: "We target search keywords that indicate a ready buyer, avoiding high-volume generic keywords that waste advertising budgets."
      },
      {
        title: "Bespoke Landing Pages",
        desc: "Design and build fast-loading custom landing pages optimized for a single offer, boosting visitor-to-lead conversion rates."
      },
      {
        title: "Automated Bidding Logic",
        desc: "Utilize smart bidding algorithms to adjust bids in real-time, maximizing conversion volume for your budget."
      },
      {
        title: "Continuous Campaign Audits",
        desc: "We test ad copy variations and banner layouts constantly, keeping click-through rates high and acquisition costs low."
      },
      {
        title: "Dynamic Bidding Strategies",
        desc: "Integrate Google Ads and Meta smart bidding algorithms to automatically adjust bids in real-time for maximum ROAS."
      },
      {
        title: "A/B Landing Page Testing",
        desc: "Constantly test layout variations, heading copies, and form structures to identify high-converting combinations."
      }
    ],
    process: [
      {
        stepNum: "01",
        title: "Account Audits",
        desc: "We evaluate past campaign performance, search keywords, negative filter lists, and conversion logs. We audit landing pages and copy setups to discover where budgets are leaking. We check Google Tag setups to confirm attribution."
      },
      {
        stepNum: "02",
        title: "Target Audience Definition",
        desc: "We build target segments by company size, job title, search intent, and past client data profiles. We verify that ad displays focus exclusively on decision-makers. We construct custom segments on LinkedIn and Google."
      },
      {
        stepNum: "03",
        title: "Ad Design & Copy",
        desc: "We write conversion-focused ad copy, build banners, and assemble landing pages designed for conversions. We integrate tracking triggers and test forms to ensure accurate data capture. We build mobile-responsive designs."
      },
      {
        stepNum: "04",
        title: "Launch & Monitoring",
        desc: "We activate PPC campaigns, monitor early click values, and adjust bid variables to optimize delivery. We exclude search terms that drive low-quality traffic. We implement daily checkups to protect budgets."
      },
      {
        stepNum: "05",
        title: "A/B Testing & Scaling",
        desc: "We test ad copy and landing page layouts, scaling budgets on high-performing ad segments. We adjust target metrics to lower lead costs over time. We share performance metrics in unified dashboards."
      }
    ],
    technologies: ["Google Ads", "LinkedIn Ads Manager", "Meta Ads", "Google Tag Manager", "HubSpot API", "Analytics"],
    industries: ["FinTech", "Health Tech", "B2B SaaS", "Industrial Suppliers", "Real Estate Investment"],
    caseStudy: {
      title: "Lowering Ad Acquisition Costs for a B2B Software Brand",
      challenge: "The client paid high PPC costs on Google Search and struggled to scale lead generation budgets.",
      approach: "We redesigned their landing pages, optimized search targets, and focused keywords on purchase intent.",
      results: "Lead conversions grew by 85% in 8 weeks, while cost-per-lead fell by 50% from $180 to $90."
    },
    faqs: [
      {
        q: "What ad channels work best for B2B brands?",
        a: "We find Google Search Ads capture buyers actively searching for solutions, while LinkedIn Ads allow target filtering by job title, company size, and industry. Using both channels together allows us to build awareness and capture immediate search intent."
      },
      {
        q: "How do you prevent click fraud on search ads?",
        a: "We use IP exclusion lists, click monitoring systems, and invalid click logs to block competitor clicks and bots from wasting your budget. We adjust bids based on device locations and user times to ensure quality."
      },
      {
        q: "How often do you refresh ad designs and copy?",
        a: "We monitor click-through rates weekly, refreshing ad headings, banners, and layout copy to prevent ad fatigue. This constant creative updates keeps your ads fresh and protects click conversion rates from drops."
      },
      {
        q: "What attribution models do you use?",
        a: "We configure multi-touch attribution models, mapping touchpoints from first click to final sales call so you see campaign value. This ensures we optimize ads based on closed contracts rather than just click counts."
      }
    ]
  },
  "social-media-marketing": {
    title: "Brand Social Media",
    tagline: "Telling your brand story on social channels.",
    heroDescription: "We build social presence, content schedules, and brand engagement across platforms, building organic community trust.",
    overview: "Social channels are where clients research your company culture and market authority. Inactive feeds or generic posts suggest an agency that lacks direction. Nanak Tech Solutions designs and executes social media marketing campaigns that project brand authority. We write articles, design visual content, and manage interaction schedules across LinkedIn, X (Twitter), and Instagram, sharing insights that capture market attention and build long-term trust. We build custom post templates that reflect your premium design guidelines, ensuring a clean presence. By publishing deep reports, technical breakdowns, and behind-the-scenes engineering logs, we demonstrate your team's execution capabilities directly to prospects in their feeds. We focus heavily on B2B LinkedIn branding, establishing company leaders as thought leaders in automation and engineering.",
    challenges: [
      {
        title: "Inactive Corporate Feeds",
        desc: "Social channels with outdated posts raise questions for buyers reviewing your company presence. Prospective clients research your active handles to evaluate if your firm is stable, growing, and participating in current industry dialogues. An empty feed suggests stagnation or operational challenges, harming sales. It signals a lack of ongoing innovation and thought leadership."
      },
      {
        title: "Low Follower Engagement",
        desc: "Publishing generic industry links fails to capture attention, generating zero client leads. Without unique company perspectives, custom graphics, and detailed report highlights, your posts are ignored in busy user feeds. Users scroll past boilerplate articles, meaning you fail to build community authority. Content must present actionable insights to capture busy executives."
      },
      {
        title: "High Production Overhead",
        desc: "Creating graphics, writing copy, and editing videos weekly drains team resources. Marketing departments struggle to maintain consistency because content creation requires significant hours that could be spent on project delivery. This overhead lead to sporadic posting patterns and lower visual quality across your digital accounts."
      }
    ],
    solution: "We build content systems that translate team insights into articles and visual posts. We schedule content drops and monitor post metrics to build community engagement. We manage the complete calendar, from writing draft copy to exporting custom graphics, ensuring your feeds remain active with quality insights without taxing your team. We align posts to highlight customer success stories, case studies, and engineering details that establish your industry authority. We build custom editorial calendars that guarantee consistency."
  },
  "lead-generation": {
    title: "Client Lead Generation",
    tagline: "Building outbound systems that book client calls.",
    heroDescription: "We build integrated outbound lead pipelines, combining data scraping and custom outreach campaigns to fill sales schedules.",
    overview: "Relying purely on organic traffic is a slow growth strategy. Scaling revenue demands predictable outbound lead generation. Nanak Tech Solutions designs and deploys custom outbound systems that target and contact key buyers. We build contact lists using data enrichment tools, draft custom email copy, and manage outreach pipelines, booking qualified calls directly onto your sales team schedules. We focus on highly personalized campaign models, ensuring every outreach message feels researched, polite, and professional, protecting your brand reputation. We avoid generic, mass-blast scripts, writing short messages that address recipient challenges directly. We establish multi-touch outreach systems, linking email touches with LinkedIn profiles to build immediate credibility and raise response percentages.",
    challenges: [
      {
        title: "Unpredictable Sales Pipeline",
        desc: "Companies struggle when revenue relies purely on sporadic word-of-mouth client referrals. Without an active outbound outreach pipeline, revenue targets are difficult to hit, and business growth is capped by local networks. This unpredictability makes long-term planning and hiring decisions complex, holding back scaling plans."
      },
      {
        title: "Poor Contact List Data",
        desc: "Outreach campaigns fail when email lists contain outdated contacts and generic addresses. Sending messages to bounced accounts or non-decision makers lowers campaign delivery rates and wastes sales representative time. It also risks domain reputation, leading to spam flags and lower delivery performance on all messages."
      },
      {
        title: "High Outreach Friction",
        desc: "Spamming generic messages generates zero responses, hurts domains, and damages brand trust. Buyers are bombarded with automated sales spam, meaning your outreach must be highly researched to capture attention. Generic outreach dilutes your brand's professional reputation, closing doors to high-value enterprise accounts."
      }
    ],
    solution: "We build enriched contact lists based on job titles and industries. We configure outreach domains with SPF/DKIM/DMARC records and write custom emails that drive replies. We monitor reply rates, adjust target groups, and transfer interested prospects straight to your calendar, creating a predictable stream of client sales opportunities. We warm up email domains slowly, keeping daily volumes within limits to protect deliverability rates. We verify every email address before launching campaigns, keeping bounce statistics under 2%."
  },
  "software-development": {
    title: "Software Development Systems",
    tagline: "Engineering bulletproof operational code and cloud systems.",
    heroDescription: "We design and deploy custom enterprise backend software, distributed microservices, and secure database architectures optimized for performance and absolute compliance.",
    overview: "Legacy software architectures limit organizational growth. As business scale increases, technical debt compiles, transaction throughput chokes, and system integration bottlenecks turn critical. Nanak Tech Solutions designs and engineers high-performance custom software systems that operate with architectural purity. We write robust backend services, construct optimized database schemas, and deploy scalable cloud microservices that synchronize system data dynamically. Our engineering maps custom API interfaces, handles secure user authentication, and streamlines transaction queues without latency. By choosing clean, modular code frameworks, we establish a bulletproof digital backbone that allows your enterprise to scale transactions seamlessly while protecting core infrastructure security.",
    challenges: [
      {
        title: "Monolithic Architecture Choke",
        desc: "Single-server monoliths become bottlenecks as API request volume scales. High data processing demands halt general app usage, leading to server downtime, slow page responses, and lost customer conversions."
      },
      {
        title: "Database Read/Write Latency",
        desc: "Unoptimized query indexing, unnormalized schemas, and lock conflicts cause severe operational delay. Transactions choke during peak traffic hours, slowing down database writes and causing data synchronization lag."
      },
      {
        title: "Insecure Authentication & Compliance",
        desc: "Weak data handling, lack of token verification, and insecure APIs expose user databases to theft. Enterprises risk massive security compliance fines if customer data leaks through public network boundaries."
      }
    ],
    solution: "We partition system overhead using isolated microservices communicating through secure gRPC and event pipelines. By deploying database replica configurations, query optimizations, and caching hierarchies (Redis), we cut data latency down to milliseconds. We lock down endpoints with OAuth2, JWT, and SOC2 compliant encryption layers, deploying all infrastructure to private cloud tenancies (AWS/GCP) via clean, reproducible Terraform files.",
    benefits: [
      {
        title: "Robust System Backends",
        desc: "We write clean, high-performance server logic using Go, Node.js, and Python that executes operations with speed and precision."
      },
      {
        title: "Scalable Database Structures",
        desc: "Design secure database schemas using PostgreSQL and MongoDB, optimizing queries to handle high transaction volumes."
      },
      {
        title: "Secure API Engineering",
        desc: "Develop protected REST and GraphQL APIs with strict token authorization layers to control access to corporate data."
      },
      {
        title: "Automated Deployments (CI/CD)",
        desc: "Configure automatic code integration and server deployment pipelines to launch features and bug fixes quickly."
      },
      {
        title: "Automated Test Pipelines",
        desc: "Establish CI/CD build scripts that run unit tests on every pull request, guaranteeing absolute codebase stability."
      },
      {
        title: "Docker Container Setups",
        desc: "Package application environments into secure containers, ensuring identical execution from development to production servers."
      }
    ],
    process: [
      {
        stepNum: "01",
        title: "System Audit",
        desc: "We analyze your existing software architecture, database query logs, and deployment workflows to identify system bottlenecks and security risks."
      },
      {
        stepNum: "02",
        title: "Schema & Pipeline Design",
        desc: "We map out modular database schemas, design microservices communication paths, and construct security credentials guidelines."
      },
      {
        stepNum: "03",
        title: "Core API Development",
        desc: "Our senior developers write clean backend APIs, build authentication structures, and integrate secondary database caching layers."
      },
      {
        stepNum: "04",
        title: "Shadow Load Testing",
        desc: "We perform automated API stress tests, auditing memory leak points and checking response speeds under heavy traffic loads."
      },
      {
        stepNum: "05",
        title: "VPC Cloud Rollout",
        desc: "We deploy isolated container systems straight to your private cloud network using CI/CD pipelines, locking down external database ports."
      }
    ],
    technologies: ["Node.js", "Go", "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS / GCP", "Terraform", "gRPC", "TypeScript"],
    industries: ["FinTech", "HealthTech", "Logistics", "SaaS Enterprise", "B2B Marketplaces"],
    caseStudy: {
      title: "Re-Architecting System Infrastructure for a B2B Financial Marketplace",
      challenge: "The client ran on a legacy monolith experiencing API timeouts, database deadlocks, and severe checkout latency.",
      approach: "We migrated their monolith into containerized TypeScript and Go microservices, optimized PostgreSQL schemas, and added Redis caches.",
      results: "Database response latency fell by 88%, checkout transaction times dropped under 200ms, and API capacity grew to support 50,000 requests per minute."
    },
    faqs: [
      {
        q: "Do you build custom software on top of our existing code?",
        a: "Yes. We run technical audits to evaluate if we should optimize your existing codebase or build isolated microservices that connect via APIs to minimize refactoring overhead."
      },
      {
        q: "How do you ensure data security and regulatory compliance?",
        a: "We deploy all databases within private Virtual Private Clouds (VPCs), configure OAuth2 and JWT token standards, encrypt data at rest/in transit, and log system access records."
      },
      {
        q: "What is your typical project delivery methodology?",
        a: "We work in 2-week agile sprints, providing functional test sandboxes at the end of each sprint so you can track progress and review features in real-time."
      }
    ]
  }
};

// Add standard benefits, processes, tech, and industries to any service that lacks them (as fallback)
const stubData = {
  benefits: [
    {
      title: "Command High-Value Market Position",
      desc: "Deploy premium visual layouts and structures that project market authority and build immediate customer trust."
    },
    {
      title: "Optimized Operational Efficiency",
      desc: "Eliminate manual redundancies, streamline system data flows, and cut daily administrative overhead by 60%."
    },
    {
      title: "Predictable Sales Pipeline",
      desc: "Accelerate revenue growth with scalable digital marketing funnels, technical search rankings, and personalized outreach."
    },
    {
      title: "Timeless Platform Scalability",
      desc: "Build on clean, modular architectures that scale transaction volumes infinitely without security compromises."
    }
  ],
  process: [
    {
      stepNum: "01",
      title: "Discovery & Analysis",
      desc: "We analyze your target market, document existing system setups, and locate core bottlenecks to map out project return on investment."
    },
    {
      stepNum: "02",
      title: "Strategic Blueprinting",
      desc: "We design complete technical architectures, data synchronization schemas, content strategies, and UI layouts for validation."
    },
    {
      stepNum: "03",
      title: "System Integration & Code",
      desc: "Our engineering team writes clean, responsive code, connects tool APIs, and programs custom animation behaviors."
    },
    {
      stepNum: "04",
      title: "Rigorous Validation Testing",
      desc: "We run automated scripts, check loading speeds, audit security compliance, and shadow-test transactions to ensure stability."
    },
    {
      stepNum: "05",
      title: "Production Launch & Support",
      desc: "We deploy systems to production networks, establish real-time alert logs, and provide post-launch maintenance SLA packages."
    }
  ],
  technologies: ["Node.js", "Vite", "Figma", "HTML5/CSS3", "React Native", "Google Analytics", "Python", "Docker"],
  industries: ["Venture Capital", "SaaS Enterprise", "B2B Logistics", "Professional Services", "Luxury Brands"],
  caseStudy: {
    title: "Re-Engineering Digital Operational Logistics for an Enterprise Brand",
    challenge: "The client ran on manual tracking platforms, experiencing slow delivery times, high errors, and lack of visual branding authority.",
    approach: "We redesigned their online client portals, connected APIs, and established custom automation pipelines.",
    results: "Administrative hours fell by 75% within 30 days. Client conversion rates grew by 40%, and online transactions rose to $4M monthly."
  },
  faqs: [
    {
      q: "What is the typical onboarding timeline for this service?",
      a: "Onboarding begins with a 2-week discovery audit phase. We define scopes and build prototypes, rolling out full production integrations within 6 to 10 weeks depending on custom system requirements."
    },
    {
      q: "Do you coordinate project rollouts with our internal IT department?",
      a: "Yes. We run regular coordination sprint reviews with your internal developer team to align on database structures, API parameters, security guidelines, and deployment protocols."
    },
    {
      q: "How do you measure project success and ROI?",
      a: "We track performance metrics such as conversion growth, site loading speeds, transaction error drops, and administrative hours saved, logging progress in real-time dashboards."
    },
    {
      q: "What post-launch maintenance options do you provide?",
      a: "We offer monthly service-level agreements (SLAs) covering bug fixes, framework compatibility checkups, SEO tracking, database backups, and gradual feature additions."
    }
  ]
};

// Merge stub data into services that don't have them defined to keep the file clean yet fully populated
Object.keys(servicesData).forEach(key => {
  const service = servicesData[key];
  if (!service.benefits) service.benefits = stubData.benefits;
  if (!service.process) service.process = stubData.process;
  if (!service.technologies) service.technologies = stubData.technologies;
  if (!service.industries) service.industries = stubData.industries;
  if (!service.caseStudy) service.caseStudy = stubData.caseStudy;
  if (!service.faqs) service.faqs = stubData.faqs;
});

export default servicesData;
