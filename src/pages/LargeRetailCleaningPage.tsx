import { Link } from 'react-router-dom';
import { DynamicSectionImage } from '../components/DynamicSectionImage';
import {
  Phone,
  ShoppingBag,
  Volume2,
  Shield,
  Zap,
  Sparkles,
  Building2,
  Camera,
  CheckCircle,
  FileCheck,
  Map,
  Target
} from 'lucide-react';
import { CommercialLeadForm } from '../components/CommercialLeadForm';

export function LargeRetailCleaningPage() {
  const scrollToForm = () => {
    const element = document.getElementById('commercial-form');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 font-semibold mb-6">
              Large Retail Centers
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Precision Exterior
              <br />
              <span className="text-blue-400">Maintenance for Large</span>
              <br />
              <span className="text-blue-400">Retail Centers</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8">
              Aviation-grade cleaning delivered by advanced UAS technology—minimizing disruption while maximizing curb appeal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToForm}
                className="flex items-center justify-center space-x-2 px-8 py-4 bg-blue-500 text-white rounded-lg font-bold text-lg hover:bg-blue-600 transition-all shadow-xl"
              >
                <Phone size={24} />
                <span>Request Site Assessment</span>
              </button>
              <Link
                to="/commercial"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-bold text-lg hover:bg-white/20 transition-all border-2 border-white/30"
              >
                All Commercial Services
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">3-5x</div>
              <div className="text-sm text-slate-300">Faster Service</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">90%</div>
              <div className="text-sm text-slate-300">Reduced Risk</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">Zero</div>
              <div className="text-sm text-slate-300">Blocked Entrances</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">Early AM</div>
              <div className="text-sm text-slate-300">Off-Peak Service</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              The Retail Advantage
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transform your retail property maintenance with drone technology that delivers measurable business results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-slate-200">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <ShoppingBag className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Improved Tenancy & Traffic</h3>
              <p className="text-slate-700 mb-4">
                Clean facades and clear signage directly drive customer satisfaction and tenant retention. First impressions influence shopping behavior—pristine exteriors increase foot traffic and time on property.
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Enhanced curb appeal drives higher visitor counts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Clean storefronts increase tenant pride and satisfaction</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Professional appearance strengthens lease renewals</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-slate-200">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Volume2 className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Zero Disruption</h3>
              <p className="text-slate-700 mb-4">
                Battery-powered, quiet drones allow for maintenance during off-peak hours (early morning/evenings) without blocking entrances or parking. Operations continue uninterrupted.
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>No scaffolding blocking storefronts or walkways</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Parking lots remain fully accessible</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Silent operation maintains shopping environment</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-slate-200">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-red-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Safety & Liability</h3>
              <p className="text-slate-700 mb-4">
                Move technicians from ladders to the ground, reducing overall safety risks by 90%. Eliminate fall hazards, equipment accidents, and premises liability exposure.
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <CheckCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Zero worker fall incidents with ground-based operations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>No ladders or lifts near customer walkways</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Reduced insurance premiums and liability exposure</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-slate-200">
              <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="text-slate-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Speed</h3>
              <p className="text-slate-700 mb-4">
                Drone systems are 3x to 5x faster than traditional manual cleaning. Complete large retail centers in days instead of weeks, with consistent quality across all surfaces.
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <CheckCircle className="text-slate-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Rapid deployment with minimal setup time</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-slate-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Clean 400+ sq ft sections per cycle</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-slate-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Tight deadlines and seasonal prep? No problem</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Core Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive exterior maintenance solutions designed specifically for large retail environments.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="text-blue-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Glass & Facade Cleaning</h3>
              <p className="text-slate-700 mb-4">
                Streak-free finish using 7-stage 0 PPM pure water filtration. Our advanced purification system removes all minerals, ensuring spot-free drying and crystal-clear results on every pane.
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-slate-900">Storefront Glass</div>
                    <div className="text-sm text-slate-600">Floor-to-ceiling windows and display cases</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-slate-900">Curtain Wall Systems</div>
                    <div className="text-sm text-slate-600">Modern glass facade architectures</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-slate-900">Architectural Glass</div>
                    <div className="text-sm text-slate-600">Decorative and structural glass elements</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="text-green-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Canopy & Awning Restoration</h3>
              <p className="text-slate-700 mb-4">
                Softwashing techniques that dissolve contaminants at the molecular level without damaging delicate materials. Gentle yet powerful cleaning preserves fabric, paint, and protective coatings.
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-slate-900">Fabric Awnings</div>
                    <div className="text-sm text-slate-600">Remove mold, algae, and organic stains</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-slate-900">Metal Canopies</div>
                    <div className="text-sm text-slate-600">Restore shine without surface damage</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-slate-900">Entry Structures</div>
                    <div className="text-sm text-slate-600">Maintain inviting first impressions</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mb-6">
                <Camera className="text-slate-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Signage Cleaning</h3>
              <p className="text-slate-700 mb-4">
                Precision cleaning for high-reach branding that is difficult for traditional crews to access. Drones reach monument signs, pole-mounted displays, and building-mounted logos with ease.
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-slate-900">Monument Signs</div>
                    <div className="text-sm text-slate-600">Ground-level branding elements</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-slate-900">Pole Signs</div>
                    <div className="text-sm text-slate-600">High-visibility roadside displays</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-slate-900">Building-Mounted</div>
                    <div className="text-sm text-slate-600">Elevated tenant and center branding</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                Professional Operations
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Operational Excellence
              </h2>
              <p className="text-lg text-slate-700 mb-8">
                Our FAA Part 107 certified pilots follow a rigorous 5-step project lifecycle, ensuring every operation meets the highest standards of safety, compliance, and quality.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Map className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">1. Risk Analysis & Flight Planning</h4>
                    <p className="text-slate-600">
                      Comprehensive site assessment identifying airspace restrictions, hazards, and operational constraints. Custom flight plans developed for your specific property layout.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileCheck className="text-slate-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">2. Pre-Flight Authorization</h4>
                    <p className="text-slate-600">
                      Coordination with property management, security teams, and local authorities. All required FAA authorizations secured before operations begin.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="text-slate-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">3. Precision Execution</h4>
                    <p className="text-slate-600">
                      Systematic cleaning following tested protocols. Real-time quality monitoring and adaptive techniques ensure consistent results across all surfaces.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Camera className="text-slate-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">4. Documentation & Verification</h4>
                    <p className="text-slate-600">
                      Before and after photography. Detailed service reports. Quality assurance checks on all completed work.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-slate-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">5. Post-Service Review</h4>
                    <p className="text-slate-600">
                      Walkthrough with property management. Maintenance recommendations for long-term asset protection. Scheduled follow-up planning.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <DynamicSectionImage
                section="commercial/drone-retail-cleaning.jpg"
                alt="Professional drone cleaning operation at retail center"
                className="rounded-2xl shadow-2xl"
                fallback="commercial/retail-center-exterior.jpg"
              />

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-sm text-slate-600">FAA Part 107 Certified Pilots</div>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200">
                  <div className="text-3xl font-bold text-slate-900 mb-2">$2M</div>
                  <div className="text-sm text-slate-600">Liability Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Request a Site Assessment for Your Retail Portfolio
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a custom proposal tailored to your property's specific needs. Free on-site evaluation, no obligation quote, and detailed project timeline.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={scrollToForm}
              className="flex items-center justify-center space-x-2 px-8 py-4 bg-white text-blue-700 rounded-lg font-bold text-lg hover:bg-slate-100 transition-all shadow-xl"
            >
              <Phone size={24} />
              <span>Get Free Assessment</span>
            </button>
            <a
              href="tel:+17037550865"
              className="px-8 py-4 bg-blue-500 text-white rounded-lg font-bold text-lg hover:bg-blue-400 transition-all shadow-xl border-2 border-white/30"
            >
              Call (703) 755-0865
            </a>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold mb-1">3-5x</div>
              <div className="text-sm text-blue-200">Faster Than Traditional</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">90%</div>
              <div className="text-sm text-blue-200">Risk Reduction</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">Zero</div>
              <div className="text-sm text-blue-200">Customer Disruption</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">24/7</div>
              <div className="text-sm text-blue-200">Off-Peak Available</div>
            </div>
          </div>
        </div>
      </section>

      <CommercialLeadForm />
    </div>
  );
}
