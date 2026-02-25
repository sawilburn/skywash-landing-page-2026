import { Shield, Users, Award, CheckCircle, Heart, Sprout, TrendingUp, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function WhyChooseUsPage() {
  const features = [
    {
      icon: Shield,
      title: 'Unmatched Safety & Risk Mitigation',
      description: 'We prioritize the safety of people, plants, and property through rigorous standards, continuous certification, and performance-based safety incentive programs.',
      benefits: [
        'Zero ladder-related incidents with drone technology',
        'Comprehensive insurance coverage',
        'OSHA-compliant safety protocols',
        'Regular equipment inspections and maintenance',
        'Safety-first culture with continuous training'
      ]
    },
    {
      icon: Heart,
      title: 'Community Engagement',
      description: 'Responsible stewards of the environment, foster local leadership through local hiring, engagement to inspire future leaders, and eco-friendly practices that protect our region.',
      benefits: [
        'Local hiring supports Northern Virginia families',
        'Eco-friendly cleaning solutions',
        'Community partnership programs',
        'Youth mentorship initiatives',
        'Environmental conservation practices'
      ]
    },
    {
      icon: Award,
      title: 'Experienced Team',
      description: 'Active leadership within premier industry groups to ensure our team remains the safest and most skilled technicians in the field, backed by the latest standards.',
      benefits: [
        'FAA-certified drone pilots',
        'Industry-leading training programs',
        'Members of premier cleaning associations',
        'Continuous professional development',
        'Latest technology and techniques'
      ]
    }
  ];

  const additionalReasons = [
    {
      icon: CheckCircle,
      title: 'Proven Results',
      description: 'Thousands of satisfied customers across Northern Virginia trust us with their properties.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation Leaders',
      description: 'First in the region to bring drone-based exterior cleaning technology to market.'
    },
    {
      icon: Sprout,
      title: 'Sustainable Practices',
      description: 'Environmentally responsible cleaning solutions that protect plants, pets, and waterways.'
    },
    {
      icon: Users,
      title: 'Customer-Focused',
      description: 'Responsive communication, flexible scheduling, and satisfaction guaranteed on every job.'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-[#1a3c75] to-slate-800 text-white">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-cyan-300 text-sm font-semibold mb-6">
              Since 2025
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Why Should You Choose Us?
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
              As Your Trusted Exterior Cleaning Partner
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                >
                  <div className="flex-1">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                      {feature.title}
                    </h2>

                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex-1 w-full">
                    <div className={`relative h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br ${
                      index === 0 ? 'from-cyan-100 to-blue-100' :
                      index === 1 ? 'from-green-100 to-emerald-100' :
                      'from-blue-100 to-indigo-100'
                    }`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon className={`w-32 h-32 ${
                          index === 0 ? 'text-cyan-400' :
                          index === 1 ? 'text-green-400' :
                          'text-blue-400'
                        } opacity-50`} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              More Reasons to Choose Skywash Innovations
            </h2>
            <p className="text-xl text-slate-600">
              We're committed to excellence in every aspect of our service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalReasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {reason.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 via-[#1a3c75] to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience the Difference?
          </h2>

          <p className="text-xl text-slate-300 mb-10">
            Join hundreds of satisfied customers who trust Skywash Innovations for their exterior cleaning needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17037550865"
              className="flex items-center justify-center space-x-2 px-8 py-4 bg-white text-[#1a3c75] rounded-lg font-bold text-lg hover:bg-slate-100 transition-all shadow-xl"
            >
              <Phone size={24} />
              <span>703-755-0865</span>
            </a>

            <Link
              to="/commercial"
              className="px-8 py-4 bg-cyan-500 text-white rounded-lg font-bold text-lg hover:bg-cyan-600 transition-all shadow-xl"
            >
              Commercial Services
            </Link>

            <Link
              to="/residential"
              className="px-8 py-4 bg-cyan-500 text-white rounded-lg font-bold text-lg hover:bg-cyan-600 transition-all shadow-xl"
            >
              Residential Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
