import { Shield, CheckCircle2, UserCheck, Award, Lock, Zap, Building2, FileCheck, Clock, Target } from 'lucide-react';
import { DynamicSectionImage } from '../components/DynamicSectionImage';
import { CommercialLeadForm } from '../components/CommercialLeadForm';

export function DataCenterCleaningPage() {
  const scrollToForm = () => {
    const element = document.getElementById('commercial-form');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up text-white">
              <div className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-semibold mb-6">
                Secure Critical Infrastructure Cleaning
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Data Center
                <br />
                <span className="text-cyan-400">Exterior Cleaning</span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Security-cleared teams. Advanced drone technology. Zero-compromise protection for
                your mission-critical facilities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={scrollToForm}
                  className="px-8 py-4 bg-cyan-500 text-slate-900 rounded-lg font-bold text-lg hover:bg-cyan-400 transition-all shadow-lg hover:shadow-xl"
                >
                  Request Security Assessment
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm p-3 rounded-lg border border-slate-700">
                  <Shield className="text-cyan-400 flex-shrink-0" size={18} />
                  <span>Background Checked</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm p-3 rounded-lg border border-slate-700">
                  <Award className="text-cyan-400 flex-shrink-0" size={18} />
                  <span>FAA Part 107 Certified</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm p-3 rounded-lg border border-slate-700">
                  <FileCheck className="text-cyan-400 flex-shrink-0" size={18} />
                  <span>OSHA Certified</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm p-3 rounded-lg border border-slate-700">
                  <Lock className="text-cyan-400 flex-shrink-0" size={18} />
                  <span>SFRA Trained</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-700 rounded-2xl shadow-2xl overflow-hidden min-h-[400px] flex items-center justify-center animate-fade-in-scale border border-slate-600">
              <DynamicSectionImage
                section="datacenter/datacenter-building.jpg"
                alt="Data center exterior"
                className="w-full h-full object-cover"
                fallback="Data Center Facility"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold mb-4">
              Security-First Approach
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Credentials That Matter
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every team member meets the highest security and safety standards required for
              critical infrastructure work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <UserCheck className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Background Checks</h3>
              <p className="text-slate-600 mb-4">
                All Part 107 pilots and ground technicians pass comprehensive background security
                screenings before working on your property.
              </p>
              <div className="flex items-center text-sm text-green-600 font-semibold">
                <CheckCircle2 size={16} className="mr-2" />
                Fully Vetted Team
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                <Award className="text-cyan-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">FAA Part 107</h3>
              <p className="text-slate-600 mb-4">
                All drone pilots hold valid FAA Part 107 Remote Pilot Certificates with current
                proficiency standards.
              </p>
              <div className="flex items-center text-sm text-green-600 font-semibold">
                <CheckCircle2 size={16} className="mr-2" />
                Licensed Operators
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Lock className="text-red-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">SFRA Training</h3>
              <p className="text-slate-600 mb-4">
                Security Flight Restriction Area training completed for operations near sensitive
                infrastructure and protected airspace.
              </p>
              <div className="flex items-center text-sm text-green-600 font-semibold">
                <CheckCircle2 size={16} className="mr-2" />
                Restricted Area Cleared
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <FileCheck className="text-orange-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">OSHA Certified</h3>
              <p className="text-slate-600 mb-4">
                Complete OSHA safety certifications ensure compliance with federal workplace safety
                standards and protocols.
              </p>
              <div className="flex items-center text-sm text-green-600 font-semibold">
                <CheckCircle2 size={16} className="mr-2" />
                Safety Compliant
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
            <div className="flex items-start space-x-4">
              <Shield className="flex-shrink-0 text-cyan-400" size={40} />
              <div>
                <h3 className="text-2xl font-bold mb-3">Fully Insured & Licensed</h3>
                <p className="text-slate-300 mb-4">
                  Comprehensive general liability and professional indemnity insurance coverage protects
                  your facility. All required business licenses and permits maintained in good standing.
                  Certificate of Insurance provided upon request.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-sm font-semibold">
                    $2M General Liability
                  </span>
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-sm font-semibold">
                    Workers Compensation
                  </span>
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-sm font-semibold">
                    Professional Liability
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Specialized Data Center Services
            </h2>
            <p className="text-xl text-slate-600">
              Precision cleaning for mission-critical infrastructure
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="text-cyan-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Facade & Precast Cleaning</h3>
                  <p className="text-slate-600 mb-4">
                    High-efficiency cleaning of 400 sq ft sections of facade and precast surfaces.
                    Removes pollution, organic growth, and weathering without damaging protective coatings.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      Concrete, precast, and composite panels
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      Safe for protective coatings and sealants
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      No high-pressure damage to joints or seals
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Window & Glass Cleaning</h3>
                  <p className="text-slate-600 mb-4">
                    Crystal-clear results on all window types including security glass and reflective
                    coatings. Drone technology eliminates ground-level ladders and lifts.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      All floors and heights accessible
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      Security glass and film safe
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      Streak-free, spot-free results
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">HVAC & Louver Systems</h3>
                  <p className="text-slate-600 mb-4">
                    Specialized cleaning of exterior HVAC components, cooling tower exteriors, and
                    louver systems critical to data center cooling efficiency.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      Improves cooling system efficiency
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      Extends equipment lifespan
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      No water intrusion risk
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Security Perimeter Areas</h3>
                  <p className="text-slate-600 mb-4">
                    Maintain clean security fencing, gates, bollards, and perimeter hardscape. Keep
                    camera sight lines clear and security zones professional.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      Security camera housing cleaning
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      Fence and gate maintenance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      Bollard and barrier cleaning
                    </li>
                  </ul>
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
              Why Data Centers Trust Us
            </h2>
            <p className="text-xl text-slate-600">
              Small team. Fast execution. Zero security compromise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Small & Fast</h3>
              <p className="text-slate-600 mb-4">
                Lean team means faster execution, less on-site personnel, and simplified security coordination.
                No large crews to manage or track.
              </p>
              <div className="text-3xl font-bold text-cyan-600 mb-2">400 sq ft</div>
              <div className="text-sm text-slate-500">per cleaning cycle</div>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Security First</h3>
              <p className="text-slate-600 mb-4">
                Background-checked team members. Controlled access protocols. Coordination with your
                security team at every step.
              </p>
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-sm text-slate-500">vetted personnel</div>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Minimal Disruption</h3>
              <p className="text-slate-600 mb-4">
                Off-hours scheduling available. Quick in-and-out service. No impact to operations or
                staff access.
              </p>
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-sm text-slate-500">flexible scheduling</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Protect Your Investment
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Regular exterior maintenance extends building life, maintains property value, and
              prevents costly premature replacement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-3">Preventive Care</h3>
              <p className="text-slate-300 mb-4">
                Regular cleaning prevents organic growth penetration, efflorescence, and surface
                degradation that leads to expensive repairs.
              </p>
              <div className="text-cyan-400 font-semibold">Save 60% vs. reactive maintenance</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-3">Asset Protection</h3>
              <p className="text-slate-300 mb-4">
                Keep protective coatings and sealants functioning properly. Extend facade lifespan
                by removing corrosive pollutants.
              </p>
              <div className="text-cyan-400 font-semibold">Extend building life 10+ years</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-3">Professional Image</h3>
              <p className="text-slate-300 mb-4">
                Data centers represent reliability and precision. A pristine exterior reinforces
                that brand promise to clients and partners.
              </p>
              <div className="text-cyan-400 font-semibold">First impressions matter</div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={scrollToForm}
              className="px-8 py-4 bg-cyan-500 text-slate-900 rounded-lg font-bold text-lg hover:bg-cyan-400 transition-all shadow-lg hover:shadow-xl"
            >
              Schedule Security Assessment
            </button>
            <p className="mt-4 text-slate-400 text-sm">
              All consultations include security protocol review and site-specific planning
            </p>
          </div>
        </div>
      </section>

      <CommercialLeadForm />
    </div>
  );
}
