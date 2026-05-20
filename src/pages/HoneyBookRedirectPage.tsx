import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function HoneyBookRedirectPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // If loaded inside HoneyBook's iframe, notify the parent window
    if (window.parent && window.parent !== window) {
      window.parent.postMessage({ type: 'hb-form-submitted' }, '*');
    } else {
      // Loaded as top-level page (e.g., direct navigation) — go to thank you
      navigate('/thank-you', { replace: true });
    }
  }, [navigate]);

  return null;
}
