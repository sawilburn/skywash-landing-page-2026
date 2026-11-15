import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Snowflake, Sparkles, ShieldCheck, Sun, Droplets, Award, Check, ArrowRight } from 'lucide-react';
import { submitLead } from '../lib/supabase';

const PACKAGES = [
  {
    name: 'Basic',
    description: 'Interior and exterior window cleaning',
    features: ['Interior glass cleaning', 'Exterior glass cleaning'],
  },
  {
    name: 'Professional',
    description: 'Everything in Basic, plus sill care',
    features: ['Everything in Basic', 'Sill vacuuming and wipedown'],
  },
  {
    name: 'Premium',
    description: 'Our most complete window care',
    features: ['Everything in Professional', 'Screen removal, cleaning and reinstallation'],
  },
];

const BENEFITS = [
  {
    icon: Sparkles,
    title: 'Streak-free clarity',
    text: 'Professional equipment and proper technique remove the grime that everyday cleaning leaves behind.',
  },
  {
    icon: Sun,
    title: 'Brighter light for the season',
    text: 'Clean glass lets more natural light into your home during the shorter winter days.',
  },
  {
    icon: Droplets,
    title: 'Removes hard-water buildup',
    text: 'Mineral spots and film are lifted before they can etch into the glass and become permanent.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe, ladder-free service',
    text: 'Trained technicians with proper safety equipment handle the work so you never have to climb.',
  },
  {
    icon: Award,
    title: 'Trained, insured, background-checked',
    text: 'Every technician is certified and background-checked, so you can feel comfortable having us in your home.',
  },
];

const INITIAL_FORM = {
  firstName: '',
  email: '',
  address: '',
  packageName: '',
};

export function HolidayWindowCleaningCampaignPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const scrollToForm = () => {
    document.getElementById('holiday-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const updateField = (field: keyof typeof INITIAL_FORM) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const details = [
      'Campaign: Holiday Window Cleaning',
      `Package: ${formData.packageName || 'Not selected'}`,
      `Property Address: ${formData.address.trim()}`,
    ].join('\n');

    try {
      await submitLead({
        type: 'residential',
        contact_name: formData.firstName.trim(),
        email: formData.email.trim(),
        phone: '',
        details,
      });
      navigate('/thank-you');
    } catch (err) {
      console.error('Lead submission error:', err);
      setError('Something went wrong. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-[#fbf8f2] text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-green-800 text-white">
        <div className="absolute inset-0 pointer-events-none">
          {[
            { top: '12%', left: '8%', size: 28, delay: '0s' },
            { top: '26%', left: '46%', size: 20, delay: '1.2s' },
            { top: '70%', left: '14%', size: 24, delay: '0.6s' },
            { top: '18%', left: '88%', size: 30, delay: '1.8s' },
            { top: '78%', left: '78%', size: 22, delay: '2.4s' },
          ].map((flake, i) => (
            <Snowflake
              key={i}
              size={flake.size}
              className="absolute text-white/20 animate-pulse"
              style={{ top: flake.top, left: flake.left, animationDelay: flake.delay }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-semibold text-red-100 mb-6">
              <Sparkles size={16} className="text-yellow-300" />
              Holiday Window Cleaning Season
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Let the Holidays <span className="text-yellow-200">Shine Through</span>
            </h1>

            <p className="text-xl text-green-50 leading-relaxed mb-8 max-w-2xl">
              Crystal-clear windows for the season ahead. Professional residential window cleaning
              by trained, insured technicians, so your home looks its best for every gathering.
            </p>

            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white rounded-lg font-bold text-lg shadow-lg hover:bg-red-700 hover:shadow-xl transition-all"
            >
              Request Your Holiday Quote
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-green-950 mb-6 leading-tight">
              Why Professional Window Cleaning Matters
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Your windows are the first thing guests notice and the last thing most people clean.
              Here is what a professional visit gives your home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-white p-8 rounded-2xl border border-stone-200 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="text-green-800" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages & Form */}
      <section id="holiday-form" className="py-20 bg-green-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Request Your Holiday Quote</h2>
            <p className="text-xl text-green-50 leading-relaxed">
              Choose the service level that fits your home, then tell us where to find you.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-4">
              <p className="text-sm font-bold uppercase tracking-widest text-yellow-200 mb-2">Service Levels</p>
              {PACKAGES.map((pkg) => {
                const selected = formData.packageName === pkg.name;
                return (
                  <button
                    key={pkg.name}
                    type="button"
                    onClick={() => updateField('packageName')(selected ? '' : pkg.name)}
                    aria-pressed={selected}
                    className={`w-full text-left p-6 rounded-2xl border-2 transition-all ${
                      selected
                        ? 'bg-white text-slate-900 border-yellow-300 shadow-xl'
                        : 'bg-white/5 text-white border-white/20 hover:bg-white/10 hover:border-white/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xl font-bold">{pkg.name}</span>
                      {selected && (
                        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-green-700 text-white">
                          <Check size={16} />
                        </span>
                      )}
                    </div>
                    <p className={`mb-3 ${selected ? 'text-slate-600' : 'text-green-50'}`}>{pkg.description}</p>
                    <ul className="space-y-1.5">
                      {pkg.features.map((feature) => (
                        <li key={feature} className={`flex items-start gap-2 text-sm ${selected ? 'text-slate-700' : 'text-green-50'}`}>
                          <Check size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </button>
                );
              })}
              <p className="text-sm text-green-100">Service level is optional. Not sure yet? Leave it blank and we will recommend one.</p>
            </div>

            <form onSubmit={handleSubmit} className="lg:col-span-3 bg-white text-slate-900 rounded-2xl p-8 md:p-10 shadow-2xl">
              <h3 className="text-2xl font-bold text-green-950 mb-2">Your Details</h3>
              <p className="text-slate-600 mb-8">We will reach out to confirm your appointment.</p>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="holiday-first-name" className="block text-sm font-semibold text-slate-700 mb-2">
                    First Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="holiday-first-name"
                    type="text"
                    required
                    autoComplete="given-name"
                    value={formData.firstName}
                    onChange={(e) => updateField('firstName')(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-green-700 focus:ring-2 focus:ring-green-200 outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="holiday-email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="holiday-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => updateField('email')(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-green-700 focus:ring-2 focus:ring-green-200 outline-none transition"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="holiday-address" className="block text-sm font-semibold text-slate-700 mb-2">
                  Property Address <span className="text-red-600">*</span>
                </label>
                <input
                  id="holiday-address"
                  type="text"
                  required
                  autoComplete="street-address"
                  value={formData.address}
                  onChange={(e) => updateField('address')(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-green-700 focus:ring-2 focus:ring-green-200 outline-none transition"
                />
              </div>

              {error && (
                <p role="alert" className="mb-5 text-sm font-semibold text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white rounded-lg font-bold text-lg shadow-lg hover:bg-red-700 hover:shadow-xl transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Request My Holiday Quote'}
                {!isSubmitting && <ArrowRight size={20} />}
              </button>
              <p className="text-xs text-slate-500 text-center mt-4">
                Selected service: <span className="font-semibold text-slate-700">{formData.packageName || 'None (we will recommend one)'}</span>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
