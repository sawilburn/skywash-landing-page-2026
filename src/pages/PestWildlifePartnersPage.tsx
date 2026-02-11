import { CheckCircle, Handshake, DollarSign, Camera, Search, Droplets, Award, Users, Bug, Bird } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export function PestWildlifePartnersPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    location: '',
    yearsInBusiness: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('leads')
        .insert([{
          name: formData.contactName,
          email: formData.email,
          phone: formData.phone,
          message: `PEST & WILDLIFE PARTNER INQUIRY\n\nCompany: ${formData.companyName}\nLocation: ${formData.location}\nYears in Business: ${formData.yearsInBusiness}\n\n${formData.message}`,
          source: 'pest-wildlife-partners',
          lead_type: 'partner'
        }]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        location: '',
        yearsInBusiness: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: DollarSign,
      title: '$100 Per Referral',
      description: 'Earn $100 for every completed service referred by your company. Additional income with no extra work.'
    },
    {
      icon: Camera,
      title: 'Free Documentation',
      description: 'Get professional drone photos and videos of every project you complete—perfect for showing clients results.'
    },
    {
      icon: Search,
      title: 'Advanced Drone Inspections',
      description: 'Offer comprehensive aerial inspections to locate entry points, nests, and damage without dangerous ladder work.'
    },
    {
      icon: Droplets,
      title: 'Preventative Cleaning',
      description: 'Help clients maintain clean roofs and exteriors to discourage pest and wildlife infestation.'
    }
  ];

  const services = [
    {
      title: 'Aerial Entry Point Detection',
      description: 'Our drones can safely inspect roofs, chimneys, vents, and other high areas to identify wildlife entry points and damage.',
      features: [
        'Roof and chimney inspections',
        'Vent and soffit examination',
        'Gutter and fascia assessment',
        'Detailed photo documentation'
      ]
    },
    {
      title: 'Damage Documentation',
      description: 'Comprehensive photo and video documentation of pest or wildlife damage for insurance claims and client records.',
      features: [
        'Before and after evidence',
        'High-resolution imagery',
        'Video documentation',
        'Insurance-ready reports'
      ]
    },
    {
      title: 'Large Property Surveillance',
      description: 'Efficiently survey large commercial properties, farms, or estates for pest nests, wildlife activity, and problem areas.',
      features: [
        'Wide-area coverage',
        'Thermal imaging options',
        'Multiple angle views',
        'Fast comprehensive assessments'
      ]
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Partner With Us',
      description: 'Complete the partnership form below and receive your unique referral code.'
    },
    {
      step: 2,
      title: 'Refer Your Clients',
      description: 'Share your referral code with clients who need aerial inspections, documentation, or preventative cleaning.'
    },
    {
      step: 3,
      title: 'We Deliver Excellence',
      description: 'We provide professional drone services to document your work and assist with inspections.'
    },
    {
      step: 4,
      title: 'Earn Your Commission',
      description: 'Receive $100 for every completed service, plus free documentation of all your pest and wildlife projects.'
    }
  ];

  const useCases = [
    {
      icon: Bird,
      title: 'Wildlife Removal',
      description: 'Document wildlife entry points, nesting areas, and exclusion work from safe distances.'
    },
    {
      icon: Bug,
      title: 'Pest Inspections',
      description: 'Identify exterior pest activity, wasp nests, and structural damage without risky ladder climbs.'
    },
    {
      icon: Search,
      title: 'Follow-Up Verification',
      description: 'Verify repairs and exclusion work with detailed before-and-after aerial documentation.'
    },
    {
      icon: Camera,
      title: 'Client Evidence',
      description: 'Provide clients with clear visual proof of problems found and work completed.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="bg-gradient-to-br from-emerald-600 via-green-700 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Handshake className="w-12 h-12" />
              <span className="text-3xl font-bold">Partner Program</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Pest & Wildlife Control Partnership
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Partner with Skywash Innovations to expand your inspection capabilities, earn referral income, and get free professional documentation for every project you complete.
            </p>
            <div className="flex flex-wrap gap-6 justify-center text-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-300" />
                <span>$100 Per Referral</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-300" />
                <span>Free Documentation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-300" />
                <span>Exclusive Partner Rates</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Partnership Benefits
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Enhance your services and grow your revenue with our innovative partnership program
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-100"
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-slate-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-12 mb-20 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-10 h-10 text-yellow-400" />
              <h2 className="text-3xl font-bold">Why Partner With Skywash Innovations?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-emerald-300 mb-3">For Your Business</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Additional revenue stream with zero overhead</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Eliminate dangerous roof and ladder work for inspections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Professional documentation for every project</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Expand capabilities without buying expensive equipment</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-emerald-300 mb-3">For Your Clients</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Comprehensive visual documentation of problems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Faster, safer inspections of hard-to-reach areas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Clear before-and-after proof of work completed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>One trusted network for all their property needs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Common Use Cases for Our Partnership
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              How pest and wildlife control professionals use our drone services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-slate-100"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {useCase.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Services We Provide for Your Clients
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive drone-powered solutions for pest and wildlife professionals
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border border-slate-100"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              How The Partnership Works
            </h2>
            <p className="text-xl text-slate-600">
              Simple, transparent, and mutually beneficial
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 h-full">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">
                    {item.description}
                  </p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 bg-emerald-200 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-slate-50 rounded-2xl p-12 mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Users className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Become a Partner Today
              </h2>
              <p className="text-lg text-slate-600">
                Fill out the form below to get started. We'll provide you with your unique referral code and partner materials.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Your Pest Control Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="john@pestcontrol.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Service Location *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Leesburg, VA"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Years in Business
                  </label>
                  <input
                    type="text"
                    value={formData.yearsInBusiness}
                    onChange={(e) => setFormData({ ...formData, yearsInBusiness: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="10+"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Tell Us About Your Business
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="What types of pest and wildlife services do you specialize in? How many projects do you complete per year?"
                />
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  Thank you for your interest! We'll contact you within 24 hours to set up your partner account.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                  There was an error submitting your application. Please try again or contact us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 text-white py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors disabled:bg-slate-400 text-lg"
              >
                {isSubmitting ? 'Submitting...' : 'Apply for Partnership'}
              </button>
            </form>
          </div>
        </div>

        <div className="bg-slate-800 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About Our Partnership Program?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            We're here to help you understand how partnering with Skywash Innovations can benefit your pest and wildlife control business.
          </p>
          <Link
            to="/commercial"
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
