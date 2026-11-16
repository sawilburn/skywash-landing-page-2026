import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sun, Sparkles, ShieldCheck, Zap, Award, ArrowRight } from 'lucide-react';
import { submitLead } from '../lib/supabase';

const SERVICE_OPTIONS = ['Solar Panel Cleaning'] as const;

const BENEFITS = [
  {
    icon: Zap,
    title: 'Restore energy output',
    text: 'Dust, pollen, and grime sitting on the glass can reduce how much power your panels produce.',
  },
  {
    icon: Sun,
    title: 'Make the most of winter sun',
    text: 'Clean panels catch more of the lower-angle winter light, so your system works harder when days are shorter.',
  },
  {
    icon: Sparkles,
    title: 'Panel-safe, spot-free cleaning',
    text: 'Gentle, controlled methods clean the glass thoroughly without scratching the surface or leaving residue.',
  },
  {
    icon: ShieldCheck,
    title: 'Protect your investment',
    text: 'Regular professional cleaning helps your panels perform the way they were designed to for years to come.',
  },
  {
    icon: Award,
    title: 'Trained, insured, background-checked',
    text: 'Every technician is certified and background-checked, so you can feel confident having us on your property.',
  },
];

const INITIAL_FORM = {
  firstName: '',
  email: '',
  address: '',
  service: SERVICE_OPTIONS[0],
};

export function HolidaySolarCleaningCampaignPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const scrollToForm = () => {
    document.getElementById('holiday-solar-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const updateField = (field: keyof typeof INITIAL_FORM) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const details = [
      'Campaign: Holiday Solar Cleaning',
      `Service Interested In: ${formData.service}`,
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
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-semibold text-red-100 mb-6">
              <Sparkles size={16} className="text-yellow-300" />
              Holiday Solar Cleaning Season
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Brighter Panels for a <span className="text-yellow-200">Brighter Season</span>
            </h1>

            <p className="text-xl text-green-50 leading-relaxed mb-8 max-w-2xl">
              Clean solar panels produce more energy. Get your panels professionally cleaned before
              the winter months, so your system is ready to work at its best.
            </p>

            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white rounded-lg font-bold text-lg shadow-lg hover:bg-red-700 hover:shadow-xl transition-all"
            >
              Request Your Solar Cleaning Quote
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
              Why Professional Solar Panel Cleaning Matters
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Solar panels work hardest when they are clean. A professional visit protects your output
              and keeps your investment performing the way it should.
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

      {/* Form */}
      <section id="holiday-solar-form" className="py-20 bg-green-950 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Request Your Solar Cleaning Quote</h2>
            <p className="text-xl text-green-50 leading-relaxed">
              Tell us where your panels are and we will reach out to schedule your cleaning.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white text-slate-900 rounded-2xl p-8 md:p-10 shadow-2xl">
            <h3 className="text-2xl font-bold text-green-950 mb-2">Your Details</h3>
            <p className="text-slate-600 mb-8">We will reach out to confirm your appointment.</p>

            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="holiday-solar-first-name" className="block text-sm font-semibold text-slate-700 mb-2">
                  First Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="holiday-solar-first-name"
                  type="text"
                  required
                  autoComplete="given-name"
                  value={formData.firstName}
                  onChange={(e) => updateField('firstName')(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-green-700 focus:ring-2 focus:ring-green-200 outline-none transition"
                />
              </div>
              <div>
                <label htmlFor="holiday-solar-email" className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  id="holiday-solar-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => updateField('email')(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-green-700 focus:ring-2 focus:ring-green-200 outline-none transition"
                />
              </div>
            </div>

            <div className="mb-5">
              <label htmlFor="holiday-solar-address" className="block text-sm font-semibold text-slate-700 mb-2">
                Property Address <span className="text-red-600">*</span>
              </label>
              <input
                id="holiday-solar-address"
                type="text"
                required
                autoComplete="street-address"
                value={formData.address}
                onChange={(e) => updateField('address')(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-green-700 focus:ring-2 focus:ring-green-200 outline-none transition"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="holiday-solar-service" className="block text-sm font-semibold text-slate-700 mb-2">
                Service Required
              </label>
              <select
                id="holiday-solar-service"
                value={formData.service}
                onChange={(e) => updateField('service')(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-stone-300 bg-white focus:border-green-700 focus:ring-2 focus:ring-green-200 outline-none transition"
              >
                {SERVICE_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
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
              {isSubmitting ? 'Sending...' : 'Request My Solar Cleaning Quote'}
              {!isSubmitting && <ArrowRight size={20} />}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
