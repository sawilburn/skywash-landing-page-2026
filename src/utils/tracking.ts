declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'js',
      targetOrAction: string | Date,
      params?: Record<string, unknown>
    ) => void;
  }
}

export type ConversionType = 'form_submit' | 'phone_click' | 'email_click' | 'quote_request';

export interface ConversionParams {
  value?: number;
  currency?: string;
  transaction_id?: string;
  form_type?: string;
  service_type?: string;
}

export function trackPageView(pageTitle: string, pageLocation: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: pageTitle,
      page_location: pageLocation,
      page_path: window.location.pathname,
      send_to: ['AW-17355421094', 'G-XXXXXXXXXX']
    });
  }
}

export function trackConversion(
  conversionType: ConversionType = 'form_submit',
  params: ConversionParams = {}
) {
  if (typeof window !== 'undefined' && window.gtag) {
    const conversionLabels: Record<ConversionType, string> = {
      form_submit: 'AW-17355421094/form_submit',
      phone_click: 'AW-17355421094/phone_click',
      email_click: 'AW-17355421094/email_click',
      quote_request: 'AW-17355421094/quote_request'
    };

    window.gtag('event', 'conversion', {
      send_to: conversionLabels[conversionType],
      value: params.value || 0,
      currency: params.currency || 'USD',
      transaction_id: params.transaction_id,
      event_category: 'engagement',
      event_label: params.form_type || params.service_type || conversionType
    });

    window.gtag('event', conversionType, {
      event_category: 'lead_generation',
      event_label: params.form_type || params.service_type,
      value: params.value || 0
    });
  }
}

export function trackPhoneClick(phoneNumber: string, location: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'phone_click', {
      event_category: 'contact',
      event_label: phoneNumber,
      phone_location: location
    });

    trackConversion('phone_click', {
      service_type: location,
      value: 50
    });
  }
}

export function trackEmailClick(emailAddress: string, location: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'email_click', {
      event_category: 'contact',
      event_label: emailAddress,
      email_location: location
    });

    trackConversion('email_click', {
      service_type: location,
      value: 25
    });
  }
}

export function trackFormSubmit(formType: string, serviceType?: string) {
  trackConversion('form_submit', {
    form_type: formType,
    service_type: serviceType,
    value: 100,
    transaction_id: `form_${Date.now()}`
  });
}

export function trackQuoteRequest(serviceType: string, estimatedValue?: number) {
  trackConversion('quote_request', {
    service_type: serviceType,
    value: estimatedValue || 150
  });
}
