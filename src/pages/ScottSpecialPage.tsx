import { useState } from 'react';
import { CheckCircle, Shield, Award, Clock, Phone, Star, AlertTriangle, Zap, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { ResidentialLeadForm } from '../components/ResidentialLeadForm';
import { DynamicBeforeAfterSlider } from '../components/DynamicBeforeAfterSlider';

const benefits = [
  {
    icon: Shield,
    title: 'Safe Soft Wash Method',
    description: 'No high-pressure that voids manufacturer warranties. We use a low-pressure soft wash process approved by ARMA.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Zap,
    title: 'Kills Algae at the Root',
    description: 'Our biodegradable treatments eliminate Gloeocapsa magma — the bacteria behind those ugly black streaks — down to the spore.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: Home,
    title: 'Extends Roof Life',
    description: 'Algae and moss eat away at asphalt shingles. A proper cleaning can add years of life and protect your biggest investment.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: Award,
    title: 'OSHA Certified Crew',
    description: 'Every technician is trained, background-checked, and OSHA compliant. We are fully insured for your peace of mind.',
    color: 'text-slate-700',
    bg: 'bg-slate-100',
  },
];

const whyNow = [
  'Summer heat accelerates algae and moss growth',
  'Catching damage early prevents costly repairs',
  'Clean roofs reflect heat better, lowering energy bills',
  'Prepare your home for the season at a lower rate',
];

const reviews = [
  {
    name: 'Jennifer M.',
    location: 'Great Falls, VA',
    rating: 5,
    text: 'Skywash removed years of black streaks from my roof in a single visit. The crew was professional and the results were incredible.',
  },
  {
    name: 'David T.',
    location: 'McLean, VA',
    rating: 5,
    text: 'I was amazed at the transformation. My 15-year-old roof looks brand new. Highly recommend their soft wash process.',
  },
  {
    name: 'Rachel S.',
    location: 'Ashburn, VA',
    rating: 5,
    text: 'Fast, thorough, and affordable. They explained everything before starting and the roof has stayed clean for months.',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export function ScottSpecialPage() {
  const [formVisible, setFormVisible] = useState(false);

  const scrollToForm = () => {
    setFormVisible(true);
    setTimeout(() => {
      document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-28 pb-24 overflow-hidden bg-gradient-to-br from-slate-900 via-[#1a3c75] to-[#0e2a5c] text-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-24 w-[400px] h-[400px] bg-sky-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-amber-400 text-amber-900 px-5 py-2 rounded-full text-sm font-bold mb-8 shadow-lg">
              <Clock size={16} />
              Exclusive Summer Special — Limited Slots Available
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight">
              Professional Roof Washing
              <span className="block text-sky-300 mt-2">Starting at $349</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/85 mb-10 max-w-3xl mx-auto leading-relaxed">
              Eliminate black streaks, moss, and algae with our safe soft wash treatment. Protect your roof and restore your home's curb appeal before summer.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToForm}
                className="bg-sky-400 hover:bg-sky-300 text-slate-900 font-bold text-lg px-10 py-4 rounded-xl shadow-xl hover:shadow-sky-400/30 transition-all duration-200 hover:-translate-y-0.5"
              >
                Claim This Special
              </button>
              <a
                href="tel:7037550865"
                className="flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold text-lg px-10 py-4 rounded-xl transition-all duration-200 hover:bg-white/10"
              >
                <Phone size={20} />
                (703) 755-0865
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-sky-600 text-white py-5">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm font-semibold tracking-wide">
          <span className="flex items-center gap-2"><CheckCircle size={16} /> OSHA Certified</span>
          <span className="flex items-center gap-2"><CheckCircle size={16} /> Fully Insured</span>
          <span className="flex items-center gap-2"><CheckCircle size={16} /> FAA Part 107 Certified</span>
          <span className="flex items-center gap-2"><CheckCircle size={16} /> W-2 Employees Only</span>
          <span className="flex items-center gap-2"><CheckCircle size={16} /> Northern Virginia Local</span>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">See the Difference</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Drag the slider to reveal real results from our roof soft wash process.</p>
          </motion.div>
          <DynamicBeforeAfterSlider
            serviceType="roof"
            fallbackBefore="roof-dirty.jpg"
            fallbackAfter="roof-clean.jpg"
          />
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Why Skywash?</h2>
            <p className="text-xl text-slate-600">The safest, most effective roof cleaning in Northern Virginia.</p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <motion.div key={b.title} variants={fadeInUp} className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`w-12 h-12 ${b.bg} rounded-xl flex items-center justify-center mb-5`}>
                    <Icon className={b.color} size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{b.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{b.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why book now */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white rounded-2xl shadow-xl p-10 border-2 border-amber-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                <AlertTriangle className="text-amber-600" size={22} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Why Book Before Summer?</h2>
            </div>
            <ul className="space-y-4">
              {whyNow.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-amber-500 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-slate-100">
              <p className="text-slate-500 text-sm">
                <strong className="text-slate-700">Note:</strong> Pricing starting at $349 for standard single-story homes up to 2,000 sq ft. Larger homes, steep pitches, or heavy moss coverage may require an adjusted quote.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">What Homeowners Say</h2>
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <p className="text-slate-500">5.0 average across Google & Yelp</p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {reviews.map((r) => (
              <motion.div key={r.name} variants={fadeInUp} className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-6 italic">"{r.text}"</p>
                <div>
                  <p className="font-bold text-slate-900">{r.name}</p>
                  <p className="text-slate-500 text-sm">{r.location}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section id="quote-form" className="py-24 bg-gradient-to-br from-[#1a3c75] to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-sky-400/20 border border-sky-400/40 text-sky-300 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <Clock size={16} />
              Summer Roof Washing Special
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get Your Free Quote</h2>
            <p className="text-xl text-white/80">Fill out the form and we'll reach out within one business day to confirm your appointment.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
          >
            <div className="bg-sky-50 border border-sky-200 rounded-xl p-5 mb-8">
              <p className="text-sky-900 text-sm leading-relaxed">
                <strong>Summer Special:</strong> Mention this page when you call or submit the form to lock in our summer roof washing rate starting at $349.
              </p>
            </div>
            <ResidentialLeadForm />
          </motion.div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-sky-600 text-white py-10 text-center">
        <p className="text-xl font-semibold mb-3">Ready to schedule? Call us directly.</p>
        <a href="tel:7037550865" className="inline-flex items-center gap-3 bg-white text-sky-700 font-bold text-2xl px-10 py-4 rounded-xl shadow-lg hover:bg-sky-50 transition-colors">
          <Phone size={28} />
          (703) 755-0865
        </a>
      </section>
    </div>
  );
}
