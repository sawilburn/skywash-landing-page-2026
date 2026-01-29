import { Plane, Crown, Shield, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

export function GreatFallsPage() {
  const scrollToContact = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[95vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-white mb-8 border border-white/20">
              <Plane size={20} />
              <span className="text-sm font-medium tracking-wide">Aviation-Grade Safety Standards</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
              Preserving Great Falls
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-200">
                Estates with Precision
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                Drone Technology
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-12 leading-relaxed">
              The safest, most effective exterior cleaning for large estates. Specialized care for slate, cedar, and custom architecture.
            </p>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-lg text-lg font-semibold hover:bg-slate-50 transform transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              Request a Private Consultation
              <span className="text-xl">→</span>
            </button>

            <div className="mt-16 flex flex-wrap justify-center gap-12 text-white text-sm">
              <div className="flex items-center gap-3">
                <Shield size={24} className="text-cyan-300" />
                <span className="font-medium">Fully Insured</span>
              </div>
              <div className="flex items-center gap-3">
                <Crown size={24} className="text-cyan-300" />
                <span className="font-medium">White Glove Service</span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles size={24} className="text-cyan-300" />
                <span className="font-medium">Non-Intrusive</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start gap-6 mb-10">
              <Shield className="text-slate-800 mt-2 flex-shrink-0" size={48} />
              <div>
                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                  Estate Care & Asset Protection
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
              </div>
            </div>

            <div className="space-y-8 text-slate-700 leading-relaxed">
              <p className="text-xl md:text-2xl font-light leading-relaxed">
                Great Falls estates feature some of the finest architectural materials in the region—slate roofing, cedar shake, clay tile, and custom stonework. These premium surfaces require specialized care that traditional pressure washing and ladder-based cleaning simply cannot provide without risk of damage.
              </p>

              <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-200">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                  Why Traditional Methods Fail Premium Materials
                </h3>
                <div className="space-y-4 text-lg">
                  <p>
                    Walking on slate, tile, or cedar shake roofs causes micro-fractures and dislodges fasteners—damage that may not be visible immediately but compromises the roof's integrity and lifespan. A single misplaced step can crack a slate tile worth hundreds of dollars.
                  </p>
                  <p>
                    High-pressure washing strips protective coatings from stone facades, damages wood grain in cedar, and forces water behind siding systems, leading to costly moisture intrusion and rot.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 border border-blue-200">
                <div className="flex items-start gap-4 mb-6">
                  <Sparkles className="text-blue-600 flex-shrink-0 mt-1" size={32} />
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                    Touchless Drone Technology: The Solution
                  </h3>
                </div>
                <div className="space-y-4 text-lg text-slate-700">
                  <p>
                    Our advanced drone soft washing system cleans delicate surfaces without anyone ever stepping foot on your roof or touching your exterior materials. Using precisely calibrated low-pressure application and professional-grade cleaning solutions, we remove organic growth, pollution stains, and environmental buildup safely and effectively.
                  </p>
                  <p className="font-semibold text-slate-900">
                    This is true estate maintenance—protecting your investment while preserving the beauty and integrity of premium materials.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="text-center p-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-slate-600 font-medium">Non-Intrusive</div>
                </div>
                <div className="text-center p-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">Zero</div>
                  <div className="text-slate-600 font-medium">Roof Traffic</div>
                </div>
                <div className="text-center p-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">Premium</div>
                  <div className="text-slate-600 font-medium">Material Safe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Estate Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized care for exceptional properties
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group bg-white rounded-2xl p-10 border border-slate-200 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Crown className="text-white" size={36} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Delicate Roof Washing
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                Specialized soft wash treatment for slate, cedar shake, and tile roofs. Our touchless system removes algae, lichen, and moss without foot traffic or high pressure.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Safe for slate, tile & cedar shake</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Zero roof traffic protection</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Extends premium material lifespan</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Preserves architectural integrity</span>
                </li>
              </ul>
            </div>

            <div className="group bg-white rounded-2xl p-10 border border-slate-200 hover:border-cyan-300 transition-all duration-500 hover:shadow-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Shield className="text-white" size={36} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Estate Exterior Cleaning
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                Gentle cleaning for large surface areas, stone facades, and stucco exteriors. No high pressure damage to mortar, wood grain, or protective coatings.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-cyan-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Stone & stucco specialized care</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-cyan-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Custom architecture preservation</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-cyan-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Large area efficiency</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-cyan-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Eco-friendly solutions</span>
                </li>
              </ul>
            </div>

            <div className="group bg-white rounded-2xl p-10 border border-slate-200 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="text-white" size={36} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                High-Access Windows
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                Crystal-clear cleaning for hard-to-reach windows on multi-story foyers, grand entryways, and architectural features without scaffolding.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Multi-story foyer windows</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Spot-free, streak-free results</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>No scaffolding required</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Minimal property disruption</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Plane className="text-cyan-300 mx-auto mb-8" size={72} />
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                White Glove Service Standard
              </h2>
              <p className="text-xl text-blue-200">
                Aviation-grade precision for your estate
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mt-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-10 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <Plane className="text-cyan-300 flex-shrink-0 mt-1" size={32} />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Private Pilot Owned & Operated
                  </h3>
                </div>
                <p className="text-blue-100 leading-relaxed text-lg">
                  Our operations are led by an FAA-certified Private Pilot who brings aviation-level safety protocols, precision navigation, and meticulous attention to detail to every estate service. This is not a typical cleaning crew—this is professional aviation expertise applied to property care.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-10 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <Shield className="text-cyan-300 flex-shrink-0 mt-1" size={32} />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Fully Insured & Bonded
                  </h3>
                </div>
                <p className="text-blue-100 leading-relaxed text-lg">
                  Comprehensive liability coverage protects your estate and property value. Unlike traditional contractors working at heights, our drone operations eliminate fall risks and ladder-related liability entirely. Your peace of mind is our foundation.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-10 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <Sparkles className="text-cyan-300 flex-shrink-0 mt-1" size={32} />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Discretion & Efficiency
                  </h3>
                </div>
                <p className="text-blue-100 leading-relaxed text-lg">
                  Drones are faster and far less intrusive than crews setting up scaffolding, ladders, and equipment around your home. We complete jobs in a fraction of the time with minimal disruption to your daily routine and landscape.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-10 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <Crown className="text-cyan-300 flex-shrink-0 mt-1" size={32} />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Concierge-Level Communication
                  </h3>
                </div>
                <p className="text-blue-100 leading-relaxed text-lg">
                  We understand the unique needs of estate management. From flexible scheduling to detailed documentation and reporting, we provide the professional service level that Great Falls properties deserve.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md rounded-2xl p-10 border border-cyan-400/30 text-center">
              <p className="text-xl md:text-2xl text-white font-light leading-relaxed">
                "Your estate represents a significant investment. We treat it with the respect, precision, and care it deserves—every single time."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Request a Private Consultation
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Serving Great Falls (22066) and Northern Virginia's finest estates
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-6"></div>
          </div>

          <form className="bg-slate-50 rounded-2xl shadow-xl p-10 md:p-12 border border-slate-200">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-slate-700 mb-3">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-5 py-4 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-slate-700 mb-3">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-5 py-4 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                  required
                />
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-3">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-5 py-4 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                required
              />
            </div>

            <div className="mb-8">
              <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-3">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-5 py-4 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                required
              />
            </div>

            <div className="mb-8">
              <label htmlFor="address" className="block text-sm font-semibold text-slate-700 mb-3">
                Estate Address
              </label>
              <input
                type="text"
                id="address"
                placeholder="Great Falls, VA 22066"
                className="w-full px-5 py-4 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                required
              />
            </div>

            <div className="mb-8">
              <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-3">
                Service Interest
              </label>
              <select
                id="service"
                className="w-full px-5 py-4 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                required
              >
                <option value="">Select a service</option>
                <option value="roof">Delicate Roof Washing</option>
                <option value="exterior">Estate Exterior Cleaning</option>
                <option value="windows">High-Access Windows</option>
                <option value="comprehensive">Comprehensive Estate Care</option>
              </select>
            </div>

            <div className="mb-8">
              <label htmlFor="roofType" className="block text-sm font-semibold text-slate-700 mb-3">
                Roof Material (if applicable)
              </label>
              <select
                id="roofType"
                className="w-full px-5 py-4 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
              >
                <option value="">Select roof material</option>
                <option value="slate">Slate</option>
                <option value="cedar">Cedar Shake</option>
                <option value="tile">Clay or Concrete Tile</option>
                <option value="architectural">Architectural Shingles</option>
                <option value="other">Other Premium Material</option>
              </select>
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-3">
                Tell Us About Your Property
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-5 py-4 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none bg-white"
                placeholder="Share any specific concerns or areas of focus..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-5 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transform transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-2xl"
            >
              Schedule Consultation
            </button>

            <p className="text-center text-slate-600 mt-6 text-sm">
              We typically respond within 24 hours with a personalized proposal
            </p>
          </form>
        </div>
      </section>

      <section className="bg-slate-900 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-3">Skywash Innovations</h3>
              <p className="text-slate-400 text-lg">Based in Purcellville, VA</p>
              <p className="text-slate-400 text-lg">Serving Great Falls (22066) & Northern Virginia</p>
              <p className="text-slate-500 text-sm mt-2">Led by an FAA Private Pilot</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-300 font-semibold mb-2 text-lg">Ready to Protect Your Estate?</p>
              <button
                onClick={scrollToContact}
                className="text-cyan-400 hover:text-cyan-300 font-semibold text-xl transition-colors"
              >
                Request Consultation →
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
