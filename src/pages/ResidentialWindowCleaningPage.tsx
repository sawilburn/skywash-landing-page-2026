import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Shield,
  CheckCircle2,
  Sparkles,
  Droplets,
  Eye,
  Home,
  Sun,
  Zap,
  Award,
  BadgeCheck,
  Wrench,
  MapPin,
  ClipboardList,
  CalendarCheck,
  SprayCan,
  ClipboardCheck,
  ArrowRight,
  Link as LinkIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { submitLead } from '../lib/supabase';
import { DynamicSectionImage } from '../components/DynamicSectionImage';

const SERVICE_OPTIONS = [
  'Window Cleaning (Interior & Exterior)',
  'Exterior Siding Cleaning (Soft Washing)',
  'Roof Cleaning',
  'Playground / Recreational Equipment Cleaning',
  'Solar Panel Cleaning',
  'Pressure Washing',
  'Complete Residential Package',
];

export function ResidentialWindowCleaningPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    cityZip: '',
    service: SERVICE_OPTIONS[0],
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const scrollToForm = () => {
    const element = document.getElementById('residential-form');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const details = [
      formData.address ? `Address: ${formData.address}` : '',
      formData.cityZip ? `City/Zip: ${formData.cityZip}` : '',
      formData.service ? `Service Interested In: ${formData.service}` : '',
      formData.message || '',
    ]
      .filter(Boolean)
      .join('\n\n') || 'Residential window cleaning quote request';

    try {
      await submitLead({
        type: 'residential',
        contact_name: formData.name,
        email: formData.email,
        phone: formData.phone,
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
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-block px-4 py-2 bg-[#1a3c75]/10 rounded-full text-[#1a3c75] text-sm font-semibold mb-6">
                Residential Window Cleaning
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Professional Residential
                <br />
                <span className="text-[#1a3c75]">Window Cleaning</span>
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Crystal-clear interior and exterior window cleaning by trained, certified,
                background-checked technicians. Streak-free results, every time.
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
                  <Award className="text-blue-600 flex-shrink-0" size={18} />
                  <span>Trained & Certified</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-slate-200 shadow-sm">
                  <BadgeCheck className="text-cyan-600 flex-shrink-0" size={18} />
                  <span>Background Checked</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-slate-200 shadow-sm">
                  <Wrench className="text-blue-600 flex-shrink-0" size={18} />
                  <span>Pro-Grade Tools</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-slate-200 shadow-sm">
                  <Shield className="text-green-600 flex-shrink-0" size={18} />
                  <span>Fully Insured</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-200 rounded-2xl shadow-2xl overflow-hidden min-h-[400px] flex items-center justify-center animate-fade-in-scale">
              <DynamicSectionImage
                section="residential-window-hero"
                alt="Crystal-clear residential windows after professional cleaning"
                className="w-full h-full object-cover"
                fallback="Sparkling Clean Windows"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Credentials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Why Homeowners Trust Our Team
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We hold ourselves to the highest professional standards so you can feel
              completely comfortable having us in and around your home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Award className="text-[#1a3c75]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Professionally Trained & Certified</h3>
              <p className="text-slate-600">
                Our technicians complete a rigorous training and certification program before
                ever stepping foot in your home.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                <BadgeCheck className="text-cyan-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Third-Party Background Checked</h3>
              <p className="text-slate-600">
                Every technician is background-checked through a third-party service — safe to
                have in and around your home.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Wrench className="text-[#1a3c75]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Professional-Grade Equipment</h3>
              <p className="text-slate-600">
                Water-fed poles, purified water systems, squeegee and detail work — the right
                tools for a flawless finish.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border-2 border-green-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fully Insured</h3>
              <p className="text-slate-600">
                Comprehensive liability coverage for your complete peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Window focus */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Full-Service Window & Glass Cleaning
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We don't just spray and wipe. Every part of your windows gets professional attention
              for a truly crystal-clear result.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Eye className="text-[#1a3c75]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Interior & Exterior Glass</h3>
              <p className="text-slate-600 mb-4">
                Both sides of every pane, cleaned with purified water and professional squeegee
                technique for a streak-free finish.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={14} />
                  Streak-free results
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={14} />
                  All window types & heights
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="text-cyan-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Screens</h3>
              <p className="text-slate-600 mb-4">
                Screens removed, brushed clean, and rinsed so the air and the view stay clear.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={14} />
                  Carefully removed & reinstalled
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={14} />
                  Dust & pollen removed
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Droplets className="text-[#1a3c75]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Tracks & Sills</h3>
              <p className="text-slate-600 mb-4">
                Window tracks and sills vacuumed, brushed, and wiped — the details most companies
                skip.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={14} />
                  Debris & dust removed
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={14} />
                  Wiped clean & dry
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Residential Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Complete Residential Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're a full-service residential exterior cleaning provider. Bundle window cleaning
              with any of these services and save.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/residential/house-washing" className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Home className="text-[#1a3c75]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#1a3c75] transition-colors">Exterior Siding Cleaning (Soft Washing)</h3>
              <p className="text-slate-600 mb-4">
                Safe low-pressure soft washing for vinyl, Hardie plank, brick, and stucco. Removes
                algae, mold, and dirt without damage.
              </p>
              <div className="flex items-center text-[#1a3c75] font-semibold text-sm group-hover:underline">
                <span>Learn More</span>
                <ArrowRight className="ml-2" size={16} />
              </div>
            </Link>

            <Link to="/residential/roof-washing" className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Home className="text-[#1a3c75]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#1a3c75] transition-colors">Roof Cleaning</h3>
              <p className="text-slate-600 mb-4">
                Warranty-safe soft wash that eliminates Gloeocapsa magma and extends roof life by up
                to 10 years.
              </p>
              <div className="flex items-center text-[#1a3c75] font-semibold text-sm group-hover:underline">
                <span>Learn More</span>
                <ArrowRight className="ml-2" size={16} />
              </div>
            </Link>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Playground & Recreational Equipment</h3>
              <p className="text-slate-600 mb-4">
                Safe cleaning for swing sets, playsets, and outdoor recreational equipment. Removes
                mold, mildew, and grime.
              </p>
            </div>

            <Link to="/residential/solar-washing" className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <Sun className="text-amber-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">Solar Panel Cleaning</h3>
              <p className="text-slate-600 mb-4">
                Restore up to 25% energy efficiency with panel-safe cleaning that protects your
                investment.
              </p>
              <div className="flex items-center text-amber-600 font-semibold text-sm group-hover:underline">
                <span>Learn More</span>
                <ArrowRight className="ml-2" size={16} />
              </div>
            </Link>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="text-[#1a3c75]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Pressure Washing</h3>
              <p className="text-slate-600 mb-4">
                Driveways, patios, walkways, and hardscapes. Remove oil stains, dirt, and weathering
                for a like-new finish.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a3c75] to-slate-800 rounded-2xl p-8 text-white shadow-2xl flex flex-col justify-center">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <LinkIcon className="text-cyan-300" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Bundle & Save</h3>
              <p className="text-slate-300 mb-4">
                Combine window cleaning with any service above and save up to 25%. One visit, one
                quote, your whole home refreshed.
              </p>
              <button
                onClick={scrollToForm}
                className="self-start px-6 py-3 bg-white text-[#1a3c75] rounded-lg font-bold hover:bg-blue-50 transition-all shadow-lg"
              >
                Get Package Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Us for Window Cleaning
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              The details that make the difference between a quick wipe and a truly clean window.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-white">
              <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                <Eye className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Interior AND Exterior Service</h3>
              <p className="text-slate-300">
                Many companies only clean the exterior. We do both — inside and out — so every pane
                is truly clear.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-white">
              <div className="w-14 h-14 bg-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <Droplets className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Streak-Free Results</h3>
              <p className="text-slate-300">
                Purified water and professional squeegee technique mean no spots, no streaks, no
                residue — just clear glass.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-white">
              <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Respectful of Your Home</h3>
              <p className="text-slate-300">
                Shoe covers, drop cloths, and careful work around your landscaping and furnishings.
                We treat your home like ours.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-white">
              <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Locally Owned & Operated</h3>
              <p className="text-slate-300">
                Proudly based in Northern Virginia and serving Loudoun County. We're your
                neighbors, not a franchise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Simple Process
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From first request to final walkthrough — straightforward and stress-free.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1a3c75] rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                1
              </div>
              <div className="flex justify-center mb-3">
                <ClipboardList className="text-[#1a3c75]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Request a Quote</h3>
              <p className="text-slate-600">
                Fill out the form below. Tell us about your home and the services you need.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#1a3c75] rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                2
              </div>
              <div className="flex justify-center mb-3">
                <CalendarCheck className="text-[#1a3c75]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Schedule Your Visit</h3>
              <p className="text-slate-600">
                We'll confirm a convenient time that works around your schedule.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#1a3c75] rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                3
              </div>
              <div className="flex justify-center mb-3">
                <SprayCan className="text-[#1a3c75]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Professional Cleaning</h3>
              <p className="text-slate-600">
                Our certified, background-checked technicians get to work — inside and out.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                4
              </div>
              <div className="flex justify-center mb-3">
                <ClipboardCheck className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Walkthrough & Satisfaction Check</h3>
              <p className="text-slate-600">
                We walk through the results with you. You're not happy until it's perfect.
              </p>
            </div>
          </div>

          <div className="mt-14 text-center">
            <button
              onClick={scrollToForm}
              className="px-8 py-4 bg-[#1a3c75] text-white rounded-lg font-bold text-lg hover:bg-[#2a4c85] transition-all shadow-lg"
            >
              Request My Free Quote
            </button>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="residential-form" className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get Your Free Quote</h2>
            <p className="text-xl text-slate-600">No obligation. Response within 24 hours. Let's make your windows shine.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="rwc-name" className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                  <input
                    id="rwc-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Smith"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="rwc-phone" className="block text-sm font-semibold text-slate-700 mb-2">Phone Number *</label>
                  <input
                    id="rwc-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(703) 555-0100"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="rwc-email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                  <input
                    id="rwc-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="rwc-address" className="block text-sm font-semibold text-slate-700 mb-2">Street Address</label>
                  <input
                    id="rwc-address"
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="123 Main St"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="rwc-cityzip" className="block text-sm font-semibold text-slate-700 mb-2">City / Zip</label>
                  <input
                    id="rwc-cityzip"
                    type="text"
                    value={formData.cityZip}
                    onChange={(e) => setFormData({ ...formData, cityZip: e.target.value })}
                    placeholder="Leesburg, VA 20175"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="rwc-service" className="block text-sm font-semibold text-slate-700 mb-2">Service Interested In *</label>
                  <select
                    id="rwc-service"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent outline-none transition-all bg-white"
                  >
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="rwc-message" className="block text-sm font-semibold text-slate-700 mb-2">Message / Details</label>
                <textarea
                  id="rwc-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Number of windows, any hard-to-reach panes, preferred dates..."
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

              {error && (
                <p className="text-red-600 text-sm bg-red-50 border border-red-200 px-4 py-3 rounded-lg">{error}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1a3c75] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#15305f] transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Request My Free Quote'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
