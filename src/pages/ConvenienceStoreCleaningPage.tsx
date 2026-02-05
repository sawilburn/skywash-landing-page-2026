import { useState } from 'react';
import { motion } from 'framer-motion';
import { CommercialLeadForm } from '../components/CommercialLeadForm';
import {
  Zap,
  Shield,
  TrendingUp,
  MapPin,
  Droplet,
  Sparkles,
  Building2,
  Award,
  CheckCircle2,
  Clock,
  Users,
  Target
} from 'lucide-react';

export function ConvenienceStoreCleaningPage() {
  const [showLeadForm, setShowLeadForm] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 text-white pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Zap className="text-yellow-300" size={20} />
              <span className="text-sm font-bold uppercase tracking-wider">Rapid Service</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Rapid Exterior Refresh<br />
              <span className="text-yellow-300">for Convenience & Fuel Stations</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
              High-speed, drone-powered cleaning designed for high-traffic environments.
              <span className="text-yellow-300 font-bold"> We're in, we're out, and your store looks brand new.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => setShowLeadForm(true)}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 hover:text-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center space-x-2"
              >
                <Zap size={24} />
                <span>Get a Rapid Quote</span>
              </button>
              <a
                href="tel:+17037550865"
                className="bg-blue-800/50 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-900/70 transition-all duration-300 border-2 border-white/30"
              >
                Call: (703) 755-0865
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
              <Target className="text-blue-600" size={20} />
              <span className="text-blue-600 font-bold uppercase text-sm tracking-wider">The Convenience Advantage</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Why High-Traffic Retailers Choose Us
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Speed, safety, and zero disruption to your peak sales hours
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-xl">
                  <MapPin className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3">Zero Footprint</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    No bulky lifts or ladders blocking your fuel pumps or parking spots.
                    Your customers maintain full access while we work.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-4 rounded-xl">
                  <Zap className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3">Rapid Execution</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Projects completed up to <span className="font-black text-orange-600">80% faster</span> than manual scrubbing,
                    ensuring zero disruption to your peak sales hours.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-4 rounded-xl">
                  <Shield className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3">Ground-Based Safety</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    We eliminate fall-related liabilities by keeping our technicians safely on the ground.
                    No workers at dangerous heights, ever.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-4 rounded-xl">
                  <Droplet className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3">Precision Chemistry</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Our surfactants dissolve exhaust soot, oil residues, and organic growth
                    <span className="font-black text-purple-600"> at the molecular level</span>.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-cyan-400/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Sparkles className="text-cyan-400" size={20} />
              <span className="text-cyan-400 font-bold uppercase text-sm tracking-wider">Full-Service Menu</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Complete Exterior Care
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Everything your convenience or fuel station needs to maintain instant curb appeal
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="bg-gradient-to-br from-blue-400 to-cyan-500 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Sparkles size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-black mb-3">Spotless Window Cleaning</h3>
              <p className="text-slate-300 leading-relaxed">
                7-stage 0 PPM pure water filtration for a crystal-clear, streak-free finish that lasts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-black mb-3">Signage & Pylon Cleaning</h3>
              <p className="text-slate-300 leading-relaxed">
                Safe, non-contact cleaning for high-reach branding and pylon signs that maximize visibility.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="bg-gradient-to-br from-green-400 to-emerald-500 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Building2 size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-black mb-3">Canopy & Building Facade</h3>
              <p className="text-slate-300 leading-relaxed">
                Softwashing techniques that remove industrial pollutants without damaging sensitive surfaces or paint.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="bg-gradient-to-br from-purple-400 to-pink-500 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Droplet size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-black mb-3">Concrete & Fuel Island</h3>
              <p className="text-slate-300 leading-relaxed">
                High-pressure treatment to eliminate oil stains, gum, and tire marks for a like-new appearance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-green-200"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="text-green-600" size={32} />
                  <h3 className="text-3xl font-black text-slate-900">Security & Compliance</h3>
                </div>
                <div className="space-y-3 text-lg text-slate-700">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={24} />
                    <p>
                      <span className="font-bold">FAA Part 107 Certified:</span> Our pilots meet the highest federal aviation standards for commercial operations.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={24} />
                    <p>
                      <span className="font-bold">Background-Checked Staff:</span> All team members undergo comprehensive screening for secure retail environments.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={24} />
                    <p>
                      <span className="font-bold">Fully Insured:</span> Comprehensive liability coverage protects your property and operations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Award className="text-green-600" size={80} />
                <p className="text-center font-bold text-slate-700">Trusted by Leading<br />Retail Chains</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Clock className="text-yellow-300" size={20} />
              <span className="text-sm font-bold uppercase tracking-wider">Fast Response Time</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Get a Rapid Quote for Your<br />
              <span className="text-yellow-300">Convenience Portfolio</span>
            </h2>

            <p className="text-xl md:text-2xl mb-10 leading-relaxed">
              Same-day quotes for single locations or multi-site portfolios.
              <span className="font-bold"> We move at the speed of your business.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => setShowLeadForm(true)}
                className="bg-white text-blue-600 px-10 py-5 rounded-xl font-black text-xl hover:bg-yellow-300 hover:text-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center space-x-3"
              >
                <Zap size={28} />
                <span>Request Instant Quote</span>
              </button>
              <a
                href="tel:+17037550865"
                className="bg-blue-800/50 backdrop-blur-sm text-white px-10 py-5 rounded-xl font-black text-xl hover:bg-blue-900/70 transition-all duration-300 border-2 border-white/30 flex items-center space-x-3"
              >
                <Users size={28} />
                <span>(703) 755-0865</span>
              </a>
            </div>

            <p className="text-sm text-slate-200 mt-8 max-w-2xl mx-auto">
              Serving convenience stores, fuel stations, and high-traffic retail across Northern Virginia, Maryland, and Washington DC.
            </p>
          </motion.div>
        </div>
      </section>

      {showLeadForm && (
        <CommercialLeadForm
          onClose={() => setShowLeadForm(false)}
          serviceType="Convenience & Fuel Station Cleaning"
        />
      )}
    </div>
  );
}
