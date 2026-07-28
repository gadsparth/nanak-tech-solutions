import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Target, TrendingUp, CheckCircle2, Share2, FileText, ArrowLeft, ArrowRight, 
  HelpCircle, Settings, ShieldCheck, Sparkles, BarChart, Database, Monitor, Mail, Layers, Zap, Globe, Palette
} from 'lucide-react';
import SEO from '../components/SEO';

const servicesData = {
  'google-ads': {
    title: 'Google Paid Search Arbitrage',
    tagline: 'Intercept high-intent search queries and scale transaction volume.',
    desc: 'Our Google Ads campaign networks utilize negative-match script arrays, custom structural bidding audits, and semantic ad creatives. We target search keywords directly tied to sales inquiries, reducing waste spend and securing maximum conversion margins.',
    longDesc: `We construct, monitor, and optimize paid Google Search, Display, and Performance Max campaigns from the ground up. By utilizing advanced exact-match structures and automated script matrices, we guarantee that your budget is allocated strictly to keywords expressing clear transactional intent. 
    
    Our technical onboarding begins with structural campaign audits. We analyze legacy spend parameters, identify negative-keyword leaks, and deploy automated search terms scripts to harvest high-performing bidding terms. We build custom landing page matches for every high-value keyword group, using dynamic keyword insertion (DKI) to ensure that the ad copy matches the landing header. This boosts Google Quality Scores, reduces CPC averages by 30-40%, and places your campaigns at the top of Google Search.
    
    Every campaign setup includes advanced server-side conversion API tracking (GTM Server-Side). We bypass browser tracking limitations to report clean, real-time conversion values back to bidding algorithms. This allows Google Smart Bidding models (Target CPA and Target ROAS) to learn faster and optimize budgets efficiently, scaling acquisition volume while protecting cost boundaries.`,
    icon: <TrendingUp size={32} className="blue-icon" />,
    color: 'var(--gold-accent)',
    features: [
      'Exact-match intent mapping and negative script filters',
      'Competitor search hijack and bidding coverage tools',
      'Dynamic keyword insertion on fast-loading landing pages',
      'Server-side conversion tracking & GTM setup',
      'Target CPA and Target ROAS bidding parameter optimization'
    ],
    metricName: 'Average Campaign ROAS',
    metricVal: '5.4x Average',
    faq: [
      { q: 'How do you optimize bidding limits?', a: 'We employ automated script loops that audit daily conversion CPA benchmarks, reducing bid limits on underperforming terms and shifting budgets to high-ROAS groups.' },
      { q: 'Do you design the search ad copies?', a: 'Yes, our copywriting team develops dynamic search creatives matching user query variations, optimizing headline CTRs.' }
    ]
  },
  'meta-ads': {
    title: 'Meta Social Growth Scaling',
    tagline: 'Accelerate client acquisition via multivariate creative matrices.',
    overview: 'Paid social scaling requires highly visual assets, rapid dynamic testing, and clean pixel attribution. We build automated testing engines to scale Facebook and Instagram campaigns.',
    desc: 'Scale customer acquisition across Facebook and Instagram. We construct multi-variable creative testing structures, target granular lookalike cohorts, and build custom customer retention workflows to reduce customer acquisition costs (CAC).',
    longDesc: `Succeeding on Facebook and Instagram in competitive markets requires visual testing arrays and clean attribution data. We build dynamic creative testing engines (DCT) that test multiple hooks, video edits, copy headlines, and CTAs simultaneously, identifying winning angles before scaling spend.
    
    Our meta-ad system bypasses the limitations of the iOS 14 update by deploying the Meta Conversions API (CAPI) directly from cloud servers. This sends clean, deduplicated purchase, lead, and subscription events directly to Meta's Ad Manager, letting Meta's machine learning models locate your ideal customers. We segment campaigns into acquisition (Prospecting) and retention (Retargeting) layers, using custom lookalike models (LAL) based on high-LTV customer databases.
    
    We handle the entire creative pipeline. Our editors construct mobile-first ad concepts, short-form video hooks, and graphic overlays tailored to target demographics. We test visual copy variations weekly, ensuring that ad fatigue never limits campaign scaling and ROAS remains stable.`,
    icon: <Share2 size={32} className="cyan-icon" />,
    color: 'var(--gold-hover)',
    features: [
      'Dynamic creative testing (DCT) asset pipelines',
      'Meta Conversions API (CAPI) server-side integration',
      'Custom lookalike models based on high-LTV datasets',
      'Staggered retargeting loops with personalized ads',
      'Short-form hook scriptwriting and visual designs'
    ],
    metricName: 'Cost Per Acquisition Drop',
    metricVal: '-38% Average',
    faq: [
      { q: 'How often do you refresh creative assets?', a: 'We introduce new video hooks, thumbnails, and copy variations weekly to prevent ad fatigue and keep CPCs low.' },
      { q: 'How do you structure tracking attribution?', a: 'We integrate cloud Server-Side tracking alongside Meta Pixels, ensuring 100% data match rates for optimization.' }
    ]
  },
  'linkedin-ads': {
    title: 'LinkedIn B2B Enterprise Account Targeting',
    tagline: 'Secure high-value enterprise consulting briefs programmatically.',
    overview: 'LinkedIn Ads requires firmographic segmenting, detailed B2B guides, and direct CRM integrations.',
    desc: 'Target key enterprise buyers, CTOs, and procurement directors directly. We construct account-based marketing (ABM) lists, publish B2B research assets, and integrate lead forms directly into CRM systems.',
    longDesc: `LinkedIn is the ultimate network for B2B enterprise acquisition, but high average CPCs require careful target segmenting. We build Account-Based Marketing (ABM) campaigns targeting specific company domains, job titles, and company sizes, ensuring that zero budget is wasted on unqualified audiences.
    
    We build custom B2B lead generation flows using native LinkedIn Lead Gen Forms. These forms auto-populate user details from their professional profiles, reducing form abandonment by up to 50% compared to external landing page links. We connect these forms to CRMs like Salesforce and HubSpot, enabling sales teams to follow up with new leads instantly.
    
    To secure high-value contracts, we build thought-leadership ad arrays featuring founder articles, industry reports, and case studies. This builds company trust, qualifies buyers before they request a consult, and establishes clear sector authority.`,
    icon: <Target size={32} className="violet-icon" />,
    color: 'var(--gold-accent)',
    features: [
      'Account-Based Marketing (ABM) domain targeting',
      'LinkedIn Lead Gen Forms setup with CRM sync',
      'B2B guide downloads and thought-leadership ads',
      'Firmographic filters (job title, size, revenue)',
      'Custom B2B retargeting loops based on website activity'
    ],
    metricName: 'Enterprise SQL Conversion',
    metricVal: '+140% Increase',
    faq: [
      { q: 'What average deal size fits LinkedIn Ads?', a: 'LinkedIn Ads works best for contracts over $10K/year, where the high contract value justifies B2B advertising costs.' },
      { q: 'Do you help sync target accounts from our CRM?', a: 'Yes, we set up real-time target audience lists that auto-sync directly from your CRM databases.' }
    ]
  },
  'youtube-ads': {
    title: 'YouTube Digital Video Storytelling',
    tagline: 'Scale video campaigns to build brand trust and drive conversions.',
    overview: 'YouTube Ads build search recall and drive direct conversions through visual ad frameworks.',
    desc: 'Capture high-attention video slots on YouTube. We script dynamic video hooks, target in-market search cohorts, and optimize video campaigns to boost brand authority and direct actions.',
    longDesc: `Video ads command maximum audience attention. We design, write, and optimize YouTube Video Action Campaigns that combine visual storytelling with conversion-focused design. By targeting users based on their active search history on Google, we target ads to prospects when they are ready to purchase.
    
    We handle the pre-production copywriting and scripting. We design video ads around a structured conversion framework: capturing attention in the first 5 seconds, explaining the primary value proposition, demonstrating results, and closing with a clear call-to-action. We format videos for both desktop screens and mobile formats (YouTube Shorts).
    
    We segment campaigns to optimize placements. We monitor ad positions, filter out low-value channels, and target custom intent audiences based on search queries to ensure video budgets are spent on high-converting placements.`,
    icon: <Monitor size={32} className="blue-icon" />,
    color: 'var(--gold-hover)',
    features: [
      'First-5-second hook copywriting templates',
      'Custom intent search query segment targeting',
      'Video action checkouts and overlay designs',
      'Short-form and horizontal video edits',
      'Placement filtering to prevent low-value views'
    ],
    metricName: 'Direct Booking Lift',
    metricVal: '+80% Booking Rate',
    faq: [
      { q: 'Do you shoot the videos?', a: 'We work with your existing media or record custom video frames, handling the editing, hooks, and call-to-action designs.' },
      { q: 'Which YouTube formats do you use?', a: 'We deploy in-stream ads, video action campaigns, and vertical YouTube Shorts layouts based on performance goals.' }
    ]
  },
  'technical-seo': {
    title: 'Technical Search Engine Optimization',
    tagline: 'Optimize search indexing, site structure, and Core Web Vitals.',
    desc: 'Search rankings require search engine visibility and speed. We audit site architecture, optimize crawl budgets, format structured schemas, and accelerate page load speeds to secure organic rankings.',
    longDesc: `Modern search engine optimization requires a solid technical foundation. We optimize your website code, site structure, and server configurations to ensure search engines can easily crawl, index, and rank your content.
    
    We begin by auditing index coverage, XML sitemaps, sitemap redirects, and crawl logs. We fix server-side indexing errors and configure robots.txt parameters to maximize crawl budgets. We deploy structured schema markups (JSON-LD) across the entire site to help search engines understand your business details, reviews, FAQs, and services.
    
    Page speed is a major ranking factor. We optimize images, clean up script executions, and leverage browser caching to ensure your pages score 95+ on Google PageSpeed Insights. This reduces bounce rates, keeps users engaged, and helps secure top search rankings.`,
    icon: <Settings size={32} className="blue-icon" />,
    color: 'var(--gold-accent)',
    features: [
      'XML sitemap and crawl budget diagnostics',
      'Structured JSON-LD schema markup integration',
      'Core Web Vitals and PageSpeed optimization',
      'Canonical tag and duplicate content audits',
      'Search Console diagnostic monitoring'
    ],
    metricName: 'Organic Crawl Index Rate',
    metricVal: '+180% Increase',
    faq: [
      { q: 'How do schemas help rankings?', a: 'Schemas structure key business details for search engines, increasing eligibility for rich search snippets and boosting search CTRs.' },
      { q: 'How do you optimize page load speeds?', a: 'We optimize image formats, defer non-critical javascripts, and configure cloud CDN caching systems.' }
    ]
  },
  'local-seo': {
    title: 'Local SEO & Maps Position Optimization',
    tagline: 'Dominating local map packs and localized geo-targeted searches.',
    overview: 'Local SEO maps local citations, optimizes business profiles, and builds localized search authority.',
    desc: 'Capture local buyer intent in your target regions. We optimize Google Business Profiles, build consistent local citation directories, and construct local landing pages to dominate local search results.',
    longDesc: `Dominate localized search queries in your service areas. We optimize Google Business Profiles (GBP) and match your details across top local search directories to secure top placements in Google's local map packs.
    
    Our system maps local citations to ensure name, address, and phone number (NAP) details are consistent across directories. We build dedicated local landing pages for each target city and neighborhood, optimizing local keyword density, local schema metadata, and maps embeds.
    
    We build automated review acquisition systems to generate feedback from your clients. This builds business credibility, signals local authority to search algorithms, and positions your business as the top local provider.`,
    icon: <Globe size={32} className="cyan-icon" />,
    color: 'var(--gold-hover)',
    features: [
      'Google Business Profile (GBP) listing optimization',
      'Consistent NAP local citation alignment',
      'Dedicated localized local landing pages',
      'Local schema markup and maps integrations',
      'Automated client review management campaigns'
    ],
    metricName: 'Local Maps Profile Inquiries',
    metricVal: '+210% Increase',
    faq: [
      { q: 'How long until local map pack rankings rise?', a: 'Most profiles show map pack improvement within 30 to 45 days of updating categories and local citations.' },
      { q: 'Do you manage multiple locations?', a: 'Yes, we build multi-location directory structures that optimize GBP profiles for all branch offices.' }
    ]
  },
  'enterprise-seo': {
    title: 'Enterprise Programmatic Content Scale',
    tagline: 'Publish large-scale programmatic search layouts securely.',
    overview: 'Enterprise SEO scales search coverage via programmatic template models.',
    desc: 'Scale organic search coverage across thousands of queries. We build database-driven programmatic templates, optimize crawl budgets, and deploy scalable internal linking to dominate broad search industries.',
    longDesc: `Enterprise SEO requires scalable processes to target thousands of search terms. We build programmatic SEO setups that generate optimized landing pages based on structured database inputs, allowing you to cover entire search markets efficiently.
    
    We design flexible page layouts that dynamic databases populate with specific service, location, and industry search data. This lets you rank for thousands of long-tail queries (e.g. "IT consulting for healthcare in Chicago") without building pages manually.
    
    We build scalable internal linking systems that distribute domain authority across all programmatic pages. We monitor server logs and crawl budgets to ensure search engines index new programmatic pages quickly and rank them securely.`,
    icon: <Layers size={32} className="violet-icon" />,
    color: 'var(--gold-accent)',
    features: [
      'Database-driven programmatic page generation',
      'Crawl log diagnostics and server performance reviews',
      'Scalable internal linking algorithms',
      'Dynamic XML sitemap auto-generation scripts',
      'Large-scale search intent taxonomy mapping'
    ],
    metricName: 'Indexed Search Pages Count',
    metricVal: '25K+ Pages Rank',
    faq: [
      { q: 'Is programmatic SEO safe from duplicate content penalties?', a: 'Yes, we customize page templates, data sets, and case studies to ensure every page contains unique, helpful content.' },
      { q: 'Do you handle the database infrastructure?', a: 'Yes, we design the data structures and integrate them directly into headless CMS setups.' }
    ]
  },
  'ecommerce-seo': {
    title: 'Ecommerce Search Feeds & Catalog SEO',
    tagline: 'Maximize search product visibility and shopping conversions.',
    overview: 'Ecommerce SEO structures catalog data feeds to boost search visibility.',
    desc: 'Scale organic product sales in search engines. We optimize merchant center search feeds, clean up product listings sitemaps, and design product pages to maximize search conversions.',
    longDesc: `Ecommerce search engine optimization goes beyond basic keywords. We optimize product pages, category structures, and product data feeds to maximize your product visibility in both organic search results and Google Shopping listings.
    
    We construct structured product schemas (JSON-LD) that display prices, stock availability, and user reviews directly in search results. This increases product listing visibility and boosts organic CTRs. We optimize product category structures to ensure search engines crawl all item pages efficiently.
    
    We optimize Google Merchant Center feeds, adjusting titles, descriptions, categories, and attributes to align with search patterns, helping you capture high-intent shopping queries.`,
    icon: <Database size={32} className="blue-icon" />,
    color: 'var(--gold-accent)',
    features: [
      'Dynamic product page schema integrations',
      'Google Merchant Center feed optimization',
      'Ecommerce category structure optimization',
      'Frictionless check-out page load acceleration',
      'Product images meta tag mapping'
    ],
    metricName: 'Search Shopping Traffic',
    metricVal: '+190% Monthly',
    faq: [
      { q: 'Can you work with Shopify and WooCommerce catalogs?', a: 'Yes, we optimize product feeds and catalog pages across major e-commerce systems.' },
      { q: 'How do you handle out-of-stock products?', a: 'We implement redirects and structured updates to ensure out-of-stock products preserve search rankings.' }
    ]
  },
  'website-design': {
    title: 'Bespoke Corporate Website Design',
    tagline: 'High-end design systems that build instant brand trust.',
    overview: 'Bespoke designs build brand authority through premium layouts.',
    desc: 'Transform your brand authority. We design premium custom websites featuring smooth layouts, custom interactive blocks, and optimized brand design patterns built for scale.',
    longDesc: `Your website is your primary digital asset. We design bespoke, premium websites that combine custom graphics, balanced layouts, and interactive elements to build instant brand trust and guide users to convert.
    
    We build custom design systems that establish unified typography, colors, spacing, and layouts. We construct interactive prototypes to test usability, page transitions, and responsive scaling before starting development.
    
    We balance design aesthetics with page performance. We build using modern development systems (React, Vite) to ensure visual layouts and transitions run smoothly at 60 FPS on both mobile and desktop screens.`,
    icon: <Palette size={32} className="blue-icon" />,
    color: 'var(--gold-accent)',
    features: [
      'Bespoke visual brand identity design systems',
      'Interactive Framer user experience prototypes',
      'Responsive, mobile-first design systems',
      'Custom SVG graphics and visual asset design',
      'Frictionless user flow wireframe mapping'
    ],
    metricName: 'Average Session Duration',
    metricVal: '4.2 Min Avg',
    faq: [
      { q: 'Do you design custom graphics and assets?', a: 'Yes, we create custom brand assets, maps, and icons to align the design with your brand identity.' },
      { q: 'How long does a custom redesign take?', a: 'A complete design project typically takes 4 to 8 weeks, including planning, wireframes, testing, and development.' }
    ]
  },
  'landing-pages': {
    title: 'High-Efficiency Conversion Landing Pages',
    tagline: 'Accelerate pipeline conversions with custom qualifying forms.',
    overview: 'Custom landing pages maximize paid search and social campaign conversions.',
    desc: 'Turn campaign clicks into qualified leads. We design fast, targeted landing pages featuring dynamic user forms and clear calls-to-action to maximize ad campaign ROAS.',
    longDesc: `High-performing ad campaigns need optimized landing pages to convert traffic. We build landing pages focused on a single conversion goal, designed to match the user intent of your ad campaigns.
    
    We build landing pages using optimized frameworks that load in under 1 second. We design clear content structures: addressing user paint points, explaining the value proposition, showing social proof, and closing with a simple call-to-action.
    
    We build multi-step qualifying form pages that gather key lead data while maintaining low form abandonment. This ensures your sales team receives qualified leads with complete context.`,
    icon: <Monitor size={32} className="cyan-icon" />,
    color: 'var(--gold-hover)',
    features: [
      'Sub-second landing page paint times',
      'Dynamic keyword text insertion matching ads',
      'Multi-step user qualifying form interfaces',
      'Responsive, mobile-first page designs',
      'Direct integration with CRMs and sales tools'
    ],
    metricName: 'Visitor to Lead Rate',
    metricVal: '14.8% Average',
    faq: [
      { q: 'Do you run A/B split tests on landing pages?', a: 'Yes, we set up split tests to compare headlines, forms, and layouts to continuously optimize conversions.' },
      { q: 'Can you build pages on our existing domain?', a: 'Yes, we deploy landing pages on your subdomains (e.g. go.yoursite.com) for a seamless brand experience.' }
    ]
  },
  'cro': {
    title: 'Conversion Rate Optimization',
    tagline: 'Turn traffic spikes into qualified sales and net cash flow.',
    desc: 'Optimize your conversion rates without buying additional clicks. We audit conversion paths, run multivariate tests, and optimize landing checkout layouts to fix pipeline leaks and maximize ROAS.',
    longDesc: `Scale your business by converting a higher percentage of your existing website visitors. We analyze user behavior, identify friction in your checkout and signup funnels, and implement data-driven updates to increase conversions.
    
    We begin by tracking visitor behavior using scroll maps and session records. We run technical audits to find layout bugs, slow elements, and confusing checkout fields. We build clean, fast alternatives and run A/B multivariate split tests to verify which version drives the most sales.
    
    We focus on simplifying your conversion funnels. We reduce form fields, clarify value statements, and optimize mobile buttons to make converting as simple and friction-free as possible.`,
    icon: <CheckCircle2 size={32} className="violet-icon" />,
    color: 'var(--gold-accent)',
    features: [
      'Scroll maps and user session diagnostics',
      'Form friction audits and field reduction',
      'A/B split testing of layout alternatives',
      'Mobile checkout and button optimizations',
      'Clear value copy edits and checkout reviews'
    ],
    metricName: 'Conversion Ratio Lift',
    metricVal: '4.8x Multiplier',
    faq: [
      { q: 'What is a typical conversion improvement?', a: 'Most sites show a 20% to 50% increase in conversions within the first 90 days of testing.' },
      { q: 'How many visitors are needed for A/B testing?', a: 'We run multivariate tests on higher traffic channels, and use behavioral diagnostics for lower traffic pages.' }
    ]
  },
  'ui-ux': {
    title: 'UI/UX Interactive System Prototypes',
    tagline: 'Bespoke layouts and prototype flows built for usability.',
    overview: 'UI/UX audits build clear user flows and responsive prototypes.',
    desc: 'Build frictionless product interfaces. We map user journeys, design intuitive layouts, and construct interactive prototypes to optimize software and website usability.',
    longDesc: `Great user experiences build customer loyalty. We design interface structures (UI) and map user journeys (UX) that make interacting with your software, portal, or website simple and intuitive.
    
    We start by mapping user journeys to identify friction in signups, checkouts, and app navigation. We build wireframes to plan layouts, content grouping, and call-to-action placements.
    
    We build interactive prototypes in Figma to test user flows and gather feedback before starting code development. This saves development time, guarantees interface usability, and ensures your product is built for scale.`,
    icon: <Settings size={32} className="blue-icon" />,
    color: 'var(--gold-hover)',
    features: [
      'Frictionless B2B SaaS layout wireframing',
      'Interactive, high-fidelity Figma user prototypes',
      'User journey mapping and friction analysis',
      'Mobile-responsive layout adjustments',
      'Usability research and interface testing'
    ],
    metricName: 'User Task Finish Rate',
    metricVal: '96.2% Perfect',
    faq: [
      { q: 'Do you design portals and mobile apps?', a: 'Yes, we design B2B client portals, custom SaaS web apps, and mobile app interfaces.' },
      { q: 'Do you provide HTML/CSS code delivery?', a: 'We deliver complete Figma design specs and developer guidelines, or handle the React development in-house.' }
    ]
  },
  'ai-automation': {
    title: 'AI Workflow Integration & Automations',
    tagline: 'Integrate LLMs directly into lead sorting and response channels.',
    overview: 'AI integrations automate responses and organize leads securely.',
    desc: 'Automate business tasks using AI. We build custom API connections, integrate LLMs into customer responses, and build AI lead routers to save team time and speed up replies.',
    longDesc: `Accelerate customer communication using AI automation. We integrate large language models (LLMs) and custom AI automations into your workflows to categorize lead inquiries, drafts responses, and organize tasks automatically.
    
    We build custom AI lead routers that analyze user form submissions, assess buyer intent, and route high-value leads directly to account executives. We set up AI response assistants that draft personalized follow-up emails based on client requests.
    
    We connect AI systems with your existing CRMs (HubSpot, Salesforce) and communication platforms (Slack, email). This helps speed up response times, qualifies leads automatically, and keeps databases up to date.`,
    icon: <Sparkles size={32} className="blue-icon" />,
    color: 'var(--gold-accent)',
    features: [
      'Automated AI lead intent qualification scripts',
      'LLM integration for draft email responses',
      'Custom API connections via Make and Zapier',
      'AI-driven customer message routers',
      'Secure data handling protocols'
    ],
    metricName: 'First Reply Speed Improvement',
    metricVal: '-90% Faster',
    faq: [
      { q: 'Is our customer data secure with AI tools?', a: 'Yes, we use secure APIs that do not use your customer data to train public models, keeping your data protected.' },
      { q: 'Can the AI schedule calls directly?', a: 'Yes, we configure AI systems to send calendar booking links to qualified leads automatically.' }
    ]
  },
  'crm-automation': {
    title: 'CRM Sales Pipeline Automations',
    tagline: 'Optimize lead updates and sync sales databases automatically.',
    overview: 'CRM integrations organize databases and speed up lead updates.',
    desc: 'Align marketing leads with sales teams. We build custom workflows in HubSpot, Salesforce, and Pipedrive to update fields, track lead status, and speed up sales handoffs.',
    longDesc: `Ensure your sales team never loses track of a marketing lead. We build CRM automations that sync incoming website leads, update client details, and organize deal stages automatically.
    
    We configure automated workflow paths in HubSpot, Salesforce, or Pipedrive. When a user submits a form on your site, our system updates the CRM, assigns the contact to the correct account manager, and schedules follow-up tasks.
    
    We integrate marketing tracking data directly into CRM contacts. This shows your sales team the exact search keywords, ads, and pages each lead viewed before converting, helping them customize their sales pitches.`,
    icon: <Database size={32} className="cyan-icon" />,
    color: 'var(--gold-hover)',
    features: [
      'HubSpot, Salesforce, and Pipedrive workflow setups',
      'Automated lead assignment and notifications',
      'Lead status tracking and deal stage updates',
      'Marketing campaign attribution tracking sync',
      'Database cleanup and duplicate merging tools'
    ],
    metricName: 'Lead Handoff Time',
    metricVal: '<1 Min Sync',
    faq: [
      { q: 'Which CRMs do you support?', a: 'We build automations for HubSpot, Salesforce, Pipedrive, ActiveCampaign, and custom database APIs.' },
      { q: 'Do you help migrate old customer data?', a: 'Yes, we format and migrate historical customer records into your new CRM database structures.' }
    ]
  },
  'lead-automation': {
    title: 'Zero Friction Lead Capture Pipelines',
    tagline: 'Automate lead follow-ups and booking confirmations.',
    overview: 'Lead automation speeds up response times and simplifies booking.',
    desc: 'Engage leads instantly. We build automated email replies, SMS notifications, and booking systems to convert leads into scheduled consulting calls immediately.',
    longDesc: `Response speed is a major factor in lead conversion. We build lead capture pipelines that send automated replies and scheduling links the moment a prospect submits an inquiry, converting interest into bookings.
    
    When a form is submitted, our system triggers immediate email confirmations, sends SMS notifications to your sales team, and opens calendar booking slots.
    
    We integrate scheduling tools directly into your website. This lets qualified leads book consults immediately after submitting a form, bypass email back-and-forth, and fill your sales pipeline automatically.`,
    icon: <Zap size={32} className="violet-icon" />,
    color: 'var(--gold-accent)',
    features: [
      'Instant automated email follow-up templates',
      'SMS notifications for sales and leads',
      'Embedded calendar booking page integrations',
      'Lead qualification filter configurations',
      'CRM contact generation setups'
    ],
    metricName: 'Inquiry-to-Booking Rate',
    metricVal: '+65% Booked',
    faq: [
      { q: 'How do you prevent booking spam?', a: 'We add qualification filters to forms, allowing only matching prospects to view your calendar slots.' },
      { q: 'Can you route leads to specific reps?', a: 'Yes, we set up round-robin routing to distribute bookings evenly among your sales reps.' }
    ]
  },
  'social-growth': {
    title: 'B2B Social Growth & Brand Authority',
    tagline: 'Scale B2B brand presence and organic lead loops on LinkedIn.',
    desc: 'Build organic business influence. We design founder-led publishing templates, write high-engagement LinkedIn posts, and construct organic lead acquisition systems to drive interest to your site.',
    longDesc: `Build organic B2B brand presence on professional networks. We design and manage organic content campaigns on LinkedIn, X, and Meta to position your founders and brand as industry leaders.
    
    We draft high-quality posts, industry insights, and graphic templates tailored for LinkedIn. We design content loops that encourage user engagement, driving profile viewers to your resources and landing pages.
    
    We map organic engagement patterns, help coordinate company announcements, and build authority campaigns that capture buyer interest and drive leads without paid ad spend.`,
    icon: <Share2 size={32} className="pink-icon" />,
    color: 'var(--gold-hover)',
    features: [
      'Founder-led LinkedIn post copywriting templates',
      'High-engagement corporate visual design assets',
      'Weekly content plans and copy schedules',
      'LinkedIn profile optimization guidelines',
      'Organic lead capture conversion tracking'
    ],
    metricName: 'Organic Profile Engagement',
    metricVal: '+180% Monthly',
    faq: [
      { q: 'Does organic B2B posting generate qualified leads?', a: 'Yes, when founders share technical insights, it builds trust and drives profile views directly to call booking pages.' },
      { q: 'How much time is required from our team?', a: 'We manage the copywriting and scheduling, requiring only brief weekly reviews of drafted posts.' }
    ]
  },
  'email-marketing': {
    title: 'Customer Database Email Marketing',
    tagline: 'Build segment lists and automate customer nurturing loops.',
    overview: 'Email campaigns nurture prospects and drive recurring sales.',
    desc: 'Nurture leads and drive recurring sales. We build segmented customer email flows, design responsive templates, and configure automated retention campaigns to maximize customer value.',
    longDesc: `Keep your brand top-of-mind with segmented email marketing. We design email campaigns and automated nurturing sequences that educate leads, share client success, and drive recurring sales.
    
    We build customer welcome sequences, educational email series, and cart recovery flows that trigger based on website activity. We segment your email list by buyer stage and industry to ensure every message is relevant.
    
    We optimize email templates for mobile devices, test subject lines to maximize open rates, and monitor delivery analytics to maintain strong domain authority.`,
    icon: <Mail size={32} className="blue-icon" />,
    color: 'var(--gold-accent)',
    features: [
      'Automated customer nurturing email sequences',
      'Customer list segmentation by buyer stage',
      'Mobile-responsive custom email layouts',
      'Subject line A/B split testing arrays',
      'Domain delivery optimization monitoring'
    ],
    metricName: 'Email Campaign Open Rate',
    metricVal: '34.2% Avg Open',
    faq: [
      { q: 'Which email tools do you work with?', a: 'We build email campaigns in Klaviyo, Mailchimp, ActiveCampaign, HubSpot, and custom CRM systems.' },
      { q: 'How do you protect sender reputation?', a: 'We clean list databases regularly, set up SPF/DKIM authentication, and space out campaigns to ensure high inbox delivery.' }
    ]
  },
  'content-marketing': {
    title: 'Content Marketing Hubs & Assets',
    tagline: 'Publish high-value research papers and guides to earn links.',
    desc: 'Build domain authority with resource content. We map content plans, write detailed industry whitepapers, and build tools to capture leads and earn natural backlinks.',
    longDesc: `Differentiate your brand with high-value content marketing. We write and design research whitepapers, calculators, guides, and templates that act as long-term customer acquisition assets.
    
    We build content hubs that target informational search keywords, guiding readers through the buying journey. We create downloadable tools (e.g. templates, ROI estimators) that capture user emails.
    
    We promote your content to industry publications and media channels, earning high-authority backlinks that build your domain authority and help boost your search rankings.`,
    icon: <FileText size={32} className="blue-icon" />,
    color: 'var(--gold-accent)',
    features: [
      'High-authority B2B research paper writing',
      'Interactive website calculators and templates',
      'Informational search content hub mapping',
      'Digital PR and backlink acquisition campaigns',
      'Database email capture workflow automation'
    ],
    metricName: 'Lead Magnet Conversions',
    metricVal: '18.2% Capture',
    faq: [
      { q: 'How do you identify content topics?', a: 'We analyze customer search intent, find content gaps in your competitors, and research frequently asked sales questions.' },
      { q: 'Do you write the copy in-house?', a: 'Yes, our copywriting team consists of specialized editors who research and compose advanced-level materials.' }
    ]
  }
};

