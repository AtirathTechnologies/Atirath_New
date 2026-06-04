import React, { useEffect } from 'react';

const SEO = ({ title, description, keywords }) => {
  useEffect(() => {
    // Update title
    document.title = title ? `${title} | Atirath Traders` : 'Atirath Traders | Global Import & Export Solutions';

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description || 'Atirath Traders is a leading global import and export company specializing in agriculture, textiles, machinery, and more. Trusted worldwide for quality and reliability.';

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywords || 'import, export, global trade, atirath traders, agriculture exports, textile imports, machinery trade, india exports';

    // Update Open Graph tags for social media
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = title || 'Atirath Traders | Global Import & Export';

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.content = description || 'Leading global import and export solutions.';

  }, [title, description, keywords]);

  return null;
};

export default SEO;
