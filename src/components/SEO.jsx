import React, { useEffect } from 'react';

export default function SEO({ 
  title, 
  description, 
  canonicalUrl, 
  schemaType = 'Organization',
  schemaData = {} 
}) {
  useEffect(() => {
    // 1. Title
    const formattedTitle = title ? `${title} | Nanak Marketing` : 'Nanak Marketing | Futuristic Enterprise Growth Engines';
    document.title = formattedTitle;

    // 2. Metas
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || 'World-class, premium digital marketing agency utilizing high-end SaaS analytics, custom SEO models, and paid advertising loops.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description || 'World-class, premium digital marketing agency utilizing high-end SaaS analytics, custom SEO models, and paid advertising loops.';
      document.head.appendChild(meta);
    }

    // 3. Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    const href = canonicalUrl || window.location.href;
    if (linkCanonical) {
      linkCanonical.setAttribute('href', href);
    } else {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      linkCanonical.href = href;
      document.head.appendChild(linkCanonical);
    }

    // 4. OpenGraph Title & Description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', formattedTitle);
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description || 'Enterprise-grade digital marketing agency built for scale.');

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', href);

    // 5. Schema Markup injection
    const existingSchema = document.getElementById('jsonld-schema');
    if (existingSchema) {
      existingSchema.remove();
    }

    // Standardized base organization schema
    const defaultSchema = {
      '@context': 'https://schema.org',
      '@type': schemaType,
      'name': 'Nanak Marketing',
      'url': 'https://nanakmarketing.com',
      'logo': 'https://nanakmarketing.com/logo.png',
      'description': 'Enterprise-grade digital marketing agency built for scale.',
      'sameAs': [
        'https://linkedin.com/company/nanak-marketing',
        'https://twitter.com/nanak-marketing'
      ]
    };

    // Inject matching custom schemas (LocalBusiness, Service, FAQ, Article, Breadcrumb)
    const combinedSchema = {
      ...defaultSchema,
      ...schemaData
    };

    const script = document.createElement('script');
    script.id = 'jsonld-schema';
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(combinedSchema);
    document.head.appendChild(script);

    return () => {
      // Clean up dynamic tags
      const schemaScript = document.getElementById('jsonld-schema');
      if (schemaScript) schemaScript.remove();
    };
  }, [title, description, canonicalUrl, schemaType, schemaData]);

  return null;
}
