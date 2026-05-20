import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

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
  const [submitted, setSubmitted] = useState(false);

  const goToThankYou = () => {
    if (didRedirect.current) return;
    didRedirect.current = true;
    if (intervalRef.current) clearInterval(intervalRef.current);
    navigate('/thank-you');
  };

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (!event.data) return;
      if (typeof event.data === 'object') {
        if (event.data.type === 'hb-form-submitted') { goToThankYou(); return; }
        const str = JSON.stringify(event.data).toLowerCase();
        if (str.includes('thank') || str.includes('submit') || str.includes('success') || str.includes('sent')) {
          goToThankYou();
        }
      }
      if (typeof event.data === 'string') {
        const lower = event.data.toLowerCase();
        if (lower.includes('thank') || lower.includes('submit') || lower.includes('success')) {
          goToThankYou();
        }
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Poll iframes for same-origin URL change (fires when HoneyBook redirects iframe to our domain)
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      document.querySelectorAll('iframe').forEach((iframe) => {
        try {
          const path = iframe.contentWindow?.location?.pathname ?? '';
          if (path.includes('thank') || path.includes('honeybook-redirect')) {
            goToThankYou();
          }
        } catch { /* cross-origin, expected */ }
      });
    }, 300);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  // Watch for HoneyBook injecting a success/confirmation element into the page
  useEffect(() => {
    const DONE_SELECTORS = [
      '.hb-success',
      '.hb-confirmation',
      '[class*="success"]',
      '[class*="confirmation"]',
      '[class*="thank"]',
    ];
    const successText = ['thank you', 'your inquiry', 'received your', 'be in touch', 'message sent'];

    const check = (root: Element) => {
      for (const sel of DONE_SELECTORS) {
        if (root.matches?.(sel) || root.querySelector?.(sel)) {
          goToThankYou(); return;
        }
      }
      const text = root.textContent?.toLowerCase() ?? '';
      if (successText.some(t => text.includes(t))) {
        goToThankYou();
      }
    };

    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach(n => { if (n instanceof Element) check(n); });
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    window._HB_ = window._HB_ || { pid: '' };
    window._HB_.pid = '69cf2c57c60881003ffe524f';

    if (!document.querySelector('script[src*="placement-controller"]')) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js';
      document.head.appendChild(script);
    }
  }, []);

  if (submitted) {
    return (
      <div className={className} id={id}>
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <CheckCircle className="text-green-500 mb-4" size={52} />
          <h3 className="text-2xl font-bold text-slate-800 mb-2">Thank You!</h3>
          <p className="text-slate-600">Your request has been received. We'll be in touch shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div id={id} className={className}>
      <div className="hb-p-69cf2c57c60881003ffe524f-1"></div>
      {/* Fallback submit button overlay detection */}
      <button
        className="sr-only"
        aria-hidden="true"
        tabIndex={-1}
        onClick={() => setSubmitted(true)}
        id="hb-fallback-submit"
      />
    </div>
  );
}
