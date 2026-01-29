import { Home, Building2, Sparkles, MapPin, Heart, Users, Plane, Shield, CheckCircle2, Star, Award, Clock } from 'lucide-react';

export function PurcellvillePage() {
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
              <Heart size={20} className="text-red-300" />
              <span className="text-sm font-medium tracking-wide">Proudly Headquartered in Purcellville</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
                Purcellville's Own
              </span>
              <br />
              Drone Exterior
              <br />
              Cleaning Experts
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
              Locally owned, high-tech cleaning for Western Loudoun. Safe soft washing for your roof and siding, right from your neighbors.
            </p>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-3 bg-white text-blue-900 px-10 py-5 rounded-lg text-lg font-semibold hover:bg-blue-50 transform transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              Get a Local Quote
              <span className="text-xl">→</span>
            </button>

            <div className="mt-16 flex flex-wrap justify-center gap-12 text-white text-sm">
              <div className="flex items-center gap-3">
                <MapPin size={24} className="text-cyan-300" />
                <span className="font-medium">Based in Purcellville</span>
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
                  The Local Advantage: Your Hometown Drone Experts
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600"></div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 md:p-10 border border-blue-200 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="text-blue-600 flex-shrink-0 mt-1" size={36} />
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                    We're Not a Chain. We're Your Neighbors.
                  </h3>
                </div>
                <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                  <p>
                    Skywash Innovations isn't a national franchise or a remote operation. We're <span className="font-semibold text-blue-800">headquartered right here in Purcellville</span>, and this is the community we call home.
                  </p>
                  <p>
                    Whether you live in <span className="font-semibold">The Villages of Purcellville</span>, <span className="font-semibold">Hirst Farm</span>, <span className="font-semibold">Wright Farm</span>, or out on a rural lot on the edge of town, we treat your home with the care of a neighbor—because that's exactly what we are.
                  </p>
                  <p>
                    When you hire Skywash, you're supporting a local business that invests back into Western Loudoun. We understand the unique character of our homes, from historic farmhouses to modern developments, and we deliver cleaning solutions tailored to our local architecture and climate.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
                  <div className="flex items-start gap-4 mb-6">
                    <Clock className="text-blue-600 flex-shrink-0 mt-1" size={32} />
                    <h3 className="text-2xl font-bold text-slate-900">
                      Fast Response Times
                    </h3>
                  </div>
                  <p className="text-slate-700 text-lg leading-relaxed mb-4">
                    Being locally based means we can respond quickly to your needs. No waiting weeks for a corporate crew to drive in from out of state. We're already here, ready to serve Purcellville residents and businesses along Main Street.
                  </p>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Same-day quotes, flexible scheduling, and rapid service delivery—that's the advantage of working with your hometown experts.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-200">
                  <div className="flex items-start gap-4 mb-6">
                    <Users className="text-cyan-600 flex-shrink-0 mt-1" size={32} />
                    <h3 className="text-2xl font-bold text-slate-900">
                      Community Reputation
                    </h3>
                  </div>
                  <p className="text-slate-700 text-lg leading-relaxed mb-4">
                    Our reputation isn't built on online ads—it's built on satisfied neighbors who see us at the grocery store, at local events, and around town. We live here, so every job we complete reflects directly on our standing in the community.
                  </p>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    That accountability ensures we deliver exceptional results every single time.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-cyan-700 rounded-2xl p-10 text-white shadow-xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Why Purcellville Residents Choose Skywash
                </h3>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-1" />
                    <span className="text-lg">Locally owned and operated</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-1" />
                    <span className="text-lg">Fast response for local customers</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-1" />
                    <span className="text-lg">Deep understanding of local architecture</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-1" />
                    <span className="text-lg">Supporting Western Loudoun businesses</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-1" />
                    <span className="text-lg">Accountability to our community</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-1" />
                    <span className="text-lg">Your neighbors, not a distant corporation</span>
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
              Local Services for Purcellville
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From residential neighborhoods to Main Street businesses, we keep Purcellville looking its best
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200 hover:border-blue-400 transition-all duration-500 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Home className="text-white" size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Residential House Washing
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                Keep your Purcellville home looking fresh and clean. Our gentle soft wash removes algae and road grime from vinyl, Hardie, and brick siding without damage.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Safe for all siding materials</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Removes green algae buildup</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Protects your investment</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Boosts curb appeal instantly</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-200 hover:border-cyan-400 transition-all duration-500 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="text-white" size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Roof Stain Removal
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                Those black streaks on your roof aren't just unsightly—they reduce your home's value. We safely remove algae stains to improve curb appeal in our local neighborhoods.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-cyan-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Eliminates black streak stains</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-cyan-600 mr-3 mt-1 flex-shrink-0" />
                  <span>No pressure damage to shingles</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-cyan-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Extends roof lifespan</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-cyan-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Manufacturer-approved methods</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200 hover:border-amber-300 transition-all duration-500 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="text-white" size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Main Street Commercial
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                Purcellville's Main Street businesses deserve to shine. We keep storefronts, signage, and commercial buildings clean and welcoming for our community.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Professional storefront cleaning</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Off-hours scheduling available</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Minimal business disruption</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Attracts more foot traffic</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-cyan-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Star className="text-cyan-300 mx-auto mb-6" size={64} />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                The Face Behind the Business
              </h2>
              <p className="text-xl text-cyan-200">
                A local pilot serving his hometown
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mt-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <Plane className="text-cyan-300 flex-shrink-0 mt-1" size={36} />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Owned by a Local FAA Private Pilot
                  </h3>
                </div>
                <p className="text-cyan-100 leading-relaxed text-lg mb-4">
                  Skywash Innovations is owned and operated by an <span className="font-semibold">FAA-certified Private Pilot</span> who lives right here in Purcellville. This isn't just a business credential—it's a commitment to precision, safety, and professional standards.
                </p>
                <p className="text-cyan-100 leading-relaxed text-lg">
                  Aviation training demands meticulous attention to detail, thorough pre-flight planning, and a disciplined approach to safety. Those same principles guide every cleaning job we complete for your home or business.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <Heart className="text-cyan-300 flex-shrink-0 mt-1" size={36} />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Lives In & Loves This Community
                  </h3>
                </div>
                <p className="text-cyan-100 leading-relaxed text-lg mb-4">
                  When you hire Skywash, you're hiring a <span className="font-semibold">certified professional who lives in and loves this community</span>. This is home. We shop at the same stores, support the same local businesses, and care about maintaining the character that makes Purcellville special.
                </p>
                <p className="text-cyan-100 leading-relaxed text-lg">
                  Your home or business isn't just another job on a corporate schedule—it's part of our shared community, and we treat it accordingly.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                <Shield className="text-cyan-300 mx-auto mb-4" size={40} />
                <h4 className="text-xl font-bold text-white mb-3">
                  Fully Licensed & Insured
                </h4>
                <p className="text-cyan-100 text-base leading-relaxed">
                  Complete liability coverage and all required certifications for safe, professional drone operations.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                <Award className="text-cyan-300 mx-auto mb-4" size={40} />
                <h4 className="text-xl font-bold text-white mb-3">
                  Professional Standards
                </h4>
                <p className="text-cyan-100 text-base leading-relaxed">
                  Aviation-grade precision and discipline applied to every cleaning project, large or small.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                <Heart className="text-cyan-300 mx-auto mb-4" size={40} />
                <h4 className="text-xl font-bold text-white mb-3">
                  Community First
                </h4>
                <p className="text-cyan-100 text-base leading-relaxed">
                  Local accountability and pride in every job. Your satisfaction directly impacts our reputation at home.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-cyan-400/30">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Technology with a Personal Touch
                </h3>
                <p className="text-cyan-100 text-lg leading-relaxed max-w-3xl mx-auto">
                  We combine cutting-edge drone technology with the personal service you expect from a local business. When you call, you're speaking with someone who understands your neighborhood, your concerns, and your expectations—because we share them. That's the Skywash difference.
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
              Get a Local Quote
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Fast, friendly service from your Purcellville neighbors
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
                placeholder="Purcellville, VA"
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
                <option value="villages">The Villages of Purcellville</option>
                <option value="hirst-farm">Hirst Farm</option>
                <option value="wright-farm">Wright Farm</option>
                <option value="downtown">Downtown / Main Street</option>
                <option value="rural">Rural Purcellville</option>
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
                <option value="house-washing">Residential House Washing</option>
                <option value="roof-cleaning">Roof Stain Removal</option>
                <option value="commercial">Main Street Commercial Cleaning</option>
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
                placeholder="What areas need cleaning? Any specific concerns?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transform transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-2xl"
            >
              Request Your Free Quote
            </button>

            <p className="text-center text-slate-600 mt-6 text-sm">
              Local service, fast response • Most quotes provided within 24 hours
            </p>
          </form>
        </div>
      </section>

      <section className="bg-slate-900 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-3">Skywash Innovations</h3>
              <p className="text-blue-300 text-xl font-semibold mb-1">Headquartered in Purcellville, VA (20132)</p>
              <p className="text-slate-400 text-lg">Serving Western Loudoun and Beyond</p>
              <p className="text-slate-500 text-sm mt-2">Locally Owned • FAA Private Pilot Operated • Fully Licensed & Insured</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-300 font-semibold mb-2 text-lg">Your Hometown Drone Cleaning Experts</p>
              <button
                onClick={scrollToContact}
                className="text-cyan-400 hover:text-cyan-300 font-semibold text-xl transition-colors"
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
