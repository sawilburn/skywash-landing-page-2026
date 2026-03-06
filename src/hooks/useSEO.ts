import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getPageMetadata } from '../lib/seoMetadata';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function useSEO() {
  const location = useLocation();

  useEffect(() => {
    const metadata = getPageMetadata(location.pathname);

    document.title = metadata.title;

    const updateOrCreateMetaTag = (selector: string, attribute: string, value: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (attribute === 'property') {
          element.setAttribute('property', selector.replace('meta[property="', '').replace('"]', ''));
        } else {
          element.setAttribute('name', selector.replace('meta[name="', '').replace('"]', ''));
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    };

    updateOrCreateMetaTag('meta[name="description"]', 'name', metadata.description);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = metadata.canonical;

    updateOrCreateMetaTag('meta[property="og:title"]', 'property', metadata.title);
    updateOrCreateMetaTag('meta[property="og:description"]', 'property', metadata.description);
    updateOrCreateMetaTag('meta[property="og:url"]', 'property', metadata.canonical);
    updateOrCreateMetaTag('meta[name="twitter:title"]', 'name', metadata.title);
    updateOrCreateMetaTag('meta[name="twitter:description"]', 'name', metadata.description);
    updateOrCreateMetaTag('meta[name="twitter:url"]', 'name', metadata.canonical);

    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_title: metadata.title,
        page_location: window.location.href
      });
    }

    window.scrollTo(0, 0);
  }, [location]);
}