export default function Services() {
  const { serviceId } = useParams();
  const currentService = servicesData[serviceId];

  // If a specific service route was hit
  if (currentService) {
    return (
      <div className="services-page-wrapper">
        <SEO 
          title={currentService.title}
          description={currentService.desc}
          schemaType="Service"
          schemaData={{
            'name': currentService.title,
            'provider': {
              '@type': 'Organization',
              'name': 'Nanak Marketing'
            },
            'description': currentService.desc
          }}
        />

        <div className="container">
          <Link to="/services" className="back-link font-mono magnetic-target">
            <ArrowLeft size={16} /> Back to Capabilities
          </Link>

          <div className="service-details-hero">
            <div className="service-hero-content">
              <span className="badge font-mono" style={{ borderColor: currentService.color, color: currentService.color }}>
                Active Capability Blueprint
              </span>
              <h2>{currentService.title}</h2>
              <p className="service-tagline font-mono">{currentService.tagline}</p>
              <p className="service-desc">{currentService.desc}</p>
              
              <div className="service-cta-block">
                <Link to="/contact" className="btn-primary magnetic-target">
                  Request Solution Blueprint
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="service-hero-metric glass-card" style={{ borderColor: currentService.color }}>
              <div className="metric-icon-overlay" style={{ background: currentService.color }}></div>
              <span className="metric-label font-mono">{currentService.metricName}</span>
              <h2 className="metric-value font-mono" style={{ color: 'var(--gold-accent)' }}>
                {currentService.metricVal}
              </h2>
              <p className="metric-sub">Validated across Nanak custom campaigns.</p>
            </div>
          </div>

          <div className="service-body-grid">
            <div className="features-checklist glass-card">
              <h3>Technical Execution Matrix</h3>
              <div className="features-list">
                {currentService.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <CheckCircle2 className="feature-check" style={{ color: currentService.color }} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="service-faqs glass-card">
              <h3>Frequently Explored Protocols</h3>
              <div className="faqs-list">
                {currentService.faq.map((item, idx) => (
                  <div key={idx} className="faq-box">
                    <div className="faq-q font-mono">
                      <HelpCircle size={16} className="faq-q-icon" style={{ color: currentService.color }} />
                      {item.q}
                    </div>
                    <p className="faq-a">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Long-form copy rich layout for SEO & trust */}
          <div className="service-long-copy glass-card">
            <h3>Technical Implementation & Methodology</h3>
            <div className="long-copy-paragraphs">
              {currentService.longDesc ? (
                currentService.longDesc.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))
              ) : (
                <p>Our custom scaling templates establish structural optimization layers, connecting ad queries directly with intent-qualified checkouts. We execute programmatic audits, re-target audiences dynamically, and balance ad budgets to protect client metrics and deliver high returns.</p>
              )}
            </div>
          </div>
        </div>

        <style>{`
          .services-page-wrapper {
            padding: 8rem 0 6rem 0;
            position: relative;
          }

          .back-link {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--text-muted);
            margin-bottom: 3rem;
            font-size: 0.9rem;
          }

          .back-link:hover {
            color: #ffffff;
          }

          .service-details-hero {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 4rem;
            align-items: center;
            margin-bottom: 5rem;
          }

          .service-hero-content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
          }

          .badge {
            border: 1px solid var(--border-color);
            padding: 0.3rem 0.8rem;
            border-radius: 99px;
            font-size: 0.75rem;
            font-weight: 600;
          }

          .service-details-hero h2 {
            font-size: 3rem;
            font-weight: 800;
            letter-spacing: -1.5px;
          }

          .service-tagline {
            font-size: 1.1rem;
            color: var(--text-muted);
            font-weight: 500;
          }

          .service-desc {
            color: var(--text-muted);
            font-size: 1.1rem;
            line-height: 1.7;
          }

          .service-hero-metric {
            position: relative;
            padding: 3rem;
            text-align: center;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 300px;
          }

          .metric-icon-overlay {
            position: absolute;
            top: -20px;
            right: -20px;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            filter: blur(40px);
            opacity: 0.05;
          }

          .metric-label {
            font-size: 0.85rem;
            color: var(--text-muted);
            margin-bottom: 0.8rem;
          }

          .metric-value {
            font-size: 2.2rem;
            font-weight: 800;
            color: #ffffff;
            margin-bottom: 0.5rem;
          }

          .metric-sub {
            font-size: 0.85rem;
            color: var(--text-muted);
          }

          .service-body-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            margin-bottom: 4rem;
          }

          .features-checklist, .service-faqs {
            padding: 3rem;
          }

          .features-checklist h3, .service-faqs h3, .service-long-copy h3 {
            font-size: 1.35rem;
            font-weight: 700;
            margin-bottom: 2rem;
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 0.8rem;
          }

          .features-list {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .feature-item {
            display: flex;
            gap: 1rem;
            align-items: flex-start;
          }

          .feature-item span {
            font-size: 0.95rem;
            color: var(--text-primary);
          }

          .feature-check {
            flex-shrink: 0;
          }

          .faqs-list {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .faq-box {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          .faq-q {
            font-weight: 600;
            font-size: 0.95rem;
            color: #ffffff;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .faq-a {
            color: var(--text-muted);
            font-size: 0.9rem;
            line-height: 1.6;
          }

          .service-long-copy {
            padding: 3rem;
          }

          .long-copy-paragraphs {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .long-copy-paragraphs p {
            color: var(--text-secondary);
            font-size: 1rem;
            line-height: 1.7;
          }

          @media (max-width: 900px) {
            .service-details-hero {
              grid-template-columns: 1fr;
              gap: 3rem;
            }
            .service-body-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </div>
    );
  }

  // Fallback: main capabilities directory
  return (
    <div className="services-directory-wrapper">
      <SEO 
        title="Marketing Execution Blueprints" 
        description="Explore our high-end marketing architectures, search visibility plans, paid media templates, and conversion setups."
      />

      <div className="container">
        <div className="section-title-wrapper flex-center flex-column">
          <span className="section-badge font-mono">GROWTH FRAMEWORKS</span>
          <h2>Digital Engineering Matrix</h2>
          <p className="section-subtext">Analyze our conversion systems, paid media loops, and programmatic search architectures.</p>
        </div>

        <div className="grid-3">
          {Object.keys(servicesData).map((key) => {
            const item = servicesData[key];
            return (
              <div key={key} className="glass-card service-dir-card">
                <div className="service-dir-icon">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="card-spacer"></div>
                <Link to={`/services/${key}`} className="btn-secondary read-blueprint-btn magnetic-target">
                  Read Blueprint
                  <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .services-directory-wrapper {
          padding: 8rem 0 6rem 0;
          position: relative;
        }

        .service-dir-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.25rem;
          height: 100%;
        }

        .service-dir-icon {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.5rem;
        }

        .service-dir-card h3 {
          font-size: 1.3rem;
          font-weight: 700;
        }

        .service-dir-card p {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .card-spacer {
          flex: 1;
        }

        .read-blueprint-btn {
          width: 100%;
          justify-content: center;
          font-size: 0.85rem;
        }
      `}</style>
    </div>
  );
}
