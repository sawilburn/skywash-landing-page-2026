import { useEffect } from 'react';

declare global {
  interface Window {
    _HB_: { pid: string };
  }
}

interface HoneyBookFormProps {
  className?: string;
}

export function HoneyBookForm({ className }: HoneyBookFormProps) {
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
