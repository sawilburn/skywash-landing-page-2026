import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

declare global {
  interface Window {
    _HB_: { pid: string };
  }
}

interface HoneyBookFormProps {
  className?: string;
}

export function HoneyBookForm({ className }: HoneyBookFormProps) {
  const navigate = useNavigate();
  const observerRef = useRef<MutationObserver | null>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (typeof event.data === 'string') {
        const lower = event.data.toLowerCase();
        if (
          (lower.includes('honeybook') || lower.includes('hb')) &&
          (lower.includes('submit') || lower.includes('success') || lower.includes('complete') || lower.includes('sent'))
        ) {
          navigate('/thank-you');
          return;
        }
      }
      if (event.data && typeof event.data === 'object') {
        const type = String(event.data.type || event.data.event || event.data.action || event.data.status || '').toLowerCase();
        if (type.includes('submit') || type.includes('success') || type.includes('complete') || type.includes('sent')) {
          navigate('/thank-you');
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [navigate]);

  // Watch the DOM for HoneyBook's success/confirmation state
  useEffect(() => {
    const successKeywords = ['thank you', 'success', 'submitted', 'confirmation', 'received', 'on its way'];

    const checkNode = (node: Element) => {
      const text = node.textContent?.toLowerCase() || '';
      return successKeywords.some((kw) => text.includes(kw));
    };

    observerRef.current = new MutationObserver((mutations) => {
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

    observerRef.current.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => observerRef.current?.disconnect();
  }, [navigate]);

  useEffect(() => {
    if (document.querySelector('script[src*="honeybook.com/p.png"]')) return;

    const tracker = document.createElement('img');
    tracker.height = 1;
    tracker.width = 1;
    tracker.style.display = 'none';
    tracker.src = 'https://www.honeybook.com/p.png?pid=69cf2c57c60881003ffe524f';
    document.body.appendChild(tracker);

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
    <div className={className}>
      <div className="hb-p-69cf2c57c60881003ffe524f-1"></div>
    </div>
  );
}
