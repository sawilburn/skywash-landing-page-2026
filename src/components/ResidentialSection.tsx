import { Droplets, Leaf, TrendingUp, Heart, Star, Calendar } from 'lucide-react';

export function ResidentialSection() {
  const benefits = [
    {
      icon: Droplets,
      title: 'Gentle Soft Wash',
      description: 'Low-pressure cleaning that protects your roof, siding, and delicate surfaces'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Biodegradable solutions safe for landscaping, pets, and the environment'
    },
    {
      icon: TrendingUp,
      title: 'Property Value',
      description: 'Increase curb appeal and home value with professional exterior cleaning'
    },
    {
      icon: Heart,
      title: 'Health Benefits',
      description: 'Remove harmful mold, mildew, and algae for a healthier living environment'
    },
    {
      icon: Star,
      title: 'Show-Ready',
      description: 'Perfect for listings, open houses, or simply enjoying your beautiful home'
    },
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'Weekend and evening appointments to fit your busy lifestyle'
    }
  ];

  return (
    <section id="residential" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-100 text-cyan-900 rounded-full text-sm font-semibold mb-4">
            Residential Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Soft Wash Excellence
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Transform your home's exterior with our gentle, effective drone-powered soft wash technology. Maximum curb appeal with zero surface damage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-white hover:bg-gradient-to-br hover:from-white hover:to-cyan-50 transition-all duration-300 shadow-sm hover:shadow-xl border border-slate-200"
            >
              <div className="w-14 h-14 bg-cyan-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500 transition-colors">
                <benefit.icon className="text-cyan-600 group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-2xl p-10 shadow-lg border border-slate-200">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">What We Clean</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Roofs & Shingles',
                'Siding & Brick',
                'Driveways',
                'Decks & Patios',
                'Fences',
                'Gutters',
                'Windows',
                'Pool Areas'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-2xl p-10 text-white shadow-xl">
            <h3 className="text-3xl font-bold mb-4">Why Homeowners Love Us</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <span className="text-cyan-200 mr-3 text-2xl">→</span>
                <div>
                  <h4 className="font-semibold mb-1">Safe for All Surfaces</h4>
                  <p className="text-cyan-100 text-sm">Our low-pressure system won't damage shingles, paint, or delicate materials</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-cyan-200 mr-3 text-2xl">→</span>
                <div>
                  <h4 className="font-semibold mb-1">Lasting Results</h4>
                  <p className="text-cyan-100 text-sm">Our treatments prevent regrowth, keeping your home cleaner longer</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-cyan-200 mr-3 text-2xl">→</span>
                <div>
                  <h4 className="font-semibold mb-1">No Ladders Needed</h4>
                  <p className="text-cyan-100 text-sm">Drone technology reaches difficult areas safely without equipment on your property</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-white text-cyan-700 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors"
            >
              Get Your Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
