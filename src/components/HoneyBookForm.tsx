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
  const didRedirect = useRef(false);

  const goToThankYou = () => {
    if (didRedirect.current) return;
    didRedirect.current = true;
    if (intervalRef.current) clearInterval(intervalRef.current);
    navigate('/thank-you');
  };

  useEffect(() => {
    // postMessage from HoneyBook or from our /honeybook-redirect bridge page
    const handleMessage = (event: MessageEvent) => {
      if (event.data && typeof event.data === 'object') {
        if (event.data.type === 'hb-form-submitted') {
          goToThankYou();
          return;
        }
        const str = JSON.stringify(event.data).toLowerCase();
        if (str.includes('thank-you') || str.includes('thank_you') || str.includes('submitted') || str.includes('success')) {
          goToThankYou();
          return;
        }
      }
      if (typeof event.data === 'string') {
        const lower = event.data.toLowerCase();
        if (lower.includes('thank-you') || lower.includes('submitted') || lower.includes('success')) {
          goToThankYou();
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Poll all iframes every 300ms — when HoneyBook redirects its iframe to our
  // domain (/thank-you or /honeybook-redirect), it becomes same-origin and
  // readable. We detect the pathname change and navigate the parent window.
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const iframes = document.querySelectorAll('iframe');
      iframes.forEach((iframe) => {
        try {
          const loc = iframe.contentWindow?.location;
          if (!loc) return;
          const path = loc.pathname + loc.search;
          if (path.includes('thank-you') || path.includes('thank_you') || path.includes('honeybook-redirect')) {
            goToThankYou();
          }
        } catch {
          // cross-origin — can't read, expected while HoneyBook is on their domain
        }
      });
    }, 300);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

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
