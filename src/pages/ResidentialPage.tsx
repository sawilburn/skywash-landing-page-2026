import { Home, Droplets, Wind, Square, Heart, Shield, Leaf, CheckCircle2, AlertTriangle, Sparkles, ArrowRight, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { ResidentialLeadForm } from '../components/ResidentialLeadForm';
import { DynamicSectionImage } from '../components/DynamicSectionImage';

export function ResidentialPage() {
  const scrollToForm = () => {
    const element = document.getElementById('residential-form');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-block px-4 py-2 bg-[#1a3c75]/10 rounded-full text-[#1a3c75] text-sm font-semibold mb-6">
                Residential Services
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Love Your Home Again.
                <br />
                <span className="text-[#1a3c75]">Instantly.</span>
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                The safest way to clean your roof and siding. No high pressure, no ladders, just results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={scrollToForm}
                  className="px-8 py-4 bg-[#1a3c75] text-white rounded-lg font-bold text-lg hover:bg-[#2a4c85] transition-all shadow-lg hover:shadow-xl"
                >
                  Get a Free Instant Quote
                </button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-slate-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="text-green-600" size={20} />
                  <span>Plant & Pet Safe</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="text-green-600" size={20} />
                  <span>Fully Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="text-green-600" size={20} />
                  <span>Local to Loudoun</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-200 rounded-2xl shadow-2xl overflow-hidden min-h-[400px] flex items-center justify-center animate-fade-in-scale">
              <DynamicSectionImage
                section="residential-hero"
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
              See the Difference
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Drag the slider to compare before and after. This is the power of professional soft wash cleaning.
            </p>
          </div>

          <BeforeAfterSlider
            beforeImage="roof-dirty.jpg"
            afterImage="roof-clean.jpg"
            beforeAlt="Roof before cleaning"
            afterAlt="Roof after cleaning"
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

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Why Soft Wash?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Those black streaks on your roof aren't just dirt—they're Gloeocapsa Magma bacteria eating away at your shingles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
              <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center mb-6">
                <AlertTriangle className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                High Pressure Washing
                <span className="text-red-600"> (Bad)</span>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">✗</span>
                  <span className="text-slate-700">Damages shingles and voids warranties</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">✗</span>
                  <span className="text-slate-700">Forces water into your attic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">✗</span>
                  <span className="text-slate-700">Removes protective granules</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">✗</span>
                  <span className="text-slate-700">Creates safety hazards with ladders</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2 className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Drone Soft Wash
                <span className="text-green-600"> (Good)</span>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-slate-700">Low pressure like a garden hose</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-slate-700">Biodegradable cleaning solution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-slate-700">Kills bacteria at the root</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-slate-700">No ladders means zero risk</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-8 max-w-3xl mx-auto">
            <h4 className="text-xl font-bold text-slate-900 mb-3">What is Gloeocapsa Magma?</h4>
            <p className="text-slate-700 leading-relaxed">
              It's a cyan-bacteria that feeds on the limestone filler in asphalt shingles. Left untreated, it reduces your roof's lifespan by up to 10 years and can cost you thousands in premature replacement. Our soft wash treatment eliminates it safely and prevents regrowth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive exterior cleaning for every part of your home
            </p>
          </div>

          <div className="mb-12 bg-gradient-to-br from-[#1a3c75] to-slate-800 rounded-2xl p-8 text-white shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block px-3 py-1 bg-green-500/30 rounded-full text-green-300 text-xs font-bold mb-4">
                  COMPLETE PACKAGE
                </div>
                <h3 className="text-3xl font-bold mb-4">Full House Washing Service</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Get everything your home needs in one comprehensive package: house siding, windows (interior & exterior), roof washing, and solar panel cleaning. Faster, safer, smarter.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">All Siding Types</span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">Windows</span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">Roof</span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">Solar</span>
                </div>
                <Link
                  to="/residential/house-washing"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-[#1a3c75] rounded-lg font-bold hover:bg-blue-50 transition-all shadow-lg"
                >
                  <span>Learn More About Full Service</span>
                  <ArrowRight size={20} />
                </Link>
              </div>
              <div className="bg-slate-700/50 rounded-xl p-6 border border-white/10">
                <h4 className="text-xl font-bold mb-4 text-center">Why Bundle?</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle2 className="text-green-400 mr-3 flex-shrink-0" size={20} />
                    <span>Save up to 25% vs. individual services</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="text-green-400 mr-3 flex-shrink-0" size={20} />
                    <span>Entire exterior cleaned in one day</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="text-green-400 mr-3 flex-shrink-0" size={20} />
                    <span>Protect your investment completely</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="text-green-400 mr-3 flex-shrink-0" size={20} />
                    <span>Add 10 years to roof lifespan</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/residential/roof-washing" className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-[#1a3c75] hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Home className="text-[#1a3c75]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#1a3c75] transition-colors">Roof Cleaning</h3>
              <p className="text-slate-600 mb-4">
                Remove black streaks, algae, and moss. Extend the life of your roof by up to 10 years.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 mb-4">
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={14} />
                  Warranty-safe cleaning
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={14} />
                  All roof types
                </li>
              </ul>
              <div className="flex items-center text-[#1a3c75] font-semibold text-sm group-hover:underline">
                <span>Learn More</span>
                <ArrowRight className="ml-2" size={16} />
              </div>
            </Link>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                <Droplets className="text-cyan-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">House Washing</h3>
              <p className="text-slate-600 mb-4">
                Safe for vinyl, Hardie plank, brick, and stucco. Restore your home's curb appeal.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={14} />
                  Window & door protection
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={14} />
                  Surface-safe formula
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Wind className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Gutter Cleaning</h3>
              <p className="text-slate-600 mb-4">
                Debris removal and flow testing. Prevent water damage and foundation issues.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={14} />
                  Complete debris removal
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={14} />
                  Downspout flushing
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-slate-200 rounded-xl flex items-center justify-center mb-6">
                <Square className="text-slate-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Hardscapes</h3>
              <p className="text-slate-600 mb-4">
                Driveway and patio restoration. Remove oil stains, dirt, and weathering.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={14} />
                  Concrete & pavers
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={14} />
                  Stain removal
                </li>
              </ul>
            </div>

            <Link to="/residential/solar-washing" className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border-2 border-amber-500 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <Sun className="text-amber-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">Solar Panel Cleaning</h3>
              <p className="text-slate-600 mb-4">
                Restore up to 30% efficiency loss. Safe cleaning that protects your investment.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 mb-4">
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={14} />
                  No workers on roof
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={14} />
                  Panel-safe methods
                </li>
              </ul>
              <div className="flex items-center text-amber-600 font-semibold text-sm group-hover:underline">
                <span>Learn More</span>
                <ArrowRight className="ml-2" size={16} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#1a3c75] to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your Safety is Our Priority
            </h2>
            <p className="text-slate-300 text-lg">
              We're your neighbors in Purcellville, and we care about your home as much as you do.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-green-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Plant & Pet Friendly</h3>
              <p className="text-slate-300">
                Our biodegradable solutions are safe for your landscaping, pets, and family. We pre-water and post-rinse all plants.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="text-blue-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Fully Insured</h3>
              <p className="text-slate-300">
                Comprehensive liability and workers' compensation insurance for your complete peace of mind.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="text-red-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Locally Owned</h3>
              <p className="text-slate-300">
                Based in Purcellville, serving Loudoun County. We're not a franchise—we're your neighbors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ResidentialLeadForm />
    </div>
  );
}
