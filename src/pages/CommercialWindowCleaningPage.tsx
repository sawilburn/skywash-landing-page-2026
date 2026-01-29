import { Link } from 'react-router-dom';
import { DynamicSectionImage } from '../components/DynamicSectionImage';
import { Shield, Clock, Eye, Building2, FileCheck, Camera, Sparkles, Phone, CheckCircle } from 'lucide-react';

export function CommercialWindowCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-[#1a3c75] to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-cyan-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-cyan-400 font-semibold mb-6">
              Class A Office Buildings
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Drone-Powered
              <br />
              <span className="text-cyan-400">Window Cleaning</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8">
              Revolutionary UAS technology for pristine commercial glass without the risks, disruption, or privacy concerns of traditional methods.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1234567890"
                className="flex items-center justify-center space-x-2 px-8 py-4 bg-cyan-500 text-white rounded-lg font-bold text-lg hover:bg-cyan-600 transition-all shadow-xl"
              >
                <Phone size={24} />
                <span>Get Free Assessment</span>
              </a>
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
              <div className="text-3xl font-bold text-cyan-400 mb-1">85%</div>
              <div className="text-sm text-slate-300">Faster Service</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-1">Zero</div>
              <div className="text-sm text-slate-300">Fall Incidents</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-1">100%</div>
              <div className="text-sm text-slate-300">Privacy Protected</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-1">24/7</div>
              <div className="text-sm text-slate-300">Service Available</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <DynamicSectionImage
                section="commercial-window-cleaning-1"
                alt="Drone cleaning Class A office building windows"
                className="rounded-2xl shadow-2xl"
                fallback="commercial/drone-office-building.jpg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                The Future of Commercial Glass Maintenance
              </h2>
              <p className="text-lg text-slate-700 mb-6">
                SkyWash DMV brings cutting-edge drone technology to Class A office building maintenance. Our FAA-certified pilots and specialized equipment deliver spotless results while eliminating the liability and disruption of traditional window cleaning methods.
              </p>
              <p className="text-lg text-slate-700 mb-6">
                Designed specifically for high-rise commercial properties, our drone systems reach every window with precision and consistency—no scaffolding, no cherry pickers, no workers at height.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-bold text-slate-900">SFRA Certified</div>
                    <div className="text-sm text-slate-600">DC airspace authorized</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-bold text-slate-900">Fully Insured</div>
                    <div className="text-sm text-slate-600">$2M liability coverage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Why Building Owners Choose Drone Technology
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transform your property maintenance with a solution that prioritizes safety, efficiency, and tenant satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Liability Reduction</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>Zero worker fall risk - operators stay on ground</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>No scaffolding accidents or equipment failures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>Reduced premises liability exposure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>Lower insurance premiums over time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>No roof damage from foot traffic</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Clock className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Speed & Efficiency</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">✓</span>
                  <span>85% faster than traditional methods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">✓</span>
                  <span>Minimal setup and teardown time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">✓</span>
                  <span>Same-day service available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">✓</span>
                  <span>Access all floors simultaneously</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">✓</span>
                  <span>Less disruption to building operations</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Eye className="text-purple-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Privacy Protection</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2 mt-1">✓</span>
                  <span>No workers peering into offices or residences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2 mt-1">✓</span>
                  <span>Downward-facing cameras focused on glass only</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2 mt-1">✓</span>
                  <span>Maintain tenant confidence and satisfaction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2 mt-1">✓</span>
                  <span>No unauthorized interior photography</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2 mt-1">✓</span>
                  <span>Discreet, professional operations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Protect Your Brand with Pristine Results
              </h2>
              <p className="text-lg text-slate-700 mb-6">
                First impressions matter in Class A commercial real estate. Crystal-clear windows signal professionalism, attention to detail, and premium quality to tenants, clients, and visitors.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="text-cyan-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Streak-Free Perfection</h4>
                    <p className="text-slate-600">Precision cleaning technology delivers showroom-quality results on every pane.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="text-cyan-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Consistent Quality</h4>
                    <p className="text-slate-600">Automated systems ensure uniform results across all windows and floors.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-cyan-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Brand Enhancement</h4>
                    <p className="text-slate-600">Maintain the prestigious appearance that Class A properties demand.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <DynamicSectionImage
                section="commercial-window-cleaning-2"
                alt="Pristine office building with spotless windows"
                className="rounded-2xl shadow-2xl"
                fallback="commercial/clean-office-building.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-[#1a3c75] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Bolt-On Building Intelligence Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Beyond cleaning—leverage our drone technology for comprehensive building inspection and critical infrastructure analysis.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="w-16 h-16 bg-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <Camera className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Facade Inspection</h3>
              <p className="text-slate-300 mb-6">
                High-resolution imaging captures micro-cracks, weathering, and structural concerns before they become major issues.
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Thermal imaging for water intrusion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Crack detection and measurement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Masonry and sealant assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>UV damage documentation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="w-16 h-16 bg-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <FileCheck className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Roof Analysis</h3>
              <p className="text-slate-300 mb-6">
                Comprehensive roof surveys without sending personnel onto dangerous surfaces, with detailed digital reports.
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Membrane condition assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Drainage system evaluation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>HVAC equipment inspection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>3D mapping and measurements</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="w-16 h-16 bg-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Infrastructure Reports</h3>
              <p className="text-slate-300 mb-6">
                Deep analysis with actionable insights, professional documentation, and detailed recommendations for maintenance planning.
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Annotated photo documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Condition scoring and trending</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Maintenance priority rankings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Multi-year comparison analysis</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-slate-300 mb-6">
              Combine window cleaning with inspection services for a comprehensive building maintenance solution at a reduced rate.
            </p>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center px-8 py-4 bg-cyan-500 text-white rounded-lg font-bold text-lg hover:bg-cyan-600 transition-all shadow-xl"
            >
              <Phone className="mr-2" size={20} />
              Request Custom Package Quote
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              See the Difference
            </h2>
            <p className="text-xl text-slate-600">
              Drone technology in action on commercial properties
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group">
              <SupabaseImage
                path="commercial/drone-cleaning-glass.jpg"
                alt="Drone washing commercial glass facade"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="text-white">
                  <h4 className="text-xl font-bold mb-2">Precision Cleaning</h4>
                  <p className="text-sm">Controlled pressure ensures streak-free results</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <SupabaseImage
                path="commercial/highrise-drone-wash.jpg"
                alt="Drone cleaning high-rise office building"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="text-white">
                  <h4 className="text-xl font-bold mb-2">High-Rise Access</h4>
                  <p className="text-sm">Reach every floor without scaffolding</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#1a3c75] to-[#2a5a95] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Upgrade Your Building Maintenance?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Schedule a free on-site assessment and see how drone technology can transform your property maintenance program.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1234567890"
              className="flex items-center justify-center space-x-2 px-8 py-4 bg-cyan-500 text-white rounded-lg font-bold text-lg hover:bg-cyan-600 transition-all shadow-xl"
            >
              <Phone size={24} />
              <span>Call for Free Assessment</span>
            </a>
            <Link
              to="/commercial"
              className="px-8 py-4 bg-white text-[#1a3c75] rounded-lg font-bold text-lg hover:bg-slate-100 transition-all shadow-xl"
            >
              Request Written Quote
            </Link>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">SFRA</div>
              <div className="text-sm text-slate-300">Authorized Operator</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">$2M</div>
              <div className="text-sm text-slate-300">Liability Coverage</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-sm text-slate-300">Service Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
