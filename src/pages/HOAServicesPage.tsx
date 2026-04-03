import { motion } from 'framer-motion';
import { Shield, Leaf, BadgeCheck, Plane, Building2, ParkingSquare, Fence, SignpostBig, Home, Droplets, Wind, Sparkles, FileText, ClipboardCheck, Wrench, Phone, Mail, Globe } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export function HOAServicesPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const scrollToContact = () => {
    const contact = document.getElementById('contact-section');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase.from('leads').insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `Company/HOA: ${formData.company}\n\n${formData.message}`,
          source: 'HOA Services Page',
          lead_type: 'commercial'
        }
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({ name: '', company: '', email: '', phone: '', message: '' });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
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
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-[#1a3c75] via-[#2a4c85] to-[#0f2847] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>

        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-[#1a3c75]/90"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Trusted Exterior Cleaning for HOA Communities
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed">
              From common areas to building facades — we keep your communities looking their best year-round.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToContact}
                className="bg-white text-[#1a3c75] px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-all shadow-xl hover:shadow-2xl"
              >
                Request a Community Quote
              </button>
              <button
                onClick={() => {
                  const services = document.getElementById('hoa-services');
                  if (services) services.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
              >
                Learn What We Do
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12"
          >
            Why HOA Managers Choose Us
          </motion.h2>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1a3c75] to-[#3a7bd5] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Plane className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">FAA Part 107 Certified</h3>
              <p className="text-slate-600">Drone Operators</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1a3c75] to-[#3a7bd5] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <BadgeCheck className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">OSHA Compliant</h3>
              <p className="text-slate-600">Safety First Operations</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Leaf className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Eco-Friendly</h3>
              <p className="text-slate-600">Biodegradable Solutions</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1a3c75] to-[#3a7bd5] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Shield className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Licensed & Insured</h3>
              <p className="text-slate-600">Full Coverage Protection</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="hoa-services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Services for HOA Communities
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-200">
              <div className="w-16 h-16 bg-[#1a3c75] rounded-xl flex items-center justify-center mb-6">
                <Building2 className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Common Area & Building Washing</h3>
              <p className="text-slate-600 leading-relaxed">
                Soft wash and pressure wash of community buildings, clubhouses, and shared structures. Removes algae, mold, mildew, and environmental buildup.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-200">
              <div className="w-16 h-16 bg-[#1a3c75] rounded-xl flex items-center justify-center mb-6">
                <ParkingSquare className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Sidewalk & Parking Lot Cleaning</h3>
              <p className="text-slate-600 leading-relaxed">
                Restores walkways, sidewalks, and parking areas to a clean, safe, presentable condition. Great for routine community upkeep.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-200">
              <div className="w-16 h-16 bg-[#1a3c75] rounded-xl flex items-center justify-center mb-6">
                <Fence className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Fence & Wall Cleaning</h3>
              <p className="text-slate-600 leading-relaxed">
                Vinyl, wood, or masonry fencing, retaining walls, and decorative walls cleaned without surface damage.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-200">
              <div className="w-16 h-16 bg-[#1a3c75] rounded-xl flex items-center justify-center mb-6">
                <SignpostBig className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Signage & Entrance Feature Cleaning</h3>
              <p className="text-slate-600 leading-relaxed">
                Monument signs, pillars, and entrance features cleaned to make a strong first impression on residents and visitors.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-[#1a3c75] to-[#2a4c85] text-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all lg:col-span-2">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6">
                <Plane className="text-[#1a3c75]" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Drone Facade Cleaning</h3>
              <p className="text-white/90 leading-relaxed text-lg">
                FAA Part 107 certified drone operators clean multi-story building facades safely and efficiently — no lifts or scaffolding required.
              </p>
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
            className="text-center mb-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Services for Your Homeowners
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-16">
              When residents ask who to trust for exterior cleaning, send them our way.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-slate-50 rounded-xl p-8 border-2 border-slate-200 hover:border-[#3a7bd5] transition-all">
              <div className="w-14 h-14 bg-[#1a3c75] rounded-lg flex items-center justify-center mb-4">
                <Home className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">House Soft Washing</h3>
              <p className="text-slate-600 leading-relaxed">
                Low-pressure soft wash removes algae, mold, mildew, and dirt from all siding types without damage.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-slate-50 rounded-xl p-8 border-2 border-slate-200 hover:border-[#3a7bd5] transition-all">
              <div className="w-14 h-14 bg-[#1a3c75] rounded-lg flex items-center justify-center mb-4">
                <Home className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Roof Soft Washing</h3>
              <p className="text-slate-600 leading-relaxed">
                Safely removes algae (those black streaks) using manufacturer-approved soft wash techniques.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-slate-50 rounded-xl p-8 border-2 border-slate-200 hover:border-[#3a7bd5] transition-all">
              <div className="w-14 h-14 bg-[#1a3c75] rounded-lg flex items-center justify-center mb-4">
                <Droplets className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Driveway & Patio Pressure Washing</h3>
              <p className="text-slate-600 leading-relaxed">
                Concrete, pavers, and stone restored to like-new condition.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-slate-50 rounded-xl p-8 border-2 border-slate-200 hover:border-[#3a7bd5] transition-all">
              <div className="w-14 h-14 bg-[#1a3c75] rounded-lg flex items-center justify-center mb-4">
                <Wind className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Gutter Cleaning</h3>
              <p className="text-slate-600 leading-relaxed">
                Debris cleared and downspouts flushed to protect rooflines and foundations.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-slate-50 rounded-xl p-8 border-2 border-slate-200 hover:border-[#3a7bd5] transition-all">
              <div className="w-14 h-14 bg-[#1a3c75] rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Window Cleaning</h3>
              <p className="text-slate-600 leading-relaxed">
                Professional exterior window cleaning for a polished, finished look.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              How It Works
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center relative">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1a3c75] to-[#3a7bd5] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FileText className="text-white" size={36} />
              </div>
              <div className="absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#3a7bd5] to-transparent hidden md:block"></div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Request a Quote</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Contact us with your community's needs and we'll schedule a walkthrough.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center relative">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1a3c75] to-[#3a7bd5] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <ClipboardCheck className="text-white" size={36} />
              </div>
              <div className="absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#3a7bd5] to-transparent hidden md:block"></div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">2. We Assess & Plan</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                We evaluate the property and provide a detailed, no-obligation estimate.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1a3c75] to-[#3a7bd5] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Wrench className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">3. We Get to Work</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our team arrives on time, works efficiently, and leaves the property spotless.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="contact-section" className="py-24 bg-gradient-to-br from-[#1a3c75] via-[#2a4c85] to-[#0f2847] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Elevate Your Community's Appearance?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We work with HOA property managers across Virginia. Let's talk about a maintenance plan that fits your communities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-slate-900 border-2 border-transparent focus:border-[#3a7bd5] focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
                    Company/HOA Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-slate-900 border-2 border-transparent focus:border-[#3a7bd5] focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-slate-900 border-2 border-transparent focus:border-[#3a7bd5] focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-slate-900 border-2 border-transparent focus:border-[#3a7bd5] focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-slate-900 border-2 border-transparent focus:border-[#3a7bd5] focus:outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-[#1a3c75] px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-500/20 border border-green-400 text-white px-6 py-4 rounded-lg">
                  Thank you for your inquiry! We'll be in touch soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-500/20 border border-red-400 text-white px-6 py-4 rounded-lg">
                  There was an error submitting your form. Please try again or call us directly.
                </div>
              )}
            </form>

            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <a href="tel:+17037550865" className="flex flex-col items-center space-y-2 hover:text-[#3a7bd5] transition-colors">
                  <Phone size={32} />
                  <span className="text-lg font-semibold">703-755-0865</span>
                </a>

                <a href="mailto:hoa@skywashinnovations.com" className="flex flex-col items-center space-y-2 hover:text-[#3a7bd5] transition-colors">
                  <Mail size={32} />
                  <span className="text-lg font-semibold">hoa@skywashinnovations.com</span>
                </a>

                <a href="https://www.skywashinnovations.com" className="flex flex-col items-center space-y-2 hover:text-[#3a7bd5] transition-colors">
                  <Globe size={32} />
                  <span className="text-lg font-semibold">www.skywashinnovations.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Skywash Innovations</h3>
            <p className="text-slate-400 mb-4">Professional Exterior Cleaning — Powered by Innovation</p>
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Skywash Innovations. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
