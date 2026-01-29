import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

type LeadType = 'commercial' | 'residential';

export function ContactForm() {
  const [selectedType, setSelectedType] = useState<LeadType>('commercial');
  const [formData, setFormData] = useState({
    contact_name: '',
    email: '',
    phone: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase.from('leads').insert([
        {
          type: selectedType,
          ...formData
        }
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        contact_name: '',
        email: '',
        phone: '',
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-slate-300">
            Tell us about your project and we'll provide a detailed estimate within 24 hours
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="flex space-x-4 mb-8">
            <button
              type="button"
              onClick={() => setSelectedType('commercial')}
              className={`flex-1 py-4 px-6 rounded-lg font-semibold transition-all ${
                selectedType === 'commercial'
                  ? 'bg-[#1a3c75] text-white shadow-lg'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Commercial
            </button>
            <button
              type="button"
              onClick={() => setSelectedType('residential')}
              className={`flex-1 py-4 px-6 rounded-lg font-semibold transition-all ${
                selectedType === 'residential'
                  ? 'bg-cyan-600 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Residential
            </button>
          </div>

          {submitStatus === 'success' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-green-600" size={48} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Thank You!</h3>
              <p className="text-slate-600 text-lg mb-6">
                We've received your inquiry and will contact you within 24 hours.
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

              <div className="grid md:grid-cols-2 gap-6">
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
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>
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
                  placeholder={
                    selectedType === 'commercial'
                      ? 'Tell us about your facility, square footage, specific concerns, and preferred timing...'
                      : 'Describe your home, surfaces to be cleaned, and any specific concerns...'
                  }
                />
              </div>

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                  There was an error submitting your request. Please try again or contact us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all flex items-center justify-center space-x-2 ${
                  selectedType === 'commercial'
                    ? 'bg-[#1a3c75] hover:bg-[#2a4c85]'
                    : 'bg-cyan-600 hover:bg-cyan-700'
                } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'shadow-lg hover:shadow-xl'}`}
              >
                <span>{isSubmitting ? 'Submitting...' : 'Get Free Quote'}</span>
                <Send size={20} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
