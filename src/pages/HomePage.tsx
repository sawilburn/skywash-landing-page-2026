import { useState, useEffect } from 'react';
import { Shield, Zap, Target, Clock, DollarSign, Leaf, Building2, Home, BookOpen, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SupabaseImage } from '../components/SupabaseImage';
import { PartnersAndMemberships } from '../components/PartnersAndMemberships';
import { getSiteImage, SiteImage } from '../lib/siteImages';

export function HomePage() {
  const [aboutImage, setAboutImage] = useState<SiteImage | null>(null);

  useEffect(() => {
    getSiteImage('about').then(setAboutImage);
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-[#1a3c75] to-slate-800 text-white pt-20">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-cyan-300 text-sm font-semibold mb-6">
              Unmanned Aerial Systems Technology
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Expert Roof Washing, Window Cleaning & Exterior House Washing
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Safer. Smarter. Faster.
              <br />
              <br />
              Skywash Innovations brings safe, high-tech exterior cleaning to Northern Virginia's Fairfax and Loudoun counties. We specialize in drone soft washing for roofs, siding, and windows, eliminating the risk of ladders for both residential and commercial properties.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="tel:+1234567890"
                className="flex items-center justify-center space-x-2 px-8 py-4 bg-white text-[#1a3c75] rounded-lg font-bold text-lg hover:bg-slate-100 transition-all shadow-xl"
              >
                <Phone size={24} />
                <span>Call for Instant Quote</span>
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

            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
                <div className="text-sm text-slate-300">Ground-Safe</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">3x</div>
                <div className="text-sm text-slate-300">Faster</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">0</div>
                <div className="text-sm text-slate-300">Ladder Accidents</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Why Drone Technology?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Traditional cleaning methods put workers at risk and damage property. Our UAS technology transforms the industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border-2 border-green-100 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Risk Mitigation</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>No ladders - zero fall risk</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>No boots on roofs - protect your property</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>Operators stay safely on the ground</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>Reduced liability for property owners</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-100 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Efficiency Optimization</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">✓</span>
                  <span>3x faster than traditional methods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">✓</span>
                  <span>Access hard-to-reach areas effortlessly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">✓</span>
                  <span>Minimal setup and breakdown time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">✓</span>
                  <span>Reduced business downtime</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl border-2 border-emerald-100 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center mb-6">
                <Leaf className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Environmentally Friendly</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2 mt-1">✓</span>
                  <span>Eco-conscious cleaning solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2 mt-1">✓</span>
                  <span>EPA compliant processes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2 mt-1">✓</span>
                  <span>Water-efficient technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2 mt-1">✓</span>
                  <span>Clean Water Act compliant</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#1a3c75] to-[#2a5a95] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Security & Compliance
            </h2>
            <p className="text-xl text-slate-200">
              Fully certified and authorized to operate in regulated airspace
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Shield className="mx-auto mb-3 text-cyan-400" size={32} />
              <h3 className="font-bold mb-2">SFRA Authorized</h3>
              <p className="text-sm text-slate-200">Special Flight Rules Area certified</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Shield className="mx-auto mb-3 text-cyan-400" size={32} />
              <h3 className="font-bold mb-2">FRZ Cleared</h3>
              <p className="text-sm text-slate-200">Flight Restricted Zone approved</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Shield className="mx-auto mb-3 text-cyan-400" size={32} />
              <h3 className="font-bold mb-2">Class B Airspace</h3>
              <p className="text-sm text-slate-200">Authorized for controlled airspace</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Shield className="mx-auto mb-3 text-cyan-400" size={32} />
              <h3 className="font-bold mb-2">Background Checked</h3>
              <p className="text-sm text-slate-200">Fully vetted operators</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="tel:+1234567890"
              className="inline-flex items-center px-8 py-4 bg-cyan-500 text-white rounded-lg font-bold text-lg hover:bg-cyan-600 transition-all shadow-xl"
            >
              <Phone className="mr-2" size={20} />
              Click to Call for Quote
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Link
              to="/commercial"
              className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-[#1a3c75]"
            >
              <div className="w-20 h-20 bg-[#1a3c75] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Building2 className="text-white" size={40} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Commercial</h3>
              <p className="text-lg text-slate-600 mb-6">
                Enterprise-grade solutions for data centers, warehouses, high-rises, and industrial facilities.
              </p>
              <span className="text-[#1a3c75] font-semibold group-hover:underline">
                Learn More →
              </span>
            </Link>

            <Link
              to="/residential"
              className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-cyan-500"
            >
              <div className="w-20 h-20 bg-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Home className="text-white" size={40} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Residential</h3>
              <p className="text-lg text-slate-600 mb-6">
                Premium soft wash cleaning for roofs, siding, gutters, and hardscapes. Safe for your family and pets.
              </p>
              <span className="text-cyan-600 font-semibold group-hover:underline">
                Learn More →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                About Skywash Innovations
              </h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                We're pioneering the future of exterior cleaning with cutting-edge drone technology. Based in Purcellville, Virginia, we serve both commercial and residential clients across the region with a commitment to safety, quality, and innovation.
              </p>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Our team combines expertise in aviation, cleaning technology, and customer service to deliver results that exceed expectations while keeping everyone safe on the ground.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="text-[#1a3c75]" size={24} />
                  <span className="text-slate-700">Part 107 Certified & Fully Insured</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Leaf className="text-green-600" size={24} />
                  <span className="text-slate-700">Eco-Friendly & EPA Compliant</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="text-[#1a3c75]" size={24} />
                  <span className="text-slate-700">Locally Owned & Operated</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-200 rounded-2xl shadow-2xl overflow-hidden min-h-[400px] flex items-center justify-center">
              {aboutImage ? (
                <SupabaseImage
                  path={aboutImage.storage_path}
                  alt={aboutImage.alt_text}
                  className="w-full h-full object-cover"
                  fallback="Drone Cleaning Technology"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full">
                  <span className="text-slate-400">Drone Cleaning Technology</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="service-areas" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MapPin className="text-blue-900" size={40} />
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                Proudly Serving Loudoun & Fairfax Counties
              </h2>
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From our headquarters in Purcellville, Skywash Innovations brings aviation-grade exterior cleaning to Northern Virginia.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Featured Locations</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link
                  to="/locations/ashburn"
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center group border-2 border-transparent hover:border-blue-900"
                >
                  <MapPin className="text-blue-900 mx-auto mb-3 group-hover:scale-110 transition-transform" size={28} />
                  <h4 className="font-bold text-blue-900 group-hover:text-blue-600 transition-colors text-lg">
                    Ashburn
                  </h4>
                </Link>

                <Link
                  to="/locations/greatfalls"
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center group border-2 border-transparent hover:border-blue-900"
                >
                  <MapPin className="text-blue-900 mx-auto mb-3 group-hover:scale-110 transition-transform" size={28} />
                  <h4 className="font-bold text-blue-900 group-hover:text-blue-600 transition-colors text-lg">
                    Great Falls
                  </h4>
                </Link>

                <Link
                  to="/locations/reston"
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center group border-2 border-transparent hover:border-blue-900"
                >
                  <MapPin className="text-blue-900 mx-auto mb-3 group-hover:scale-110 transition-transform" size={28} />
                  <h4 className="font-bold text-blue-900 group-hover:text-blue-600 transition-colors text-lg">
                    Reston
                  </h4>
                </Link>

                <Link
                  to="/locations/leesburg"
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center group border-2 border-transparent hover:border-blue-900"
                >
                  <MapPin className="text-blue-900 mx-auto mb-3 group-hover:scale-110 transition-transform" size={28} />
                  <h4 className="font-bold text-blue-900 group-hover:text-blue-600 transition-colors text-lg">
                    Leesburg
                  </h4>
                </Link>

                <Link
                  to="/locations/middleburg"
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center group border-2 border-transparent hover:border-blue-900"
                >
                  <MapPin className="text-blue-900 mx-auto mb-3 group-hover:scale-110 transition-transform" size={28} />
                  <h4 className="font-bold text-blue-900 group-hover:text-blue-600 transition-colors text-lg">
                    Middleburg
                  </h4>
                </Link>

                <Link
                  to="/locations/purcellville"
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center group border-2 border-transparent hover:border-blue-900"
                >
                  <MapPin className="text-blue-900 mx-auto mb-3 group-hover:scale-110 transition-transform" size={28} />
                  <h4 className="font-bold text-blue-900 group-hover:text-blue-600 transition-colors text-lg">
                    Purcellville
                  </h4>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Other Service Areas</h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                <div className="bg-white/70 p-4 rounded-lg shadow-sm text-center border border-slate-200">
                  <MapPin className="text-slate-500 mx-auto mb-1" size={18} />
                  <p className="font-medium text-slate-700 text-sm">Sterling</p>
                </div>

                <div className="bg-white/70 p-4 rounded-lg shadow-sm text-center border border-slate-200">
                  <MapPin className="text-slate-500 mx-auto mb-1" size={18} />
                  <p className="font-medium text-slate-700 text-sm">Chantilly</p>
                </div>

                <div className="bg-white/70 p-4 rounded-lg shadow-sm text-center border border-slate-200">
                  <MapPin className="text-slate-500 mx-auto mb-1" size={18} />
                  <p className="font-medium text-slate-700 text-sm">Centreville</p>
                </div>

                <div className="bg-white/70 p-4 rounded-lg shadow-sm text-center border border-slate-200">
                  <MapPin className="text-slate-500 mx-auto mb-1" size={18} />
                  <p className="font-medium text-slate-700 text-sm">Herndon</p>
                </div>

                <div className="bg-white/70 p-4 rounded-lg shadow-sm text-center border border-slate-200">
                  <MapPin className="text-slate-500 mx-auto mb-1" size={18} />
                  <p className="font-medium text-slate-700 text-sm">South Riding</p>
                </div>

                <div className="bg-white/70 p-4 rounded-lg shadow-sm text-center border border-slate-200">
                  <MapPin className="text-slate-500 mx-auto mb-1" size={18} />
                  <p className="font-medium text-slate-700 text-sm">Aldie</p>
                </div>

                <div className="bg-white/70 p-4 rounded-lg shadow-sm text-center border border-slate-200">
                  <MapPin className="text-slate-500 mx-auto mb-1" size={18} />
                  <p className="font-medium text-slate-700 text-sm">Hamilton</p>
                </div>

                <div className="bg-white/70 p-4 rounded-lg shadow-sm text-center border border-slate-200">
                  <MapPin className="text-slate-500 mx-auto mb-1" size={18} />
                  <p className="font-medium text-slate-700 text-sm">Lovettsville</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-600 text-lg">
                Don't see your area? We serve all of Northern Virginia.{' '}
                <a href="tel:+1234567890" className="text-blue-900 font-semibold hover:text-blue-600 transition-colors">
                  Contact us
                </a>{' '}
                to discuss your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="resources" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Resources & Training
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Learn more about drone cleaning technology and industry best practices
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
              <BookOpen className="text-[#1a3c75] mb-4" size={32} />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Blog & Insights</h3>
              <p className="text-slate-600 mb-4">
                Industry news, technology updates, and cleaning tips from our experts.
              </p>
              <button className="text-[#1a3c75] font-semibold hover:underline">
                Coming Soon
              </button>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
              <Shield className="text-[#1a3c75] mb-4" size={32} />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Safety Standards</h3>
              <p className="text-slate-600 mb-4">
                Learn about our commitment to safety, compliance, and environmental responsibility.
              </p>
              <button className="text-[#1a3c75] font-semibold hover:underline">
                Coming Soon
              </button>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
              <Target className="text-[#1a3c75] mb-4" size={32} />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Training Center</h3>
              <p className="text-slate-600 mb-4">
                Professional training programs for drone-based exterior cleaning operations.
              </p>
              <button className="text-[#1a3c75] font-semibold hover:underline">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>

      <PartnersAndMemberships />

      <section id="contact" className="py-24 bg-gradient-to-br from-[#1a3c75] to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Get in touch for a free consultation and see how drone technology can transform your property maintenance.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a
              href="tel:+1234567890"
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all cursor-pointer"
            >
              <Phone className="text-cyan-400 mx-auto mb-3" size={32} />
              <h3 className="font-bold mb-2">Click to Call</h3>
              <p className="text-slate-300 text-sm">Instant phone consultation</p>
            </a>
            <a
              href="mailto:info@skywashinnovations.com"
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all cursor-pointer"
            >
              <Mail className="text-cyan-400 mx-auto mb-3" size={32} />
              <h3 className="font-bold mb-2">Email Quote Request</h3>
              <p className="text-slate-300 text-sm">info@skywashinnovations.com</p>
            </a>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <MapPin className="text-cyan-400 mx-auto mb-3" size={32} />
              <h3 className="font-bold mb-2">Location</h3>
              <p className="text-slate-300 text-sm">Serving Northern Virginia</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/commercial"
              className="px-8 py-4 bg-white text-[#1a3c75] rounded-lg font-bold hover:bg-slate-100 transition-all"
            >
              Commercial Quote
            </Link>
            <Link
              to="/residential"
              className="px-8 py-4 bg-cyan-500 text-white rounded-lg font-bold hover:bg-cyan-600 transition-all"
            >
              Residential Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
