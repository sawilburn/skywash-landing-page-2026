import { Shield, Users, Award, CheckCircle, Heart, Sprout, TrendingUp, Phone, Search, XCircle, AlertTriangle, BadgeCheck, FileCheck, Leaf, HardHat, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DynamicSectionImage } from '../components/DynamicSectionImage';

export function WhyChooseUsPage() {
  const features = [
    {
      icon: Shield,
      title: 'Unmatched Safety & Risk Mitigation',
      sectionId: 'why-choose-us-safety',
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
      sectionId: 'why-choose-us-community',
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
      sectionId: 'why-choose-us-experienced',
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
      title: 'Customer-Obsessed',
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
                    <DynamicSectionImage
                      section={feature.sectionId}
                      alt={feature.title}
                      className="h-96 rounded-2xl overflow-hidden shadow-2xl object-cover"
                    />
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

      {/* Chuck in a Truck vs Splash and Dash vs Skywash Comparison */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-500/20 text-red-300 rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
              Know the Difference
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              "Chuck in a Truck" vs. "Splash and Dash" vs. Skywash Innovations
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Not all exterior cleaning companies are created equal. Here's what separates a professional, responsible company from the operators who can cost you far more than a cheap price tag.
            </p>
          </div>

          {/* Damage Image Gallery */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="relative group rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/36802113/pexels-photo-36802113.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Charred wood and peeling siding caused by high-pressure washing"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                <p className="text-white text-sm font-medium">Siding burned and stripped by excessive pressure</p>
              </div>
            </div>
            <div className="relative group rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/8553155/pexels-photo-8553155.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Burned tree trunk and scorched earth from careless power washing"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                <p className="text-white text-sm font-medium">Landscaping scorched by chemical runoff</p>
              </div>
            </div>
            <div className="relative group rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/36006800/pexels-photo-36006800.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Roof covered in moss and algae from never being cleaned"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                <p className="text-white text-sm font-medium">Moss and algae left to eat away at the roof</p>
              </div>
            </div>
            <div className="relative group rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/9127236/pexels-photo-9127236.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Cracked wall with green algae growth from neglect"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                <p className="text-white text-sm font-medium">Algae and grime etched into the surface</p>
              </div>
            </div>
          </div>

          {/* Three-Column Comparison Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Chuck in a Truck */}
            <div className="bg-slate-800/60 backdrop-blur rounded-2xl p-8 border border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">"Chuck in a Truck"</h3>
                  <p className="text-sm text-slate-400">The uninsured handyman</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-300">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>No insurance or workers' comp</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>Cash-only, no written contracts</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>No background checks on workers</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>Uses maximum pressure — burns siding, kills plants</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>Here today, gone tomorrow — no warranty</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>Wastewater dumped straight into storm drains</span>
                </li>
              </ul>
            </div>

            {/* Splash and Dash */}
            <div className="bg-slate-800/60 backdrop-blur rounded-2xl p-8 border border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">"Splash and Dash"</h3>
                  <p className="text-sm text-slate-400">The low-bid franchise</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-300">
                  <XCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Minimal insurance, high turnover</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <XCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>1099 contractors, not employees</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <XCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Rushed jobs — surface clean, deep grime remains</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <XCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>No OSHA training or safety program</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <XCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Harsh chemicals, no environmental compliance</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <XCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Upsell pressure — you pay more than the "deal"</span>
                </li>
              </ul>
            </div>

            {/* Skywash Innovations */}
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur rounded-2xl p-8 border-2 border-cyan-500/50 shadow-2xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white text-sm font-bold shadow-lg">
                THE PROFESSIONAL CHOICE
              </div>
              <div className="flex items-center gap-3 mb-6 mt-2">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <BadgeCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Skywash Innovations</h3>
                  <p className="text-sm text-cyan-300">Professional & responsible</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-200">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>All W-2 employees — no 1099 subcontractors</span>
                </li>
                <li className="flex items-start gap-3 text-slate-200">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>3rd-party background-checked team members</span>
                </li>
                <li className="flex items-start gap-3 text-slate-200">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>OSHA-certified safety program</span>
                </li>
                <li className="flex items-start gap-3 text-slate-200">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Professionally trained, soft-wash techniques</span>
                </li>
                <li className="flex items-start gap-3 text-slate-200">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>EPA Clean Water Act compliant</span>
                </li>
                <li className="flex items-start gap-3 text-slate-200">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Fully insured, written guarantees, here to stay</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Detailed Comparison Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-700 shadow-2xl">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-800">
                  <th className="px-6 py-5 text-slate-300 font-semibold text-sm uppercase tracking-wide">Comparison</th>
                  <th className="px-6 py-5 text-red-300 font-semibold text-sm uppercase tracking-wide text-center">Chuck in a Truck</th>
                  <th className="px-6 py-5 text-amber-300 font-semibold text-sm uppercase tracking-wide text-center">Splash and Dash</th>
                  <th className="px-6 py-5 text-cyan-300 font-semibold text-sm uppercase tracking-wide text-center">Skywash Innovations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                <tr className="bg-slate-900/50">
                  <td className="px-6 py-4 text-slate-200 font-medium flex items-center gap-2"><HardHat className="w-4 h-4 text-slate-400" /> Employee Status</td>
                  <td className="px-6 py-4 text-center text-slate-400">Cash / off-books</td>
                  <td className="px-6 py-4 text-center text-slate-400">1099 contractors</td>
                  <td className="px-6 py-4 text-center text-cyan-300 font-semibold">W-2 employees</td>
                </tr>
                <tr className="bg-slate-800/50">
                  <td className="px-6 py-4 text-slate-200 font-medium flex items-center gap-2"><Shield className="w-4 h-4 text-slate-400" /> Insurance</td>
                  <td className="px-6 py-4 text-center text-slate-400">None</td>
                  <td className="px-6 py-4 text-center text-slate-400">Minimal</td>
                  <td className="px-6 py-4 text-center text-cyan-300 font-semibold">Full liability & workers' comp</td>
                </tr>
                <tr className="bg-slate-900/50">
                  <td className="px-6 py-4 text-slate-200 font-medium flex items-center gap-2"><Users className="w-4 h-4 text-slate-400" /> Background Checks</td>
                  <td className="px-6 py-4 text-center text-slate-400">No</td>
                  <td className="px-6 py-4 text-center text-slate-400">Rarely</td>
                  <td className="px-6 py-4 text-center text-cyan-300 font-semibold">3rd-party verified</td>
                </tr>
                <tr className="bg-slate-800/50">
                  <td className="px-6 py-4 text-slate-200 font-medium flex items-center gap-2"><FileCheck className="w-4 h-4 text-slate-400" /> OSHA Certification</td>
                  <td className="px-6 py-4 text-center text-slate-400">No</td>
                  <td className="px-6 py-4 text-center text-slate-400">No</td>
                  <td className="px-6 py-4 text-center text-cyan-300 font-semibold">Yes, all team members</td>
                </tr>
                <tr className="bg-slate-900/50">
                  <td className="px-6 py-4 text-slate-200 font-medium flex items-center gap-2"><Award className="w-4 h-4 text-slate-400" /> Professional Training</td>
                  <td className="px-6 py-4 text-center text-slate-400">None</td>
                  <td className="px-6 py-4 text-center text-slate-400">On-the-fly</td>
                  <td className="px-6 py-4 text-center text-cyan-300 font-semibold">Formally trained</td>
                </tr>
                <tr className="bg-slate-800/50">
                  <td className="px-6 py-4 text-slate-200 font-medium flex items-center gap-2"><Leaf className="w-4 h-4 text-slate-400" /> EPA Clean Water Act</td>
                  <td className="px-6 py-4 text-center text-slate-400">Ignores it</td>
                  <td className="px-6 py-4 text-center text-slate-400">Unaware</td>
                  <td className="px-6 py-4 text-center text-cyan-300 font-semibold">Fully compliant</td>
                </tr>
                <tr className="bg-slate-900/50">
                  <td className="px-6 py-4 text-slate-200 font-medium flex items-center gap-2"><Sprout className="w-4 h-4 text-slate-400" /> Landscaping Protection</td>
                  <td className="px-6 py-4 text-center text-slate-400">Plants burned</td>
                  <td className="px-6 py-4 text-center text-slate-400">Plants at risk</td>
                  <td className="px-6 py-4 text-center text-cyan-300 font-semibold">Pre-wet & rinse all plants</td>
                </tr>
                <tr className="bg-slate-800/50">
                  <td className="px-6 py-4 text-slate-200 font-medium flex items-center gap-2"><Droplets className="w-4 h-4 text-slate-400" /> Washing Method</td>
                  <td className="px-6 py-4 text-center text-slate-400">Max pressure</td>
                  <td className="px-6 py-4 text-center text-slate-400">High pressure</td>
                  <td className="px-6 py-4 text-center text-cyan-300 font-semibold">Soft wash — safe & thorough</td>
                </tr>
                <tr className="bg-slate-900/50">
                  <td className="px-6 py-4 text-slate-200 font-medium flex items-center gap-2"><TrendingUp className="w-4 h-4 text-slate-400" /> Longevity</td>
                  <td className="px-6 py-4 text-center text-slate-400">Here today, gone tomorrow</td>
                  <td className="px-6 py-4 text-center text-slate-400">High turnover</td>
                  <td className="px-6 py-4 text-center text-cyan-300 font-semibold">Established & accountable</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Environmental Stewardship Callout */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-900/40 to-emerald-800/40 rounded-2xl p-8 border border-green-700/50">
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="w-8 h-8 text-green-400" />
                <h3 className="text-xl font-bold text-white">Environmental Stewardship</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                We are professional and responsible stewards of the environment. Skywash Innovations fully complies with the EPA Clean Water Act, recovering and properly disposing of wastewater — never letting it flow untreated into storm drains, streams, or the Chesapeake Bay watershed.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-900/40 to-blue-800/40 rounded-2xl p-8 border border-cyan-700/50">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-cyan-400" />
                <h3 className="text-xl font-bold text-white">Fully Vetted Team</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Every Skywash Innovations team member is a W-2 employee — not a 1099 contractor — with a third-party background check, OSHA certification, and professional training. The people on your property are accountable to us, and we are accountable to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-12 border-2 border-amber-200 shadow-xl">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl">
                  <Search className="w-10 h-10 text-white" />
                </div>
              </div>

              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Make Sure You Get Competing Quotes
                </h2>

                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  We encourage you to get multiple quotes and compare providers. When evaluating exterior cleaning companies, make sure to ask important questions about their business practices:
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-slate-900">Are they adequately insured?</span>
                      <p className="text-slate-700">Verify they carry proper liability and workers' compensation insurance to protect your property and their employees.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-slate-900">Do they perform rigorous background checks?</span>
                      <p className="text-slate-700">Ensure all employees undergo comprehensive background checks by independent third parties before working on your property.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-slate-900">Do they comply with all wastewater regulations?</span>
                      <p className="text-slate-700">Confirm they follow all state and federal laws regarding the discharge of wastewater as regulated by the Clean Water Act, Virginia DEQ, and local regulations.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white rounded-xl border border-amber-200">
                  <p className="text-slate-800 font-medium">
                    At Skywash Innovations, we meet and exceed all of these standards. We're fully insured, conduct thorough background checks on all team members, and strictly comply with all environmental regulations to protect our waterways and community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 via-[#1a3c75] to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience the Difference?
          </h2>

          <p className="text-xl text-slate-300 mb-10">
            Join our satisfied customers who trust Skywash Innovations for their exterior cleaning needs.
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
