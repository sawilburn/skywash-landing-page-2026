import { useState } from 'react';
import { Send, Plane, Atom, Zap, Clock, Users, Shield, CheckCircle, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { supabase } from '../lib/supabase';
import { trackConversion } from '../utils/tracking';

export function ArlingtonSTEMProgramPage() {
  const [formData, setFormData] = useState({
    contact_name: '',
    email: '',
    phone: '',
    current_study: '',
    bio: '',
    goals: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const leadData = {
        type: 'stem_program',
        contact_name: formData.contact_name,
        email: formData.email,
        phone: formData.phone,
        details: `Arlington STEM Apprenticeship Application\n\nCurrent Area of Study: ${formData.current_study}\n\nBio:\n${formData.bio}\n\nWhat they hope to get out of this apprenticeship:\n${formData.goals}`
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
          console.warn('Email notification failed (application saved to database):', emailResult);
        }
      } catch (emailError) {
        console.warn('Email notification unavailable (application saved to database):', emailError);
      }

      trackConversion();
      setSubmitStatus('success');
      setFormData({
        contact_name: '',
        email: '',
        phone: '',
        current_study: '',
        bio: '',
        goals: ''
      });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 8000);
    } catch (error) {
      console.error('Error submitting application:', error);
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

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <main>
        <section className="relative pt-32 pb-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="text-center max-w-5xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-full inline-flex items-center gap-2 mb-8 shadow-xl border-2 border-orange-400">
                <AlertTriangle size={20} />
                <span className="text-sm font-bold uppercase tracking-wide">Limited Spots Available</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Master the Skies: <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">UAS & Robotics</span> Apprenticeship
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-10 text-slate-200 leading-relaxed max-w-4xl mx-auto">
                Join Skywash Innovations in Purcellville, VA, to learn how we are leveraging heavy-lift drone technology to revolutionize the exterior cleaning industry.
              </motion.p>

              <motion.div variants={fadeInUp} className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-orange-500/50">
                  <Clock className="text-orange-400 mx-auto mb-3" size={36} />
                  <div className="text-2xl font-bold text-white">3 Weeks</div>
                  <div className="text-sm text-slate-300 font-medium">Intensive Program</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-orange-500/50">
                  <Users className="text-orange-400 mx-auto mb-3" size={36} />
                  <div className="text-2xl font-bold text-white">Limited</div>
                  <div className="text-sm text-slate-300 font-medium">Few Spots Left</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-orange-500/50">
                  <Zap className="text-orange-400 mx-auto mb-3" size={36} />
                  <div className="text-2xl font-bold text-white">Late May</div>
                  <div className="text-sm text-slate-300 font-medium">2026 Launch</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                3 Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Pillars</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                A comprehensive curriculum designed to prepare you for the future of aerospace and robotics technology
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              <motion.div variants={fadeInUp} className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl p-8 border-2 border-blue-500/30 hover:border-orange-500/50 transition-all duration-300 shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Plane className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Complex Airspace Ops</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Master UAS Safety and Flight Operations within the DC SFRA (Special Flight Rules Area) and the FRZ (Flight Restricted Zone).
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-slate-300">
                    <CheckCircle className="text-orange-400 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-sm">FAA regulations and compliance</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-300">
                    <CheckCircle className="text-orange-400 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-sm">Advanced flight planning in restricted zones</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-300">
                    <CheckCircle className="text-orange-400 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-sm">Risk assessment and safety protocols</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl p-8 border-2 border-blue-500/30 hover:border-orange-500/50 transition-all duration-300 shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Atom className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Chemical Science</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Deep dive into chemical safety and the specific science behind the eco-friendly solutions used in aerial soft washing.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-slate-300">
                    <CheckCircle className="text-orange-400 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-sm">Environmental chemistry fundamentals</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-300">
                    <CheckCircle className="text-orange-400 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-sm">Biodegradable cleaning agents</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-300">
                    <CheckCircle className="text-orange-400 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-sm">Safety data sheets and handling protocols</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl p-8 border-2 border-blue-500/30 hover:border-orange-500/50 transition-all duration-300 shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Zap className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">The Future of Service</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Real-world application of UAS technology in the modern workforce and commercial service industry.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-slate-300">
                    <CheckCircle className="text-orange-400 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-sm">Industry trends and emerging technologies</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-300">
                    <CheckCircle className="text-orange-400 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-sm">Business operations and client management</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-300">
                    <CheckCircle className="text-orange-400 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-sm">Hands-on field experience</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 bg-orange-500/20 border-2 border-orange-500 rounded-full px-6 py-3 mb-8">
                <Shield className="text-orange-400" size={24} />
                <span className="text-orange-400 font-bold text-lg">DC SFRA & FRZ Certified Training</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why This Apprenticeship?
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Gain real-world experience in one of the most complex and regulated airspaces in the United States while learning cutting-edge drone technology applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-blue-500/30 shadow-2xl"
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Unique Location Advantage</h4>
                    <p className="text-slate-300">
                      Operating within 30 miles of Washington DC gives you unparalleled experience with complex airspace regulations that apply nowhere else in the country.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Emerging Industry Leadership</h4>
                    <p className="text-slate-300">
                      Be at the forefront of an industry transformation. Heavy-lift drones are revolutionizing how we approach commercial services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-slate-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Cross-Disciplinary Skills</h4>
                    <p className="text-slate-300">
                      Combine robotics, aviation, environmental science, and business operations into one comprehensive learning experience.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="application-form" className="py-20 bg-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Launch?</span>
              </h2>
              <p className="text-xl text-slate-300">
                Submit your application to secure your spot in this exclusive program
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-orange-500/30"
            >
              {submitStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-orange-500/20 border-2 border-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-orange-400" size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Application Submitted!</h3>
                  <p className="text-slate-300 text-lg mb-6 max-w-xl mx-auto">
                    Thank you for your interest in the Arlington STEM Apprenticeship program! We've received your application and will review it carefully. You'll hear from us within 5 business days.
                  </p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="text-orange-400 font-semibold hover:underline"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact_name" className="block text-sm font-semibold text-slate-200 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="contact_name"
                        name="contact_name"
                        required
                        value={formData.contact_name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-white placeholder-slate-400"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-200 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-white placeholder-slate-400"
                        placeholder="john.smith@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-200 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-white placeholder-slate-400"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="current_study" className="block text-sm font-semibold text-slate-200 mb-2">
                        Current Area of Study *
                      </label>
                      <input
                        type="text"
                        id="current_study"
                        name="current_study"
                        required
                        value={formData.current_study}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-white placeholder-slate-400"
                        placeholder="e.g., Engineering, Computer Science, Aviation"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="bio" className="block text-sm font-semibold text-slate-200 mb-2">
                      Brief Bio About Yourself *
                    </label>
                    <textarea
                      id="bio"
                      name="bio"
                      required
                      rows={4}
                      value={formData.bio}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-white placeholder-slate-400 resize-none"
                      placeholder="Tell us about yourself, your interests, and your background..."
                    />
                  </div>

                  <div>
                    <label htmlFor="goals" className="block text-sm font-semibold text-slate-200 mb-2">
                      What Do You Hope to Get Out of This Apprenticeship? *
                    </label>
                    <textarea
                      id="goals"
                      name="goals"
                      required
                      rows={4}
                      value={formData.goals}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-white placeholder-slate-400 resize-none"
                      placeholder="Describe your goals and what you hope to learn from this experience..."
                    />
                  </div>

                  <div className="bg-blue-900/30 border-2 border-blue-500/30 rounded-xl p-5">
                    <p className="text-sm text-slate-300 leading-relaxed">
                      <strong className="font-semibold text-white">Program Details:</strong> This is a 3-week intensive apprenticeship beginning in late May 2026. Selected participants will work directly with our team in Purcellville, VA. A detailed schedule will be provided to accepted applicants.
                    </p>
                  </div>

                  {submitStatus === 'error' && (
                    <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4 text-red-300">
                      There was an error submitting your application. Please try again or contact us directly at info@skywashinnovations.com
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : 'shadow-lg hover:shadow-xl'
                    }`}
                  >
                    <span>{isSubmitting ? 'Submitting Application...' : 'Submit Application'}</span>
                    <Send size={20} />
                  </button>

                  <p className="text-center text-sm text-slate-400">
                    Your information is secure and will only be used to process your apprenticeship application.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-slate-900 border-t border-slate-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Questions About the Program?</h3>
              <p className="text-slate-300 mb-6">
                Contact us at <a href="mailto:info@skywashinnovations.com" className="text-orange-400 hover:underline font-semibold">info@skywashinnovations.com</a>
              </p>
              <p className="text-sm text-slate-400">
                Full schedule and additional program details will be published soon. Accepted applicants will receive priority notification.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
