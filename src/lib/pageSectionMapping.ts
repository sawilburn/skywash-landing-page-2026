export interface ImageSection {
  id: string;
  displayName: string;
  suggestedAltText: string;
  fallbackImage?: string;
  description?: string;
}

export interface PageMapping {
  pageName: string;
  category: 'home' | 'commercial-services' | 'residential-services' | 'locations' | 'partners-memberships';
  sections: ImageSection[];
}

export const PAGE_SECTION_MAPPINGS: PageMapping[] = [
  {
    pageName: 'Home Page',
    category: 'home',
    sections: [
      {
        id: 'about',
        displayName: 'About Section Image',
        suggestedAltText: 'Drone cleaning technology in action',
        description: 'Main image for about section'
      },
      {
        id: 'hero',
        displayName: 'Hero Background',
        suggestedAltText: 'Professional exterior cleaning services',
        description: 'Homepage hero section background'
      }
    ]
  },
  {
    pageName: 'Commercial Window Cleaning',
    category: 'commercial-services',
    sections: [
      {
        id: 'commercial/drone-cleaning-glass.jpg',
        displayName: 'Hero & Gallery Image - Drone Cleaning',
        suggestedAltText: 'Drone cleaning commercial office building windows',
        fallbackImage: 'commercial/drone-office-building.jpg',
        description: 'First hero image and gallery showcase image'
      },
      {
        id: 'commercial/highrise-drone-wash.jpg',
        displayName: 'Content & Gallery Image - High-Rise',
        suggestedAltText: 'Professional high-rise window cleaning with drone technology',
        fallbackImage: 'commercial/clean-office-building.jpg',
        description: 'Second content image and gallery showcase image'
      }
    ]
  },
  {
    pageName: 'Data Center Cleaning',
    category: 'commercial-services',
    sections: [
      {
        id: 'datacenter/datacenter-building.jpg',
        displayName: 'Hero Image - Data Center Exterior',
        suggestedAltText: 'Secure data center facility exterior',
        fallbackImage: 'Data Center Facility',
        description: 'Main hero image for data center page'
      }
    ]
  },
  {
    pageName: 'Hotel Cleaning',
    category: 'commercial-services',
    sections: [
      {
        id: 'hotel/hotel-exterior.jpg',
        displayName: 'Hero Image - Hotel Exterior',
        suggestedAltText: 'Luxury hotel exterior cleaning',
        fallbackImage: 'Luxury Hotel',
        description: 'Main hero image for hotel cleaning page'
      }
    ]
  },
  {
    pageName: 'Church Cleaning',
    category: 'commercial-services',
    sections: [
      {
        id: 'church/white-church.jpg',
        displayName: 'Hero Image - White Church',
        suggestedAltText: 'Historic white church with pristine clean exterior',
        fallbackImage: 'Historic Church',
        description: 'Main hero image'
      },
      {
        id: 'church/historic-church.jpg',
        displayName: 'Content Image - Historic Church',
        suggestedAltText: 'Historic church architecture exterior cleaning',
        fallbackImage: 'Historic Church Architecture',
        description: 'Secondary content image'
      },
      {
        id: 'church/stone-church.jpg',
        displayName: 'Content Image - Stone Church',
        suggestedAltText: 'Beautiful stone church exterior',
        fallbackImage: 'Beautiful Church',
        description: 'Tertiary content image'
      }
    ]
  },
  {
    pageName: 'Medical Facility Cleaning',
    category: 'commercial-services',
    sections: [
      {
        id: 'medical/medical-building.jpg',
        displayName: 'Hero Image - Medical Facility',
        suggestedAltText: 'Professional medical facility exterior',
        fallbackImage: 'Medical Facility',
        description: 'Main hero image for medical cleaning page'
      }
    ]
  },
  {
    pageName: 'Schools & University Cleaning',
    category: 'commercial-services',
    sections: [
      {
        id: 'campus/university-building.jpg',
        displayName: 'Hero Image - University Building',
        suggestedAltText: 'Modern university campus building',
        fallbackImage: 'Modern Campus',
        description: 'Main hero image'
      },
      {
        id: 'campus/academic-building.jpg',
        displayName: 'Content Image - Academic Building',
        suggestedAltText: 'Academic building exterior',
        fallbackImage: 'Academic Building',
        description: 'Secondary content image'
      }
    ]
  },
  {
    pageName: 'Large Retail Cleaning',
    category: 'commercial-services',
    sections: [
      {
        id: 'commercial/drone-retail-cleaning.jpg',
        displayName: 'Content Image - Drone Retail Operation',
        suggestedAltText: 'Professional drone cleaning operation at retail center',
        fallbackImage: 'commercial/retail-center-exterior.jpg',
        description: 'Main content image showing drone operation at retail property'
      },
      {
        id: 'commercial/retail-center-exterior.jpg',
        displayName: 'Fallback Image - Retail Center',
        suggestedAltText: 'Large retail center exterior',
        fallbackImage: 'Retail Center',
        description: 'Alternative retail center exterior image'
      },
      {
        id: 'commercial/retail-storefront-glass.jpg',
        displayName: 'Gallery Image - Storefront Glass',
        suggestedAltText: 'Clean retail storefront glass windows',
        fallbackImage: 'Clean Storefront',
        description: 'Showcase image for glass cleaning services'
      },
      {
        id: 'commercial/retail-canopy.jpg',
        displayName: 'Gallery Image - Retail Canopy',
        suggestedAltText: 'Clean retail entrance canopy',
        fallbackImage: 'Retail Entrance',
        description: 'Showcase image for canopy cleaning'
      },
      {
        id: 'commercial/retail-signage.jpg',
        displayName: 'Gallery Image - Retail Signage',
        suggestedAltText: 'Clean retail monument sign',
        fallbackImage: 'Retail Signage',
        description: 'Showcase image for signage cleaning'
      }
    ]
  },
  {
    pageName: 'Commercial Services Overview',
    category: 'commercial-services',
    sections: [
      {
        id: 'commercial-office-window',
        displayName: 'Class A Office Window Cleaning',
        suggestedAltText: 'Professional office building window cleaning',
        fallbackImage: 'Office Window Cleaning',
        description: 'Commercial office section image'
      },
      {
        id: 'commercial-midrise',
        displayName: 'Mid-Rise Soft Wash',
        suggestedAltText: 'Mid-rise building exterior soft wash cleaning',
        fallbackImage: 'Mid-Rise Cleaning',
        description: 'Mid-rise building section image'
      },
      {
        id: 'commercial-datacenter',
        displayName: 'Data Center Exterior',
        suggestedAltText: 'Data center facility exterior cleaning',
        fallbackImage: 'Data Center Cleaning',
        description: 'Data center section image'
      },
      {
        id: 'commercial-solar',
        displayName: 'Commercial Solar',
        suggestedAltText: 'Commercial solar panel array cleaning',
        fallbackImage: 'Solar Farm Cleaning',
        description: 'Commercial solar section image'
      }
    ]
  },
  {
    pageName: 'House Washing',
    category: 'residential-services',
    sections: [
      {
        id: 'residential-hero.jpg',
        displayName: 'Hero Image - Clean Home',
        suggestedAltText: 'Beautiful clean home after professional exterior washing',
        fallbackImage: 'Beautiful Clean Home',
        description: 'Main hero image for house washing page'
      }
    ]
  },
  {
    pageName: 'Roof Washing',
    category: 'residential-services',
    sections: [
      {
        id: 'roof-clean.jpg',
        displayName: 'Hero Image - Clean Roof',
        suggestedAltText: 'Professional roof cleaning result',
        fallbackImage: 'Professional Roof Cleaning',
        description: 'Main hero image for roof washing page'
      }
    ]
  },
  {
    pageName: 'Solar Washing',
    category: 'residential-services',
    sections: [
      {
        id: 'solar-clean.jpg',
        displayName: 'Hero Image - Solar Panels',
        suggestedAltText: 'Clean residential solar panels on roof',
        fallbackImage: 'Professional Solar Panel Cleaning',
        description: 'Main hero image for solar washing page'
      }
    ]
  },
  {
    pageName: 'Residential Services Overview',
    category: 'residential-services',
    sections: [
      {
        id: 'residential-hero',
        displayName: 'Residential Hero Image',
        suggestedAltText: 'Beautiful clean home exterior',
        fallbackImage: 'Beautiful Clean Home',
        description: 'Main residential services overview image'
      }
    ]
  },
  {
    pageName: 'Leesburg',
    category: 'locations',
    sections: [
      {
        id: 'locations/leesburg-hero',
        displayName: 'Leesburg Hero Image',
        suggestedAltText: 'Professional cleaning services in Leesburg, VA',
        description: 'Main hero image for Leesburg location page'
      }
    ]
  },
  {
    pageName: 'Reston',
    category: 'locations',
    sections: [
      {
        id: 'locations/reston-hero',
        displayName: 'Reston Hero Image',
        suggestedAltText: 'Professional cleaning services in Reston, VA',
        description: 'Main hero image for Reston location page'
      }
    ]
  },
  {
    pageName: 'Ashburn',
    category: 'locations',
    sections: [
      {
        id: 'locations/ashburn-hero',
        displayName: 'Ashburn Hero Image',
        suggestedAltText: 'Professional cleaning services in Ashburn, VA',
        description: 'Main hero image for Ashburn location page'
      }
    ]
  },
  {
    pageName: 'Purcellville',
    category: 'locations',
    sections: [
      {
        id: 'locations/purcellville-hero',
        displayName: 'Purcellville Hero Image',
        suggestedAltText: 'Professional cleaning services in Purcellville, VA',
        description: 'Main hero image for Purcellville location page'
      }
    ]
  },
  {
    pageName: 'Middleburg',
    category: 'locations',
    sections: [
      {
        id: 'locations/middleburg-hero',
        displayName: 'Middleburg Hero Image',
        suggestedAltText: 'Professional cleaning services in Middleburg, VA',
        description: 'Main hero image for Middleburg location page'
      }
    ]
  },
  {
    pageName: 'Great Falls',
    category: 'locations',
    sections: [
      {
        id: 'locations/greatfalls-hero',
        displayName: 'Great Falls Hero Image',
        suggestedAltText: 'Professional cleaning services in Great Falls, VA',
        description: 'Main hero image for Great Falls location page'
      }
    ]
  },
  {
    pageName: 'Partners & Memberships',
    category: 'partners-memberships',
    sections: [
      {
        id: 'membership-loudoun-county-chamber',
        displayName: 'Loudoun County Chamber',
        suggestedAltText: 'Loudoun County Chamber of Commerce member',
        description: 'Chamber of Commerce membership logo'
      },
      {
        id: 'membership-purcellville-business',
        displayName: 'Purcellville Business Association',
        suggestedAltText: 'Purcellville Business Association member',
        description: 'Business association membership logo'
      },
      {
        id: 'membership-aoba',
        displayName: 'AOBA',
        suggestedAltText: 'Association of Building Owners and Managers member',
        description: 'AOBA membership logo'
      },
      {
        id: 'membership-iwca',
        displayName: 'IWCA',
        suggestedAltText: 'International Window Cleaning Association member',
        description: 'IWCA membership logo'
      },
      {
        id: 'partner-lucid-bots',
        displayName: 'Lucid BOTS',
        suggestedAltText: 'Lucid BOTS technology partner',
        description: 'Lucid BOTS partnership logo'
      },
      {
        id: 'partner-apellix',
        displayName: 'Apellix',
        suggestedAltText: 'Apellix drone technology partner',
        description: 'Apellix partnership logo'
      },
      {
        id: 'partner-midwest-washing',
        displayName: 'Midwest Washing Equipment',
        suggestedAltText: 'Midwest Washing Equipment partner',
        description: 'Midwest Washing Equipment partnership logo'
      },
      {
        id: 'partner-sesw',
        displayName: 'SESW',
        suggestedAltText: 'Southeast Softwash partner',
        description: 'SESW partnership logo'
      },
      {
        id: 'partner-window-cleaning',
        displayName: 'Window Cleaning Resource',
        suggestedAltText: 'Window Cleaning Resource partner',
        description: 'Window Cleaning Resource partnership logo'
      }
    ]
  }
];

export function getCategoryDisplayName(category: string): string {
  const map: Record<string, string> = {
    'home': 'Home Page',
    'commercial-services': 'Commercial Services',
    'residential-services': 'Residential Services',
    'locations': 'Location Pages',
    'partners-memberships': 'Partners & Memberships'
  };
  return map[category] || category;
}

export function getPagesByCategory() {
  const grouped: Record<string, PageMapping[]> = {};

  PAGE_SECTION_MAPPINGS.forEach(page => {
    if (!grouped[page.category]) {
      grouped[page.category] = [];
    }
    grouped[page.category].push(page);
  });

  return grouped;
}

export function getSectionsForPage(pageName: string): ImageSection[] {
  const page = PAGE_SECTION_MAPPINGS.find(p => p.pageName === pageName);
  return page?.sections || [];
}
