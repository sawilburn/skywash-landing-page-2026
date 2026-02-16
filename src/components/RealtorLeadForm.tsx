import { useState } from 'react';
import { Send, CheckCircle, Home, Camera, Search } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { trackConversion } from '../utils/tracking';

export function RealtorLeadForm() {
  const [formData, setFormData] = useState({
    contact_name: '',
    email: '',
    phone: '',
    brokerage: '',
    address: '',
    bundles: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const bundles = [
    { id: 'skywash', label: 'SkyWash (Drone Cleaning)', icon: Home },
    { id: 'skyshot', label: 'SkyShot (Aerial Photography)', icon: Camera },
    { id: 'skyscan', label: 'SkyScan (Drone Inspection)', icon: Search }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const leadData = {
        type: 'realtor',
        contact_name: formData.contact_name,
        email: formData.email,
        phone: formData.phone,
        details: `Brokerage: ${formData.brokerage}\nProperty Address: ${formData.address}\nBundles Requested: ${formData.bundles.join(', ')}`
      };

      const { error } = await supabase.from('leads').insert([leadData]);

      if (error) throw error;

      try {
        const emailUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-lead-email`;
        const emailResponse = await fetch(emailUrl, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(leadData),
        });

        const emailResult = await emailResponse.json();

        if (emailResult.success) {
          console.log('Email notification sent successfully:', emailResult);
        } else {
          console.warn('Email notification failed (lead saved to database):', emailResult);
        }
      } catch (emailError) {
        console.warn('Email notification unavailable (lead saved to database):', emailError);
      }

      try {
        const zohoUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/zoho-crm-sync`;
        const zohoResponse = await fetch(zohoUrl, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(leadData),
        });

        const zohoResult = await zohoResponse.json();

        if (zohoResult.success) {
          console.log('Zoho CRM sync successful:', zohoResult);
        } else {
          console.info('Zoho CRM sync not available in preview (will work in production)');
        }
      } catch (zohoError) {
        console.info('Zoho CRM sync not available in preview (will work in production)');
      }

      trackConversion();
      setSubmitStatus('success');
      setFormData({
        contact_name: '',
        email: '',
        phone: '',
        brokerage: '',
        address: '',
        bundles: []
      });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting lead:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBundleToggle = (bundleId: string) => {
    setFormData({
      ...formData,
      bundles: formData.bundles.includes(bundleId)
        ? formData.bundles.filter(s => s !== bundleId)
        : [...formData.bundles, bundleId]
    });
  };

  return (
    <section id="realtor-form" className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Get Your Realtor Bundle Quote
          </h2>
          <p className="text-xl text-slate-600">
            Exclusive pricing for real estate professionals. Fast turnaround to meet your listing deadlines.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-200">
          {submitStatus === 'success' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-green-600" size={48} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">We'll Send Your Quote Within 4 Hours!</h3>
              <p className="text-slate-600 text-lg mb-6">
                Thank you for choosing Skywash Innovations. Our realtor team will prioritize your request and send you a detailed quote quickly.
              </p>
              <button
                onClick={() => setSubmitStatus('idle')}
                className="text-[#1a3c75] font-semibold hover:underline"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact_name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="contact_name"
                    name="contact_name"
                    required
                    value={formData.contact_name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent transition-all"
                    placeholder="Jane Realtor"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent transition-all"
                  placeholder="jane@realestate.com"
                />
              </div>

              <div>
                <label htmlFor="brokerage" className="block text-sm font-semibold text-slate-700 mb-2">
                  Brokerage Name *
                </label>
                <input
                  type="text"
                  id="brokerage"
                  name="brokerage"
                  required
                  value={formData.brokerage}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent transition-all"
                  placeholder="Your Brokerage Name"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-semibold text-slate-700 mb-2">
                  Property Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent transition-all"
                  placeholder="123 Main Street, Purcellville, VA 20132"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-4">
                  Bundles Needed * (Select all that apply)
                </label>
                <div className="grid md:grid-cols-3 gap-4">
                  {bundles.map((bundle) => (
                    <button
                      key={bundle.id}
                      type="button"
                      onClick={() => handleBundleToggle(bundle.id)}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        formData.bundles.includes(bundle.id)
                          ? 'border-[#1a3c75] bg-blue-50'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex flex-col items-center text-center space-y-3">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          formData.bundles.includes(bundle.id)
                            ? 'bg-[#1a3c75]'
                            : 'bg-slate-100'
                        }`}>
                          <bundle.icon
                            className={formData.bundles.includes(bundle.id) ? 'text-white' : 'text-slate-600'}
                            size={24}
                          />
                        </div>
                        <span className={`font-medium text-sm ${
                          formData.bundles.includes(bundle.id) ? 'text-[#1a3c75]' : 'text-slate-700'
                        }`}>
                          {bundle.label}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                  There was an error submitting your request. Please try again or call us directly at (703) 755-0865.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || formData.bundles.length === 0}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all flex items-center justify-center space-x-2 bg-[#1a3c75] hover:bg-[#2a4c85] ${
                  isSubmitting || formData.bundles.length === 0 ? 'opacity-50 cursor-not-allowed' : 'shadow-lg hover:shadow-xl'
                }`}
              >
                <span>{isSubmitting ? 'Submitting...' : 'Get My Realtor Bundle Quote'}</span>
                <Send size={20} />
              </button>

              <p className="text-center text-sm text-slate-500">
                Priority response for real estate professionals. We typically respond within 4 hours during business days.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
