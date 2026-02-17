import { useState, useEffect } from 'react';
import { CheckCircle, Send, Sparkles, Droplets, Home, Crown, Shield, Award, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { DynamicBeforeAfterSlider } from '../components/DynamicBeforeAfterSlider';
import { DynamicSectionImage } from '../components/DynamicSectionImage';
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
      'VIP same-week scheduling'
    ]
  }
];

export function ResidentialSpring2026Page() {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [droneInspection, setDroneInspection] = useState(false);
  const [formData, setFormData] = useState({
    contact_name: '',
    email: '',
    phone: '',
    address: '',
    package: '',
    drone_inspection: false
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
      const droneAddon = formData.drone_inspection ? '\nAdd-on: Full Home Drone Inspection & Report (+$99.00)' : '';
      const totalPrice = selectedPkg ? selectedPkg.price + (formData.drone_inspection ? 99 : 0) : 0;

      const leadData = {
        type: 'residential',
        contact_name: formData.contact_name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        details: `Spring 2026 Promotion - ${selectedPkg?.name} Package ($${selectedPkg?.price})${droneAddon}\nTotal Price: $${totalPrice}\n\nAddress: ${formData.address}\n\nPromotion: Early Bird Pricing (Book before April 15, 2026)`
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
        package: '',
        drone_inspection: false
      });
      setSelectedPackage('');
      setDroneInspection(false);

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

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1a3c75] via-[#2a4c85] to-[#3a5c95] text-white overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://lvsyooxctvdydwbnwvou.supabase.co/storage/v1/object/public/Videos/realtor_drone_footage.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-6 rounded-full inline-flex items-center gap-2 mb-8 shadow-lg">
                <Sparkles size={20} />
                <span className="text-sm font-bold">Limited Time Offer - Early Bird Pricing</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Spring 2026 Residential Refresh
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
                Premium exterior cleaning packages to get your home ready for the season. Professional service, guaranteed results.
              </motion.p>

              <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 border-green-400 mb-8">
                <p className="text-lg md:text-xl font-semibold mb-6">
                  Book before April 15th, 2026 to lock in these rates!
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                    <div className="text-4xl font-bold text-white">{timeRemaining.days}</div>
                    <div className="text-sm text-white/80 font-medium">Days</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                    <div className="text-4xl font-bold text-white">{timeRemaining.hours}</div>
                    <div className="text-sm text-white/80 font-medium">Hours</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                    <div className="text-4xl font-bold text-white">{timeRemaining.minutes}</div>
                    <div className="text-sm text-white/80 font-medium">Minutes</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                    <div className="text-4xl font-bold text-white">{timeRemaining.seconds}</div>
                    <div className="text-sm text-white/80 font-medium">Seconds</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              <motion.div variants={fadeInUp} className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Fully Insured</h3>
                <p className="text-slate-600">Complete protection for your peace of mind</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">OSHA Certified</h3>
                <p className="text-slate-600">Safety-first operations on every property</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-slate-700" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Same Week Service</h3>
                <p className="text-slate-600">Book your spring cleaning before slots fill up</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                See the Transformation
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Drag the slider to see real results from our soft wash cleaning process
              </p>
            </motion.div>

            <DynamicBeforeAfterSlider
              serviceType="residential"
              fallbackBefore="roof-dirty.jpg"
              fallbackAfter="roof-clean.jpg"
            />
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Choose Your Package
              </h2>
              <p className="text-xl text-slate-600">
                Select the perfect cleaning solution for your home
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {packages.map((pkg) => {
                const Icon = pkg.icon;
                return (
                  <motion.div
                    key={pkg.id}
                    variants={fadeInUp}
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
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-br from-slate-900 to-[#1a3c75] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Why Choose Our Spring Package?
                </h2>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Spring is the perfect time to remove winter buildup and prepare your home for the warmer months. Our specialized packages are designed to tackle seasonal challenges while protecting your investment.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-3 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Remove Winter Damage</h4>
                      <p className="text-white/80">Eliminate mold, mildew, and algae that grew during cold months</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-3 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Boost Curb Appeal</h4>
                      <p className="text-white/80">Make your home shine for spring gatherings and outdoor living</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-3 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Extend Roof Life</h4>
                      <p className="text-white/80">Prevent damage that could cost thousands in repairs</p>
                    </div>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-slate-200 rounded-2xl shadow-2xl overflow-hidden min-h-[400px] flex items-center justify-center"
              >
                <DynamicSectionImage
                  section="residential-hero"
                  alt="Beautiful spring home exterior"
                  className="w-full h-full object-cover"
                  fallback="Spring Home Cleaning"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="booking-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Book Your Spring Service
              </h2>
              <p className="text-xl text-slate-600">
                Secure your early bird pricing today
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-xl p-8 md:p-12 border-2 border-green-200"
            >
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

                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-6">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="drone_inspection"
                        name="drone_inspection"
                        checked={formData.drone_inspection}
                        onChange={(e) => {
                          setFormData({ ...formData, drone_inspection: e.target.checked });
                          setDroneInspection(e.target.checked);
                        }}
                        className="w-5 h-5 text-blue-600 border-slate-300 rounded focus:ring-2 focus:ring-blue-500 mt-1"
                      />
                      <div className="ml-4">
                        <label htmlFor="drone_inspection" className="block text-base font-bold text-slate-900 cursor-pointer">
                          Add Full Home Drone Inspection & Report
                        </label>
                        <p className="text-sm text-slate-600 mt-1">
                          Professional aerial inspection with detailed photo documentation and report of your home's exterior condition. Perfect for identifying issues before they become costly problems.
                        </p>
                        <p className="text-lg font-bold text-blue-700 mt-2">
                          +$99.00
                        </p>
                      </div>
                    </div>
                  </div>

                  {formData.package && (
                    <div className="bg-slate-100 border-2 border-slate-300 rounded-xl p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-slate-900">Estimated Total:</span>
                        <span className="text-2xl font-bold text-green-700">
                          ${packages.find(pkg => pkg.id === formData.package)?.price || 0}
                          {formData.drone_inspection && ' + $99'}
                          {' = '}
                          ${(packages.find(pkg => pkg.id === formData.package)?.price || 0) + (formData.drone_inspection ? 99 : 0)}
                        </span>
                      </div>
                    </div>
                  )}

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
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
