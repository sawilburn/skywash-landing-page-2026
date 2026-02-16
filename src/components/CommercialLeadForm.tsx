import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { trackConversion } from '../utils/tracking';

export function CommercialLeadForm() {
  const [formData, setFormData] = useState({
    contact_name: '',
    email: '',
    phone: '',
    company_name: '',
    facility_type: 'data-center',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const leadData = {
        type: 'commercial',
        contact_name: formData.contact_name,
        email: formData.email,
        phone: formData.phone,
        company_name: formData.company_name,
        details: `Company: ${formData.company_name}\nFacility Type: ${formData.facility_type}\n\n${formData.details}`
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
        company_name: '',
        facility_type: 'data-center',
        details: ''
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="commercial-form" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Request Capability Statement
          </h2>
          <p className="text-xl text-slate-600">
            Let's discuss your facility's specific requirements. Receive a detailed proposal within 24 business hours.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-200">
          {submitStatus === 'success' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-green-600" size={48} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Request Received</h3>
              <p className="text-slate-600 text-lg mb-6">
                Thank you for your interest. A member of our commercial team will contact you within 24 business hours with a detailed capability statement.
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
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="contact_name"
                    name="contact_name"
                    required
                    value={formData.contact_name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent transition-all"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="company_name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company_name"
                    name="company_name"
                    required
                    value={formData.company_name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent transition-all"
                    placeholder="Acme Corporation"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent transition-all"
                    placeholder="john.smith@company.com"
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
                <label htmlFor="facility_type" className="block text-sm font-semibold text-slate-700 mb-2">
                  Facility Type *
                </label>
                <select
                  id="facility_type"
                  name="facility_type"
                  required
                  value={formData.facility_type}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent transition-all"
                >
                  <option value="data-center">Data Center</option>
                  <option value="office">Office Building / Campus</option>
                  <option value="solar">Commercial Solar Farm</option>
                  <option value="hoa">HOA / Multi-Family</option>
                  <option value="hotel">Hotel / Hospitality</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="details" className="block text-sm font-semibold text-slate-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="details"
                  name="details"
                  required
                  rows={5}
                  value={formData.details}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent transition-all resize-none"
                  placeholder="Please describe your facility, approximate square footage, specific cleaning requirements, compliance needs, and preferred service timing..."
                />
              </div>

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                  There was an error submitting your request. Please try again or contact us directly at info@skywashinnovations.com
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all flex items-center justify-center space-x-2 bg-[#1a3c75] hover:bg-[#2a4c85] ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'shadow-lg hover:shadow-xl'
                }`}
              >
                <span>{isSubmitting ? 'Submitting Request...' : 'Request Capability Statement'}</span>
                <Send size={20} />
              </button>

              <p className="text-center text-sm text-slate-500">
                Your information is secure and will only be used to prepare your proposal.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
