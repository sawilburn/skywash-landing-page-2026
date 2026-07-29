import { useState, useEffect } from 'react';
import { CheckCircle, Sparkles, Droplets, Home, Crown, Shield, Award, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { DynamicBeforeAfterSlider } from '../components/DynamicBeforeAfterSlider';
import { DynamicSectionImage } from '../components/DynamicSectionImage';
import { ResidentialLeadForm } from '../components/ResidentialLeadForm';

const packages = [
  {
    id: 'silver',
    name: 'Silver',
    price: '$549',
    icon: Home,
    color: 'from-slate-400 to-slate-500',
    popular: false,
    features: [
      'Complete Exterior House Wash',
      'Professional Soft Wash Technique',
      'Basic Algae & Mildew Removal',
      'Basic Exterior Window Rinsing'
    ]
  },
  {
    id: 'gold',
    name: 'Gold',
    price: '$749',
    icon: Sparkles,
    color: 'from-yellow-500 to-yellow-600',
    popular: true,
    features: [
      'Everything in Silver',
      'Exterior Window Washing',
      'Streak-Free Crystal Shine Guarantee',
      'Basic Gutter Treatment'
    ]
  },
  {
    id: 'platinum',
    name: 'Platinum',
    price: '$1,149',
    icon: Crown,
    color: 'from-blue-600 to-blue-700',
    popular: false,
    features: [
      'Everything in Gold',
      'Professional Roof Cleaning',
      'Basic Gutter Cleaning',
      'Interior Windows (up to 20)',
      'VIP Same-Week Scheduling'
    ]
  }
];

const addOns = [
  { name: 'Roof Cleaning', description: 'Soft wash treatment removes moss, algae, and black streaks' },
  { name: 'Deck & Railing Cleaning', description: 'Restore your deck and railings to like-new condition' },
  { name: 'Sidewalk & Walkway Cleaning', description: 'Pressure wash concrete, pavers, and stone pathways' },
  { name: 'Driveway Cleaning', description: 'Remove oil stains, tire marks, and embedded grime' },
  { name: 'Fence Cleaning', description: 'Wood, vinyl, or metal — we restore any fence type' },
  { name: 'Gutter Brightening', description: 'Remove tiger stripes and oxidation from gutter exteriors' },
];

export function ResidentialSpring2026Page() {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-08-14T23:59:59').getTime();

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
      const formElement = document.getElementById('booking-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [selectedPackage]);

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
                <span className="text-sm font-bold">Limited Time Offer - 15% Off Any Service</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Back to School Specials
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
                Get 15% off any exterior cleaning service when you book before August 14th. Professional service, guaranteed results.
              </motion.p>

              <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 border-green-400 mb-8">
                <p className="text-lg md:text-xl font-semibold mb-6">
                  Book before August 14th, 2026 to get 15% off any service!
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
                <p className="text-slate-600">Book your back-to-school cleaning before slots fill up</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 border-2 border-blue-200 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Proudly Local, Professionally Trained
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Unlike many cleaning companies that use subcontractors, we're a <strong>local Northern Virginia business</strong> that employs <strong>W-2 team members</strong>. Every person who arrives at your home is a fully trained, background-checked employee of Skywash Innovations.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                This means you get consistent quality, reliable service, and accountability you can trust. When you choose us, you're supporting local jobs and getting the peace of mind that comes with professional, insured employees—not independent contractors.
              </p>
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
                Select the perfect back-to-school cleaning package for your home
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                      <h3 className="text-2xl font-bold">{pkg.name}</h3>
                      <div className="mt-2 flex items-baseline gap-1">
                        <span className="text-3xl font-extrabold">{pkg.price}</span>
                        <span className="text-white/80 text-sm">starting price</span>
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

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Customize With Add-Ons
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Enhance any package with targeted services. Pricing provided upon quote.
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {addOns.map((addon, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Droplets className="text-blue-600" size={18} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{addon.name}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{addon.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mt-10 text-center"
            >
              <p className="text-slate-500 text-sm">
                Add-on pricing varies based on property size and condition. Ask about bundling discounts when adding multiple services.
              </p>
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
                  Why Choose Our Back to School Package?
                </h2>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Now is the perfect time to remove summer buildup and get your home looking its best for the new school year. Our specialized packages are designed to tackle seasonal challenges while protecting your investment.
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
                      <p className="text-white/80">Make your home shine for the new school year and fall gatherings</p>
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
                  alt="Beautiful clean home exterior"
                  className="w-full h-full object-cover"
                  fallback="Clean Home Exterior"
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
                Book Your Back to School Service
              </h2>
              <p className="text-xl text-slate-600">
                Secure your 15% off back-to-school pricing today
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-xl p-8 md:p-12 border-2 border-green-200"
            >
              <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-5 mb-8">
                <p className="text-sm text-amber-900 leading-relaxed">
                  <strong className="font-semibold">Important Notice:</strong> Additional charges may apply for homes larger than 3,500 square feet, properties located within 7 nautical miles of Reagan National Airport (DCA), or properties with heavy tree canopy or other obstacles that may affect service delivery.
                </p>
              </div>

              <ResidentialLeadForm />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
