import { motion } from 'framer-motion';
import { Shield, Clock, FileText, Home, Droplets, Wind, Sparkles, BadgeCheck, Building2, Award, DollarSign } from 'lucide-react';
import { RealtorLeadForm } from '../components/RealtorLeadForm';

export function RealtorPage() {
  const scrollToForm = () => {
    const form = document.getElementById('realtor-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
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
            <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <Building2 size={20} />
              <span className="text-sm font-semibold">Exclusive for Real Estate Professionals</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              The Ultimate Listing-Ready Partner for Realtors
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Elevate your property's curb appeal with professional drone-integrated cleaning. Payment at closing available - no money down for your clients.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToForm}
                className="bg-white text-[#1a3c75] px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-all shadow-xl hover:shadow-2xl"
              >
                Get Package Quote Now
              </button>
              <a
                href="tel:+17037550865"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
              >
                Call (703) 755-0865
              </a>
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
                <BadgeCheck className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">OSHA Certified</h3>
              <p className="text-slate-600">Safety-first operations on every property</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Fully Licensed</h3>
              <p className="text-slate-600">All required permits and certifications</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-slate-700" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Multi-Million $ Insurance</h3>
              <p className="text-slate-600">Comprehensive coverage for your peace of mind</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Comprehensive Exterior Care
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every surface cleaned to perfection, making your listings shine from every angle
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-8 border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-[#1a3c75] rounded-lg flex items-center justify-center mb-4">
                <Home className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Roof Cleaning</h3>
              <p className="text-slate-600 leading-relaxed">
                Soft wash technology removes stains without damage. Extends roof life and boosts curb appeal instantly.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-8 border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-[#1a3c75] rounded-lg flex items-center justify-center mb-4">
                <Droplets className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Siding & Stucco</h3>
              <p className="text-slate-600 leading-relaxed">
                Deep clean that transforms exteriors. Remove years of grime, mold, and discoloration for instant appeal.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-8 border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-[#1a3c75] rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Window Cleaning</h3>
              <p className="text-slate-600 leading-relaxed">
                Crystal clear views inside and out. Professional streak-free results that showcase natural light.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-8 border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-[#1a3c75] rounded-lg flex items-center justify-center mb-4">
                <Wind className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Gutter Cleaning</h3>
              <p className="text-slate-600 leading-relaxed">
                Complete debris removal and flow testing. Prevents buyer concerns about water damage and maintenance.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-slate-900 to-[#1a3c75] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Drone Cleaning Services
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our signature drone-powered soft washing service gives you the competitive edge. Document the 'Before' and 'After' for full transparency with buyers.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 hover:bg-white/15 transition-all">
              <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto mb-6">
                <Home className="text-[#1a3c75]" size={40} />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-center">Premium Exterior Cleaning Package</h3>
              <p className="text-xl text-white/90 mb-8 text-center leading-relaxed">
                Our signature drone-powered soft washing service. Reach areas traditional methods can't, with zero risk to the property.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm text-white font-bold">✓</span>
                    </div>
                    <span className="text-white/90 text-lg">No ladder marks or gutter damage</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm text-white font-bold">✓</span>
                    </div>
                    <span className="text-white/90 text-lg">Eco-friendly cleaning solutions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm text-white font-bold">✓</span>
                    </div>
                    <span className="text-white/90 text-lg">Complete before/after documentation</span>
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm text-white font-bold">✓</span>
                    </div>
                    <span className="text-white/90 text-lg">Faster than traditional methods</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm text-white font-bold">✓</span>
                    </div>
                    <span className="text-white/90 text-lg">Fully insured and certified</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm text-white font-bold">✓</span>
                    </div>
                    <span className="text-white/90 text-lg">Same-week service available</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12"
          >
            <button
              onClick={scrollToForm}
              className="bg-white text-[#1a3c75] px-10 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-all shadow-xl hover:shadow-2xl"
            >
              Get Your Quote Now
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Why Realtors Choose Us
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We understand the unique needs of real estate professionals and deliver results that help you close deals faster
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1a3c75] to-[#2a4c85] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Clock className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Speed</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Fast scheduling to hit your "Live" date. We work around your timeline, not ours. Same-week service available for urgent listings.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1a3c75] to-[#2a4c85] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Safety</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Drone technology means no ladders leaning against your client's gutters. Zero property damage risk, full insurance coverage on every job.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1a3c75] to-[#2a4c85] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FileText className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Documentation</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                High-res aerial reports to justify your listing price. Before and after evidence that shows the property's true condition and value.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <DollarSign className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Payment Flexibility</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Payment at closing available through our realtor partners. No money down for your clients - simple and hassle-free.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              The Skywash Innovations Difference
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how we compare to traditional pressure washing companies
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-[#1a3c75] to-[#2a4c85]">
                    <th className="px-6 py-4 text-left text-white font-bold text-lg"></th>
                    <th className="px-6 py-4 text-center text-white font-bold text-lg">Skywash Innovations</th>
                    <th className="px-6 py-4 text-center text-white font-bold text-lg">Other Guys</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Trained & Certified Technicians (OSHA-10/30)', us: true, them: false },
                    { feature: 'Background Checked, Drug Tested & Vetted Staff', us: true, them: false },
                    { feature: 'Convenient, Paperless, Flexible Scheduling', us: true, them: false },
                    { feature: 'Industry-Best Insurance with Up-to-Date Certificates', us: true, them: false },
                    { feature: 'Verified 5-Star Reviews', us: true, them: false },
                    { feature: 'Real Happiness Guarantee – We Make it Right', us: true, them: false },
                    { feature: 'Drone-Powered Technology', us: true, them: false },
                    { feature: 'Payment at Closing Available', us: true, them: false },
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                      <td className="px-6 py-4 text-slate-900 font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        {row.us ? (
                          <div className="flex justify-center">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-lg">✓</span>
                            </div>
                          </div>
                        ) : (
                          <div className="flex justify-center">
                            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-lg">✗</span>
                            </div>
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.them ? (
                          <div className="flex justify-center">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-lg">✓</span>
                            </div>
                          </div>
                        ) : (
                          <div className="flex justify-center">
                            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-lg">✗</span>
                            </div>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
              Home Soft Washing Packages
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the perfect package for your listing needs
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-[#1a3c75] to-[#2a4c85]">
                    <th className="px-6 py-4 text-left text-white font-bold text-lg">Home Soft Washing Packages</th>
                    <th className="px-6 py-4 text-center text-white font-bold text-lg">Silver</th>
                    <th className="px-6 py-4 text-center text-white font-bold text-lg">Gold</th>
                    <th className="px-6 py-4 text-center text-white font-bold text-lg">Platinum</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { service: 'Complete Exterior House Wash', silver: true, gold: true, platinum: true },
                    { service: 'Professional Soft Wash Technique', silver: true, gold: true, platinum: true },
                    { service: 'Basic Algae and Mildew Removal', silver: true, gold: true, platinum: true },
                    { service: 'Basic Exterior Window Washing', silver: true, gold: true, platinum: true },
                    { service: 'Interior Window Cleaning (up to 20 windows)', silver: false, gold: true, platinum: true },
                    { service: 'Enhanced Spot Treatment', silver: false, gold: true, platinum: true },
                    { service: 'Streak-Free Crystal Shine Guarantee', silver: false, gold: true, platinum: true },
                    { service: 'Professional Roof Cleaning', silver: false, gold: false, platinum: true },
                    { service: 'Basic Gutter Cleaning', silver: false, gold: false, platinum: true },
                    { service: 'VIP Same-Week Scheduling', silver: false, gold: false, platinum: true },
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                      <td className="px-6 py-4 text-slate-900 font-medium">{row.service}</td>
                      <td className="px-6 py-4 text-center">
                        {row.silver ? (
                          <div className="flex justify-center">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-lg">✓</span>
                            </div>
                          </div>
                        ) : (
                          <div className="flex justify-center">
                            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-lg">✗</span>
                            </div>
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.gold ? (
                          <div className="flex justify-center">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-lg">✓</span>
                            </div>
                          </div>
                        ) : (
                          <div className="flex justify-center">
                            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-lg">✗</span>
                            </div>
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.platinum ? (
                          <div className="flex justify-center">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-lg">✓</span>
                            </div>
                          </div>
                        ) : (
                          <div className="flex justify-center">
                            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-lg">✗</span>
                            </div>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-[#1a3c75] text-white font-bold">
                    <td className="px-6 py-4 text-lg">Price</td>
                    <td className="px-6 py-4 text-center text-lg">$549</td>
                    <td className="px-6 py-4 text-center text-lg">$749</td>
                    <td className="px-6 py-4 text-center text-lg">$1,249</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-slate-100 px-6 py-4 border-t border-slate-200">
              <p className="text-slate-700 text-center">
                <span className="font-bold">Payment at closing available</span> - No money down for your clients through our realtor partner program
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12"
          >
            <button
              onClick={scrollToForm}
              className="bg-[#1a3c75] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#2a4c85] transition-all shadow-xl hover:shadow-2xl"
            >
              Get Your Custom Quote
            </button>
          </motion.div>
        </div>
      </section>

      <RealtorLeadForm />

      <section className="py-16 bg-gradient-to-r from-[#1a3c75] to-[#2a4c85] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make Your Next Listing Shine?
          </h2>
          <p className="text-xl text-white/90 mb-4">
            Join hundreds of realtors who trust Skywash Innovations for their listing preparation
          </p>
          <p className="text-lg text-white/80 mb-8">
            Payment at closing available - no money down for your clients
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToForm}
              className="bg-white text-[#1a3c75] px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-all shadow-xl"
            >
              Get Your Quote
            </button>
            <a
              href="tel:+17037550865"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
            >
              Call (703) 755-0865
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
