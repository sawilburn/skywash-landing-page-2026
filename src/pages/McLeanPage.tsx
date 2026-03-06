import { Home, Building2, Sparkles, MapPin, Heart, Users, Shield, CheckCircle2, Star, Award, Clock, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DynamicSectionImage } from '../components/DynamicSectionImage';

export function McLeanPage() {
  const scrollToContact = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-white mb-8 border border-white/20">
              <Landmark size={20} className="text-cyan-300" />
              <span className="text-sm font-medium tracking-wide">Serving McLean & Chain Bridge Estates</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
                Premier Power Washing &
              </span>
              <br />
              Roof Cleaning
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-200">
                McLean Specialists
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Elite exterior house cleaning with advanced soft wash technology. Remove algae from vinyl siding and luxury roofs. Professional window cleaning for McLean's finest estates.
            </p>

            <Link
              to="/specials/residential-spring-2026"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg text-base font-bold hover:from-green-600 hover:to-emerald-700 transform transition-all duration-300 hover:scale-105 shadow-lg mb-8 border-2 border-white/20"
            >
              <Sparkles size={20} />
              Spring 2026 Special Pricing Available
              <span className="text-lg">→</span>
            </Link>

            <div className="mb-8">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-3 bg-white text-blue-900 px-10 py-5 rounded-lg text-lg font-semibold hover:bg-blue-50 transform transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                Get Your Free Quote
                <span className="text-xl">→</span>
              </button>
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-12 text-white text-sm">
              <div className="flex items-center gap-3">
                <MapPin size={24} className="text-cyan-300" />
                <span className="font-medium">Serving McLean & Potomac Estates</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield size={24} className="text-cyan-300" />
                <span className="font-medium">Fully Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={24} className="text-cyan-300" />
                <span className="font-medium">Premium Concierge Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start gap-6 mb-10">
              <Heart className="text-blue-600 mt-2 flex-shrink-0" size={48} />
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                  Elite Cleaning for McLean's Prestigious Estates
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600"></div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 md:p-10 border border-blue-200 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="text-blue-600 flex-shrink-0 mt-1" size={36} />
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                    Serving All McLean Neighborhoods
                  </h3>
                </div>
                <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                  <p>
                    Skywash Innovations delivers premier power washing, roof cleaning, and exterior house cleaning services throughout McLean, Virginia. From <span className="font-semibold">Chain Bridge estates</span> to <span className="font-semibold">Langley</span>, we serve the region's most distinguished properties with professional soft wash technology.
                  </p>
                  <p>
                    Whether your estate is in <span className="font-semibold">Potomac Hills</span>, <span className="font-semibold">Langley Forest</span>, <span className="font-semibold">McLean Hamlet</span>, or near the <span className="font-semibold">Potomac River</span>, we expertly remove algae from vinyl siding cleaning, brick, and stone with our advanced soft wash systems and provide meticulous window cleaning for luxury homes and executive properties.
                  </p>
                  <p>
                    Our premium power washing and roof cleaning services are specifically designed to maintain and enhance McLean's exceptional residential and commercial properties, from historic estates along Georgetown Pike to modern architectural masterpieces overlooking the Potomac.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
                  <div className="flex items-start gap-4 mb-6">
                    <Clock className="text-blue-600 flex-shrink-0 mt-1" size={32} />
                    <h3 className="text-2xl font-bold text-slate-900">
                      White-Glove Service
                    </h3>
                  </div>
                  <p className="text-slate-700 text-lg leading-relaxed mb-4">
                    McLean's luxury estates demand exceptional care. Our concierge power washing and exterior house cleaning services provide discreet, professional service with flexible scheduling tailored to your lifestyle.
                  </p>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Fast response, meticulous attention to detail, and zero disruption to your home—premium service for discerning homeowners.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-200">
                  <div className="flex items-start gap-4 mb-6">
                    <Users className="text-cyan-600 flex-shrink-0 mt-1" size={32} />
                    <h3 className="text-2xl font-bold text-slate-900">
                      Trusted by McLean's Elite
                    </h3>
                  </div>
                  <p className="text-slate-700 text-lg leading-relaxed mb-4">
                    Our reputation for exceptional roof cleaning, vinyl siding cleaning, and window cleaning has made us the preferred choice for McLean's most prestigious estates and executive properties.
                  </p>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    From residential soft wash treatments to commercial power washing, we deliver uncompromising quality that exceeds the highest expectations.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-slate-800 to-blue-900 rounded-2xl p-10 text-white shadow-xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Why McLean's Premier Properties Choose Skywash
                </h3>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-1" />
                    <span className="text-lg">Expert power washing services</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-1" />
                    <span className="text-lg">Premium roof cleaning</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-1" />
                    <span className="text-lg">Advanced soft wash technology</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-1" />
                    <span className="text-lg">Remove algae from vinyl siding</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-1" />
                    <span className="text-lg">Meticulous window cleaning</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-1" />
                    <span className="text-lg">Elite exterior house cleaning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              McLean Luxury Cleaning Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Premium power washing, roof cleaning, and exterior house cleaning for McLean's finest estates
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200 hover:border-blue-400 transition-all duration-500 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Home className="text-white" size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Estate Power Washing & Exterior House Cleaning
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                Preserve your McLean estate's beauty with premium exterior house cleaning. Our soft wash power washing safely removes algae from vinyl siding, brick, stone, and stucco without damage. Complete window cleaning included for crystal-clear views.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Gentle soft wash technology</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Remove algae from all surfaces</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Professional window cleaning</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Enhances property value</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-200 hover:border-cyan-400 transition-all duration-500 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="text-white" size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Luxury Roof Cleaning & Restoration
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                Premium roof cleaning for McLean's luxury estates. Our soft wash methods safely remove algae stains and black streaks with gentle power washing. Safe exterior house cleaning for slate, tile, and architectural shingles protects your investment.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-cyan-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Eliminates algae and organic growth</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-cyan-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Gentle soft wash process</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-cyan-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Extends roof lifespan</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-cyan-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Restores pristine appearance</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200 hover:border-amber-300 transition-all duration-500 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="text-white" size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Commercial Power Washing
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                McLean's executive offices and commercial properties deserve premier exterior house cleaning. Expert soft wash power washing for corporate buildings and retail spaces. We remove algae from vinyl siding, provide window cleaning, and roof cleaning services.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Professional property enhancement</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Discreet scheduling options</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Zero business disruption</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Enhances corporate image</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Serving McLean & Potomac Estates
            </h2>
            <p className="text-xl text-slate-600">
              Premium power washing and roof cleaning specialists
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <DynamicSectionImage
              section="locations/mclean-local"
              title="McLean Local Service Area"
              altText="Premium power washing and exterior cleaning services in McLean, VA"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-cyan-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Star className="text-cyan-300 mx-auto mb-6" size={64} />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Aviation-Grade Precision for Elite Properties
              </h2>
              <p className="text-xl text-cyan-200">
                FAA-certified private pilot operated with uncompromising standards
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mt-6"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                <Shield className="text-cyan-300 mx-auto mb-4" size={40} />
                <h4 className="text-xl font-bold text-white mb-3">
                  Fully Licensed & Insured
                </h4>
                <p className="text-cyan-100 text-base leading-relaxed">
                  Comprehensive liability coverage and all required certifications for safe, professional power washing and roof cleaning operations.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                <Award className="text-cyan-300 mx-auto mb-4" size={40} />
                <h4 className="text-xl font-bold text-white mb-3">
                  Premium Standards
                </h4>
                <p className="text-cyan-100 text-base leading-relaxed">
                  Aviation-grade precision and discipline applied to every exterior house cleaning and soft wash project.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                <Heart className="text-cyan-300 mx-auto mb-4" size={40} />
                <h4 className="text-xl font-bold text-white mb-3">
                  Elite Service
                </h4>
                <p className="text-cyan-100 text-base leading-relaxed">
                  Dedicated to serving McLean's prestigious estates with the highest quality vinyl siding cleaning and window cleaning services.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-cyan-400/30">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Cutting-Edge Technology Meets White-Glove Service
                </h3>
                <p className="text-cyan-100 text-lg leading-relaxed max-w-3xl mx-auto">
                  We combine state-of-the-art soft wash technology with premium expertise to deliver exceptional power washing, roof cleaning, and exterior house cleaning results. Our methods safely remove algae from vinyl siding, eliminate roof stains, and provide crystal-clear window cleaning for McLean's most distinguished estates and properties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Request Your Premium Service Quote
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Elite power washing and roof cleaning services for McLean estates
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mt-6"></div>
          </div>

          <form className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-blue-200">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-slate-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-slate-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="address" className="block text-sm font-semibold text-slate-700 mb-2">
                Property Address
              </label>
              <input
                type="text"
                id="address"
                placeholder="McLean, VA"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="neighborhood" className="block text-sm font-semibold text-slate-700 mb-2">
                Neighborhood (Optional)
              </label>
              <select
                id="neighborhood"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
              >
                <option value="">Select your neighborhood</option>
                <option value="chain-bridge">Chain Bridge Estates</option>
                <option value="langley-forest">Langley Forest</option>
                <option value="potomac-hills">Potomac Hills</option>
                <option value="mclean-hamlet">McLean Hamlet</option>
                <option value="ballantrae">Ballantrae</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                Service Interest
              </label>
              <select
                id="service"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                required
              >
                <option value="">Select service</option>
                <option value="power-washing">Estate Power Washing & Exterior House Cleaning</option>
                <option value="roof-cleaning">Luxury Roof Cleaning & Restoration</option>
                <option value="window-cleaning">Professional Window Cleaning</option>
                <option value="commercial">Commercial Power Washing</option>
                <option value="comprehensive">Complete Estate Cleaning</option>
                <option value="other">Other / Not Sure</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                Tell Us About Your Property
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none bg-white"
                placeholder="What areas need cleaning? Any specific concerns about algae, roof stains, or vinyl siding?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transform transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-2xl"
            >
              Request Your Premium Quote
            </button>

            <p className="text-center text-slate-600 mt-6 text-sm">
              White-glove service • Most quotes provided within 24 hours
            </p>
          </form>
        </div>
      </section>

      <section className="bg-slate-900 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-3">Skywash Innovations</h3>
              <p className="text-blue-300 text-xl font-semibold mb-1">Serving McLean, VA & Potomac Estates</p>
              <p className="text-slate-400 text-lg">Premium Power Washing & Roof Cleaning</p>
              <p className="text-slate-500 text-sm mt-2">FAA Private Pilot Operated • Fully Licensed & Insured</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-300 font-semibold mb-2 text-lg">Elite Exterior House Cleaning</p>
              <button
                onClick={scrollToContact}
                className="text-cyan-400 hover:text-cyan-300 font-semibold text-xl transition-colors"
              >
                Get Your Free Quote →
              </button>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500">
            © {new Date().getFullYear()} Skywash Innovations. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
}
