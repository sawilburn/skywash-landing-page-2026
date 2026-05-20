import { Building2, Clock, Star, Users, Shield, Sparkles, CheckCircle2, Calendar, Moon, Sun } from 'lucide-react';
import { DynamicSectionImage } from '../components/DynamicSectionImage';
import { CommercialLeadForm } from '../components/CommercialLeadForm';

export function HotelCleaningPage() {
  const scrollToForm = () => {
    const element = document.getElementById('commercial-form');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-block px-4 py-2 bg-[#1a3c75]/10 rounded-full text-[#1a3c75] text-sm font-semibold mb-6">
                Hospitality Excellence
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Elevate Your
                <br />
                <span className="text-[#1a3c75]">Guest Experience</span>
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Premium exterior cleaning services designed specifically for hotels. Pristine property,
                happy guests, zero disruption.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={scrollToForm}
                  className="px-8 py-4 bg-[#1a3c75] text-white rounded-lg font-bold text-lg hover:bg-[#2a4c85] transition-all shadow-lg hover:shadow-xl"
                >
                  Request a Property Assessment
                </button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-slate-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="text-green-600" size={20} />
                  <span>After-Hours Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="text-green-600" size={20} />
                  <span>Zero Guest Impact</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="text-green-600" size={20} />
                  <span>5-Star Results</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-200 rounded-2xl shadow-2xl overflow-hidden min-h-[400px] flex items-center justify-center animate-fade-in-scale">
              <DynamicSectionImage
                section="hotel/hotel-exterior.jpg"
                alt="Luxury hotel exterior"
                className="w-full h-full object-cover"
                fallback="Luxury Hotel"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Why Hotels Choose Us
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We understand the hospitality industry. Your reputation depends on every detail.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <Star className="text-amber-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Guest Experience First</h3>
              <p className="text-slate-600 mb-4">
                We schedule around your peak times and operate quietly. Guests will only notice
                the sparkling results, never the work being done.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={14} />
                  Silent drone operations
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={14} />
                  No guest pathway disruption
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={14} />
                  Professional appearance
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Clock className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Minimal Disruption</h3>
              <p className="text-slate-600 mb-4">
                Flexible scheduling designed for hospitality operations. Early morning, late evening,
                or overnight service available.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={14} />
                  Off-peak hour scheduling
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={14} />
                  Quick service turnaround
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={14} />
                  Coordinated with your team
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Pristine Property</h3>
              <p className="text-slate-600 mb-4">
                First impressions matter. Keep your property looking magazine-ready year-round
                with regular maintenance programs.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={14} />
                  Regular maintenance plans
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={14} />
                  Consistent quality standards
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={14} />
                  Detailed reporting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Comprehensive Hotel Services
            </h2>
            <p className="text-xl text-slate-600">
              Everything your property needs to maintain a 5-star appearance
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#1a3c75]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="text-[#1a3c75]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Building Exterior</h3>
                  <p className="text-slate-600 mb-3">
                    Remove weathering, pollution, and organic growth from all exterior surfaces.
                    Safe for brick, stone, stucco, siding, and EIFS.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Facade cleaning</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Entry areas</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Awnings</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#1a3c75]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="text-[#1a3c75]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Window Cleaning</h3>
                  <p className="text-slate-600 mb-3">
                    Crystal-clear windows enhance natural light and guest views. Drone technology
                    reaches every floor safely and efficiently.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">All floors</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Streak-free</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Balconies</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#1a3c75]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="text-[#1a3c75]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Pool & Patio Areas</h3>
                  <p className="text-slate-600 mb-3">
                    Keep resort amenities inviting. Remove algae, calcium deposits, and weathering
                    from pool decks, patios, and outdoor furniture areas.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Pool decks</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Patios</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Walkways</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#1a3c75]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="text-[#1a3c75]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Parking & Driveways</h3>
                  <p className="text-slate-600 mb-3">
                    First impressions start at arrival. Remove oil stains, tire marks, and grime
                    from parking structures, driveways, and porte-cochères.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Parking lots</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Entry drives</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Line striping prep</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1a3c75] to-slate-800 rounded-2xl p-8 text-white">
            <div className="flex items-start space-x-4">
              <Shield className="flex-shrink-0 text-blue-300" size={32} />
              <div>
                <h3 className="text-2xl font-bold mb-3">Roof Cleaning & Maintenance</h3>
                <p className="text-slate-200 mb-4">
                  Protect your investment and prevent premature replacement. Our soft wash process safely
                  removes algae, moss, and lichen without damaging roofing materials. Extends roof life up
                  to 10 years while improving energy efficiency and curb appeal.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">All roof types</span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">Warranty-safe</span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">Preventive maintenance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Scheduling That Works for You
            </h2>
            <p className="text-xl text-slate-600">
              We adapt to your property's needs and guest patterns
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sun className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Early Morning</h3>
              <p className="text-slate-600 mb-4">
                Start before guests are up. Most popular for window cleaning and exterior work.
              </p>
              <div className="text-sm text-slate-500">Typically 5:00 AM - 8:00 AM</div>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-amber-50 to-white rounded-2xl border border-amber-100">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Moon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Evening Service</h3>
              <p className="text-slate-600 mb-4">
                After guest check-ins settle. Ideal for parking areas and ground-level work.
              </p>
              <div className="text-sm text-slate-500">Typically 7:00 PM - 10:00 PM</div>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200">
              <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Overnight</h3>
              <p className="text-slate-600 mb-4">
                Zero guest interaction. Perfect for major projects and high-traffic areas.
              </p>
              <div className="text-sm text-slate-500">Typically 11:00 PM - 5:00 AM</div>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-8 max-w-3xl mx-auto text-center">
            <h4 className="text-xl font-bold text-slate-900 mb-3">Flexible Scheduling</h4>
            <p className="text-slate-700">
              We coordinate with your operations team to find the perfect window.
              Need to work around a special event or busy season? We adjust to your calendar.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#1a3c75] to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Maintenance Programs for Hotels
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Keep your property in pristine condition year-round with scheduled service plans
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Quarterly</h3>
              <p className="text-slate-300 mb-6">Ideal for seasonal maintenance and rotating focus areas</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-400 mr-2" size={18} />
                  <span>4 services per year</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-400 mr-2" size={18} />
                  <span>Priority scheduling</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-400 mr-2" size={18} />
                  <span>15% discount</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border-2 border-amber-400 rounded-2xl p-8 text-white relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-500 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Monthly</h3>
              <p className="text-slate-300 mb-6">Perfect for high-profile properties with constant upkeep needs</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-400 mr-2" size={18} />
                  <span>12 services per year</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-400 mr-2" size={18} />
                  <span>Dedicated service window</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-400 mr-2" size={18} />
                  <span>25% discount</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Custom</h3>
              <p className="text-slate-300 mb-6">Tailored plans for multi-property portfolios and unique needs</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-400 mr-2" size={18} />
                  <span>Flexible frequency</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-400 mr-2" size={18} />
                  <span>Multi-location service</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-400 mr-2" size={18} />
                  <span>Volume pricing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="mx-auto mb-6 text-[#1a3c75]" size={48} />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Ready to Elevate Your Property?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Request a complimentary property assessment. We'll walk your grounds, identify opportunities,
            and provide a detailed proposal with transparent pricing.
          </p>
          <button
            onClick={scrollToForm}
            className="px-8 py-4 bg-[#1a3c75] text-white rounded-lg font-bold text-lg hover:bg-[#2a4c85] transition-all shadow-lg hover:shadow-xl"
          >
            Schedule Property Assessment
          </button>
        </div>
      </section>

      <CommercialLeadForm />
    </div>
  );
}
