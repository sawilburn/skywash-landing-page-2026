import { Home, Building2, Landmark, Shield, CheckCircle2, MapPin, Plane, Heart } from 'lucide-react';

export function LeesburgPage() {
  const scrollToContact = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-slate-800 to-blue-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-white mb-8 border border-white/20">
              <MapPin size={20} />
              <span className="text-sm font-medium tracking-wide">Your Neighbors in Purcellville</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
              Modern Cleaning
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-200">
                Technology for
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
                Historic & New
              </span>
              <br />
              Leesburg
            </h1>

            <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-12 leading-relaxed">
              From the Historic District to Lansdowne, we provide safe drone soft washing for Leesburg's finest properties.
            </p>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-lg text-lg font-semibold hover:bg-slate-50 transform transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              Get a Local Quote
              <span className="text-xl">→</span>
            </button>

            <div className="mt-16 flex flex-wrap justify-center gap-12 text-white text-sm">
              <div className="flex items-center gap-3">
                <Heart size={24} className="text-amber-300" />
                <span className="font-medium">Locally Owned</span>
              </div>
              <div className="flex items-center gap-3">
                <Landmark size={24} className="text-amber-300" />
                <span className="font-medium">Historic Safe</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield size={24} className="text-amber-300" />
                <span className="font-medium">Fully Insured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start gap-6 mb-10">
              <Landmark className="text-amber-700 mt-2 flex-shrink-0" size={48} />
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                  Leesburg Specialists: Historic & Estate Cleaning
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-blue-600"></div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-10 border border-amber-200">
                <div className="flex items-start gap-4 mb-6">
                  <Landmark className="text-amber-700 flex-shrink-0 mt-1" size={36} />
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                    Preserving Leesburg's Historic Homes
                  </h3>
                </div>
                <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                  <p>
                    Downtown Leesburg is home to some of Virginia's most beautiful historic architecture—brick townhomes, stone facades, and delicate painted siding that date back centuries. These materials require specialized care that traditional pressure washing simply cannot provide.
                  </p>
                  <p>
                    Our <span className="font-semibold text-amber-800">soft wash technology</span> is the perfect solution for historic preservation. Instead of blasting surfaces with high pressure that can crack mortar, strip paint, or damage aging materials, we apply biodegradable cleaning solutions at low pressure. The solution does the work—killing algae, moss, and biological growth at the root—while the gentle rinse leaves historic surfaces clean and intact.
                  </p>
                  <p className="font-semibold text-amber-900">
                    Zero pressure means zero damage. Your historic home stays beautiful for generations to come.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200">
                  <div className="flex items-start gap-4 mb-6">
                    <Home className="text-blue-600 flex-shrink-0 mt-1" size={32} />
                    <h3 className="text-2xl font-bold text-slate-900">
                      Large Estate Expertise
                    </h3>
                  </div>
                  <p className="text-slate-700 text-lg leading-relaxed mb-4">
                    Neighborhoods like <span className="font-semibold">Lansdowne, River Creek, and Beacon Hill</span> feature stunning estate homes with expansive roofs, tall peaks, and complex architectural details. Traditional cleaning methods require expensive boom lifts or dangerous ladder work that can take days to complete.
                  </p>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Our drone technology accesses every peak, dormer, and roofline safely from the ground. We clean massive roofs and multi-story facades in hours, not days—with precision coverage that manual crews can't match.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-50 to-amber-50 rounded-2xl p-8 border border-slate-200">
                  <div className="flex items-start gap-4 mb-6">
                    <MapPin className="text-amber-600 flex-shrink-0 mt-1" size={32} />
                    <h3 className="text-2xl font-bold text-slate-900">
                      Your Local Neighbors
                    </h3>
                  </div>
                  <p className="text-slate-700 text-lg leading-relaxed mb-4">
                    Skywash Innovations is locally owned and operated right down Route 7 in Purcellville. We understand Loudoun County's unique architecture, from historic downtown buildings to modern estate developments.
                  </p>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    When you call us, you're working with neighbors who care about our community's homes and businesses as much as you do.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-10 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Why Leesburg Property Owners Trust Skywash
                </h3>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-1" />
                    <span className="text-lg">Safe for historic brick, stone, and delicate materials</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-1" />
                    <span className="text-lg">Efficiently cleans large estate homes</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-1" />
                    <span className="text-lg">No ladders or lifts needed on your property</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-1" />
                    <span className="text-lg">Removes algae without damaging mortar joints</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-1" />
                    <span className="text-lg">Perfect for slate, metal, and architectural shingles</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-1" />
                    <span className="text-lg">Locally owned and operated in Loudoun County</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Services for Leesburg Properties
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From historic downtown to modern estates
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-blue-600 mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-amber-300 transition-all duration-500 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Landmark className="text-white" size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Historic Brick & Stone Cleaning
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                Gentle biological cleaning that kills algae, moss, and mildew without eroding mortar or damaging historic materials. Perfect for downtown Leesburg's treasured architecture.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Zero-pressure soft wash system</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Preserves mortar joints</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Safe for painted surfaces</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Long-lasting clean</span>
                </li>
              </ul>
            </div>

            <div className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 transition-all duration-500 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Home className="text-white" size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Estate Roof Washing
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                Professional cleaning for large homes with complex rooflines. We safely clean slate, architectural shingles, and metal roofs on estates throughout Lansdowne, River Creek, and Beacon Hill.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>No crew on your roof</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Reaches tall peaks safely</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Multiple roof types</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Fast completion time</span>
                </li>
              </ul>
            </div>

            <div className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-amber-300 transition-all duration-500 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="text-white" size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Commercial & Storefront
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                Keep Leesburg's businesses and offices looking professional with regular exterior maintenance. Perfect for historic storefronts and modern commercial buildings alike.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Minimal disruption</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Safe for all facades</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Flexible scheduling</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Historic-appropriate methods</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-amber-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Heart className="text-amber-300 mx-auto mb-6" size={64} />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Your Local Neighbor You Can Trust
              </h2>
              <p className="text-xl text-amber-200">
                Locally owned & operated just down Route 7 in Purcellville
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-blue-400 mx-auto mt-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="text-amber-300 flex-shrink-0 mt-1" size={32} />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Based in Purcellville
                  </h3>
                </div>
                <p className="text-blue-100 leading-relaxed text-lg">
                  We're not a national franchise or out-of-state contractor. Skywash Innovations is family-owned and based right here in western Loudoun County. We live in the community we serve, and we take pride in helping our neighbors maintain their properties—whether it's a historic downtown home or a modern Lansdowne estate.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <Landmark className="text-amber-300 flex-shrink-0 mt-1" size={32} />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Understanding Local Architecture
                  </h3>
                </div>
                <p className="text-blue-100 leading-relaxed text-lg">
                  Leesburg's mix of 18th-century brick townhomes and modern luxury estates requires specialized knowledge. We understand how to clean delicate historic materials without causing damage, and we have the technology to efficiently service large properties. Local expertise matters.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <Plane className="text-amber-300 flex-shrink-0 mt-1" size={32} />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Led by an FAA Private Pilot
                  </h3>
                </div>
                <p className="text-blue-100 leading-relaxed text-lg">
                  Safety is our top priority. Our operations are led by an FAA-certified Private Pilot who brings aviation-level safety standards to every job. We conduct thorough pre-flight inspections, weather assessments, and safety briefings. Your property and our team are always protected by professional protocols.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <Shield className="text-amber-300 flex-shrink-0 mt-1" size={32} />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Fully Insured & Certified
                  </h3>
                </div>
                <p className="text-blue-100 leading-relaxed text-lg">
                  We carry comprehensive liability insurance and all required certifications for commercial drone operations. You can rest assured that your historic home or estate property is protected by professional coverage. We take responsibility seriously—from insurance to execution.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-amber-600/20 to-blue-600/20 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-amber-400/30">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  The Skywash Difference
                </h3>
                <p className="text-blue-100 text-lg leading-relaxed max-w-3xl mx-auto">
                  Other companies use high-pressure equipment that can damage your property. We use advanced drone technology with gentle soft wash solutions—protecting your investment while delivering superior results. It's the modern way to care for both historic and new construction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Get Your Local Quote
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Proudly serving Leesburg (20175, 20176) and Loudoun County
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-blue-600 mx-auto mt-6"></div>
          </div>

          <form className="bg-slate-50 rounded-2xl shadow-xl p-8 md:p-10 border border-slate-200">
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
                placeholder="Leesburg, VA"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="propertyType" className="block text-sm font-semibold text-slate-700 mb-2">
                Property Type
              </label>
              <select
                id="propertyType"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                required
              >
                <option value="">Select property type</option>
                <option value="historic">Historic Home / Downtown</option>
                <option value="estate">Estate / Large Home</option>
                <option value="single-family">Single Family Home</option>
                <option value="commercial">Commercial Building</option>
                <option value="storefront">Storefront / Retail</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="neighborhood" className="block text-sm font-semibold text-slate-700 mb-2">
                Neighborhood (Optional)
              </label>
              <select
                id="neighborhood"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
              >
                <option value="">Select neighborhood</option>
                <option value="downtown">Historic Downtown</option>
                <option value="lansdowne">Lansdowne</option>
                <option value="river-creek">River Creek</option>
                <option value="beacon-hill">Beacon Hill</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                Service Needed
              </label>
              <select
                id="service"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                required
              >
                <option value="">Select a service</option>
                <option value="historic">Historic Brick/Stone Cleaning</option>
                <option value="roof">Estate Roof Washing</option>
                <option value="exterior">Full Exterior Cleaning</option>
                <option value="commercial">Commercial/Storefront</option>
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
                placeholder="Historic materials, roof type, specific concerns..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-amber-700 hover:to-blue-700 transform transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-2xl"
            >
              Request Free Quote
            </button>

            <p className="text-center text-slate-600 mt-6 text-sm">
              Local response • Most quotes within 24 hours
            </p>
          </form>
        </div>
      </section>

      <section className="bg-slate-900 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-3">Skywash Innovations</h3>
              <p className="text-slate-400 text-lg">Locally Owned & Operated</p>
              <p className="text-slate-400 text-lg">Based in Purcellville, VA</p>
              <p className="text-amber-300 text-lg font-medium mt-2">Proudly serving Leesburg (20175, 20176) & Loudoun County</p>
              <p className="text-slate-500 text-sm mt-2">FAA Private Pilot Operated • Fully Insured</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-300 font-semibold mb-2 text-lg">Ready for Safe, Professional Cleaning?</p>
              <button
                onClick={scrollToContact}
                className="text-amber-400 hover:text-amber-300 font-semibold text-xl transition-colors"
              >
                Get Your Local Quote →
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
