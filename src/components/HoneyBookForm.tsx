import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

declare global {
  interface Window {
    _HB_: { pid: string };
  }
}

interface HoneyBookFormProps {
  className?: string;
  id?: string;
}

export function HoneyBookForm({ className, id }: HoneyBookFormProps) {
  const navigate = useNavigate();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Listen for postMessage from HoneyBook iframe
    const handleMessage = (event: MessageEvent) => {
      // Primary: message from our /honeybook-redirect page loaded inside HoneyBook's iframe
      if (event.data && typeof event.data === 'object' && event.data.type === 'hb-form-submitted') {
        navigate('/thank-you');
        return;
      }
      if (typeof event.data === 'string') {
        const lower = event.data.toLowerCase();
        if (
          lower.includes('thank-you') ||
          lower.includes('thank_you') ||
          ((lower.includes('honeybook') || lower.includes('hb')) &&
            (lower.includes('submit') || lower.includes('success') || lower.includes('complete') || lower.includes('sent')))
        ) {
          navigate('/thank-you');
          return;
        }
      }
      if (event.data && typeof event.data === 'object') {
        const str = JSON.stringify(event.data).toLowerCase();
        if (str.includes('thank-you') || str.includes('thank_you')) {
          navigate('/thank-you');
          return;
        }
        const type = String(event.data.type || event.data.event || event.data.action || event.data.status || '').toLowerCase();
        if (type.includes('submit') || type.includes('success') || type.includes('complete') || type.includes('sent')) {
          navigate('/thank-you');
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [navigate]);

  // Poll for HoneyBook iframes navigating to our thank-you page
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const iframes = document.querySelectorAll('iframe');
      iframes.forEach((iframe) => {
        try {
          const src = iframe.getAttribute('src') || '';
          if (src.includes('thank-you') || src.includes('thank_you')) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            navigate('/thank-you');
          }
        } catch {
          // cross-origin access blocked — expected
        }
      });
    }, 500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [navigate]);

  // Watch DOM for HoneyBook's success/confirmation state appearing in the page
  useEffect(() => {
    const successKeywords = ['thank you', 'success', 'submitted', 'confirmation', 'received', 'on its way'];

    const checkNode = (node: Element) => {
      const text = node.textContent?.toLowerCase() || '';
      return successKeywords.some((kw) => text.includes(kw));
    };

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of Array.from(mutation.addedNodes)) {
          if (node instanceof Element && checkNode(node)) {
            navigate('/thank-you');
            return;
          }
        }
        if (mutation.type === 'characterData' && mutation.target.parentElement) {
          if (checkNode(mutation.target.parentElement)) {
            navigate('/thank-you');
            return;
          }
        }
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => observer.disconnect();
  }, [navigate]);

  useEffect(() => {
    window._HB_ = window._HB_ || { pid: '' };
    window._HB_.pid = '69cf2c57c60881003ffe524f';

    if (!document.querySelector('script[src*="placement-controller"]')) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js';
      const firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode?.insertBefore(script, firstScript);
    }
  }, []);

  return (
    <div id={id} className={className}>
      <div className="hb-p-69cf2c57c60881003ffe524f-1"></div>
    </div>
  );
}
