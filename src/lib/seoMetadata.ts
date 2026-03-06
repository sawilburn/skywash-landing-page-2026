interface PageMetadata {
  title: string;
  description: string;
  canonical: string;
}

const baseUrl = 'https://skywashinnovations.com';

export const pageMetadata: Record<string, PageMetadata> = {
  '/': {
    title: 'Skywash Innovations - Professional Power Washing & Drone Facade Cleaning | Virginia',
    description: 'FAA Part 107 certified drone facade cleaning and professional power washing services in Virginia. OSHA compliant, eco-friendly solutions for residential and commercial properties.',
    canonical: baseUrl
  },
  '/residential': {
    title: 'Residential Power Washing Services | House Washing & Roof Cleaning Virginia',
    description: 'Expert residential power washing, house washing, roof cleaning, and soft wash services. Remove algae, restore siding, and protect your home with professional exterior cleaning.',
    canonical: `${baseUrl}/residential`
  },
  '/commercial': {
    title: 'Commercial Power Washing & Drone Facade Cleaning | Skywash Innovations',
    description: 'Professional commercial power washing and UAS drone facade cleaning. Free building analysis, OSHA compliant, minimal downtime. Serving hotels, data centers, retail, and more.',
    canonical: `${baseUrl}/commercial`
  },
  '/services/house-washing': {
    title: 'Professional House Washing Services | Soft Wash & Power Washing Virginia',
    description: 'Expert house washing with safe soft wash technology. Remove algae, dirt, and stains from vinyl siding, brick, stucco, and all exterior surfaces. Protect your home investment.',
    canonical: `${baseUrl}/services/house-washing`
  },
  '/services/roof-washing': {
    title: 'Safe Roof Cleaning & Washing Services | Algae Removal Virginia',
    description: 'Professional roof cleaning using gentle soft wash methods. Safely remove algae, black streaks, and organic growth. Extend roof lifespan without damaging shingles.',
    canonical: `${baseUrl}/services/roof-washing`
  },
  '/services/solar-washing': {
    title: 'Solar Panel Cleaning & Washing Services | Drone Technology Virginia',
    description: 'Professional solar panel cleaning using advanced drone technology. Maximize energy efficiency with safe, effective cleaning. No roof access required.',
    canonical: `${baseUrl}/services/solar-washing`
  },
  '/services/commercial-window-cleaning': {
    title: 'Commercial Window Cleaning Services | High-Rise & Storefront Virginia',
    description: 'Professional commercial window cleaning for high-rise buildings, retail storefronts, and offices. Rope access and drone technology available. Crystal clear results.',
    canonical: `${baseUrl}/services/commercial-window-cleaning`
  },
  '/commercial/data-center-cleaning': {
    title: 'Data Center Exterior Cleaning Services | OSHA Compliant Virginia',
    description: 'Specialized data center exterior cleaning with zero downtime. OSHA compliant, security-conscious protocols. Power washing and facade maintenance for mission-critical facilities.',
    canonical: `${baseUrl}/commercial/data-center-cleaning`
  },
  '/commercial/hotel-cleaning': {
    title: 'Hotel Exterior Cleaning Services | Power Washing & Facade Restoration',
    description: 'Professional hotel exterior cleaning services. Enhance curb appeal with power washing, window cleaning, and facade restoration. Flexible scheduling to minimize guest disruption.',
    canonical: `${baseUrl}/commercial/hotel-cleaning`
  },
  '/commercial/large-retail-cleaning': {
    title: 'Large Retail Store Cleaning | Exterior Power Washing Virginia',
    description: 'Professional retail exterior cleaning for shopping centers and big-box stores. Power washing, window cleaning, and storefront restoration. Maintain brand image.',
    canonical: `${baseUrl}/commercial/large-retail-cleaning`
  },
  '/commercial/medical-cleaning': {
    title: 'Medical Facility Exterior Cleaning | OSHA & HIPAA Compliant Virginia',
    description: 'Professional medical facility exterior cleaning with strict compliance protocols. OSHA certified, HIPAA-aware procedures. Safe, hygienic power washing services.',
    canonical: `${baseUrl}/commercial/medical-cleaning`
  },
  '/commercial/schools-university-cleaning': {
    title: 'School & University Cleaning Services | Educational Facility Maintenance',
    description: 'Professional exterior cleaning for schools and universities. Safe, eco-friendly power washing during breaks. Maintain educational facility appearance year-round.',
    canonical: `${baseUrl}/commercial/schools-university-cleaning`
  },
  '/commercial/church-cleaning': {
    title: 'Church Exterior Cleaning Services | Steeple & Facade Restoration Virginia',
    description: 'Professional church exterior cleaning and restoration. Gentle soft wash for historic buildings. Steeple cleaning, facade restoration, and protective treatments.',
    canonical: `${baseUrl}/commercial/church-cleaning`
  },
  '/commercial/convenience-store-cleaning': {
    title: 'Convenience Store Cleaning | Gas Station Power Washing Virginia',
    description: 'Professional convenience store and gas station exterior cleaning. 24/7 scheduling, quick turnaround. Power washing, window cleaning, and canopy maintenance.',
    canonical: `${baseUrl}/commercial/convenience-store-cleaning`
  },
  '/commercial/multi-unit-residential': {
    title: 'Multi-Unit Residential Cleaning | Apartment & Condo Power Washing',
    description: 'Professional exterior cleaning for apartments, condos, and HOAs. Building washing, walkway cleaning, and common area maintenance. Increase property value.',
    canonical: `${baseUrl}/commercial/multi-unit-residential`
  },
  '/locations/arlington-stem': {
    title: 'Arlington STEM Education Program | Drone Technology & Aviation Skywash',
    description: 'Free STEM education program in Arlington, VA. Learn about drone technology, aviation, and UAS applications. FAA Part 107 pilot instruction for students.',
    canonical: `${baseUrl}/locations/arlington-stem`
  },
  '/locations/great-falls': {
    title: 'Power Washing Great Falls VA | Safe Roof Cleaning & House Washing',
    description: 'Professional power washing and roof cleaning in Great Falls, VA. Serving Potomac estates with expert soft wash services. Premium exterior house cleaning.',
    canonical: `${baseUrl}/locations/great-falls`
  },
  '/locations/ashburn': {
    title: 'Power Washing Ashburn VA | Roof Cleaning & Exterior House Washing',
    description: 'Professional power washing services in Ashburn, VA. Expert roof cleaning, house washing, and commercial cleaning. Serving Loudoun County with soft wash technology.',
    canonical: `${baseUrl}/locations/ashburn`
  },
  '/locations/leesburg': {
    title: 'Power Washing Leesburg VA | Roof Cleaning & House Washing Services',
    description: 'Professional power washing in Leesburg, VA. Expert roof cleaning, exterior house washing, and commercial services. Historic downtown and residential specialists.',
    canonical: `${baseUrl}/locations/leesburg`
  },
  '/locations/middleburg': {
    title: 'Power Washing Middleburg VA | Historic Home & Estate Cleaning',
    description: 'Professional power washing for Middleburg estates and historic homes. Gentle soft wash roof cleaning and house washing. Preserve architectural integrity.',
    canonical: `${baseUrl}/locations/middleburg`
  },
  '/locations/purcellville': {
    title: 'Power Washing Purcellville VA | Roof Cleaning & House Washing',
    description: 'Professional power washing services in Purcellville, VA. Expert roof cleaning, house washing, and commercial cleaning in Western Loudoun County.',
    canonical: `${baseUrl}/locations/purcellville`
  },
  '/locations/vienna': {
    title: 'Power Washing Vienna VA | Roof Cleaning & Exterior House Washing',
    description: 'Professional power washing in Vienna, VA. Expert roof cleaning, house washing, and soft wash services. Serving Tysons Corner and Fairfax County areas.',
    canonical: `${baseUrl}/locations/vienna`
  },
  '/locations/mclean': {
    title: 'Premium Power Washing McLean VA | Luxury Estate Cleaning Services',
    description: 'Premium power washing for McLean estates. Expert roof cleaning, house washing, and facade restoration. Serving Chain Bridge, Langley, and Potomac neighborhoods.',
    canonical: `${baseUrl}/locations/mclean`
  },
  '/locations/oakton': {
    title: 'Power Washing Oakton VA | Professional Roof Cleaning & House Washing',
    description: 'Professional power washing in Oakton, VA. Expert roof cleaning, soft wash house washing, and vinyl siding cleaning. Serving Oakton Village and Vale communities.',
    canonical: `${baseUrl}/locations/oakton`
  },
  '/locations/reston': {
    title: 'Power Washing Reston VA | Roof Cleaning & House Washing Services',
    description: 'Professional power washing in Reston, VA. Expert roof cleaning, house washing, and commercial services. Serving Reston Town Center and surrounding areas.',
    canonical: `${baseUrl}/locations/reston`
  },
  '/realtor': {
    title: 'Realtor Power Washing Services | Pre-Listing House Washing Virginia',
    description: 'Professional power washing services for realtors. Pre-listing house washing and roof cleaning to maximize curb appeal. Fast turnaround, competitive pricing.',
    canonical: `${baseUrl}/realtor`
  },
  '/partners/roofing': {
    title: 'Roofing Contractor Partnerships | Pre-Install & Post-Install Cleaning',
    description: 'Professional cleaning partnerships for roofing contractors. Pre-install roof cleaning and post-install debris removal. Enhance customer satisfaction.',
    canonical: `${baseUrl}/partners/roofing`
  },
  '/partners/pest-wildlife': {
    title: 'Pest Control Partnerships | Exterior Cleaning Services Virginia',
    description: 'Professional exterior cleaning partnerships for pest control companies. Pre-treatment and post-treatment cleaning services to enhance results.',
    canonical: `${baseUrl}/partners/pest-wildlife`
  },
  '/our-process': {
    title: 'Our Cleaning Process | Soft Wash Technology & Aviation Standards',
    description: 'Learn about our professional cleaning process. Aviation-grade safety standards, eco-friendly soft wash technology, and comprehensive quality assurance.',
    canonical: `${baseUrl}/our-process`
  },
  '/why-choose-us': {
    title: 'Why Choose Skywash | FAA Certified, OSHA Compliant Power Washing',
    description: 'Choose Skywash Innovations for FAA Part 107 certified drone services, OSHA compliant operations, and Virginia DEQ approved eco-friendly solutions.',
    canonical: `${baseUrl}/why-choose-us`
  },
  '/safety': {
    title: 'Safety Standards | FAA Part 107, OSHA Compliance, Aviation Protocols',
    description: 'Industry-leading safety standards. FAA Part 107 certified operations, OSHA compliance, aviation-grade protocols. Licensed, insured, and fully certified.',
    canonical: `${baseUrl}/safety`
  },
  '/specials/residential-spring-2026': {
    title: 'Spring 2026 Special Pricing | Residential Power Washing Deals Virginia',
    description: 'Spring 2026 special pricing on residential power washing, roof cleaning, and house washing services. Limited time offer. Book now and save.',
    canonical: `${baseUrl}/specials/residential-spring-2026`
  },
  '/careers': {
    title: 'Careers at Skywash Innovations | Join Our Professional Cleaning Team',
    description: 'Join the Skywash Innovations team. Competitive pay, professional training, FAA Part 107 certification opportunities. Build a career in innovative cleaning services.',
    canonical: `${baseUrl}/careers`
  },
  '/blogs': {
    title: 'Power Washing Blog | Cleaning Tips, Industry News & Maintenance Guides',
    description: 'Expert power washing tips, industry news, and property maintenance guides. Learn about soft wash technology, roof cleaning, and exterior home care.',
    canonical: `${baseUrl}/blogs`
  },
  '/sitemap': {
    title: 'Sitemap | Skywash Innovations Services & Locations',
    description: 'Complete sitemap of Skywash Innovations services and locations. Professional power washing throughout Virginia with drone technology.',
    canonical: `${baseUrl}/sitemap`
  }
};

export function getPageMetadata(pathname: string): PageMetadata {
  const metadata = pageMetadata[pathname];

  if (metadata) {
    return metadata;
  }

  return {
    title: 'Skywash Innovations - Professional Power Washing & Drone Cleaning Services',
    description: 'Professional power washing and drone facade cleaning services. FAA Part 107 certified, OSHA compliant, Virginia DEQ approved. Serving residential and commercial properties.',
    canonical: `${baseUrl}${pathname}`
  };
}
