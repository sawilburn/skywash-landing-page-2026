import { useLocation } from 'react-router-dom';

interface LocalBusinessSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  logo: string;
  image: string;
  telephone: string;
  email: string;
  address: {
    '@type': string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    '@type': string;
    latitude: string;
    longitude: string;
  };
  areaServed: Array<{
    '@type': string;
    name: string;
  }>;
  priceRange: string;
  openingHours: string[];
  sameAs: string[];
  aggregateRating?: {
    '@type': string;
    ratingValue: string;
    reviewCount: string;
  };
}

interface ServiceSchema {
  '@context': string;
  '@type': string;
  serviceType: string;
  provider: {
    '@type': string;
    name: string;
    url: string;
  };
  areaServed: Array<{
    '@type': string;
    name: string;
  }>;
  description: string;
  offers?: {
    '@type': string;
    priceCurrency: string;
    availability: string;
  };
}

interface BreadcrumbSchema {
  '@context': string;
  '@type': string;
  itemListElement: Array<{
    '@type': string;
    position: number;
    name: string;
    item: string;
  }>;
}

const localBusinessData: LocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Skywash Innovations',
  description: 'FAA Part 107 certified drone facade cleaning and professional power washing services in Virginia. OSHA compliant, eco-friendly solutions for residential and commercial properties.',
  url: 'https://skywashinnovations.com',
  logo: 'https://skywashinnovations.com/skywash-icon-192.png',
  image: 'https://skywashinnovations.com/skywash-og-image.png',
  telephone: '+1-703-755-0865',
  email: 'info@skywashinnovations.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '631 W. Main Street, #150',
    addressLocality: 'Purcellville',
    addressRegion: 'VA',
    postalCode: '20132',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '39.1376',
    longitude: '-77.7147'
  },
  areaServed: [
    { '@type': 'City', name: 'Arlington, VA' },
    { '@type': 'City', name: 'Ashburn, VA' },
    { '@type': 'City', name: 'Great Falls, VA' },
    { '@type': 'City', name: 'Leesburg, VA' },
    { '@type': 'City', name: 'McLean, VA' },
    { '@type': 'City', name: 'Middleburg, VA' },
    { '@type': 'City', name: 'Oakton, VA' },
    { '@type': 'City', name: 'Purcellville, VA' },
    { '@type': 'City', name: 'Reston, VA' },
    { '@type': 'City', name: 'Vienna, VA' }
  ],
  priceRange: '$$',
  openingHours: ['Mo-Fr 08:00-18:00', 'Sa 09:00-17:00'],
  sameAs: []
};

const serviceSchemas: Record<string, ServiceSchema> = {
  commercial: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Commercial Power Washing and Drone Facade Cleaning',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Skywash Innovations',
      url: 'https://skywashinnovations.com'
    },
    areaServed: localBusinessData.areaServed,
    description: 'Professional drone-powered facade cleaning and pressure washing for commercial properties including hotels, data centers, office buildings, and retail centers.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    }
  },
  residential: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Residential Power Washing and House Washing',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Skywash Innovations',
      url: 'https://skywashinnovations.com'
    },
    areaServed: localBusinessData.areaServed,
    description: 'Professional house washing, roof cleaning, and exterior cleaning services for residential properties using eco-friendly, soft wash techniques.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    }
  },
  'house-washing': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'House Washing and Exterior Cleaning',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Skywash Innovations',
      url: 'https://skywashinnovations.com'
    },
    areaServed: localBusinessData.areaServed,
    description: 'Professional house washing services using soft wash techniques to safely clean siding, brick, stucco, and all exterior surfaces.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    }
  },
  'roof-washing': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Roof Washing and Cleaning',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Skywash Innovations',
      url: 'https://skywashinnovations.com'
    },
    areaServed: localBusinessData.areaServed,
    description: 'Professional roof cleaning services to remove algae, moss, and stains while protecting your roof with ARMA-approved soft wash methods.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    }
  }
};

function generateBreadcrumbs(pathname: string): BreadcrumbSchema {
  const baseUrl = 'https://skywashinnovations.com';
  const paths = pathname.split('/').filter(Boolean);

  const breadcrumbs: BreadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl
      }
    ]
  };

  let currentPath = '';
  paths.forEach((path, index) => {
    currentPath += `/${path}`;
    const name = path
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    breadcrumbs.itemListElement.push({
      '@type': 'ListItem',
      position: index + 2,
      name,
      item: `${baseUrl}${currentPath}`
    });
  });

  return breadcrumbs;
}

export function StructuredData() {
  const location = useLocation();

  const getServiceSchema = (): ServiceSchema | null => {
    const path = location.pathname;

    if (path.includes('/commercial')) {
      return serviceSchemas.commercial;
    }
    if (path.includes('/residential')) {
      return serviceSchemas.residential;
    }
    if (path.includes('/house-washing')) {
      return serviceSchemas['house-washing'];
    }
    if (path.includes('/roof-washing')) {
      return serviceSchemas['roof-washing'];
    }

    return null;
  };

  const serviceSchema = getServiceSchema();
  const breadcrumbSchema = location.pathname !== '/' ? generateBreadcrumbs(location.pathname) : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessData)
        }}
      />

      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema)
          }}
        />
      )}

      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema)
          }}
        />
      )}
    </>
  );
}
