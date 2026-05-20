import { Heart, Shield, Sparkles, Award, CheckCircle2, Church, Lock, Droplets, Clock, FileCheck, Info } from 'lucide-react';
import { DynamicSectionImage } from '../components/DynamicSectionImage';
import { CommercialLeadForm } from '../components/CommercialLeadForm';

export function ChurchCleaningPage() {
  const scrollToForm = () => {
    const element = document.getElementById('commercial-form');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-amber-50 via-white to-blue-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-block px-4 py-2 bg-amber-100 border border-amber-200 rounded-full text-amber-800 text-sm font-semibold mb-6">
                Sacred Spaces. Expert Care.
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-slate-900">
                Church Exterior
                <br />
                <span className="text-amber-700">Restoration Cleaning</span>
              </h1>

              <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                Specialized care for historic and delicate church exteriors. Our proprietary
                process restores beauty while protecting architectural integrity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={scrollToForm}
                  className="px-8 py-4 bg-amber-600 text-white rounded-lg font-bold text-lg hover:bg-amber-700 transition-all shadow-lg hover:shadow-xl"
                >
                  Request Free Assessment
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-slate-200 shadow-sm">
                  <Heart className="text-rose-600 flex-shrink-0" size={18} />
                  <span className="text-slate-700">Respectful & Private</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-slate-200 shadow-sm">
                  <Shield className="text-blue-600 flex-shrink-0" size={18} />
                  <span className="text-slate-700">Property Protection</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-slate-200 shadow-sm">
                  <Sparkles className="text-amber-600 flex-shrink-0" size={18} />
                  <span className="text-slate-700">Restored Shine</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-slate-200 shadow-sm">
                  <Award className="text-green-600 flex-shrink-0" size={18} />
                  <span className="text-slate-700">Historic Specialist</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-200 rounded-2xl shadow-2xl overflow-hidden min-h-[400px] flex items-center justify-center animate-fade-in-scale border border-slate-300">
              <DynamicSectionImage
                section="church/white-church.jpg"
                alt="Church exterior"
                className="w-full h-full object-cover"
                fallback="Historic Church"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4">
              Why Churches Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Specialized Church Care
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We understand that churches require delicate handling, discretion, and respect.
              Our specialized approach honors both the building and its sacred purpose.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center mb-6">
                <Heart className="text-rose-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Respectful Approach</h3>
              <p className="text-slate-600 mb-4">
                We work with sensitivity to your congregation's schedule and activities. Private,
                discreet service that honors the sacred nature of your facility.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span>Flexible scheduling around services and events</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span>Minimal disruption to daily operations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span>Professional conduct and appearance</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="text-amber-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Proprietary Process</h3>
              <p className="text-slate-600 mb-4">
                Our exclusive cleaning system and specialized formula suite restore shine
                without damaging historic materials or delicate surfaces.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span>Custom cleaner formulations for different materials</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span>Safe for stained glass and decorative elements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span>Gentle restoration of original appearance</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Church className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Historic Expertise</h3>
              <p className="text-slate-600 mb-4">
                Specialized knowledge of historic architecture and materials. We understand
                the unique needs of century-old churches and modern facilities alike.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span>Experience with stone, brick, wood, and metal</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span>Preservation of architectural details</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span>Understanding of historic preservation standards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Our Proprietary Cleaning System
              </h2>
              <p className="text-xl text-slate-700 mb-6">
                Developed specifically for delicate and historic surfaces, our exclusive process
                delivers superior results while protecting your church's architectural integrity.
              </p>
              <p className="text-slate-600 mb-8">
                Unlike aggressive pressure washing or harsh chemical treatments, our gentle restoration
                method uses a carefully formulated suite of specialized cleaners matched to your
                specific building materials. The result is restored shine and beauty without damage.
              </p>
              <div className="bg-white p-6 rounded-xl border border-amber-200 shadow-lg">
                <div className="flex items-start space-x-4">
                  <Info className="text-amber-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Safe & Effective</h4>
                    <p className="text-slate-600 text-sm">
                      Our process is proven safe on limestone, sandstone, granite, marble, brick,
                      stucco, wood siding, painted surfaces, and more. We protect stained glass,
                      decorative stonework, and architectural details throughout the cleaning process.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-200 rounded-2xl shadow-xl overflow-hidden min-h-[400px] flex items-center justify-center">
              <DynamicSectionImage
                section="church/historic-church.jpg"
                alt="Historic church building"
                className="w-full h-full object-cover"
                fallback="Historic Church Architecture"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <FileCheck className="text-amber-600" size={24} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Assessment</h4>
              <p className="text-slate-600 text-sm">
                Detailed evaluation of materials, conditions, and specific cleaning needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Droplets className="text-blue-600" size={24} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Custom Formula</h4>
              <p className="text-slate-600 text-sm">
                Select the perfect cleaner from our proprietary suite for your surfaces.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="text-green-600" size={24} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Gentle Cleaning</h4>
              <p className="text-slate-600 text-sm">
                Restore shine using controlled pressure and precise application techniques.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-rose-600" size={24} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Protection</h4>
              <p className="text-slate-600 text-sm">
                Optional protective sealants to extend cleanliness and prevent future buildup.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Surfaces We Clean
            </h2>
            <p className="text-xl text-slate-600">
              Comprehensive exterior restoration for every part of your church
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center">
                <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0" size={20} />
                Steeples & Towers
              </h3>
              <p className="text-slate-600 text-sm">
                Safely reach and clean the highest points of your church using advanced drone technology.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center">
                <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0" size={20} />
                Stone & Masonry
              </h3>
              <p className="text-slate-600 text-sm">
                Gentle cleaning of limestone, sandstone, granite, marble, and brick without mortar damage.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center">
                <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0" size={20} />
                Windows & Glass
              </h3>
              <p className="text-slate-600 text-sm">
                Careful cleaning of all window types including delicate stained glass installations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center">
                <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0" size={20} />
                Painted Surfaces
              </h3>
              <p className="text-slate-600 text-sm">
                Safe cleaning of painted wood, metal, and other coated surfaces without paint removal.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center">
                <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0" size={20} />
                Decorative Elements
              </h3>
              <p className="text-slate-600 text-sm">
                Careful attention to carved details, statuary, crosses, and architectural ornamentation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center">
                <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0" size={20} />
                Roofs & Gutters
              </h3>
              <p className="text-slate-600 text-sm">
                Remove organic growth and debris from copper, slate, tile, and other roofing materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Safe, Private, and Fully Insured
              </h2>
              <p className="text-slate-300 text-lg mb-8">
                Your church is a sacred space and a valuable asset. We protect both with
                comprehensive insurance coverage, professional conduct, and utmost discretion.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="text-amber-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Comprehensive Insurance</h3>
                    <p className="text-slate-300 text-sm">
                      Full general liability and property damage coverage. Certificate of Insurance
                      provided to your church or diocese upon request.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Private & Discreet</h3>
                    <p className="text-slate-300 text-sm">
                      We respect your congregation's privacy. Minimal signage, professional appearance,
                      and quiet operation ensure your activities continue undisturbed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-green-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Flexible Scheduling</h3>
                    <p className="text-slate-300 text-sm">
                      Work around your worship services, events, and activities. Weekend and evening
                      appointments available to minimize any impact on your community.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-700 rounded-2xl shadow-xl overflow-hidden min-h-[400px] flex items-center justify-center border border-slate-600">
              <DynamicSectionImage
                section="church/stone-church.jpg"
                alt="Church architecture"
                className="w-full h-full object-cover"
                fallback="Beautiful Church"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-amber-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Church className="w-16 h-16 mx-auto mb-6 text-amber-600" />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Restore Your Church's Beauty
          </h2>
          <p className="text-xl text-slate-700 mb-8">
            Years of weathering, pollution, and organic growth diminish your church's appearance.
            Our specialized restoration cleaning brings back the original beauty and creates a
            welcoming presence in your community.
          </p>
          <button
            onClick={scrollToForm}
            className="px-8 py-4 bg-amber-600 text-white rounded-lg font-bold text-lg hover:bg-amber-700 transition-all shadow-lg hover:shadow-xl"
          >
            Schedule Free Assessment
          </button>
          <p className="mt-4 text-slate-600 text-sm">
            Serving churches of all denominations and architectural styles
          </p>
        </div>
      </section>

      <CommercialLeadForm />
    </div>
  );
}
