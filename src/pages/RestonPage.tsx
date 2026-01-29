import { Plane, Building2, Home, TreeDeciduous, Zap, Shield, CheckCircle2, Users } from 'lucide-react';

export function RestonPage() {
  const scrollToContact = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-800 to-blue-800"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-white mb-8 border border-white/20">
              <Zap size={20} />
              <span className="text-sm font-medium tracking-wide">Advanced Drone Technology</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
              Reston's Premier
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                Drone Exterior
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                Cleaning Service
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-12 leading-relaxed">
              Safe, effective soft washing for Reston's townhomes, clusters, and business parks. No ladders required.
            </p>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-lg text-lg font-semibold hover:bg-slate-50 transform transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              Get a Quote for Your Property
              <span className="text-xl">→</span>
            </button>

            <div className="mt-16 flex flex-wrap justify-center gap-12 text-white text-sm">
              <div className="flex items-center gap-3">
                <Shield size={24} className="text-cyan-300" />
                <span className="font-medium">FAA Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <Home size={24} className="text-cyan-300" />
                <span className="font-medium">Townhome Specialists</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap size={24} className="text-cyan-300" />
                <span className="font-medium">Fast & Efficient</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start gap-6 mb-10">
              <TreeDeciduous className="text-blue-600 mt-2 flex-shrink-0" size={48} />
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                  Built for Reston's Unique Environment
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
              </div>
            </div>

            <div className="space-y-8 text-slate-700 leading-relaxed">
              <p className="text-xl md:text-2xl font-light leading-relaxed">
                Reston's beautiful tree canopy is a defining feature of the community—but it also creates the perfect conditions for algae, moss, and mildew growth on roofs and siding. Heavy shade and moisture retention mean your home's exterior needs regular professional cleaning to stay in top condition.
              </p>

              <div className="bg-blue-50 rounded-2xl p-8 md:p-10 border border-blue-200">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                  The Reston Challenge: 3-Story Townhomes
                </h3>
                <div className="space-y-4 text-lg">
                  <p>
                    Many of Reston's clusters feature 3-story townhomes with steep rooflines and tall facades. Traditional ladder-based cleaning is not only time-consuming but extremely dangerous at these heights. Crews need to navigate decks, landscaping, and tight spaces to set up equipment—adding hours to the job and increasing liability.
                  </p>
                  <p>
                    Our drone soft washing system solves this completely. We can clean the entire exterior of a 3-story townhome in a fraction of the time, with zero fall risk and no heavy equipment touching your property.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200">
                  <div className="flex items-start gap-4 mb-6">
                    <Users className="text-blue-600 flex-shrink-0 mt-1" size={32} />
                    <h3 className="text-2xl font-bold text-slate-900">
                      Meeting Cluster Standards
                    </h3>
                  </div>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Reston's cluster associations have strict guidelines for exterior maintenance. Our service helps homeowners stay compliant by removing visible algae staining, moss growth, and discoloration—keeping your property looking its best and maintaining community standards.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-50 to-cyan-50 rounded-2xl p-8 border border-slate-200">
                  <div className="flex items-start gap-4 mb-6">
                    <Zap className="text-cyan-600 flex-shrink-0 mt-1" size={32} />
                    <h3 className="text-2xl font-bold text-slate-900">
                      Fast, Efficient Process
                    </h3>
                  </div>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    What would take a traditional crew 4-6 hours with ladders and scaffolding, our drones complete in 1-2 hours. Less disruption to your day, faster results, and no crew members walking through your home or yard with equipment.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-10 text-white">
                <div className="flex items-start gap-4 mb-6">
                  <CheckCircle2 className="flex-shrink-0 mt-1" size={36} />
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      Why Reston Homeowners Choose Drone Washing
                    </h3>
                    <ul className="space-y-3 text-lg">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="flex-shrink-0 mt-1" />
                        <span>Safely cleans 3-4 story townhomes without ladders</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="flex-shrink-0 mt-1" />
                        <span>Effectively removes algae and moss growth from shade</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="flex-shrink-0 mt-1" />
                        <span>Helps maintain cluster standards and HOA compliance</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="flex-shrink-0 mt-1" />
                        <span>Completed in a fraction of traditional cleaning time</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="flex-shrink-0 mt-1" />
                        <span>No crew members on your roof or in your landscaping</span>
                      </li>
                    </ul>
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
              Services for Reston Properties
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Residential and commercial drone cleaning solutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 transition-all duration-500 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Home className="text-white" size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Townhome & Cluster Cleaning
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                Efficient cleaning for Reston's tall, multi-story residential units. Perfect for 3-4 story townhomes that are difficult to reach with traditional methods.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Safe for steep rooflines</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Complete exterior soft wash</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>HOA compliance assistance</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>No ladder damage risk</span>
                </li>
              </ul>
            </div>

            <div className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-cyan-300 transition-all duration-500 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TreeDeciduous className="text-white" size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Moss & Algae Removal
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                Specialized soft wash treatment to remove growth caused by Reston's heavy tree canopy and shade conditions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-cyan-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Targets organic growth</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-cyan-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Safe for all surfaces</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-cyan-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Long-lasting results</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-cyan-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Eco-friendly solutions</span>
                </li>
              </ul>
            </div>

            <div className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 transition-all duration-500 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="text-white" size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Commercial Building Wash
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                Gentle exterior cleaning for Reston's office buildings and retail spaces. Keep your business looking professional year-round.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Multi-story capabilities</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Minimal business disruption</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Glass and facade safe</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Flexible scheduling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Zap className="text-cyan-300 mx-auto mb-6" size={64} />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Tech-Forward Cleaning Solutions
              </h2>
              <p className="text-xl text-blue-200">
                Advanced drone flight systems for precision exterior care
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mt-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <Zap className="text-cyan-300 flex-shrink-0 mt-1" size={32} />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Advanced Drone Flight Systems
                  </h3>
                </div>
                <p className="text-blue-100 leading-relaxed text-lg">
                  We use precision GPS navigation and stabilization technology to deliver consistent, thorough cleaning coverage. Our drones can hover in place, adjust for wind conditions, and reach angles that are impossible with traditional equipment—all while maintaining safe distances from your property.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <Plane className="text-cyan-300 flex-shrink-0 mt-1" size={32} />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    FAA Private Pilot Operated
                  </h3>
                </div>
                <p className="text-blue-100 leading-relaxed text-lg">
                  Our operations are led by an FAA-certified Private Pilot who brings aviation safety standards to every job. This means rigorous pre-flight checks, weather assessment, and adherence to safety protocols that far exceed industry norms. Your property is in expert hands.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <Shield className="text-cyan-300 flex-shrink-0 mt-1" size={32} />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Professional-Grade Solutions
                  </h3>
                </div>
                <p className="text-blue-100 leading-relaxed text-lg">
                  We use biodegradable, eco-friendly cleaning solutions that are tough on algae and moss but gentle on your home's surfaces. Our soft wash system applies the perfect amount of cleaning solution at low pressure—removing buildup without damaging siding, shingles, or paint.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <CheckCircle2 className="text-cyan-300 flex-shrink-0 mt-1" size={32} />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Fully Insured & Certified
                  </h3>
                </div>
                <p className="text-blue-100 leading-relaxed text-lg">
                  We carry comprehensive liability insurance and all required certifications for drone operations. Unlike unlicensed operators or traditional crews working at dangerous heights, we provide complete peace of mind with professional coverage and proven safety records.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-cyan-400/30">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Why Technology Matters
                  </h3>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    Traditional cleaning methods rely on ladders, scaffolding, and manual labor—creating safety risks, property damage potential, and long job times. Our drone technology eliminates these problems entirely. We're faster, safer, and more effective, with results that speak for themselves.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">3-4x</div>
                  <div className="text-cyan-300 font-medium">Faster Than Traditional</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Get a Quote for Your Property
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Serving Reston (20190, 20191, 20194) and Fairfax County
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-6"></div>
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
                placeholder="Reston, VA"
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
                <option value="townhome">Townhome / Cluster Home</option>
                <option value="single-family">Single Family Home</option>
                <option value="commercial">Commercial Building</option>
                <option value="office">Office / Retail Space</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="stories" className="block text-sm font-semibold text-slate-700 mb-2">
                Number of Stories
              </label>
              <select
                id="stories"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
              >
                <option value="">Select height</option>
                <option value="1">1 Story</option>
                <option value="2">2 Stories</option>
                <option value="3">3 Stories</option>
                <option value="4+">4+ Stories</option>
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
                <option value="exterior">Full Exterior Cleaning</option>
                <option value="roof">Roof Washing</option>
                <option value="siding">Siding Only</option>
                <option value="algae">Algae/Moss Removal</option>
                <option value="commercial">Commercial Cleaning</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                Additional Details
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none bg-white"
                placeholder="Tell us about your cleaning needs..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transform transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-2xl"
            >
              Request Free Quote
            </button>

            <p className="text-center text-slate-600 mt-6 text-sm">
              Most quotes provided within 24 hours
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
              <p className="text-slate-400 text-lg">Serving Reston (20190, 20191, 20194) & Fairfax County</p>
              <p className="text-slate-500 text-sm mt-2">FAA Private Pilot Operated</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-300 font-semibold mb-2 text-lg">Ready for Safer, Faster Cleaning?</p>
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
