import { useState, useEffect } from 'react';
import { Zap, Shield, TrendingUp, AlertTriangle, CheckCircle2, XCircle, Leaf, Award, FileCheck, Sun, DollarSign, Clock, Sparkles, Battery, Heart } from 'lucide-react';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { ResidentialLeadForm } from '../components/ResidentialLeadForm';
import { DynamicSectionImage } from '../components/DynamicSectionImage';
import { getBeforeAfterImages, getImageUrl } from '../lib/siteImages';

export function SolarWashingPage() {
  const [beforeImage, setBeforeImage] = useState('solar-dirty.jpg');
  const [afterImage, setAfterImage] = useState('solar-clean.jpg');
  const [beforeAlt, setBeforeAlt] = useState('Dirty solar panels covered in dust and debris');
  const [afterAlt, setAfterAlt] = useState('Clean solar panels producing maximum energy');

  useEffect(() => {
    const loadImages = async () => {
      const images = await getBeforeAfterImages('solar');
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
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-amber-50 via-white to-green-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-block px-4 py-2 bg-amber-100 rounded-full text-amber-800 text-sm font-semibold mb-6">
                Maximize Your Solar Investment
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Solar Panel Cleaning
                <br />
                <span className="text-[#1a3c75]">That Pays for Itself</span>
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Restore up to 30% lost efficiency with safe, professional drone-powered cleaning. No workers on your roof. No liability. Just maximum energy production.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={scrollToForm}
                  className="px-8 py-4 bg-[#1a3c75] text-white rounded-lg font-bold text-lg hover:bg-[#2a4c85] transition-all shadow-lg hover:shadow-xl"
                >
                  Get Free Quote
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-green-200 shadow-sm">
                  <Shield className="text-green-600 flex-shrink-0" size={18} />
                  <span className="font-semibold">Fully Insured</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-amber-200 shadow-sm">
                  <TrendingUp className="text-amber-600 flex-shrink-0" size={18} />
                  <span className="font-semibold">30% Efficiency Gain</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-green-200 shadow-sm">
                  <Leaf className="text-green-600 flex-shrink-0" size={18} />
                  <span className="font-semibold">Panel-Safe</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-blue-200 shadow-sm">
                  <Award className="text-blue-600 flex-shrink-0" size={18} />
                  <span className="font-semibold">OSHA Certified</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-200 rounded-2xl shadow-2xl overflow-hidden min-h-[400px] flex items-center justify-center animate-fade-in-scale">
              <DynamicSectionImage
                section="solar-clean.jpg"
                alt="Clean solar panels producing maximum energy"
                className="w-full h-full object-cover"
                fallback="Professional Solar Panel Cleaning"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Sun className="mx-auto mb-4 text-amber-500" size={64} />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              The Efficiency Loss You Can't Afford
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Dirty solar panels can lose 15-30% efficiency. That's money left on the table every single day.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border-2 border-red-300 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-red-600 mb-2">15-30%</div>
                <p className="text-slate-700 font-semibold">Efficiency Loss</p>
              </div>
              <p className="text-slate-600 text-center">
                Dirt, pollen, bird droppings, and pollution create a barrier that blocks sunlight from reaching your panels
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border-2 border-amber-300 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-amber-600 mb-2">$300-900</div>
                <p className="text-slate-700 font-semibold">Annual Loss</p>
              </div>
              <p className="text-slate-600 text-center">
                Based on a typical 6kW system, dirty panels cost you hundreds per year in lost energy production
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border-2 border-green-300 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-green-600 mb-2">3-6mo</div>
                <p className="text-slate-700 font-semibold">ROI Timeline</p>
              </div>
              <p className="text-slate-600 text-center">
                Professional cleaning pays for itself in increased energy production within months
              </p>
            </div>
          </div>

          <BeforeAfterSlider
            beforeImage={beforeImage}
            afterImage={afterImage}
            beforeAlt={beforeAlt}
            afterAlt={afterAlt}
          />

          <div className="mt-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">The Math is Simple</h3>
                <div className="space-y-3 text-slate-300">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-700">
                    <span>6kW System Annual Production:</span>
                    <span className="font-semibold text-white">$1,200-1,800</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-slate-700">
                    <span>20% Efficiency Loss:</span>
                    <span className="font-semibold text-red-400">-$240-360/year</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-slate-700">
                    <span>Professional Cleaning:</span>
                    <span className="font-semibold text-green-400">$150-250/year</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-lg font-semibold text-white">Net Annual Benefit:</span>
                    <span className="text-2xl font-bold text-green-400">+$90-110</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Battery className="mx-auto mb-4 text-green-400" size={56} />
                <p className="text-xl mb-6">
                  Clean panels don't just look better—they make you money every single day through maximum energy production.
                </p>
                <button
                  onClick={scrollToForm}
                  className="px-8 py-4 bg-white text-slate-900 rounded-lg font-bold hover:bg-blue-50 transition-all shadow-xl"
                >
                  Maximize My Solar Investment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AlertTriangle className="mx-auto mb-4 text-red-600" size={64} />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              The Risks of DIY or Unsafe Cleaning
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Solar panels on roofs create the same deadly risks as any rooftop work—plus unique damage concerns
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 border-2 border-red-300 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Life-Threatening Safety Risks</h3>
                  <p className="text-slate-600">
                    Falls from solar panel installations are a leading cause of residential rooftop injuries
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <XCircle className="text-red-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>Slippery wet surfaces create extreme fall hazards</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="text-red-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>Awkward positioning around panels increases risk</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="text-red-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>YOU are liable if someone gets hurt on your property</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="text-red-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>Medical bills and lawsuits can exceed $500,000</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-orange-300 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Panel Damage Risks</h3>
                  <p className="text-slate-600">
                    Improper cleaning can permanently damage expensive solar equipment
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <XCircle className="text-orange-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>High pressure washing creates micro-cracks in panels</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="text-orange-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>Wrong cleaning agents damage anti-reflective coatings</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="text-orange-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>Abrasive materials scratch protective glass</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="text-orange-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>Voids manufacturer warranties—costs thousands</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Homeowner Liability Warning</h3>
            <p className="text-slate-300 text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
              If you climb on your roof or hire an uninsured contractor who gets injured, your homeowner's insurance may not cover the claim. You could be personally liable for medical expenses, lost wages, pain and suffering, and legal fees—potentially hundreds of thousands of dollars. Additionally, damaging your panels through improper cleaning voids warranties and forces expensive replacements.
            </p>
            <button
              onClick={scrollToForm}
              className="px-8 py-4 bg-white text-slate-900 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-xl"
            >
              Choose Safe, Professional Cleaning
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              What to Look for in a Solar Cleaning Company
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Solar panels are a major investment. Don't trust them to just anyone. Here's what you MUST verify.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border-2 border-green-300 shadow-lg">
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">1. Full Insurance Coverage</h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Verify both general liability AND workers' compensation. Ask for certificate of insurance and call to confirm it's active and adequate.
              </p>
              <div className="bg-green-100 border border-green-300 rounded-lg p-4">
                <p className="text-green-900 font-semibold text-sm">
                  We provide proof of insurance before every job
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-300 shadow-lg">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">2. Solar-Specific Training</h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Not all cleaners understand solar panels. Look for companies with specific training in solar panel maintenance and cleaning protocols.
              </p>
              <div className="bg-blue-100 border border-blue-300 rounded-lg p-4">
                <p className="text-blue-900 font-semibold text-sm">
                  Trained specifically in solar panel cleaning methods
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border-2 border-slate-300 shadow-lg">
              <div className="w-16 h-16 bg-slate-600 rounded-xl flex items-center justify-center mb-6">
                <FileCheck className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">3. Proper Licensing</h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Legitimate businesses have state and local licenses. Unlicensed operators leave you unprotected when problems arise.
              </p>
              <div className="bg-slate-100 border border-slate-300 rounded-lg p-4">
                <p className="text-slate-900 font-semibold text-sm">
                  Licensed in Virginia and all counties we serve
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border-2 border-green-300 shadow-lg">
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <Leaf className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">4. Panel-Safe Methods</h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Ask about their cleaning process. High pressure, abrasives, or harsh chemicals damage panels. Low-pressure soft washing is the only safe method.
              </p>
              <div className="bg-green-100 border border-green-300 rounded-lg p-4">
                <p className="text-green-900 font-semibold text-sm">
                  Soft wash only—protects coatings and warranties
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-300 shadow-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">5. No-Contact Technology</h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                The safest method eliminates workers on the roof entirely. Drone technology delivers professional results without the liability.
              </p>
              <div className="bg-blue-100 border border-blue-300 rounded-lg p-4">
                <p className="text-blue-900 font-semibold text-sm">
                  100% drone-powered—no one on your roof
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border-2 border-slate-300 shadow-lg">
              <div className="w-16 h-16 bg-slate-600 rounded-xl flex items-center justify-center mb-6">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">6. Performance Guarantee</h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Reputable companies stand behind their work with satisfaction guarantees and warranty protection assurances.
              </p>
              <div className="bg-slate-100 border border-slate-300 rounded-lg p-4">
                <p className="text-slate-900 font-semibold text-sm">
                  Satisfaction guaranteed, warranty-safe methods
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-8">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-1" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Red Flags to Avoid</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <XCircle className="text-red-500 mr-2 flex-shrink-0 mt-1" size={16} />
                      <span>No proof of insurance or licensing</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="text-red-500 mr-2 flex-shrink-0 mt-1" size={16} />
                      <span>Uses high-pressure washing equipment</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="text-red-500 mr-2 flex-shrink-0 mt-1" size={16} />
                      <span>"Too good to be true" pricing</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <XCircle className="text-red-500 mr-2 flex-shrink-0 mt-1" size={16} />
                      <span>No physical business address or references</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="text-red-500 mr-2 flex-shrink-0 mt-1" size={16} />
                      <span>Can't explain their cleaning process</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="text-red-500 mr-2 flex-shrink-0 mt-1" size={16} />
                      <span>Pressure tactics or cash-only payment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Sun className="mx-auto mb-4 text-amber-500" size={64} />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              How Dirt Reduces Solar Efficiency
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Understanding what's blocking your panels helps you see why professional cleaning is essential
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Common Contaminants</h3>
                <ul className="space-y-4 text-slate-700">
                  <li className="flex items-start">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-2xl">🌾</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Pollen & Organic Matter</p>
                      <p className="text-sm">Creates a sticky film that attracts more dirt and reduces light transmission by 5-10%</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-2xl">💨</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Dust & Pollution</p>
                      <p className="text-sm">Accumulates gradually, blocking sunlight and reducing efficiency by 7-15%</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-2xl">🦅</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Bird Droppings</p>
                      <p className="text-sm">Highly acidic and blocks significant surface area—can reduce single panel output by 50%</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-2xl">💧</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Hard Water Deposits</p>
                      <p className="text-sm">Mineral buildup from rain creates cloudy residue that permanently etches glass if left untreated</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-300 rounded-2xl p-8 mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">The Science Behind the Loss</h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Solar panels work by absorbing photons from sunlight. Even a thin layer of dirt or dust creates a barrier that reflects or absorbs light before it reaches the photovoltaic cells.
                </p>
                <div className="bg-white rounded-xl p-6 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-semibold text-slate-900">Clean Panel</span>
                    <span className="text-3xl font-bold text-green-600">100%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-6">
                    <div className="bg-green-500 h-6 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-semibold text-slate-900">Light Soiling</span>
                    <span className="text-3xl font-bold text-amber-600">85%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-6">
                    <div className="bg-amber-500 h-6 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-semibold text-slate-900">Heavy Soiling</span>
                    <span className="text-3xl font-bold text-red-600">70%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-6">
                    <div className="bg-red-500 h-6 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#1a3c75] to-slate-800 rounded-2xl p-6 text-white text-center">
                <Clock className="mx-auto mb-3 text-blue-300" size={40} />
                <p className="text-xl font-bold mb-2">Recommended Cleaning Frequency</p>
                <p className="text-slate-300 text-sm">
                  2-4 times per year depending on environment. More frequent in dusty, high-pollen, or bird-heavy areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Safe, Effective Process
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Maximum efficiency restoration with zero risk to you, your roof, or your panels
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center">Zero Risk</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-400 mr-3 flex-shrink-0" size={20} />
                  <span>No workers on your roof</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-400 mr-3 flex-shrink-0" size={20} />
                  <span>Comprehensive insurance coverage</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-400 mr-3 flex-shrink-0" size={20} />
                  <span>Certificate of insurance provided</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-400 mr-3 flex-shrink-0" size={20} />
                  <span>OSHA-certified technicians</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border-2 border-blue-400 rounded-2xl p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 rounded-full text-sm font-bold">
                Our Method
              </div>
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center">Panel-Safe Cleaning</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <CheckCircle2 className="text-blue-400 mr-3 flex-shrink-0" size={20} />
                  <span>Low-pressure soft wash only</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-blue-400 mr-3 flex-shrink-0" size={20} />
                  <span>pH-balanced, panel-safe solution</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-blue-400 mr-3 flex-shrink-0" size={20} />
                  <span>Protects anti-reflective coatings</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-blue-400 mr-3 flex-shrink-0" size={20} />
                  <span>Maintains manufacturer warranties</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center">Maximum Results</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-400 mr-3 flex-shrink-0" size={20} />
                  <span>Up to 30% efficiency restoration</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-400 mr-3 flex-shrink-0" size={20} />
                  <span>Immediate energy production increase</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-400 mr-3 flex-shrink-0" size={20} />
                  <span>Extended panel lifespan</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-400 mr-3 flex-shrink-0" size={20} />
                  <span>Satisfaction guaranteed</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={scrollToForm}
              className="px-10 py-5 bg-white text-[#1a3c75] rounded-lg font-bold text-xl hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl"
            >
              Restore My Solar Efficiency
            </button>
            <p className="mt-4 text-slate-400">
              Free instant quote • See efficiency boost immediately • Zero liability
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-50 to-amber-50 rounded-2xl p-10 border-2 border-green-200 text-center">
            <DollarSign className="mx-auto mb-6 text-green-600" size={56} />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Your Solar Investment Deserves Protection
            </h2>
            <p className="text-xl text-slate-700 mb-8 leading-relaxed">
              You invested thousands in solar panels to save money and help the environment. Don't lose 15-30% of that investment to dirt and neglect. Professional cleaning pays for itself while protecting your equipment and eliminating liability.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <p className="text-3xl font-bold text-green-600 mb-2">$150-250</p>
                <p className="text-slate-600 text-sm">Professional Cleaning</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <p className="text-3xl font-bold text-blue-600 mb-2">+30%</p>
                <p className="text-slate-600 text-sm">Efficiency Restoration</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <p className="text-3xl font-bold text-amber-600 mb-2">3-6mo</p>
                <p className="text-slate-600 text-sm">Return on Investment</p>
              </div>
            </div>
            <button
              onClick={scrollToForm}
              className="px-10 py-5 bg-[#1a3c75] text-white rounded-lg font-bold text-xl hover:bg-[#2a4c85] transition-all shadow-lg"
            >
              Get Your Free Solar Cleaning Quote
            </button>
          </div>
        </div>
      </section>

      <ResidentialLeadForm />
    </div>
  );
}
