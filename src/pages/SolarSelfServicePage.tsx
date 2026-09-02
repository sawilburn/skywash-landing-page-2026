import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Sun,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Shield,
  BadgeCheck,
  Wrench,
  Award,
  Phone,
  Loader2,
  AlertCircle,
  MapPin,
  Home as HomeIcon,
  Zap,
  TrendingUp,
  Leaf,
} from 'lucide-react';

const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/00w9AM6Kfc9E55h50K87K02';

const WESTERN_LOUDOUN_ZIPS = [
  '20117', // Bluemont
  '20132', // Purcellville
  '20135', // Round Hill
  '20158', // Lincoln
  '20175', // Leesburg (western portions)
  '20176', // Leesburg (western portions)
  '20180', // Lovettsville
  '20181', // Marshall (serves western Loudoun)
  '20187', // Kearnysville (serves western Loudoun)
  '20197', // Waterford
  '22430', // Round Hill area
  '22625', // Mountville
  '22645', // Round Hill
  '20129', // Paeonian Springs
  '20133', // Middleburg (western Loudoun border)
  '20143', // Linden
  '20185', // Upperville
  '22701', // Culpeper (some western Loudoun overlap)
];

export function SolarSelfServicePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [sqft, setSqft] = useState('');
  const [eligibilityError, setEligibilityError] = useState('');

  const checkEligibility = (): boolean => {
    setEligibilityError('');

    if (!address.trim()) {
      setEligibilityError('Please enter your property address.');
      return false;
    }

    const zip = zipCode.trim();
    if (!zip) {
      setEligibilityError('Please enter your ZIP code to verify you are in our Western Loudoun service area.');
      return false;
    }

    if (!WESTERN_LOUDOUN_ZIPS.includes(zip)) {
      setEligibilityError(
        'Sorry, this flat-rate solar cleaning offer is only available for homes in Western Loudoun County, VA. Please call us for a custom quote if you are outside this area.',
      );
      return false;
    }

    const sqftNum = Number(sqft);
    if (!sqft || isNaN(sqftNum) || sqftNum <= 0) {
      setEligibilityError('Please enter your home\'s approximate square footage.');
      return false;
    }

    if (sqftNum > 3500) {
      setEligibilityError(
        'Sorry, this flat-rate solar cleaning offer is for homes under 3,500 sq ft. Please call us for a custom quote for larger homes.',
      );
      return false;
    }

    return true;
  };

  const handleCheckout = () => {
    if (!checkEligibility()) {
      return;
    }

    setIsLoading(true);
    setError('');

    window.location.href = STRIPE_PAYMENT_LINK;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-green-50 pt-20">
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-slate-900 via-[#1a3c75] to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-amber-300 text-sm font-semibold mb-5">
            <Sparkles size={14} />
            Self-Service Booking
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Residential Solar Panel Cleaning
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            Professional solar panel cleaning that restores up to 35% lost efficiency. One flat price, no surprise fees. Book and pay securely online in minutes.
          </p>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Award, label: 'Trained & Certified' },
              { icon: BadgeCheck, label: 'Background Checked' },
              { icon: Wrench, label: 'Pro-Grade Equipment' },
              { icon: Shield, label: 'Fully Insured' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                <item.icon className="text-[#1a3c75] flex-shrink-0" size={18} />
                <span className="font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Purchase card */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            {/* Product header */}
            <div className="bg-gradient-to-br from-[#1a3c75] to-[#2a5a95] p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Sun size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-1">Residential Solar Panel Cleaning</h2>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Professional cleaning of your rooftop solar panels using panel-safe, low-pressure soft wash methods. Removes dirt, pollen, and bird droppings to restore maximum energy production.
                  </p>
                </div>
              </div>
            </div>

            {/* What's included */}
            <div className="p-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">
                What's Included
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  'Low-pressure soft wash — safe for anti-reflective coatings and warranties',
                  'pH-balanced, panel-safe cleaning solution',
                  'Removes dirt, pollen, dust, and bird droppings',
                  'Restores up to 35% lost energy production',
                  'Trained, certified, background-checked technicians',
                  'Fully insured — your property is protected',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Efficiency highlight */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-amber-50 rounded-xl p-4 text-center border border-amber-200">
                  <TrendingUp className="mx-auto mb-2 text-amber-600" size={24} />
                  <p className="text-2xl font-bold text-amber-600">35%</p>
                  <p className="text-xs text-slate-600 mt-1">Efficiency Gain</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4 text-center border border-green-200">
                  <Leaf className="mx-auto mb-2 text-green-600" size={24} />
                  <p className="text-2xl font-bold text-green-600">Safe</p>
                  <p className="text-xs text-slate-600 mt-1">Panel-Safe Wash</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center border border-blue-200">
                  <Zap className="mx-auto mb-2 text-[#1a3c75]" size={24} />
                  <p className="text-2xl font-bold text-[#1a3c75]">3-6mo</p>
                  <p className="text-xs text-slate-600 mt-1">ROI Timeline</p>
                </div>
              </div>

              {/* Eligibility form */}
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200 mb-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#1a3c75] mb-4 flex items-center gap-2">
                  <MapPin size={16} />
                  Verify Your Eligibility
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  This flat-rate solar cleaning offer is available for homes in Western Loudoun County, VA that are under 3,500 sq ft. Enter your address details below to verify.
                </p>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="sss-address" className="block text-sm font-semibold text-slate-700 mb-2">
                      Property Address *
                    </label>
                    <input
                      id="sss-address"
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="123 Main St, Purcellville, VA"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="sss-zip" className="block text-sm font-semibold text-slate-700 mb-2">
                        ZIP Code *
                      </label>
                      <input
                        id="sss-zip"
                        type="text"
                        maxLength={5}
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5))}
                        placeholder="20132"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="sss-sqft" className="block text-sm font-semibold text-slate-700 mb-2">
                        Home Sq Ft *
                      </label>
                      <input
                        id="sss-sqft"
                        type="number"
                        min={0}
                        value={sqft}
                        onChange={(e) => setSqft(e.target.value)}
                        placeholder="e.g. 1800"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-2 text-xs text-slate-500 bg-white/60 rounded-lg p-3 border border-slate-200">
                    <HomeIcon size={14} className="text-slate-400 flex-shrink-0 mt-0.5" />
                    <span>
                      Square footage is based on public records. By entering your home's square footage, you confirm it is under 3,500 sq ft. We verify all orders prior to scheduling.
                    </span>
                  </div>
                </div>

                {eligibilityError && (
                  <div className="mt-4 flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                    <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={18} />
                    <p className="text-red-700 text-sm">{eligibilityError}</p>
                  </div>
                )}
              </div>

              {/* Price */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 mb-6">
                <div className="flex items-baseline justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Flat Rate</p>
                    <p className="text-sm text-slate-400 mt-1">Pay via Stripe checkout</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400">Secure checkout</p>
                    <p className="text-sm font-semibold text-slate-600">Powered by Stripe</p>
                  </div>
                </div>
              </div>

              {error && (
                <div className="mb-6 flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                  <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}

              {/* Checkout button */}
              <button
                onClick={handleCheckout}
                disabled={isLoading}
                className="w-full bg-[#1a3c75] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#15305f] transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Redirecting to checkout...
                  </>
                ) : (
                  <>
                    Book & Pay for Solar Cleaning
                    <ArrowRight size={20} />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-slate-400 mt-4">
                You'll be redirected to Stripe's secure checkout to complete your payment. We'll contact you to schedule your appointment after payment.
              </p>
            </div>
          </div>

          {/* Qualification footnote */}
          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h4 className="text-sm font-bold text-amber-900 mb-2 flex items-center gap-2">
              <AlertCircle size={16} />
              Qualification Requirements
            </h4>
            <ul className="space-y-1.5 text-sm text-amber-800">
              <li className="flex items-start gap-2">
                <span className="font-bold">1.</span>
                <span>Property must be located in <strong>Western Loudoun County, Virginia</strong>. ZIP codes we serve include: 20117, 20132, 20135, 20158, 20175, 20176, 20180, 20197, 20129, 20133, and surrounding areas.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">2.</span>
                <span>Home must be <strong>under 3,500 square feet</strong>. Square footage is verified against public property records prior to scheduling.</span>
              </li>
            </ul>
            <p className="text-xs text-amber-700 mt-3 pt-3 border-t border-amber-200">
              If your home does not meet these requirements, please call us for a custom quote tailored to your property.
            </p>
          </div>

          {/* Alternative contact */}
          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm mb-3">Prefer to book by phone?</p>
            <a
              href="tel:+17037550865"
              className="inline-flex items-center gap-2 text-[#1a3c75] font-bold hover:underline"
            >
              <Phone size={18} />
              (703) 755-0865
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
