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

const HB_PID = '69cf2c57c60881003ffe524f';
const HB_DIV_CLASS = `hb-p-${HB_PID}-1`;

export function HoneyBookForm({ className, id }: HoneyBookFormProps) {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const didRedirect = useRef(false);

  const goToThankYou = () => {
    if (didRedirect.current) return;
    didRedirect.current = true;
    navigate('/thank-you');
  };

  useEffect(() => {
    window._HB_ = window._HB_ || { pid: '' };
    window._HB_.pid = HB_PID;

    if (!document.querySelector('script[src*="placement-controller"]')) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js';
      document.head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    // Watch the HoneyBook widget container. When the form is submitted, HoneyBook
    // replaces the iframe/form content with a success state — either by mutating
    // the iframe's src, adding new elements, or changing attributes.
    const widgetEl = containerRef.current?.querySelector(`.${HB_DIV_CLASS}`) ?? containerRef.current;
    if (!widgetEl) return;

    const SUCCESS_TEXT = ['thank you', 'thank-you', 'received', 'be in touch', 'submitted', 'on its way', 'sent'];
    const SUCCESS_CLASSES = ['success', 'confirmation', 'thank', 'submitted', 'complete'];

    const checkElement = (el: Node) => {
      if (!(el instanceof Element)) return false;
      const text = el.textContent?.toLowerCase() ?? '';
      const cls = (el.getAttribute?.('class') ?? '').toLowerCase();
      if (SUCCESS_TEXT.some(t => text.includes(t))) return true;
      if (SUCCESS_CLASSES.some(c => cls.includes(c))) return true;
      // Check all descendant classes
      const allEls = el.querySelectorAll?.('*') ?? [];
      for (const child of allEls) {
        const childCls = (child.getAttribute('class') ?? '').toLowerCase();
        if (SUCCESS_CLASSES.some(c => childCls.includes(c))) return true;
      }
      return false;
    };

    // Also check iframes for same-origin src changes
    const checkIframes = () => {
      document.querySelectorAll('iframe').forEach(iframe => {
        try {
          const path = iframe.contentWindow?.location?.pathname ?? '';
          if (path.includes('thank') || path.includes('success') || path.includes('redirect')) {
            goToThankYou();
          }
          // Check iframe document content if same-origin
          const iframeText = iframe.contentDocument?.body?.textContent?.toLowerCase() ?? '';
          if (SUCCESS_TEXT.some(t => iframeText.includes(t))) {
            goToThankYou();
          }
        } catch { /* cross-origin */ }
      });
    };

    const observer = new MutationObserver((mutations) => {
      checkIframes();
      for (const mutation of mutations) {
        // Check added nodes
        for (const node of mutation.addedNodes) {
          if (checkElement(node)) { goToThankYou(); return; }
        }
        // Check attribute changes on existing elements (e.g. class swap)
        if (mutation.type === 'attributes' && mutation.target instanceof Element) {
          if (checkElement(mutation.target)) { goToThankYou(); return; }
        }
        // Check the mutated target's current text
        if (mutation.target instanceof Element && checkElement(mutation.target)) {
          goToThankYou(); return;
        }
      }
    });

    // Observe the widget container AND the whole body (HoneyBook may inject outside the widget div)
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'src', 'style'],
      characterData: true,
    });

    // Also poll iframe content every 500ms as fallback
    const pollInterval = setInterval(checkIframes, 500);

    return () => {
      observer.disconnect();
      clearInterval(pollInterval);
    };
  }, []);

  // postMessage fallback
  useEffect(() => {
    const handle = (e: MessageEvent) => {
      const data = e.data;
      if (!data) return;
      const str = (typeof data === 'string' ? data : JSON.stringify(data)).toLowerCase();
      if (str.includes('thank') || str.includes('submit') || str.includes('success') || str.includes('hb-form')) {
        goToThankYou();
      }
    };
    window.addEventListener('message', handle);
    return () => window.removeEventListener('message', handle);
  }, []);

  return (
    <div id={id} className={className} ref={containerRef}>
      <div className={HB_DIV_CLASS}></div>
    </div>
  );
}
