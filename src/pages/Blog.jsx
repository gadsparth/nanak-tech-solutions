import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Search, BookOpen, Clock, Calendar, ArrowLeft, ArrowRight, 
  HelpCircle, ChevronDown, CheckSquare, ShieldCheck, Award 
} from 'lucide-react';
import SEO from '../components/SEO';

const blogArticles = {
  'saas-growth-loops': {
    title: 'Designing Organic Growth Loops: The B2B SaaS Playbook',
    desc: 'How product features, user actions, and technical indexation pathways compound into viral recurring acquisition engines without bloated advertising margins.',
    date: 'July 18, 2026',
    readTime: '8 Min Read',
    category: 'Guides',
    author: 'Devon Patel',
    role: 'Growth Architect',
    faq: [
      { q: 'What is a B2B SaaS growth loop?', a: 'A growth loop is a closed-loop system where inputs generate outputs, which feed back into inputs. For example, a user invites collaborators, who sign up, create work, and invite further collaborators.' },
      { q: 'How does it compare to a marketing funnel?', a: 'Funnels are linear: you buy traffic, convert a percentage, and restart. Loops are compounding: conversions automatically drive subsequent traffic cycles.' }
    ],
    content: `
      <h2>The Paradigm Shift from Funnels to Loops</h2>
      <p>Traditional marketing funnels are leaking assets. You source traffic, squeeze it through considerations steps, convert a small fraction, and restart the cycle from zero. Conversely, growth loops are compounding models where acquisition triggers subsequent loops.</p>
      
      <h2>Technical Loop Formations</h2>
      <p>For B2B platforms, the most effective loop is the collaboration cycle. By removing sharing barriers and designing dynamic workspace structures, you allow active users to naturally invite external stakeholders. Combining this with search index nodes creates a self-sustaining ecosystem.</p>
    `
  },
  'core-web-vitals-seo': {
    title: 'Core Web Vitals: Technical Performance Optimization for Search Rankings',
    desc: 'Unpacking LCP, INP, and CLS scores. Why page speed and semantic rendering speeds act as ranking filters in high-competition search engines.',
    date: 'June 29, 2026',
    readTime: '12 Min Read',
    category: 'SEO Insights',
    author: 'Elena Rostova',
    role: 'Tech SEO Principal',
    faq: [
      { q: 'Does page speed directly affect search rankings?', a: 'Yes, search crawlers use paint speeds (LCP) and interface responsiveness (INP) as direct core ranking factors to guarantee user experience.' },
      { q: 'How do you optimize Largest Contentful Paint?', a: 'By preloading critical assets, deferring offscreen scripts, utilizing native layouts, and optimizing image files.' }
    ],
    content: `
      <h2>Largest Contentful Paint (LCP) Calibration</h2>
      <p>LCP measures when the primary content area renders. To hit the ideal sub-2.5s mark, eliminate render-blocking Javascript, optimize hosting pathways, and lazy-load secondary media elements. Avoid heavy layout frameworks that bloat code sizes.</p>
      
      <h2>Interaction to Next Paint (INP) Optimizations</h2>
      <p>INP tracks screen response speeds following client clicks. Ensure event listeners execute light operations. If heavy computations occur, route them to background threads using web workers or debounce calls to keep frames at 60 FPS.</p>
    `
  }
};

