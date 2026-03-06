import { Home, Building2, Sparkles, MapPin, Heart, Users, Shield, CheckCircle2, Star, Award, Clock, Train } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DynamicSectionImage } from '../components/DynamicSectionImage';

export function ViennaPage() {
  const scrollToContact = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-white mb-8 border border-white/20">
              <Train size={20} className="text-cyan-300" />
              <span className="text-sm font-medium tracking-wide">Serving Vienna & Tysons Corner</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
                Power Washing &
              </span>
              <br />
              Roof Cleaning
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-200">
                Vienna Experts
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Professional exterior house cleaning with soft wash technology. Remove algae from vinyl siding and roofs. Safe window cleaning for Vienna homes and businesses.
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
                <span className="font-medium">Serving Vienna & Tysons</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield size={24} className="text-cyan-300" />
                <span className="font-medium">Fully Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={24} className="text-cyan-300" />
                <span className="font-medium">Fast Local Response</span>
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
                  Professional Cleaning for Vienna's Beautiful Homes
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600"></div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 md:p-10 border border-blue-200 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="text-blue-600 flex-shrink-0 mt-1" size={36} />
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                    Serving All Vienna Neighborhoods
                  </h3>
                </div>
                <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                  <p>
                    Skywash Innovations provides expert power washing, roof cleaning, and exterior house cleaning services throughout Vienna, Virginia. From <span className="font-semibold">downtown Vienna</span> to <span className="font-semibold">Tysons Corner</span>, we serve the entire community with professional soft wash technology.
                  </p>
                  <p>
                    Whether you live in <span className="font-semibold">Windover Heights</span>, <span className="font-semibold">Hunter Mill Estates</span>, <span className="font-semibold">Fairlee</span>, or near the <span className="font-semibold">Vienna Metro</span>, we remove algae from vinyl siding cleaning with our advanced soft wash systems and provide safe window cleaning for homes and businesses throughout the area.
                  </p>
                  <p>
                    Our professional power washing and roof cleaning services are designed to protect and enhance Vienna's diverse residential and commercial properties, from historic homes near Church Street to modern townhomes and condos near Tysons.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
                  <div className="flex items-start gap-4 mb-6">
                    <Clock className="text-blue-600 flex-shrink-0 mt-1" size={32} />
                    <h3 className="text-2xl font-bold text-slate-900">
                      Convenient Scheduling
                    </h3>
                  </div>
                  <p className="text-slate-700 text-lg leading-relaxed mb-4">
                    We understand Vienna residents have busy schedules. Our flexible power washing and exterior house cleaning services work around your timeline, with weekend and evening options available.
                  </p>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Fast quotes, efficient service, and minimal disruption to your daily routine—that's the Skywash difference.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-200">
                  <div className="flex items-start gap-4 mb-6">
                    <Users className="text-cyan-600 flex-shrink-0 mt-1" size={32} />
                    <h3 className="text-2xl font-bold text-slate-900">
                      Trusted by Vienna Residents
                    </h3>
                  </div>
                  <p className="text-slate-700 text-lg leading-relaxed mb-4">
                    Our reputation for quality roof cleaning, vinyl siding cleaning, and window cleaning has made us a trusted choice throughout Vienna and Tysons Corner.
                  </p>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    From residential soft wash treatments to commercial power washing, we deliver results that exceed expectations.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-cyan-700 rounded-2xl p-10 text-white shadow-xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Why Vienna Residents Choose Skywash
                </h3>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-1" />
                    <span className="text-lg">Expert power washing services</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-1" />
                    <span className="text-lg">Professional roof cleaning</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-1" />
                    <span className="text-lg">Safe soft wash technology</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-1" />
                    <span className="text-lg">Remove algae from vinyl siding</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-1" />
                    <span className="text-lg">Complete window cleaning</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-1" />
                    <span className="text-lg">Exterior house cleaning experts</span>
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
              Vienna Cleaning Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional power washing, roof cleaning, and exterior house cleaning for Vienna homes and businesses
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200 hover:border-blue-400 transition-all duration-500 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Home className="text-white" size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Power Washing & Exterior House Cleaning
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                Keep your Vienna home looking beautiful with professional exterior house cleaning. Our soft wash power washing removes algae and grime from vinyl siding, brick, and stone without damage. Complete window cleaning included.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Safe soft wash technology</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Remove algae from vinyl siding</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Professional window cleaning</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Enhances curb appeal</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-200 hover:border-cyan-400 transition-all duration-500 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="text-white" size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Roof Cleaning & Stain Removal
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                Professional roof cleaning for Vienna homes. Our soft wash methods safely remove algae stains and black streaks with gentle power washing. Safe exterior house cleaning for all roof types protects your investment.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-cyan-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Eliminates algae and black streaks</span>
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
                  <span>Restores curb appeal</span>
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
                Vienna and Tysons businesses deserve professional exterior house cleaning. Expert soft wash power washing for storefronts, office buildings, and commercial properties. We remove algae from vinyl siding, provide window cleaning, and roof cleaning services.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Professional storefront cleaning</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Flexible scheduling options</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Minimal business disruption</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Enhances professional image</span>
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
              Serving Vienna & Tysons Corner
            </h2>
            <p className="text-xl text-slate-600">
              Professional power washing and roof cleaning experts
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <DynamicSectionImage
              section="locations/vienna-local"
              title="Vienna Local Service Area"
              altText="Professional power washing and exterior cleaning services in Vienna, VA"
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
                Professional Standards, Local Service
              </h2>
              <p className="text-xl text-cyan-200">
                FAA-certified private pilot operated with aviation-grade precision
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
                  Complete liability coverage and all required certifications for safe, professional power washing and roof cleaning operations.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                <Award className="text-cyan-300 mx-auto mb-4" size={40} />
                <h4 className="text-xl font-bold text-white mb-3">
                  Professional Standards
                </h4>
                <p className="text-cyan-100 text-base leading-relaxed">
                  Aviation-grade precision and discipline applied to every exterior house cleaning and soft wash project.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                <Heart className="text-cyan-300 mx-auto mb-4" size={40} />
                <h4 className="text-xl font-bold text-white mb-3">
                  Community Focused
                </h4>
                <p className="text-cyan-100 text-base leading-relaxed">
                  Dedicated to serving Vienna and Tysons with the highest quality vinyl siding cleaning and window cleaning services.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-cyan-400/30">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Advanced Technology Meets Professional Service
                </h3>
                <p className="text-cyan-100 text-lg leading-relaxed max-w-3xl mx-auto">
                  We combine cutting-edge soft wash technology with professional expertise to deliver exceptional power washing, roof cleaning, and exterior house cleaning results. Our methods safely remove algae from vinyl siding, eliminate roof stains, and provide crystal-clear window cleaning for Vienna and Tysons Corner properties.
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
              Get Your Free Quote
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Professional power washing and roof cleaning services for Vienna
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
                placeholder="Vienna, VA"
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
                <option value="downtown-vienna">Downtown Vienna</option>
                <option value="windover-heights">Windover Heights</option>
                <option value="hunter-mill">Hunter Mill Estates</option>
                <option value="fairlee">Fairlee</option>
                <option value="tysons">Tysons Corner</option>
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
                <option value="power-washing">Power Washing & Exterior House Cleaning</option>
                <option value="roof-cleaning">Roof Cleaning & Stain Removal</option>
                <option value="window-cleaning">Window Cleaning</option>
                <option value="commercial">Commercial Power Washing</option>
                <option value="comprehensive">Complete Property Cleaning</option>
                <option value="other">Other / Not Sure</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                Tell Us About Your Project
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
              Request Your Free Quote
            </button>

            <p className="text-center text-slate-600 mt-6 text-sm">
              Professional service • Most quotes provided within 24 hours
            </p>
          </form>
        </div>
      </section>

      <section className="bg-slate-900 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-3">Skywash Innovations</h3>
              <p className="text-blue-300 text-xl font-semibold mb-1">Serving Vienna, VA & Tysons Corner</p>
              <p className="text-slate-400 text-lg">Professional Power Washing & Roof Cleaning</p>
              <p className="text-slate-500 text-sm mt-2">FAA Private Pilot Operated • Fully Licensed & Insured</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-300 font-semibold mb-2 text-lg">Expert Exterior House Cleaning</p>
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
