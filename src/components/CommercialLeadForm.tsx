import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitLead, HOW_FOUND_OPTIONS } from '../lib/supabase';

export function CommercialLeadForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', message: '', howFound: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await submitLead({
        type: 'commercial',
        contact_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company_name: formData.company,
        details: formData.message || 'Commercial quote request',
        how_found: formData.howFound,
      });
      navigate('/thank-you');
    } catch {
      setError('Something went wrong. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="commercial-form" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Request Capability Statement</h2>
          <p className="text-xl text-slate-600">Let's discuss your facility's specific requirements. Receive a detailed proposal within 24 business hours.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="com-name" className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                <input
                  id="com-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Smith"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="com-company" className="block text-sm font-semibold text-slate-700 mb-2">Company Name *</label>
                <input
                  id="com-company"
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Acme Corp"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="com-email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                <input
                  id="com-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@acmecorp.com"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="com-phone" className="block text-sm font-semibold text-slate-700 mb-2">Phone Number *</label>
                <input
                  id="com-phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(703) 555-0100"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="com-how-found" className="block text-sm font-semibold text-slate-700 mb-2">How did you find us? *</label>
              <select
                id="com-how-found"
                required
                value={formData.howFound}
                onChange={(e) => setFormData({ ...formData, howFound: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent outline-none transition-all bg-white"
              >
                <option value="" disabled>Select an option</option>
                {HOW_FOUND_OPTIONS.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="com-message" className="block text-sm font-semibold text-slate-700 mb-2">Tell us about your facility</label>
              <textarea
                id="com-message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe the property, services needed, square footage..."
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
              {isSubmitting ? 'Sending...' : 'Request Capability Statement'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
