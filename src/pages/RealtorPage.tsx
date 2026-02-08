import { motion } from 'framer-motion';
import { Shield, Clock, FileText, Home, Droplets, Wind, Sparkles, Camera, Search, BadgeCheck, Building2, Award } from 'lucide-react';
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
              We don't just wash; we analyze and document. Elevate your property's curb appeal and closing confidence with drone-integrated cleaning, photography, and inspections.
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
              The "Triple Threat" Realtor Bundles
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our proprietary drone services give you the competitive edge. Document the 'Before' and 'After' for full transparency with buyers.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6">
                <Home className="text-[#1a3c75]" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">SkyWash</h3>
              <p className="text-lg text-white/90 mb-6">
                Our signature drone-powered soft washing. Reach areas traditional methods can't, with zero risk to the property.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-white">✓</span>
                  </div>
                  <span className="text-white/90">No ladder marks or gutter damage</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-white">✓</span>
                  </div>
                  <span className="text-white/90">Eco-friendly cleaning solutions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-white">✓</span>
                  </div>
                  <span className="text-white/90">Complete before/after documentation</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6">
                <Camera className="text-[#1a3c75]" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">SkyShot</h3>
              <p className="text-lg text-white/90 mb-6">
                Professional aerial media to make listings pop. Stunning photography and video that captures buyers' attention.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-white">✓</span>
                  </div>
                  <span className="text-white/90">4K aerial photography & video</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-white">✓</span>
                  </div>
                  <span className="text-white/90">Neighborhood and property context</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-white">✓</span>
                  </div>
                  <span className="text-white/90">MLS-ready high-res images</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6">
                <Search className="text-[#1a3c75]" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">SkyScan</h3>
              <p className="text-lg text-white/90 mb-6">
                Drone-based structural and roof health analysis. Identify issues before they become deal-breakers.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-white">✓</span>
                  </div>
                  <span className="text-white/90">Thermal imaging for leak detection</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-white">✓</span>
                  </div>
                  <span className="text-white/90">Detailed roof condition report</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-white">✓</span>
                  </div>
                  <span className="text-white/90">Pre-inspection confidence for buyers</span>
                </li>
              </ul>
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
              Bundle All Three & Save
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
            className="grid md:grid-cols-3 gap-12"
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
          </motion.div>
        </div>
      </section>

      <RealtorLeadForm />

      <section className="py-16 bg-gradient-to-r from-[#1a3c75] to-[#2a4c85] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make Your Next Listing Shine?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of realtors who trust Skywash Innovations for their listing preparation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToForm}
              className="bg-white text-[#1a3c75] px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-all shadow-xl"
            >
              Get Your Bundle Quote
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
