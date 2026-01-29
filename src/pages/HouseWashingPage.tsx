import { useState, useEffect } from 'react';
import { Home, Shield, Zap, Sparkles, CheckCircle2, AlertTriangle, Sun, Eye, Droplets, TrendingUp, Clock } from 'lucide-react';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { ResidentialLeadForm } from '../components/ResidentialLeadForm';
import { SupabaseImage } from '../components/SupabaseImage';
import { getBeforeAfterImages, getImageUrl } from '../lib/siteImages';

export function HouseWashingPage() {
  const [beforeImage, setBeforeImage] = useState('roof-dirty.jpg');
  const [afterImage, setAfterImage] = useState('roof-clean.jpg');
  const [beforeAlt, setBeforeAlt] = useState('Home before cleaning');
  const [afterAlt, setAfterAlt] = useState('Home after cleaning');

  useEffect(() => {
    const loadImages = async () => {
      const images = await getBeforeAfterImages('house');
      if (images) {
        setBeforeImage(getImageUrl(images.before_image_path));
        setAfterImage(getImageUrl(images.after_image_path));
        setBeforeAlt(images.before_alt);
        setAfterAlt(images.after_alt);
      }
    };
    loadImages();
  }, []);

  const scrollToForm = () => {
    const element = document.getElementById('residential-form');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-block px-4 py-2 bg-[#1a3c75]/10 rounded-full text-[#1a3c75] text-sm font-semibold mb-6">
                Complete Home Exterior Cleaning
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Protect Your
                <br />
                <span className="text-[#1a3c75]">Investment</span>
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Faster. Safer. Smarter. Professional drone-powered cleaning for your entire home exterior. We're the best choice for residential homeowners.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={scrollToForm}
                  className="px-8 py-4 bg-[#1a3c75] text-white rounded-lg font-bold text-lg hover:bg-[#2a4c85] transition-all shadow-lg hover:shadow-xl"
                >
                  Get Free Instant Quote
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-slate-200 shadow-sm">
                  <Zap className="text-blue-600 flex-shrink-0" size={18} />
                  <span>85% Faster</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-slate-200 shadow-sm">
                  <Shield className="text-green-600 flex-shrink-0" size={18} />
                  <span>100% Safer</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-slate-200 shadow-sm">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0" size={18} />
                  <span>No Ladders</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-slate-200 shadow-sm">
                  <Sparkles className="text-green-600 flex-shrink-0" size={18} />
                  <span>Warranty Safe</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-200 rounded-2xl shadow-2xl overflow-hidden min-h-[400px] flex items-center justify-center animate-fade-in-scale">
              <SupabaseImage
                path="residential-hero.jpg"
                alt="Beautiful clean home"
                className="w-full h-full object-cover"
                fallback="Beautiful Clean Home"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              See the Transformation
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Real results from real homes. This is the power of professional drone soft washing.
            </p>
          </div>

          <BeforeAfterSlider
            beforeImage={beforeImage}
            afterImage={afterImage}
            beforeAlt={beforeAlt}
            afterAlt={afterAlt}
          />

          <div className="mt-12 text-center">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-[#1a3c75] text-white rounded-lg font-semibold hover:bg-[#2a4c85] transition-all shadow-lg"
            >
              <span>Get This Result for Your Home</span>
              <Sparkles size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AlertTriangle className="mx-auto mb-4 text-red-600" size={56} />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Your Home is Under Attack
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Every day, organic growth is eating away at your investment. Here's what you need to know.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border-2 border-red-300 shadow-lg">
              <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center mb-6">
                <AlertTriangle className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Gloeocapsa Magma on Your Roof</h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Those black streaks aren't just ugly—they're bacteria literally eating the limestone in your shingles. Left untreated, this reduces your roof's lifespan by up to 10 years.
              </p>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <p className="text-red-800 font-semibold">
                  Cost of ignoring: $15,000 - $30,000 in premature roof replacement
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-orange-300 shadow-lg">
              <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-6">
                <Sun className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Dirty Solar Panels</h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Dust, pollen, and organic growth reduce solar efficiency by 15-25%. Worse yet, organic material under panels is destroying your roof while you think you're saving energy.
              </p>
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <p className="text-orange-800 font-semibold">
                  Lost energy production: $500 - $1,200 per year
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-2xl p-8 max-w-3xl mx-auto border-2 border-slate-300 shadow-lg">
            <h4 className="text-2xl font-bold text-slate-900 mb-4 text-center">The Smart Solution</h4>
            <p className="text-slate-700 text-center mb-6 text-lg">
              Professional cleaning pays for itself by extending roof life, restoring solar efficiency, and protecting your home's value. Don't wait until it costs you thousands.
            </p>
            <div className="text-center">
              <button
                onClick={scrollToForm}
                className="px-8 py-4 bg-green-600 text-white rounded-lg font-bold text-lg hover:bg-green-700 transition-all shadow-lg"
              >
                Protect My Investment Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Complete Home Exterior Cleaning
            </h2>
            <p className="text-xl text-slate-600">
              One company, one quote, everything your home needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#1a3c75]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Home className="text-[#1a3c75]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">House Siding Washing</h3>
                  <p className="text-slate-600 mb-3">
                    Safe for all siding types: vinyl, Hardie plank, cement board, brick, and stone. Remove years of dirt, mold, and mildew.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Vinyl</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Hardie Plank</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Cement Board</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Brick</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Stone</span>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-2" size={14} />
                      Low pressure, no damage
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-2" size={14} />
                      Window and door protection
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-2" size={14} />
                      Restores original color
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Window Cleaning</h3>
                  <p className="text-slate-600 mb-3">
                    Crystal-clear exterior and interior window cleaning. Streak-free results every time.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600 mb-4">
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-2" size={14} />
                      Exterior window cleaning
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-2" size={14} />
                      Interior window cleaning available
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-2" size={14} />
                      Screens and tracks cleaned
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-2" size={14} />
                      All heights accessible with drones
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border-2 border-red-200 hover:shadow-xl transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Home className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Roof Washing</h3>
                  <p className="text-slate-600 mb-3">
                    Eliminate Gloeocapsa magma bacteria that's eating your shingles. Extend roof life by up to 10 years.
                  </p>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-3">
                    <p className="text-red-800 font-semibold text-sm">
                      Gloeocapsa magma feeds on limestone in shingles, causing permanent damage and reducing lifespan.
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-2" size={14} />
                      Warranty-safe soft wash method
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-2" size={14} />
                      Kills bacteria at the root
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-2" size={14} />
                      All roof types: asphalt, metal, tile
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl border-2 border-yellow-200 hover:shadow-xl transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sun className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Solar Panel Cleaning</h3>
                  <p className="text-slate-600 mb-3">
                    Restore 15-25% energy efficiency. Remove organic growth that's destroying your roof underneath.
                  </p>
                  <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 mb-3">
                    <p className="text-yellow-900 font-semibold text-sm mb-2">
                      WARNING: Organic material under solar panels creates moisture traps that rot your roof structure.
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-2" size={14} />
                      Restore peak efficiency
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-2" size={14} />
                      Panel-safe cleaning
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-2" size={14} />
                      Protect roof underneath
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border-2 border-green-200">
            <div className="text-center">
              <Sparkles className="mx-auto mb-4 text-green-600" size={48} />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Complete Package Discount</h3>
              <p className="text-slate-700 text-lg mb-6">
                Bundle multiple services and save up to 25%. Get your entire home exterior cleaned in one day.
              </p>
              <button
                onClick={scrollToForm}
                className="px-8 py-4 bg-[#1a3c75] text-white rounded-lg font-bold text-lg hover:bg-[#2a4c85] transition-all shadow-lg"
              >
                Get Custom Package Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why We're the Best Choice
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Faster. Safer. Smarter. Here's why homeowners choose us over traditional cleaning companies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-white">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center">85% Faster</h3>
              <p className="text-slate-300 text-center mb-4">
                Drone technology cleans your entire home in hours, not days. Same-day service available.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-400 mr-2" size={16} />
                  <span>Complete exterior in 2-4 hours</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-400 mr-2" size={16} />
                  <span>No scaffolding setup time</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-400 mr-2" size={16} />
                  <span>Quick dry times</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border-2 border-green-400 rounded-2xl p-8 text-white relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-green-500 rounded-full text-sm font-bold">
                Most Important
              </div>
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center">100% Safer</h3>
              <p className="text-slate-300 text-center mb-4">
                Zero ladder accidents. Zero fall risks. Your family's safety is worth it.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-400 mr-2" size={16} />
                  <span>No workers on your roof</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-400 mr-2" size={16} />
                  <span>No ladder accidents</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-400 mr-2" size={16} />
                  <span>Fully insured operations</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-white">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center">Smarter Investment</h3>
              <p className="text-slate-300 text-center mb-4">
                Professional cleaning pays for itself through extended lifespan and restored efficiency.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-400 mr-2" size={16} />
                  <span>Add 10 years to roof life</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-400 mr-2" size={16} />
                  <span>Restore solar efficiency</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-400 mr-2" size={16} />
                  <span>Increase home value</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={scrollToForm}
              className="px-10 py-5 bg-white text-[#1a3c75] rounded-lg font-bold text-xl hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl"
            >
              Experience the Difference
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-600">
              Get an instant quote online. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 text-center">
              <Clock className="mx-auto mb-4 text-blue-600" size={40} />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Instant Quotes</h3>
              <p className="text-slate-600 text-sm">
                Get your price online in 60 seconds. No sales calls, no waiting.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border-2 border-green-300 text-center">
              <CheckCircle2 className="mx-auto mb-4 text-green-600" size={40} />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Price Match Guarantee</h3>
              <p className="text-slate-600 text-sm">
                Find a lower quote? We'll match it or explain why our service is worth more.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 text-center">
              <Shield className="mx-auto mb-4 text-[#1a3c75]" size={40} />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Satisfaction Guaranteed</h3>
              <p className="text-slate-600 text-sm">
                Not happy? We'll make it right or refund your money. Simple as that.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#1a3c75] to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Shield className="mx-auto mb-6" size={56} />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't Let Your Investment Deteriorate
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Every month you wait, Gloeocapsa magma continues eating your shingles. Solar panels lose more efficiency. Your home's value decreases. Take action today.
          </p>
          <button
            onClick={scrollToForm}
            className="px-10 py-5 bg-white text-[#1a3c75] rounded-lg font-bold text-xl hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl"
          >
            Protect My Home Now
          </button>
          <p className="mt-6 text-slate-400 text-sm">
            Free instant quote • No credit card required • Same-day service available
          </p>
        </div>
      </section>

      <ResidentialLeadForm />
    </div>
  );
}
