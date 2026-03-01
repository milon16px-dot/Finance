import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
}

export default function SEO({ title, description, keywords, author = "Mich Ian Aron" }: SEOProps) {
  React.useEffect(() => {
    document.title = `${title} | Aron Financial Intelligence`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        const meta = document.createElement('meta');
        meta.name = "keywords";
        meta.content = keywords;
        document.head.appendChild(meta);
      }
    }
  }, [title, description, keywords]);

  return null;
}
