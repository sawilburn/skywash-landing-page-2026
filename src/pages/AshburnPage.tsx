import { Plane, Home, Droplets, Shield, MapPin, CheckCircle2 } from 'lucide-react';

export function AshburnPage() {
  const scrollToContact = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-sky-700"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-6 border border-white/20">
              <Plane size={16} />
              <span className="text-sm font-medium">Led by an FAA Private Pilot</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Expert Drone Exterior
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                Cleaning in Ashburn, VA
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              The safest way to clean your roof and siding. HOA-compliant soft washing for Ashburn Village, Brambleton, and Broadlands.
            </p>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transform transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Get My Free Quote
              <span className="text-xl">→</span>
            </button>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-white">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-cyan-300" />
                <span>No Ladders Used</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-cyan-300" />
                <span>Zero Liability</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-cyan-300" />
                <span>HOA Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="text-blue-600 mt-1 flex-shrink-0" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                Why Ashburn Needs Drones
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed text-lg mb-6">
                Ashburn's high-density neighborhoods and townhome communities present unique challenges for traditional exterior cleaning. Properties in Ashburn Village, Brambleton, and Broadlands often feature multi-story buildings with limited yard access, making ladder work dangerous, time-consuming, and a significant liability concern for homeowners.
              </p>

              <p className="text-slate-700 leading-relaxed text-lg mb-6">
                Our drone-based soft washing technology solves these problems completely. We can safely reach any height without ever setting foot on your property with ladders. This means zero risk of falls, no damage to landscaping, and no liability for you as the homeowner.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">HOA Compliance Made Easy</h3>
                <p className="text-slate-700 leading-relaxed text-lg">
                  Many Ashburn homeowners receive HOA violation letters for green algae on vinyl siding and black streaks on roofs caused by Gloeocapsa magma. These issues are not just cosmetic—they can lead to fines and decreased property value. Our drone soft washing quickly removes these organic growths, restoring your home's appearance and keeping you compliant with HOA standards. We specialize in the gentle, effective cleaning that Ashburn's vinyl siding and architectural shingles require.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Ashburn Services
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Professional drone-powered cleaning designed for Northern Virginia homes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Home className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Roof Washing</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Safely remove black streaks caused by Gloeocapsa magma algae. Our soft wash method extends your roof's lifespan without damaging shingles—perfect for Ashburn's common architectural roofing.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Removes algae & black streaks</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Extends roof lifespan</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span>HOA compliant cleaning</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-slate-50 to-cyan-50 rounded-2xl p-8 border border-slate-200 hover:border-cyan-300 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Droplets className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Soft Wash Siding</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Gentle, effective cleaning for vinyl and Hardie board siding—the most common materials in Ashburn. Remove green algae, mold, and dirt without high-pressure damage.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={18} className="text-cyan-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Safe for vinyl & Hardie board</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={18} className="text-cyan-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Removes green algae completely</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={18} className="text-cyan-600 mr-2 mt-1 flex-shrink-0" />
                  <span>No high-pressure damage</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-slate-50 to-sky-50 rounded-2xl p-8 border border-slate-200 hover:border-sky-300 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-sky-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Plane className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Window Cleaning</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Spot-free drone rinsing for hard-to-reach windows on multi-story homes. Our advanced system leaves windows crystal clear without streaks or residue.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={18} className="text-sky-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Multi-story access with ease</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={18} className="text-sky-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Spot-free results</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={18} className="text-sky-600 mr-2 mt-1 flex-shrink-0" />
                  <span>No ladder marks on siding</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Shield className="text-cyan-400 mx-auto mb-6" size={64} />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Trust & Safety First
              </h2>
              <p className="text-xl text-blue-200">
                Your protection is our priority
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <CheckCircle2 className="text-cyan-400" size={28} />
                  Local & Insured
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  Skywash Innovations is a locally-owned Virginia business, fully insured and operating from Purcellville. We're your neighbors, serving all of Ashburn and Loudoun County with professional care and accountability.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <CheckCircle2 className="text-cyan-400" size={28} />
                  Zero Liability Risk
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  Don't risk a lawsuit by letting workers climb ladders on your property. Our drones keep everyone safe on the ground—no falls, no injuries, no claims. It's the smartest way to protect yourself and your home.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <CheckCircle2 className="text-cyan-400" size={28} />
                  FAA Private Pilot Led
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  Our operations are led by an FAA-certified Private Pilot who brings aviation-level precision and safety standards to every job. Experience the difference that professional flight expertise makes.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <CheckCircle2 className="text-cyan-400" size={28} />
                  Soft Wash Technology
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  We use professional-grade soft washing—no high pressure that can damage your roof shingles or siding. Our method is proven to clean effectively while protecting your home's exterior surfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Get Your Free Quote
            </h2>
            <p className="text-xl text-slate-600">
              Serving Ashburn Village, Brambleton, Broadlands, and all of Loudoun County
            </p>
          </div>

          <form className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-slate-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
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
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
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
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
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
                placeholder="Ashburn, VA"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                Service Needed
              </label>
              <select
                id="service"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                required
              >
                <option value="">Select a service</option>
                <option value="roof">Roof Washing</option>
                <option value="siding">Soft Wash Siding</option>
                <option value="windows">Window Cleaning</option>
                <option value="complete">Complete Exterior Package</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                Additional Details
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl"
            >
              Request Free Quote
            </button>

            <p className="text-center text-slate-600 mt-4 text-sm">
              Typically respond within 24 hours
            </p>
          </form>
        </div>
      </section>

      <section className="bg-slate-900 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Skywash Innovations</h3>
              <p className="text-slate-400">Based in Purcellville, VA</p>
              <p className="text-slate-400">Serving all of Ashburn & Loudoun County</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-300 font-semibold mb-1">Ready to Get Started?</p>
              <button
                onClick={scrollToContact}
                className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg transition-colors"
              >
                Get Your Free Quote →
              </button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            © {new Date().getFullYear()} Skywash Innovations. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
}
