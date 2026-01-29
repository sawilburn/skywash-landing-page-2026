import { useState, useEffect } from 'react';
import { Users, Handshake } from 'lucide-react';
import { getSiteImage, getImageUrl } from '../lib/siteImages';

interface ImageItem {
  name: string;
  section: string;
  logo: string;
  altText: string;
}

const defaultMemberships = [
  { name: 'Loudoun County Chamber', section: 'membership-loudoun-county-chamber', logo: 'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=200', altText: 'Loudoun County Chamber logo' },
  { name: 'Purcellville Business Association', section: 'membership-purcellville-business', logo: 'https://images.pexels.com/photos/6863516/pexels-photo-6863516.jpeg?auto=compress&cs=tinysrgb&w=200', altText: 'Purcellville Business Association logo' },
  { name: 'AOBA', section: 'membership-aoba', logo: 'https://images.pexels.com/photos/5582597/pexels-photo-5582597.jpeg?auto=compress&cs=tinysrgb&w=200', altText: 'AOBA logo' },
  { name: 'IWCA', section: 'membership-iwca', logo: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=200', altText: 'IWCA logo' },
];

const defaultPartners = [
  { name: 'Lucid BOTS', section: 'partner-lucid-bots', logo: 'https://images.pexels.com/photos/7887841/pexels-photo-7887841.jpeg?auto=compress&cs=tinysrgb&w=200', altText: 'Lucid BOTS logo' },
  { name: 'Apellix', section: 'partner-apellix', logo: 'https://images.pexels.com/photos/7887899/pexels-photo-7887899.jpeg?auto=compress&cs=tinysrgb&w=200', altText: 'Apellix logo' },
  { name: 'Midwest Washing Equipment', section: 'partner-midwest-washing', logo: 'https://images.pexels.com/photos/5668856/pexels-photo-5668856.jpeg?auto=compress&cs=tinysrgb&w=200', altText: 'Midwest Washing Equipment logo' },
  { name: 'SESW', section: 'partner-sesw', logo: 'https://images.pexels.com/photos/6863364/pexels-photo-6863364.jpeg?auto=compress&cs=tinysrgb&w=200', altText: 'SESW logo' },
  { name: 'Window Cleaning Resource', section: 'partner-window-cleaning', logo: 'https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg?auto=compress&cs=tinysrgb&w=200', altText: 'Window Cleaning Resource logo' },
];

export function PartnersAndMemberships() {
  const [memberships, setMemberships] = useState<ImageItem[]>(defaultMemberships);
  const [partners, setPartners] = useState<ImageItem[]>(defaultPartners);

  useEffect(() => {
    async function loadImages() {
      const updatedMemberships = await Promise.all(
        defaultMemberships.map(async (item) => {
          const image = await getSiteImage(item.section);
          if (image) {
            return {
              ...item,
              logo: getImageUrl(image.storage_path),
              altText: image.alt_text,
            };
          }
          return item;
        })
      );

      const updatedPartners = await Promise.all(
        defaultPartners.map(async (item) => {
          const image = await getSiteImage(item.section);
          if (image) {
            return {
              ...item,
              logo: getImageUrl(image.storage_path),
              altText: image.alt_text,
            };
          }
          return item;
        })
      );

      setMemberships(updatedMemberships);
      setPartners(updatedPartners);
    }

    loadImages();
  }, []);

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Users size={28} className="text-[#1a3c75]" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Memberships
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {memberships.map((membership) => (
              <div
                key={membership.name}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center group"
              >
                <div className="w-full h-20 mb-4 flex items-center justify-center overflow-hidden rounded-lg bg-slate-100">
                  <img
                    src={membership.logo}
                    alt={membership.altText}
                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>
                <p className="text-sm font-semibold text-slate-700 text-center">
                  {membership.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-200 pt-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Handshake size={28} className="text-[#1a3c75]" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Partners
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center group"
              >
                <div className="w-full h-20 mb-4 flex items-center justify-center overflow-hidden rounded-lg bg-slate-100">
                  <img
                    src={partner.logo}
                    alt={partner.altText}
                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>
                <p className="text-sm font-semibold text-slate-700 text-center">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
