import { Users, Handshake } from 'lucide-react';

const memberships = [
  { name: 'Loudoun County Chamber', logo: 'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Purcellville Business Association', logo: 'https://images.pexels.com/photos/6863516/pexels-photo-6863516.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'AOBA', logo: 'https://images.pexels.com/photos/5582597/pexels-photo-5582597.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'IWCA', logo: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=200' },
];

const partners = [
  { name: 'Lucid BOTS', logo: 'https://images.pexels.com/photos/7887841/pexels-photo-7887841.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Apellix', logo: 'https://images.pexels.com/photos/7887899/pexels-photo-7887899.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Midwest Washing Equipment', logo: 'https://images.pexels.com/photos/5668856/pexels-photo-5668856.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'SESW', logo: 'https://images.pexels.com/photos/6863364/pexels-photo-6863364.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Window Cleaning Resource', logo: 'https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg?auto=compress&cs=tinysrgb&w=200' },
];

export function PartnersAndMemberships() {
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
                    alt={membership.name}
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
                    alt={partner.name}
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
