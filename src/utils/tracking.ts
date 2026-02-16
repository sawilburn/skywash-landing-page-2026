declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'js',
      targetOrAction: string | Date,
      params?: Record<string, unknown>
    ) => void;
  }
}

export function trackConversion() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-17355421094/DEFAULT'
    });
  }
}
