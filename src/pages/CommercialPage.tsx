import { Shield, Clock, FileCheck, Zap, Thermometer, TrendingUp, CheckCircle2, Building2, Sun, Eye, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SupabaseImage } from '../components/SupabaseImage';
import { CommercialLeadForm } from '../components/CommercialLeadForm';

export function CommercialPage() {
  const scrollToForm = () => {
    const element = document.getElementById('commercial-form');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-900 via-[#1a3c75] to-slate-800">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 text-sm font-semibold mb-6">
              Enterprise Solutions
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Exterior Maintenance for
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Mission-Critical Infrastructure
              </span>
            </h1>

            <p className="text-2xl text-slate-300 mb-12 leading-relaxed">
              Maximize Uptime. Minimize Risk. Zero-Contact Drone Soft Washing for Data Centers and Commercial Properties.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToForm}
                className="px-8 py-4 bg-white text-[#1a3c75] rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
              >
                Request Capability Statement
              </button>
              <button
                onClick={scrollToForm}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
              >
                Schedule Site Audit
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-white mb-1">$5M</div>
                <div className="text-slate-400 text-sm">Aggregate Coverage</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">FAA</div>
                <div className="text-slate-400 text-sm">Part 107 Certified</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-slate-400 text-sm">Emergency Response</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Why Drones?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Traditional maintenance methods introduce unacceptable risk and operational disruption. Our drone-powered approach delivers enterprise-grade results with zero compromise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-white p-10 rounded-2xl border-2 border-slate-200 hover:border-[#1a3c75] transition-all shadow-sm hover:shadow-xl">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-red-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Risk Mitigation</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Eliminate ladders, lifts, and human exposure to heights. Our drones remove liability from your property while ensuring comprehensive coverage.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-sm text-slate-700">
                  <CheckCircle2 className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  No workers at elevation
                </li>
                <li className="flex items-start text-sm text-slate-700">
                  <CheckCircle2 className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  Reduced premises liability
                </li>
                <li className="flex items-start text-sm text-slate-700">
                  <CheckCircle2 className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  Insurance-approved protocols
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-10 rounded-2xl border-2 border-slate-200 hover:border-[#1a3c75] transition-all shadow-sm hover:shadow-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Clock className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Operational Continuity</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Zero footprint operations. No scaffolding blocking entries. No disruption to facility operations or security protocols.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-sm text-slate-700">
                  <CheckCircle2 className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  No access interruption
                </li>
                <li className="flex items-start text-sm text-slate-700">
                  <CheckCircle2 className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  After-hours scheduling
                </li>
                <li className="flex items-start text-sm text-slate-700">
                  <CheckCircle2 className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  Rapid deployment
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-10 rounded-2xl border-2 border-slate-200 hover:border-[#1a3c75] transition-all shadow-sm hover:shadow-xl">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <FileCheck className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Security & Compliance</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Background-checked pilots. SOC 2 awareness. Comprehensive documentation for audit requirements and facility management.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-sm text-slate-700">
                  <CheckCircle2 className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  Vetted operators
                </li>
                <li className="flex items-start text-sm text-slate-700">
                  <CheckCircle2 className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  Detailed reporting
                </li>
                <li className="flex items-start text-sm text-slate-700">
                  <CheckCircle2 className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  Audit-ready documentation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Service Verticals
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized solutions engineered for your facility's unique requirements
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-slate-900 to-[#1a3c75] rounded-2xl shadow-xl overflow-hidden border-2 border-cyan-400">
              <div className="grid md:grid-cols-2">
                <div className="bg-slate-800 min-h-[400px] flex items-center justify-center order-2 md:order-1">
                  <SupabaseImage
                    path="commercial/drone-office-building.jpg"
                    alt="Class A Office Window Cleaning"
                    className="w-full h-full object-cover"
                    fallback="Office Window Cleaning"
                  />
                </div>
                <div className="p-10 md:p-12 order-1 md:order-2 text-white">
                  <div className="inline-block px-3 py-1 bg-cyan-500/30 rounded-full text-cyan-300 text-xs font-bold mb-4">
                    PREMIUM SERVICE
                  </div>
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                    <Sparkles className="text-white" size={28} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Class A Office Window Cleaning</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Revolutionary drone-powered window cleaning for high-rise commercial buildings. Zero liability, maximum privacy, pristine results.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <Eye className="text-cyan-400 mr-3 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold mb-1">Privacy Protected</h4>
                        <p className="text-sm text-slate-300">No workers peering into offices—cameras focus only on glass</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Shield className="text-cyan-400 mr-3 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold mb-1">Zero Liability</h4>
                        <p className="text-sm text-slate-300">Eliminate fall risks and reduce insurance exposure</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="text-cyan-400 mr-3 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold mb-1">85% Faster</h4>
                        <p className="text-sm text-slate-300">Minimal disruption with same-day service available</p>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/commercial/window-cleaning"
                    className="inline-block px-6 py-3 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition-all"
                  >
                    Learn More About Window Cleaning
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
              <div className="grid md:grid-cols-2">
                <div className="p-10 md:p-12">
                  <div className="w-14 h-14 bg-cyan-500 rounded-lg flex items-center justify-center mb-6">
                    <Building2 className="text-white" size={28} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Mid-Rise Soft Wash</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Preserve brand image and surface integrity for office parks, hotels, and multi-family properties with our gentle cleaning technology.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <CheckCircle2 className="text-cyan-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Surface Preservation</h4>
                        <p className="text-sm text-slate-600">Low-pressure cleaning that protects expensive facades and finishes</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="text-cyan-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Brand Image Enhancement</h4>
                        <p className="text-sm text-slate-600">Maintain pristine exteriors that reflect your commitment to excellence</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="text-cyan-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Tenant Satisfaction</h4>
                        <p className="text-sm text-slate-600">Clean, well-maintained properties improve retention and attract quality tenants</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={scrollToForm}
                    className="px-6 py-3 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition-all"
                  >
                    Request Property Assessment
                  </button>
                </div>
                <div className="bg-slate-200 min-h-[400px] flex items-center justify-center">
                  <div className="text-slate-400 text-center p-8">
                    <Building2 size={64} className="mx-auto mb-4" />
                    <p className="text-sm">Mid-Rise Cleaning</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
              <div className="grid md:grid-cols-2">
                <div className="bg-slate-200 min-h-[400px] flex items-center justify-center order-2 md:order-1">
                  <SupabaseImage
                    path="data-center-cleaning.jpg"
                    alt="Data Center Exterior Cleaning"
                    className="w-full h-full object-cover"
                    fallback="Data Center Cleaning"
                  />
                </div>
                <div className="p-10 md:p-12 order-1 md:order-2">
                  <div className="w-14 h-14 bg-[#1a3c75] rounded-lg flex items-center justify-center mb-6">
                    <Building2 className="text-white" size={28} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Data Center Exterior</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Optimize airflow and cooling efficiency by removing debris from generator exhausts, cooling tower surrounds, and rooftop HVAC systems.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <Thermometer className="text-[#1a3c75] mr-3 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Thermal Management</h4>
                        <p className="text-sm text-slate-600">Improve HVAC performance by up to 15% through targeted exterior cleaning</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Zap className="text-[#1a3c75] mr-3 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Critical Systems Protection</h4>
                        <p className="text-sm text-slate-600">Gentle cleaning that preserves sensitive equipment and coatings</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Shield className="text-[#1a3c75] mr-3 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Zero Downtime Operations</h4>
                        <p className="text-sm text-slate-600">Non-invasive service with no impact to facility operations</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={scrollToForm}
                    className="px-6 py-3 bg-[#1a3c75] text-white rounded-lg font-semibold hover:bg-[#2a4c85] transition-all"
                  >
                    Request Data Center Assessment
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
              <div className="grid md:grid-cols-2">
                <div className="p-10 md:p-12">
                  <div className="w-14 h-14 bg-yellow-500 rounded-lg flex items-center justify-center mb-6">
                    <Sun className="text-white" size={28} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Commercial Solar</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Recover lost kilowatts through precision cleaning and thermal imaging inspection of commercial solar installations.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <TrendingUp className="text-yellow-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Production Recovery</h4>
                        <p className="text-sm text-slate-600">Restore 15-25% energy output through professional panel cleaning</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Thermometer className="text-yellow-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Thermal Imaging Inspection</h4>
                        <p className="text-sm text-slate-600">Identify hot spots and defective panels during cleaning operations</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Zap className="text-yellow-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">ROI Maximization</h4>
                        <p className="text-sm text-slate-600">Scheduled maintenance programs to ensure peak performance year-round</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={scrollToForm}
                    className="px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-all"
                  >
                    Request Solar Assessment
                  </button>
                </div>
                <div className="bg-slate-200 min-h-[400px] flex items-center justify-center">
                  <SupabaseImage
                    path="commercial-solar.jpg"
                    alt="Commercial Solar Cleaning"
                    className="w-full h-full object-cover"
                    fallback="Solar Farm Cleaning"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Specialized Industry Solutions</h3>
            <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto">
              We understand the unique requirements of different industries. Explore our specialized services tailored to your facility type.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Link
                to="/commercial/medical-cleaning"
                className="bg-white p-8 rounded-xl border-2 border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-500 transition-colors">
                  <Shield className="text-blue-600 group-hover:text-white transition-colors" size={24} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Medical Facilities</h4>
                <p className="text-slate-600 text-sm">HIPAA-compliant cleaning with patient privacy and safety first</p>
              </Link>

              <Link
                to="/commercial/hotel-cleaning"
                className="bg-white p-8 rounded-xl border-2 border-slate-200 hover:border-amber-500 hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-amber-500 transition-colors">
                  <Building2 className="text-amber-600 group-hover:text-white transition-colors" size={24} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Hotels & Resorts</h4>
                <p className="text-slate-600 text-sm">Guest-focused service with zero disruption and 5-star results</p>
              </Link>

              <Link
                to="/commercial/schools-university-washing"
                className="bg-white p-8 rounded-xl border-2 border-slate-200 hover:border-green-500 hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-green-500 transition-colors">
                  <Building2 className="text-green-600 group-hover:text-white transition-colors" size={24} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Schools & Universities</h4>
                <p className="text-slate-600 text-sm">Safe, scheduled cleaning around academic calendars</p>
              </Link>

              <Link
                to="/commercial/church-cleaning"
                className="bg-white p-8 rounded-xl border-2 border-slate-200 hover:border-purple-500 hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-purple-500 transition-colors">
                  <Building2 className="text-purple-600 group-hover:text-white transition-colors" size={24} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Churches & Places of Worship</h4>
                <p className="text-slate-600 text-sm">Respectful service preserving sacred spaces</p>
              </Link>

              <Link
                to="/commercial/data-center-cleaning"
                className="bg-white p-8 rounded-xl border-2 border-slate-200 hover:border-cyan-500 hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-cyan-500 transition-colors">
                  <Shield className="text-cyan-600 group-hover:text-white transition-colors" size={24} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Data Centers</h4>
                <p className="text-slate-600 text-sm">Security-cleared teams with zero operational impact</p>
              </Link>

              <button
                onClick={scrollToForm}
                className="bg-gradient-to-br from-[#1a3c75] to-slate-800 p-8 rounded-xl border-2 border-transparent hover:shadow-xl transition-all group text-white"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-white/30 transition-colors">
                  <Building2 className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-bold mb-2">Other Industries</h4>
                <p className="text-slate-300 text-sm">Contact us for custom solutions for your facility type</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-slate-900 via-[#1a3c75] to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div className="flex flex-col items-center">
              <Shield size={48} className="mb-4 text-blue-400" />
              <h4 className="font-bold text-xl mb-2">Fully Insured</h4>
              <p className="text-slate-300 text-sm">$5M Aggregate Coverage</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle2 size={48} className="mb-4 text-green-400" />
              <h4 className="font-bold text-xl mb-2">OSHA Compliant</h4>
              <p className="text-slate-300 text-sm">Safety-First Operations</p>
            </div>
            <div className="flex flex-col items-center">
              <FileCheck size={48} className="mb-4 text-cyan-400" />
              <h4 className="font-bold text-xl mb-2">FAA Licensed</h4>
              <p className="text-slate-300 text-sm">Part 107 Certified Pilots</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield size={48} className="mb-4 text-purple-400" />
              <h4 className="font-bold text-xl mb-2">Background Checked</h4>
              <p className="text-slate-300 text-sm">Vetted Operators</p>
            </div>
          </div>
        </div>
      </section>

      <CommercialLeadForm />
    </div>
  );
}
