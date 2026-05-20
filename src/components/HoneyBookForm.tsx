import { useEffect } from 'react';
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
    } else {
      // Re-trigger placement scan for SPA navigation
      const event = new Event('hb-reinit');
      window.dispatchEvent(event);
    }
  }, []);

  return (
    <div id={id} className={className}>
      <div className="hb-p-69cf2c57c60881003ffe524f-1"></div>
    </div>
  );
}
