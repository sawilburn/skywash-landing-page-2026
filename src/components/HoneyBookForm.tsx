import { useEffect } from 'react';
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

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (
        typeof event.data === 'string' &&
        event.data.toLowerCase().includes('honeybook') &&
        (event.data.toLowerCase().includes('submit') || event.data.toLowerCase().includes('success'))
      ) {
        navigate('/thank-you');
        return;
      }
      if (event.data && typeof event.data === 'object') {
        const type = event.data.type || event.data.event || event.data.action || '';
        if (
          typeof type === 'string' &&
          (type.toLowerCase().includes('submit') || type.toLowerCase().includes('success') || type.toLowerCase().includes('complete'))
        ) {
          navigate('/thank-you');
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
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
