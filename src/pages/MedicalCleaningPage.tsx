import { Heart, Shield, Clock, CheckCircle2, Users, Lock, Building2, Stethoscope, UserCheck, Eye } from 'lucide-react';
import { SupabaseImage } from '../components/SupabaseImage';
import { CommercialLeadForm } from '../components/CommercialLeadForm';

export function MedicalCleaningPage() {
  const scrollToForm = () => {
    const element = document.getElementById('commercial-form');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-block px-4 py-2 bg-[#1a3c75]/10 rounded-full text-[#1a3c75] text-sm font-semibold mb-6">
                Healthcare Facility Excellence
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Medical Facility
                <br />
                <span className="text-[#1a3c75]">Exterior Cleaning</span>
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                HIPAA-compliant cleaning services designed for healthcare facilities. Patient safety,
                privacy protection, and minimal disruption guaranteed.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={scrollToForm}
                  className="px-8 py-4 bg-[#1a3c75] text-white rounded-lg font-bold text-lg hover:bg-[#2a4c85] transition-all shadow-lg hover:shadow-xl"
                >
                  Request Facility Assessment
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-slate-200 shadow-sm">
                  <Shield className="text-blue-600 flex-shrink-0" size={18} />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-slate-200 shadow-sm">
                  <Lock className="text-blue-600 flex-shrink-0" size={18} />
                  <span>Patient Privacy</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-slate-200 shadow-sm">
                  <Clock className="text-blue-600 flex-shrink-0" size={18} />
                  <span>After-Hours Service</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-slate-200 shadow-sm">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0" size={18} />
                  <span>Zero Disruption</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-200 rounded-2xl shadow-2xl overflow-hidden min-h-[400px] flex items-center justify-center animate-fade-in-scale">
              <SupabaseImage
                path="medical/medical-building.jpg"
                alt="Medical facility exterior"
                className="w-full h-full object-cover"
                fallback="Medical Facility"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Why Healthcare Facilities Choose Us
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We understand the unique needs of medical environments where patient care, privacy, and safety are paramount.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Lock className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">HIPAA Compliance</h3>
              <p className="text-slate-600 mb-4">
                Our team is trained in HIPAA privacy requirements. We maintain strict confidentiality
                protocols and never access patient areas or sensitive information.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={14} />
                  Privacy-focused protocols
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={14} />
                  Confidentiality agreements
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={14} />
                  Secure documentation
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <Heart className="text-teal-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Patient Safety First</h3>
              <p className="text-slate-600 mb-4">
                Quiet operations, controlled access, and zero disruption to patient care. We work
                around your schedules to ensure comfort and safety.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={14} />
                  Silent drone technology
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={14} />
                  No pathway obstruction
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={14} />
                  Emergency access maintained
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Clock className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Minimal Disruption</h3>
              <p className="text-slate-600 mb-4">
                Flexible after-hours scheduling, early morning, or weekend service. We coordinate
                with your facilities team to avoid high-traffic periods.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={14} />
                  Off-peak scheduling
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={14} />
                  Weekend availability
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={14} />
                  Quick service windows
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
              Comprehensive Medical Facility Services
            </h2>
            <p className="text-xl text-slate-600">
              Everything your healthcare facility needs to maintain a clean, professional appearance
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
                    Professional cleaning of all exterior surfaces including brick, stone, stucco, and
                    composite panels. Safe for all building materials.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Facade cleaning</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Entryways</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Canopies</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#1a3c75]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="text-[#1a3c75]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Window Cleaning</h3>
                  <p className="text-slate-600 mb-3">
                    Crystal-clear windows improve natural lighting and create a welcoming environment
                    for patients and visitors. All floors accessible.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">All heights</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Streak-free</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Patient rooms</span>
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
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Entry & Common Areas</h3>
                  <p className="text-slate-600 mb-3">
                    First impressions matter in healthcare. Keep entrances, walkways, and common areas
                    pristine for patients, families, and staff.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Main entrances</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Sidewalks</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Courtyards</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#1a3c75]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="text-[#1a3c75]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Parking & Driveways</h3>
                  <p className="text-slate-600 mb-3">
                    Clean parking areas and driveways enhance safety and create a professional first
                    impression for patients and emergency vehicles.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Parking lots</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">ER access</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Drop-off zones</span>
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
                  Protect your facility investment with safe roof cleaning. Our soft wash process removes
                  organic growth without damaging roofing materials, extending roof life and improving
                  energy efficiency while maintaining a professional appearance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">All roof types</span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">Warranty-safe</span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">Extends lifespan</span>
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
              Privacy & Security Protocols
            </h2>
            <p className="text-xl text-slate-600">
              Your patients' privacy and facility security are our top priorities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCheck className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Background Checks</h3>
              <p className="text-slate-600 text-sm">
                All team members undergo comprehensive background screening before facility access.
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">HIPAA Training</h3>
              <p className="text-slate-600 text-sm">
                Team trained in patient privacy requirements and healthcare facility protocols.
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Controlled Access</h3>
              <p className="text-slate-600 text-sm">
                Strict access protocols coordinated with your security and facilities teams.
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100">
              <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Patient Privacy</h3>
              <p className="text-slate-600 text-sm">
                Exterior-only work with no line-of-sight into patient rooms or private areas.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-8 max-w-3xl mx-auto">
            <h4 className="text-xl font-bold text-slate-900 mb-3 text-center">Infection Control Awareness</h4>
            <p className="text-slate-700 text-center">
              While our work is exterior-only, we understand healthcare environments require heightened
              cleanliness standards. Our team is trained in basic infection control principles and maintains
              clean equipment to protect your facility's reputation for safety and sanitation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#1a3c75] to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Maintenance Programs for Healthcare Facilities
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Keep your facility pristine year-round with scheduled service plans
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Quarterly</h3>
              <p className="text-slate-300 mb-6">Ideal for seasonal maintenance and consistent upkeep</p>
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

            <div className="bg-white/10 backdrop-blur-sm border-2 border-blue-400 rounded-2xl p-8 text-white relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Bi-Monthly</h3>
              <p className="text-slate-300 mb-6">Perfect for high-traffic medical facilities</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-400 mr-2" size={18} />
                  <span>6 services per year</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-400 mr-2" size={18} />
                  <span>Dedicated service window</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-400 mr-2" size={18} />
                  <span>20% discount</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Custom</h3>
              <p className="text-slate-300 mb-6">Tailored plans for multi-campus healthcare systems</p>
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
          <Heart className="mx-auto mb-6 text-[#1a3c75]" size={48} />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Ready to Enhance Your Facility?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Request a complimentary facility assessment. We'll evaluate your property, discuss privacy
            protocols, and provide a detailed proposal with transparent pricing.
          </p>
          <button
            onClick={scrollToForm}
            className="px-8 py-4 bg-[#1a3c75] text-white rounded-lg font-bold text-lg hover:bg-[#2a4c85] transition-all shadow-lg hover:shadow-xl"
          >
            Schedule Facility Assessment
          </button>
        </div>
      </section>

      <CommercialLeadForm />
    </div>
  );
}
