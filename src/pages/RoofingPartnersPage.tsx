import { CheckCircle, Handshake, DollarSign, Camera, Search, Droplets, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export function RoofingPartnersPage() {
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
          message: `ROOFING PARTNER INQUIRY\n\nCompany: ${formData.companyName}\nLocation: ${formData.location}\nYears in Business: ${formData.yearsInBusiness}\n\n${formData.message}`,
          source: 'roofing-partners',
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
      description: 'Earn $100 for every completed service referred by your company. Simple, straightforward, and profitable.'
    },
    {
      icon: Camera,
      title: 'Free Roof Photography',
      description: 'Get professional drone photos of every roof you complete—perfect for showcasing your work to future clients.'
    },
    {
      icon: Search,
      title: 'Advanced Drone Inspections',
      description: 'Offer your clients comprehensive roof inspections using our specialized drones without the risk or cost.'
    },
    {
      icon: Droplets,
      title: 'Professional Roof Washing',
      description: 'Provide maintenance roof washing services to your clients through our partnership.'
    }
  ];

  const services = [
    {
      title: 'Roof Washing & Maintenance',
      description: 'Our specialized drones safely clean roofs without walking on them, extending roof life and maintaining appearance.',
      features: [
        'Soft wash cleaning solutions',
        'No foot traffic damage',
        'Algae and moss removal',
        'Preventative maintenance'
      ]
    },
    {
      title: 'Drone Roof Inspections',
      description: 'High-resolution drone inspections provide detailed views of roof conditions without safety risks or expensive equipment.',
      features: [
        ' 4K photo and video documentation',
        'Hard-to-reach area access',
        'Detailed condition reports',
        'Fast turnaround times'
      ]
    },
    {
      title: 'Showcase Photography',
      description: 'Help your clients see the quality of your roofing work with stunning aerial photography and documentation.',
      features: [
        'Before and after documentation',
        'Marketing-ready photos',
        'Multiple angle coverage',
        'Free for partner referrals'
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
      description: 'Share your referral code with clients who need roof washing, inspections, or showcase photography.'
    },
    {
      step: 3,
      title: 'We Deliver Excellence',
      description: 'We provide professional service to your clients with our specialized drone technology.'
    },
    {
      step: 4,
      title: 'Earn Your Commission',
      description: 'Receive $100 for every completed service, plus free photos of all your roofing projects.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Handshake className="w-12 h-12" />
              <span className="text-3xl font-bold">Partner Program</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Roofing Experts Partnership
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Join forces with Skywash Innovations to expand your service offerings, earn referral income, and get free professional photography for every roof you complete.
            </p>
            <div className="flex flex-wrap gap-6 justify-center text-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span>$100 Per Referral</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span>Free Roof Photos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-400" />
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
            Grow your business and delight your customers with our innovative partnership program
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-100"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-8 h-8 text-blue-600" />
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
                <h3 className="text-xl font-semibold text-blue-300 mb-3">For Your Business</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Additional revenue stream with zero overhead</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Expand your service offerings without new equipment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Professional marketing materials for your completed projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Strengthen customer relationships with value-added services</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-3">For Your Clients</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Access to cutting-edge drone technology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Safe, non-invasive roof maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Comprehensive documentation and inspection services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>One trusted network for all their roofing needs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Services We Provide for Your Clients
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive drone-powered solutions for roofing professionals
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
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
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
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
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
                    <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-12 mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
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
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your Roofing Company"
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
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@roofingcompany.com"
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
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What types of roofing projects do you specialize in? How many roofs do you complete per year?"
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
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-slate-400 text-lg"
              >
                {isSubmitting ? 'Submitting...' : 'Apply for Partnership'}
              </button>
            </form>
          </div>
        </div>

        <div className="bg-slate-800 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About Our Partnership Program?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            We're here to help you understand how partnering with Skywash Innovations can benefit your roofing business.
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
