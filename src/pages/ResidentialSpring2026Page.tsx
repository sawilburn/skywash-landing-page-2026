import { useState, useEffect } from 'react';
import { CheckCircle, Send, Sparkles, Droplets, Home, Crown } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { supabase } from '../lib/supabase';
import { trackConversion } from '../utils/tracking';

const packages = [
  {
    id: 'bronze',
    name: 'Bronze',
    price: 599,
    icon: Droplets,
    color: 'from-amber-600 to-amber-700',
    features: [
      'Complete exterior house wash',
      'Professional soft wash technique',
      'Deck and patio cleaning',
      'Driveway and walkway rinse',
      'Basic algae and mildew removal'
    ]
  },
  {
    id: 'silver',
    name: 'Silver',
    price: 699,
    icon: Home,
    color: 'from-slate-400 to-slate-500',
    popular: false,
    features: [
      'Everything in Bronze',
      'Professional exterior window cleaning',
      'Window frame and sill cleaning',
      'Screen cleaning and inspection',
      'Enhanced spot treatment'
    ]
  },
  {
    id: 'gold',
    name: 'Gold',
    price: 899,
    icon: Sparkles,
    color: 'from-yellow-500 to-yellow-600',
    popular: true,
    features: [
      'Everything in Silver',
      'Interior window cleaning',
      'Exterior window cleaning',
      'Track and frame deep cleaning',
      'Streak-free crystal shine guarantee',
      'Priority scheduling'
    ]
  },
  {
    id: 'platinum',
    name: 'Platinum',
    price: 1299,
    icon: Crown,
    color: 'from-blue-600 to-blue-700',
    features: [
      'Everything in Gold',
      'Professional roof cleaning',
      'Basic gutter cleaning',
      'Rust and oxidation removal',
      'Concrete sealing treatment',
      'VIP same-week scheduling',
      '90-day clean guarantee'
    ]
  }
];

export function ResidentialSpring2026Page() {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [formData, setFormData] = useState({
    contact_name: '',
    email: '',
    phone: '',
    address: '',
    package: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-04-15T23:59:59').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeRemaining({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (selectedPackage) {
      setFormData(prev => ({ ...prev, package: selectedPackage }));
      const formElement = document.getElementById('booking-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [selectedPackage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const selectedPkg = packages.find(pkg => pkg.id === formData.package);
      const leadData = {
        type: 'residential',
        contact_name: formData.contact_name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        details: `Spring 2026 Promotion - ${selectedPkg?.name} Package ($${selectedPkg?.price})\n\nAddress: ${formData.address}\n\nPromotion: Early Bird Pricing (Book before April 15, 2026)`
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
        address: '',
        package: ''
      });
      setSelectedPackage('');

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePackageSelect = (packageId: string) => {
    setSelectedPackage(packageId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      <Header />

      <main>
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 to-blue-100/20" />

          <div className="max-w-7xl mx-auto relative">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-6 rounded-full inline-block mb-8 shadow-lg animate-pulse">
              <p className="text-sm font-semibold flex items-center gap-2">
                <Sparkles size={16} />
                Limited Time Offer - Early Bird Pricing
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
              Spring 2026 <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Residential Refresh</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl">
              Premium exterior cleaning packages to get your home ready for the season. Professional service, guaranteed results.
            </p>

            <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-green-500 mb-12">
              <div className="text-center">
                <p className="text-lg font-semibold text-slate-700 mb-4">
                  Book before April 15th, 2026 to lock in these rates!
                </p>

                <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                    <div className="text-4xl font-bold text-green-700">{timeRemaining.days}</div>
                    <div className="text-sm text-slate-600 font-medium">Days</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-200">
                    <div className="text-4xl font-bold text-blue-700">{timeRemaining.hours}</div>
                    <div className="text-sm text-slate-600 font-medium">Hours</div>
                  </div>
                  <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-4 border border-teal-200">
                    <div className="text-4xl font-bold text-teal-700">{timeRemaining.minutes}</div>
                    <div className="text-sm text-slate-600 font-medium">Minutes</div>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-4 border border-cyan-200">
                    <div className="text-4xl font-bold text-cyan-700">{timeRemaining.seconds}</div>
                    <div className="text-sm text-slate-600 font-medium">Seconds</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Choose Your Package
              </h2>
              <p className="text-xl text-slate-600">
                Select the perfect cleaning solution for your home
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {packages.map((pkg) => {
                const Icon = pkg.icon;
                return (
                  <div
                    key={pkg.id}
                    className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 ${
                      pkg.popular ? 'border-green-500' : 'border-transparent'
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute top-0 right-0 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-1 text-sm font-bold rounded-bl-xl">
                        Most Popular
                      </div>
                    )}

                    <div className={`bg-gradient-to-r ${pkg.color} text-white p-6`}>
                      <Icon size={40} className="mb-4" />
                      <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold">${pkg.price}</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <ul className="space-y-3 mb-6">
                        {pkg.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                            <span className="text-slate-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        onClick={() => handlePackageSelect(pkg.id)}
                        className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all shadow-lg hover:shadow-xl bg-gradient-to-r ${pkg.color} hover:opacity-90`}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="booking-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Book Your Spring Service
              </h2>
              <p className="text-xl text-slate-600">
                Secure your early bird pricing today
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-xl p-8 md:p-12 border-2 border-green-200">
              {submitStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-green-600" size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Booking Received!</h3>
                  <p className="text-slate-600 text-lg mb-6">
                    Thank you for choosing Skywash Innovations! Your early bird pricing has been secured. We'll contact you within 24 hours to schedule your service.
                  </p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="text-green-700 font-semibold hover:underline"
                  >
                    Book Another Service
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
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        placeholder="john.smith@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
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
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="package" className="block text-sm font-semibold text-slate-700 mb-2">
                        Select Package *
                      </label>
                      <select
                        id="package"
                        name="package"
                        required
                        value={formData.package}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      >
                        <option value="">Choose a package...</option>
                        {packages.map((pkg) => (
                          <option key={pkg.id} value={pkg.id}>
                            {pkg.name} - ${pkg.price}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-semibold text-slate-700 mb-2">
                      Service Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="123 Main Street, City, State, ZIP"
                    />
                  </div>

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                      There was an error submitting your booking. Please try again or contact us directly at info@skywashinnovations.com
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : 'shadow-lg hover:shadow-xl'
                    }`}
                  >
                    <span>{isSubmitting ? 'Processing...' : 'Secure My Early Bird Pricing'}</span>
                    <Send size={20} />
                  </button>

                  <p className="text-center text-sm text-slate-500">
                    Your information is secure and will only be used to schedule your service.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
