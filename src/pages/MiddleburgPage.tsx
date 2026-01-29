import { Home, Warehouse, Grid3x3, Shield, CheckCircle2, MapPin, Plane, Leaf, Mountain, Award, Clock } from 'lucide-react';

export function MiddleburgPage() {
  const scrollToContact = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-slate-900 to-stone-900"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-stone-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-white mb-8 border border-white/20">
              <Mountain size={20} />
              <span className="text-sm font-medium tracking-wide">Virginia's Horse Country</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
              Premier Exterior
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-green-200">
                Cleaning for
              </span>
              <br />
              Middleburg Estates
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-300 to-amber-200">
                & Farms
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-12 leading-relaxed">
              Preserving the beauty of Virginia's Horse Country. Specialized drone cleaning for manor houses, barns, and riding arenas.
            </p>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-lg text-lg font-semibold hover:bg-slate-50 transform transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              Schedule an Estate Consultation
              <span className="text-xl">→</span>
            </button>

            <div className="mt-16 flex flex-wrap justify-center gap-12 text-white text-sm">
              <div className="flex items-center gap-3">
                <Leaf size={24} className="text-emerald-300" />
                <span className="font-medium">Estate Specialists</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield size={24} className="text-emerald-300" />
                <span className="font-medium">Fully Insured</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={24} className="text-emerald-300" />
                <span className="font-medium">Discreet Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start gap-6 mb-10">
              <Mountain className="text-emerald-700 mt-2 flex-shrink-0" size={48} />
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                  Farm & Field: Built for Your Property
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-stone-600"></div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 md:p-10 border border-stone-200 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <Warehouse className="text-emerald-700 flex-shrink-0 mt-1" size={36} />
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                    Barn & Arena Cleaning Without Ground Damage
                  </h3>
                </div>
                <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                  <p>
                    Middleburg's equestrian properties feature impressive agricultural buildings—from traditional timber barns to modern indoor riding arenas with soaring metal roofs. Traditional cleaning methods require heavy boom lifts that tear up turf, compact soil, and stress livestock with noise and movement.
                  </p>
                  <p>
                    Our <span className="font-semibold text-emerald-800">drone soft washing system</span> eliminates these concerns entirely. We clean high peaks, cupolas, and expansive metal roofs from a distance, with zero equipment weight on your fields. No tracks across paddocks. No machinery near horses. No damage to your carefully maintained grounds.
                  </p>
                  <p>
                    The gentle soft wash method removes oxidation, algae, and biological growth that dull metal surfaces—restoring the professional appearance your property deserves. Whether it's a historic timber barn or a modern training facility, we deliver exceptional results while respecting your land and livestock.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-200">
                  <div className="flex items-start gap-4 mb-6">
                    <Grid3x3 className="text-emerald-600 flex-shrink-0 mt-1" size={32} />
                    <h3 className="text-2xl font-bold text-slate-900">
                      White Board Fencing Restoration
                    </h3>
                  </div>
                  <p className="text-slate-700 text-lg leading-relaxed mb-4">
                    Miles of pristine white board fencing define Virginia horse country. Over time, mold, mildew, and algae turn that brilliant white into dull gray. Traditional pressure washing can damage wood fibers and create splintering that injures horses.
                  </p>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Our efficient drone soft wash system restores fencing to its original brilliance quickly and safely. We can treat extensive perimeters in a fraction of the time required by manual crews—minimizing disruption to your farm operations while delivering consistently beautiful results.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-stone-50 to-slate-50 rounded-2xl p-8 border border-stone-200">
                  <div className="flex items-start gap-4 mb-6">
                    <Clock className="text-stone-600 flex-shrink-0 mt-1" size={32} />
                    <h3 className="text-2xl font-bold text-slate-900">
                      Privacy & Discretion
                    </h3>
                  </div>
                  <p className="text-slate-700 text-lg leading-relaxed mb-4">
                    We understand that Middleburg estates value privacy and minimal disruption. Our drone technology operates quickly and quietly, completing large properties efficiently without the noise, commotion, and extended timelines of traditional crews.
                  </p>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    We're respectful of your property, your schedule, and your livestock. Fast, professional, and discreet—that's the Skywash standard for estate service.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-600 to-green-700 rounded-2xl p-10 text-white shadow-xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Why Middleburg Estates Trust Skywash
                </h3>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-1" />
                    <span className="text-lg">Zero ground damage—no tracks across fields</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-1" />
                    <span className="text-lg">Safe for horses and other livestock</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-1" />
                    <span className="text-lg">Efficient coverage of large properties</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-1" />
                    <span className="text-lg">Gentle on wood fencing and historic materials</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-1" />
                    <span className="text-lg">Quiet, discreet operations</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-1" />
                    <span className="text-lg">Professional results for discerning clients</span>
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
              Estate Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized cleaning for Virginia's finest rural properties
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-stone-600 mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group bg-gradient-to-br from-stone-50 to-slate-50 rounded-2xl p-8 border border-stone-200 hover:border-emerald-300 transition-all duration-500 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-stone-700 to-stone-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Home className="text-white" size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Manor House Washing
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                Gentle, precision cleaning for historic stone, brick, and stucco manor homes. Our soft wash technology preserves architectural integrity while removing years of biological growth.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Safe for historic materials</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Reaches tall peaks easily</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Protects landscaping</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Minimal disruption</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-200 hover:border-emerald-400 transition-all duration-500 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Warehouse className="text-white" size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Barn & Outbuilding Cleaning
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                Restore the professional appearance of agricultural buildings. We remove oxidation and algae from metal roofs and siding without heavy equipment on your property.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                  <span>No boom lifts required</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Safe for livestock</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Preserves turf and fields</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Indoor arenas included</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200 hover:border-amber-300 transition-all duration-500 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Grid3x3 className="text-white" size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Fence & Hardscape Cleaning
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                Restore brilliant white board fencing and stone walls. Fast, efficient treatment of extensive perimeters without the time requirements of manual crews.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Miles of fencing cleaned quickly</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <span>No wood fiber damage</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Stone walls and hardscapes</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle2 size={20} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Consistent, even coverage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 via-emerald-950 to-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Award className="text-emerald-300 mx-auto mb-6" size={64} />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                The Professional Standard
              </h2>
              <p className="text-xl text-emerald-200">
                Aviation expertise meets agricultural excellence
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-stone-400 mx-auto mt-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <Plane className="text-emerald-300 flex-shrink-0 mt-1" size={36} />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Aviation Background
                  </h3>
                </div>
                <p className="text-emerald-100 leading-relaxed text-lg mb-4">
                  Skywash Innovations is owned and operated by an <span className="font-semibold">FAA-certified Private Pilot</span>. This isn't just a credential—it's a fundamental approach to how we work.
                </p>
                <p className="text-emerald-100 leading-relaxed text-lg">
                  Aviation demands precision, safety protocols, and meticulous planning. We bring that same standard to your property: thorough airspace assessments, weather evaluation, pre-flight inspections, and professional execution. Large properties with complex terrain require this level of expertise.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="text-emerald-300 flex-shrink-0 mt-1" size={36} />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Local Neighbors in Purcellville
                  </h3>
                </div>
                <p className="text-emerald-100 leading-relaxed text-lg mb-4">
                  We're based just west in Purcellville, so we understand the unique character of Virginia's Piedmont region. The level of care expected for Middleburg estates isn't something you can train in a weekend—it requires living in the community.
                </p>
                <p className="text-emerald-100 leading-relaxed text-lg">
                  When you call Skywash, you're working with neighbors who understand the agricultural lifestyle, respect property boundaries, and deliver the discreet, professional service that Middleburg estates demand.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <Shield className="text-emerald-300 flex-shrink-0 mt-1" size={36} />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Fully Insured & Certified
                  </h3>
                </div>
                <p className="text-emerald-100 leading-relaxed text-lg">
                  We carry comprehensive liability insurance and all required certifications for commercial drone operations. Your manor house, barns, and fencing are protected by professional coverage. For estates of significant value, we provide certificates of insurance upon request.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <Leaf className="text-emerald-300 flex-shrink-0 mt-1" size={36} />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Estate-Grade Service
                  </h3>
                </div>
                <p className="text-emerald-100 leading-relaxed text-lg">
                  We understand that Middleburg properties maintain exceptionally high standards. From initial consultation to final walk-through, we deliver service that reflects the quality your estate deserves—professional communication, punctual scheduling, and exceptional results.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-emerald-600/20 to-stone-600/20 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-emerald-400/30">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Technology That Respects Tradition
                </h3>
                <p className="text-emerald-100 text-lg leading-relaxed max-w-3xl mx-auto">
                  Middleburg estates represent generations of careful stewardship. Our drone soft washing technology allows us to maintain that standard of excellence—preserving historic materials, protecting carefully maintained grounds, and respecting the agricultural operations that make these properties special. Modern methods serving timeless values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-20 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Schedule an Estate Consultation
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Serving Middleburg (20117) and the Piedmont Region
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-stone-600 mx-auto mt-6"></div>
          </div>

          <form className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-stone-200">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-slate-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-white"
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
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-white"
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
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-white"
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
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-white"
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
                placeholder="Middleburg, VA"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-white"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="propertyType" className="block text-sm font-semibold text-slate-700 mb-2">
                Property Type
              </label>
              <select
                id="propertyType"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-white"
                required
              >
                <option value="">Select property type</option>
                <option value="estate">Estate / Manor House</option>
                <option value="equestrian">Equestrian Farm</option>
                <option value="agricultural">Agricultural Property</option>
                <option value="vineyard">Vineyard / Winery</option>
                <option value="private-residence">Private Residence</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="acreage" className="block text-sm font-semibold text-slate-700 mb-2">
                Property Size (Optional)
              </label>
              <select
                id="acreage"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-white"
              >
                <option value="">Select approximate acreage</option>
                <option value="under-5">Under 5 acres</option>
                <option value="5-20">5-20 acres</option>
                <option value="20-50">20-50 acres</option>
                <option value="50-100">50-100 acres</option>
                <option value="over-100">Over 100 acres</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                Service Interest
              </label>
              <select
                id="service"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-white"
                required
              >
                <option value="">Select service</option>
                <option value="manor-house">Manor House Washing</option>
                <option value="barn-arena">Barn & Arena Cleaning</option>
                <option value="fencing">Fence Cleaning & Restoration</option>
                <option value="comprehensive">Comprehensive Estate Cleaning</option>
                <option value="consultation">Consultation / Not Sure Yet</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                Tell Us About Your Property
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none bg-white"
                placeholder="Buildings to clean, special considerations, timeline preferences..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-emerald-700 hover:to-green-700 transform transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-2xl"
            >
              Request Estate Consultation
            </button>

            <p className="text-center text-slate-600 mt-6 text-sm">
              Discreet, professional service • Most consultations scheduled within 48 hours
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
              <p className="text-emerald-300 text-lg font-medium mt-2">Serving Middleburg (20117) & the Piedmont Region</p>
              <p className="text-slate-500 text-sm mt-2">FAA Private Pilot Operated • Fully Insured • Estate Specialists</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-300 font-semibold mb-2 text-lg">Premier Service for Virginia's Horse Country</p>
              <button
                onClick={scrollToContact}
                className="text-emerald-400 hover:text-emerald-300 font-semibold text-xl transition-colors"
              >
                Schedule Your Consultation →
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