export default function Blog() {
  const { articleId } = useParams();
  const currentArticle = blogArticles[articleId];
  
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);

  // If viewing a specific article
  if (currentArticle) {
    return (
      <div className="article-page-wrapper">
        <SEO 
          title={currentArticle.title}
          description={currentArticle.desc}
          schemaType="Article"
          schemaData={{
            'headline': currentArticle.title,
            'datePublished': currentArticle.date,
            'author': {
              '@type': 'Person',
              'name': currentArticle.author
            }
          }}
        />

        <div className="container">
          <Link to="/blog" className="back-link font-mono">
            <ArrowLeft size={16} /> Resource Index
          </Link>

          <article className="article-main">
            <div className="article-meta-info font-mono">
              <span>{currentArticle.date}</span>
              <span className="dot-sep">&middot;</span>
              <span>{currentArticle.readTime}</span>
              <span className="dot-sep">&middot;</span>
              <span className="art-cat">{currentArticle.category}</span>
            </div>

            <h1 className="article-title">{currentArticle.title}</h1>
            
            <div className="article-author-card glass-card">
              <div className="author-details">
                <span className="ath-name">{currentArticle.author}</span>
                <span className="ath-role font-mono">{currentArticle.role}</span>
              </div>
            </div>

            <div className="article-content-body" dangerouslySetInnerHTML={{ __html: currentArticle.content }} />

            {/* Injected Interactive FAQ Section */}
            <div className="article-faq-section glass-card">
              <h3>Article Technical FAQs</h3>
              <div className="article-faq-list">
                {currentArticle.faq.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`faq-item ${activeFaq === idx ? 'active' : ''}`}
                  >
                    <button 
                      className="faq-question font-mono"
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    >
                      {item.q}
                      <ChevronDown size={16} className="faq-arrow" />
                    </button>
                    <div className="faq-answer">
                      <p>{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>

        <style>{`
          .article-page-wrapper {
            padding: 8rem 0 6rem 0;
            position: relative;
          }

          .article-main {
            max-width: 800px;
            margin: 0 auto;
          }

          .article-meta-info {
            display: flex;
            gap: 0.6rem;
            color: var(--text-muted);
            font-size: 0.85rem;
            margin-bottom: 1.5rem;
          }

          .art-cat {
            color: var(--neon-cyan);
          }

          .article-title {
            font-size: 2.8rem;
            font-weight: 800;
            letter-spacing: -1.5px;
            line-height: 1.2;
            margin-bottom: 2rem;
          }

          .article-author-card {
            padding: 1rem 1.5rem;
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 3rem;
            border-radius: 8px;
          }

          .ath-name {
            font-weight: 600;
            display: block;
          }

          .ath-role {
            font-size: 0.8rem;
            color: var(--text-muted);
          }

          .article-content-body {
            line-height: 1.8;
            font-size: 1.1rem;
            color: var(--text-primary);
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }

          .article-content-body h2 {
            font-size: 1.8rem;
            font-weight: 700;
            margin-top: 1.5rem;
            border-left: 3px solid var(--neon-blue);
            padding-left: 1rem;
          }

          .article-content-body p {
            color: var(--text-muted);
          }

          .article-faq-section {
            margin-top: 4rem;
            padding: 2.5rem;
          }

          .article-faq-section h3 {
            font-size: 1.3rem;
            margin-bottom: 1.5rem;
          }

          .faq-arrow {
            transition: transform 0.3s;
          }

          .faq-item.active .faq-arrow {
            transform: rotate(180deg);
          }
        `}</style>
      </div>
    );
  }

  // Blog Directory / Resource Feed
  const filteredArticles = Object.keys(blogArticles).filter(key => {
    const art = blogArticles[key];
    return art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           art.category.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="blog-directory-wrapper">
      <SEO 
        title="Growth Resource Center" 
        description="Access technical marketing research, B2B SaaS guides, sitemap loops, and Core Web Vitals optimization guides."
      />

      <div className="container">
        <div className="section-title-wrapper flex-center flex-column">
          <span className="section-badge font-mono">RESOURCE HUB</span>
          <h2>Knowledge Engine & Guides</h2>
          <p className="section-subtext">Detailed technical analyses, growth plays, and optimization tutorials built by our architects.</p>
        </div>

        {/* Search Bar */}
        <div className="search-bar-container glass-card">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search resources by topic or segment..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Directory List */}
        <div className="grid-2 article-grid">
          {filteredArticles.map(key => {
            const art = blogArticles[key];
            return (
              <div key={key} className="glass-card article-feed-card">
                <div className="article-feed-meta font-mono">
                  <span>{art.date}</span>
                  <span className="dot-sep">&middot;</span>
                  <span className="art-cat">{art.category}</span>
                </div>
                <h3>{art.title}</h3>
                <p>{art.desc}</p>
                <div className="card-spacer"></div>
                <Link to={`/blog/${key}`} className="btn-secondary read-art-btn">
                  Analyze Post
                  <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .blog-directory-wrapper {
          padding: 8rem 0 6rem 0;
          position: relative;
        }

        .search-bar-container {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem 1.5rem;
          max-width: 600px;
          margin: 0 auto 4rem auto;
          border-radius: 99px;
        }

        .search-icon {
          color: var(--text-muted);
        }

        .search-input {
          flex: 1;
          background: none;
          border: none;
          color: #ffffff;
          font-size: 0.95rem;
        }

        .article-feed-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.25rem;
        }

        .article-feed-meta {
          display: flex;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .article-feed-card h3 {
          font-size: 1.4rem;
          font-weight: 700;
          line-height: 1.3;
        }

        .article-feed-card p {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .read-art-btn {
          width: 100%;
          justify-content: center;
          font-size: 0.85rem;
        }
      `}</style>
    </div>
  );
}
