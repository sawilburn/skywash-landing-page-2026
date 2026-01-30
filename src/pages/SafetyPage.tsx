import { Shield, CheckCircle2, Award, Users, FileCheck, HardHat, Clipboard, Heart, AlertTriangle, GraduationCap, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SafetyPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-slate-900 via-[#1a3c75] to-slate-800 text-white">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-cyan-300 text-sm font-semibold mb-6">
              <Shield size={20} />
              <span>Safety First, Always</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Safe & Professional
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              We prioritize safety over everything. From rigorous training to comprehensive insurance, we are a team you can count on.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <GraduationCap className="text-cyan-400 mx-auto mb-2" size={32} />
                <div className="text-2xl font-bold text-white mb-1">40+</div>
                <div className="text-sm text-slate-300">Training Hours</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <Award className="text-cyan-400 mx-auto mb-2" size={32} />
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-sm text-slate-300">OSHA Certified</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <Shield className="text-cyan-400 mx-auto mb-2" size={32} />
                <div className="text-2xl font-bold text-white mb-1">Fully</div>
                <div className="text-sm text-slate-300">Insured</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <Lock className="text-cyan-400 mx-auto mb-2" size={32} />
                <div className="text-2xl font-bold text-white mb-1">Licensed</div>
                <div className="text-sm text-slate-300">Operators</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Comprehensive Training Program
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every team member undergoes extensive onboarding and ongoing training to ensure the highest safety standards in the industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-100 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">40 Hours Onboarding</h3>
              <p className="text-slate-700 leading-relaxed">
                Every employee completes a comprehensive 40-hour onboarding training program covering all aspects of safe operations, equipment handling, and emergency procedures.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border-2 border-orange-100 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
                <HardHat className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">OSHA Certified</h3>
              <p className="text-slate-700 leading-relaxed">
                All of our employees are OSHA certified, ensuring compliance with federal workplace safety regulations and best practices for hazard prevention.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-white p-8 rounded-2xl border-2 border-cyan-100 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Part 107 Certified</h3>
              <p className="text-slate-700 leading-relaxed">
                Our pilots hold FAA Part 107 Remote Pilot Certificates, demonstrating mastery of aviation regulations, airspace classification, and safe flight operations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border-2 border-red-100 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">ALC-405 SFRA Training</h3>
              <p className="text-slate-700 leading-relaxed">
                All Part 107 pilots have completed ALC-405 SFRA (Special Flight Rules Area) training, qualifying them to operate in Washington DC's restricted airspace.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border-2 border-purple-100 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <AlertTriangle className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Chemical Safety</h3>
              <p className="text-slate-700 leading-relaxed">
                Comprehensive chemical safety training ensures proper handling, storage, and application of cleaning solutions while protecting our team and the environment.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border-2 border-green-100 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <HardHat className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">PPE Requirements</h3>
              <p className="text-slate-700 leading-relaxed">
                Mandatory Personal Protective Equipment (PPE) training and usage for all operations, including eye protection, gloves, respirators, and protective clothing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Operational Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every operation follows strict protocols and checklists to ensure consistent, safe results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md">
                  <div className="flex-shrink-0">
                    <Clipboard className="text-[#1a3c75]" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Pre-Flight Checklists</h3>
                    <p className="text-slate-700">
                      Every operation begins with comprehensive equipment inspection and environmental assessment checklists.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md">
                  <div className="flex-shrink-0">
                    <FileCheck className="text-[#1a3c75]" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Safety Protocols</h3>
                    <p className="text-slate-700">
                      Documented safety procedures for every service type, reviewed and updated regularly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md">
                  <div className="flex-shrink-0">
                    <Users className="text-[#1a3c75]" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Team Communication</h3>
                    <p className="text-slate-700">
                      Clear communication protocols ensure all team members are coordinated and aware of safety considerations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md">
                  <div className="flex-shrink-0">
                    <Heart className="text-[#1a3c75]" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Post-Operation Review</h3>
                    <p className="text-slate-700">
                      Every job concludes with a thorough review to ensure quality standards and identify improvement opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a3c75] to-slate-800 text-white p-12 rounded-2xl shadow-2xl">
              <h3 className="text-3xl font-bold mb-6">Safety Over Everything</h3>
              <p className="text-lg text-slate-200 mb-8 leading-relaxed">
                At Skywash Innovations, safety isn't just a priority—it's the foundation of everything we do. We never compromise on safety standards, no matter how urgent the job.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                  <span className="text-slate-200">Zero accidents since inception</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                  <span className="text-slate-200">Continuous training and certification updates</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                  <span className="text-slate-200">Industry-leading safety equipment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                  <span className="text-slate-200">Regular safety audits and inspections</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Insurance & Licensing
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Full coverage and compliance for your peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border-2 border-slate-200 text-center hover:shadow-xl transition-all">
              <Shield className="text-[#1a3c75] mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Fully Insured</h3>
              <p className="text-slate-700">
                Comprehensive general liability and drone insurance coverage protects you and your property.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border-2 border-slate-200 text-center hover:shadow-xl transition-all">
              <Award className="text-[#1a3c75] mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Licensed Operators</h3>
              <p className="text-slate-700">
                All pilots hold valid FAA Part 107 Remote Pilot Certificates and required state licenses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#1a3c75] to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="text-cyan-400 mx-auto mb-6" size={64} />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            A Team You Can Count On
          </h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            When you choose Skywash Innovations, you're choosing a team that prioritizes your safety, your property, and professional excellence. Our commitment to training, safety, and quality is unmatched in the industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/commercial"
              className="px-8 py-4 bg-white text-[#1a3c75] rounded-lg font-bold hover:bg-slate-100 transition-all"
            >
              Commercial Services
            </Link>
            <Link
              to="/residential"
              className="px-8 py-4 bg-cyan-500 text-white rounded-lg font-bold hover:bg-cyan-600 transition-all"
            >
              Residential Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
