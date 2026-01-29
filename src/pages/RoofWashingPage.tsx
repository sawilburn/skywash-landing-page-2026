import { useState, useEffect } from 'react';
import { Home, Shield, AlertTriangle, CheckCircle2, XCircle, Leaf, Award, FileCheck, Users, TrendingUp, Clock, Sparkles, Heart } from 'lucide-react';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { ResidentialLeadForm } from '../components/ResidentialLeadForm';
import { DynamicSectionImage } from '../components/DynamicSectionImage';
import { getBeforeAfterImages, getImageUrl } from '../lib/siteImages';

export function RoofWashingPage() {
  const [beforeImage, setBeforeImage] = useState('roof-dirty.jpg');
  const [afterImage, setAfterImage] = useState('roof-clean.jpg');
  const [beforeAlt, setBeforeAlt] = useState('Roof covered with Gloeocapsa magma bacteria');
  const [afterAlt, setAfterAlt] = useState('Clean roof after professional soft washing');

  useEffect(() => {
    const loadImages = async () => {
      const images = await getBeforeAfterImages('roof');
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
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-red-50 via-white to-blue-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-red-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-block px-4 py-2 bg-red-100 rounded-full text-red-800 text-sm font-semibold mb-6">
                Safety First, Results Guaranteed
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Professional Roof
                <br />
                <span className="text-[#1a3c75]">Cleaning Done Right</span>
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                No workers on your roof. No liability risks. Just safe, professional drone-powered cleaning that extends your roof's life by up to 10 years.
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
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-blue-200 shadow-sm">
                  <Award className="text-blue-600 flex-shrink-0" size={18} />
                  <span className="font-semibold">OSHA Certified</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-green-200 shadow-sm">
                  <Leaf className="text-green-600 flex-shrink-0" size={18} />
                  <span className="font-semibold">Eco-Friendly</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-blue-200 shadow-sm">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0" size={18} />
                  <span className="font-semibold">Licensed</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-200 rounded-2xl shadow-2xl overflow-hidden min-h-[400px] flex items-center justify-center animate-fade-in-scale">
              <DynamicSectionImage
                section="roof-clean.jpg"
                alt="Clean roof after professional washing"
                className="w-full h-full object-cover"
                fallback="Professional Roof Cleaning"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              The Transformation
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Watch years of harmful bacteria vanish. This is what professional, safe roof cleaning looks like.
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
              <span>Get This Result Safely</span>
              <Sparkles size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AlertTriangle className="mx-auto mb-4 text-red-600" size={64} />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              The Hidden Dangers of Roof Cleaning
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Most homeowners don't realize the serious risks involved when hiring the wrong company
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 border-2 border-red-300 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Safety Risks</h3>
                  <p className="text-slate-600">
                    Falls from roofs are one of the leading causes of construction-related deaths and injuries
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <XCircle className="text-red-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>164 deaths per year from ladder falls in the US</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="text-red-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>500,000+ people treated annually for ladder-related injuries</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="text-red-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>Workers on your roof means liability exposure for YOU</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="text-red-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>Uninsured contractors leave you financially responsible</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-orange-300 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Home className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Property Damage Risks</h3>
                  <p className="text-slate-600">
                    The wrong cleaning method destroys your roof and voids warranties
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <XCircle className="text-orange-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>High pressure washing strips protective granules</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="text-orange-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>Walking on shingles creates cracks and damage</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="text-orange-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>Improper methods void manufacturer warranties</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="text-orange-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>Forces water under shingles causing leaks</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Your Liability as a Homeowner</h3>
            <p className="text-slate-300 text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
              If an uninsured or underinsured worker gets injured on your property, YOU could be held liable for medical bills, lost wages, and legal fees. A single incident could cost you $100,000 - $500,000 or more. Don't take that risk.
            </p>
            <button
              onClick={scrollToForm}
              className="px-8 py-4 bg-white text-slate-900 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-xl"
            >
              Choose a Safe, Insured Company
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              How to Choose the Right Company
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Don't let price be your only factor. Here's what you MUST verify before hiring any roof cleaning company.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border-2 border-green-300 shadow-lg">
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">1. Verify Insurance</h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Ask for proof of both general liability AND workers' compensation insurance. Call their insurance company to verify it's active.
              </p>
              <div className="bg-green-100 border border-green-300 rounded-lg p-4">
                <p className="text-green-900 font-semibold text-sm">
                  We provide certificate of insurance before every job
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-300 shadow-lg">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">2. Check Certifications</h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                OSHA safety certification shows they follow proper safety protocols. Industry certifications prove they know what they're doing.
              </p>
              <div className="bg-blue-100 border border-blue-300 rounded-lg p-4">
                <p className="text-blue-900 font-semibold text-sm">
                  OSHA 10/30 certified technicians on every job
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border-2 border-slate-300 shadow-lg">
              <div className="w-16 h-16 bg-slate-600 rounded-xl flex items-center justify-center mb-6">
                <FileCheck className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">3. Confirm Licensing</h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Legitimate businesses are properly licensed in your state and county. Check with your local licensing board.
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
              <h3 className="text-xl font-bold text-slate-900 mb-3">4. Environmental Practices</h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Responsible companies use biodegradable solutions, protect your landscaping, and follow EPA guidelines.
              </p>
              <div className="bg-green-100 border border-green-300 rounded-lg p-4">
                <p className="text-green-900 font-semibold text-sm">
                  Plant-safe solutions with pre/post watering
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-300 shadow-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">5. Safety Methods</h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Ask how they'll clean your roof. Ladders and walking on roofs increase risk. Drone technology eliminates it.
              </p>
              <div className="bg-blue-100 border border-blue-300 rounded-lg p-4">
                <p className="text-blue-900 font-semibold text-sm">
                  100% drone-powered - no one on your roof
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border-2 border-slate-300 shadow-lg">
              <div className="w-16 h-16 bg-slate-600 rounded-xl flex items-center justify-center mb-6">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">6. Local Reputation</h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Check reviews, ask neighbors, verify they're established. Fly-by-night operators disappear when problems arise.
              </p>
              <div className="bg-slate-100 border border-slate-300 rounded-lg p-4">
                <p className="text-slate-900 font-semibold text-sm">
                  Locally owned in Purcellville since day one
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-8">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-1" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Red Flags to Watch For</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <XCircle className="text-red-500 mr-2 flex-shrink-0 mt-1" size={16} />
                      <span>Can't provide proof of insurance</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="text-red-500 mr-2 flex-shrink-0 mt-1" size={16} />
                      <span>Cash-only, no contract offered</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="text-red-500 mr-2 flex-shrink-0 mt-1" size={16} />
                      <span>Pressure to decide immediately</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <XCircle className="text-red-500 mr-2 flex-shrink-0 mt-1" size={16} />
                      <span>No physical business address</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="text-red-500 mr-2 flex-shrink-0 mt-1" size={16} />
                      <span>Price seems too good to be true</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="text-red-500 mr-2 flex-shrink-0 mt-1" size={16} />
                      <span>Uses high-pressure washing methods</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              The Gloeocapsa Magma Threat
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Those black streaks aren't just ugly. They're bacteria eating your investment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">What is Gloeocapsa Magma?</h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  It's a cyan-bacteria that feeds on the limestone filler in asphalt shingles. As it grows, it creates a dark protective layer that retains moisture and accelerates roof deterioration.
                </p>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  This isn't cosmetic damage—it's structural. The bacteria literally eats away at your shingles, reducing their lifespan by up to 10 years.
                </p>
              </div>

              <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-6">
                <h4 className="text-xl font-bold text-slate-900 mb-3">The Cost of Waiting</h4>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <TrendingUp className="text-red-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span><strong>Year 1-2:</strong> Cosmetic discoloration begins</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="text-red-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span><strong>Year 3-5:</strong> Shingle integrity compromised</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="text-red-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span><strong>Year 6-10:</strong> Premature roof replacement needed</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="text-red-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span><strong>Total Cost:</strong> $15,000 - $30,000 in early replacement</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-8 mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Soft Wash Solution</h3>
                <ul className="space-y-4 text-slate-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mr-3 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-slate-900">Low Pressure Application</p>
                      <p className="text-sm">Gentle as a garden hose—won't damage shingles or void warranties</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mr-3 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-slate-900">Kills Bacteria at Root</p>
                      <p className="text-sm">Biodegradable solution eliminates organism and prevents regrowth</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mr-3 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-slate-900">Drone Technology</p>
                      <p className="text-sm">No foot traffic on roof means zero damage from walking</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mr-3 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-slate-900">Extended Lifespan</p>
                      <p className="text-sm">Add up to 10 years to your roof's life expectancy</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#1a3c75] to-slate-800 rounded-2xl p-6 text-white text-center">
                <Clock className="mx-auto mb-3 text-blue-300" size={40} />
                <p className="text-xl font-bold mb-2">ROI: Immediate</p>
                <p className="text-slate-300 text-sm">
                  $300-800 cleaning vs. $15,000-30,000 early replacement. Professional cleaning pays for itself 20-50X over.
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
              Why We're Different
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We don't just clean roofs. We protect your investment, your safety, and your peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center">Zero Risk to You</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-400 mr-3 flex-shrink-0" size={20} />
                  <span>No workers on your roof</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-400 mr-3 flex-shrink-0" size={20} />
                  <span>Comprehensive liability insurance</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-400 mr-3 flex-shrink-0" size={20} />
                  <span>Workers' comp for all employees</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-400 mr-3 flex-shrink-0" size={20} />
                  <span>Certificate of insurance provided</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border-2 border-blue-400 rounded-2xl p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 rounded-full text-sm font-bold">
                Our Promise
              </div>
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center">Certified Excellence</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <CheckCircle2 className="text-blue-400 mr-3 flex-shrink-0" size={20} />
                  <span>OSHA safety certified technicians</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-blue-400 mr-3 flex-shrink-0" size={20} />
                  <span>State and county licensed</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-blue-400 mr-3 flex-shrink-0" size={20} />
                  <span>Industry best practices followed</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-blue-400 mr-3 flex-shrink-0" size={20} />
                  <span>Continuous training and education</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center">Environmental Stewards</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-400 mr-3 flex-shrink-0" size={20} />
                  <span>100% biodegradable solutions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-400 mr-3 flex-shrink-0" size={20} />
                  <span>Plant and pet safe chemicals</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-400 mr-3 flex-shrink-0" size={20} />
                  <span>Pre-water and post-rinse landscaping</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-400 mr-3 flex-shrink-0" size={20} />
                  <span>EPA-compliant disposal methods</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={scrollToForm}
              className="px-10 py-5 bg-white text-[#1a3c75] rounded-lg font-bold text-xl hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl"
            >
              Choose Safety & Quality
            </button>
            <p className="mt-4 text-slate-400">
              Free instant quote • No pressure sales • Certificate of insurance provided
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-10 border-2 border-blue-200 text-center">
            <Shield className="mx-auto mb-6 text-[#1a3c75]" size={56} />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Don't Gamble With Your Safety or Investment
            </h2>
            <p className="text-xl text-slate-700 mb-8 leading-relaxed">
              The cheapest quote often becomes the most expensive mistake. Choose a company that's insured, certified, licensed, and committed to doing it right—not just doing it cheap.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <p className="text-3xl font-bold text-green-600 mb-2">$300-800</p>
                <p className="text-slate-600 text-sm">Professional Cleaning</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <p className="text-3xl font-bold text-blue-600 mb-2">+10 Years</p>
                <p className="text-slate-600 text-sm">Extended Roof Life</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <p className="text-3xl font-bold text-red-600 mb-2">$0</p>
                <p className="text-slate-600 text-sm">Liability Exposure</p>
              </div>
            </div>
            <button
              onClick={scrollToForm}
              className="px-10 py-5 bg-[#1a3c75] text-white rounded-lg font-bold text-xl hover:bg-[#2a4c85] transition-all shadow-lg"
            >
              Get Your Free Quote Now
            </button>
          </div>
        </div>
      </section>

      <ResidentialLeadForm />
    </div>
  );
}
