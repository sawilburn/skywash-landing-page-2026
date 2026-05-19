import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export function RealtorLeadForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', address: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error: dbError } = await supabase.from('leads').insert([{
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: `Property Address: ${formData.address}\n\n${formData.message}`,
        source: 'Realtor Page',
        lead_type: 'realtor',
      }]);

      if (dbError) throw dbError;
      navigate('/thank-you');
    } catch {
      setError('Something went wrong. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="realtor-form" className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get More Information</h2>
          <p className="text-xl text-slate-600">Talk with one of our team members about the right package for your property</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="rt-name" className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                <input
                  id="rt-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jane Smith"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="rt-phone" className="block text-sm font-semibold text-slate-700 mb-2">Phone Number *</label>
                <input
                  id="rt-phone"
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
                <label htmlFor="rt-email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                <input
                  id="rt-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@realty.com"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="rt-address" className="block text-sm font-semibold text-slate-700 mb-2">Property Address</label>
                <input
                  id="rt-address"
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="123 Main St, Purcellville, VA"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="rt-message" className="block text-sm font-semibold text-slate-700 mb-2">Additional details</label>
              <textarea
                id="rt-message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Services needed, timeline, any special requirements..."
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
              {isSubmitting ? 'Sending...' : 'Get More Information'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
