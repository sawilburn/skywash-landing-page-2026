import { GraduationCap, Shield, Zap, Users, TrendingUp, Brain, Sparkles, CheckCircle2, Rocket, Clock, DollarSign, Award, BookOpen, Building2 } from 'lucide-react';
import { DynamicSectionImage } from '../components/DynamicSectionImage';
import { CommercialLeadForm } from '../components/CommercialLeadForm';

export function SchoolsUniversityCleaningPage() {
  const scrollToForm = () => {
    const element = document.getElementById('commercial-form');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-block px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-blue-800 text-sm font-semibold mb-6">
                Next-Generation Campus Care
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-slate-900">
                Schools & Universities
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                  Drone Washing
                </span>
              </h1>

              <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                Revolutionary unmanned aerial systems transform campus maintenance. Safer for students,
                faster completion, and zero disruption to learning environments.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={scrollToForm}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
                >
                  Request Campus Assessment
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-slate-200 shadow-sm">
                  <Shield className="text-green-600 flex-shrink-0" size={18} />
                  <span className="text-slate-700">100% Ground Safe</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-slate-200 shadow-sm">
                  <Zap className="text-blue-600 flex-shrink-0" size={18} />
                  <span className="text-slate-700">3x Faster</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-slate-200 shadow-sm">
                  <Users className="text-emerald-600 flex-shrink-0" size={18} />
                  <span className="text-slate-700">Zero Disruption</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-slate-200 shadow-sm">
                  <DollarSign className="text-amber-600 flex-shrink-0" size={18} />
                  <span className="text-slate-700">Cost Effective</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-200 rounded-2xl shadow-2xl overflow-hidden min-h-[400px] flex items-center justify-center animate-fade-in-scale border border-slate-300">
              <DynamicSectionImage
                section="campus/university-building.jpg"
                alt="University campus building"
                className="w-full h-full object-cover"
                fallback="Modern Campus"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              Disruptive Technology for Modern Campuses
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Why Educational Institutions Choose Drone Washing
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Traditional methods put workers at risk on ladders near students. Our UAS technology
              eliminates safety concerns while delivering superior results faster and more efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border-2 border-green-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Student & Staff Safety</h3>
              <p className="text-slate-600 mb-4">
                Eliminate the risk of ladder accidents near students and staff. Our drones keep
                operators safely on the ground, away from building edges and high-traffic areas.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span>No ladders or scaffolding near students</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span>Reduced liability exposure</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span>No foot traffic through campus during cleaning</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Advanced UAS Technology</h3>
              <p className="text-slate-600 mb-4">
                Showcase innovation and technological leadership. Our cutting-edge unmanned aerial
                systems represent the future of facility maintenance.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start">
                  <CheckCircle2 className="text-blue-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span>Precision GPS navigation and positioning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-blue-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span>Real-time monitoring and quality control</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-blue-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span>Data-driven maintenance planning</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border-2 border-amber-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Budget Optimization</h3>
              <p className="text-slate-600 mb-4">
                Maximize facility budgets with efficient, cost-effective cleaning that reduces
                labor costs and minimizes operational disruption.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start">
                  <CheckCircle2 className="text-amber-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span>3x faster than traditional methods</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-amber-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span>Lower insurance and liability costs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-amber-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span>Reduced building maintenance expenses</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Rocket className="w-16 h-16 mx-auto mb-6 text-cyan-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Disruptive Technology That Sets Campuses Apart
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Position your institution as a leader in innovation and safety. Drone technology
              represents the future of facility management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/15 transition-all">
              <Brain className="mx-auto mb-4 text-cyan-400" size={40} />
              <h3 className="font-bold text-lg mb-2">AI-Powered Cleaning</h3>
              <p className="text-sm text-slate-300">
                Machine learning optimizes cleaning patterns and detects areas requiring attention
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/15 transition-all">
              <Zap className="mx-auto mb-4 text-blue-400" size={40} />
              <h3 className="font-bold text-lg mb-2">Autonomous Operation</h3>
              <p className="text-sm text-slate-300">
                Pre-programmed flight paths ensure consistent, repeatable results every time
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/15 transition-all">
              <Sparkles className="mx-auto mb-4 text-emerald-400" size={40} />
              <h3 className="font-bold text-lg mb-2">Eco-Friendly Solutions</h3>
              <p className="text-sm text-slate-300">
                Water-efficient systems and biodegradable cleaners align with sustainability goals
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/15 transition-all">
              <Award className="mx-auto mb-4 text-amber-400" size={40} />
              <h3 className="font-bold text-lg mb-2">Industry Leadership</h3>
              <p className="text-sm text-slate-300">
                Be among the first institutions to adopt next-generation maintenance technology
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-slate-200 rounded-2xl shadow-xl overflow-hidden min-h-[400px] flex items-center justify-center">
              <DynamicSectionImage
                section="campus/academic-building.jpg"
                alt="Academic building exterior"
                className="w-full h-full object-cover"
                fallback="Academic Building"
              />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Zero Disruption to Campus Life
              </h2>
              <p className="text-xl text-slate-700 mb-6">
                Traditional cleaning disrupts classes, blocks pathways, and creates safety concerns.
                Our drone technology operates with minimal impact on daily campus activities.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">Flexible Scheduling</h3>
                    <p className="text-slate-600">
                      Work during off-hours, weekends, or breaks. Complete projects 3x faster than
                      traditional methods, minimizing any potential impact.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">No Blocked Pathways</h3>
                    <p className="text-slate-600">
                      Students and staff move freely. No ladders, scaffolding, or equipment
                      obstructing entrances, sidewalks, or common areas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">Enhanced Safety Protocols</h3>
                    <p className="text-slate-600">
                      FAA Part 107 certified operators, comprehensive insurance, and strict
                      safety procedures ensure worry-free operations.
                    </p>
                  </div>
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
              Campus Facilities We Clean
            </h2>
            <p className="text-xl text-slate-600">
              Comprehensive exterior maintenance for every building on campus
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all">
              <Building2 className="text-blue-600 mb-4" size={32} />
              <h3 className="font-bold text-slate-900 mb-3">Academic Buildings</h3>
              <p className="text-slate-600 text-sm">
                Classrooms, lecture halls, laboratories, and administrative offices
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all">
              <Users className="text-emerald-600 mb-4" size={32} />
              <h3 className="font-bold text-slate-900 mb-3">Student Housing</h3>
              <p className="text-slate-600 text-sm">
                Dormitories, residence halls, and on-campus apartments
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all">
              <BookOpen className="text-amber-600 mb-4" size={32} />
              <h3 className="font-bold text-slate-900 mb-3">Libraries & Archives</h3>
              <p className="text-slate-600 text-sm">
                Gentle cleaning safe for historic buildings and valuable collections
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all">
              <Award className="text-cyan-600 mb-4" size={32} />
              <h3 className="font-bold text-slate-900 mb-3">Athletic Facilities</h3>
              <p className="text-slate-600 text-sm">
                Stadiums, field houses, gymnasiums, and recreational centers
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all">
              <Sparkles className="text-rose-600 mb-4" size={32} />
              <h3 className="font-bold text-slate-900 mb-3">Student Centers</h3>
              <p className="text-slate-600 text-sm">
                Dining halls, student unions, and community gathering spaces
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all">
              <GraduationCap className="text-blue-600 mb-4" size={32} />
              <h3 className="font-bold text-slate-900 mb-3">Administrative Buildings</h3>
              <p className="text-slate-600 text-sm">
                President's office, admissions, finance, and support services
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Benefits for Your Institution
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <DollarSign className="text-emerald-600 mb-4" size={36} />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Cost Savings</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <CheckCircle2 className="text-emerald-500 mr-2 flex-shrink-0 mt-0.5" size={18} />
                  <span>Reduce labor costs with 3x faster completion times</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-emerald-500 mr-2 flex-shrink-0 mt-0.5" size={18} />
                  <span>Lower insurance premiums from reduced liability exposure</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-emerald-500 mr-2 flex-shrink-0 mt-0.5" size={18} />
                  <span>Extend building lifecycle with regular preventive maintenance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-emerald-500 mr-2 flex-shrink-0 mt-0.5" size={18} />
                  <span>Eliminate expensive equipment rental and setup costs</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <Brain className="text-blue-600 mb-4" size={36} />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Innovation Leadership</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <CheckCircle2 className="text-blue-500 mr-2 flex-shrink-0 mt-0.5" size={18} />
                  <span>Showcase commitment to cutting-edge technology</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-blue-500 mr-2 flex-shrink-0 mt-0.5" size={18} />
                  <span>Create educational opportunities for students to observe UAS operations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-blue-500 mr-2 flex-shrink-0 mt-0.5" size={18} />
                  <span>Attract tech-savvy prospective students and faculty</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-blue-500 mr-2 flex-shrink-0 mt-0.5" size={18} />
                  <span>Align with institutional sustainability and innovation goals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GraduationCap className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Modernize Your Campus Maintenance?
          </h2>
          <p className="text-xl text-blue-50 mb-8">
            Join forward-thinking educational institutions embracing disruptive technology
            for safer, faster, and more cost-effective facility maintenance.
          </p>
          <button
            onClick={scrollToForm}
            className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
          >
            Schedule Your Campus Assessment
          </button>
          <p className="mt-6 text-blue-100 text-sm">
            Serving K-12 schools, colleges, universities, and educational campuses nationwide
          </p>
        </div>
      </section>

      <CommercialLeadForm />
    </div>
  );
}
